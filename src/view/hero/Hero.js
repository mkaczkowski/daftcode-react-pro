// @flow
import * as React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import styled from 'styled-components';
import HeroBanner from './HeroBanner';
import {media} from './../../theme';
// import Modernizr from "modernizr";

const Intro = styled.div`
  margin: auto 0;
  cursor: pointer;
  text-align: center;
  
  & > h1 {
    position: relative;
    font-size: 4.2rem;
    color: ${({theme}) => theme.colors.text};
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

const ScrollDown = styled.div`
  width: 3.8rem;
  text-align: center;
  margin-bottom: 10rem;
  box-shadow: 0 0 2px 0 white;
  border-radius: 8px;

  //@include xsMax {
  //    margin-bottom: 15rem;
  //  }
  &:hover {
    box-shadow: 0 0 4px 0 white;
  }
`;

const LoadingHeader = styled.h1`
  //transform: scale(0.9);
  //opacity: 0;
`;


type HeroProps = {
  nextSectionId: string,
};

class Hero extends React.PureComponent<HeroProps> {
  introNode: any;

  componentDidMount(){
  }
  // compomage />
  //  t() {
  //   setTimeout(() => {
  //     this.heroNode && this.heroNode.classList.remove(theme['is-loading']);
    // }, 100);
  // }

  render() {
    return (
      <ParallaxProvider>
        <div>
          <HeroBanner min={'-30%'} max={'30%'}>
            <Intro id="intro" ref={node => {this.introNode = node}}>
              <h1>TITLE</h1>
              <div>
                <ButtonIntro>OK</ButtonIntro>
              </div>
            </Intro>
          </HeroBanner>
        </div>
      </ParallaxProvider>
    );
  }
}

export default Hero;
