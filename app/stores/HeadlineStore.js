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
   * Represents a headline.
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
   * getAll: returns all headlines
   * @returns {Array} headlines
   */
  getAll() {
    return this.headlines;
  }

  /**
   * getSourceKey: returns all sources
   * @returns {string} sourceKey
   */
  getSourceKey() {
    return this.sourceKey;
  }

  /**
   * setHeadlines: assigns headlines and emits an event
   * @param {Array} headlines The headlines fetched for a given source
   * @returns {void}
   */
  setHeadlines(headlines) {
    this.headlines = headlines;
    this.emit('headline_change');
  }

  /**
   * setSourceKey: sets the sourceKey
   * @param {string} sourceKey The news source id
   * @returns {void}
   */
  setSourceKey(sourceKey) {
    this.sourceKey = sourceKey;
    localStorage.setItem('sourceKey', sourceKey);
  }

  /**
   * handleActions switches between actions and handle them accordingly
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