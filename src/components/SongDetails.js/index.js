import { useParams } from 'react-router-dom';
import loadingGif from "../../img/loading5.gif";
import { AlbumImg, DetailsDescription, LoadingImg, PageSongdetails } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs } from '../../redux/slices/searchSlice';
import { useEffect } from 'react';

const SongDetails = () => {
    const {id} = useParams(); 
    const dispatch = useDispatch();    
    const {results: songs, loading: isLoading, error} = useSelector(state => state.results);
    console.log(songs);
    const albumData = songs[0];

    useEffect(() => {
        dispatch(fetchSongs(`album.php?m=${id}`));
    }, [id, dispatch]);

    const renderSong = () => (
        <PageSongdetails>
            <h2>Álbum: {albumData.strAlbum}</h2>
            {albumData.strAlbumThumb && (
                <AlbumImg 
                    src={albumData.strAlbumThumb} 
                    alt={albumData.strAlbum}/>
            )}
            <p><span>Artista:</span> {albumData.strArtist || "No hay datos disponibles"}</p>
            <p><span>Año:</span> {albumData.intYearReleased || "No hay datos disponibles."}</p>
            <p><span>Género:</span> {albumData.strGenre || "No hay datos disponibles."}</p>
            <DetailsDescription><span>Descripción:</span> {albumData.strDescriptionEN || "No hay descripcion disponible"}</DetailsDescription> {/*si la descripcion está vacia muestra un mensaje*/}
        </PageSongdetails>
    )

    const renderContent = () => {
        if(isLoading) return <PageSongdetails><LoadingImg src={loadingGif} alt='Cargando...' /></PageSongdetails>;
        if(error) return <PageSongdetails><p>Error al cargar</p></PageSongdetails>;
        if(!albumData) return <PageSongdetails><p>No se encontró el album</p></PageSongdetails>;
        return renderSong();
    }

    return renderContent();
}

export default SongDetails;