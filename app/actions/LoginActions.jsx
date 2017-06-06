import dispatcher from '../dispatcher';
import firebase, { googleProvider } from '../firebase/';

export const startLogin = () => firebase.auth()
  .signInWithPopup(googleProvider)
    .then((result) => {
      dispatcher.dispatch({
        type: 'LOGIN_SUCCESS',
        uid: result.user.uid,
      });
    }, (error) => {
      console.log('Unable to auth', error);
    });

export const startLogout = () => firebase.auth()
  .signOut()
    .then(() => {
      dispatcher.dispatch({
        type: 'LOGOUT_SUCCESS',
      });
    });
