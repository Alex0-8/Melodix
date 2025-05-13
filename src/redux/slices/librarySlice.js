import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const librarySlice = createSlice({
    name: 'library',
    initialState,    
    reducers: {
        addSong: (state, action) => {
            const exist = state.some(song => song.id === action.payload.id);
            if(!exist){
                console.log('se ha añadido una cancion a la biblioteca');
                state.push(action.payload)
            }
        },
        removeSong: (state, action) => {
            console.log('se ha eliminado una cancion de la biblioteca')
            return state.filter(song => song.id !== action.payload);
        }
    }
});

export const {addSong, removeSong} = librarySlice.actions;
export default librarySlice.reducer;