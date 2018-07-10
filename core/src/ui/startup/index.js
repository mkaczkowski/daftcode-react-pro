// @flow
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Startup from './Startup';
import injectReducer from '@core/store/utils/injectReducer';
import injectSaga from '@core/store/utils/injectSaga';
import reducer, { actions as startupActions, selectors as startupSelectors } from '@core/reducers/startup';
import saga from '@core/sagas/startup';

const mapStateToProps = state => ({
  isLoading: startupSelectors.isLoading(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      startupAction: startupActions.startupAction,
    },
    dispatch
  ),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'startup', reducer });
const withSaga = injectSaga({ key: 'startup', saga });

export default compose(withReducer, withSaga, withConnect)(Startup);
