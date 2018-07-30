import { SETUP_BRANDIBBLE } from '../actions/application';

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case `${SETUP_BRANDIBBLE}_FULFILLED`:
      return payload;
    default:
      return state;
  }
};
