import React from 'react';
import {Route} from 'react-router-dom';

const Dashboard = ({match}) =>{
    return(
        <>
            <Route path={`${match.url}/profile`} render={ ()=>{
                // Display Profile Component
                return(<h2>Profile Component</h2>);
            }} />

            <Route path={`${match.url}/songs`} render={ () =>{
                //Display Saved Songs Component
                return(<h2>Saved Songs Component</h2>);
            }} />
        </>
    );
};

export default Dashboard;