import React from 'react';
import { shallow } from 'enzyme';
import { ShareButtons, generateShareIcon } from 'react-share';

import ShareIcon from '../../components/ShareIcon.jsx';
const {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  GooglePlusShareButton,
} = ShareButtons;

const props = {
  url: 'https://techcrunch.com/2017/05/22/judah-vs-the-machines/',
  title: 'Judah Vs. The Machines',
};

describe('<ShareIcon />', () => {
  it('should render correctly to page', () => {
    const wrapper = shallow(<ShareIcon />);
    expect(wrapper.length).to.equal(1);
  });

  it('should have <FacebookShareButton /> and <TwitterShareButton />', () => {
    const wrapper = shallow(<ShareIcon />);
    const fb = wrapper.find(FacebookShareButton);
    const twitter = wrapper.find(TwitterShareButton);
    expect(fb).to.have.length.of(1);
    expect(twitter).to.have.length.of(1);
  });

  it('should have <WhatsappShareButton /> and <GooglePlusShareButton />', () => {
    const wrapper = shallow(<ShareIcon />);
    const whatsapp = wrapper.find(WhatsappShareButton);
    const googlePlus = wrapper.find(GooglePlusShareButton);
    expect(whatsapp).to.have.length.of(1);
    expect(googlePlus).to.have.length.of(1);
  });

  it('should have props for title and url', () => {
    const wrapper = shallow(<ShareIcon {...props} />);
    expect(wrapper.props().title).to.be.defined;
    expect(wrapper.props().url).to.be.defined;
  });
});
