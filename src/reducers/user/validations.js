import {
  VALIDATE_USER,
  UNAUTHENTICATE_USER,
} from '../../actions/session/user';

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case `${VALIDATE_USER}_FULFILLED`:
      return payload;
    case `${UNAUTHENTICATE_USER}_FULFILLED`:
      return initialState;
    default:
      return state;
  }
};
