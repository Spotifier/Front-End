import React from 'react';
import RegisterForm from './RegisterForm';
import { Redirect } from 'react-router-dom';

const Register = ({history}) =>{
    return(
        <div className="register-wrapper">
            <div className="register-page">
                {localStorage.getItem('token') ? <Redirect to='/dashboard'/> : <RegisterForm history={history}/>}
            </div>
        </div>
            
    );
};

export default Register;