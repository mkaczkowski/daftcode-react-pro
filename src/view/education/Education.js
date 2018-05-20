// @flow
import React from 'react';
import Heading from '../../components/heading/Heading';
import EducationItemEditable from './EducationItemEditable';
import EducationItemPreview from './EducationItemPreview';
import Editable from '../../components/editable/Editable';
import _find from 'lodash/find';
import EmptyItem from './EmptyItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import type { DataContextProps } from '../../providers/data';

export type EducationItemProps = {
  section: string,
  id: number,
  university?: string,
  year?: string,
  description?: string,
};

export type EducationProps = DataContextProps & {
  section: string,
  items: EducationItemProps[],
};

const EducationItem = (props: EducationItemProps) => {
  return (
    <Editable {...props}>
      {({ isEdited, ...restProps }) =>
        isEdited ?
          <EducationItemEditable {...restProps} /> :
          <EducationItemPreview {...restProps} />
      }
    </Editable>
  );
};

const DEFAULT_DATA = { description: '', university: '', year: '' };

const Education = ({ data, section }: EducationProps) => {
  const foundSection = _find(data, { name: section });
  const items = foundSection && foundSection.items;

  return (
    <div>
      <Heading as="h4">Education</Heading>
      <hr />
      {items && items.length > 0 ? (
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {items.map(item => (
            <EducationItem key={item.id} section={section} defaultItem={DEFAULT_DATA} {...item} />
          ))}
        </ReactCSSTransitionGroup>
      ) : (
        <EmptyItem section={section} defaultItem={DEFAULT_DATA} />
      )}
    </div>
  );
};

export default Education;
