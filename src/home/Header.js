import React from 'react';
import styled from 'styled-components';

import { Button } from '../components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2em;
  align-items: center;
  min-height: 10vh;
`;



export default class Header extends React.PureComponent {
    render() {
	return (
	    <HeaderContainer>
		  <h1>Elliot</h1>
		  <Button
			  onClick={this.props.logout}
		    >
		    Sair
		</Button>
	    </HeaderContainer>
	);
    }
}

