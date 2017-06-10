import axios from 'axios';

const API_KEY = 'z1Gv8hCJVTTyzednIRKiOOrracFirvNkxgLn1sCP';
const BASE_URL = 'https://mercury.postlight.com/parser?url=';
const config = {
  headers: {
    'content-type': 'application/json',
    'x-api-key': API_KEY,
  },
};

export default function parseArticle(url) {
  const requestUrl = `${BASE_URL}${url}`;
  return axios.get(requestUrl, config)
    .then(response => response.data)
    .catch(error => error);
}
