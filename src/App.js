import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import styled from 'styled-components'

import './App.css';
import { logout, hasAuthentication } from './auth';
import Login from './user/Login';
import Home from './home/Home';

const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props =>
	hasAuthentication() ? (
          <Home {...props} />
        ) : (        
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
  }

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
	<Router>
          <Main>	
	    <Route
	        path="/login"
		component={Login}
	    />
	    <PrivateRoute
		exact
		path="/"
		componet={Home}
	    />
	</Main>
    </Router>
    );
  }
}

export default App;

