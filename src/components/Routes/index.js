import React from 'react';
import asyncComponent from 'components/AsyncComponent';
import {
  // React Router
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const AsyncHome = asyncComponent(() => import('components/Views/Home'));
const AsyncLogin = asyncComponent(() => import('components/Views/Login'));
const AsyncDetails = asyncComponent(() => import('components/Views/Details'));

const Routes = () => (
  <>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <AsyncHome />
          </Route>
          <Route path="/login">
            <AsyncLogin />
          </Route>
          <Route path="/details">
            <AsyncDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  </>
);

export default Routes;
