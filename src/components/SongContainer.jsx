import React from "react";

import Graph from "./GraphComponents/Graph";

const SongContainer = ({ song }) => {
console.log(song);
    return (
        <>
        <div className="song-data">
            <div className="song-info">
                <h2>Song</h2>
                <hr />
                <p>Artist: <em>{song.artist_name}</em></p>
                <p>Track: <em>{song.track_name}</em></p>
                <p>Duration: {Math.floor((song.duration_ms / 1000)/ 60)}:{song.duration_ms % 60 < 10 && "0"}{song.duration_ms % 60} </p>
                <button className="save-song-btn">Save Song</button>
            </div>

            <div className="song-recommendations">
                <h2>Similar tracks you may enjoy:</h2>
                <hr />
                <p> stuff and stuff </p>
            </div>
        </div>

            <div class="song-graph">
                <Graph song={song} />
            </div>
        </>

    );
}

export default SongContainer;