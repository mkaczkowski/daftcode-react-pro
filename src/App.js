// @flow
import { hot } from 'react-hot-loader';
import * as React from 'react';
import loadableVisibility from 'react-loadable-visibility/loadable-components';
import Home from './view/home/Home';
import I18nProvider from './providers/i18n';
import { Header } from './components/header';

// const Contact = loadableVisibility(() => import(/* webpackPreload: true */ './view/contact/Contact'));

export const sections = {
  Home: {
    dynamic: false,
    Component: Home,
    props: {
      username: 'DaftCoder',
    },
  },
  Contact: {
    dynamic: true,
    Component: loadableVisibility(() => import(/* webpackPreload: true */ './view/contact/Contact'), {}),
  },
};

const LOADABLE_DELAY = 3000;

class App extends React.PureComponent {
  state = {
    loadableSections: [...Object.values(sections).filter(section => section.dynamic)],
  };

  componentDidMount() {
    this.prefetchDynamicComponents();
  }

  prefetchDynamicComponents() {
    const { loadableSections } = this.state;
    setTimeout(() => {
      loadableSections.forEach(section => {
        section && section.Component.load();
      });
    }, LOADABLE_DELAY);
  }

  renderSections = () =>
    Object.entries(sections).map(entry => React.cloneElement(this.renderSection(entry[1]), { key: entry[0] }));

  renderSection = ({ Component, props = {} }, extraProps?: Object = {}) => <Component {...props} {...extraProps} />;

  render() {
    return (
      <I18nProvider language="en">
        <Header stage={1}>
          <Header.Logo />
          <Header.Menu />
          <Header.LanguageChooser />
        </Header>
        <React.Fragment>{this.renderSections()}</React.Fragment>
      </I18nProvider>
    );
  }
}

export default hot(module)(App);
