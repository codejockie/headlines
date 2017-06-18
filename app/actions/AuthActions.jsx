import dispatcher from '../dispatcher.jsx';
import firebase from '../firebase/index.jsx';

/**
 * authenticate function for initiating the sign in process.
 * @function
 * @param {func} authProvider - The type of authentication provider to use
 * @returns {void}
 */
function authenticate(authProvider) {
  firebase.auth()
    .signInWithPopup(authProvider)
    .then((result) => {
      dispatcher.dispatch({
        type: 'LOGIN_SUCCESS',
        user: result.user,
      });
    }, (error) => {
      dispatcher.dispatch({
        type: 'LOGIN_FAILURE',
        error,
      });
    });
}

/**
 * startLogin function for initiating the sign in process.
 * @function
 * @param {func} authProvider - The type of authentication provider to use
 * @returns {void}
 */
export const startLogin = authProvider => authenticate(authProvider);

/**
 * startLogout function for initiating the sign out process.
 * @function
 * @returns {void}
 */
export const startLogout = () => firebase.auth()
  .signOut()
    .then(() => {
      dispatcher.dispatch({
        type: 'LOGOUT_SUCCESS',
      });
    });
