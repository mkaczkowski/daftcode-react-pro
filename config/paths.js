`use strict`;

const path = require(`path`);
const fs = require(`fs`);
const url = require(`url`);

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith(`/`);
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  } else {
    return path;
  }
}

const getPublicUrl = appPackageJson => require(appPackageJson).homepage;

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can`t use a relative path in HTML because we don`t want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl = publicUrl ? url.parse(publicUrl).pathname : `/`;
  return ensureSlash(servedUrl, true);
}

const PRODUCT_NAME = process.env.PRODUCT_NAME;
const LANDING_HASH = process.env.LANDING_HASH;
const LANDING_TYPE = process.env.LANDING_TYPE;

// config after eject: we`re in ./config/

const root = `./../`;
module.exports = {
  products: resolveApp(root + `products`),
  rootenv: resolveApp(root + `products/${PRODUCT_NAME}/.env`),
  appBuild: resolveApp(root + `build`),
  appPublic: resolveApp(root + `DEV7LP-scripts/public`),
  htmlEmpty: resolveApp(root + `DEV7LP-core/src/templates/index_crawler.html`),
  prodHtml: resolveApp(root + `DEV7LP-core/src/templates/index.html`),
  devHtml: resolveApp(root + `DEV7LP-scripts/public/index.html`),
  appIndexJs: resolveApp(root + `products/${PRODUCT_NAME}/landings/${LANDING_HASH}/${LANDING_TYPE}/config.js`),
  appPackageJson: resolveApp(root + `products/${PRODUCT_NAME}/package.json`),
  appSrc: resolveApp(root + `products/${PRODUCT_NAME}`),
  coreSrc: resolveApp(root + `DEV7LP-core/src`),
  componentsSrc: resolveApp(root + `DEV7LP-components/src`),
  yarnLockFile: resolveApp(root + `yarn.lock`),
  testsSetup: resolveApp(root + `DEV7LP-core/src/setupTests.js`),
  appNodeModules: resolveApp(root + `node_modules`),
  publicUrl: getPublicUrl(resolveApp(root + `package.json`)),
  servedPath: getServedPath(resolveApp(root + `package.json`)),
};
