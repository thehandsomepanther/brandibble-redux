import pickBy from 'lodash.pickby';
import {
  CREATE_FAVORITE,
  DELETE_FAVORITE,
  FETCH_FAVORITES,
  UPDATE_FAVORITE,
} from '../../actions/session/favorites';
import { UNAUTHENTICATE_USER } from '../../actions/session/user';

export const initialState = {
  favoritesById: {},
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case `${FETCH_FAVORITES}_FULFILLED`:
      return {
        ...state,
        favoritesById: {
          ...state.favoritesById,
          ...payload.reduce((acc, curr) => ({
            ...acc,
            [curr.favorite_item_id]: curr,
          }), {}),
        },
      };

    case `${UPDATE_FAVORITE}_FULFILLED`:
    case `${CREATE_FAVORITE}_FULFILLED`:
      return {
        ...state,
        favoritesById: {
          ...state.favoritesById,
          [payload.favorite_item_id]: payload,
        },
      };

    case `${DELETE_FAVORITE}_FULFILLED`:
      return {
        ...state,
        favoritesById: pickBy(
          state.favoritesById,
          (_, key) => !(key === `${payload}` || state.favoritesById[key].favorite_item_id === payload),
        ),
      };

    case `${UNAUTHENTICATE_USER}_FULFILLED`:
      return { ...initialState };
    default:
      return state;
  }
};