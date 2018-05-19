// @flow
import React from 'react';
import Heading from '../../components/heading/Heading';
import Hover from '../../components/hover/Hover';
import ActionButtons from '../../components/actionButtons/AcctionButtons';
import ItemPreview from '../../components/ItemPreview/ItemPreview';
import type { EducationItemProps } from './Education';
import type { DataContextProps } from '../../providers/data';
import type { ActionButtonsType } from '../../components/actionButtons/AcctionButtons';
import { DATA } from '../../App';

export type EducationItemPreviewProps = EducationItemProps & DataContextProps & ActionButtonsType;
const EducationItemPreview = ({ id, university, year, description, ...actionProps }: EducationItemPreviewProps) => (
  <Hover>
    {isHovered => (
      <ItemPreview>
        {isHovered && <ActionButtons {...actionProps}
                                     id={id}
                                     section={DATA.EDUCATION}
                                      defaultItem={{description:"",university:"",year:""}}/>}
        <Heading as="h2">{university}</Heading>
        <Heading as="h3">{year}</Heading>
        <Heading as="h4">{description}</Heading>
      </ItemPreview>
    )}
  </Hover>
);

export default EducationItemPreview;
