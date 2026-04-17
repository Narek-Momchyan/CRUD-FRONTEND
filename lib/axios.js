import axios from 'axios';

let rawBaseURL = process.env.NEXT_PUBLIC_API_URL || "https://crud-backend-1-izw0.onrender.com/api/";

// Remove any trailing slashes to normalize
rawBaseURL = rawBaseURL.replace(/\/+$/, '');

// Ensure it ends with /api
if (!rawBaseURL.endsWith('/api')) {
    rawBaseURL = `${rawBaseURL}/api`;
}

const baseURL = `${rawBaseURL}/`;

const instance = axios.create({ baseURL });

export default instance;