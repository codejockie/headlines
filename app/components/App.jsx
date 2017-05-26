import React, { Component } from 'react';

import Sidebar from 'Sidebar';

class Headlines extends Component {
    render() {
        return (
            <div className="ui bottom attached segment">
                <Sidebar/>
                <div className="pusher">
                    Headlines
                </div>
            </div>
        );
    }
}

export default Headlines;