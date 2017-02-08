import { combineReducers } from 'redux';
import data from './data';
import session from './session';
import status from './status';
import user from './user';

export default combineReducers({
  data,
  session,
  status,
  user,
});
