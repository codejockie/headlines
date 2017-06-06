import React, { Component } from 'react';
import { Proptypes } from 'prop-types';
import { Menu } from 'semantic-ui-react';

// const propTypes = {
//   name: Proptypes.string.isRequired,
//   id: Proptypes.number.isRequired,
//   onClick: Proptypes.func.isRequired,
// };

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

// SourceItem.propTypes = propTypes;

export default SourceItem;
