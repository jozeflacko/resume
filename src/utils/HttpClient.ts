import axios from 'axios';

export function get(url: string) {
    console.log('fetching '+ url);
    return axios.get(url);
}