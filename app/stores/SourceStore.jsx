import { EventEmitter } from 'events';

import dispatcher from '../dispatcher.jsx';

/**
 * Source Store Class.
 *
 * @class
 */
class SourceStore extends EventEmitter {
  /**
   * Represents a source.
   * @constructor
   */
  constructor() {
    super();

    this.sources = [];
  }

  /**
   * getAll returns all sources
   * @returns {Array} sources
   */
  getAll() {
    return this.sources;
  }

  /**
   * getSources assigns sources and emits an event
   * @param {Array} sources
   * @returns {void}
   */
  getSources(sources) {
    this.sources = sources;
    this.emit('source_change');
  }

  /**
   * handleActions switches between actions and handle them accordingly
   * @param {Object} action
   * @returns {void}
   */
  handleActions(action) {
    switch (action.type) {
      case 'RECEIVE_SOURCES':
        this.getSources(action.sources);
        break;

      default: break;
    }
  }
}

const sourceStore = new SourceStore();
dispatcher.register(sourceStore.handleActions.bind(sourceStore));
export default sourceStore;
