import {
  FETCH_GEOLOCATIONS,
  CLEAR_GEOLOCATIONS,
} from '../../actions/data/geolocations';

export const initialState = [];

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case `${FETCH_GEOLOCATIONS}_FULFILLED`:
      return [...payload];
    case `${CLEAR_GEOLOCATIONS}_FULFILLED`:
    default:
      return state;
  }
};
