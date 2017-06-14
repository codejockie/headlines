import React from 'react';
import { shallow } from 'enzyme';
// import TestUtils from 'react-dom/test-utils';

import Login from '../../components/Login';

describe('Login', () => {
  it('renders an h1 element', () => {
    const login = shallow(<Login />);
    expect(login.find('h1').text()).toEqual('Newslines');
  });

  it('renders a button element', () => {
    const login = shallow(<Login />);
    expect(login.find('button').text()).toEqual(' Login with Google');
  });
});
