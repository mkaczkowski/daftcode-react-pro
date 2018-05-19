// @flow
import React from 'react';
import Button from '../button/Button';
import Group from '../group/Group';
import styled from 'styled-components';
import type { ActionButtonsType } from './ItemActionButtons';

export const FormButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export type EditableActionButtonsType = ActionButtonsType & {
  isSubmitting: boolean,
};

const EditableActionButtons = ({ section, id, isSubmitting, onCancel }: EditableActionButtonsType) => (
  <FormButtons>
    <Group>
      <Button type="button" disabled={isSubmitting} onClick={() => onCancel({ section, id })}>
        Cancel
      </Button>
      <Button type="submit" primary disabled={isSubmitting}>
        Save
      </Button>
    </Group>
  </FormButtons>
);

export default EditableActionButtons;
