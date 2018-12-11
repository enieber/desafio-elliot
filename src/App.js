import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';

import './App.css';
import { logout, hasAuthentication } from './auth';
import Login from './domain/user/Login';
import Home from './domain/Home';
import Wallet from './domain/Wallet';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const restrict = hasAuthentication() 
return (
  <Route
    {...rest}
    render={props => (restrict ? (rest.path == '/' ?
	(<Home {...props} />) : (<Wallet {...props} />)) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    ))
      }
  />
)};


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route
            path="/login"
            component={Login}
          />
          <PrivateRoute
            exact
            path="/"
	    componet={Home}
	  />
	  <PrivateRoute
	      path="/wallet/:id"
	    componet={Wallet}
          />

        </React.Fragment>
      </Router>
    );
  }
}

export default App;
