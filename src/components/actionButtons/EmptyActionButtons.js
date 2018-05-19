// @flow

import type { DataContextProps } from '../../providers/data';
import Button from '../button/Button';
import React from 'react';
import styled from 'styled-components';

export const EmptyActionsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export type EmptyActionButtonsType = DataContextProps & {
  onAdd: (params: any) => void,
};

const onAddHandler = ({ section, defaultItem, onAdd }) => onAdd({ section, values: { ...defaultItem } });

const EmptyActionButtons = (props: EmptyActionButtonsType) => (
  <EmptyActionsBox>
    <Button type="button" primary onClick={() => onAddHandler(props)}>
      +
    </Button>
  </EmptyActionsBox>
);

export default EmptyActionButtons;
