import reduce from 'lodash.reduce';
import { RESOLVE_ORDER_LOCATION } from '../../actions/session/order';
import {
  PUSH_GEOLOCATION,
  FETCH_LOCATION,
  FETCH_LOCATIONS,
  FETCH_WAIT_TIMES,
} from '../../actions/data/locations';

export const initialState = {
  locationsById: {},
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case PUSH_GEOLOCATION:
      return {
        ...state,
        locationsById: {
          ...state.locationsById,
          [`${payload.location_id}`]: payload,
        },
      };
    case `${FETCH_LOCATION}_FULFILLED`:
    case `${RESOLVE_ORDER_LOCATION}_FULFILLED`:
      if (payload) {
        return {
          ...state,
          locationsById: {
            ...state.locationsById,
            [`${payload.location_id}`]: payload,
          },
        };
      }
      return { ...state };
    case `${FETCH_WAIT_TIMES}_FULFILLED`:
      if (payload) {
        return {
          ...state,
          locationsById: {
            ...state.locationsById,
            [`${payload.locationId}`]: {
              ...state.locationsById[`${payload.locationId}`],
              waitTimes: payload.data,
            },
          },
        };
      }
      return { ...state };
    case `${FETCH_LOCATIONS}_FULFILLED`:
      return {
        ...state,
        locationsById: {
          ...state.locationsById,
          ...reduce(payload, (acc, curr) => ({
            ...acc,
            [`${curr.location_id}`]: curr,
          }), {}),
        },
      };
    default:
      return state;
  }
};