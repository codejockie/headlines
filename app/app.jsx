import React from 'react';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
// import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import Login from 'Login';

import './styles/app.scss';

render(
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="headlines" component={App} />
      <IndexRoute component={Login} />
    </Route>
  </Router>,
  document.querySelector('#app')
);
