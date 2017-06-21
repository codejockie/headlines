import React, { Component } from 'react';
import { Grid, Button, Dropdown, Icon, Segment, Header, Divider } from 'semantic-ui-react';

import { githubProvider, googleProvider } from '../firebase/index.jsx';
import { startLogin } from '../actions/AuthActions.jsx';
import { setSourceKey } from '../actions/HeadlineActions.jsx';
import loadSources from '../actions/SourceActions.jsx';
import SourceStore from '../stores/SourceStore.jsx';

/**
 * Login Component
 * @class
 */
export default class Login extends Component {
  /**
   * @constructor
   *
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
    this.onGoogleLogin = this.onGoogleLogin.bind(this);
    this.onGitHubLogin = this.onGitHubLogin.bind(this);
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
   * getSources sets the state of the component with that of the fetched sources.
   * @method
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
   * onChange: sets the default news source
   * @method
   * @param {Object} e
   * @param {Object} data
   * @returns {void}
   */
  onChange(e, data) {
    e.preventDefault();
    this.setState({
      disabled: false,
    });
    setSourceKey(data.value);
  }

  /**
   * onGoogleLogin initiates login process with Google.
   * @method
   * @returns {void}
   */
  onGoogleLogin() {
    startLogin(googleProvider);
  }

  /**
   * onGitHubLogin initiates login process with GitHub.
   * @method
   * @returns {void}
   */
  onGitHubLogin() {
    startLogin(githubProvider);
  }

  /**
   * render
   * @method
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
              search={true}
              options={sources}
              placeholder='Select News Source'
              onChange={this.onChange}
              onSearchChange={this.onChange}
              disabled={isFetching}
              loading={isFetching}
            />
            <Segment>
              <Header as="h1" textAlign="center">Newslines</Header>
              <Header as="h2" icon textAlign="center">
                <Icon name="user" circular />
              </Header>
              <Divider section hidden />
              <Button color="google plus" disabled={disabled} fluid onClick={this.onGoogleLogin}>
                <Icon name="google plus" />
                Login with Google
              </Button>
              <Divider horizontal>Or</Divider>
              <Button color="green" disabled={disabled} fluid onClick={this.onGitHubLogin}>
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
