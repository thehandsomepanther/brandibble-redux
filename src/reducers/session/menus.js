import { FETCH_MENU } from '../../actions/session/menus';

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case `${FETCH_MENU}_FULFILLED`:
      return {
        ...state,
        [`${payload.id}`]: payload,
      };
    default:
      return state;
  }
};
