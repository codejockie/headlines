import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';

import Login from '../../components/Login';

describe('Login', () => {
  it('renders', () => {
    const element = TestUtils.renderIntoDocument(<Login />);
    expect(element).toBeTruthy();
  });
});
