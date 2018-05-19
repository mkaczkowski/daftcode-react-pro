// @flow
import React from 'react';
import Heading from '../../components/heading/Heading';
import EducationItemEditable from './EducationItemEditable';
import EducationItemPreview from './EducationItemPreview';
import Editable from '../../components/editable/Editable';
import _find from 'lodash/find';
import Empty from '../../components/editable/Empty';
import EmptyItem from './EmptyItem';

export type EducationItemProps = {
  id: number,
  university?: string,
  year?: string,
  description?: string,
};

export type EducationProps = {
  items: EducationItemProps[],
};

const EducationItem = (props: EducationItemProps) => {
  return (
    <Editable {...props}>
      {({ isEdited, ...restProps }) =>
        //prettier-ignore
        isEdited ?
          <EducationItemEditable {...restProps} /> :
          <EducationItemPreview {...restProps} />
      }
    </Editable>
  );
};


const Education = ({ data, section }: EducationProps) => {
  const items = _find(data, { name: section }).items;
  return (
    <div>
      <Heading as="h3">Education</Heading>
      <hr />
      {
      items.length > 0 ?
        items.map(item => <EducationItem key={item.id} section={section} {...item}  />) :
        <EmptyItem section={section} defaultItem={{ description: '', university: '', year: '' }}/>
      }
    </div>
  );
};

export default Education;
