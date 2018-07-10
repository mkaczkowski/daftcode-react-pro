// @flow
import { withTranslators } from '@core/lib/lioness';
import { connect } from 'react-redux';
import { compose as reduxCompose } from 'redux';
import { pure } from 'recompose';
import Hero from './Hero';
import injectReducer from '@core/store/utils/injectReducer';
import injectSaga from '@core/store/utils/injectSaga';
import reducer from '@core/reducers/startup';
import saga from '@core/sagas/startup';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'startup', reducer });
const withSaga = injectSaga({ key: 'startup', saga });

const reduxEnhance = reduxCompose(withReducer, withSaga, withConnect, withTranslators, pure);

export default reduxEnhance(Hero);
