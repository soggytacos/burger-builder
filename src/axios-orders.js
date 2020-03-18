import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-53e07.firebaseio.com/'
});

export default instance;