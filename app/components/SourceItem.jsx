import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SourceItem extends Component {
  render() {
    const { name, id } = this.props;

    return (
      <div className="item">
        <div className="menu">
          <div className="item news-item">
						<span className="side-news-item">
							<span className="side-news-item">
									<NavLink to={`/news/${id}`} activeClassName="active">
											{name}
									</NavLink>
							</span>
						</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SourceItem;
