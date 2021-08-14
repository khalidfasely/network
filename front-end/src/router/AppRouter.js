import React from 'react';
import NotFoundPage from '../components/NotFoundPage';
import Login from '../components/Login';
import Register from '../components/Register';
import Nav from '../components/Nav';
import { Router, Route, Switch } from 'react-router-dom';
//import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import App from '../components/App';
import SignRoute from './SignRoute';
import Profile from '../components/Profile';
import PrivateRoute from './PrivateRoute';
import Following from '../components/FollowingPage';

export const history = createHistory();

const AppRoute = () => (
  <Router history={history}>
    <div>
      <Nav />
      <Switch>
        <Route path="/" component={App} exact={true} />
        <SignRoute path="/login" component={Login} />
        <SignRoute path="/register" component={Register} />
        <Route path="/user/:id" component={Profile} />
        <PrivateRoute path="/following" component={Following} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

//<Route strict path="/user/:id" component={ReduxUser} />

export default AppRoute;
