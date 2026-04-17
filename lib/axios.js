import axios from 'axios';

const instance = axios.create({
    // Հիմնական URL-ը վերցնում ենք .env-ից կամ օգտագործում ենք Render-ի հասցեն
    baseURL: process.env.NEXT_PUBLIC_API_URL || "https://crud-backend-1-izw0.onrender.com/api/" 
});

export default instance;