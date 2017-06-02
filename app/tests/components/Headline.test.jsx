import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';

import Headline from 'Headline';

describe('Headline', () => {
  it('should exist', () => {
    expect(Headline).toExist();
  });

  describe('render', () => {
    it('should render correctly', () => {
      const headline = ReactTestUtils.renderIntoDocument(<Headline />);
      expect(headline.state.headlines).toExist();
      expect(headline.state.error).toBe(undefined);
    });

    it('renders a div', () => {
      const component = ReactTestUtils.renderIntoDocument(<Headline />);
      const div = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'div');

      expect(div).toExist();
    })
  });
});
