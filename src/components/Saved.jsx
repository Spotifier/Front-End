import React, { useEffect } from 'react';
import Song from './Song';
import { connect } from 'react-redux'
import { getSaved } from '../store/actions'

const Saved = ({user, getSaved}) =>{
    useEffect(() => {
        getSaved()
    }, [getSaved])
    return (
        <div className="saved-wrapper">
            
            <div className="songs-saved-title">
                <h1>Saved Songs</h1>
            </div>
            
            <div className="songs-wrapper">
            {user.savedList.map((song, index) =>{
                return(<Song key={index} song={song}/>)
                })
            }
            </div>
        </div>
    );
};

export default connect((state) => ({...state}),{ getSaved })(Saved);