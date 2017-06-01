import dispatcher from '../dispatcher';
import * as api from '../api/NewsAPI';

export function loadHeadlines(sourceKey = '', sortBy = 'top') {
  if (sourceKey && sortBy) {
    api.getHeadlines(sourceKey, sortBy).then(headlines => {
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
    api.getHeadlines().then(headlines => {
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
