import dispatcher from '../dispatcher.jsx';
import { getSources } from '../api/NewsApi.jsx';

/**
 * loadSources function for retrieving sources.
 * @function
 * @returns {func} getSources()
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
