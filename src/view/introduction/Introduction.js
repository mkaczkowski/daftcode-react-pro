// @flow
import React from 'react';
import Editable from '../../components/editable/Editable';
import _find from 'lodash/find';
import IntroductionEditable from './IntroductionEditable';
import IntroductionPreview from './IntroductionPreview';
import styled from 'styled-components';

export const Section = styled.div`
  position: relative;
  padding: 2rem 3rem;
`;


export type IntroductionProps = {
  data: any,
  section: string,
  photo: any,
  description: string,
};

const IntroductionItem = (props: IntroductionProps) => {
  return (
    <Editable {...props}>
      {({ isEdited, ...restProps }) =>
        //prettier-ignore
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
