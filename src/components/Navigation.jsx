import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = (props) =>{
    return (
        <nav className="navigation">
            <Link to="/dashboard/"><div className="logo">
                <i className="fab fa-spotify fa-1x"></i><h2> Spotifier</h2>
            </div></Link>
                {localStorage.getItem('token')&&<div className="navigation-links">
                <Link to="/dashboard/">Dashboard</Link>
                <Link to="/dashboard/saved/">Saved Songs</Link>
                <button onClick={() => { 
                    localStorage.removeItem('token');
                    props.history.push('/login');
                }}
                >Logout</button>
            </div>}
        </nav>
    );
};

export default Navigation;