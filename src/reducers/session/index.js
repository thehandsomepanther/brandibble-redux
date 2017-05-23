import { combineReducers } from 'redux';
import addresses from './addresses';
import menus from './menus';
import displayMenu from './displayMenu';
import order from './order';
import payments from './payments';
import favorites from './favorites';
import ratings from './ratings';

export default combineReducers({
  addresses,
  menus,
  order,
  payments,
  displayMenu,
  favorites,
  ratings,
});
