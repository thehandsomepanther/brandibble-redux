import { combineReducers } from 'redux';
import data from './data';
import error from './error';
import session from './session';

export default combineReducers({
  data,
  error,
  session,
});
