import React, { Component } from 'react';

import SourceItem from 'SourceItem';
import { getSources } from '../api/NewsAPI';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: []
    };
  }

  componentDidMount() {
    getSources().then((sources) => {
      this.setState({sources});
    }, (errorMessage) => {
      alert(errorMessage);
    });
  }

  render() {
    const {sources} = this.state;

    return (
      <div className="sidebar-container">
        <div className="ui container visible fixed inverted left vertical sidebar menu">
          <div className="item">
            <div className="header">News sources</div>
          </div>
          {sources ? (
            sources.map(source => {
              return <SourceItem key={source.id} {...source} />
            })) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    );
  }
}

export default Sidebar;
