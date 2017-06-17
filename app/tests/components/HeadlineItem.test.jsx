import React from 'react';
import { mount, shallow } from 'enzyme';

import HeadlineItem from '../../components/HeadlineItem.jsx';

const article = {
  author: 'Jordan Crook',
  title: 'Judah Vs. The Machines',
  description: 'And now we present to the world: Judah Vs. The Machines, an eight-episode web series that follows comedian Judah Friedlander as he takes on the world\'s most..',
  url: 'https://techcrunch.com/2017/05/22/judah-vs-the-machines/',
  urlToImage: 'https://tctechcrunch2011.files.wordpress.com/2017/05/judah-friedlander-car.jpg?w=764&h=400&crop=1',
  publishedAt: '2017-05-22T16:15:01Z',
};

describe('<HeadlineItem />', () => {
  it('renders correctly to page', () => {
    const wrapper = shallow(<HeadlineItem />);
    expect(wrapper.length).to.equal(1);
  });

  it('should have an anchor and a button element', () => {
    const wrapper = mount(<HeadlineItem {...article} />);
    expect(wrapper.find('a')).to.have.length(1);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have props for author, description, title, url, urlToImage and publishedAt', () => {
    const wrapper = shallow(<HeadlineItem {...article} />);
    expect(wrapper.props().author).to.be.defined;
    expect(wrapper.props().description).to.be.defined;
    expect(wrapper.props().title).to.be.defined;
    expect(wrapper.props().url).to.be.defined;
    expect(wrapper.props().urlToImage).to.be.defined;
    expect(wrapper.props().publishedAt).to.be.defined;
  });

  it('should have an anchor element with its text attr set', () => {
    const wrapper = mount(<HeadlineItem {...article} />);
    expect(wrapper.find('a').text()).to.equal('Read from source');
    expect(wrapper.find('button').text()).to.equal('Read here');
  });
});
