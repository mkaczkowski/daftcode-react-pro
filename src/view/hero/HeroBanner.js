// @flow
import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import HeroBackground from '@assets/images/heroBackgroud.jpg';
import HeroBackgroundWebp from '@assets/images/heroBackgroud.webp';

const modernizr = require('modernizr');

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
  background-image: url(${props =>
    props.webp === undefined ? '' : props.webp === false ? HeroBackground : HeroBackgroundWebp});
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

class HeroBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      webp: undefined,
    };

    this.testWebpSupport().then(result => this.setState({ webp: result }));
  }

  testWebpSupport = () => {
    return new Promise(function(resolve, reject) {
      modernizr.on('webp', function(result) {
        if (result) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  };

  render() {
    const { min, max, children } = this.props;

    return (
      <HeroContainer>
        <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate={true}>
          <HeroImage webp={this.state.webp} />
        </Parallax>
        <HeroContent>{children}</HeroContent>
      </HeroContainer>
    );
  }
}

export default HeroBanner;
