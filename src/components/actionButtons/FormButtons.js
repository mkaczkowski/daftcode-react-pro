// @flow
import React from 'react';
import Button from '../button/Button';
import Group from '../group/Group';
import styled from 'styled-components';
import type { ActionButtonsType } from './ActionButtons';

export const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export type FormButtonsType = ActionButtonsType & {
  isSubmitting: boolean,
};

const FormButtons = ({ section, id, isSubmitting, onCancel }: FormButtonsType) => (
  <StyledButtons>
    <Group gap>
      <Button type="button" disabled={isSubmitting} onClick={() => onCancel({ section, id })}>
        Cancel
      </Button>
      <Button type="submit" primary disabled={isSubmitting}>
        Save
      </Button>
    </Group>
  </StyledButtons>
);

export default FormButtons;
