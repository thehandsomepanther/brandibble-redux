import reduce from 'lodash.reduce';
import {
  CREATE_ADDRESS,
  DELETE_ADDRESS,
  FETCH_ADDRESSES,
} from '../../actions/session/addresses';
import { UNAUTHENTICATE_USER } from '../../actions/session/user';

export const initialState = {
  addressesById: {},
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  const newState = { ...state };

  switch (type) {
    case `${FETCH_ADDRESSES}_FULFILLED`:
      return {
        ...state,
        addressesById: {
          ...state.addressesById,
          ...reduce(payload, (acc, curr) => ({
            ...acc,
            [curr.customer_address_id]: curr,
          }), {}),
        },
      };
    case `${CREATE_ADDRESS}_FULFILLED`:
      return {
        ...state,
        addressesById: {
          ...state.addressesById,
          [payload.customer_address_id]: payload,
        },
      };
    case `${DELETE_ADDRESS}_FULFILLED`:
      delete newState.addressesById[payload];
      return newState;
    case `${UNAUTHENTICATE_USER}_FULFILLED`:
      return { ...initialState };
    default:
      return state;
  }
};
