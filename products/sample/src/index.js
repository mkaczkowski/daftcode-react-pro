import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './App';
import { setupTranslations } from '@core/utils/i18n';

if (process.env.DISABLE_MODERNIZR !== 'true') {
  require('modernizr');
}

if (process.env.NODE_ENV !== 'production' && process.env.WHY_DID_UPDATE === 'true') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React, { include: /^pure/, exclude: /^Connect/ });
}

if (process.env.INCLUDE_SERVICE_WORKER === 'true') {
  const registerServiceWorker = require('@core/registerServiceWorker').default;
  registerServiceWorker();
}

export async function init() {
  if (process.env.LOGS === 'true') {
    const Logger = require('@core/modules/logger').default;
    Logger.run();
  }

  if (process.env.DISABLE_TRANSLATIONS !== 'true') {
    window.translations = await setupTranslations();
  }

  const rootElement = document.getElementById('root');
  if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
  } else {
    render(<App />, rootElement);
  }
}

init();
