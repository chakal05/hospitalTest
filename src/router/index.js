import React from 'react';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import history from '../services/history';
import Landing from '../pages/landing';
import SignUp from '../pages/signUp';
import Login from '../pages/login';
import Annonser from '../pages/annonser';
import Postad from '../pages/postJob';
import Postedjob from '../pages/showPostedJob';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path='/'
          exact
          component={Landing}
        />
        <Route
          path='/signup'
          component={SignUp}
        />
        <Route path='/login' component={Login} />

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
            component={Postedjob}
          />
        }
        <Route
          path='/post'
          component={Postad}
          isPrivate
        />

        {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
        {/* <Route component={<h1> 404</h1>} /> */}
      </Switch>
    </Router>
  );
}
