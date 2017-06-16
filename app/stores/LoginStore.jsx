import { EventEmitter } from 'events';

import dispatcher from '../dispatcher.jsx';

/**
 * Login Store Class.
 *
 * @class
 */
class LoginStore extends EventEmitter {
  /**
   * Represents login.
   * @constructor
   */
  constructor() {
    super();

    this.userId = '';
  }

  /**
   * getUserId returns userId
   * @param {string} userId
   * @returns {string} userId
   */
  getUserId(userId) {
    this.userId = userId;
    return this.userId;
  }

  /**
   * handleActions switches between actions and handle them accordingly
   * @param {Object} action
   * @returns {void}
   */
  handleActions(action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        this.getUserId(action.uid);
        break;
      case 'LOGOUT_SUCCESS':
        this.userId = '';
        break;

      default: break;
    }
  }
}

const loginStore = new LoginStore();
dispatcher.register(loginStore.handleActions.bind(loginStore));
export default loginStore;
