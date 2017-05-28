import axios from 'axios';

const BASE_URL = ' https://newsapi.org';
const API_KEY = '213327409d384371851777e7c7f78dfe';

const getSources = () => {
  const requestUrl = `${BASE_URL}/v1/sources?language=en`;

  return axios.get(requestUrl).then((res) => {
    return res.data.sources;
  }, (res) => {
    throw new Error(res.data.message);
  });
};

const getHeadlines = (sourceKey = 'reddit-r-all') => {
  const requestUrl = `${BASE_URL}/v1/articles?source=${sourceKey}&apiKey=${API_KEY}`;

  return axios.get(requestUrl).then((res) => {
    return res.data.articles;
  }, (res) => {
    throw new Error(res.data.message);
  });
};

const makeRequest = (path, sourceKey = '') => {
  let requestUrl = `${BASE_URL}/v1/`;

  if (sourceKey) {
    requestUrl += `${path}?source=${sourceKey}&apiKey=${API_KEY}`;
  } else {
    requestUrl += `${path}?language=en`;
  }

  return axios.get(requestUrl).then((res) => {
    return res.data;
  }, (res) => {
    throw new Error(res.data.message);
  });
};

export {
  getSources,
  getHeadlines
}
