import axios from 'axios';

const yt = require('../secrets.json');

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: yt.KEY
    }
});
