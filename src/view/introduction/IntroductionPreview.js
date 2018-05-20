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

const IntroductionItemPreview = styled(ItemPreview)`
  display:flex;
  align-items: center;
`;

const Content = styled.div`
  flex:1;
  padding: 0 1rem;
  text-align: center;
`;

const Photo = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

export type IntroductionItemPreviewProps = IntroductionProps & DataContextProps & ActionButtonsType;
const IntroductionPreview = ({ section, photo, owner, description, ...actionProps }: IntroductionItemPreviewProps) => (
  <Hover>
    {isHovered => (
      <IntroductionItemPreview>
        <Photo src={photo} />
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
