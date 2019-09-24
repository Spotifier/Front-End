import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/actions';
import { withFormik, Form, Field } from "formik";

const LoginForm = props =>{

    const handleSubmit = e => {
        e.preventDefault();
        props.login(e.target.value);
    }

    return (
        <div className="login-form-wrapper" onSubmit={handleSubmit}>
            <h2 className="login-form-title"><i className="fas fa-headphones fa-1x"></i> Login</h2>
            <Form>
                <label htmlFor="email">Email: </label>
                <Field type="text" name="email" id="email" placeholder="johndoe@unknown.app" />
                
                <label htmlFor="pass">Password: </label>
                <Field type="password" name="pass" id="pass" />
                
                <button type="submit">Login</button> 
            </Form>
            <p>If you don't have an account <Link to="/register"> click here to register</Link>.</p>
        </div>
    );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ email, password }){
        return {
            email: email || "",
            password: password || ""
        }
    },

    handleSubmit(e){
        e.preventDefault();
        
    }
})(LoginForm);

export default connect(({})=>({}), {login})(FormikLoginForm);