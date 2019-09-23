import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import Search from './Search';

const Dashboard = ({match}) =>{

    const [currentSearch, setCurrentSearch] = useState();

    const testEvent = searchField =>{
        console.log(`Searching for information in search bar.. ${searchField.value}`);
        setCurrentSearch(searchField.value);
    };


    return(
        <div className="dashboard-wrapper">
            <Search type="music" placeholder="Search for a song" changeEvent={testEvent} eventTimer="800"/>
            {currentSearch && <div className="searchResultTitle"><h2>Search results for {currentSearch}:</h2></div>}

            

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

export default Dashboard;