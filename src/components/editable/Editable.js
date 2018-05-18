// @flow
import React from 'react';
import { DataContext } from '../../providers/data';
import type { DataContextProps } from '../../providers/data';

export type EditableItemProps = {
  children: any,
};

export type EditableItemState = {|
  isEdited: boolean,
|};

class Editable extends React.PureComponent<EditableItemProps, EditableItemState> {
  state = {
    isEdited: false,
  };

  onEdit = () => this.setState(() => ({ isEdited: true }));
  onCancel = () => this.setState(() => ({ isEdited: false }));

  render() {
    const { isEdited } = this.state;
    return (
      <DataContext.Consumer>
        {context => {
          const combinedProps = {
            ...this.props,
            ...context,
            onAdd: (...params) => context.saveData(...params, this.onCancel ),
            onSave: (...params) => context.saveData(...params, this.onCancel ),
            onDelete: (...params) => context.saveData(...params, this.onCancel ),
            isEdited: isEdited,
            onEdit: this.onEdit,
            onCancel: this.onCancel,
          };
          // return <Component {...combinedProps} />;
          return this.props.children(combinedProps);
        }}
      </DataContext.Consumer>
    );
  }
}

export default Editable;
