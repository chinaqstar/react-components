import React, { Component, PropTypes } from 'react';
import Home from './Home';
import { AppBar } from 'rc-ui';
import '../../scss/_master.scss';

class Master extends Component {

  componentDidMount() {
    console.log('Master.componentDidMount');
  }

  render() {

    return (
      <div>
        <AppBar className='mui--appbar-height mui--appbar-line-height'>
          <div className='bar-left'>
            <a className='left-text' href="#/">RCUI</a>
          </div>
        </AppBar>


        <ul>
          <li><a href="#/home">Home</a></li>
          <li><a href="#/button">Button 按钮</a></li>
          <li><a href="#/appbar">AppBar 导航栏</a></li>
        </ul>

        {this.props.children || <Home />}
      </div>
    );
  }
}

export default Master;
