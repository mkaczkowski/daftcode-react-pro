// @flow
import * as React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import styled from 'styled-components';
import HeroBanner from './HeroBanner';
import { media } from '@theme';

const Intro = styled.div`
  margin: auto 0;
  cursor: pointer;
  text-align: center;
  
  & > h1 {
    position: relative;
    font-size: 4.2rem;
    color: ${({ theme }) => theme.colors.text};
    display: inline-block;
    margin: 1.6rem auto 2.3rem;
    font-weight: 600;
    opacity: 1;
    transform: scale(1);
    transition: transform 0.5s ease, opacity 1s ease;
    
    //@include xsMax {
    //.hero {
    //    max-width: 32rem;
    //  & > h1 {
    //      font-size: 3.2rem;
    //    }
    //  }
    //}
`;

const ButtonIntro = styled.button`
  width: auto;
  min-width: 28rem;
  ${media.phone`min-width: 358px;`};
  font-weight: 500;
`;

class Hero extends React.PureComponent<{}> {
  render() {
    return (
      <ParallaxProvider>
        <HeroBanner min={'-30%'} max={'30%'}>
          <Intro id="intro">
            <h1>TITLE</h1>
            <div>
              <ButtonIntro>OK</ButtonIntro>
            </div>
          </Intro>
        </HeroBanner>
      </ParallaxProvider>
    );
  }
}

export default Hero;
