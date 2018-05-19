// @flow
import Button from '../button/Button';
import Group from '../group/Group';
import React from 'react';
import type { DataContextProps } from '../../providers/data';
import styled from 'styled-components';

export type SectionActionButtonsType = DataContextProps & {
  onShowEdit: () => void,
};

export const ActionsBox = styled.div`
  position: absolute;
  top:.7rem;
  right:.7rem;
`;

const SectionActionButtons = (props: SectionActionButtonsType) => (
  <ActionsBox>
    <Button type="button" onClick={props.onShowEdit}>
      Edit
    </Button>
  </ActionsBox>
);

export default SectionActionButtons;
