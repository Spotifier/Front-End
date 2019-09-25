import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";

export const SAVED_LOADING_START = "SAVED_LOADING_START";
export const SAVED_LOADING_SUCCESS = "SAVED_LOADING_SUCCESS";
export const SAVED_LOADING_FAILURE = "SAVED_LOADING_FAILURE";
export const getSaved = user => dispatch => {
    dispatch({ type: SAVED_LOADING_START });
    axiosWithAuth().get(`\${user}`)
        .then(res => dispatch({ type: SAVED_LOADING_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: SAVED_LOADING_FAILURE, payload: err }))
}

export const ADD_SAVED_START = "ADD_SAVED_START";
export const ADD_SAVED_SUCCESS = "ADD_SAVED_SUCCESS";
export const ADD_SAVED_FAILURE = "ADD_SAVED_FAILURE";
export const addToSaved = trackid => dispatch => {
    dispatch({ type: ADD_SAVED_START })
    axiosWithAuth().post(`/saved/${trackid}`)
        .then(res => dispatch({ type: ADD_SAVED_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ADD_SAVED_FAILURE, payload: err }))
}

export const DELETE_SAVED_START = "DELETE_SAVED_START";
export const DELETE_SAVED_SUCCESS = "DELETE_SAVED_SUCCESS";
export const DELETE_SAVED_FAILURE = "DELETE_SAVED_FAILURE";
export const deleteFromSaved = trackid => dispatch => {
    dispatch({ type: DELETE_SAVED_START })
    axiosWithAuth().delete(`/saved/${trackid}`)
        .then(res => dispatch({ type: DELETE_SAVED_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_SAVED_FAILURE, payload: err }))
}

export const LOGIN_LOADING_START = "LOGIN_LOADING_START";
export const LOGIN_LOADING_SUCCESS = "LOGIN_LOADING_SUCCESS";
export const LOGIN_LOADING_FAILURE = "LOGIN_LOADING_FAILURE";
export const login = creds => dispatch => {
    dispatch({ type: LOGIN_LOADING_START });
    axios.post(`https://spotify-song-suggester.herokuapp.com/login`, `grant_type=password&username=${creds.username}&password=${creds.password}`, {
        headers: {
            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(res => {
            dispatch({ type: LOGIN_LOADING_SUCCESS, payload: { username: creds.username, token: res.data.access_token }})
            
        })
        .catch(err => dispatch({ type: LOGIN_LOADING_FAILURE, payload: err }))
}

export const REGISTER_LOADING_START = "REGISTER_LOADING_START";
export const REGISTER_LOADING_SUCCESS = "REGISTER_LOADING_SUCCESS";
export const REGISTER_LOADING_FAILURE = "REGISTER_LOADING_FAILURE";
export const register = creds => dispatch => {
    dispatch({ type: REGISTER_LOADING_START });
    axios.post(`https://spotify-song-suggester.herokuapp.com/createnewuser`, creds)
        .then(res => dispatch({type: REGISTER_LOADING_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: REGISTER_LOADING_FAILURE, payload: err }))
}



export const LOGOUT_USER = "LOGOUT_USER";
export const logout = () => {
    window.localStorage.removeItem('token')
    return {type: LOGOUT_USER};
}