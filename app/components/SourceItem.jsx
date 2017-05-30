import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SourceItem extends Component {
  constructor(props){
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
      <div className="item">
        <div className="menu">
          <div className="item news-item">
            <span className="side-news-item">
              <a href={`${id}`} onClick={this.onClick}>
                  {name}
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SourceItem;
