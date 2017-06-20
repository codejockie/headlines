import React from 'react';
import { shallow } from 'enzyme';
import { Dimmer, Loader } from 'semantic-ui-react';

import Article from '../../components/Article.jsx';

describe('<Article />', () => {
  it('renders correctly to page', () => {
    const article = shallow(<Article />);
    expect(article.length).to.equal(1);
  });

  it('renders a Dimmer', () => {
    const wrapper = shallow(<Article />);
    const dimmer = wrapper.find(Dimmer);
    expect(dimmer).to.have.length.of(1);
  });

  it('renders a Loader inside a Dimmer', () => {
    const wrapper = shallow(<Article />);
    const loader = wrapper.find(Loader);
    expect(loader).to.have.length.of(1);
  });
});
