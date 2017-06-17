import axios from 'axios';

const BASE_URL = ' https://newsapi.org';
const API_KEY = process.env.NEWS_API_KEY;

/**
 * makeRequest makes the call to the API using axios
 * @function
 * @param {string} path
 * @param {string} sourceKey
 * @param {string} sortBy
 * @returns {promise} Promise
 */
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

/**
 * getSources retrieves the sources from the API
 * @function
 * @returns {func} makeRequest
 */
export const getSources = () => {
  const path = 'sources';

  return makeRequest(path)
    .then(data => data.sources, error => error);
};

/**
 * getHeadlines retrieves the headlines from the API
 * @function
 * @param {string} sourceKey
 * @param {string} sortBy
 * @returns {func} makeRequest
 */
export const getHeadlines = (sourceKey = 'reddit-r-all', sortBy = 'top') => {
  const path = 'articles';

  return makeRequest(path, sourceKey, sortBy)
    .then(data => data.articles, error => error);
};