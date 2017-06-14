import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import { mount } from 'enzyme';

import Login from '../../components/Login';

describe('Login', () => {
  it('renders', () => {
    const element = TestUtils.renderIntoDocument(<Login />);
    expect(element).toBeTruthy();
  });

  it('renders an h1 element', () => {
    const login = mount(<Login />);
    expect(login.find('h1').text()).toEqual('Newslines');
  });

  it('renders a button element', () => {
    const login = mount(<Login />);
    expect(login.find('button').text()).toEqual(' Login with Google');
  });
});
