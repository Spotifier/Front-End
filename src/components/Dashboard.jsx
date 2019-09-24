import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Search from './Search';
import { getSearch } from '../store/actions';

const Dashboard = ({match, search, getSearch}) =>{

    const [currentSearch, setCurrentSearch] = useState();
    console.log(search);
    const testEvent = searchField =>{
        console.log(`Searching for information in search bar.. ${searchField.value}`);
        setCurrentSearch(searchField.value);
    };

    useEffect(() => {
        getSearch();
    }, [getSearch])

    if (search.loading) return <h1>loading...</h1>

    return(
        <div className="dashboard-wrapper">
            <Search type="music" placeholder="Search for a song" changeEvent={testEvent} eventTimer="800"/>
            {currentSearch && <div className="searchResultTitle"><h2>Search results for {currentSearch}:</h2></div>}

            { search.searchList.slice(0, 50).map(song => <p>{song.track_name}</p>)}
            

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

export default connect(({search}) => ({search}), { getSearch})(Dashboard);