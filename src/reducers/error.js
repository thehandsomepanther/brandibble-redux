import reduxCrud from 'redux-crud';

const {
  ALLERGENS_FETCH_START,
  ALLERGENS_FETCH_ERROR,
} = reduxCrud.actionTypesFor('allergens');

const {
  LOCATIONS_FETCH_START,
  LOCATIONS_FETCH_ERROR,
} = reduxCrud.actionTypesFor('locations');

const {
  MENUS_FETCH_START,
  MENUS_FETCH_ERROR,
} = reduxCrud.actionTypesFor('menus');

const initialState = {
  fetchAllergens: null,
  fetchLocations: null,
  fetchMenu: null,
};

export default function error(state=initialState, action) {
  switch (action.type) {
    case ALLERGENS_FETCH_START: return { ...state, fetchAllergens: null };
    case ALLERGENS_FETCH_ERROR: return { ...state, fetchAllergens: action.error}

    case LOCATIONS_FETCH_START: return { ...state, fetchLocations: null };
    case LOCATIONS_FETCH_ERROR: return { ...state, fetchLocations: action.error}

    case MENUS_FETCH_START: return { ...state, fetchMenu: null };
    case MENUS_FETCH_ERROR: return { ...state, fetchMenu: action.error}

    default: return state;
  }
}
