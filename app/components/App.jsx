import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from 'Sidebar';
import Headline from 'Headline';

class App extends Component {
  render() {
    return (
      <div className="ui bottom attached segment">
        <Sidebar />
        <div className="pusher">
          <div className="main ui container">
            <div className="ui basic">
              <h1 className="ui header">Headlines</h1>
              <div className="ui grid">
                <div className="four column row">
                  <div className="left floated column">
                    <div className="ui buttons">
                      <div
                        className="right attached ui icon top left pointing dropdown blue button">
                        <i className="sort content descending icon"></i>
                        <span className="text">Sort</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main ui container">
            <Route path="/news/:sourceKey" component={Headline} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
