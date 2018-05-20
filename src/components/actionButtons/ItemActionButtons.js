// @flow

import type { DataContextProps } from '../../providers/data';
import Button from '../button/Button';
import Group from '../group/Group';
import React from 'react';
import { ActionsBox } from './SectionActionButtons';
import { Icon } from 'react-icons-kit'
import {chevronDown} from 'react-icons-kit/feather/chevronDown'
import {plus} from 'react-icons-kit/feather/plus'
import {trash2} from 'react-icons-kit/feather/trash2'
import {edit} from 'react-icons-kit/feather/edit'
import {chevronUp} from 'react-icons-kit/feather/chevronUp'

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
        <Icon icon={chevronDown} />
      </Button>
      <Button type="button" primary onClick={() => onDownHandler(props)}>
        <Icon icon={chevronUp} />
      </Button>
      <Button type="button" primary onClick={() => onAddHandler(props)}>
        <Icon icon={plus} />

      </Button>
      <Button type="button" primary onClick={() => onDeleteHandler(props)}>
        <Icon icon={trash2} />
      </Button>
      <Button type="button" onClick={props.onShowEdit}>
        <Icon icon={edit} />
      </Button>
    </Group>
  </ActionsBox>
);

export default ActionButtons;
