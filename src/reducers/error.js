import reduxCrud from 'redux-crud';

// setup
import {
  SEND_SUPPORT_TICKET,
  SETUP_BRANDIBBLE,
  SETUP_BRANDIBBLE_REDUX,
} from '../actions/application';

// addresses
import {
  CREATE_ADDRESS,
  DELETE_ADDRESS,
  FETCH_ADDRESSES,
} from '../actions/session/addresses';

// allergens
import { FETCH_ALLERGENS } from '../actions/data/allergens';

// menu
import { FETCH_MENU } from '../actions/session/menus';

// favorites
import {
  CREATE_FAVORITE,
  DELETE_FAVORITE,
  FETCH_FAVORITES,
  UPDATE_FAVORITE,
} from '../actions/session/favorites';

// orders
import {
  ADD_LINE_ITEM,
  RESOLVE_ORDER,
  SUBMIT_ORDER,
  VALIDATE_CURRENT_CART,
  VALIDATE_CURRENT_ORDER,
  SET_LINE_ITEM_MADE_FOR,
  SET_PAYMENT_METHOD,
  SET_LINE_ITEM_INSTRUCTIONS,
} from '../actions/session/order';

// locations
import { FETCH_LOCATION, FETCH_LOCATIONS } from '../actions/data/locations';

// geolocations
import { FETCH_GEOLOCATIONS } from '../actions/data/geolocations';

//  payments
import {
  FETCH_PAYMENTS,
  CREATE_PAYMENT,
  DELETE_PAYMENT,
  SET_DEFAULT_PAYMENT,
} from '../actions/session/payments';

// customerOrders
import {
  FETCH_ALL_CUSTOMER_ORDERS,
  FETCH_PAST_CUSTOMER_ORDERS,
  FETCH_UPCOMING_CUSTOMER_ORDERS,
} from '../actions/data/customerOrders';

// user
import {
  AUTHENTICATE_USER,
  FETCH_LEVELUP_LOYALTY,
  FETCH_LEVELUP_QR_CODE,
  FETCH_LEVELUP_CAMPAIGN,
  UPDATE_LEVELUP_CONNECTION,
  CONNECT_LEVELUP,
  DISCONNECT_LEVELUP,
  FETCH_LEVELUP_PAYMENT_METHOD,
  FETCH_USER,
  RESET_USER_PASSWORD,
  RESET_LEVELUP_PASSWORD,
  RESOLVE_USER,
  UNAUTHENTICATE_USER,
  VALIDATE_USER,
  ADD_ALLERGENS,
  REMOVE_ALLERGENS,
} from '../actions/session/user';

const {
  USER_UPDATE_START,
  USER_UPDATE_ERROR,
  USER_CREATE_START,
  USER_CREATE_ERROR,
} = reduxCrud.actionTypesFor('user');

// ratings
const {
  RATINGS_FETCH_START,
  RATINGS_FETCH_ERROR,
  RATINGS_CREATE_START,
  RATINGS_CREATE_ERROR,
  RATINGS_UPDATE_START,
  RATINGS_UPDATE_ERROR,
  RATINGS_DELETE_START,
  RATINGS_DELETE_ERROR,
} = reduxCrud.actionTypesFor('ratings');

export const initialState = {
  // application
  sendSupportTicket: null,
  setupBrandibble: null,
  setupBrandibbleRedux: null,
  // allergens
  fetchAllergens: null,
  addAllergens: null,
  removeAllergens: null,
  // customer orders
  fetchAllCustomerOrders: null,
  fetchPastCustomerOrders: null,
  fetchUpcomingCustomerOrders: null,
  // addresses
  fetchAddresses: null,
  createAddress: null,
  deleteAddress: null,
  // locations
  fetchLocation: null,
  fetchLocations: null,
  // geolocations
  fetchGeolocations: null,
  // menu
  fetchMenu: null,
  // orders
  addLineItem: null,
  resolveOrder: null,
  submitOrder: null,
  setLineItemMadeFor: null,
  setLineItemInstructions: null,
  // payments
  fetchPayments: null,
  createPayment: null,
  deletePayment: null,
  setPaymentMethod: null,
  setDefaultPayment: null,
  // favorites
  fetchFavorites: null,
  createFavorite: null,
  updateFavorite: null,
  deleteFavorite: null,
  // ratings
  fetchRating: null,
  createRating: null,
  updateRating: null,
  deleteRating: null,
  // user
  authenticateUser: null,
  createUser: null,
  fetchLevelUpLoyalty: null,
  fetchLevelUpQRCode: null,
  fetchLevelUpCampaign: null,
  updateLevelUpConnection: null,
  connectLevelUp: null,
  disconnectLevelUp: null,
  fetchLevelUpPaymentMethod: null,
  fetchUser: null,
  resetUserPassword: null,
  resetLevelUpPassword: null,
  resolveUser: null,
  unauthenticateUser: null,
  updateUser: null,
  validateUser: null,
  validateCurrentCart: null,
  validateCurrentOrder: null,
};

