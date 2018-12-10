import React from 'react';
import {
  Redirect,
} from "react-router-dom";

import { logout, hasAuthentication as hasToken  } from '../auth';

import Graph from '../Graph';  
import Clients from '../Clients';
import Header from './Header';

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
	<React.Fragment>
	    <Header
		logout={() => {
		    logout();
		    this.setState({ hasToken: false });
		}}
	    />
	    <Graph/>
	    <Clients/>
	      <button
		onClick={() => 
		  alert('WIP - Em breve tera a parte de filtragem')
		}
	      >Filtro</button>

	   {hasToken ? (<div/>) : (<Redirect to={'/login'} />)}
	</React.Fragment>
    );
  }
}

