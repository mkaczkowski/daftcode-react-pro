// @flow
import React from 'react';
import Editable from '../../components/editable/Editable';
import _find from 'lodash/find';
import IntroductionEditable from './IntroductionEditable';
import IntroductionPreview from './IntroductionPreview';
import type { DataContextProps } from '../../providers/data';

export type IntroductionProps = DataContextProps & {
  section: string,
  photo: string,
  owner: string,
  description: string,
  email?: string,
  linkedin?: string,
};

const Introduction = (props: IntroductionProps) => {
  const { data, ...restProps } = props;
  const item = _find(data, { name: props.section });
  return (
    <Editable {...item} {...restProps}>
      {({ isEdited, ...restProps }) =>
        isEdited ?
          <IntroductionEditable {...restProps} /> :
          <IntroductionPreview {...restProps} />
      }
    </Editable>
  );
};

export default Introduction;
