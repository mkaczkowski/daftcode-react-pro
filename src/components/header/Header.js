// @flow
import React from 'react';
import styled from 'styled-components';

import LanguageChooser from '../languageChooser';

const HeaderContainer = styled.div`
  background: green;
  position: fixed;
  width: 100%;
  overflow: hidden;
  z-index: 1;
`;

type HeaderProps = {
  children: any,
};

class HeaderComponent extends React.Component<HeaderProps> {
  static LanguageChooser = LanguageChooser;
  static Menu = () => <div>2</div>;
  static Logo = () => <div>2</div>;

  render() {
    const { children } = this.props;
    return <HeaderContainer>{children}</HeaderContainer>;
    // const children = React.Children.map(this.props.children, child => {
    //   return React.cloneElement(child, {stage, handleClick: this.handleClick})
    // })
  }
}

export default HeaderComponent;
