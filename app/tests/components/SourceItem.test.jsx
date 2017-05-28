import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactTestUtils from 'react-dom/test-utils';

import SourceItem from 'SourceItem';

describe('SourceItem', () => {
  it('should exist', () => {
    expect(SourceItem).toExist();
  });

  describe('render', () => {
    it('should render source to page correctly', () => {
      const sources = {
        id: 'abc-news-au',
        name: 'ABC News (AU)',
        description: 'Australia\'s most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.',
        url: 'http://www.abc.net.au/news',
        category: 'general',
        language: 'en',
        country: 'au',
        urlsToLogos: {
          small: '',
          medium: '',
          large: '',
        },
        sortBysAvailable: [
          'top',
        ],
      };
      const source = ReactTestUtils.renderIntoDocument(<Router><SourceItem {...sources} /></Router>);
      const $el = $(ReactDOM.findDOMNode(source));
      const actualText = $el.find('a').text();

      expect(actualText).toBe('ABC News (AU)');
    });
  });
});
