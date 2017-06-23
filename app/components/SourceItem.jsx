import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

/**
 * SourceItem
 * @class
 * @extends React.Component
 */
export default class SourceItem extends Component {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  /**
   * onClick passes the id of the selected news source to its parent component (Sidebar)
   * @method
   * @param {string} event The event properties
   * @returns {void}
   */
  onClick(event) {
    event.preventDefault();
    const { sortBysAvailable } = this.props;
    const sourceId = event.target.getAttribute('href');
    this.props.onClick(sourceId, sortBysAvailable);
  }

  /**
   * render
   * @method
   * @returns {Menu} Menu
   */
  render() {
    const { name, id, } = this.props;

    return (
      <Menu.Item name={name}>
        <a href={`${id}`} onClick={this.onClick}>
          {name}
        </a>
      </Menu.Item>
    );
  }
}
