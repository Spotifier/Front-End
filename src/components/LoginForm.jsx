import React from 'react';
import {Link} from 'react-router-dom';

const LoginForm = props =>{
    return (
        <div className="login-form-wrapper">
            <h2 className="login-form-title"><i class="fas fa-headphones fa-1x"></i> Login</h2>
            <form>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" placeholder="johndoe@uknown.app" />
                
                <label htmlFor="pass">Password: </label>
                <input type="password" name="pass" id="pass" />
                
                <button type="submit">Login</button> 
            </form>
            <p>If you don't have an account <Link to="/register"> click here to register</Link>.</p>
        </div>
    );
}

export default LoginForm;