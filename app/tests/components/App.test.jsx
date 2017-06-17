import React from 'react';
import { mount } from 'enzyme';

import App from '../../components/App.jsx';
import SourceSidebar from '../../components/Sidebar.jsx';

describe('<App />', () => {
  it('renders correctly to page', () => {
    const wrapper = mount(<App />);
    expect(wrapper.length).to.equal(1);
  });

  it('should <SourceSidebar /> component', () => {
    const wrapper = mount(<App />);
    const sidebar = wrapper.find(SourceSidebar);
    expect(sidebar).to.have.length.of(1);
  });
});
