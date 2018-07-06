import React from 'react';
import './Button.scss';

const handleKeyPress = evt => {
  if (evt.charCode === 32 || evt.charCode === 13) {
    evt.preventDefault();
    evt.target.click();
  }
};

const Button = props => <button className="btn">{props.children}</button>;

Button.defaultProps = {
  role: 'button',
  tabIndex: 0,
  onKeyPress: handleKeyPress,
};

export default Button;
