import { AUTHENTICATE_USER, UNAUTHENTICATE_USER } from 'actions/session/user';
const initialState = {};

export default function attributes(state=initialState, action) {
  switch(action.type) {
    case `${AUTHENTICATE_USER}_FULFILLED`:
      return action.payload.currentUser;
    case `${UNAUTHENTICATE_USER}_FULFILLED`:
      return initialState;
    default:
      return state;
  }
}
