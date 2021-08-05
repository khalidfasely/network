import React from 'react';
import NotFoundPage from '../components/NotFoundPage';
import Login from '../components/Login';
import Register from '../components/Register';
import Nav from '../components/Nav';
import { Router, Route, Switch } from 'react-router-dom';
//import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import App from '../components/App';
//import PrivateRoute from './PrivateRoute';
//import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRoute = () => (
  <Router history={history}>
    <div>
      <Nav />
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={NotFoundPage} activeClassName="is-active" />
      </Switch>
    </div>
  </Router>
);

export default AppRoute;
