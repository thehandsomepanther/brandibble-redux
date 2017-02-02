import { combineReducers } from 'redux';
import data from './data';
import session from './session';
import status from './status';

export default combineReducers({
  data,
  session,
  status,
});
