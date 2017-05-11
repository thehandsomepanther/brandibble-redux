import { SETUP_BRANDIBBLE } from 'actions/application';

const initialState = {};

export default function ref(state = initialState, action) {
  switch (action.type) {
    case `${SETUP_BRANDIBBLE}_FULFILLED`:
      return action.payload;
    default:
      return state;
  }
}
