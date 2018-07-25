import reduxCrud from 'redux-crud';
import { SET_DEFAULT_PAYMENT } from '../../actions/session/payments';
import { UNAUTHENTICATE_USER } from '../../actions/session/user';

const baseReducers = reduxCrud.Map.reducersFor('payments', { key: 'customer_card_id' });
const initialState = {};

function setDefault(state, id) {
  const newState = {};
  Object.keys(state).forEach((paymentId) => {
    const payment = state[paymentId];
    if (id.toString() === paymentId) newState[paymentId] = Object.assign({}, payment, { is_default: true });
    else newState[paymentId] = Object.assign({}, payment, { is_default: false });
  });
  return newState;
}

export default function payments(state = initialState, action) {
  switch (action.type) {
    case `${SET_DEFAULT_PAYMENT}_FULFILLED`:
      return setDefault(state, action.payload);
    case `${UNAUTHENTICATE_USER}_FULFILLED`:
      return initialState;
    default:
      return baseReducers(state, action);
  }
}
