import axios from 'axios';

const BASE_URL = 'https://document-parser-api.lateral.io/?url=';
const API_KEY = 'c8de9396fa0ad74c6b8f8f25694f6def';

export const parseArticle = url => axios.get(`${BASE_URL}${url}&subscription-key=${API_KEY}`, {
  responseType: 'json' })
  .then(res => res.data, err => err.data);
