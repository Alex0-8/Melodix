export const addSong = (song) => {
    return{
        type: "ADD_SONG",
        payload: {
            id: song.idAlbum,
            artist: song.strArtist,
            label: song.strLabel,
            album: song.strAlbum
        }
    }
}

export const removeSong = (songID) => {
    return{
        type: "REMOVE_SONG",
        payload: songID,
    }
}