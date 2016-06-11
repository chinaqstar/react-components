import React, { Component, PropTypes} from 'react';
import classNames from 'classnames';

class Button extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {
      children,
      color,
      variant,
      size,
      disabled,    // 与 button 的 disabled 属性相同
      className,
      style,
      prefixCls,
      ...others
    } = this.props;

    const classes = classNames({
      [prefixCls]: true,
      [`${prefixCls}--${color}`]: color,
      [`${prefixCls}--${variant}`]: variant,
      [`${prefixCls}--${size}`]: size,
      [className]: className
    });

    return (
      <button
        {...others}
         className={classes}
         style={style}
         disabled={disabled}>
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.object,
}

Button.defaultProps = {
  color: 'default',
  variant: 'default',
  size: 'default',
  disabled: false,
  prefixCls: 'mui-btn'
}

export default Button;
