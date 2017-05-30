import dispatcher from '../dispatcher';
import * as api from '../api/NewsAPI';

export function loadSources() {
  dispatcher.dispatch({
    type: 'LOAD_SOURCES',
  });

  api.getSources().then(sources => {
    dispatcher.dispatch({
      type: 'RECEIVE_SOURCES',
      sources
    }, err => {
      dispatcher.dispatch({
        type: 'RECEIVE_SOURCES_ERROR',
        sources: err
      })
    })
  })
}
