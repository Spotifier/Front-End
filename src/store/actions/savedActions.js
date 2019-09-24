import { axiosWithAuth } from "../../utils/axiosWithAuth";

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