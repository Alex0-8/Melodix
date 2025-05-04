import React from "react";
import Song from "../Song/song"
import useFetchSongs from "../../hooks/UseFetchSongs";
import { Link } from "react-router-dom";
import loadingGif from "../../img/loading5.gif"
import randomSvg from "../../img/random.svg"
import { AddToLibraryBtn, RandomBtn, ResultsContainer, RetryBtn, SongContainer } from "./styles";
import { useDispatch } from "react-redux";
import { addSong } from "../../redux/libraryActions";


// obtiene el endpoint para el usefetchsong, el searchterm para mostrar cuando no se pudo encontrar al 
// artista y la funcion del boton de artista aleatorio
const SearchResults = ({searchRandom, searchTerm, endPoint}) => { 
    const {songs, isLoading, error, refetch} = useFetchSongs(endPoint);
    const dispatch = useDispatch(); // usa el hook useDispatch para obtener la funcion del boton de añadir a la biblioteca

    const renderSongs = () => (
        <ResultsContainer>
            <div>
                <h2>Resultados de busqueda</h2>
            </div>
            {songs.map(song => {
                const {idAlbum, strAlbum, strArtist, strLabel} = song;

                return ( //pone a cada resultado de la bisqueda dentro de un div
                    <SongContainer key={idAlbum} className="songs">
                        <Song name={strLabel} artist={strArtist} album={strAlbum} />
                        <Link to={`/song_details/${idAlbum}`}>Detalles</Link> {/* usa el id del album como parametro de song details*/}
                        <AddToLibraryBtn className="add-to-library" onClick={() => dispatch(addSong(song))} >Agregar a mi biblioteca</AddToLibraryBtn>
                        {console.log(songs)}
                    </SongContainer>
                )
            })}
        </ResultsContainer>
    );

    const renderContent = () => {
        if(isLoading) return <ResultsContainer><img src={loadingGif} alt="Cargando..." /></ResultsContainer>
        if(error) return <ResultsContainer hasError><h2>Error al cargar</h2><RetryBtn onClick={refetch}>Reintentar</RetryBtn></ResultsContainer>;
        if(!isLoading && songs.length === 0) return <ResultsContainer notFound><h2>No se encontró: {searchTerm}</h2><RandomBtn onClick={searchRandom}><img src={randomSvg} alt="Buscar artista aleatorio"></img></RandomBtn></ResultsContainer>
        return renderSongs();
    }

    return renderContent();
}

export default SearchResults;