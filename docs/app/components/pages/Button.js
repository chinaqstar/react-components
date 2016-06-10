import React, { Component, PropTypes } from 'react';
import { Button } from 'rc-ui';

class ButtonPage extends Component {

  render() {
    return (
      <div>
        <h1>
           正常按钮
        </h1>
        <div>
        <Button>搜索</Button>
        <Button color='primary'>搜索</Button>
        <Button color='danger'>搜索</Button>
        <Button color='accent'>搜索</Button>
        </div>
        <div>
          <Button disabled={true}>搜索</Button>
          <Button disabled={true} color='primary'>搜索</Button>
          <Button disabled={true} color='danger'>搜索</Button>
          <Button disabled={true} color='accent'>搜索</Button>
        </div>




        <h1>
           按钮颜色反转(variant="flat")
        </h1>
        <div>
          <Button variant="flat">搜索</Button>
          <Button variant="flat" color='primary'>搜索</Button>
          <Button variant="flat" color='danger'>搜索</Button>
          <Button variant="flat" color='accent'>搜索</Button>
        </div>
        <div>
          <Button variant="flat" disabled={true}>搜索</Button>
          <Button variant="flat" disabled={true} color='primary'>搜索</Button>
          <Button variant="flat" disabled={true} color='danger'>搜索</Button>
          <Button variant="flat" disabled={true} color='accent'>搜索</Button>
        </div>




        <h1>
           按钮高度（z轴）增加(variant="raised")
        </h1>
        <div>
          <Button variant="raised">搜索</Button>
          <Button variant="raised" color='primary'>搜索</Button>
          <Button variant="raised" color='danger'>搜索</Button>
          <Button variant="raised" color='accent'>搜索</Button>
        </div>
        <div>
          <Button variant="raised" disabled={true}>搜索</Button>
          <Button variant="raised" disabled={true} color='primary'>搜索</Button>
          <Button variant="raised" disabled={true} color='danger'>搜索</Button>
          <Button variant="raised" disabled={true} color='accent'>搜索</Button>
        </div>




        <h1>
           按钮形状变换(variant="fab")
        </h1>
        <div>
          <Button variant="fab">+</Button>
          <Button variant="fab" color='primary'>+</Button>
          <Button variant="fab" color='danger'>+</Button>
          <Button variant="fab" color='accent'>+</Button>
        </div>
        <div>
          <Button variant="fab" disabled={true}>+</Button>
          <Button variant="fab" disabled={true} color='primary'>+</Button>
          <Button variant="fab" disabled={true} color='danger'>+</Button>
          <Button variant="fab" disabled={true} color='accent'>+</Button>
        </div>




        <h1>
           按钮大小变换(size="small")
        </h1>
        <div>
          <Button size="small" color="primary">button</Button>
          <Button size="small" color="primary" variant="flat">button</Button>
          <Button size="small" color="primary" variant="raised">button</Button>
          <Button size="small" color="primary" variant="fab">+</Button>
        </div>
        <div>
          <Button color="primary">button</Button>
          <Button color="primary" variant="flat">button</Button>
          <Button color="primary" variant="raised">button</Button>
          <Button color="primary" variant="fab">+</Button>
        </div>
        <div>
          <Button size="large" color="primary">button</Button>
          <Button size="large" color="primary" variant="flat">button</Button>
          <Button size="large" color="primary" variant="raised">button</Button>
          <Button size="large" color="primary" variant="fab">+</Button>
        </div>
      </div>
    );
  }
}

export default ButtonPage;
