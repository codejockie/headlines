import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class HeadlineStore extends EventEmitter {
  constructor() {
    super();

    this.headlines = [];
    this.error = {};
  }

  getAll() {
    return this.headlines;
  }

  getHeadlines(headlines) {
    this.headlines = headlines;
    this.emit('headline_change');
  }

  getErrors(error) {
    this.error = error;
    this.emit('error');
  }

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
