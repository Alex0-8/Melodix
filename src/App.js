import React from 'react';
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

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
        <div className="App">
          <Header  
            hideSearch={location.pathname.startsWith('/song_details')}/> {/*le pasa la pagina de song-detail como prop al header*/}
          <Routes>

            <Route path='/' 
              element={
                <main>
                  <UserLibrary />
                  <SearchResults />
                </main>
              } />
              
            <Route path='/song_details/:id' element={<SongDetails /> } />
          </Routes>
        </div>
    </ThemeProvider>
  );   
}

export default App;