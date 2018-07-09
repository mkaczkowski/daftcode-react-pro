// @flow
import * as React from 'react';
import styled from 'styled-components';
import { media } from '@theme';

const SkillsContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: yellowgreen;
  min-height: 200px;
`;

const Clients = (props: any) => (
  <SkillsContainer {...props}>
    <p>
      some sample introduction text
    </p>
    <div id="testimonials">testimonials</div>
  </SkillsContainer>
);
export default Clients;
