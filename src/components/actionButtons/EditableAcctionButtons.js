// @flow
import React from 'react';
import Button from '../button/Button';
import Group from '../group/Group';
import type { ActionButtonsType } from './AcctionButtons';

export type EditableActionButtonsType = ActionButtonsType & {
  isSubmitting: boolean,
};

const EditableActionButtons = (props: EditableActionButtonsType) => (
  <Group>
    <Button type="button" disabled={props.isSubmitting} onClick={props.onCancel}>
      Cancel
    </Button>
    <Button  type="submit" primary disabled={props.isSubmitting}>
      Save
    </Button>
  </Group>
);

export default EditableActionButtons;
