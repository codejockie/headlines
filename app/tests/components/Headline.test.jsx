import React from 'react';
import { shallow } from 'enzyme';
import { Dimmer, Loader } from 'semantic-ui-react';

import Headline from '../../components/Headline.jsx';

describe('<Headline />', () => {
  it('should render correctly to page', () => {
    const wrapper = shallow(<Headline />);
    expect(wrapper.length).to.equal(1);
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

  it('should have an initial headlines state', () => {
    const wrapper = shallow(<Headline />);
    expect(wrapper.state('headlines')).to.equal(null);
  });
});
