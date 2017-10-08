import { render } from 'react-dom';
import { hashHistory } from 'react-router';

import firebase from './firebase/';
import router from './router/';

import './styles/app.scss';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/headlines');
  } else {
    hashHistory.push('/');
  }
});

render(
  router,
  document.querySelector('#app'),
);
