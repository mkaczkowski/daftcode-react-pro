import * as React from 'react';
import { render } from 'react-dom';
import { setupTranslations } from '@core/utils/i18n';

if (process.env.DISABLE_MODERNIZR !== 'true') {
  require('modernizr');
}

if (process.env.NODE_ENV !== 'production' && process.env.WHY_DID_UPDATE === 'true') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React, { include: /^pure/, exclude: /^Connect/ });
}

// if (process.env.INCLUDE_SERVICE_WORKER === "true") {
//   const registerServiceWorker = require("@core/registerServiceWorker").default;
//   registerServiceWorker();
// }

export async function init(App, config) {
  if (process.env.LOGS === 'true') {
    const Logger = require('@core/modules/logger').default;
    Logger.run();
  }
  const rootElement = document.getElementById('root');

  if (process.env.DISABLE_TRANSLATIONS !== 'true') {
    window.translations = await setupTranslations();
  }

  // $FlowFixMe
  render(<App />, rootElement);
}
