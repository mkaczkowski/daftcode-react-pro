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
    isEdited: this.props.id === -1,
  };

  onShowEdit = () => this.setState(() => ({ isEdited: true }));

  onHideEdit = () => {
    this.setState(() => ({ isEdited: false }));
  };

  onCancel = ({ section, id, context }: any) => {
    debugger;
    if (id === -1) {
      context.delete({ section, id: -1 });
    } else {
      this.onHideEdit();
    }
  };

  render() {
    const { isEdited } = this.state;
    return (
      <DataContext.Consumer>
        {context => {
          const combinedProps = {
            ...this.props,
            data: context.data,
            isEdited: isEdited,
            onShowEdit: this.onShowEdit,
            onCancel: params => this.onCancel({ ...params, context: context }),
            onAdd: params => context.add({ ...params, callback: this.onHideEdit }),
            onUpdate: params => context.update({ ...params, callback: this.onHideEdit }),
            onDelete: context.delete,
            onUp: context.moveUp,
            onDown: context.moveDown,
          };
          // return <Component {...combinedProps} />;
          return this.props.children(combinedProps);
        }}
      </DataContext.Consumer>
    );
  }
}

export default Editable;
