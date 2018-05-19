// @flow

import type { DataContextProps } from '../../providers/data';
import Button from '../button/Button';
import Group from '../group/Group';
import React from 'react';
import { ActionsBox } from './SectionActionButtons';

export type ActionButtonsType = DataContextProps & {
  onShowEdit: () => void,
  onAdd: (params: any) => void,
  onDelete: (params: any) => void,
  onUp: (params: any) => void,
  onDown: (params: any) => void,
};

const onAddHandler = ({ section, id, defaultItem, onAdd }) => onAdd({ section, id, values: { ...defaultItem } });

const onDeleteHandler = ({ section, id, onDelete }) => onDelete({ section, id });

const onUpHandler = ({ section, id, onUp }) => onUp({ section, id });

const onDownHandler = ({ section, id, onDown }) => onDown({ section, id });

const ActionButtons = (props: ActionButtonsType) => (
  <ActionsBox>
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
      <Button type="button" onClick={props.onShowEdit}>
        Edit
      </Button>
    </Group>
  </ActionsBox>
);

export default ActionButtons;
