import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

/**
 * Headline Store Class.
 *
 * @class
 * @extends EventEmitter
 */
class HeadlineStore extends EventEmitter {
  /**
   * @description Creates an instance of HeadlineStore.
   * @constructor
   */
  constructor() {
    super();

    /** @type {Array} */
    this.headlines = [];

    /** @type {string} */
    this.sourceKey = '';
  }

  /**
   * @description returns all headlines
   * @method
   * @memberOf HeadlineStore
   * @returns {Array} headlines
   */
  getAll() {
    return this.headlines;
  }

  /**
   * @description returns all sources
   * @method
   * @memberOf HeadlineStore
   * @returns {string} sourceKey
   */
  getSourceKey() {
    return this.sourceKey;
  }

  /**
   * @description assigns headlines and emits an event
   * @method
   * @memberOf HeadlineStore
   * @param {Array} headlines The headlines fetched for a given source
   * @returns {void}
   */
  setHeadlines(headlines) {
    this.headlines = headlines;
    this.emit('headline_change');
  }

  /**
   * @description sets the sourceKey
   * @method
   * @memberOf HeadlineStore
   * @param {string} sourceKey The news source id
   * @returns {void}
   */
  setSourceKey(sourceKey) {
    this.sourceKey = sourceKey;
    localStorage.setItem('sourceKey', sourceKey);
  }

  /**
   * @description switches between actions and handle them accordingly
   * @method
   * @memberOf HeadlineStore
   * @param {Object} action The action type dispatched
   * @returns {void}
   */
  handleActions(action) {
    switch (action.type) {
      case 'RECEIVE_HEADLINES':
        this.setHeadlines(action.headlines);
        break;
      case 'SOURCE_KEY':
        this.setSourceKey(action.sourceKey);
        break;

      default: break;
    }
  }
}

const headlineStore = new HeadlineStore();
dispatcher.register(headlineStore.handleActions.bind(headlineStore));
export default headlineStore;
