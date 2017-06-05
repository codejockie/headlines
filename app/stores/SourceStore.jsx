import { EventEmitter } from 'events';

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
    this.emit('source_change');
  }

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
