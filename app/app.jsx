import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

require('./styles/app.scss');

render(
    <div>
        <App />
    </div>,
    document.querySelector('#app')
);