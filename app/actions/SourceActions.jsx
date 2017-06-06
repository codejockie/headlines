import dispatcher from '../dispatcher';
import { getSources } from '../api/NewsAPI';

export function loadSources() {
  return getSources().then((sources) => {
    dispatcher.dispatch({
      type: 'RECEIVE_SOURCES',
      sources,
    }, (err) => {
      dispatcher.dispatch({
        type: 'RECEIVE_SOURCES_ERROR',
        sources: err,
      });
    });
  });
}
