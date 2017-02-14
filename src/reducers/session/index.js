import { combineReducers } from 'redux';
import menus from './menus';
import order from './order';
import payments from './payments';

export default combineReducers({
  menus,
  order,
  payments,
});
