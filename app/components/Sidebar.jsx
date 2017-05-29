import React, { Component } from 'react';

import SourceItem from 'SourceItem';
import SearchForm from 'SearchForm';
import * as api from '../api/NewsAPI';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sources: [],
      searchVisible: false
    };
  }

  componentDidMount() {
    api.getSources().then(sources => {
      this.setState({ sources });
    }, error => {
      console.log(error);
      this.setState({ sources: [] });
    });
  }

  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    });
  }

  handleSearch(val) {

  }

  render() {
    const { sources } = this.state;

    return (
      <div className="sidebar-container">
        <div className="ui container visible teal fixed inverted left vertical sidebar menu">
          <div className="ui icon input large" onClick={this.showSearch.bind(this)}>
            <SearchForm searchVisible={this.state.searchVisible}
                        onSubmit={this.handleSearch.bind(this)} />
            <i className="search link icon"></i>
          </div>
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
