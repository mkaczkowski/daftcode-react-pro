// @flow
import React from 'react';
import Box from '../../components/box/Box';
import Heading from '../../components/heading/Heading';

export type IntroductionProps = {
  avatar: any,
  description: string,
};

class Introduction extends React.PureComponent<IntroductionProps> {

  render() {
    return (
     <Box>
       <Heading as="h2">Introduction</Heading>
       {JSON.stringify(this.props)}
      </Box>
    );
  }
}

export default Introduction;
