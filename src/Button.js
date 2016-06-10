import React, { Component, PropTypes} from 'react';
import classNames from 'classnames';

class Button extends Component {

  constructor(props, context) {
    super(props, context);
  }

  handleClick() {
    console.log(111);
  }

  render() {
    const {
      children,
      color,
      disabled,    // 与 button 的 disabled 属性相同
      className,
      style,
      prefixCls,
      ...others
    } = this.props;

    const classes = classNames({
      [prefixCls]: true,
      [`${prefixCls}--${color}`]: color,
      [className]: className
    });

    return (
      <button
        {...others}
         className={classes}
         style={style}
         disabled={disabled}
         onClick={this.handleClick}>
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.object,
}

Button.defaultProps = {
  color: 'default',
  disabled: false,
  prefixCls: 'mui-btn'
}

export default Button;
