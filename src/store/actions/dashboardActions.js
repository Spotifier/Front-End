import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const DASHBOARD_LOADING_START = "DASHBOARD_LOADING_START";
export const DASHBOARD_LOADING_SUCCESS = "DASHBOARD_LOADING_SUCCESS";
export const DASHBOARD_LOADING_FAILURE = "DASHBOARD_LOADING_FAILURE";
export const getDashboard = songid => dispatch => {
    dispatch(DASHBOARD_LOADING_START);
    axiosWithAuth().get(`\${songid}`)
        .then(res => dispatch({type: DASHBOARD_LOADING_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: DASHBOARD_LOADING_FAILURE, payload: err}))
}