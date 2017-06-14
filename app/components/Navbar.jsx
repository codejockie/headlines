import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Menu, Icon } from 'semantic-ui-react';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {};

    this.onClick = this.onClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onClick(e) {
    this.props.onClick(e);
  }

  handleClick(e, { name }) {
    hashHistory.push('/headlines');
  }

  // onClick = (e) => { this.props.onClick(e); };
  // handleItemClick = (e, { name }) => hashHistory.push('/headlines');

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable inverted>
        <Menu.Item onClick={this.onClick}>
          <Icon name="arrow left" size="large" />
          Go back
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          >
            Logout
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
