import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class HeadlineStore extends EventEmitter {
  constructor() {
    super();

    this.headlines = [];
  }

  getAll() {
    return this.headlines;
  }

  getHeadlines(headlines) {
    this.headlines = headlines;
    this.emit('change');
  }

  handleActions(action) {
    switch (action.type) {
      case 'LOAD_HEADLINES': {
        // handle this
      }
        break;
      case 'RECEIVE_HEADLINES': {
        this.getHeadlines(action.headlines);
      }
        break;
    }
  }
}

const headlineStore = new HeadlineStore();

dispatcher.register(headlineStore.handleActions.bind(headlineStore));

export default headlineStore;
