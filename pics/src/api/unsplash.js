import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8f583a6711a63a2f2c818977c4d24e476aa9f7c589db9cb859a47106ebff9210'
    }
});