import React from 'react';
import styled from 'styled-components';

const GraphContainer = styled.div`
  display: flex;
  flex: 3;
  justify-content: center;
  align-items: center;
`;

export default class Graph extends React.PureComponent {
  render() {
    return (
	<GraphContainer>
	<p>WIP - Em breve um grafico aqui</p>
      </GraphContainer>
    );
  }
}

