const initialState = [];

const libraryReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_SONG":
            // evita añadir una cancion que ya existe en la biblioteca
            const exist = state.some(song => song.id === action.payload.id) 
            if(exist) return state;
            console.log("Se ha añadido una cancion a la biblioteca.")
            return [...state, action.payload];
        
        case "REMOVE_SONG":
            console.log("Se ha eliminado una cancion de la biblioteca.");
            return state.filter(song => song.id !== action.payload);
            
        default:
            return state;
    }
}

export default libraryReducer;