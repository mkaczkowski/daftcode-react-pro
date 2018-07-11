import authReducer, { actions, selectors } from './auth';
import { fromJS } from 'immutable';

//-----------------
//REDUCER
describe('authReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      isLoading: true,
      user: null,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(authReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeUsername action correctly', () => {
    const fixture = { id: '321' };
    const expectedResult = state.set('isLoading', false).set('user', fixture);
    expect(authReducer(state, actions.authSuccessAction(fixture))).toEqual(expectedResult);
  });
});

//-----------------
//SELECTORS
describe('selectAuth', () => {
  it('should select the auth state', () => {
    const authState = fromJS({
      isLoading: true,
      user: { id: '123' },
    });
    const mockedState = fromJS({
      auth: authState,
    });
    expect(selectors.selectAuth(mockedState)).toEqual(authState);
  });
});

describe('getUser', () => {
  it('should select the user', () => {
    const user = { id: '246' };
    const mockedState = fromJS({
      auth: {
        user,
      },
    });
    expect(selectors.getUser(mockedState)).toEqual(user);
  });
});
