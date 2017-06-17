import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Grid, Icon, Dropdown, Dimmer, Loader } from 'semantic-ui-react';

import { startLogout } from '../actions/LoginActions.jsx';
import capitalise from '../helpers/Capitalise.jsx';
import createOptions from '../helpers/OptionsCreator.jsx';
import Headline from './Headline.jsx';
import loadHeadlines from '../actions/HeadlineActions.jsx';
import loadSources from '../actions/SourceActions.jsx';
import SourceItem from './SourceItem.jsx';
import SourceStore from '../stores/SourceStore.jsx';

/**
 * SourceSidebar
 * @class
 */
export default class SourceSidebar extends Component {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.getSources = this.getSources.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);

    this.state = {
      options: [
        {
          key: 'top',
          icon: 'line chart',
          text: 'Top',
          value: 'top',
          content: 'Top',
        },
        {
          key: 'latest',
          icon: 'newspaper',
          text: 'Latest',
          value: 'latest',
          content: 'Latest',
        },
      ],
      sources: null,
      visible: false,
      title: 'Today\'s Headlines',
    };

    this.sourceKey = 'reddit-r-all';
  }

  /**
   * componentDidMount
   * @method
   * @returns {void}
   */
  componentDidMount() {
    loadSources();
    SourceStore.on('source_change', this.getSources);
  }

  /**
   * componentWillUnmount
   * @method
   * @returns {void}
   */
  componentWillUnmount() {
    SourceStore.removeListener('source_change', this.getSources);
  }

  /**
   * onChange handles the sortBy filter, calling the loadHeadlines method.
   * @method
   * @param {string} e
   * @param {string} data
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
   * @param {string} e
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
   * handleClick: click handler for changing the currently selected source to a different source
   * @method
   * @param {string} sourceId
   * @param {Array} sortBysAvailable
   * @returns {void}
   */
  handleClick(sourceId, sortBysAvailable) {
    loadHeadlines(sourceId);
    this.sourceKey = sourceId;

    this.setState({
      options: createOptions(sortBysAvailable),
      title: capitalise(sourceId),
    });
    this.toggleVisibility();
  }

  /**
   * toggleVisibility is used to hide/show the sources sidebar
   * @method
   * @returns {void}
   */
  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
  }

  /**
   * render
   * @method
   * @returns {div} div
   */
  render() {
    const { options, sources, title, visible } = this.state;

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
            <Dropdown text='Sort headlines'
                      floating
                      labeled
                      button
                      className='icon'
                      icon='sort'
                      options={options}
                      onChange={this.onChange}
            />
          </Grid.Column>
          <Grid.Column>
            <div className="page-actions">
              <a href="#logout" className="ui label" onClick={this.onLogout}>Logout</a>
            </div>
          </Grid.Column>
        </Grid>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation="overlay"
                   width="wide" visible={visible}
                   icon="labeled"
                   vertical
                   inverted>
            {
              sources ? (
              sources.map(source => (<SourceItem
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
