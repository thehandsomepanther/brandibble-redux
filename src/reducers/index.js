import { combineReducers } from 'redux';
import { RESET_APPLICATION } from '../actions/application';
import data from './data';
import error from './error';
import ref from './ref';
import session from './session';
import status from './status';
import user from './user';

const appReducer = combineReducers({
  data,
  error,
  ref,
  session,
  status,
  user,
});

export default (state, action) => {
  switch (action.type) {
    case `${RESET_APPLICATION}_FULFILLED`:
      return appReducer(undefined, action);
    default:
      return appReducer(state, action);
  }
};
