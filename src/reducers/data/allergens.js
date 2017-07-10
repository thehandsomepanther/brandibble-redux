import { FETCH_ALLERGENS } from 'actions/data/allergens';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_ALLERGENS}_FULFILLED`:
      return action.payload;
    default:
      return state;
  }
};
