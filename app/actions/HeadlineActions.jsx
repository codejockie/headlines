import dispatcher from '../dispatcher';
import * as api from '../api/NewsAPI';

export function loadHeadlines(sourceKey = '') {
  dispatcher.dispatch({
    type: 'LOAD_SOURCES',
  });

  if (sourceKey) {
    api.getHeadlines(sourceKey).then(headlines => {
      dispatcher.dispatch({
        type: 'RECEIVE_HEADLINES',
        headlines
      }, err => {
        dispatcher.dispatch({
          type: 'RECEIVE_HEADLINES_ERROR',
          headlines: err
        })
      })
    })
  } else {
    api.getHeadlines().then(headlines => {
      dispatcher.dispatch({
        type: 'RECEIVE_HEADLINES',
        headlines
      }, err => {
        dispatcher.dispatch({
          type: 'RECEIVE_HEADLINES_ERROR',
          headlines: err
        })
      })
    })
  }
}
