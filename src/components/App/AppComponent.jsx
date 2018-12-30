import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import About from './About';
import ErrorAlert from './ErrorAlert';
import Search from '../Search';
import Player from '../Player';
import Detail from '../Detail';

class AppComponent extends React.Component {

	componentWillMount() {
		this.props.onLoad();
	}

	render() {
		if (this.props.appLoaded) {
			return (
				<div>
					<Header/>
					<div className="content">
						<Switch>
							<Route exact path="/" component={Search}/>
							<Route exact path="/search" component={Search}/>
							<Route path="/search/playing" component={Detail}/>
							<Route exact path="/about" component={About}/>
						</Switch>
					</div>
					<ErrorAlert />
					<Player />
				</div>
			);
		}
		return (
			<div>
				<Header/>
			</div>
		);
	}
}

export default AppComponent;
