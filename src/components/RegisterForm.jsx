import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { register} from '../store/actions'

const RegisterForm = props =>{
    const handleSubmit = e => {
        e.preventDefault();
        props.register(e.target.value)
    }
    return (
        <div className="login-form-wrapper" onSubmit={handleSubmit}>
            <h2 className="login-form-title"><i className="fas fa-headphones fa-1x"></i> Register</h2>
            <form>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" placeholder="johndoe@unknown.app" />
                
                <label htmlFor="pass">Password: </label>
                <input type="password" name="pass" id="pass" />
                
                <button type="submit">Login</button> 
            </form>
            <p>If you already have an account <Link to="/login"> click here to Login</Link>.</p>
        </div>
    );
}

export default connect(({})=>({}), {register})(RegisterForm);