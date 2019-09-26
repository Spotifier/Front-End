import React from "react";
import { connect } from "react-redux";
import { getDashboard, addToSaved } from '../store/actions'
import Graph from "./GraphComponents/Graph";

const SongContainer = ({ song, dashboard, getDashboard, addToSaved }) => {
    return (
        <>
        <div className="song-data">
            <div className="song-info">
                <div className="details">
                	<h2>Song</h2>
                	<hr />
                	<p>Artist: <em>{song.artist_name}</em></p>
                	<p>Track: <em>{song.track_name}</em></p>
                	<p>Duration: {Math.floor((song.duration_ms / 1000)/ 60)}:{song.duration_ms % 60 < 10 && "0"}{song.duration_ms % 60} </p>
                </div>

                <iframe title="spotify-player" className="spotify-player" src={`https://open.spotify.com/embed/track/${song.track_id}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                <button onClick={() =>  addToSaved(song)} className="save-song-btn">Save Song</button>
            </div>

            <div className="song-recommendations">
                <h2>Similar tracks you may enjoy:</h2>
                <hr />
                {dashboard.similiarTracks.map(track => <p style={{cursor: 'pointer'}} onClick={() => {getDashboard(track)}} key={track.track_id}>{track.track_name} - {track.artist_name}</p>)}
            </div>
        </div>

            <div className="song-graph">
                <Graph song={song} />
            </div>
        </>

    );
}

export default connect(state => ({...state}), { getDashboard, addToSaved })(SongContainer);