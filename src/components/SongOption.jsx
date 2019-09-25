import React from "react";

const SongOption = props => {

    const selectSong = () => {
        props.setSongOptionSelected(true);
        props.setSongSelected(props.song);
    }

    return (<div className="song-option" onClick={selectSong}>{props.song.track_name}</div>);
}

export default SongOption;