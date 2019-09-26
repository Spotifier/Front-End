import React from "react";
import { getDashboard } from '../store/actions'
import { connect } from 'react-redux'

const SongOption = props => {

    const selectSong = () => {
        props.getDashboard(props.song);
        let searchField = document.querySelector(`#musicSearch`);
        searchField.value = '';
    }

    return (<div style={{overflow: 'hidden'}} className="song-option" onClick={selectSong}>{`Song: ${props.song.track_name}`} {`Arist: ${props.song.artist_name}`}</div>);
}

export default connect(state => ({...state}), { getDashboard })(SongOption);