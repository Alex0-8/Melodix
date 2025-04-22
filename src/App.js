import React, {useEffect, useState} from 'react';
import Header from './components/Header/header';
import SearchResults from './components/SearchResults';
import UserLibrary from './components/UserLibrary';
import './styles.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import SongDetails from './components/SongDetails.js';

const App = () => {
  const location = useLocation(); //variable para poder ocultar el searchbar usando el uselocation de react router

  // useState para la biblioteca del usuario. Inicialmente vacia
  const [library, setLibrary] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [randomAlbum, setRandomAlbum] = useState('24')

  //funcion para manejar la busqueda poniendo lo que se escribio en la busqueda en el searchdata
  const handleSearch = (term) => {
    console.log("buscando: ", term)
    setSearchData(term);
  }

  //funcion para generar los 2 ultimos numeros del endpoint de un album
  const randomNum = () => {
    const firstNum = Math.floor(Math.random() * 10);
    const secondNum = Math.floor(Math.random() * 10);
    const finalNum = `${firstNum}${secondNum}`;
    setSearchData('')
    setRandomAlbum(finalNum);
  }

  //useEffect para mostrar un mensaje en la consola cada vez que se actualice la biblioteca
  useEffect(() => {
    console.log("Se ha actualizado la biblioteca")
  }, [library]);

  //funcion para agregar canciones a la biblioteca
  const addSongToLibrary = song => {
    setLibrary(prevLibrary => {
      if(prevLibrary.some(s => s.idAlbum === song.idAlbum)){ //condicional para evitar añadir canciones duplicadas
        return prevLibrary;
      }
      return[...prevLibrary, song];
    });
  };

  const removeSongFromLibrary = (id) => { // funcion para quitar una cancion de la biblioteca
    setLibrary(prevLibrary => prevLibrary.filter(song => song.idAlbum !== id));
  }

  return (
    <div className="App">
      <Header 
        //le pasa la funcion handle search como prop al search bar que se renderiza en el header
        onSearch={handleSearch} 
        hideSearch={location.pathname.startsWith('/song_details')}/> {/*le pasa la pagina de song-detail como prop al header*/}
      <Routes>

        <Route path='/' 
          element={
            <main>
              <UserLibrary 
                addedSong={library} 
                onRemove={removeSongFromLibrary} />

              <SearchResults 
                searchRandom={randomNum}
                searchTerm={searchData} 
                endPoint= {searchData ? `searchalbum.php?s=${encodeURIComponent(searchData)}` : `album.php?i=1120${randomAlbum}`} 
                onAdd={addSongToLibrary} />
            </main>
          } />
          
        <Route path='/song_details/:id' element={<SongDetails /> } />
      </Routes>
    </div>
  );   
}

export default App;