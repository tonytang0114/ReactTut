import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'No scrubs', duration: '4.05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:15'},
        {title: 'I Want it That Way', duration: '1:45'}
    ];
};

const selectedSongReducer = (selectSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectSong
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});