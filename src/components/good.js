import React, { Component } from 'react';
import App from '../App.js'

class Good extends Component {

  render() {
    return (
      <div>
      <p>I hear you saying {this.props.update}. Is that correct?</p>
      </div>
    );
  }
}

export default Good;
