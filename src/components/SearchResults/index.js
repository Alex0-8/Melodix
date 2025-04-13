import React from "react";
import Song from "../Song/song"
import './SearchResultsStyles.css';


const SearchResults = ({songs, onAdd}) => { // obtiene la lista de las canciones y la funcion del boton del app.js
    return(
        <section className="search-results">
            <div>
                <h2>Resultados de búsqueda</h2>
            </div>
            {songs.map(song => ( //itera sobre la lista de canciones y pone a cada una dentro de un div
                <div key={song.id} className="songs">
                    <Song name={song.name} artist={song.artist} album={song.album} />
                    <button className="add-to-library" onClick={() => onAdd(song)} >Agregar a mi biblioteca</button>
                </div>
            ))}
        </section>
    )
}

export default SearchResults;