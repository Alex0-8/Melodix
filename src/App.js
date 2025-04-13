import React, {useEffect, useState} from 'react';
import Header from './components/Header/header';
import SearchResults from './components/SearchResults';
import UserLibrary from './components/UserLibrary';
import './styles.css';

const App = () => {
  //Lista de datos ficticios para los resultados de busqueda
  const [searchResults] = useState([
    {id: 1, name: "Luz de Neón", artist: "Aurora Vega", album: "Reflejos Urbanos"},
    {id: 2, name: "Ecos del Ayer", artist: "Sombra Lunar", album: "Sombras y Recuerdos"},
    {id: 3, name: "Caminos Paralelos", artist: "Esteban Cruz", album: "Destino Cruzado"},
    {id: 4, name: "Horizonte Azul", artist: "Zafiro", album: "Cielos Abiertos"},
    {id: 5, name: "Noche Estelar", artist: "Lía Nova", album: "Galaxia Interior"},
    {id: 6, name: "Volver a Empezar", artist: "Daniela Mar", album: "Renacer"},
  ]);

  // useState para la biblioteca del usuario. Inicialmente vacia
  const [library, setLibrary] = useState([]);

  //useEffect para mostrar un mensaje en la consola cada vez que se actualice la biblioteca
  useEffect(() => {
    console.log("Se ha actualizado la biblioteca")
  }, [library]);

  //funcion para agregar canciones a la biblioteca
  const addSongToLibrary = (song) => {
    setLibrary(prevLibrary => {
      if(prevLibrary.some(s => s.id === song.id)){ //condicional para evitar añadir canciones duplicadas
        return prevLibrary;
      }
      return[...prevLibrary, song];
    });
  };

  const removeSongFromLibrary = (id) => { // funcion para quitar una cancion de la biblioteca
    setLibrary(prevLibrary => prevLibrary.filter(song => song.id !== id));
  }

  return (
    <div className="App">
      <Header />

      <main>
        <UserLibrary addedSong={library} onRemove={removeSongFromLibrary} />
        <SearchResults songs={searchResults} onAdd={addSongToLibrary} />
      </main>
    </div>
  );   
}

export default App;