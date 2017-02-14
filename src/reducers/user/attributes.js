import reduxCrud from 'redux-crud';
import {
  AUTHENTICATE_USER,
  RESOLVE_USER,
  UNAUTHENTICATE_USER,
} from 'actions/session/user';

const {
  USER_CREATE_SUCCESS,
  USER_FETCH_SUCCESS,
  USER_UPDATE_SUCCESS,
} = reduxCrud.actionTypesFor('user');
const initialState = {};

export default function attributes(state=initialState, action) {
  switch(action.type) {
    case `${RESOLVE_USER}_FULFILLED`:
    case `${AUTHENTICATE_USER}_FULFILLED`:
      return action.payload;
    case USER_FETCH_SUCCESS:
    case USER_UPDATE_SUCCESS:
      return action.record;
    case USER_FETCH_SUCCESS:
      return action.records;
    case `${UNAUTHENTICATE_USER}_FULFILLED`:
      return initialState;
    default:
      return state;
  }
}
