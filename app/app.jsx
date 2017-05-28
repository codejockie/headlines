import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

import './styles/app.scss';

render(
  <div>
    <App />
  </div>,
  document.querySelector('#app')
);
