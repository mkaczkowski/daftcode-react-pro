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
import styled from 'styled-components';
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
export const DATA_CONFIG: DATAType = {
  [DATA.INTRODUCTION]: { name: 'introduction', component: Introduction },
  [DATA.EDUCATION]: { name: 'education', component: Education },
  [DATA.EXPERIENCE]: { name: 'experience', component: Experience },
};

//TODO move to types
const DEFAULT_DATA: DataType[] = [
  { name: DATA.INTRODUCTION,
    owner: "Mariusz Kaczkowski",
    photo: 'https://media.licdn.com/dms/image/C5603AQFxYrLjUhGyaw/profile-displayphoto-shrink_100_100/0?e=1531958400&v=beta&t=KrZRHisTKJHiqcqfA5Fc2FGoYTa59PrkhkHkuhR4rzw',
    description: 'sdas dasd asdasdasdas dasdasd asdasdas dasdsadsad  ads asd as da dasdas asd asdas d' },
  {
    name: DATA.EDUCATION,
    items: [
      { id: 1, university: 'Warsaw University of Technology', year: '2005-2010', description: 'M. Sc., Eng. degree in Computer Science' },
      { id: 2, university: 'Technical University of Lisbon', year: '02 – 07.2010', description: 'Information Systems and Computer Engineering ' },
    ],
  }
  // {
  //   name: DATA.EXPERIENCE,
  //   items: [{ company: '1', year: '11', description: '111' }, { company: '2', year: '22', description: '222' }],
  // },
];

const Main = styled.div`
  width:84%;
  max-width: 800px;
  margin:1.2rem auto;
  background-color: #fafafa;
  padding: 1rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.30);
`;

class App extends React.PureComponent<{}, { data?: Object }> {
  state = {
    data: undefined,
  };

  componentDidMount() {
    const localData = localStorage.getItem('data');
    // const data:any = localData ? JSON.parse(localData) : DEFAULT_DATA;
    const data: any = DEFAULT_DATA;
    this.setState(() => ({ data }));
  }

  render() {
    const { data } = this.state;
    return data ? (
      <ThemeProvider theme={theme}>
        <DataProvider data={data}>
          <Main>
            {data.map(({ name: section }) => {
              const { component: Component } = DATA_CONFIG[section];
              return (
                <DataContext.Consumer key={section}>
                  {context => <Component {...context} section={section} />}
                </DataContext.Consumer>
              );
            })}
          </Main>
        </DataProvider>
      </ThemeProvider>
    ) : (
      false
    );
  }
}

export default hot(module)(App);