export default function error(state = initialState, action) {
  switch (action.type) {
    // application
    case `${SETUP_BRANDIBBLE}_PENDING`: return { ...state, setupBrandibble: null };
    case `${SETUP_BRANDIBBLE}_REJECTED`: return { ...state, setupBrandibble: action.payload };

    case `${SETUP_BRANDIBBLE_REDUX}_PENDING`: return { ...state, setupBrandibbleRedux: null };
    case `${SETUP_BRANDIBBLE_REDUX}_REJECTED`: return { ...state, setupBrandibbleRedux: action.payload };

    case `${SET_PAYMENT_METHOD}_PENDING`: return { ...state, setPaymentMethod: null };
    case `${SET_PAYMENT_METHOD}_REJECTED`: return { ...state, setPaymentMethod: action.payload };

    case `${SEND_SUPPORT_TICKET}_PENDING`: return { ...state, sendSupportTicket: null };
    case `${SEND_SUPPORT_TICKET}_REJECTED`: return { ...state, sendSupportTicket: action.payload };

    // customer orders
    case `${FETCH_ALL_CUSTOMER_ORDERS}_PENDING`: return { ...state, fetchAllCustomerOrders: null };
    case `${FETCH_ALL_CUSTOMER_ORDERS}_REJECTED`: return { ...state, fetchAllCustomerOrders: action.payload };

    case `${FETCH_PAST_CUSTOMER_ORDERS}_PENDING`: return { ...state, fetchPastCustomerOrders: null };
    case `${FETCH_PAST_CUSTOMER_ORDERS}_REJECTED`: return { ...state, fetchPastCustomerOrders: action.payload };

    case `${FETCH_UPCOMING_CUSTOMER_ORDERS}_PENDING`: return { ...state, fetchUpcomingCustomerOrders: null };
    case `${FETCH_UPCOMING_CUSTOMER_ORDERS}_REJECTED`: return { ...state, fetchUpcomingCustomerOrders: action.payload };

    // allergens
    case `${FETCH_ALLERGENS}_PENDING`: return { ...state, fetchAllergens: null };
    case `${FETCH_ALLERGENS}_REJECTED`: return { ...state, fetchAllergens: action.payload };

    // addresses
    case `${FETCH_ADDRESSES}_PENDING`: return { ...state, fetchAddresses: null };
    case `${FETCH_ADDRESSES}_REJECTED`: return { ...state, fetchAddresses: action.payload };

    case `${CREATE_ADDRESS}_PENDING`: return { ...state, createAddress: null };
    case `${CREATE_ADDRESS}_REJECTED`: return { ...state, createAddress: action.payload };

    case `${DELETE_ADDRESS}_PENDING`: return { ...state, deleteAddress: null };
    case `${DELETE_ADDRESS}_REJECTED`: return { ...state, deleteAddress: action.payload };

    // locations
    case `${FETCH_LOCATIONS}_PENDING`: return { ...state, fetchLocations: null };
    case `${FETCH_LOCATIONS}_REJECTED`: return { ...state, fetchLocations: action.payload };

    case `${FETCH_LOCATION}_PENDING`: return { ...state, fetchLocation: null };
    case `${FETCH_LOCATION}_REJECTED`: return { ...state, fetchLocation: action.payload };

    // geolocations
    case `${FETCH_GEOLOCATIONS}_PENDING`: return { ...state, fetchGeolocations: null };
    case `${FETCH_GEOLOCATIONS}_REJECTED`: return { ...state, fetchGeolocations: action.payload };

    // menu
    case `${FETCH_MENU}_PENDING`: return { ...state, fetchMenu: null };
    case `${FETCH_MENU}_REJECTED`: return { ...state, fetchMenu: action.payload };

    // orders
    case `${RESOLVE_ORDER}_PENDING`: return { ...state, resolveOrder: null };
    case `${RESOLVE_ORDER}_REJECTED`: return { ...state, resolveOrder: action.payload };

    case `${ADD_LINE_ITEM}_PENDING`: return { ...state, addLineItem: null };
    case `${ADD_LINE_ITEM}_REJECTED`: return { ...state, addLineItem: action.payload };

    case `${SUBMIT_ORDER}_PENDING`: return { ...state, submitOrder: null };
    case `${SUBMIT_ORDER}_REJECTED`: return { ...state, submitOrder: action.payload };

    case `${VALIDATE_CURRENT_CART}_PENDING`: return { ...state, validateCurrentCart: null };
    case `${VALIDATE_CURRENT_CART}_REJECTED`: return { ...state, validateCurrentCart: action.payload };

    case `${VALIDATE_CURRENT_ORDER}_PENDING`: return { ...state, validateCurrentOrder: null };
    case `${VALIDATE_CURRENT_ORDER}_REJECTED`: return { ...state, validateCurrentOrder: action.payload };

    case `${SET_LINE_ITEM_MADE_FOR}_PENDING`: return { ...state, setLineItemMadeFor: null };
    case `${SET_LINE_ITEM_MADE_FOR}_REJECTED`: return { ...state, setLineItemMadeFor: action.payload };

    case `${SET_LINE_ITEM_INSTRUCTIONS}_PENDING`: return { ...state, setLineItemInstructions: null };
    case `${SET_LINE_ITEM_INSTRUCTIONS}_REJECTED`: return { ...state, setLineItemInstructions: action.payload };

    // payments
    case `${FETCH_PAYMENTS}_PENDING`: return { ...state, fetchPayments: null };
    case `${FETCH_PAYMENTS}_REJECTED`: return { ...state, fetchPayments: action.payload };

    case `${CREATE_PAYMENT}_PENDING`: return { ...state, createPayment: null };
    case `${CREATE_PAYMENT}_REJECTED`: return { ...state, createPayment: action.payload };

    case `${DELETE_PAYMENT}_PENDING`: return { ...state, deletePayment: null };
    case `${DELETE_PAYMENT}_REJECTED`: return { ...state, deletePayment: action.payload };

    case `${SET_DEFAULT_PAYMENT}_PENDING`: return { ...state, setDefaultPayment: null };
    case `${SET_DEFAULT_PAYMENT}_REJECTED`: return { ...state, setDefaultPayment: action.payload };

    // favorites
    case `${FETCH_FAVORITES}_PENDING`: return { ...state, fetchFavorites: null };
    case `${FETCH_FAVORITES}_REJECTED`: return { ...state, fetchFavorites: action.payload };

    case `${CREATE_FAVORITE}_PENDING`: return { ...state, createFavorite: null };
    case `${CREATE_FAVORITE}_REJECTED`: return { ...state, createFavorite: action.payload };

    case `${UPDATE_FAVORITE}_PENDING`: return { ...state, updateFavorite: null };
    case `${UPDATE_FAVORITE}_REJECTED`: return { ...state, updateFavorite: action.payload };

    case `${DELETE_FAVORITE}_PENDING`: return { ...state, deleteFavorite: null };
    case `${DELETE_FAVORITE}_REJECTED`: return { ...state, deleteFavorite: action.payload };

    // ratings
    case RATINGS_FETCH_START: return { ...state, fetchRating: null };
    case RATINGS_FETCH_ERROR: return { ...state, fetchRating: action.error };

    case RATINGS_CREATE_START: return { ...state, createRating: null };
    case RATINGS_CREATE_ERROR: return { ...state, createRating: action.error };

    case RATINGS_UPDATE_START: return { ...state, updateRating: null };
    case RATINGS_UPDATE_ERROR: return { ...state, updateRating: action.error };

    case RATINGS_DELETE_START: return { ...state, deleteRating: null };
    case RATINGS_DELETE_ERROR: return { ...state, deleteRating: action.error };

    // users
    case `${AUTHENTICATE_USER}_PENDING`: return { ...state, authenticateUser: null };
    case `${AUTHENTICATE_USER}_REJECTED`: return { ...state, authenticateUser: action.payload };

    case `${ADD_ALLERGENS}_PENDING`: return { ...state, addAllergens: null };
    case `${ADD_ALLERGENS}_FULFILLED`: return { ...state, addAllergens: action.payload };
    case `${ADD_ALLERGENS}_REJECTED`: return { ...state, addAllergens: action.error };

    case `${REMOVE_ALLERGENS}_PENDING`: return { ...state, removeAllergens: null };
    case `${REMOVE_ALLERGENS}_FULFILLED`: return { ...state, removeAllergens: action.payload };
    case `${REMOVE_ALLERGENS}_REJECTED`: return { ...state, removeAllergens: action.error };

    case `${RESOLVE_USER}_PENDING`: return { ...state, resolveUser: null };
    case `${RESOLVE_USER}_REJECTED`: return { ...state, resolveUser: action.payload };

    case `${UNAUTHENTICATE_USER}_PENDING`: return { ...state, unauthenticateUser: null };
    case `${UNAUTHENTICATE_USER}_REJECTED`: return { ...state, unauthenticateUser: action.payload };

    case `${FETCH_LEVELUP_LOYALTY}_PENDING`: return { ...state, fetchLevelUpLoyalty: null };
    case `${FETCH_LEVELUP_LOYALTY}_REJECTED`: return { ...state, fetchLevelUpLoyalty: action.payload };

    case `${FETCH_LEVELUP_CAMPAIGN}_PENDING`: return { ...state, fetchLevelUpCampaign: null };
    case `${FETCH_LEVELUP_CAMPAIGN}_REJECTED`: return { ...state, fetchLevelUpCampaign: action.payload };

    case `${FETCH_LEVELUP_QR_CODE}_PENDING`: return { ...state, fetchLevelUpQRCode: null };
    case `${FETCH_LEVELUP_QR_CODE}_REJECTED`: return { ...state, fetchLevelUpQRCode: action.payload };

    case `${UPDATE_LEVELUP_CONNECTION}_PENDING`: return { ...state, updateLevelUpConnection: null };
    case `${UPDATE_LEVELUP_CONNECTION}_REJECTED`: return { ...state, updateLevelUpConnection: action.payload };

    case `${CONNECT_LEVELUP}_PENDING`: return { ...state, connectLevelUp: null };
    case `${CONNECT_LEVELUP}_REJECTED`: return { ...state, connectLevelUp: action.payload };

    case `${DISCONNECT_LEVELUP}_PENDING`: return { ...state, disconnectLevelUp: null };
    case `${DISCONNECT_LEVELUP}_REJECTED`: return { ...state, disconnectLevelUp: action.payload };

    case `${FETCH_LEVELUP_PAYMENT_METHOD}_PENDING`: return { ...state, fetchLevelUpPaymentMethod: null };
    case `${FETCH_LEVELUP_PAYMENT_METHOD}_REJECTED`: return { ...state, fetchLevelUpPaymentMethod: action.payload };

    case `${VALIDATE_USER}_PENDING`: return { ...state, validateUser: null };
    case `${VALIDATE_USER}_REJECTED`: return { ...state, validateUser: action.payload };

    case `${RESET_USER_PASSWORD}_PENDING`: return { ...state, resetUserPassword: null };
    case `${RESET_USER_PASSWORD}_REJECTED`: return { ...state, resetUserPassword: action.payload };

    case `${RESET_LEVELUP_PASSWORD}_PENDING`: return { ...state, resetLevelUpPassword: null };
    case `${RESET_LEVELUP_PASSWORD}_REJECTED`: return { ...state, resetLevelUpPassword: action.payload };

    case `${FETCH_USER}_PENDING`: return { ...state, fetchUser: null };
    case `${FETCH_USER}_REJECTED`: return { ...state, fetchUser: action.payload };

    case USER_UPDATE_START: return { ...state, updateUser: null };
    case USER_UPDATE_ERROR: return { ...state, updateUser: action.error };

    case USER_CREATE_START: return { ...state, createUser: null };
    case USER_CREATE_ERROR: return { ...state, createUser: action.error };

    default: return state;
  }
}
