import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Home from './Home';
import { AppBar } from 'rc-ui';
import '../../scss/_master.scss';

class Master extends Component {

  render() {

    return (
      <div>
        <AppBar className='mui--appbar-height mui--appbar-line-height'>
          <div className='bar-left'>
            <a className='left-text' href="/">RCUI</a>
          </div>
        </AppBar>


        <ul>
          <li><Link to="/">Home 主页</Link></li>
          <li><Link to="/button">Button 按钮</Link></li>
          <li><a href="/appbar">AppBar 导航栏</a></li>
        </ul>

        {this.props.children || <Home />}
      </div>
    );
  }
}

export default Master;
