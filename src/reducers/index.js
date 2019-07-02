import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title : 'song1', duration: '4:04'},
        { title : 'song2', duration: '6:14'},
        { title : 'song3', duration: '5:54'},
        { title : 'song4', duration: '3:24'},
    ];
};

const selectedSongReducer = (selecedSong= null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selecedSong;
};

export default combineReducers ( {
    songs: songsReducer,
    selectedSong: selectedSongReducer
});