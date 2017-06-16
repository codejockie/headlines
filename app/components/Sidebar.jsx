import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Grid, Icon, Dropdown, Dimmer, Loader } from 'semantic-ui-react';

import { startLogout } from '../actions/LoginActions';
import capitalise from '../helpers/Capitalise';
import Headline from './Headline';
import loadHeadlines from '../actions/HeadlineActions';
import loadSources from '../actions/SourceActions';
import SourceItem from './SourceItem';
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
];

class SourceSidebar extends Component {
  constructor(props) {
    super(props);

    this.getSources = this.getSources.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);

    this.state = {
      sources: null,
      visible: false,
      title: 'Today\'s Headlines',
    };

    this.sourceKey = 'reddit-r-all';
  }

  componentDidMount() {
    loadSources();
    SourceStore.on('source_change', this.getSources);
  }

  componentWillUnmount() {
    SourceStore.removeListener('source_change', this.getSources);
  }

  /**
   * onChange handles the sortBy filter, calling the loadHeadlines method.
   * @method
   * @returns {void}
   */
  onChange(e, data) {
    e.preventDefault();

    const sortBy = data.value;
    loadHeadlines(this.sourceKey, sortBy);
  }

  /**
   * onLogout initiates the logout process.
   * @method
   * @returns {void}
   */
  onLogout(e) {
    e.preventDefault();

    startLogout();
  }

  /**
   * getSources sets the state of the component with that of the fetched sources.
   * @method
   * @returns {void}
   */
  getSources() {
    this.setState({
      sources: SourceStore.getAll(),
    });
  }

  /**
   * handleClick is a click handler for a changing the currently selected source to different another
   * @method
   * @returns {void}
   */
  handleClick(sourceId) {
    loadHeadlines(sourceId);
    this.sourceKey = sourceId;

    this.setState({
      title: capitalise(sourceId),
      visible: !this.state.visible,
    });
  }

  /**
   * toggleVisiblitity is used to hide/show the sources sidebar
   * @method
   * @returns {void}
   */
  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
  }

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
            <Button.Group color="blue">
              <Button>
                <Icon name="filter" />
                Sort by
              </Button>
              <Dropdown options={options} onChange={this.onChange} floating button className="icon" />
            </Button.Group>
          </Grid.Column>
          <Grid.Column>
            <div className="page-actions">
              <a href="#logout" className="ui label" onClick={this.onLogout}>Logout</a>
            </div>
          </Grid.Column>
        </Grid>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation="overlay" width="wide" visible={visible} icon="labeled" vertical inverted>
            {sources ? (
              sources
                .map(source => (<SourceItem
                  key={source.id}
                  {...source}
                  onClick={this.handleClick}
                />)))
              : (
                <Dimmer active inverted>
                  <Loader size="large" inline="centered">Loading</Loader>
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
