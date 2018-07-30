import {
  FETCH_LEVELUP_LOYALTY,
  FETCH_LEVELUP_QR_CODE,
  FETCH_LEVELUP_PAYMENT_METHOD,
  FETCH_LEVELUP_CAMPAIGN,
  DISCONNECT_LEVELUP,
  UNAUTHENTICATE_USER,
} from '../../actions/session/user';

const initialState = {
  loyalty: {},
  qr_code: null,
  payment_method: null,
  campaignsById: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case `${FETCH_LEVELUP_LOYALTY}_FULFILLED`:
      return {
        ...state,
        loyalty: payload,
      };
    case `${FETCH_LEVELUP_CAMPAIGN}_FULFILLED`:
      return {
        ...state,
        campaignsById: {
          ...state.campaignsById,
          [`${payload.meta.campaignId}-${payload.meta.campaignType}`]: payload.campaign,
        },
      };
    case `${FETCH_LEVELUP_QR_CODE}_FULFILLED`:
      return {
        ...state,
        qr_code: payload,
      };
    case `${FETCH_LEVELUP_PAYMENT_METHOD}_FULFILLED`:
      return {
        ...state,
        payment_method: payload,
      };
    case `${UNAUTHENTICATE_USER}_FULFILLED`:
    case `${DISCONNECT_LEVELUP}_FULFILLED`:
      return initialState;
    default:
      return state;
  }
};
