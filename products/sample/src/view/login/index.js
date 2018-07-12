// @flow
import { withTranslators } from '@core/lib/lioness';
import { compose } from 'recompose';
import Login from './Login';

const enhance = compose(withTranslators);

export default enhance(Login);
