import dispatcher from '../dispatcher';
import { getHeadlines } from '../api/NewsAPI';

export function loadHeadlines(sourceKey = 'reddit-r-all', sortBy = 'top') {
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
