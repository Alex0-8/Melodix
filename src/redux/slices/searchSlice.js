import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FAILED, IDLE, LOADING, SUCCEDED } from "./status";

export const fetchSongs = createAsyncThunk('songs/fetchSongs', async (endPoint, thunkAPI) => {
    try{
        console.log('usando el endpoint: ', endPoint)
        const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/${endPoint}`)
        let albums = response.data.album || [];

        if(endPoint.includes('searchalbum.php')){
            //un filtro condicional ya que la api siempre devuelve daft punk sin importar lo que escriba
            //Se extrae el termino de busqueda del artista desde el endpoint
            const match = endPoint.match(/s=(.*)/);
            const searchedArtist = match ? decodeURIComponent(match[1]).toLowerCase() : '';

            //filtra solo resultados que contengan ese artista
            albums = albums.filter(album =>
                album.strArtist && album.strArtist.toLowerCase().includes(searchedArtist)
            );
            //este filtro no funciona si se usa el boton de artista random
        }
                
            return albums;
    }catch(error){
        return thunkAPI.rejectWithValue('error al obtener datos de la api');
    }
});

const songsSlice = createSlice({
    name: 'results',
    initialState: {
        status: IDLE,
        results: [],
        loading: false,
        error: null,
        searchTerm: '',
        randomId: '24',
    },
    reducers: {
        resetResults: (state) => {
            state.results = [];
            state.loading = false;
            state.error = null;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            state.randomId = null; // evita usar ambos endpoints cuando se realiza una busqueda
        },
        setRandomId: (state, action) => {
            state.randomId = action.payload;
            state.searchTerm = '';
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchSongs.pending, (state) => {
                console.log('pending: ', state)
                state.loading = true;
                state.error = null;
                state.status = LOADING;
            })
            .addCase(fetchSongs.fulfilled, (state, action) => {
                state.results = action.payload;
                console.log('fulfieled: ', state, 'action: ', action)
                state.loading = false;
                state.status = SUCCEDED;
            })
            .addCase(fetchSongs.rejected, (state, action) => {
                state.loading = false;
                state.results = [];
                state.error = action.payload || 'HA OCURRIDO UN ERROR';
                state.status = FAILED;
                console.log('failed: ', state, 'action: ', action)
            })
    }
});

export const {resetResults, setSearchTerm, setRandomId} = songsSlice.actions;

const { reducer: resultsReducer } = songsSlice
export default resultsReducer;