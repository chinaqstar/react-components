import React, { Component, PropTypes } from 'react';
import { Button } from 'rc-ui';

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        <Button onClick={ () => {console.log(123);} }>搜索</Button>
        <Button variant="flat" color='primary'>搜索</Button>
        <Button variant="flat" color='danger'>搜索</Button>
        <Button variant="flat" color='accent'>搜索</Button>
        <br/>
        <Button disabled={true} color='primary'>搜索</Button>
        <Button disabled={true} color='danger'>搜索</Button>
        <Button disabled={true} color='accent'>搜索</Button>
      </div>
    );
  }
}

export default Home;
