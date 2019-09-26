import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSearch } from '../store/actions'
import Search from './Search';
import Saved from './Saved';

import SongContainer from "./SongContainer";
import SongOption from "./SongOption";

const Dashboard = ({ match, search, getSearch, dashboard }) => {
    const [songOptionSelected, setSongOptionSelected] = useState(false)

    const testEvent = searchField => {
        getSearch(searchField.value);
    };

    return (
        <div className="dashboard-wrapper">


            <div className="search-side">
                <div className="searchField">
                    <Search
                        type="music"
                        placeholder="Search for a song"
                        eventTimer="800"
                        changeEvent={testEvent}
                        songList={search.songList}
                    />
                </div>


                <div className="searchResults">
                    { search.searchList.map((song, index) => {
                        return <SongOption key={index} song={song} />
                        //  <p key={index}>{`Song: ${song.track_name} Artist: ${song.artist_name} Duration: ${Math.floor((song.duration_ms / 1000)/ 60)}:${(song.duration_ms % 60).toString().padStart(2,'0')}`}</p>
                    })}
                </div>

            </div>

            <div className="songProfile">
                {dashboard.currentSong&&<SongContainer song={dashboard.currentSong} />}
            </div>

            <Route path={`${match.url}/songs`} render={() => {
                //Display Saved Songs Component
                return (<Saved />);
            }} />
        </div>
    );
};

export default connect(( state ) => ({ ...state }), { getSearch })(Dashboard);