import dispatcher from '../dispatcher';
import { getHeadlines } from '../api/NewsAPI';

export function loadHeadlines(sourceKey = '', sortBy = 'top') {
  if (sourceKey && sortBy) {
    return getHeadlines(sourceKey, sortBy).then(headlines => {
      dispatcher.dispatch({
        type: 'RECEIVE_HEADLINES',
        headlines
      }, error => {
        dispatcher.dispatch({
          type: 'RECEIVE_HEADLINES_ERROR',
          error
        })
      })
    })
  } else {
    return getHeadlines().then(headlines => {
      dispatcher.dispatch({
        type: 'RECEIVE_HEADLINES',
        headlines
      }, error => {
        dispatcher.dispatch({
          type: 'RECEIVE_HEADLINES_ERROR',
          error
        })
      })
    })
  }
}
