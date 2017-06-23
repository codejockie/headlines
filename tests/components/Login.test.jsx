import React from 'react';
import { mount, shallow } from 'enzyme';

import Login from '../../app/components/Login.jsx';

describe('<Login />', () => {
  it('renders correctly to page', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.length).to.equal(1);
  });

  it('should have a title with an h1 element', () => {
    const login = mount(<Login />);
    expect(login.find('h1').text()).to.equal('Newslines');
  });

  it('should have two button elements', () => {
    const login = mount(<Login />);
    expect(login.find('button').length).to.equal(2);
  });
});
