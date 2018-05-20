// @flow
/**
 * Configurable action buttons toolbox with access to data context
 */
import type { DataContextProps } from '../../providers/data';
import Button from '../button/Button';
import Group from '../group/Group';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { chevronDown } from 'react-icons-kit/feather/chevronDown';
import { plus } from 'react-icons-kit/feather/plus';
import { trash2 } from 'react-icons-kit/feather/trash2';
import { edit } from 'react-icons-kit/feather/edit';
import { chevronUp } from 'react-icons-kit/feather/chevronUp';
import styled from 'styled-components';

export const ActionsBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
`;

export type ActionButtonsType = DataContextProps & {
  id?: number,
  section?: string,
  new?: boolean,
  trash?: boolean,
  up?: boolean,
  down?: boolean,
  edit?: boolean,
  onShowEdit: () => void,
  onAdd: (params: any) => void,
  onRemove: (params: any) => void,
  onUp: (params: any) => void,
  onDown: (params: any) => void,
  defaultItem?: Object,
};

const ActionButtons = (props: ActionButtonsType) => {

  const onAddHandler = () => {
    const { section, id, defaultItem, onAdd } = props;
    onAdd({ section, id, values: { ...defaultItem } });
  };

  const onRemoveHandler = () => {
    const { section, id, onRemove } = props;
    onRemove({ section, id });
  };

  const onMoveUpHandler = () => {
    const { section, id, onUp } = props;
    onUp({ section, id });
  };

  const onMoveDownHandler = () => {
    const { section, id, onDown } = props;
    onDown({ section, id });
  };

  return (
    <ActionsBox>
      <Group gap>
        {props.edit && (
          <Button type="button" onClick={props.onShowEdit}>
            <Icon icon={edit} />
          </Button>
        )}
        {props.down && (
          <Button type="button" onClick={onMoveDownHandler}>
            <Icon icon={chevronDown} />
          </Button>
        )}
        {props.up && (
          <Button type="button" onClick={onMoveUpHandler}>
            <Icon icon={chevronUp} />
          </Button>
        )}
        {props.trash && (
          <Button type="button" danger onClick={onRemoveHandler}>
            <Icon icon={trash2} />
          </Button>
        )}
        {props.new && (
          <Button type="button" primary onClick={onAddHandler}>
            <Icon icon={plus} />
          </Button>
        )}
      </Group>
    </ActionsBox>
  );
};

export default ActionButtons;
