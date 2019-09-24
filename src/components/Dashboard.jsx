import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Search from './Search';

const Dashboard = ({match, search}) =>{

    const [currentSearch, setCurrentSearch] = useState();
    console.log(search);
    const testEvent = searchField =>{
        console.log(`Searching for information in search bar.. ${searchField.value}`);
        setCurrentSearch(searchField.value);
    };


    return(
        <div className="dashboard-wrapper">
            <Search type="music" placeholder="Search for a song" changeEvent={testEvent} eventTimer="800"/>
            {currentSearch && <div className="searchResultTitle"><h2>Search results for {currentSearch}:</h2></div>}

            { search.songList.map(song => <p>{song.track_name}</p>)}
            

            {/* <Route path={`${match.url}/profile`} render={ ()=>{
                // Display Profile Component
                return(<h2>Profile Component</h2>);
            }} /> */}

            <Route path={`${match.url}/songs`} render={ () =>{
                //Display Saved Songs Component
                return(<h2>Saved Songs Component</h2>);
            }} />
        </div>
    );
};

export default connect(({search}) => ({search}), {})(Dashboard);