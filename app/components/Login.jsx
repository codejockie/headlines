import React, { Component } from 'react';
import { Grid, Button, Icon, Segment, Header, Divider } from 'semantic-ui-react';

import { startLogin } from '../actions/AuthActions.jsx';
import { githubProvider, googleProvider } from '../firebase/index.jsx';

/**
 * Login Component
 * @class
 */
export default class Login extends Component {
  /**
   * @constructor
   */
  constructor() {
    super();

    this.onGoogleLogin = this.onGoogleLogin.bind(this);
    this.onGitHubLogin = this.onGitHubLogin.bind(this);
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
    return (
      <Grid centered columns={4}>
        <Grid.Column>
          <div className="content">
            <Segment>
              <Header as="h1" textAlign="center">Newslines</Header>
              <Header as="h2" icon textAlign="center">
                <Icon name="user" circular />
              </Header>
              <Divider section hidden />
              <Button color="google plus" fluid onClick={this.onGoogleLogin}>
                <Icon name="google plus" /> Login with Google
              </Button>
              <Divider horizontal>Or</Divider>
              <Button color="green" fluid onClick={this.onGitHubLogin}>
                <Icon name="github" /> Login with GitHub
              </Button>
            </Segment>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}
