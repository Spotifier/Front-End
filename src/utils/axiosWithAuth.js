import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage("token");

    return axios.create({
        baseUrl: 'localhost:5000/',
        headers: {
            "Authorization" : token
        }
    })

}