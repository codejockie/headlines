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

export const getHeadlines = (sourceKey = 'reddit-r-all', sortBy = 'top') => {
  const path = 'articles';

  return makeRequest(path, sourceKey, sortBy)
    .then(data => {
      return data.articles;
    }, error => {
      return error;
    });
};

const makeRequest = (path, sourceKey = '', sortBy = '') => {
  let requestUrl = `${BASE_URL}/v1/`;

  // https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey={API_KEY}

  if (sourceKey && sortBy) {
    requestUrl += `${path}?source=${sourceKey}&sortBy=${sortBy}&apiKey=${API_KEY}`;
  } else {
    requestUrl += `${path}?language=en`;
  }

  return axios.get(requestUrl)
    .then((res) => {
      return res.data;
    }, (res) => {
      return {
        status: res.data.status,
        code: res.data.code,
        message: res.data.message,
      }
    });
};
