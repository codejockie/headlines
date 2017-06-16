import { EventEmitter } from 'events';

import dispatcher from '../dispatcher.jsx';

/**
 * Headline Store Class.
 *
 * @class
 */
class HeadlineStore extends EventEmitter {
  /**
   * Represents a headline.
   * @constructor
   */
  constructor() {
    super();

    this.headlines = [];
    this.error = {};
  }

  /**
   * getAll returns all headlines
   * @returns {Array} headlines
   */
  getAll() {
    return this.headlines;
  }

  /**
   * getHeadlines assigns headlines and emits an event
   * @param {Array} headlines
   * @returns {void}
   */
  getHeadlines(headlines) {
    this.headlines = headlines;
    this.emit('headline_change');
  }

  /**
   * getParsedArticle assigns errors and emits an event
   * @param {Object} error
   * @returns {void}
   */
  getErrors(error) {
    this.error = error;
    this.emit('error');
  }

  /**
   * handleActions switches between actions and handle them accordingly
   * @param {Object} action
   * @returns {void}
   */
  handleActions(action) {
    switch (action.type) {
      case 'RECEIVE_HEADLINES_ERROR':
        this.getErrors(action.error);
        break;
      case 'RECEIVE_HEADLINES':
        this.getHeadlines(action.headlines);
        break;

      default: break;
    }
  }
}

const headlineStore = new HeadlineStore();
dispatcher.register(headlineStore.handleActions.bind(headlineStore));
export default headlineStore;
