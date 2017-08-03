import Immutable from 'seamless-immutable';
import { FETCH_MENU } from 'actions/session/menu';

export const initialState = Immutable({});
export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case `${FETCH_MENU}_FULFILLED`:
      return state.replace(payload);
    default:
      return state;
  }
};
