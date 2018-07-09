// @flow
import { withTranslators } from '@core/lib/lioness';
import { compose, pure } from 'recompose';
import Hero from './Hero';

const enhance = compose(withTranslators, pure);

export default enhance(Hero);
