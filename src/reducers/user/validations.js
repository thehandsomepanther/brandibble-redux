import { VALIDATE_USER, UNAUTHENTICATE_USER } from '../../actions/session/user';

const initialState = {};

export default function validations(state = initialState, action) {
  switch (action.type) {
    case `${VALIDATE_USER}_FULFILLED`:
      return action.payload;
    case `${UNAUTHENTICATE_USER}_FULFILLED`:
      return initialState;
    default:
      return state;
  }
}
