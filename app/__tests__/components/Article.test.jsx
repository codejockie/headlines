import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';

import Article from '../../components/Article';

describe('Article', () => {
  beforeEach(() => {
    localStorage.setItem('url', 'http://www.bbc.co.uk/news/election-2017-40154361');
  });
  it('renders', () => {
    const element = TestUtils.renderIntoDocument(<Article />);
    expect(element).toBeTruthy();
  });
});
