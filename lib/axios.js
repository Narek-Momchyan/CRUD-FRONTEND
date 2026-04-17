import axios from 'axios';

const instance = axios.create({
    // Ավելացրու /api վերջում
    baseURL: process.env.NEXT_PUBLIC_API_URL || "https://crud-backend-1-izw0.onrender.com/api" 
});

export default instance;