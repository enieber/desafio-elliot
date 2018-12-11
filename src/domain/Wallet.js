import React from 'react';
import {
  Redirect,
} from 'react-router-dom';

export default class Wallet extends React.Component {
  render() {
    const id = this.props.match.params.id;

    return (
      <div>walet {id}</div>
    )
  }
}

