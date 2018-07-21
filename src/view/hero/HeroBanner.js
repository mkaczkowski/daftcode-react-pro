// @flow
import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import HeroBackground from '@assets/images/heroBackgroud.jpg';

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const HeroImage = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url(${props => HeroBackground});
`;

const HeroContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class HeroBanner extends React.Component<any> {
  render() {
    const { min, max, children } = this.props;

    return (
      <HeroContainer>
        <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate={true}>
          <HeroImage />
        </Parallax>
        <HeroContent>{children}</HeroContent>
      </HeroContainer>
    );
  }
}

export default HeroBanner;
