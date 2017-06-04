import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class SourceItem extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    const sourceId = event.target.getAttribute('href');
    this.props.onClick(sourceId);
  }

  render() {
    const { name, id } = this.props;

    return (
      <Menu.Item name={name}>
        <a href={`${id}`} onClick={this.onClick}>
          {name}
        </a>
      </Menu.Item>
    );
  }
}

export default SourceItem;
