import React from "react";
import Song from "../Song/song";
import './UserLibraryStyles.css';

const UserLibrary = ({addedSong, onRemove}) => {
    return (
        <section className='library'>
            <div>
                <h2>Mi biblioteca</h2>
                <i><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg></i>
            </div>
            {addedSong.length === 0 ? (
                <p>No hay canciones en tu biblioteca.</p>
            ): (
                addedSong.map(song => ( //pone a cada cancion de 'songs' dentro de un div 
                    <div key={song.id} className='songs'>
                        <Song name={song.name} artist={song.artist} album={song.album} />
                        <button className="remove-from-library" onClick={() => onRemove(song.id)}>Quitar de la biblioteca</button>
                    </div>
                ))
            )}
        </section>
    )
}

export default UserLibrary;