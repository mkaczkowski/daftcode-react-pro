// @flow
import React from 'react';
import Heading from '../../components/heading/Heading';
import Hover from '../../components/hover/Hover';
import ActionButtons from '../../components/actionButtons/ItemActionButtons';
import ItemPreview from '../../components/ItemPreview/ItemPreview';
import type { EducationItemProps } from './Education';
import type { DataContextProps } from '../../providers/data';
import type { ActionButtonsType } from '../../components/actionButtons/ItemActionButtons';
import { DATA } from '../../App';

export type EducationItemPreviewProps = EducationItemProps & DataContextProps & ActionButtonsType;

const DEFAULT_ITEM = { description: '', university: '', year: '' };

const EducationItemPreview = ({ id, university, year, description, ...actionProps }: EducationItemPreviewProps) => (
  <Hover>
    {isHovered => (
      <ItemPreview>
        {isHovered && <ActionButtons {...actionProps} id={id} section={DATA.EDUCATION} defaultItem={DEFAULT_ITEM} />}
        <ItemPreview.Header>
          {year} : {university}
        </ItemPreview.Header>
        <ItemPreview.Content>{description}</ItemPreview.Content>
      </ItemPreview>
    )}
  </Hover>
);

export default EducationItemPreview;
