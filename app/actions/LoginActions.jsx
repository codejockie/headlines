import dispatcher from '../dispatcher';
import firebase, {githubProvider, googleProvider} from '../firebase/';

export const startLogin = () => {
  return firebase.auth().signInWithPopup(googleProvider)
    .then((result) => {
      dispatcher.dispatch({
        type: 'LOGIN_SUCCESS',
        uid: result.user.uid
      });
    }, (error) => {
      console.log('Unable to auth', error);
    });
};

export const startLogout = () => {
  return firebase.auth().signOut()
    .then(() => {
      dispatcher.dispatch({
        type: 'LOGOUT_SUCCESS',
      });
    });
};
