// @flow
import React from 'react';
import styled from 'styled-components';
import Flex from '../../common/flex/Flex';
import { Icon } from 'react-icons-kit';
import { mail as mailIcon } from 'react-icons-kit/feather/mail';
import { linkedin as linkedinIcon } from 'react-icons-kit/feather/linkedin';
import { twitter as twitterIcon } from 'react-icons-kit/feather/twitter';
import { github as githubIcon } from 'react-icons-kit/feather/github';
import Button from '@components/common/button/Button';
import Group from '@components/common/group/Group';
import CONFIG from '../../../config';

const FooterContainer = styled(Flex)`
  background: ${({ theme }) => theme.components.footer.background};
  width: 100%;
  height: 3rem;
  padding-right: 2rem;
`;

const FooterSocial = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

class FooterComponent extends React.Component<any> {
  render() {
    const emailHref = `mailto:${CONFIG.email}?Subject=Hello`;
    const linkedinHref = CONFIG.linkedin;
    const twitterHref = CONFIG.twitter;
    const githubHref = CONFIG.github;

    return (
      <FooterContainer alignItems="center" justifyContent="flex-end">
        {/*<Footer.Description>*/}
        {/*<Heading as="h3">{owner}</Heading>*/}
        {/*{description}*/}
        {/*</Footer.Description>*/}
        <FooterSocial>
          <Group gap>
            <Button as="a" href={emailHref}>
              <Icon icon={mailIcon} />
            </Button>
            <Button as="a" href={linkedinHref} target="_blank">
              <Icon icon={linkedinIcon} />
            </Button>
            <Button as="a" href={twitterHref} target="_blank">
              <Icon icon={twitterIcon} />
            </Button>
            <Button as="a" href={githubHref} target="_blank">
              <Icon icon={githubIcon} />
            </Button>
          </Group>
        </FooterSocial>
      </FooterContainer>
    );
  }
}

export default FooterComponent;
