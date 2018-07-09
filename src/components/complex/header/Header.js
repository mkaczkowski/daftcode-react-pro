// @flow
import React from 'react';
import styled from 'styled-components';
import Button from '../../common/button/Button';
import { media } from '@theme';
import _throttle from 'lodash/throttle';
import Hamburger from '../../common/hamburger/Hamburger';
import LogoImage from '@assets/icon.png';

const HeaderContainer = styled.header`
  height: ${({ isScrolled }) => (isScrolled ? '3.5rem' : '4.5rem')};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0 1rem;
  background-color: ${({ theme, isScrolled }) =>
    isScrolled ? theme.components.header.scrolledBackground : theme.components.header.background};
  color: ${({ theme }) => theme.components.header.color};
  width: 100%;
  overflow: hidden;
  z-index: 1;
  transition-duration: 0.5s;
  transition-property: transform, height, background-color;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  box-shadow: ${({ theme, isScrolled }) => (isScrolled ? '0 2px 5px rgba(0, 0, 0, 0.26)' : 'none')};
`;

const DesktopNavigation = styled.nav`
 ${media.tablet`display:none;`};
 margin: 0 2.5rem 0 auto;
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

  & > :not(:last-child){
      margin-right: 1.5rem;
    }
`;

const MobileNavigation = styled(Hamburger)`
  display: none;
  ${media.tablet`display:block;`};
  margin-right: 2.5rem;
  z-index: 1;
`;

const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 80%;
  margin-right: auto;
`;

export type HeaderProps = {
  sections: Array<string>,
  activeSection?: string,
};

type HeaderState = {
  isScrolled: boolean,
};

class HeaderComponent extends React.Component<HeaderProps, HeaderState> {
  rootNode = React.createRef();
  scrollY: number;
  height: number;
  scrollListener: any;

  state = {
    isScrolled: false,
  };

  componentDidMount() {
    this.initializeScroll();
  }

  componentWillUnmount() {
    this.endScroll();
  }

  initializeScroll = () => {
    if (!this.scrollListener) {
      this.scrollListener = _throttle(this.handleScroll, 50);
      window.addEventListener('scroll', this.scrollListener);
      const { height } = this.rootNode.current.getBoundingClientRect();
      this.scrollY = window.scrollY;
      this.height = height + 200; //y offset
    }
  };
  endScroll() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  handleScroll = () => {
    //TODO add throttle
    this.scrollY = window.scrollY;
    const isScrolled = this.scrollY !== undefined && this.scrollY > 0;
    this.setState({ isScrolled });
  };

  renderLogo = () => <Logo src={LogoImage} />;

  renderDesktopNavigation = () => (
    <DesktopNavigation>
      <ul>
        {this.props.sections.map(section => (
          <li>
            <Button flat active={this.props.activeSection === section}>
              {section.toUpperCase()}
            </Button>
          </li>
        ))}
      </ul>
    </DesktopNavigation>
  );

  renderMobileNavigation = () => (
    <MobileNavigation
      href="#menu"
      onClick={() => {
        alert('click');
      }}
    >
      <span>Menu</span>
    </MobileNavigation>
  );

  render() {
    const { isScrolled } = this.state;

    return (
      <HeaderContainer isScrolled={isScrolled} innerRef={this.rootNode}>
        <InnerWrapper>
          {this.renderLogo()}
          {this.renderDesktopNavigation()}
          {this.renderMobileNavigation()}
        </InnerWrapper>
      </HeaderContainer>
    );
  }
}

export default HeaderComponent;
