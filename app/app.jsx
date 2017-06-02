import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';

import firebase from 'firebase/';
import router from './router/';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/headlines');
  } else {
    hashHistory.push('/');
  }
});

import './styles/app.scss';

render(
  router,
  document.querySelector('#app')
);
