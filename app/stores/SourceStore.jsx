import {EventEmitter} from 'events';

import dispatcher from '../dispatcher';

class SourceStore extends EventEmitter {
  constructor() {
    super();

    this.sources = [];
  }

  getAll() {
    return this.sources;
  }

  getSources(sources) {
    this.sources = sources;
    this.emit('sourcechange');
  }

  handleActions(action) {
    switch (action.type) {
      case 'LOAD_SOURCES': {
        // handle this
      }
        break;
      case 'RECEIVE_SOURCES': {
        this.getSources(action.sources);
      }
        break;
    }
  }
}

const sourceStore = new SourceStore();

dispatcher.register(sourceStore.handleActions.bind(sourceStore));

export default sourceStore;