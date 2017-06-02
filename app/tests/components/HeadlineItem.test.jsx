import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';

import HeadlineItem from 'HeadlineItem';

const article = {
  author: 'Jordan Crook',
  title: 'Judah Vs. The Machines',
  description: 'And now we present to the world: Judah Vs. The Machines, an eight-episode web series that follows comedian Judah Friedlander as he takes on the world\'s most..',
  url: 'https://techcrunch.com/2017/05/22/judah-vs-the-machines/',
  urlToImage: 'https://tctechcrunch2011.files.wordpress.com/2017/05/judah-friedlander-car.jpg?w=764&h=400&crop=1',
  publishedAt: '2017-05-22T16:15:01Z',
};

describe('HeadlineItem', () => {
  it('should exist', () => {
    expect(HeadlineItem).toExist();
  });

  describe('render', () => {
    it('should render article to page correctly', () => {
      const headline = ReactTestUtils
        .renderIntoDocument(<Router><HeadlineItem {...article} /></Router>);
      const a = ReactTestUtils.findRenderedDOMComponentWithTag(headline, 'a');
      const href = a.getAttribute('href');

      expect(href).toEqual('https://techcrunch.com/2017/05/22/judah-vs-the-machines/');
    });

    describe('headline exists', () => {
      const headline = ReactTestUtils
        .renderIntoDocument(<Router><HeadlineItem {...article} /></Router>);
      const a = ReactTestUtils.findRenderedDOMComponentWithTag(headline, 'a');

      it('should exist', () => {
        expect(a).toExist();
      });
    });
  });
});
