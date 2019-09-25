import React, {useState} from 'react';

import Song from './Song';
import { dummyData } from '../store/local_data';
import { connect } from 'react-redux'

const Saved = props =>{
    
    const [savedSongs, setSavedSongs] = useState(dummyData);

    return (
        <div className="saved-wrapper">
            
            <div className="songs-saved-title">
                <h1>Saved Songs</h1>
            </div>
            
            <div className="songs-wrapper">
            {savedSongs.map((song, index) =>{
                return(<Song key={index} song={song}/>)
                })
            }
            </div>
        </div>
    );
};

export default connect((state) => ({...state}))(Saved);