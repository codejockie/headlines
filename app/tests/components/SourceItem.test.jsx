import React from 'react';
import { findDOMNode } from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';

import SourceItem from '../../components/SourceItem.jsx';

describe('SourceItem', () => {
  it('should exist', () => {
    expect(SourceItem).toExist();
  });

  describe('render', () => {
    it('should render source to page correctly', () => {
      const sources = {
        id: 'abc-news-au',
        name: 'ABC News (AU)',
        description: 'Australia\'s most trusted source of local, national and world news. ' +
        'Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.',
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
      const source = ReactTestUtils
        .renderIntoDocument(<SourceItem {...sources} />);
      const anchorText = findDOMNode(source).querySelector('a');

      expect(anchorText.textContent).toEqual('ABC News (AU)');
    });
  });
});
