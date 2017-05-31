import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import App from 'App';
import firebase from '../firebase/';
import Login from 'Login';

const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

const redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/headlines');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="headlines" component={App} onEnter={requireLogin} />
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn} />
    </Route>
  </Router>
);
