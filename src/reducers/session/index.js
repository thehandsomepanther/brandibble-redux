import { combineReducers } from 'redux';
import addresses from './addresses';
import menu from './menu';
import order from './order';
import payments from './payments';
import favorites from './favorites';
import ratings from './ratings';

export default combineReducers({
  addresses,
  menu,
  order,
  payments,
  favorites,
  ratings,
});
