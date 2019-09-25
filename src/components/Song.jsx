import React from 'react';
import {Link} from 'react-router-dom';

const Song = props =>{

    const {song} = props;

    return(
        <div className="song">
            <p className="artist">Artist: <em>{song.artist_name}</em></p>
            <p className="track">Track: <em>{song.track_name}</em></p>
            <p className="duration">Duration: {Math.floor((song.duration_ms / 1000)/ 60)}:{song.duration_ms % 60 < 10 && "0"}{song.duration_ms % 60} </p>
            <div className="button-container">
                <Link to={`/dashboard/track/${song.track_id}`}><button className="view-track">View Track in Dashboard</button></Link>
                <button className="remove-track">Remove Track</button>
            </div>
            
        </div>
    );
};

export default Song;