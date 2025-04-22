import React from 'react';
import './SongStyles.css';


const Song = ({name, artist, album}) => { // contenedor de las canciones
    return (
        <div className='song-details'>
            <p><span>Nombre:</span> {name}</p>
            <p><span>Artista:</span> {artist}</p>
            <p><span>Álbum:</span> {album}</p>
        </div>
    )
}

export default Song;