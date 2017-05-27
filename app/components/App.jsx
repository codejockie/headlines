import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import Sidebar from 'Sidebar';

import {Headline} from 'Headline';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="ui bottom attached segment">
                    <Sidebar/>
                    <div className="pusher">
                        <Route exact={true} path="/" render={() => (
                            <h2>Headlines</h2>
                        )}/>
                        <div className="main ui container">
                            <h2>Headlines</h2>
                            <div className="ui divided items"></div>
                            <Route path="/news/:sourceKey" component={Headline}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;

/*
* <div class="ui container">
 <h2>Articles</h2>
 <app-article-list-header></app-article-list-header>
 <div class="ui divided items">
 <app-article
 *ngFor="let article of articles | async"
 [article]="article"
 class="item"></app-article>
 </div>
 </div>

 */