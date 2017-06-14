import React from 'react';
import { shallow, mount } from 'enzyme';

import Sidebar from '../../components/Sidebar';
import Headline from '../../components/Headline';

describe('Sidebar', () => {
  it('renders correctly to page', () => {
    const sidebar = mount(<Sidebar />);
    expect(sidebar.length).to.equal(1);
  });

  it('renders Headline compoenent', () => {
    const wrapper = mount(<Sidebar />);
    const headline = wrapper.find(Headline);
    expect(headline).to.have.length.of(1);
  });

  it('renders an h1 element representing the title', () => {
    const wrapper = mount(<Sidebar />);
    expect(wrapper.find('h1').text()).to.equal('Today\'s Headlines');
  });
});
