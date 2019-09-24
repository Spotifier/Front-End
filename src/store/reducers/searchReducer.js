import { SEARCH_LOADING_START, SEARCH_LOADING_SUCCESS, SEARCH_LOADING_FAILURE, } from '../actions/searchActions';
import { dummyData } from '../local_data'
const initialState = {
    songList : dummyData,
};

export const searchReducer = (state = initialState, { type, payload }) => {
    switch( type ) {
        case SEARCH_LOADING_START:
            return {
                ...state,
            }
        case SEARCH_LOADING_SUCCESS:
            return {
                ...state,
            }
        case SEARCH_LOADING_FAILURE:
            return {
                ...state,
            }
        default:
            return state;
    }
}