import {
    SAVED_LOADING_START,
    SAVED_LOADING_SUCCESS,
    SAVED_LOADING_FAILURE,
    ADD_SAVED_START,
    ADD_SAVED_SUCCESS,
    ADD_SAVED_FAILURE,
    DELETE_SAVED_START,
    DELETE_SAVED_SUCCESS,
    DELETE_SAVED_FAILURE
} from '../actions/savedActions'

const initialState = {
    savedList: []
};

export const savedReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SAVED_LOADING_START:
            return { ...state }
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