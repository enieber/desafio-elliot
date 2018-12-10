import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";

import { get as getRequest } from './request';

const ClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 50vh;
`;

const List = styled.ul`
  overflow: scroll;
  list-style: none;
  margin: 0;
  padding: 1em;
`;

const ItemList = styled.li`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  justify-content: space-between;
  aling-items: stretch;
  border: 0.1rem solid #999;
  padding: 1em;
`;

const ClientData = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contacts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;

  ${media.greaterThan("large")`
    flex-direction: row;
  `}
`;

export default class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      listClients: [],
    }
  }
  
  async  componentDidMount() {
    try {
	this.setState({ loading: true });
	const responseClients = await getRequest('/clients');
	const listClients = await responseClients.json();
	this.setState({
	  listClients,
          loading: false,
	});
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <div>Carregando...</div>
      );
    }

    if (this.state.listClients == 0) {
      return (
        <div>Nenhum cliente </div>
      );
    }

    return (
	<ClientsContainer>
	  <List>
	  {this.state.listClients.map((item) => {
	      return (
		<ItemList
		  onClick={() => {alert(item.id)}}>
		  <ClientData>
		    <h3
		      style={{
		        fontSize: '14px',
			fontWeigth: 'bold',
		      }}
		    >
			{item.name}</h3>
		    <p
		    style={{
		      fontSize: '14px',
		    }}
		  >
		      {item.has_admin ? 'Administrando' : 'Não administrado'}</p>
		  </ClientData>
		  <Contacts>
		 		    <p
		     style={{
		      fontSize: '14px',
		    }}
		    >{item.email}</p>
		    <p
		      style={{
			  fontSize: '14px',
			  paddingLeft: 10,
		      }}>
		    {item.whatsapp}</p>
    

		  </Contacts>  
	      </ItemList>
	      )
	  })}
        </List>
      </ClientsContainer>
    );
  }
}

