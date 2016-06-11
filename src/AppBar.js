import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class AppBar extends Component {

  render() {

    const {
      className,
      prefixCls,
      children,
      ...others,
    } = this.props;

    const classes = classNames({
      [prefixCls]: true,
      [className]: className
    });

    return (
      <div {...others} className={classes}>
        {children}
      </div>
    );
  }
}

AppBar.propTypes = {
  prefixCls: PropTypes.string
}

AppBar.defaultProps = {
  prefixCls: 'mui-appbar'
}

export default AppBar;
