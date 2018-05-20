// @flow
import React from 'react';
import Hover from '../../components/hover/Hover';
import ActionButtons from '../../components/actionButtons/ActionButtons';
import ItemPreview from '../../components/ItemPreview/ItemPreview';
import type { EducationItemProps } from './Education';
import type { DataContextProps } from '../../providers/data';
import type { ActionButtonsType } from '../../components/actionButtons/ActionButtons';

export type EducationItemPreviewProps = EducationItemProps & DataContextProps & ActionButtonsType;

const EducationItemPreview = ({
  id,
  university,
  year,
  description,
  defaultItem,
  ...actionProps
}: EducationItemPreviewProps) => (
  <Hover>
    {isHovered => (
      <ItemPreview timeline>
        <ItemPreview.Header>{year} : {university}</ItemPreview.Header>
        <ItemPreview.Content>{description}</ItemPreview.Content>
        {isHovered && (
          <ActionButtons
            up={true}
            down={true}
            edit={true}
            new={true}
            trash={true}
            id={id}
            defaultItem={defaultItem}
            {...actionProps}
          />
        )}
      </ItemPreview>
    )}
  </Hover>
);

export default EducationItemPreview;
