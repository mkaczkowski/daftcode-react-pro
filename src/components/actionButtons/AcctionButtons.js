// @flow

import type { DataContextProps } from '../../providers/data';
import Button from '../button/Button';
import Group from '../group/Group';
import React from 'react';

export type ActionButtonsType = DataContextProps & {
  onEdit: () => void,
  onAdd: () => void,
  onDelete: () => void,
};

const onAddHandler = props => props.onAdd(props.section, -1, { ...props.defaultItem });

const onDeleteHandler = props => props.onDelete(props.section, props.id);

const onUpHandler = props => props.onUp(props.section, props.id);

const onDownHandler = props => props.onDown(props.section, props.id);

const ActionButtons = (props: ActionButtonsType) => (
  <Group>
    <Button type="button" primary onClick={() => onUpHandler(props)}>
      UP
    </Button>
    <Button type="button" primary onClick={() => onDownHandler(props)}>
      DOWN
    </Button>
    <Button type="button" primary onClick={() => onAddHandler(props)}>
      Add
    </Button>
    <Button type="button" primary onClick={() => onDeleteHandler(props)}>
      Delete
    </Button>
    <Button type="button" onClick={props.onEdit}>
      Edit
    </Button>
  </Group>
);

export default ActionButtons;
