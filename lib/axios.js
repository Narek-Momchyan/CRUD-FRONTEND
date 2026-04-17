import axios from 'axios';

const rawBaseURL = process.env.NEXT_PUBLIC_API_URL || "https://crud-backend-1-izw0.onrender.com/api/";
// Այս տողը ապահովում է, որ հասցեի վերջում միշտ լինի /api/
const baseURL = rawBaseURL.endsWith('/api/') 
    ? rawBaseURL 
    : (rawBaseURL.endsWith('/') ? `${rawBaseURL}api/` : `${rawBaseURL}/api/`);

const instance = axios.create({ baseURL });

export default instance;