// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import DataProvider from './providers/data';
import Introduction from './view/introduction/Introduction';
import Education from './view/education/Education';
import Experience from './view/_experience/Experience';
import { DataContext } from './providers/data';
import type { DataType } from './providers/data';

//TODO move to types
export type DATAType = {
  [string]: {
    name: string,
    component: any,
  },
};

//TODO move to constants
export const DATA = {
  INTRODUCTION: 'introduction',
  EDUCATION: 'education',
  SKILLS: 'skills',
  EXPERIENCE: 'experience',
  CUSTOM: 'custom',
};

//TODO move to types
const DATA_CONFIG: DATAType = {
  [DATA.INTRODUCTION]: { name: 'introduction', component: Introduction },
  [DATA.EDUCATION]: { name: 'education', component: Education },
  [DATA.EXPERIENCE]: { name: 'experience', component: Experience },
};

//TODO move to types
const DEFAULT_DATA: DataType[] = [
  // { name: DATA.INTRODUCTION, avatar: 'dasd', description: 'sdas das d' },
  {
    name: DATA.EDUCATION,
    items: [
      { id: 1, university: '1', year: '11', description: '111' },
      { id: 2, university: '2', year: '22', description: '222' },
    ],
  },
  // {
  //   name: DATA.EXPERIENCE,
  //   items: [{ company: '1', year: '11', description: '111' }, { company: '2', year: '22', description: '222' }],
  // },
];

class App extends React.PureComponent<{}, { data?: Object }> {
  state = {
    data: undefined,
  };

  componentDidMount() {
    const localData = localStorage.getItem('data');
    const data:any = localData ? JSON.parse(localData) : DEFAULT_DATA;
    // const data:any = DEFAULT_DATA;
    this.setState(() => ({ data }));
  }

  render() {
    const {data} = this.state;
    return data ?
      <ThemeProvider theme={theme}>
        <DataProvider data={data}>
          {data.map(({ name:sectionName }) => {
            const Component = DATA_CONFIG[sectionName].component;
            return <DataContext.Consumer key={sectionName}>
              {context => <Component {...context} section={sectionName} />}
            </DataContext.Consumer>;
          })}
        </DataProvider>
      </ThemeProvider> :
      false
  }
}

export default hot(module)(App);
