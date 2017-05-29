import axios from 'axios';

const BASE_URL = ' https://newsapi.org';
const API_KEY = '213327409d384371851777e7c7f78dfe';

export const getSources = () => {
  const path = 'sources';

  return makeRequest(path)
    .then(data => {
      return data.sources;
    }, error => {
      return error;
    });
};

export const getHeadlines = (sourceKey = 'reddit-r-all') => {
  const path = 'articles';

  return makeRequest(path, sourceKey)
    .then(data => {
      return data.articles;
    }, error => {
      return error;
    });
};

const makeRequest = (path, sourceKey = '') => {
  let requestUrl = `${BASE_URL}/v1/`;

  if (sourceKey) {
    requestUrl += `${path}?source=${sourceKey}&apiKey=${API_KEY}`;
  } else {
    requestUrl += `${path}?language=en`;
  }

  return axios.get(requestUrl)
    .then((res) => {
      return res.data;
    }, (res) => {
      throw new Error(res.data.message);
    });
};
