// @flow
import React from 'react';
import { DataContext } from '../../providers/data';

export type EditableItemProps = {
  children: any,
};

export type EditableItemState = {|
  isEdited: boolean,
|};

class Editable extends React.PureComponent<EditableItemProps, EditableItemState> {
  state = {
    isEdited: this.props.id === -1
  };

  onEdit = () => this.setState(() => ({ isEdited: true }));

  onCancel = () => {
    this.setState(() => ({ isEdited: false }));
  }

  render() {
    const { isEdited } = this.state;
    return (
      <DataContext.Consumer>
        {context => {
          const combinedProps = {
            ...this.props,
            data: context.data,
            isEdited: isEdited,
            onEdit: this.onEdit,
            //TODO REFACTOR BELOW LINE
            onCancel: () =>  this.props.id !== -1 ? this.onCancel() : context.deleteItem(this.props.section, this.props.id),
            onAdd: (...params) => context.addItem(...params, this.onCancel),
            onUpdate: (...params) => context.updateItem(...params, this.onCancel),
            onDelete: (...params) => context.deleteItem(...params),
            onUp: (...params) => context.moveUpItem(...params),
            onDown: (...params) => context.moveDownItem(...params),
          };
          // return <Component {...combinedProps} />;
          return this.props.children(combinedProps);
        }}
      </DataContext.Consumer>
    );
  }
}

export default Editable;
