import { SETUP_BRANDIBBLE } from 'actions/setup';
import { AUTHENTICATE_USER, UNAUTHENTICATE_USER } from 'actions/session/user';

const initialState = {};

export default function ref(state = initialState, action) {
  switch (action.type) {
    case `${SETUP_BRANDIBBLE}_FULFILLED`:
    case `${UNAUTHENTICATE_USER}_FULFILLED`:
      return action.payload;

    case `${AUTHENTICATE_USER}_FULFILLED`:
      return action.payload.brandibble;

    default:
      return state;
  }
}
