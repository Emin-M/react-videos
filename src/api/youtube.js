import axios from "axios";

const KEY = 'AIzaSyDW4H5Mj6ZCjoUxAgqMTfNIoSs4BPjleZE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'videos',
        maxResults: 5,
        key: KEY
    }
})