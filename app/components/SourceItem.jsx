import React, { Component } from 'react';
import { Proptypes } from 'prop-types';
import { Menu } from 'semantic-ui-react';

class SourceItem extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  /**
   * onClick passes the id of the selected news source to its parent component (Sidebar)
   * @method
   * @returns {void}
   */
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
