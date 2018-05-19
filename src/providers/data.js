// @flow
import * as React from 'react';
import _findIndex from 'lodash/findIndex';
import _find from 'lodash/find';
import update from 'immutability-helper';

export type DataType = {
  name: string,
};

export type DataProviderState = {
  data: DataType[],
};

type DataProviderProps = {
  data: DataType[],
  children: any,
};

export type DataContextProps = {
  +data: DataType[],
  +addItem: (sectionName: string, id: number, values: any, callback?: any) => void,
  +updateItem: (sectionName: string, itemId: number, values: any, callback?: any) => void,
  +deleteItem: (sectionName: string, id: number, callback?: any) => void,
  +moveUpItem: (sectionName: string, id: number, callback?: any) => void,
  +moveDownItem: (sectionName: string, id: number, callback?: any) => void,
};

export const DataContext = React.createContext();

//TODO fix console warnings
class DataProvider extends React.Component<DataProviderProps, DataProviderState> {
  state = {
    data: this.props.data,
  };

  findSectionIndex = (sectionName: string) => {
    return _findIndex(this.state.data, { name: sectionName });
  };

  findItemIndex = (sectionIndex: number, id: number) => {
    return _findIndex(this.state.data[sectionIndex].items, { id });
  };

  findItemByIndex = (sectionIndex: number, index: number) => {
    let result;
    const items = this.state.data[sectionIndex].items;
    if(index < items.length && index > -1){
      result = items[index];
    }
    return result;
  };

  persistData = (data: DataType[], callback?: () => void) => {
    this.setState(() => ({ data }), callback);
    localStorage.setItem('data', JSON.stringify(data));
  };

  //TODO unit test
  addItem = (sectionName: string, id: number, values: any, callback?: any) => {
    const sectionIndex = this.findSectionIndex(sectionName);
    const resultData = update(this.state.data, { [sectionIndex]: { items: { $push: [{ ...values, id: -1 }] } } });
    this.persistData(resultData, callback);
  };

  //TODO unit test
  updateItem = (sectionName: string, itemId: number, values: any, callback?: any) => {
    const sectionIndex = this.findSectionIndex(sectionName);
    const itemIndex = this.findItemIndex(sectionIndex, itemId);
    //TODO move generateId function to proper util file and write some unit test
    const id = itemId === -1 ? Math.floor(Math.random() * 100000) : itemId;
    const resultData = update(this.state.data, {
      [sectionIndex]: { items: { [itemIndex]: { $set: { ...values, id } } } },
    });
    this.persistData(resultData, callback);
  };

  //TODO unit test
  deleteItem = (sectionName: string, id: number, callback?: any) => {
    const sectionIndex = this.findSectionIndex(sectionName);
    const itemIndex = this.findItemIndex(sectionIndex, id);
    const resultData = update(this.state.data, { [sectionIndex]: { items: { $splice: [[itemIndex, 1]] } } });
    this.persistData(resultData, callback);
  };

  //TODO unit test
  moveDownItem = (sectionName: string, id: number, callback?: any) => {
    const sectionIndex = this.findSectionIndex(sectionName);
    const itemIndex = this.findItemIndex(sectionIndex, id);

    const nextItem = this.findItemByIndex(sectionIndex, itemIndex + 1);
    if(nextItem){
      const item = this.findItemByIndex(sectionIndex, itemIndex);
      const resultData = update(this.state.data, {
        [sectionIndex]: { items: { $splice: [[itemIndex, 2, nextItem, item]] } },
      });
      this.persistData(resultData, callback);
    }
  };

  //TODO unit test
  moveUpItem = (sectionName: string, id: number, callback?: any) => {
    debugger;
    const sectionIndex = this.findSectionIndex(sectionName);
    const itemIndex = this.findItemIndex(sectionIndex, id);

    const prevItem = this.findItemByIndex(sectionIndex, itemIndex - 1);
    if(prevItem){
      const item = this.findItemByIndex(sectionIndex, itemIndex);
      const resultData = update(this.state.data, {
        [sectionIndex]: { items: { $splice: [[itemIndex - 1, 2, item, prevItem]] } },
      });
      this.persistData(resultData, callback);
    }
  };

  render() {
    const value: DataContextProps = {
      data: this.state.data,
      addItem: this.addItem,
      updateItem: this.updateItem,
      deleteItem: this.deleteItem,
      moveUpItem: this.moveUpItem,
      moveDownItem: this.moveDownItem,
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
