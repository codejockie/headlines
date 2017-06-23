import dispatcher from '../dispatcher';
import { getSources } from '../api/NewsApi';

/**
 * loadSources: retrieves sources.
 * @function
 * @returns {Promise} Promise
 */
export default function loadSources() {
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
