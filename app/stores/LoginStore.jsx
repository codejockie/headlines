import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class LoginStore extends EventEmitter {
  constructor() {
    super();

    this.userId = '';
  }

  getUserId(userId) {
    this.userId = userId;
    return this.userId;
  }

  handleActions(action) {
    switch (action.type) {
      case 'LOGIN': {
        this.getUserId(action.uid);
      }
        break;
      case 'LOGOUT': {
        this.userId = '';
      }
        break;
    }
  }
}

const loginStore = new LoginStore();
dispatcher.register(loginStore.handleActions.bind(loginStore));
export default loginStore;
