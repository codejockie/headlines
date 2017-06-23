import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

/**
 * Source Store Class.
 *
 * @class
 * @extends EventEmitter
 */
class SourceStore extends EventEmitter {
  /**
   * Represents a source.
   * @constructor
   */
  constructor() {
    super();

    /** @type {Array} */
    this.sources = [];
  }

  /**
   * getAll: returns all sources
   * @returns {Array} sources
   */
  getAll() {
    return this.sources;
  }

  /**
   * setSources: assigns sources and emits an event
   * @param {Array} sources The fetched news sources
   * @returns {void}
   */
  setSources(sources) {
    this.sources = sources;
    this.emit('source_change');
  }

  /**
   * handleActions: switches between actions and handle them accordingly
   * @param {Object} action The action type dispatched
   * @returns {void}
   */
  handleActions(action) {
    switch (action.type) {
      case 'RECEIVE_SOURCES':
        this.setSources(action.sources);
        break;

      default: break;
    }
  }
}

const sourceStore = new SourceStore();
dispatcher.register(sourceStore.handleActions.bind(sourceStore));
export default sourceStore;
