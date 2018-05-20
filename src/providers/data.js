// @flow
/**
 * Data Context responsible for storing and passing data together with public methods to manage it
 */
import * as React from 'react';
import _findIndex from 'lodash/findIndex';
import update from 'immutability-helper';
import * as Storage from "./../utils/storage"

export type DataType = {
  name: string,
  items?: Array<Object>,
};

export type DataProviderState = {
  data: DataType[],
};

type DataProviderProps = {
  data: DataType[],
  children: any,
};

export type ActionType = {
  section: string,
  values?: any,
  id?: number,
  callback?: any,
};

export type DataContextProps = {
  +data: DataType[],
  +add: (params: ActionType) => void,
  +update: (params: ActionType) => void,
  +remove: (params: ActionType) => void,
  +moveUp: (params: ActionType) => void,
  +moveDown: (params: ActionType) => void,
};

export const DataContext = React.createContext();

class DataProvider extends React.Component<DataProviderProps, DataProviderState> {
  state = {
    data: this.props.data,
  };

  /**
   * Save data to storage
   * @param data
   * @param callback
   */
  persistData = (data: DataType[], callback?: () => void) => {
    this.setState(() => ({ data }), callback);
    Storage.save(data);
  };

  /**
   * Add new data entry
   * @param section
   * @param id
   * @param values
   * @param callback
   */
  add = ({ section, id, values, callback }: ActionType) => {
    const sectionIndex = this.findSectionIndex(section);
    let resultData;
    if (id === undefined) {
      resultData = this.addLastItem({ sectionIndex, values });
    } else {
      resultData = this.addNextItem({ sectionIndex, values, id });
    }

    this.persistData(resultData, callback);
  };

  addLastItem = ({ sectionIndex, values }: Object) => {
    return update(this.state.data, { [sectionIndex]: { items: { $push: [{ ...values, id: -1 }] } } });
  };

  addNextItem = ({ sectionIndex, values, id }: Object) => {
    const itemIndex = this.findItemIndex(sectionIndex, id);
    const nextIndex = itemIndex + 1;
    const nextItem = this.findItemByIndex(sectionIndex, nextIndex);
    if (nextItem) {
      const newItem = { ...values, id: -1 };
      return update(this.state.data, {
        [sectionIndex]: { items: { $splice: [[nextIndex, 1, newItem, nextItem]] } },
      });
    } else {
      return this.addLastItem({ sectionIndex, values });
    }
  };

  /**
   * Update data entry
   * @param section
   * @param itemId
   * @param values
   * @param callback
   */
  update = ({ section, id: itemId, values, callback }: ActionType) => {
    let resultData;
    const sectionIndex = this.findSectionIndex(section);
    if (itemId !== undefined) {
      resultData = this.updateItem({ sectionIndex, itemId, values });
    } else {
      resultData = this.updateSection({ sectionIndex, values });
    }

    this.persistData(resultData, callback);
  };

  updateItem = ({ sectionIndex, itemId, values }: Object) => {
    const itemIndex = this.findItemIndex(sectionIndex, itemId);
    const id = itemId === -1 ? Math.floor(Math.random() * 100000) : itemId;
    const newItem = { ...values, id };

    return update(this.state.data, {
      [sectionIndex]: { items: { [itemIndex]: { $set: newItem } } },
    });
  };

  updateSection = ({ sectionIndex, values }: Object) => {
    return update(this.state.data, {
      [sectionIndex]: { $merge: { ...values } },
    });
  };

  /**
   * Remove data entry
   * @param section
   * @param id
   * @param callback
   */
  remove = ({ section, id, callback }: ActionType) => {
    const sectionIndex = this.findSectionIndex(section);
    const itemIndex = this.findItemIndex(sectionIndex, id);
    const resultData = update(this.state.data, { [sectionIndex]: { items: { $splice: [[itemIndex, 1]] } } });
    this.persistData(resultData, callback);
  };

  /**
   * Move data entry one down
   * @param section
   * @param id
   * @param callback
   */
  moveDown = ({ section, id, callback }: ActionType) => {
    const sectionIndex = this.findSectionIndex(section);
    const itemIndex = this.findItemIndex(sectionIndex, id);

    const nextItem = this.findItemByIndex(sectionIndex, itemIndex + 1);
    if (nextItem) {
      const item = this.findItemByIndex(sectionIndex, itemIndex);
      const resultData = update(this.state.data, {
        [sectionIndex]: { items: { $splice: [[itemIndex, 2, nextItem, item]] } },
      });
      this.persistData(resultData, callback);
    }
  };

  /**
   * Move data entry one up
   * @param section
   * @param id
   * @param callback
   */
  moveUp = ({ section, id, callback }: ActionType) => {
    const sectionIndex = this.findSectionIndex(section);
    const itemIndex = this.findItemIndex(sectionIndex, id);

    const prevItem = this.findItemByIndex(sectionIndex, itemIndex - 1);
    if (prevItem) {
      const item = this.findItemByIndex(sectionIndex, itemIndex);
      const resultData = update(this.state.data, {
        [sectionIndex]: { items: { $splice: [[itemIndex - 1, 2, item, prevItem]] } },
      });
      this.persistData(resultData, callback);
    }
  };

  /**
   * Utils
   */
  findSectionIndex = (section: string) => {
    return _findIndex(this.state.data, { name: section });
  };

  findItemIndex = (sectionIndex: number, id?: number) => {
    return _findIndex(this.state.data[sectionIndex].items, { id });
  };

  findItemByIndex = (sectionIndex: number, index: number) => {
    let result;
    const items = this.state.data[sectionIndex].items;
    if (index > -1 && items && index < items.length) {
      result = items[index];
    }
    return result;
  };

  render() {
    //context data available from all subscribed consumers
    const value: DataContextProps = {
      data: this.state.data,
      add: this.add,
      update: this.update,
      remove: this.remove,
      moveUp: this.moveUp,
      moveDown: this.moveDown,
    };
    //prettier-ignore
    return (
      <DataContext.Provider value={value}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

export default DataProvider;
