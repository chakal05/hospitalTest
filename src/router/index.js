import React from 'react';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import history from '../services/history';
import Landing from '../pages/landing';
import Annonser from '../pages/annonser';
import ClickedOnJob  from '../pages/showClickedOnJob';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path='/'
          exact
          component={Landing}
        />
        {
          <Route
            exact
            path='/annonser'
            component={Annonser}
          />
        }
        {
          <Route
            path='/annonser/:id'
            component={ClickedOnJob}
          />
        }
      

        {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
        {/* <Route component={<h1> 404</h1>} /> */}
      </Switch>
    </Router>
  );
}
