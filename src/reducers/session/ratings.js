import reduxCrud from 'redux-crud';
import { UNAUTHENTICATE_USER } from '../../actions/session/user';

const baseReducers = reduxCrud.Map.reducersFor('ratings', {
  key: 'receipt_id',
});
const initialState = {};

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case `${UNAUTHENTICATE_USER}_FULFILLED`:
      return initialState;

    default:
      return baseReducers(state, action);
  }
}
