import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Icon, Dropdown, Dimmer, Loader } from 'semantic-ui-react';

import { startLogout } from '../actions/AuthActions.jsx';
import loadHeadlines, { setSourceKey } from '../actions/HeadlineActions.jsx';
import loadSources from '../actions/SourceActions.jsx';
import capitalise from '../helpers/Capitalise.jsx';
import createOptions from '../helpers/OptionsCreator.jsx';
import Headline from './Headline.jsx';
import SourceItem from './SourceItem.jsx';
import HeadlineStore from '../stores/HeadlineStore.jsx';
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

    this.sourceKey = HeadlineStore.getSourceKey() || localStorage.getItem('sourceKey');

    this.state = {
      active: false,
      options: [],
      sources: null,
      user: JSON.parse(localStorage.getItem('user')),
      visible: false,
      title: capitalise(this.sourceKey),
    };
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
   * @returns {void}
   */
  onLogout() {
    startLogout();
  }

  /**
   * getSources: sets the state of the component with that of the fetched sources.
   * @method
   * @returns {void}
   */
  getSources() {
    this.setState({
      sources: SourceStore.getAll(),
    });

    const { sources } = this.state;
    this.getOptions(sources);
  }

  /**
   * getOptions: sets the options
   * @method
   * @param  {Object} sources
   * @returns {Array} sortBysAvailable
   */
  getOptions(sources) {
    const sortBysAvailable = sources.filter(source => source.id === this.sourceKey)
      .map(option => option.sortBysAvailable)
      .reduce((a, b) => a.concat(b), []);

    if (sortBysAvailable) {
      this.setState({
        options: createOptions(sortBysAvailable),
      });
    }
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
    setSourceKey(sourceId);
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
    this.setState({ visible: !this.state.visible, active: !this.state.active });
  }

  /**
   * render
   * @method
   * @returns {div} div
   */
  render() {
    const { active, options, sources, title, visible, user } = this.state;

    return (
      <div>
        <Menu attached="top">
          <Menu.Item>
            <Button basic toggle active={active} onClick={this.toggleVisibility}>
              <Icon name="sidebar" />
            </Button>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <h1 className="ui header">{title}</h1>
            </Menu.Item>
            <Menu.Item>
              <Dropdown
                selection
                search={true}
                options={options}
                placeholder='Sort headlines'
                onChange={this.onChange}
              />
            </Menu.Item>
            <Menu.Item>
              <img className="jk-img-circle" src={user.photoURL} />
            </Menu.Item>
            <Menu.Item name='logout' onClick={this.onLogout} />
          </Menu.Menu>
        </Menu>
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
