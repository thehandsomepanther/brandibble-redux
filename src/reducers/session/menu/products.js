import { MENU_FETCH } from 'actions/session/menu';
import { List } from 'immutable';

export default function menuProducts(state=null, action) {
  switch(action.type) {
    case `${MENU_FETCH}_FULFILLED`:
      return List(action.payload.products);
    default:
      return state;
  }
}
