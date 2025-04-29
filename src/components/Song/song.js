import React from 'react';
import { SongDetails } from './styles';


const Song = ({name, artist, album}) => { // contenedor de las canciones
    return (
        <SongDetails>
            <p><span>Nombre:</span> {name}</p>
            <p><span>Artista:</span> {artist}</p>
            <p><span>Álbum:</span> {album}</p>
        </SongDetails>
    )
}

export default Song;