//@flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header';
import type { HeaderProps } from '@components/complex/header/Header';

const props: HeaderProps = {
  sections:[
    "sample1",
    "sample2",
    "sample3",
  ],
  activeSection:"sample2"
};

storiesOf('Components|Header', module).add('basic', () => (
  <div>
    <Header {...props} />
    <p style={{position:"relative",top:100}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur delectus exercitationem facilis laudantium, maiores minus necessitatibus nemo provident quod repellat, sequi temporibus vel! Neque quaerat quam sapiente similique tempore.</p>
    <p style={{position:"relative",top:100}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur delectus exercitationem facilis laudantium, maiores minus necessitatibus nemo provident quod repellat, sequi temporibus vel! Neque quaerat quam sapiente similique tempore.</p>
    <p style={{position:"relative",top:100}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur delectus exercitationem facilis laudantium, maiores minus necessitatibus nemo provident quod repellat, sequi temporibus vel! Neque quaerat quam sapiente similique tempore.</p>
    <p style={{position:"relative",top:100}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur delectus exercitationem facilis laudantium, maiores minus necessitatibus nemo provident quod repellat, sequi temporibus vel! Neque quaerat quam sapiente similique tempore.</p>
    <p style={{position:"relative",top:100}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur delectus exercitationem facilis laudantium, maiores minus necessitatibus nemo provident quod repellat, sequi temporibus vel! Neque quaerat quam sapiente similique tempore.</p>
    <p style={{position:"relative",top:100}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur delectus exercitationem facilis laudantium, maiores minus necessitatibus nemo provident quod repellat, sequi temporibus vel! Neque quaerat quam sapiente similique tempore.</p>
    <p style={{position:"relative",top:100}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur delectus exercitationem facilis laudantium, maiores minus necessitatibus nemo provident quod repellat, sequi temporibus vel! Neque quaerat quam sapiente similique tempore.</p>
    <p style={{position:"relative",top:100}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur delectus exercitationem facilis laudantium, maiores minus necessitatibus nemo provident quod repellat, sequi temporibus vel! Neque quaerat quam sapiente similique tempore.</p>
  </div>
))
