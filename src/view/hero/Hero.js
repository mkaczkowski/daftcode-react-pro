// @flow
import React from 'react';
import { space, width, fontSize, color, textAlign, hover, propTypes } from 'styled-system';
import styled from 'styled-components';
// $FlowIssue
import { Flex, Box } from 'grid-styled';

// Add styled-system functions to your component
//http://jxnblk.com/styled-system/
const MyBox = styled(Box)`
  ${fontSize}
  ${textAlign}
  ${color}
  ${hover}
`;

type HeroProps = {};

class Hero extends React.Component<HeroProps> {
  render() {
    return (
      <div>
        <Flex>
          <Box w={[1, 1 / 2, 1 / 4]} px={2}>
            Half width
          </Box>
          <Box width={1 / 2} px={2}>
            Half width
          </Box>
        </Flex>

        <MyBox color="blue">11</MyBox>
        <MyBox align={123}>111</MyBox>
        <MyBox aligner="center">111</MyBox>
        <MyBox
          hover={{
            textDecoration: 'underline',
            color: 'blue',
          }}
        >
          1111
        </MyBox>
        <MyBox width={[1, 1 / 2]}>2</MyBox>
        <MyBox color="gray.0">3</MyBox>
      </div>
    );
  }
}

export default Hero;
