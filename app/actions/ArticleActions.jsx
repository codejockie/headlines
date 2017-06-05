import dispatcher from '../dispatcher';

import { parseArticle } from '../api/LateralAPI';

export function getArticle(url) {
  return parseArticle(url).then(data => {
    dispatcher.dispatch({
      type: 'RECEIVE_ARTICLE',
      article: data,
    });
  });
}
