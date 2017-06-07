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
      expect(headline.state.headlines).toBe(null);
      expect(headline.state.error).toBe(undefined);
    });
  });
});
