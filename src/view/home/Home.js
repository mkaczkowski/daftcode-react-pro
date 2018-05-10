/* eslint-disable */
// @flow

import React from 'react';
import styled from 'styled-components';
import { space, width, fontSize, color } from 'styled-system';
// $FlowIssue
import { Flex, Box } from 'grid-styled';

type HomeProps = {
  username: string,
};

// const UsernameLabel = styled.div`
//   font-weight: normal;
//   color: red;
//   animation: ${bounce} 1s ease infinite;
//
//   ${mq.phone(css`
//     color: blue;
//   `)};
//   ${mq.tablet(css`
//     color: yellowgreen;
//   `)};
// `;

// Add styled-system functions to your component

const WelcomeContainer = styled(Box)`
  min-height: 100px;
  color: black;
  font-size: 3rem;
  text-align: center;
  ${fontSize} ${color};
`;
//
// const welcomeClassName2 = css`
//   min-height: 2000px;
// `;

// PROPS with emotion:: https://emotion.sh/docs/typescript#passing-props-when-styling-a-react-component
class Home extends React.Component<HomeProps, any> {
  state = {
    welcomeText: 'Hello',
  };
  render() {
    const { welcomeText } = this.state;
    const { username } = this.props;
    return (
      <WelcomeContainer fontSize={[2, 3, 4]} m={[1, 2, 3]} p={[1, 2, 3]} color={['text', 'blue', 'gray.0']}>
        {welcomeText}
        {/*<UsernameLabel>{`: ${username}`}</UsernameLabel>*/}
      </WelcomeContainer>
    );
  }
}

export default Home;
