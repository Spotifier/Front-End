import React from 'react';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Login = ({user, history}) => {
    if(user.currentUser) return <Redirect to='/dashboard'/>
    return(
        <div className="login-wrapper">
          <div className="login-page">
            { window.localStorage.getItem('token') ? <Redirect to='/dashboard'/> : <LoginForm history={history}/>}
          </div>
        </div>
        
    );
};

export default connect((state) => ({...state}), {})(Login);