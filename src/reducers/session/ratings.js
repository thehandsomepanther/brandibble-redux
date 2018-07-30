import reduce from 'lodash.reduce';
import pickBy from 'lodash.pickby';
import { UNAUTHENTICATE_USER } from '../../actions/session/user';
import {
  FETCH_RATING,
  CREATE_RATING,
  UPDATE_RATING,
  DELETE_RATING,
} from '../../actions/session/ratings';

export const initialState = {};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case `${FETCH_RATING}_FULFILLED`:
      return {
        ...state,
        ...reduce(payload, (acc, curr) => ({
          ...acc,
          [`${curr.receipt_id}`]: curr,
        }), {}),
      };

    case `${DELETE_RATING}_FULFILLED`:
      return pickBy(
        state,
        (_, key) => !(key === `${payload.receipt_id}` && state[key].receipt_id === payload.receipt_id),
      );

    case `${CREATE_RATING}_FULFILLED`:
    case `${UPDATE_RATING}_FULFILLED`:
      return {
        ...state,
        [`${payload.receipt_id}`]: payload,
      };

    case `${UNAUTHENTICATE_USER}_FULFILLED`:
      return initialState;
    default:
      return state;
  }
};
