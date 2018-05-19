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
text-align: center;
`;

const Photo = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

export type IntroductionItemPreviewProps = IntroductionProps & DataContextProps & ActionButtonsType;
const IntroductionPreview = ({ section, photo, description, ...actionProps }: IntroductionItemPreviewProps) => (
  <Hover>
    {isHovered => (
      <IntroductionItemPreview>
        {isHovered && <SectionActionButtons {...actionProps} section={section} />}
        <Photo src={photo}/>
        <Heading as="h4">{description}</Heading>
      </IntroductionItemPreview>
    )}
  </Hover>
);

export default IntroductionPreview;
