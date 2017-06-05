import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';

import Article from 'Article';

describe('Article', () => {
  it('renders', () => {
    const element = TestUtils.renderIntoDocument(<Article />);
    expect(element).toBeTruthy();
  });
});
