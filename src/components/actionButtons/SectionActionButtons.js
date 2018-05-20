// @flow
import Button from '../button/Button';
import React from 'react';
import type { DataContextProps } from '../../providers/data';
import styled from 'styled-components';
import { edit } from 'react-icons-kit/feather/edit';
import { Icon } from 'react-icons-kit'

export type SectionActionButtonsType = DataContextProps & {
  onShowEdit: () => void,
};

export const ActionsBox = styled.div`
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255,255,255,0.7);
  border-radius: 3px;
`;

const SectionActionButtons = (props: SectionActionButtonsType) => (
  <ActionsBox>
    <Button type="button" onClick={props.onShowEdit}>
      <Icon icon={edit} />
    </Button>
  </ActionsBox>
);

export default SectionActionButtons;
