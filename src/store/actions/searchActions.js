import axios from 'axios'

export const SEARCH_LOADING_START = "SEARCH_LOADING_START";
export const SEARCH_LOADING_SUCCESS = "SEARCH_LOADING_SUCCESS";
export const SEARCH_LOADING_FAILURE = "SEARCH_LOADING_FAILURE";
export const getSearch = () => dispatch => {
    dispatch({type: SEARCH_LOADING_START});
    axios.get(`https://cors-anywhere.herokuapp.com/https://spotifier.s3.amazonaws.com/processed_df.json`)
        .then(res => dispatch({type: SEARCH_LOADING_SUCCESS, payload: res.data}) )
        .catch(err => dispatch({type: SEARCH_LOADING_FAILURE, payload: err}))
}

export const SEARCH_ITEM = "SEARCH_ITEM"

export const search = term => dispatch => {

    dispatch({type: SEARCH_ITEM, payload: term })

}