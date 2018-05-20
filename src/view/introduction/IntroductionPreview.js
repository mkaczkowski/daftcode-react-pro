// @flow
import React from 'react';
import Heading from '../../components/heading/Heading';
import Hover from '../../components/hover/Hover';
import SectionActionButtons from '../../components/actionButtons/SectionActionButtons';
import ItemPreview from '../../components/ItemPreview/ItemPreview';
import type { IntroductionProps } from './Introduction';
import type { DataContextProps } from '../../providers/data';
import type { ActionButtonsType } from '../../components/actionButtons/ItemActionButtons';
import styled from 'styled-components';
import { media } from '@theme';

const Content = styled.div`
  flex: 1;
  padding: 0 1rem;
  margin-left: 1.5rem;
  
  ${media.tablet`
      text-align: center;
      margin-top: 1.2rem;
      margin-left: 0;
  `};
`;

const Photo = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  ${media.tablet`
    height: 100px;
    width: 100px;
  `};
`;

const IntroductionItemPreview = styled(ItemPreview)`
  display: flex;
  align-items: center;
  ${media.tablet`
    display:block;
  `};
`;

export type IntroductionItemPreviewProps = IntroductionProps & DataContextProps & ActionButtonsType;
const IntroductionPreview = ({ section, photo, owner, description, ...actionProps }: IntroductionItemPreviewProps) => (
  <Hover>
    {isHovered => (
      <IntroductionItemPreview>
        <Photo src={photo} alt="my photo" />
        <Content>
          <Heading as="h2">{owner}</Heading>
          <span>{description}</span>
        </Content>
        {isHovered && <SectionActionButtons {...actionProps} section={section} />}
      </IntroductionItemPreview>
    )}
  </Hover>
);

export default IntroductionPreview;
