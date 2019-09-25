import { SEARCH_LOADING_START, SEARCH_LOADING_SUCCESS, SEARCH_LOADING_FAILURE, SEARCH_ITEM } from '../actions/searchActions';
import { dummyData } from '../local_data'
const initialState = {
    songList : dummyData,
    loading: false,
    searchList: [],
    error: null,
    dataLoaded: window.localStorage.getItem('data') ? true : false
};

export const searchReducer = (state = initialState, { type, payload }) => {
    switch( type ) {
        case SEARCH_LOADING_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case SEARCH_LOADING_SUCCESS:
            return {
                ...state,
                songList: payload,
                loading: false
            }
        case SEARCH_LOADING_FAILURE:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case SEARCH_ITEM:
            return {
                ...state,
                searchList: state.songList.filter(song => song.track_name.includes(payload) || song.artist_name.includes(payload) )
            }
        default:
            return state;
    }
}