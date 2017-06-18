import axios from 'axios';

const BASE_URL = ' https://newsapi.org';
const API_KEY = process.env.NEWS_API_KEY;

/**
 * makeRequest makes the call to the API using axios
 * @function
 * @param {string} path
 * @param {string} lang
 * @param {string} sourceKey
 * @param {string} sortBy
 * @returns {promise} Promise
 */
const makeRequest = (path, lang, sourceKey, sortBy) => {
  let requestUrl = `${BASE_URL}/v1/`;

  if (sourceKey && sortBy) {
    requestUrl += `${path}?source=${sourceKey}&sortBy=${sortBy}&apiKey=${API_KEY}`;
  } else if (lang) {
    requestUrl += `${path}?language=${lang}`;
  }

  return axios.get(requestUrl)
    .then(res => res.data, res => res.data);
};

/**
 * getSources retrieves the sources from the API
 * @function
 * @returns {func} makeRequest
 */
export const getSources = () => makeRequest('sources', 'en', undefined, undefined)
  .then(res => res.sources, error => error);

/**
 * getHeadlines retrieves the headlines from the API
 * @function
 * @param {string} sourceKey
 * @param {string} sortBy
 * @returns {func} makeRequest
 */
export const getHeadlines =
  (sourceKey = 'reddit-r-all', sortBy = 'top') => makeRequest('articles', undefined, sourceKey, sortBy)
    .then(res => res.articles, error => error);
