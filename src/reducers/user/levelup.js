import {
  FETCH_LEVELUP_LOYALTY,
  FETCH_LEVELUP_QR_CODE,
  FETCH_LEVELUP_PAYMENT_METHOD,
} from 'actions/session/user';

const initialState = {
  loyalty: {},
  qr_code: null,
  payment_method: null,
};

export default function levelup(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_LEVELUP_LOYALTY}_FULFILLED`:
      return {
        ...state,
        loyalty: action.payload,
      };
    case `${FETCH_LEVELUP_QR_CODE}_FULFILLED`:
      return {
        ...state,
        qr_code: action.payload,
      };
    case `${FETCH_LEVELUP_PAYMENT_METHOD}_FULFILLED`:
      return {
        ...state,
        payment_method: action.payload,
      };
    default:
      return state;
  }
}
