// TODO: this reducer is untested
import { SETUP_BRANDIBBLE, SETUP_BRANDIBBLE_REDUX } from 'actions/setup';
import { RESOLVE_ORDER } from 'actions/session/order';
import {
  AUTHENTICATE_USER,
  FETCH_USER,
  UNAUTHENTICATE_USER,
  RESET_USER_PASSWORD,
  RESOLVE_USER,
  VALIDATE_USER,
} from 'actions/session/user';
import { Status } from 'utils/constants';
import reduxCrud from 'redux-crud';

const {
  FULFILLED,
  IDLE,
  PENDING,
  REJECTED,
} = Status;

const {
  ALLERGENS_FETCH_START,
  ALLERGENS_FETCH_SUCCESS,
  ALLERGENS_FETCH_ERROR,
} = reduxCrud.actionTypesFor('allergens');

const {
  LOCATIONS_FETCH_START,
  LOCATIONS_FETCH_SUCCESS,
  LOCATIONS_FETCH_ERROR,
} = reduxCrud.actionTypesFor('locations');

const {
  MENUS_FETCH_START,
  MENUS_FETCH_SUCCESS,
  MENUS_FETCH_ERROR,
} = reduxCrud.actionTypesFor('menus');

const {
  USER_UPDATE_START,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_ERROR,
  USER_CREATE_START,
  USER_CREATE_SUCCESS,
  USER_CREATE_ERROR,
} = reduxCrud.actionTypesFor('user');

const initialState = {
  setupBrandibble: IDLE,
  setupBrandibbleRedux: IDLE,
  fetchAllergens: IDLE,
  fetchLocations: IDLE,
  fetchMenu: IDLE,
  resolveOrder: IDLE,
  authenticateUser: IDLE,
  createUser: IDLE,
  fetchUser: IDLE,
  resetUserPassword: IDLE,
  resolveUser: IDLE,
  unauthenticateUser: IDLE,
  updateUser: IDLE,
  validateUser: IDLE,
};

export default function status(state=initialState, action) {
  switch (action.type) {
    case `${SETUP_BRANDIBBLE}_PENDING`: return { ...state,   setupBrandibble: PENDING }
    case `${SETUP_BRANDIBBLE}_FULFILLED`: return { ...state, setupBrandibble: FULFILLED }
    case `${SETUP_BRANDIBBLE}_REJECTED`: return { ...state,  setupBrandibble: REJECTED }

    case `${SETUP_BRANDIBBLE_REDUX}_PENDING`: return { ...state,   setupBrandibbleRedux: PENDING }
    case `${SETUP_BRANDIBBLE_REDUX}_FULFILLED`: return { ...state, setupBrandibbleRedux: FULFILLED }
    case `${SETUP_BRANDIBBLE_REDUX}_REJECTED`: return { ...state,  setupBrandibbleRedux: REJECTED }

    case ALLERGENS_FETCH_START: return { ...state, fetchAllergens: PENDING }
    case ALLERGENS_FETCH_SUCCESS: return { ...state, fetchAllergens: FULFILLED }
    case ALLERGENS_FETCH_ERROR: return { ...state, fetchAllergens: REJECTED }

    case LOCATIONS_FETCH_START: return { ...state,   fetchLocations: PENDING }
    case LOCATIONS_FETCH_SUCCESS: return { ...state, fetchLocations: FULFILLED }
    case LOCATIONS_FETCH_ERROR: return { ...state,  fetchLocations: REJECTED }

    case MENUS_FETCH_START: return { ...state,   fetchMenu: PENDING }
    case MENUS_FETCH_SUCCESS: return { ...state, fetchMenu: FULFILLED }
    case MENUS_FETCH_ERROR: return { ...state,  fetchMenu: REJECTED }

    case `${RESOLVE_ORDER}_PENDING`: return { ...state,   resolveOrder: PENDING }
    case `${RESOLVE_ORDER}_FULFILLED`: return { ...state, resolveOrder: FULFILLED }
    case `${RESOLVE_ORDER}_REJECTED`: return { ...state,  resolveOrder: REJECTED }

    case `${VALIDATE_USER}_PENDING`: return { ...state,   validateUser: PENDING }
    case `${VALIDATE_USER}_FULFILLED`: return { ...state, validateUser: FULFILLED }
    case `${VALIDATE_USER}_REJECTED`: return { ...state,  validateUser: REJECTED }

    case `${AUTHENTICATE_USER}_PENDING`: return { ...state,   authenticateUser: PENDING }
    case `${AUTHENTICATE_USER}_FULFILLED`: return { ...state, authenticateUser: FULFILLED }
    case `${AUTHENTICATE_USER}_REJECTED`: return { ...state,  authenticateUser: REJECTED }

    case `${RESOLVE_USER}_PENDING`: return { ...state,   resolveUser: PENDING }
    case `${RESOLVE_USER}_FULFILLED`: return { ...state, resolveUser: FULFILLED }
    case `${RESOLVE_USER}_REJECTED`: return { ...state,  resolveUser: REJECTED }

    case `${UNAUTHENTICATE_USER}_PENDING`: return { ...state,   unauthenticateUser: PENDING }
    case `${UNAUTHENTICATE_USER}_FULFILLED`: return { ...state, unauthenticateUser: FULFILLED }
    case `${UNAUTHENTICATE_USER}_REJECTED`: return { ...state,  unauthenticateUser: REJECTED }

    case `${RESET_USER_PASSWORD}_PENDING`: return { ...state,   resetUserPassword: PENDING }
    case `${RESET_USER_PASSWORD}_FULFILLED`: return { ...state, resetUserPassword: FULFILLED }
    case `${RESET_USER_PASSWORD}_REJECTED`: return { ...state,  resetUserPassword: REJECTED }

    case `${FETCH_USER}_PENDING`: return { ...state,   fetchUser: PENDING }
    case `${FETCH_USER}_FULFILLED`: return { ...state, fetchUser: FULFILLED }
    case `${FETCH_USER}_REJECTED`: return { ...state,  fetchUser: REJECTED }

    case USER_UPDATE_START: return { ...state,   updateUser: PENDING }
    case USER_UPDATE_SUCCESS: return { ...state, updateUser: FULFILLED }
    case USER_UPDATE_ERROR: return { ...state,  updateUser: REJECTED }

    case USER_CREATE_START: return { ...state,   createUser: PENDING }
    case USER_CREATE_SUCCESS: return { ...state, createUser: FULFILLED }
    case USER_CREATE_ERROR: return { ...state,  createUser: REJECTED }

    default: return state;
  }
}
