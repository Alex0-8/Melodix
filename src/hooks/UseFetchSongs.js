import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const useFetchSongs = (endPoint) => { // obtiene los datos de la url con el endpoint proporcionado
    const [songsState, setSongsState] = useState({songs: [], isLoading: true, error: null});
    const [reloadTrigger, setReloadTrigger] = useState(0);

    const refetch = useCallback(() => {
        setReloadTrigger(prev => prev + 1);
    }, []);

    useEffect(() => {
        if(!endPoint) return;
        setSongsState({ songs: [], isLoading: true, error: null });


        const fetchSongs = async () => {
            try {
                console.log("usando el endpoint: ", endPoint);
                const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/${endPoint}`);
                let albums = response.data.album || [];

                //un segundo filtro ya que la api siempre devuelve daft punk sin importar lo que escriba
                //Se extrae el termino de busqueda del artista desde el endpoint
                const match = endPoint.match(/s=(.*)/);
                const searchedArtist = match ? decodeURIComponent(match[1]).toLowerCase() : '';

                //filtra solo resultados que contengan ese artista
                albums = albums.filter(album =>
                    album.strArtist && album.strArtist.toLowerCase().includes(searchedArtist)
                );
                //este filtro no funciona si se usa el boton de artista random

                setSongsState({ songs: albums, isLoading: false, error: null });
            } catch (error) {
                setSongsState({ songs: [], isLoading: false, error: `Error al buscar` });
            }
        };

        fetchSongs();
    }, [endPoint, reloadTrigger]);

    return {...songsState, refetch};
}

export default useFetchSongs;