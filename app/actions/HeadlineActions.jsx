import dispatcher from '../dispatcher.jsx';
import { getHeadlines } from '../api/NewsApi.jsx';

/**
 * loadHeadlines function for retrieving latest headlines.
 * @function
 * @param {string} sourceKey - The source key for the headlines to fetch.
 * @param {string} sortBy - The sort arg to filter the headlines.
 * @returns {func} getHeadlines()
 */
export default function loadHeadlines(sourceKey = 'reddit-r-all', sortBy = 'top') {
  return getHeadlines(sourceKey, sortBy).then((headlines) => {
    dispatcher.dispatch({
      type: 'RECEIVE_HEADLINES',
      headlines,
    }, (error) => {
      dispatcher.dispatch({
        type: 'RECEIVE_HEADLINES_ERROR',
        error,
      });
    });
  });
}
