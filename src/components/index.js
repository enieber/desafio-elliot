import styled from 'styled-components';

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const InputStyled = styled.input`
  height: 5vh;
  border: none;
  padding: 1em;
  margin-top: 1em;
`;

export const Button = styled.button`
  padding: 0.5em;
  margin: 1em;
  border: none;

  ${props => (props.small ? `
    height: 5vh;
    width: 25vw;
  ` : `
    height: 10vh;
    width: 35vw;
  `)}
  border-radius: 100px;
  ${props => (props.success ? `
    background: #00b563;
    color: #fff;
  ` : '')}
  ${props => (props.primary == true ? `
     background: #ee2e5d;
     color: #fff;
  ` : '')}
`;
