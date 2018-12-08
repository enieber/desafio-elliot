import React from 'react';
import {
  Redirect,
} from "react-router-dom";

import { logout, hasAuthentication as hasToken  } from '../auth';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasToken: true,
    };
  }

  componmentDidMount() {
    const token = hasToken();
    this.setState({ hasToken: token });
  }
    
  render() {
    const { hasToken } = this.state;

    return (
	<div>
	    Home page
	    <button
		onClick={() => {
		  logout();
		  this.setState({ hasToken: false });
		}}
	    >
		Sair</button>
	    {hasToken ? (<div/>) : (<Redirect to={'/login'} />)}
	</div>
    );
  }
}

