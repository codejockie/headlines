import React, { Component } from 'react';
import { Button, Divider, Container, Dropdown, Grid, Header, Icon } from 'semantic-ui-react';

import Headline from 'Headline';
import SourceSidebar from 'Sidebar';
import * as actions from '../actions/actions';
import * as HeadlineActions from '../actions/HeadlineActions';

const options = [
  {
    key: 'top',
    icon: 'line chart',
    text: 'Top  ',
    value: 'top',
    content: 'Top',
  },
  {
    key: 'latest',
    icon: 'newspaper',
    text: 'Latest  ',
    value: 'latest',
    content: 'Latest',
  },
  {
    key: 'popular',
    icon: 'rss',
    text: 'Popular  ',
    value: 'popular',
    content: 'Popular',
  },
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Today\'s Headlines',
    };

    // this.onChange = this.onChange.bind(this);
    this.getSourceKey = this.getSourceKey.bind(this);

    // this.sourceKey = 'reddit-r-all';
  }

  // capitalise(sourceKey) {
  //   return sourceKey.split('-')
  //     .map(word => {
  //       if (word.length <= 3) {
  //         return word.substr(0, word.length).toUpperCase() + word.substr(word.length + 1);
  //       }
  //       return word.charAt(0).toUpperCase() + word.substr(1);
  //     })
  //     .join(' ');
  // }

  getSourceKey(sourceKey) {
    this.sourceKey = sourceKey;

    this.setState({
      title: this.capitalise(sourceKey)
    });
  }

  onLogout(e) {
    e.preventDefault();

    actions.startLogout();
  }

  // onChange(e, data) {
  //   e.preventDefault();
  //
  //   const sortBy = data.value;
  //   HeadlineActions.loadHeadlines(this.sourceKey, sortBy);
  // }

  render() {
    const { title } = this.state;

    return (
      <div>
        <div className="page-actions">
          <a href="#" className="ui label" onClick={this.onLogout}>Logout</a>
        </div>
        <SourceSidebar getSourceKey={this.getSourceKey} />
      </div>
    );
  }
}

export default App;
