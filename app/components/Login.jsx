import React, { Component } from 'react';
import { Grid, Button, Icon, Segment, Header, Divider } from 'semantic-ui-react';

import { startLogin } from '../actions/LoginActions';

export default class Login extends Component {
  constructor() {
    super();

    this.onLogin = this.onLogin.bind(this);
  }
  onLogin() {
    startLogin();
  }

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
              <Button color="google plus" fluid onClick={this.onLogin}>
                <Icon name="google plus" /> Login with Google
              </Button>
            </Segment>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}
