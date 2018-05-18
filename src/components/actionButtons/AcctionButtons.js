// @flow

import type { DataContextProps } from '../../providers/data';
import Button from '../button/Button';
import Group from '../group/Group';
import React from 'react';

export type ActionButtonsType = DataContextProps & {
  onEdit: () => void,
  onDelete: () => void,
  onAdd: () => void,
};

const onAddButtonHandler = props => {
  props.onAdd(props.section, -1, { ...props.defaultItem });
};

const onDeleteButtonHandler = props => {
  props.onDelete(props.section, props.id);
};

const ActionButtons = (props: ActionButtonsType) => (
  <Group>
    <Button type="button" primary onClick={() => onAddButtonHandler(props)}>
      Add
    </Button>
    <Button type="button" primary onClick={() => onDeleteButtonHandler(props)}>
      Delete
    </Button>
    <Button type="button" onClick={props.onEdit}>
      Edit
    </Button>
  </Group>
);

export default ActionButtons;
