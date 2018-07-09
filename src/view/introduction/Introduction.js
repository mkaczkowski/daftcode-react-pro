// @flow
import * as React from 'react';
import styled from 'styled-components';
import { media } from '@theme';

const IntroductionContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #039be5;
  min-height: 200px;
`;

const Introduction = (props: any) => (
  <IntroductionContainer {...props}>
    <p>some sample introduction text</p>
  </IntroductionContainer>
);
export default Introduction;
