import { combineReducers } from 'redux';
import attributes from './menu/attributes';
import categories from './menu/categories';
import products from './menu/products';

export default combineReducers({
  attributes,
  categories,
  products,
});
