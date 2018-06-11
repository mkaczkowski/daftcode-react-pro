// @flow
import React from 'react';
import Hover from '@components/hover/Hover';
import ActionButtons from '@components/actionButtons/ActionButtons';
import ItemPreview from '@components/ItemPreview/ItemPreview';
import type { ExperienceItemProps } from './Experience';
import type { DataContextProps } from '../../../providers/data';
import type { ActionButtonsType } from '@components/actionButtons/ActionButtons';

export type ExperienceItemPreviewProps = ExperienceItemProps & DataContextProps & ActionButtonsType;

const ExperienceItemPreview = ({
  id,
  company,
  logo,
  period,
  description,
  defaultItem,
  ...actionProps
}: ExperienceItemPreviewProps) => (
  <Hover>
    {isHovered => (
      <ItemPreview timeline>
        {logo && <ItemPreview.Logo src={logo} alt={company} />}
        <ItemPreview.Header>{company} : <i>{period}</i></ItemPreview.Header>
        <ItemPreview.Content>
          {description}
          </ItemPreview.Content>
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

export default ExperienceItemPreview;
