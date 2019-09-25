import React from 'react';
import { connect } from 'react-redux'

const Saved = props =>{
    return (
        <div className="saved-wrapper">
            <h2>{`"${props.use.currentUser}"'s`} Saved Songs</h2>
            <p>Totally list saved songs here</p>
        </div>
    );
};

export default connect((state) => ({...state}))(Saved);