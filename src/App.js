import React, {useState} from 'react';
import Header from './components/Header/header';
import SearchResults from './components/SearchResults';
import UserLibrary from './components/UserLibrary';
import { Route, Routes, useLocation } from 'react-router-dom';
import SongDetails from './components/SongDetails.js';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyles.js';
import Theme from './theme';

const App = () => {
  const location = useLocation(); //variable para poder ocultar el searchbar usando el uselocation de react router

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

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
        <div className="App">
          <Header 
            //le pasa la funcion handle search como prop al search bar que se renderiza en el header
            onSearch={handleSearch} 
            hideSearch={location.pathname.startsWith('/song_details')}/> {/*le pasa la pagina de song-detail como prop al header*/}
          <Routes>

            <Route path='/' 
              element={
                <main>
                  <UserLibrary />

                  <SearchResults 
                    searchRandom={randomNum}
                    searchTerm={searchData} 
                    endPoint= {searchData ? `searchalbum.php?s=${encodeURIComponent(searchData)}` : `album.php?i=1120${randomAlbum}`} />
                </main>
              } />
              
            <Route path='/song_details/:id' element={<SongDetails /> } />
          </Routes>
        </div>
    </ThemeProvider>
  );   
}

export default App;