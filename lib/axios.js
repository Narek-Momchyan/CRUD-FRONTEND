import axios from 'axios';

// Խնդիրը Vercel-ի Environment Variable-ների մեջ է, քանի որ այնտեղ սխալ հասցե է գրված։
// Այդ իսկ պատճառով ես ձեռքով (hardcoded) դնում եմ ճիշտ հասցեն, որպեսզի միշտ ճիշտ աշխատի:
const baseURL = "https://crud-backend-1-izw0.onrender.com/api/";

const instance = axios.create({ baseURL });

export default instance;