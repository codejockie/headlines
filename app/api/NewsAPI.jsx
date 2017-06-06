import axios from 'axios';

const BASE_URL = ' https://newsapi.org';
const API_KEY = '213327409d384371851777e7c7f78dfe';

const makeRequest = (path, sourceKey = '', sortBy = '') => {
  let requestUrl = `${BASE_URL}/v1/`;

  if (sourceKey && sortBy) {
    requestUrl += `${path}?source=${sourceKey}&sortBy=${sortBy}&apiKey=${API_KEY}`;
  } else {
    requestUrl += `${path}?language=en`;
  }

  return axios.get(requestUrl)
    .then(res => res.data, res => res.data);
};

export const getSources = () => {
  const path = 'sources';

  return makeRequest(path)
    .then(data => data.sources, error => error);
};

export const getHeadlines = (sourceKey = 'reddit-r-all', sortBy = 'top') => {
  const path = 'articles';

  return makeRequest(path, sourceKey, sortBy)
    .then(data => data.articles, error => error);
};
