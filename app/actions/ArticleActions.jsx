import dispatcher from '../dispatcher';

import * as api from '../api/LateralAPI';

export function getArticle(url) {
  return api.parseArticle(url).then(data => {
    dispatcher.dispatch({
      type: 'RECEIVE_ARTICLE',
      article: data,
    });
  });
}
