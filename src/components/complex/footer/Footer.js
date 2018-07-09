// @flow
import React from 'react';
import styled from 'styled-components';
import Flex from '../../common/flex/Flex';
import { Icon } from 'react-icons-kit';
import Button from '@components/common/button/Button';
import Group from '@components/common/group/Group';

const FooterContainer = styled(Flex)`
  position: relative;
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

type FooterProps = {
  icons: Array<{ href: string, icon: any }>,
};

const Footer = (props: FooterProps) => {
  return (
    <FooterContainer alignItems="center" justifyContent="flex-end">
      {/*<Footer.Description>*/}
      {/*<Heading as="h3">{owner}</Heading>*/}
      {/*{description}*/}
      {/*</Footer.Description>*/}
      <FooterSocial>
        <Group gap>
          {props.icons.map(({ href, icon }) => (
            <Button as="a" href={href}>
              <Icon icon={icon} />
            </Button>
          ))}
        </Group>
      </FooterSocial>
    </FooterContainer>
  );
};

export default Footer;
