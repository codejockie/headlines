import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import { Dimmer, Loader } from 'semantic-ui-react';

import Headline from '../../components/Headline';
import HeadlineItem from '../../components/HeadlineItem';

describe('Headline', () => {
  it('should render correctly to page', () => {
    const wrapper = shallow(<Headline />);
    expect(wrapper.length).to.equal(1);
  });

  it('renders a Dimmer', () => {
    const wrapper = shallow(<Headline />);
    const dimmer = wrapper.find(Dimmer);
    expect(dimmer).to.have.length.of(1);
  });

  it('renders a Loader inside a Dimmer', () => {
    const wrapper = shallow(<Headline />);
    const loader = wrapper.find(Loader);
    expect(loader).to.have.length.of(1);
  });
  describe('Headline state', () => {
    it('should have state set to initial values on rendering', () => {
      const headline = TestUtils.renderIntoDocument(<Headline />);
      expect(headline.state.headlines).to.equal(null);
      expect(headline.state.error).to.equal(undefined);
    });
  });
});
