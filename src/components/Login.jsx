import React from 'react';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Login = ({dashboard}) =>{
    return(
        <div className="login-page">
            { dashboard.currentUser ? <Redirect to='/dashboard'/> : <LoginForm />}
        </div>
        
    );
};

export default connect((state) => ({...state}), {})(Login);