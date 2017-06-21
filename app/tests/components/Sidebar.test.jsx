import React from 'react';
import { mount, shallow } from 'enzyme';
import { Dimmer, Loader } from 'semantic-ui-react';

import Headline from '../../components/Headline.jsx';
import Sidebar from '../../components/Sidebar.jsx';

describe('<Sidebar />', () => {
  it('renders correctly to page', () => {
    const sidebar = mount(<Sidebar />);
    expect(sidebar.length).to.equal(1);
  });

  it('should have a <Headline /> component', () => {
    const wrapper = mount(<Sidebar />);
    const headline = wrapper.find(Headline);
    expect(headline).to.have.length.of(1);
  });

  it('should have a <Dimmer /> component', () => {
    const wrapper = shallow(<Headline />);
    const dimmer = wrapper.find(Dimmer);
    expect(dimmer).to.have.length.of(1);
  });

  it('have a <Loader /> component', () => {
    const wrapper = shallow(<Headline />);
    const loader = wrapper.find(Loader);
    expect(loader).to.have.length.of(1);
  });

  it('should have a title', () => {
    const wrapper = mount(<Sidebar />);
    expect(wrapper.find('h1')).to.have.length.of(1);
  });

  it('should have sorting options', () => {
    const wrapper = mount(<Sidebar />);
    expect(Array.isArray(wrapper.state('options'))).to.equal(true);
  });

  it('should have an initial sources, visible and title state', () => {
    localStorage.setItem('sourceKey', 'newslines');
    const wrapper = shallow(<Sidebar />);
    expect(wrapper.state('sources')).to.equal(null);
    expect(wrapper.state('visible')).to.equal(false);
    expect(wrapper.state('title')).to.equal('Newslines');
    localStorage.removeItem('sourceKey');
  });
});
