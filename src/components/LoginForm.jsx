import React from 'react';
import {Link} from 'react-router-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { login } from '../store/actions';


const LoginForm = ({values, errors, touched}) =>{

    return (
        <div className="login-form-wrapper">
            <h2 className="login-form-title"><i className="fas fa-headphones fa-1x"></i> Login</h2>
            <Form>

                {/* <label htmlFor="username">Username: </label> */}
                <Field type="text" className="form-user" name="username" id="username" placeholder="Username" />
                <div className="login-status">
                    {/* {touched.username && errors.username && (<p className="err">{errors.username}</p>)}  */}
                    <p className="err" style={{"visibility": touched.username && errors.username ? "": "hidden"}}>{errors.username}</p>
                </div>
                
                {/* <label htmlFor="password">Password: </label> */}
                <Field type="password" className="form-password" name="password" id="password" placeholder="Password" />
                <div className="login-status">
                    {/* {touched.password && errors.password && (<p className="err">{errors.password}</p>)} */}
                    <p className="err" style={{"visibility": touched.password && errors.password ? "": "hidden"}}>{errors.password}</p>
                </div>
                
                <button type="submit">Login</button> 
            </Form>
            <p>If you don't have an account <Link to="/register"> click here to register</Link>.</p>
        </div>
    );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }){
        return {
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required('Username field is required.'),

        password: Yup.string()
            .required('Password field is required.')
            .min(8, 'Your password must be at least 8 characters long.')

    }),

    handleSubmit(values, {resetForm, ...rest}){
        rest.props.login({...values})
        resetForm('');
    }

});

export default connect((state)=>({...state}), {login})(FormikLoginForm(LoginForm));