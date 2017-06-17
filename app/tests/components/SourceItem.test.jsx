import React from 'react';
import { shallow } from 'enzyme';

import SourceItem from '../../components/SourceItem.jsx';

describe('<SourceItem />', () => {
  it('renders correctly to page', () => {
    const wrapper = shallow(<SourceItem />);
    expect(wrapper.length).to.equal(1);
  });

  describe('render', () => {
    let sources;

    beforeEach(() => {
      sources = {
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
    });

    it('should have an anchor element', () => {
      const wrapper = shallow(<SourceItem {...sources} />);
      expect(wrapper.find('a')).to.have.length(1);
    });

    it('should have an anchor element with its text attr set', () => {
      const wrapper = shallow(<SourceItem {...sources} />);
      expect(wrapper.find('a').text()).to.equal('ABC News (AU)');
    });

    it('should have props for name and id', () => {
      const wrapper = shallow(<SourceItem {...sources} />);
      expect(wrapper.props().name).to.be.defined;
      expect(wrapper.props().id).to.be.defined;
    });
  });
});
