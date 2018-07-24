import { FETCH_ALLERGENS } from '../../actions/data/allergens';

export const initialState = {
  allergensById: {},
};

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case `${FETCH_ALLERGENS}_FULFILLED`:
      return {
        ...state,
        allergensById: payload.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {}),
      };
    default:
      return state;
  }
};