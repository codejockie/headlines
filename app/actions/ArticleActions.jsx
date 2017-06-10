import dispatcher from '../dispatcher';

import parseArticle from '../api/MercuryAPI';

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
