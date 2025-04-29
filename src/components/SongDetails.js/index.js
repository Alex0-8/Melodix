import { useParams } from 'react-router-dom';
import useFetchSongs from '../../hooks/UseFetchSongs';
import loadingGif from "../../img/loading5.gif";
import { AlbumImg, DetailsDescription, LoadingImg, PageSongdetails } from './styles';

const SongDetails = () => {
    const {id} = useParams(); 
    const {songs, isLoading, error} = useFetchSongs(`album.php?m=${id}`); // usa el parametro id para darselo a usefetch songs
    const albumData = songs[0];

    const renderSong = () => (
        <PageSongdetails>
            <h2>Álbum: {albumData.strAlbum}</h2>
            {albumData.strAlbumThumb && (
                <AlbumImg 
                    src={albumData.strAlbumThumb} 
                    alt={albumData.strAlbum}/>
            )}
            <p><span>Artista:</span> {albumData.strArtist}</p>
            <p><span>Año:</span> {albumData.intYearReleased}</p>
            <p><span>Género:</span> {albumData.strGenre}</p>
            <DetailsDescription><span>Descripción:</span> {albumData.strDescriptionEN || "No hay descripcion disponible"}</DetailsDescription> {/*si la descripcion está vacia muestra un mensaje*/}
        </PageSongdetails>
    )

    const renderContent = () => {
        if(isLoading) return <section className='page-song-details'><LoadingImg src={loadingGif} alt='Cargando...' /></section>;
        if(!albumData) return <section><p>No se encontró el album</p></section>;
        if(error) return <section className="page-song-details"><p>Error al cargar</p></section>;
        return renderSong();
    }

    return renderContent();
}

export default SongDetails;