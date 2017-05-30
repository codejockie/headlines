import React, { Component } from 'react';

import * as HeadlineActions from '../actions/HeadlineActions';
import SourceItem from 'SourceItem';
import SearchForm from 'SearchForm';
import SourceStore from '../stores/SourceStore';
import * as SourceActions from '../actions/SourceActions';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.showSearch = this.showSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      sources: SourceStore.getAll(),
      searchVisible: false
    };

    SourceActions.loadSources();
  }

  componentWillMount() {
    SourceStore.on('sourcechange', () => {
      this.setState({
        sources: SourceStore.getAll()
      })
    })
  }

  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    });
  }

  handleSearch(val) {

  }

  handleClick(sourceId) {
    HeadlineActions.loadHeadlines(sourceId);
  }

  render() {
    const { sources } = this.state;

    return (
      <div className="sidebar-container">
        <div className="ui container visible fixed inverted blue left vertical sidebar menu">
          <div className="ui icon input large" onClick={this.showSearch}>
            <SearchForm searchVisible={this.state.searchVisible}
                        onSubmit={this.handleSearch}
            />
            <i className="search link icon"></i>
          </div>
          <div className="item">
            <div className="header">News sources</div>
          </div>
          {sources ? (
            sources.map(source => {
              return <SourceItem key={source.id} {...source} onClick={this.handleClick} />
            })) : (
            <div><i className="icon active loader centered"></i>Loading...</div>
          )}
        </div>
      </div>
    );
  }
}

export default Sidebar;
