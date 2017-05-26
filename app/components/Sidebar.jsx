import React, {Component} from 'react';

import Source from 'Source';

import {getSources} from '../api/NewsAPI';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sources: []
        };
    }

    componentDidMount() {
        getSources().then((sources) => {
            this.setState({sources});
        }, (errorMessage) => {
            alert(errorMessage);
        });
    }

    render() {
        const {sources} = this.state;

        const renderSources = () => {
            return sources.map(source => {
                return <Source key={source.id} {...source}/>
            });
        };
        return (
            <div className="sidebar-container">
                <div className="ui container visible fixed inverted left vertical sidebar menu">
                    <div className="item">
                        <div className="header">News sources</div>
                    </div>
                    {renderSources()}
                </div>
            </div>
        );
    }
}

export default Sidebar;