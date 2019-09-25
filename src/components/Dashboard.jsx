import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchSongs } from '../store/actions'
import Search from './Search';
import Saved from './Saved';

import SongContainer from "./SongContainer";
import SongOption from "./SongOption";

const Dashboard = ({ match, search, searchSongs }) => {

    const [searchResult, setSearchResult] = useState([]);
    const [songSelected, setSongSelected] = useState('');
    const [songOptionSelected, setSongOptionSelected] = useState(false)
    const [matchingSongs, setMatchingSongs] = useState();

    const testEvent = searchField => {
        searchSongs(searchField.value.toLowerCase());
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
                        setSearchResult={setSearchResult}
                        setSongOptionSelected={setSongOptionSelected}
                        songOptionSelected={songOptionSelected}
                    />
                </div>


                <div className="searchResults">
                    { search.searchList.slice(0,30).map((song, index) => {
                        return <SongOption key={index} song={song} setSongSelected={setSongSelected} setSongOptionSelected={setSongOptionSelected} />
                        //  <p key={index}>{`Song: ${song.track_name} Artist: ${song.artist_name} Duration: ${Math.floor((song.duration_ms / 1000)/ 60)}:${(song.duration_ms % 60).toString().padStart(2,'0')}`}</p>
                    })}
                </div>

            </div>

            <div className="songProfile">
                {songOptionSelected && <SongContainer song={songSelected} />}
            </div>

            <Route path={`${match.url}/songs`} render={() => {
                //Display Saved Songs Component
                return (<Saved />);
            }} />
        </div>
    );
};

export default connect(( state ) => ({ ...state }), { searchSongs })(Dashboard);