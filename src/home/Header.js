import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 2em;
  padding-right: 2em;
  align-items: center;
  flex: 1;
`;


export default class Header extends React.PureComponent {
    render() {
	return (
	    <HeaderContainer>
		  <h1>Elliot</h1>
		  <button
			  onClick={this.props.logout}
		    >
		    Sair
		</button>
	    </HeaderContainer>
	);
    }
}

