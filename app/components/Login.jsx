import React, { Component } from 'react';

import * as actions from '../actions/actions';

export default class Login extends Component {
  onLogin() {
    actions.startLogin();
  }

  render() {
    return (
      <div className="ui middle center aligned grid">
        <div className="column">
          <h2 className="ui blue image header">
            <div className="content">
              Newslines App
            </div>
          </h2>
          <div className="ui fluid large blue button" onClick={this.onLogin}>
            <i className="icon google plus"></i>Login with Google+</div>
        </div>
      </div>
    )
  }
}
