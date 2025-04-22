import React from "react";
import Song from "../Song/song"
import './SearchResultsStyles.css';
import useFetchSongs from "../../hooks/UseFetchSongs";
import { Link } from "react-router-dom";
import loadingGif from "../../img/loading5.gif"
import randomSvg from "../../img/random.svg"


// obtiene la funcion del boton de app.js, el endpoint para el usefetchsong, el searchterm para mostrar cuando no se pudo encontrar al 
// artista y la funcion del boton de artista aleatorio
const SearchResults = ({searchRandom, searchTerm, endPoint, onAdd}) => { 
    const {songs, isLoading, error} = useFetchSongs(endPoint);

    const renderSongs = () => (
        <section className="search-results">
            <div>
                <h2>Resultados de busqueda</h2>
            </div>
            {songs.map(song => {
                const {idAlbum, strAlbum, strArtist, strLabel} = song;

                return ( //pone a cada resultado de la bisqueda dentro de un div
                    <div key={idAlbum} className="songs">
                        <Song name={strLabel} artist={strArtist} album={strAlbum} />
                        <Link to={`/song_details/${idAlbum}`}>Detalles</Link> {/* usa el id del album como parametro de song details*/}
                        <button className="add-to-library" onClick={() => onAdd(song)} >Agregar a mi biblioteca</button>
                        {console.log(songs)}
                    </div>
                )
            })}
        </section>
    );

    const renderContent = () => {
        if(isLoading) return <section className="search-results"><img src={loadingGif} alt="Cargando..." /></section>
        if(error) return <section className="search-results"><p>Error al cargar</p></section>;
        if(!isLoading && songs.length === 0) return <section className="search-results"><h2>No se encontró: {searchTerm}</h2><button className="random-button" onClick={searchRandom}><img src={randomSvg} alt="Buscar artista aleatorio"></img></button></section>
        return renderSongs();
    }

    return renderContent();
}

export default SearchResults;