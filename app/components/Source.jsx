import React, {Component} from 'react';

class Source extends Component {
    render() {
        const {name, id} = this.props;

        return (
            <div className="item">
                <div className="menu">
                    <a className="item news-item" href={`/news/${id}`}>
                          <span className="side-news-item">
                            <span className="side-news-item">
                                {name}
                            </span>
                          </span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Source;