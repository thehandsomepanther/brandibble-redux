Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=

























































































































































status;var _reduxCrud=require('redux-crud');var _reduxCrud2=_interopRequireDefault(_reduxCrud);var _application=require('../actions/application');var _addresses=require('../actions/session/addresses');var _allergens=require('../actions/data/allergens');var _menus=require('../actions/session/menus');var _favorites=require('../actions/session/favorites');var _payments=require('../actions/session/payments');var _order=require('../actions/session/order');var _locations=require('../actions/data/locations');var _geolocations=require('../actions/data/geolocations');var _user=require('../actions/session/user');var _customerOrders=require('../actions/data/customerOrders');var _constants=require('../utils/constants');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var FULFILLED=_constants.Status.FULFILLED,IDLE=_constants.Status.IDLE,PENDING=_constants.Status.PENDING,REJECTED=_constants.Status.REJECTED;var _reduxCrud$actionType=_reduxCrud2.default.actionTypesFor('ratings'),RATINGS_FETCH_START=_reduxCrud$actionType.RATINGS_FETCH_START,RATINGS_FETCH_SUCCESS=_reduxCrud$actionType.RATINGS_FETCH_SUCCESS,RATINGS_FETCH_ERROR=_reduxCrud$actionType.RATINGS_FETCH_ERROR,RATINGS_CREATE_START=_reduxCrud$actionType.RATINGS_CREATE_START,RATINGS_CREATE_SUCCESS=_reduxCrud$actionType.RATINGS_CREATE_SUCCESS,RATINGS_CREATE_ERROR=_reduxCrud$actionType.RATINGS_CREATE_ERROR,RATINGS_UPDATE_START=_reduxCrud$actionType.RATINGS_UPDATE_START,RATINGS_UPDATE_SUCCESS=_reduxCrud$actionType.RATINGS_UPDATE_SUCCESS,RATINGS_UPDATE_ERROR=_reduxCrud$actionType.RATINGS_UPDATE_ERROR,RATINGS_DELETE_START=_reduxCrud$actionType.RATINGS_DELETE_START,RATINGS_DELETE_SUCCESS=_reduxCrud$actionType.RATINGS_DELETE_SUCCESS,RATINGS_DELETE_ERROR=_reduxCrud$actionType.RATINGS_DELETE_ERROR;var _reduxCrud$actionType2=_reduxCrud2.default.actionTypesFor('user'),USER_UPDATE_START=_reduxCrud$actionType2.USER_UPDATE_START,USER_UPDATE_SUCCESS=_reduxCrud$actionType2.USER_UPDATE_SUCCESS,USER_UPDATE_ERROR=_reduxCrud$actionType2.USER_UPDATE_ERROR,USER_CREATE_START=_reduxCrud$actionType2.USER_CREATE_START,USER_CREATE_SUCCESS=_reduxCrud$actionType2.USER_CREATE_SUCCESS,USER_CREATE_ERROR=_reduxCrud$actionType2.USER_CREATE_ERROR;var initialState={setupBrandibble:IDLE,setupBrandibbleRedux:IDLE,sendSupportTicket:IDLE,fetchAddresses:IDLE,createAddress:IDLE,deleteAddress:IDLE,fetchAllergens:IDLE,addAllergens:IDLE,removeAllergens:IDLE,fetchLevelUpLoyalty:IDLE,fetchLevelUpQRCode:IDLE,updateLevelUpConnection:IDLE,connectLevelUp:IDLE,fetchLevelUpCampaign:IDLE,disconnectLevelUp:IDLE,fetchLevelUpPaymentMethod:IDLE,fetchLocation:IDLE,fetchLocations:IDLE,fetchGeolocations:IDLE,fetchAllCustomerOrders:IDLE,fetchPastCustomerOrders:IDLE,fetchUpcomingCustomerOrders:IDLE,fetchMenu:IDLE,resolveOrder:IDLE,setOrderLocationId:IDLE,submitOrder:IDLE,addLineItem:IDLE,setRequestedAt:IDLE,fetchPayments:IDLE,setPromoCode:IDLE,setMiscOptions:IDLE,createPayment:IDLE,setDefaultPayment:IDLE,setPaymentMethod:IDLE,deletePayment:IDLE,fetchFavorites:IDLE,createFavorite:IDLE,updateFavorite:IDLE,deleteFavorite:IDLE,fetchRating:IDLE,createRating:IDLE,updateRating:IDLE,deleteRating:IDLE,authenticateUser:IDLE,createUser:IDLE,fetchUser:IDLE,resetUserPassword:IDLE,resetLevelUpPassword:IDLE,resolveUser:IDLE,unauthenticateUser:IDLE,updateUser:IDLE,validateUser:IDLE,validateCurrentCart:IDLE,validateCurrentOrder:IDLE,setLineItemMadeFor:IDLE,setLineItemInstructions:IDLE,createNewOrder:IDLE};function status(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
case _application.SETUP_BRANDIBBLE+'_PENDING':
return _extends({},state,{setupBrandibble:PENDING});
case _application.SETUP_BRANDIBBLE+'_FULFILLED':
return _extends({},state,{setupBrandibble:FULFILLED});
case _application.SETUP_BRANDIBBLE+'_REJECTED':
return _extends({},state,{setupBrandibble:REJECTED});

case _application.SETUP_BRANDIBBLE_REDUX+'_PENDING':
return _extends({},state,{setupBrandibbleRedux:PENDING});
case _application.SETUP_BRANDIBBLE_REDUX+'_FULFILLED':
return _extends({},state,{setupBrandibbleRedux:FULFILLED});
case _application.SETUP_BRANDIBBLE_REDUX+'_REJECTED':
return _extends({},state,{setupBrandibbleRedux:REJECTED});

case _application.SEND_SUPPORT_TICKET+'_PENDING':
return _extends({},state,{sendSupportTicket:PENDING});
case _application.SEND_SUPPORT_TICKET+'_FULFILLED':
return _extends({},state,{sendSupportTicket:FULFILLED});
case _application.SEND_SUPPORT_TICKET+'_REJECTED':
return _extends({},state,{sendSupportTicket:REJECTED});

case _allergens.FETCH_ALLERGENS+'_PENDING':
return _extends({},state,{fetchAllergens:PENDING});
case _allergens.FETCH_ALLERGENS+'_FULFILLED':
return _extends({},state,{fetchAllergens:FULFILLED});
case _allergens.FETCH_ALLERGENS+'_REJECTED':
return _extends({},state,{fetchAllergens:REJECTED});

case _addresses.FETCH_ADDRESSES+'_PENDING':
return _extends({},state,{fetchAddresses:PENDING});
case _addresses.FETCH_ADDRESSES+'_FULFILLED':
return _extends({},state,{fetchAddresses:FULFILLED});
case _addresses.FETCH_ADDRESSES+'_REJECTED':
return _extends({},state,{fetchAddresses:REJECTED});

case _addresses.CREATE_ADDRESS+'_PENDING':
return _extends({},state,{createAddress:PENDING});
case _addresses.CREATE_ADDRESS+'_FULFILLED':
return _extends({},state,{createAddress:FULFILLED});
case _addresses.CREATE_ADDRESS+'_REJECTED':
return _extends({},state,{createAddress:REJECTED});

case _addresses.DELETE_ADDRESS+'_PENDING':
return _extends({},state,{deleteAddress:PENDING});
case _addresses.DELETE_ADDRESS+'_FULFILLED':
return _extends({},state,{deleteAddress:FULFILLED});
case _addresses.DELETE_ADDRESS+'_REJECTED':
return _extends({},state,{deleteAddress:REJECTED});

case _locations.FETCH_LOCATIONS+'_PENDING':
return _extends({},state,{fetchLocations:PENDING});
case _locations.FETCH_LOCATIONS+'_FULFILLED':
return _extends({},state,{fetchLocations:FULFILLED});
case _locations.FETCH_LOCATIONS+'_REJECTED':
return _extends({},state,{fetchLocations:REJECTED});

case _locations.FETCH_LOCATION+'_PENDING':
return _extends({},state,{fetchLocation:PENDING});
case _locations.FETCH_LOCATION+'_FULFILLED':
return _extends({},state,{fetchLocation:FULFILLED});
case _locations.FETCH_LOCATION+'_REJECTED':
return _extends({},state,{fetchLocation:REJECTED});

case _geolocations.FETCH_GEOLOCATIONS+'_PENDING':
return _extends({},state,{fetchGeolocations:PENDING});
case _geolocations.FETCH_GEOLOCATIONS+'_FULFILLED':
return _extends({},state,{fetchGeolocations:FULFILLED});
case _geolocations.FETCH_GEOLOCATIONS+'_REJECTED':
return _extends({},state,{fetchGeolocations:REJECTED});

case _order.SET_PAYMENT_METHOD+'_PENDING':
return _extends({},state,{setPaymentMethod:PENDING});
case _order.SET_PAYMENT_METHOD+'_FULFILLED':
return _extends({},state,{setPaymentMethod:FULFILLED});
case _order.SET_PAYMENT_METHOD+'_REJECTED':
return _extends({},state,{setPaymentMethod:REJECTED});

case _customerOrders.FETCH_ALL_CUSTOMER_ORDERS+'_PENDING':
return _extends({},state,{fetchAllCustomerOrders:PENDING});
case _customerOrders.FETCH_ALL_CUSTOMER_ORDERS+'_FULFILLED':
return _extends({},state,{fetchAllCustomerOrders:FULFILLED});
case _customerOrders.FETCH_ALL_CUSTOMER_ORDERS+'_REJECTED':
return _extends({},state,{fetchAllCustomerOrders:REJECTED});

case _customerOrders.FETCH_PAST_CUSTOMER_ORDERS+'_PENDING':
return _extends({},state,{fetchPastCustomerOrders:PENDING});
case _customerOrders.FETCH_PAST_CUSTOMER_ORDERS+'_FULFILLED':
return _extends({},state,{fetchPastCustomerOrders:FULFILLED});
case _customerOrders.FETCH_PAST_CUSTOMER_ORDERS+'_REJECTED':
return _extends({},state,{fetchPastCustomerOrders:REJECTED});

case _customerOrders.FETCH_UPCOMING_CUSTOMER_ORDERS+'_PENDING':
return _extends({},state,{fetchUpcomingCustomerOrders:PENDING});
case _customerOrders.FETCH_UPCOMING_CUSTOMER_ORDERS+'_FULFILLED':
return _extends({},state,{fetchUpcomingCustomerOrders:FULFILLED});
case _customerOrders.FETCH_UPCOMING_CUSTOMER_ORDERS+'_REJECTED':
return _extends({},state,{fetchUpcomingCustomerOrders:REJECTED});

case _menus.FETCH_MENU+'_PENDING':
return _extends({},state,{fetchMenu:PENDING});
case _menus.FETCH_MENU+'_FULFILLED':
return _extends({},state,{fetchMenu:FULFILLED});
case _menus.FETCH_MENU+'_REJECTED':
return _extends({},state,{fetchMenu:REJECTED});

case _order.RESOLVE_ORDER+'_PENDING':
return _extends({},state,{resolveOrder:PENDING});
case _order.RESOLVE_ORDER+'_FULFILLED':
return _extends({},state,{resolveOrder:FULFILLED});
case _order.RESOLVE_ORDER+'_REJECTED':
return _extends({},state,{resolveOrder:REJECTED});

case _order.ADD_LINE_ITEM+'_PENDING':
return _extends({},state,{addLineItem:PENDING});
case _order.ADD_LINE_ITEM+'_FULFILLED':
return _extends({},state,{addLineItem:FULFILLED});
case _order.ADD_LINE_ITEM+'_REJECTED':
return _extends({},state,{addLineItem:REJECTED});

case _order.SET_REQUESTED_AT+'_PENDING':
return _extends({},state,{setRequestedAt:PENDING});
case _order.SET_REQUESTED_AT+'_FULFILLED':
return _extends({},state,{setRequestedAt:FULFILLED});
case _order.SET_REQUESTED_AT+'_REJECTED':
return _extends({},state,{setRequestedAt:REJECTED});

case _order.SET_LINE_ITEM_MADE_FOR+'_PENDING':
return _extends({},state,{setLineItemMadeFor:PENDING});
case _order.SET_LINE_ITEM_MADE_FOR+'_FULFILLED':
return _extends({},state,{setLineItemMadeFor:FULFILLED});
case _order.SET_LINE_ITEM_MADE_FOR+'_REJECTED':
return _extends({},state,{setLineItemMadeFor:REJECTED});

case _order.SET_LINE_ITEM_INSTRUCTIONS+'_PENDING':
return _extends({},state,{setLineItemInstructions:PENDING});
case _order.SET_LINE_ITEM_INSTRUCTIONS+'_FULFILLED':
return _extends({},state,{setLineItemInstructions:FULFILLED});
case _order.SET_LINE_ITEM_INSTRUCTIONS+'_REJECTED':
return _extends({},state,{setLineItemInstructions:REJECTED});

case _order.CREATE_NEW_ORDER+'_PENDING':
return _extends({},state,{createNewOrder:PENDING});
case _order.CREATE_NEW_ORDER+'_FULFILLED':
return _extends({},state,{createNewOrder:FULFILLED});
case _order.CREATE_NEW_ORDER+'_REJECTED':
return _extends({},state,{createNewOrder:REJECTED});

case _order.SET_ORDER_LOCATION_ID+'_PENDING':
return _extends({},state,{setOrderLocationId:PENDING});
case _order.SET_ORDER_LOCATION_ID+'_FULFILLED':
return _extends({},state,{setOrderLocationId:FULFILLED});
case _order.SET_ORDER_LOCATION_ID+'_REJECTED':
return _extends({},state,{setOrderLocationId:REJECTED});

case _order.SET_PROMO_CODE+'_PENDING':
return _extends({},state,{setPromoCode:PENDING});
case _order.SET_PROMO_CODE+'_FULFILLED':
return _extends({},state,{setPromoCode:FULFILLED});
case _order.SET_PROMO_CODE+'_REJECTED':
return _extends({},state,{setPromoCode:REJECTED});

case _order.SET_MISC_OPTIONS+'_PENDING':
return _extends({},state,{setMiscOptions:PENDING});
case _order.SET_MISC_OPTIONS+'_FULFILLED':
return _extends({},state,{setMiscOptions:FULFILLED});
case _order.SET_MISC_OPTIONS+'_REJECTED':
return _extends({},state,{setMiscOptions:REJECTED});

case _order.SUBMIT_ORDER+'_PENDING':
return _extends({},state,{submitOrder:PENDING});
case _order.SUBMIT_ORDER+'_FULFILLED':
return _extends({},state,{submitOrder:FULFILLED});
case _order.SUBMIT_ORDER+'_REJECTED':
return _extends({},state,{submitOrder:REJECTED});


case _payments.FETCH_PAYMENTS+'_PENDING':
return _extends({},state,{fetchPayments:PENDING});
case _payments.FETCH_PAYMENTS+'_FULFILLED':
return _extends({},state,{fetchPayments:FULFILLED});
case _payments.FETCH_PAYMENTS+'_REJECTED':
return _extends({},state,{fetchPayments:REJECTED});

case _payments.CREATE_PAYMENT+'_PENDING':
return _extends({},state,{createPayment:PENDING});
case _payments.CREATE_PAYMENT+'_FULFILLED':
return _extends({},state,{createPayment:FULFILLED});
case _payments.CREATE_PAYMENT+'_REJECTED':
return _extends({},state,{createPayment:REJECTED});

case _payments.DELETE_PAYMENT+'_PENDING':
return _extends({},state,{deletePayment:PENDING});
case _payments.DELETE_PAYMENT+'_FULFILLED':
return _extends({},state,{deletePayment:FULFILLED});
case _payments.DELETE_PAYMENT+'_REJECTED':
return _extends({},state,{deletePayment:REJECTED});

case _payments.SET_DEFAULT_PAYMENT+'_PENDING':
return _extends({},state,{setDefaultPayment:PENDING});
case _payments.SET_DEFAULT_PAYMENT+'_FULFILLED':
return _extends({},state,{setDefaultPayment:FULFILLED});
case _payments.SET_DEFAULT_PAYMENT+'_REJECTED':
return _extends({},state,{setDefaultPayment:REJECTED});


case _favorites.FETCH_FAVORITES+'_PENDING':
return _extends({},state,{fetchFavorites:PENDING});
case _favorites.FETCH_FAVORITES+'_FULFILLED':
return _extends({},state,{fetchFavorites:FULFILLED});
case _favorites.FETCH_FAVORITES+'_REJECTED':
return _extends({},state,{fetchFavorites:REJECTED});

case _favorites.CREATE_FAVORITE+'_PENDING':
return _extends({},state,{createFavorite:PENDING});
case _favorites.CREATE_FAVORITE+'_FULFILLED':
return _extends({},state,{createFavorite:FULFILLED});
case _favorites.CREATE_FAVORITE+'_REJECTED':
return _extends({},state,{createFavorite:REJECTED});

case _favorites.UPDATE_FAVORITE+'_PENDING':
return _extends({},state,{updateFavorite:PENDING});
case _favorites.UPDATE_FAVORITE+'_FULFILLED':
return _extends({},state,{updateFavorite:FULFILLED});
case _favorites.UPDATE_FAVORITE+'_REJECTED':
return _extends({},state,{updateFavorite:REJECTED});

case _favorites.DELETE_FAVORITE+'_PENDING':
return _extends({},state,{deleteFavorite:PENDING});
case _favorites.DELETE_FAVORITE+'_FULFILLED':
return _extends({},state,{deleteFavorite:FULFILLED});
case _favorites.DELETE_FAVORITE+'_REJECTED':
return _extends({},state,{deleteFavorite:REJECTED});

case RATINGS_FETCH_START:
return _extends({},state,{fetchRating:PENDING});
case RATINGS_FETCH_SUCCESS:
return _extends({},state,{fetchRating:FULFILLED});
case RATINGS_FETCH_ERROR:
return _extends({},state,{fetchRating:REJECTED});

case RATINGS_CREATE_START:
return _extends({},state,{createRating:PENDING});
case RATINGS_CREATE_SUCCESS:
return _extends({},state,{createRating:FULFILLED});
case RATINGS_CREATE_ERROR:
return _extends({},state,{createRating:REJECTED});

case RATINGS_UPDATE_START:
return _extends({},state,{updateRating:PENDING});
case RATINGS_UPDATE_SUCCESS:
return _extends({},state,{updateRating:FULFILLED});
case RATINGS_UPDATE_ERROR:
return _extends({},state,{updateRating:REJECTED});

case RATINGS_DELETE_START:
return _extends({},state,{deleteRating:PENDING});
case RATINGS_DELETE_SUCCESS:
return _extends({},state,{deleteRating:FULFILLED});
case RATINGS_DELETE_ERROR:
return _extends({},state,{deleteRating:REJECTED});

case _user.VALIDATE_USER+'_PENDING':
return _extends({},state,{validateUser:PENDING});
case _user.VALIDATE_USER+'_FULFILLED':
return _extends({},state,{validateUser:FULFILLED});
case _user.VALIDATE_USER+'_REJECTED':
return _extends({},state,{validateUser:REJECTED});

case _user.ADD_ALLERGENS+'_PENDING':
return _extends({},state,{addAllergens:PENDING});
case _user.ADD_ALLERGENS+'_FULFILLED':
return _extends({},state,{addAllergens:FULFILLED});
case _user.ADD_ALLERGENS+'_REJECTED':
return _extends({},state,{addAllergens:REJECTED});

case _user.REMOVE_ALLERGENS+'_PENDING':
return _extends({},state,{removeAllergens:PENDING});
case _user.REMOVE_ALLERGENS+'_FULFILLED':
return _extends({},state,{removeAllergens:FULFILLED});
case _user.REMOVE_ALLERGENS+'_REJECTED':
return _extends({},state,{removeAllergens:REJECTED});

case _user.AUTHENTICATE_USER+'_PENDING':
return _extends({},state,{authenticateUser:PENDING});
case _user.AUTHENTICATE_USER+'_FULFILLED':
return _extends({},state,{authenticateUser:FULFILLED});
case _user.AUTHENTICATE_USER+'_REJECTED':
return _extends({},state,{authenticateUser:REJECTED});

case _user.RESOLVE_USER+'_PENDING':
return _extends({},state,{resolveUser:PENDING});
case _user.RESOLVE_USER+'_FULFILLED':
return _extends({},state,{resolveUser:FULFILLED});
case _user.RESOLVE_USER+'_REJECTED':
return _extends({},state,{resolveUser:REJECTED});

case _user.FETCH_LEVELUP_LOYALTY+'_PENDING':
return _extends({},state,{fetchLevelUpLoyalty:PENDING});
case _user.FETCH_LEVELUP_LOYALTY+'_FULFILLED':
return _extends({},state,{fetchLevelUpLoyalty:FULFILLED});
case _user.FETCH_LEVELUP_LOYALTY+'_REJECTED':
return _extends({},state,{fetchLevelUpLoyalty:REJECTED});

case _user.FETCH_LEVELUP_CAMPAIGN+'_PENDING':
return _extends({},state,{fetchLevelUpCampaign:PENDING});
case _user.FETCH_LEVELUP_CAMPAIGN+'_FULFILLED':
return _extends({},state,{fetchLevelUpCampaign:FULFILLED});
case _user.FETCH_LEVELUP_CAMPAIGN+'_REJECTED':
return _extends({},state,{fetchLevelUpCampaign:REJECTED});

case _user.FETCH_LEVELUP_QR_CODE+'_PENDING':
return _extends({},state,{fetchLevelUpQRCode:PENDING});
case _user.FETCH_LEVELUP_QR_CODE+'_FULFILLED':
return _extends({},state,{fetchLevelUpQRCode:FULFILLED});
case _user.FETCH_LEVELUP_QR_CODE+'_REJECTED':
return _extends({},state,{fetchLevelUpQRCode:REJECTED});

case _user.UPDATE_LEVELUP_CONNECTION+'_PENDING':
return _extends({},state,{updateLevelUpConnection:PENDING});
case _user.UPDATE_LEVELUP_CONNECTION+'_FULFILLED':
return _extends({},state,{updateLevelUpConnection:FULFILLED});
case _user.UPDATE_LEVELUP_CONNECTION+'_REJECTED':
return _extends({},state,{updateLevelUpConnection:REJECTED});

case _user.CONNECT_LEVELUP+'_PENDING':
return _extends({},state,{connectLevelUp:PENDING});
case _user.CONNECT_LEVELUP+'_FULFILLED':
return _extends({},state,{connectLevelUp:FULFILLED});
case _user.CONNECT_LEVELUP+'_REJECTED':
return _extends({},state,{connectLevelUp:REJECTED});

case _user.DISCONNECT_LEVELUP+'_PENDING':
return _extends({},state,{disconnectLevelUp:PENDING});
case _user.DISCONNECT_LEVELUP+'_FULFILLED':
return _extends({},state,{disconnectLevelUp:FULFILLED});
case _user.DISCONNECT_LEVELUP+'_REJECTED':
return _extends({},state,{disconnectLevelUp:REJECTED});

case _user.FETCH_LEVELUP_PAYMENT_METHOD+'_PENDING':
return _extends({},state,{fetchLevelUpPaymentMethod:PENDING});
case _user.FETCH_LEVELUP_PAYMENT_METHOD+'_FULFILLED':
return _extends({},state,{fetchLevelUpPaymentMethod:FULFILLED});
case _user.FETCH_LEVELUP_PAYMENT_METHOD+'_REJECTED':
return _extends({},state,{fetchLevelUpPaymentMethod:REJECTED});

case _order.VALIDATE_CURRENT_CART+'_PENDING':
return _extends({},state,{validateCurrentCart:PENDING});
case _order.VALIDATE_CURRENT_CART+'_FULFILLED':
return _extends({},state,{validateCurrentCart:FULFILLED});
case _order.VALIDATE_CURRENT_CART+'_REJECTED':
return _extends({},state,{validateCurrentCart:REJECTED});

case _order.VALIDATE_CURRENT_ORDER+'_PENDING':
return _extends({},state,{validateCurrentOrder:PENDING});
case _order.VALIDATE_CURRENT_ORDER+'_FULFILLED':
return _extends({},state,{validateCurrentOrder:FULFILLED});
case _order.VALIDATE_CURRENT_ORDER+'_REJECTED':
return _extends({},state,{validateCurrentOrder:REJECTED});

case _user.UNAUTHENTICATE_USER+'_PENDING':
return _extends({},state,{unauthenticateUser:PENDING});
case _user.UNAUTHENTICATE_USER+'_FULFILLED':
return _extends({},state,{unauthenticateUser:FULFILLED});
case _user.UNAUTHENTICATE_USER+'_REJECTED':
return _extends({},state,{unauthenticateUser:REJECTED});

case _user.RESET_USER_PASSWORD+'_PENDING':
return _extends({},state,{resetUserPassword:PENDING});
case _user.RESET_USER_PASSWORD+'_FULFILLED':
return _extends({},state,{resetUserPassword:FULFILLED});
case _user.RESET_USER_PASSWORD+'_REJECTED':
return _extends({},state,{resetUserPassword:REJECTED});

case _user.RESET_LEVELUP_PASSWORD+'_PENDING':
return _extends({},state,{resetLevelUpPassword:PENDING});
case _user.RESET_LEVELUP_PASSWORD+'_FULFILLED':
return _extends({},state,{resetLevelUpPassword:FULFILLED});
case _user.RESET_LEVELUP_PASSWORD+'_REJECTED':
return _extends({},state,{resetLevelUpPassword:REJECTED});

case _user.FETCH_USER+'_PENDING':
return _extends({},state,{fetchUser:PENDING});
case _user.FETCH_USER+'_FULFILLED':
return _extends({},state,{fetchUser:FULFILLED});
case _user.FETCH_USER+'_REJECTED':
return _extends({},state,{fetchUser:REJECTED});

case USER_UPDATE_START:
return _extends({},state,{updateUser:PENDING});
case USER_UPDATE_SUCCESS:
return _extends({},state,{updateUser:FULFILLED});
case USER_UPDATE_ERROR:
return _extends({},state,{updateUser:REJECTED});

case USER_CREATE_START:
return _extends({},state,{createUser:PENDING});
case USER_CREATE_SUCCESS:
return _extends({},state,{createUser:FULFILLED});
case USER_CREATE_ERROR:
return _extends({},state,{createUser:REJECTED});

default:
return state;}

}