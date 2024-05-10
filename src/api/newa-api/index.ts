import axios from 'axios';

const apiKey =
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    import.meta.env.VITE_NEWS_API_KEY ?? '994e4e4674f948b3801f497226dcb2df';

// const baseURL = 'https://newsapi.org/v2';
const baseURL = '/api';

export const newsAPIInstance = axios.create({
    baseURL,
    headers: { 'X-Api-Key': apiKey },
});
