import axios from 'axios';

export const axiosWithAuth = () => {
    const token = `Bearer ${localStorage.getItem('token')}`
    
    return axios.create({
        baseUrl: 'localhost:5000/',
        headers: {
            "Authorization" : token
        }
    })

}