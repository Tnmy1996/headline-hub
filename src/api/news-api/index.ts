import axios from 'axios';

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

const baseURL = 'https://newsapi.org/v2';

export const newsAPIInstance = axios.create({
    baseURL,
    headers: { 'X-Api-Key': apiKey },
});
