import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from '@core/registerServiceWorker';

const rootElement = document.getElementById('root');

render(<App />, rootElement);

if (process.env.NODE_ENV === 'production') {
  registerServiceWorker();
}
