import React, { Component } from 'react';
import { Grid, Button, Dropdown, Icon, Segment, Header, Divider } from 'semantic-ui-react';

import { githubProvider, googleProvider } from '../firebase/index';
import { startLogin } from '../actions/AuthActions';
import { setSourceKey } from '../actions/HeadlineActions';
import loadSources from '../actions/SourceActions';
import SourceStore from '../stores/SourceStore';

/**
 * @class Login
 * @extends React.Component
 */
export default class Login extends Component {
  /**
   * @description Creates an instance of Login
   * @memberOf Login
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      sources: null,
      isFetching: true,
      disabled: true,
    };

    this.getSources = this.getSources.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  /**
   * @description componentDidMount
   * @method
   * @memberOf Login
   * @returns {void}
   */
  componentDidMount() {
    loadSources();
    SourceStore.on('source_change', this.getSources);
  }

  /**
   * @description componentWillUnmount
   * @method
   * @memberOf Login
   * @returns {void}
   */
  componentWillUnmount() {
    SourceStore.removeListener('source_change', this.getSources);
  }

  /**
   * @description sets the state of the component with that of the fetched sources.
   * @method
   * @memberOf Login
   * @returns {void}
   */
  getSources() {
    let sources = SourceStore.getAll();
    sources = sources.map(source => (
      {
        key: source.id,
        text: source.name,
        value: source.id,
      }
    ));
    this.setState({
      sources,
      isFetching: false,
    });
  }

  /**
   * @description sets the default news source
   * @method
   * @memberOf Login
   * @param {Object} event The event properties
   * @param {Object} data The event data
   * @returns {void}
   */
  onChange(event, data) {
    event.preventDefault();
    this.setState({
      disabled: false,
    });
    setSourceKey(data.value);
  }

  /**
   * @description passed an auth provider, it initiates the auth process for the supplied provider
   * @method
   * @memberOf Login
   * @param {Object} authProvider The authentication provider to use
   * @returns {void}
   */
  onLogin(authProvider) {
    startLogin(authProvider);
  }

  /**
   * @description renders the Login component
   * @method
   * @memberOf Login
   * @returns {Grid} Grid
   */
  render() {
    const { disabled, isFetching, sources } = this.state;
    return (
      <Grid centered columns={4}>
        <Grid.Column>
          <div className="content">
            <Dropdown
              fluid
              search
              options={sources}
              placeholder='Select News Source'
              onChange={this.onChange}
              disabled={isFetching}
              loading={isFetching}
            />
            <Segment>
              <Header as="h1" textAlign="center">Newslines</Header>
              <Header as="h2" icon textAlign="center">
                <Icon name="user" circular />
              </Header>
              <Divider section hidden />
              <Button color="google plus"
                      disabled={disabled}
                      fluid
                      onClick={this.onLogin.bind(null, googleProvider)}>
                <Icon name="google plus" />
                Login with Google
              </Button>
              <Divider horizontal>Or</Divider>
              <Button color="green"
                      disabled={disabled}
                      fluid
                      onClick={this.onLogin.bind(null, githubProvider)}>
                <Icon name="github" />
                Login with GitHub
              </Button>
            </Segment>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}
