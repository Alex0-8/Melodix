import React from "react";
import Song from "../Song/song";
import { Link } from "react-router-dom";
import { LibraryContainer, LibraryHeader, RemoveFromBtn } from "./styles";
import { SongContainer } from "../SearchResults/styles";

const UserLibrary = ({addedSong, onRemove}) => {
    return (
        <LibraryContainer>
            <LibraryHeader>
                <h2>Mi biblioteca</h2>
                <i><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg></i>
            </LibraryHeader>
            {addedSong.length === 0 ? (
                <p>No hay canciones en tu biblioteca.</p>
            ): (
                addedSong.map(song => { //pone a cada cancion de 'songs' dentro de un div 
                    const {idAlbum, strArtist, strLabel, strAlbum} = song;
        
                    return (
                    <SongContainer key={idAlbum} className='songs'>
                        <Song name={strLabel} artist={strArtist} album={strAlbum} />
                        <Link to={`/song_details/${idAlbum}`}>Detalles</Link> {/*link para ir a la pagina de detalles de la cancion */}
                        <RemoveFromBtn onClick={() => onRemove(song.idAlbum)}>Quitar de la biblioteca</RemoveFromBtn>
                    </SongContainer>)
                })
            )}
        </LibraryContainer>
    )
}

export default UserLibrary;