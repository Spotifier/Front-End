import {
    DASHBOARD_LOADING_START,
    DASHBOARD_LOADING_SUCCESS,
    DASHBOARD_LOADING_FAILURE,
    LOGIN_LOADING_START,
    LOGIN_LOADING_SUCCESS,
    LOGIN_LOADING_FAILURE,
    REGISTER_LOADING_START,
    REGISTER_LOADING_SUCCESS,
    REGISTER_LOADING_FAILURE,
    LOGOUT_USER,
} from '../actions/dashboardActions'

const initialState = {
    currentSong: null,
    newSongList: null,
    loading: false,
    currentUser: null,
    error: null
};

export const dashboardReducer = (state = initialState, { type, payload }) => {


    switch (type) {

        case DASHBOARD_LOADING_START:
            return {
                ...state,
                currentSong: payload,
                loading: true,
                error: null
            }
        case DASHBOARD_LOADING_SUCCESS:
            return {
                ...state,
                newSongList: payload,
                loading: false
            }
        case DASHBOARD_LOADING_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case LOGIN_LOADING_START:
            return {
                ...state,
                currentUser: null,
                error: null,
                loading: true,
            }
        case LOGIN_LOADING_SUCCESS:
            return {
                ...state,
                currentUser: payload,
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
            }
        case REGISTER_LOADING_FAILURE:
            return {
                ...state,
            }
        case LOGOUT_USER: 
            return {
                ...initialState
            }
        default:
            return state;
    }
}