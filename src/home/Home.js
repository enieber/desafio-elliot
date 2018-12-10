import React from 'react';
import {
  Redirect,
} from "react-router-dom";
import styled from 'styled-components';

import { logout, hasAuthentication as hasToken  } from '../auth';

import Clients from '../Clients';
import Header from './Header';

const Container = styled.div`
 background-image:
    linear-gradient(
      45deg, 
      #f4c453,
      #fbfe55
    );

`;

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
	<Container>
	    <Header
		logout={() => {
		    logout();
		    this.setState({ hasToken: false });
		}}
	    />
	    <Clients/>
	   {hasToken ? (<div/>) : (<Redirect to={'/login'} />)}
	</Container>
    );
  }
}

