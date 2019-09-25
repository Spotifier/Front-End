import React from "react";

const SongOption = props => {

    const selectSong = () => {
        props.setSongOptionSelected(true);
        props.setSongSelected(props.song);

        let searchField = document.querySelector(`#musicSearch`);
        searchField.value = '';

    }

    return (<div className="song-option" onClick={selectSong}>{`Song: ${props.song.track_name}`} {`Arist: ${props.song.artist_name}`}</div>);
}

export default SongOption;