// @flow
import * as React from 'react';
import Button from '@components/button/Button';
import Logger from '@core/modules/logger';
import 'modernizr';

export type HeroProps = {};

class Hero extends React.PureComponent<HeroProps> {
  logger = Logger.getInstance('Hero');

  componentDidMount() {
    this.logger.debug('heja');
  }

  render() {
    return (
      <div className="hero">
        <h1>{this.props.t('BUTTON.NEXT')}</h1>
        <div>
          <Button>TRY FOR FREE!</Button>
        </div>
      </div>
    );
  }
}

export default Hero;
