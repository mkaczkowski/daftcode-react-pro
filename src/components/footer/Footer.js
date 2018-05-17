// @flow
import React from 'react';
import styled from 'styled-components';
import Link from '../link/Link';

const FooterContainer = styled.div`
  background: gray;
  width: 100%;
`;

class Footer extends React.Component<{}> {
  render() {
    return (
      <FooterContainer>
        <Link href="https://wizardly-poitras-931354.netlify.com">Storybook</Link>
      </FooterContainer>
    );
  }
}

export default Footer;
