import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import Sidebar from 'Sidebar';
import Headline from 'Headline';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="ui bottom attached segment">
					<Sidebar/>
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
													<div className="menu">
														<div className="header">Sort by</div>
														<div className="item">Time</div>
														<div className="item">Votes</div>
													</div>
												</div>
											</div>
										</div>

										<div className="right floated column">
											<div className="ui fluid icon input">
												<input type="text" placeholder="Search..."/>
												<i className="search icon"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="main ui container">
							<Route path="/news/:sourceKey" component={Headline}/>
						</div>
					</div>
				</div>
			</Router>
		);

		// return (
		//     <div className="ui bottom attached segment">
		//         <Sidebar/>
		//         <div className="pusher">
		//             <div className="main ui container">
		//                 <h2>Headlines</h2>
		//                 <div className="ui divided items">
		//                     <Headline />
		//                 </div>
		//             </div>
		//         </div>
		//     </div>
		// );
	}
}

export default App;

/*
 * <div className="ui container">
 <h2>Articles</h2>
 <app-article-list-header></app-article-list-header>
 <div className="ui divided items">
 <app-article
 *ngFor="let article of articles | async"
 [article]="article"
 className="item"></app-article>
 </div>
 </div>

 */
