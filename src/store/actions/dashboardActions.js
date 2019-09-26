//import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from 'axios';

export const DASHBOARD_LOADING_START = "DASHBOARD_LOADING_START";
export const DASHBOARD_LOADING_SUCCESS = "DASHBOARD_LOADING_SUCCESS";
export const DASHBOARD_LOADING_FAILURE = "DASHBOARD_LOADING_FAILURE";
export const APPEND_SONGLIST = "APPEND_SONGLIST";
export const getDashboard = song => async dispatch => {
    console.log(song);
    dispatch({ type: DASHBOARD_LOADING_START, payload: song });
    const { data: idList } = await axios.post('https://spotifier-recommender-api.herokuapp.com/api', { 'Searched_Song': song.track_id })
    console.log(idList)
    let trackList = []
    for (let i = 1; i <= 10; i++) {
        const { data: { trackid, duration, ...track } } = await axios.get(`https://spotify-song-suggester.herokuapp.com/tracks/track/${idList[`Nearest_Song${i}`]}`)
        let trackFixed = { ...track, track_id: trackid, duration_ms: duration }
        dispatch({ type: APPEND_SONGLIST, payload: trackFixed})
        trackList.push(trackFixed)
    }
    dispatch({ type: DASHBOARD_LOADING_SUCCESS, payload: trackList })
}

