import { useParams } from 'react-router-dom';
import useFetchSongs from '../../hooks/UseFetchSongs';
import './SongDetails.css';
import loadingGif from "../../img/loading5.gif";

const SongDetails = () => {
    const {id} = useParams(); 
    const {songs, isLoading, error} = useFetchSongs(`album.php?m=${id}`); // usa el parametro id para darselo a usefetch songs
    const albumData = songs[0];

    const renderSong = () => (
        <section className='page-song-details'>
            <h2>Álbum: {albumData.strAlbum}</h2>
            {albumData.strAlbumThumb && (
                <img className='album-img' 
                    src={albumData.strAlbumThumb} 
                    alt={albumData.strAlbum}/>
            )}
            <p>Artista: {albumData.strArtist}</p>
            <p>Año: {albumData.intYearReleased}</p>
            <p>Género: {albumData.strGenre}</p>
            <p className='description'>Descripción: {albumData.strDescriptionEN || "No hay descripcion disponible"}</p> {/*si la descripcion está vacia muestra un mensaje*/}
        </section>
    )

    const renderContent = () => {
        if(isLoading) return <section className='page-song-details'><img className='loading-gif' src={loadingGif} alt='Cargando...' /></section>;
        if(!albumData) return <section><p>No se encontró el album</p></section>;
        if(error) return <section className="page-song-details"><p>Error al cargar</p></section>;
        return renderSong();
    }

    return renderContent();
}

export default SongDetails;