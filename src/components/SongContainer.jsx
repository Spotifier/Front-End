import React from "react";

import Graph from "./GraphComponents/Graph";

const SongContainer = ({ song }) => {
console.log(song);
    return (
        <>
        <div className="song-container">
            <div className="song-info">
                <h2>Song</h2>
                <hr />
                <p>Artist: <em>{song.artist_name}</em></p>
                <p>Track: <em>{song.track_name}</em></p>
                <p>Duration: {Math.floor((song.duration_ms / 1000)/ 60)}:{song.duration_ms % 60 < 10 && "0"}{song.duration_ms % 60} </p>

                <iframe title="spotify-player" className="spotify-player" src={`https://open.spotify.com/embed/track/${song.track_id}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                <button className="save-song-btn">Save Song</button>
            </div>
            <div className="song-recommendations">
                <h2>Similar tracks you may enjoy:</h2>
                <hr />
                <p> stuff and stuff </p>
            </div>
            <Graph song={song} />
        </div>
            <div className="song-graph">
                <Graph song={song} />
            </div>
        </>
    );
}

export default SongContainer;