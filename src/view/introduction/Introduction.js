// @flow
import React from 'react';
import Editable from '../../components/editable/Editable';
import _find from 'lodash/find';
import IntroductionEditable from './IntroductionEditable';
import IntroductionPreview from './IntroductionPreview';

export type IntroductionProps = {
  data: Object,
  section: string,
  photo: string,
  owner: string,
  description: string,
};

const IntroductionItem = (props: IntroductionProps) => {
  return (
    <Editable {...props}>
      {({ isEdited, ...restProps }) =>
        isEdited ?
          <IntroductionEditable {...restProps} /> :
          <IntroductionPreview {...restProps} />
      }
    </Editable>
  );
};

const Introduction = (props: IntroductionProps) => {
  const { data, ...restProps } = props;
  const item = _find(data, { name: props.section });
  return (
      <IntroductionItem {...item} {...restProps} />
  );
};

export default Introduction;
