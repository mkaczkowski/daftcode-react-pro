// @flow
import * as React from 'react';
import styled from 'styled-components';
import { media } from '@theme';

const SkillsContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: lightgray;
  min-height: 200px;
`;

const Skills = (props: any) => (
  <SkillsContainer {...props}>
    <p>
      some sample introduction text
    </p>
  </SkillsContainer>
);
export default Skills;
