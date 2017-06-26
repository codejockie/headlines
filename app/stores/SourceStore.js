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
   * @description Represents a source.
   * @memberOf SourceStore
   * @constructor
   */
  constructor() {
    super();

    /** @type {Array} */
    this.sources = [];
  }

  /**
   * @description returns all sources
   * @method
   * @memberOf SourceStore
   * @returns {Array} sources
   */
  getAll() {
    return this.sources;
  }

  /**
   * @description assigns sources and emits an event
   * @method
   * @memberOf SourceStore
   * @param {Array} sources The fetched news sources
   * @returns {void}
   */
  setSources(sources) {
    this.sources = sources;
    this.emit('source_change');
  }

  /**
   * @description switches between actions and handle them accordingly
   * @method
   * @memberOf SourceStore
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
