import reduxCrud from 'redux-crud';

// setup
import {
  SETUP_BRANDIBBLE,
  SETUP_BRANDIBBLE_REDUX,
} from 'actions/setup';

// orders
import { RESOLVE_ORDER } from 'actions/session/order';
// user
import {
  AUTHENTICATE_USER,
  RESOLVE_USER,
  UNAUTHENTICATE_USER,
  VALIDATE_USER,
} from 'actions/session/user';

// allergens
const {
  ALLERGENS_FETCH_START,
  ALLERGENS_FETCH_ERROR,
} = reduxCrud.actionTypesFor('allergens');

// locations
const {
  LOCATIONS_FETCH_START,
  LOCATIONS_FETCH_ERROR,
} = reduxCrud.actionTypesFor('locations');

// menu
const {
  MENUS_FETCH_START,
  MENUS_FETCH_ERROR,
} = reduxCrud.actionTypesFor('menus');

// payments
const {
  PAYMENTS_FETCH_START,
  PAYMENTS_FETCH_ERROR,
  PAYMENTS_CREATE_START,
  PAYMENTS_CREATE_ERROR,
  PAYMENTS_DELETE_START,
  PAYMENTS_DELETE_ERROR,
} = reduxCrud.actionTypesFor('payments');

export const initialState = {
  // setup
  setupBrandibble: null,
  setupBrandibbleRedux: null,
  // allergens
  fetchAllergens: null,
  // locations
  fetchLocations: null,
  // menu
  fetchMenu: null,
  // orders
  resolveOrder: null,
  // payments
  fetchPayments: null,
  createPayment: null,
  deletePayment: null,
  // user
  authenticateUser: null,
  resolveUser: null,
  unauthenticateUser: null,
  validateUser: null,
};

export default function error(state=initialState, action) {
  switch (action.type) {
    // setup
    case `${SETUP_BRANDIBBLE}_PENDING`: return { ...state, setupBrandibble: null };
    case `${SETUP_BRANDIBBLE}_REJECTED`: return { ...state, setupBrandibble: action.error}

    case `${SETUP_BRANDIBBLE_REDUX}_PENDING`: return { ...state, setupBrandibbleRedux: null };
    case `${SETUP_BRANDIBBLE_REDUX}_REJECTED`: return { ...state, setupBrandibbleRedux: action.error}

    // allergens
    case ALLERGENS_FETCH_START: return { ...state, fetchAllergens: null };
    case ALLERGENS_FETCH_ERROR: return { ...state, fetchAllergens: action.error}

    // locations
    case LOCATIONS_FETCH_START: return { ...state, fetchLocations: null };
    case LOCATIONS_FETCH_ERROR: return { ...state, fetchLocations: action.error}

    // menu
    case MENUS_FETCH_START: return { ...state, fetchMenu: null };
    case MENUS_FETCH_ERROR: return { ...state, fetchMenu: action.error}

    // orders
    case `${RESOLVE_ORDER}_PENDING`: return { ...state, resolveOrder: null };
    case `${RESOLVE_ORDER}_REJECTED`: return { ...state, resolveOrder: action.error}

    // payments
    case PAYMENTS_FETCH_START: return { ...state, fetchPayments: null };
    case PAYMENTS_FETCH_ERROR: return { ...state, fetchPayments: action.error}

    case PAYMENTS_CREATE_START: return { ...state, createPayment: null };
    case PAYMENTS_CREATE_ERROR: return { ...state, createPayment: action.error}

    case PAYMENTS_DELETE_START: return { ...state, deletePayment: null };
    case PAYMENTS_DELETE_ERROR: return { ...state, deletePayment: action.error}

    // users
    case `${AUTHENTICATE_USER}_PENDING`: return { ...state, authenticateUser: null };
    case `${AUTHENTICATE_USER}_REJECTED`: return { ...state, authenticateUser: action.error}

    case `${RESOLVE_USER}_PENDING`: return { ...state, resolveUser: null };
    case `${RESOLVE_USER}_REJECTED`: return { ...state, resolveUser: action.error}

    case `${UNAUTHENTICATE_USER}_PENDING`: return { ...state, unauthenticateUser: null };
    case `${UNAUTHENTICATE_USER}_REJECTED`: return { ...state, unauthenticateUser: action.error}

    case `${VALIDATE_USER}_PENDING`: return { ...state, validateUser: null };
    case `${VALIDATE_USER}_REJECTED`: return { ...state, validateUser: action.error}

    default: return state;
  }
}
