import React, { Component, PropTypes } from 'react';
import Home from './Home';

class Master extends Component {

  render() {
    return (
      <div>
        <ul>
          <li><a href="#/home">Home</a></li>
          <li><a href="#/button">Button</a></li>
        </ul>
        {this.props.children || <Home />}
      </div>
    );
  }
}

export default Master;
