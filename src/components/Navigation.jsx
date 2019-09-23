import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = (props) =>{
    return (
        <nav className="navigation">
            <div className="logo">
            <i className="fab fa-spotify fa-1x"></i><h2> Spotifire</h2>
            </div>
                {localStorage.getItem('token')&&<div className="navigation-links">
                <Link to="/dashboard/">Dashboard</Link>
                <Link to="/dashboard/saved/">Saved Songs</Link>
                <button onClick={() => { 
                    localStorage.removeItem('token');
                    props.history.push('/login');
                }}
                >Logout</button>
                {/* <Link to="/dashboard/profile/">Profile</Link> */}
            </div>}
        </nav>
    );
};

export default Navigation;