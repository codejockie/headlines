import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

import './styles/app.scss';

render(
  <Router>
    <App></App>
  </Router>,
  document.querySelector('#app')
);
