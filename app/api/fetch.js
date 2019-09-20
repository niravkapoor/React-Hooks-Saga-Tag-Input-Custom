import axios from 'axios';
import endPoints from './endpoint';

export default (url, options) => {
    return axios(`${endPoints['production'].hostname}${url}`, options)
    .then((res) => {
        return Promise.resolve(res.data)
    })
    .catch((err) => {
        console.log(err);
        return Promise.reject(err);
    })
}