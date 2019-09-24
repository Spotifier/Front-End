import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions'

const Navigation = (props) =>{
    return (
        <nav className="navigation">
            <div className="logo">
            <i className="fab fa-spotify fa-1x"></i><h2> Spotifire</h2>
            </div>
                {props.dashboard.currentUser&&<div className="navigation-links">
                <Link to="/dashboard/">Dashboard</Link>
                <Link to="/dashboard/saved/">Saved Songs</Link>
                <button onClick={() => { 
                    props.logout()
                }}
                >Logout</button>
                {/* <Link to="/dashboard/profile/">Profile</Link> */}
            </div>}
        </nav>
    );
};

export default connect((state) => ({...state}), { logout })(Navigation);