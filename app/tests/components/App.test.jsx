import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';

import App from '../../components/App';

describe('App', () => {
  it('renders', () => {
    const element = TestUtils.renderIntoDocument(<App />);
    expect(element).toBeTruthy();
  });
});
