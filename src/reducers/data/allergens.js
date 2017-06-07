import reduxCrud from 'redux-crud';
import {
  UNAUTHENTICATE_USER
} from 'actions/session/user';

const baseReducers = reduxCrud.List.reducersFor('allergens');

const initialState = [];

export default function allergens(state = initialState, action) {
  switch (action.type) {
    case `${UNAUTHENTICATE_USER}_FULFILLED`:
      return initialState;
    default:
      return baseReducers(state, action);
  }
}
