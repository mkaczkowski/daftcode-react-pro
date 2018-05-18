// @flow
import * as React from 'react';
import _findIndex from 'lodash/findIndex';
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
  // children?: any,
  data: DataType[],
  saveData: (sectionName: string, id: number, data: any, callback?: any) => void,
};

export const DataContext = React.createContext();

class DataProvider extends React.Component<DataProviderProps, DataProviderState> {
  state = {
    data: this.props.data,
  };

  deleteItem = (sectionName: string, id: number, callback?: any) => {

  }

  saveData = (sectionName: string, id: number, values: any, callback?: any) => {
    const { data } = this.state;

    const sectionIndex = _findIndex(data, { name: sectionName });
    const itemIndex = _findIndex(data[sectionIndex].items, { id });

    let resultData;
    if (itemIndex !== -1) {
      resultData = update(data, { [sectionIndex]: { items: { [itemIndex]: { $set: { ...values, id } } } } });
    } else {
      //TODO generate newId
      const newId = Math.floor(Math.random() * 100000);
      resultData = update(data, { [sectionIndex]: { items: { $push: [{ ...values, id: newId }] } } });
    }

    // console.info('resultData:' + JSON.stringify(resultData));
    this.setState(() => ({ data: resultData }), callback);

    //TODO save to local storage
    localStorage.setItem('data', JSON.stringify(resultData));
  };

  render() {
    const value = {
      data: this.state.data,
      saveData: this.saveData,
      deleteItem: this.deleteItem,
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
