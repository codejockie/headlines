import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Grid, Icon, Dropdown, Dimmer, Loader } from 'semantic-ui-react'

import * as actions from '../actions/actions';
import Headline from 'Headline';
import * as HeadlineActions from '../actions/HeadlineActions';
import * as SourceActions from '../actions/SourceActions';
import SourceItem from 'SourceItem';
import SourceStore from '../stores/SourceStore';

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

class SourceSidebar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onLogout = this.onLogout.bind(this);

    this.state = {
      sources: SourceStore.getAll(),
      visible: false,
      title: 'Today\'s Headlines',
    };

    SourceActions.loadSources();
    this.sourceKey = 'reddit-r-all';
  }

  componentWillMount() {
    SourceStore.on('source_change', () => {
      this.setState({
        sources: SourceStore.getAll(),
      })
    })
  }

  capitalise(sourceKey) {
    return sourceKey.split('-')
      .map(word => {
        if (word.length <= 3) {
          return word.substr(0, word.length).toUpperCase() + word.substr(word.length + 1);
        }
        return word.charAt(0).toUpperCase() + word.substr(1);
      })
      .join(' ');
  }

  handleClick(sourceId) {
    HeadlineActions.loadHeadlines(sourceId);
    this.sourceKey = sourceId;

    this.setState({
      title: this.capitalise(sourceId),
      visible: !this.state.visible,
    });
  }

  onChange(e, data) {
    e.preventDefault();

    const sortBy = data.value;
    HeadlineActions.loadHeadlines(this.sourceKey, sortBy);
  }

  onLogout(e) {
    e.preventDefault();

    actions.startLogout();
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { sources, title, visible } = this.state;

    return (
      <div>
        <Grid columns={4} centered>
          <Grid.Column>
            <Button onClick={this.toggleVisibility}>
              <Icon name="sidebar" />
            </Button>
          </Grid.Column>
          <Grid.Column>
            <h1 className="ui header">{title}</h1>
          </Grid.Column>
          <Grid.Column>
            <Button.Group color='blue'>
              <Button>
                <Icon name="sort content descending" />
                Sort by
              </Button>
              <Dropdown options={options} onChange={this.onChange} floating button className='icon' />
            </Button.Group>
          </Grid.Column>
          <Grid.Column>
            <div className="page-actions">
              <a href="#" className="ui label" onClick={this.onLogout}>Logout</a>
            </div>
          </Grid.Column>
        </Grid>
        <Sidebar.Pushable>
          <Sidebar as={Menu}  animation='overlay' width='wide' visible={visible} icon='labeled' vertical inverted>
            {sources ? (
              sources.map(source => {
                return <SourceItem key={source.id} {...source} onClick={this.handleClick} />
              })) : (
              <Dimmer active inverted>
                <Loader size='large' inline="centered">Loading</Loader>
              </Dimmer>
            )}
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Headline />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default SourceSidebar;
