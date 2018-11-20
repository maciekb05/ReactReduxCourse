import axios from 'axios';

const KEY = 'AIzaSyD7dO4SeVS6p8Ij4HSVkhgMBl90mjbSdi8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        maxResults: 5,
        key: KEY
    }
});