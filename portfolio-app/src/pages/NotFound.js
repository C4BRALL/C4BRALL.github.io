import React, {Component} from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div 
        style={{ display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', }}
      >
        <h1>Not Found 404</h1>
      </div>
    );
  }
}