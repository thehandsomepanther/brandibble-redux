import {
  FETCH_LOCATION,
  FETCH_LOCATIONS,
} from 'actions/data/locations';

const initialState = [];

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case `${FETCH_LOCATION}_FULFILLED`: {
      const filtered = state.filter(loc => loc.id !== payload.id);
      filtered.push(payload);
      return filtered;
    }
    case `${FETCH_LOCATIONS}_FULFILLED`:
      return action.payload;
    default:
      return state;
  }
};
