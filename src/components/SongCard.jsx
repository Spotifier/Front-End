import React from "react";

const SongCard = ({ song }) => {
    return (
    <div className="song-card">
        <h2>{song.artist_name}</h2>
        <p><em>{song.track_name}</em></p>
        <p>Duration: {Math.floor((song.duration_ms / 1000)/ 60)}:{song.duration_ms % 60 < 10 && "0"}{song.duration_ms % 60} </p>
        <button className="save-song-btn">Save Song</button>
    </div>);
}

export default SongCard;