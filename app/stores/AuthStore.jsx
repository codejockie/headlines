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

    this.user = {};
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
   * setUser sets the user
   * @param {Object} user
   * @returns {void}
   */
  setUser(user) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  /**
   * clearAll clears user data and localStorage
   * @returns {void}
   */
  clearAll() {
    this.userId = '';
    this.user = {};
    localStorage.removeItem('user');
    localStorage.removeItem('sourceKey');
  }

  /**
   * handleActions switches between actions and handle them accordingly
   * @param {Object} action
   * @returns {void}
   */
  handleActions(action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        this.getUserId(action.user.uid);
        this.setUser(action.user);
        break;
      case 'LOGOUT_SUCCESS':
        this.clearAll();
        break;

      default: break;
    }
  }
}

const loginStore = new LoginStore();
dispatcher.register(loginStore.handleActions.bind(loginStore));
export default loginStore;
