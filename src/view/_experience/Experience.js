// @flow
import React from 'react';
import Box from '../../components/box/Box';

export type ExperienceProps = {
  company: string,
  year: string,
  description: string,
};

class Experience extends React.PureComponent<ExperienceProps> {

  render() {
    return (
     <Box>
       EXPERIENCE
       {JSON.stringify(this.props)}
      </Box>
    );
  }
}

export default Experience;
