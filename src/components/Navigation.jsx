import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = (props) =>{
    return (
        <nav className="navigation">
            <div className="logo">
            <i class="fab fa-spotify fa-1x"></i><h2> Spotify Song Suggester</h2>
            </div>
                <div className="navigation-links">
                <Link to="/dashboard/">Dashboard</Link>
                <Link to="/dashboard/songs/">Saved Songs</Link>
                <Link to="/dashboard/profile/">Profile</Link>
            </div>
        </nav>
    );
};

export default Navigation;