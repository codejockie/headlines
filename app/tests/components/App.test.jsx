import React from 'react';
import { mount } from 'enzyme';

import App from '../../components/App';
import SourceSidebar from '../../components/Sidebar';

describe('App', () => {
  it('renders correctly to page', () => {
    const wrapper = mount(<App />);
    expect(wrapper.length).to.equal(1);
  });

  it('renders SourceSidebar compoenent', () => {
    const wrapper = mount(<SourceSidebar />);
    const sidebar = wrapper.find(SourceSidebar);
    expect(sidebar).to.have.length.of(1);
  });
});
