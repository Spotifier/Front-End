import {
    SAVED_LOADING_START,
    SAVED_LOADING_SUCCESS,
    SAVED_LOADING_FAILURE,
    ADD_SAVED_START,
    ADD_SAVED_SUCCESS,
    ADD_SAVED_FAILURE,
    DELETE_SAVED_START,
    DELETE_SAVED_SUCCESS,
    DELETE_SAVED_FAILURE,
    LOGIN_LOADING_START,
    LOGIN_LOADING_SUCCESS,
    LOGIN_LOADING_FAILURE,
    REGISTER_LOADING_START,
    REGISTER_LOADING_SUCCESS,
    REGISTER_LOADING_FAILURE,
    LOGOUT_USER,
} from '../actions/userActions'

const initialState = {
    currentUser: null,
    savedList: []
};

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_LOADING_START:
            return {
                ...state,
                currentUser: null,
                error: null,
                loading: true,
            }
        case LOGIN_LOADING_SUCCESS:
            window.localStorage.setItem('token', JSON.stringify(payload.token))
            return {
                ...state,
                currentUser: payload.username,
                loading: false,
            }
        case LOGIN_LOADING_FAILURE:
            return {
                ...state,
                currentUser: null,
                error: payload,
                loading: false,
            }
        case REGISTER_LOADING_START:
            return {
                ...state,
            }
        case REGISTER_LOADING_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null,
                loading: true,
            }
        case REGISTER_LOADING_FAILURE:
            return {
                ...state,
                currentUser: null,
                error: payload,
                loading: true,
            }
        case LOGOUT_USER: 
            return {
                ...initialState
            }
        case SAVED_LOADING_START:
            return { 
                ...state,
                tokenRejected: false,
                currentUser: 'test' 
            }
        case SAVED_LOADING_SUCCESS:
            return { ...state }
        case SAVED_LOADING_FAILURE:
            return { ...state }
        case ADD_SAVED_START:
            return { ...state }
        case ADD_SAVED_SUCCESS:
            return { ...state }
        case ADD_SAVED_FAILURE:
            return { ...state }
        case DELETE_SAVED_START:
            return { ...state }
        case DELETE_SAVED_SUCCESS:
            return { ...state }
        case DELETE_SAVED_FAILURE:
            return { ...state }
        default:
            return state;
    }
}