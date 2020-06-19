import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from './redux/store/index';
import history from './services/history';
import Landing from './pages/landing';
import Annonser from './pages/annonser';
import JobPost from './pages/showClickedOnJob';
import MyHeader from './components/header';
import Container from '@material-ui/core/Container';
import './index.scss';

const storage = store();
function App() {
	return (
		<Provider store={storage}>
			<CssBaseline />
			<Container maxWidth='lg'>
				<Router history={history}>
					<MyHeader />
					<Switch>
						<Route path='/' exact component={Landing} />

						{
							<Route
								exact
								path='/annonser'
								component={Annonser}
							/>
						}
						{<Route path='/annonser/:id' component={JobPost} />}
					</Switch>
				</Router>
			</Container>
		</Provider>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
