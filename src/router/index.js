import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../services/history';
import Landing from '../pages/landing';
import Annonser from '../pages/annonser';
import JobPost from '../pages/showClickedOnJob';

export default function Routes() {
	return (
		<Router history={history}>
			<Switch>
				<Route path='/' exact component={Landing} />

				{<Route exact path='/annonser' component={Annonser} />}
				{<Route path='/annonser/:id' component={JobPost} />}
			</Switch>
		</Router>
	);
}
