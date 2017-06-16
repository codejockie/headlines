import dispatcher from '../dispatcher.jsx';

import parseArticle from '../api/MercuryApi.jsx';

/**
 * getArticle function for article scraping.
 * @function
 * @param {string} url - The url of the article to scrape.
 * @returns {func} parseArticle()
 */
export default function getArticle(url) {
  return parseArticle(url).then((article) => {
    dispatcher.dispatch({
      type: 'RECEIVE_ARTICLE',
      article,
    });
  }, (error) => {
    dispatcher.dispatch({
      type: 'RECEIVE_ARTICLE_ERROR',
      error,
    });
  });
}
