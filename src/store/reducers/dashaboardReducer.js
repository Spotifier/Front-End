import {
    DASHBOARD_LOADING_START,
    DASHBOARD_LOADING_SUCCESS,
    DASHBOARD_LOADING_FAILURE,
} from '../actions/dashboardActions'

const initialState = {
    currentSong: null,
    newSongList: null,
    loading: false,
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
        default:
            return state;
    }
}