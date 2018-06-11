// @flow
import React from 'react';
import Hover from '@components/hover/Hover';
import ItemPreview from '@components/ItemPreview/ItemPreview';
import ActionButtons from '@components/actionButtons/ActionButtons';
import styled from 'styled-components';
import Heading from '@components/heading/Heading';
import { Icon } from 'react-icons-kit';
import { mail } from 'react-icons-kit/feather/mail';
import { linkedin as linkedinIcon } from 'react-icons-kit/feather/linkedin';
import Button from '@components/button/Button';
import Group from '@components/group/Group';
import { media } from '@theme';

import type { ActionButtonsType } from '@components/actionButtons/ActionButtons';
import type { IntroductionProps } from './Introduction';
import type { DataContextProps } from '../../../providers/data';

const IntroductionItemPreview = styled(ItemPreview)`
  display: flex;
  align-items: center;
  ${media.tablet`
    display:block;
    text-align: center;
  `};
`;

export type IntroductionItemPreviewProps = IntroductionProps & DataContextProps & ActionButtonsType;
const IntroductionPreview = ({
  photo,
  owner,
  description,
  linkedin,
  email,
  ...actionProps
}: IntroductionItemPreviewProps) => (
  <Hover>
    {isHovered => (
      <IntroductionItemPreview>
        <ItemPreview.Avatar src={photo} alt="my photo" />
        <ItemPreview.Description>
          <Heading as="h3">{owner}</Heading>
          {description}
        </ItemPreview.Description>
        <ItemPreview.Badge>
          <Group gap>
            {email && (
              <Button as="a" href={`mailto:${email}?Subject=Hello`} >
                <Icon icon={mail} />
              </Button>
            )}
            {linkedin && (
              <Button as="a" href={linkedin} target="_blank">
                <Icon icon={linkedinIcon} />
              </Button>
            )}
          </Group>
        </ItemPreview.Badge>
        {isHovered && (
          <ActionButtons edit={true} {...actionProps} />
        )}
      </IntroductionItemPreview>
    )}
  </Hover>
);

export default IntroductionPreview;
