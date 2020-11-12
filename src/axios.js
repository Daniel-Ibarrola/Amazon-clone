import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-5cc42.cloudfunctions.net/api'
    //'http://localhost:5001/challenge-5cc42/us-central1/api' 
    //THE API (cloud function) URL
});

export default instance;


