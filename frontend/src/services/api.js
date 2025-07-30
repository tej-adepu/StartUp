import axios from 'axios';

// If you DID NOT set proxy in package.json, use full URL:
const API = axios.create({
    baseURL: 'http://localhost:5000/api'   // Your backend base URL
});

export default API;
