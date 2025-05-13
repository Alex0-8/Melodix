import React, { useEffect } from "react";
import Song from "../Song/song"
import { Link } from "react-router-dom";
import loadingGif from "../../img/loading5.gif"
import randomSvg from "../../img/random.svg"
import retySvg from '../../img/refresh-cw.svg'
import { AddToLibraryBtn, RandomBtn, ResultsContainer, RetryBtn, SongContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../../redux/slices/librarySlice";
import { fetchSongs, setRandomId} from "../../redux/slices/searchSlice";


const SearchResults = () => { 
    const dispatch = useDispatch(); // usa el hook useDispatch para obtener la funcion del boton de añadir a la biblioteca
    const {results: songs, loading: isLoading, error} = useSelector(state => state.results);
    const {searchTerm, randomId} = useSelector(state => state.results)

    useEffect(() => {
        if(searchTerm) {
            dispatch(fetchSongs(`searchalbum.php?s=${encodeURIComponent(searchTerm)}`));
        } else if (randomId) {
            dispatch(fetchSongs(`album.php?i=1120${randomId}`))
        }
    }, [searchTerm, randomId, dispatch]);

    const handleRandom = () => {
        const randomNum = `${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;
        dispatch(setRandomId(randomNum));
    }

    const handleError = () => {
        if(searchTerm) {
            dispatch(fetchSongs(`searchalbum.php?s=${encodeURIComponent(searchTerm)}`));
        } else if (randomId) {
            dispatch(fetchSongs(`album.php?i=1120${randomId}`))
        }
    }

    const renderSongs = () => (
        <ResultsContainer>
            <div>
                <h2>Resultados de busqueda</h2>
            </div>
            {songs.map(song => {
                const {idAlbum, strAlbum, strArtist, strLabel} = song;

                const handleADD = () => {
                    dispatch(addSong ({
                        id: idAlbum,
                        artist: strArtist,
                        label: strLabel,
                        album: strAlbum
                    }));
                };

                return ( //pone a cada resultado de la bisqueda dentro de un div
                    <SongContainer key={idAlbum} className="songs">
                        <Song name={strLabel} artist={strArtist} album={strAlbum} />
                        <Link to={`/song_details/${idAlbum}`}>Detalles</Link> {/* usa el id del album como parametro de song details*/}
                        <AddToLibraryBtn className="add-to-library" onClick={handleADD} >Agregar a mi biblioteca</AddToLibraryBtn>
                        {console.log(songs)}
                    </SongContainer>
                )
            })}
        </ResultsContainer>
    );

    const renderContent = () => {
        if(isLoading) return <ResultsContainer><img src={loadingGif} alt="Cargando..." /></ResultsContainer>
        if(error) return <ResultsContainer hasError><h2>Error al cargar</h2><RetryBtn onClick={handleError}><img src={retySvg} alt="reintentar" /></RetryBtn></ResultsContainer>;
        if(!isLoading && songs.length === 0) return <ResultsContainer notFound><h2>No se encontró: {searchTerm}</h2><RandomBtn onClick={handleRandom}><img src={randomSvg} alt="Buscar artista aleatorio" /></RandomBtn></ResultsContainer>
        return renderSongs();
    }

    return renderContent();
}

export default SearchResults;