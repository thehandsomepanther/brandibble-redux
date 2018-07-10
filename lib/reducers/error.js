Object.defineProperty(exports,"__esModule",{value:true});exports.initialState=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=








































































































































































error;var _reduxCrud=require('redux-crud');var _reduxCrud2=_interopRequireDefault(_reduxCrud);var _application=require('../actions/application');var _addresses=require('../actions/session/addresses');var _allergens=require('../actions/data/allergens');var _menus=require('../actions/session/menus');var _favorites=require('../actions/session/favorites');var _order=require('../actions/session/order');var _locations=require('../actions/data/locations');var _geolocations=require('../actions/data/geolocations');var _payments=require('../actions/session/payments');var _customerOrders=require('../actions/data/customerOrders');var _user=require('../actions/session/user');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _reduxCrud$actionType=_reduxCrud2.default.actionTypesFor('user'),USER_UPDATE_START=_reduxCrud$actionType.USER_UPDATE_START,USER_UPDATE_ERROR=_reduxCrud$actionType.USER_UPDATE_ERROR,USER_CREATE_START=_reduxCrud$actionType.USER_CREATE_START,USER_CREATE_ERROR=_reduxCrud$actionType.USER_CREATE_ERROR;var _reduxCrud$actionType2=_reduxCrud2.default.actionTypesFor('ratings'),RATINGS_FETCH_START=_reduxCrud$actionType2.RATINGS_FETCH_START,RATINGS_FETCH_ERROR=_reduxCrud$actionType2.RATINGS_FETCH_ERROR,RATINGS_CREATE_START=_reduxCrud$actionType2.RATINGS_CREATE_START,RATINGS_CREATE_ERROR=_reduxCrud$actionType2.RATINGS_CREATE_ERROR,RATINGS_UPDATE_START=_reduxCrud$actionType2.RATINGS_UPDATE_START,RATINGS_UPDATE_ERROR=_reduxCrud$actionType2.RATINGS_UPDATE_ERROR,RATINGS_DELETE_START=_reduxCrud$actionType2.RATINGS_DELETE_START,RATINGS_DELETE_ERROR=_reduxCrud$actionType2.RATINGS_DELETE_ERROR;var initialState=exports.initialState={sendSupportTicket:null,setupBrandibble:null,setupBrandibbleRedux:null,fetchAllergens:null,addAllergens:null,removeAllergens:null,fetchAllCustomerOrders:null,fetchPastCustomerOrders:null,fetchUpcomingCustomerOrders:null,fetchAddresses:null,createAddress:null,deleteAddress:null,fetchLocation:null,fetchLocations:null,fetchGeolocations:null,fetchMenu:null,addLineItem:null,resolveOrder:null,submitOrder:null,setLineItemMadeFor:null,setLineItemInstructions:null,fetchPayments:null,createPayment:null,deletePayment:null,setPaymentMethod:null,setDefaultPayment:null,fetchFavorites:null,createFavorite:null,updateFavorite:null,deleteFavorite:null,fetchRating:null,createRating:null,updateRating:null,deleteRating:null,authenticateUser:null,createUser:null,fetchLevelUpLoyalty:null,fetchLevelUpQRCode:null,fetchLevelUpCampaign:null,updateLevelUpConnection:null,connectLevelUp:null,disconnectLevelUp:null,fetchLevelUpPaymentMethod:null,fetchUser:null,resetUserPassword:null,resetLevelUpPassword:null,resolveUser:null,unauthenticateUser:null,updateUser:null,validateUser:null,validateCurrentCart:null,validateCurrentOrder:null};function error(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){

case _application.SETUP_BRANDIBBLE+'_PENDING':return _extends({},state,{setupBrandibble:null});
case _application.SETUP_BRANDIBBLE+'_REJECTED':return _extends({},state,{setupBrandibble:action.payload});

case _application.SETUP_BRANDIBBLE_REDUX+'_PENDING':return _extends({},state,{setupBrandibbleRedux:null});
case _application.SETUP_BRANDIBBLE_REDUX+'_REJECTED':return _extends({},state,{setupBrandibbleRedux:action.payload});

case _order.SET_PAYMENT_METHOD+'_PENDING':return _extends({},state,{setPaymentMethod:null});
case _order.SET_PAYMENT_METHOD+'_REJECTED':return _extends({},state,{setPaymentMethod:action.payload});

case _application.SEND_SUPPORT_TICKET+'_PENDING':return _extends({},state,{sendSupportTicket:null});
case _application.SEND_SUPPORT_TICKET+'_REJECTED':return _extends({},state,{sendSupportTicket:action.payload});


case _customerOrders.FETCH_ALL_CUSTOMER_ORDERS+'_PENDING':return _extends({},state,{fetchAllCustomerOrders:null});
case _customerOrders.FETCH_ALL_CUSTOMER_ORDERS+'_REJECTED':return _extends({},state,{fetchAllCustomerOrders:action.payload});

case _customerOrders.FETCH_PAST_CUSTOMER_ORDERS+'_PENDING':return _extends({},state,{fetchPastCustomerOrders:null});
case _customerOrders.FETCH_PAST_CUSTOMER_ORDERS+'_REJECTED':return _extends({},state,{fetchPastCustomerOrders:action.payload});

case _customerOrders.FETCH_UPCOMING_CUSTOMER_ORDERS+'_PENDING':return _extends({},state,{fetchUpcomingCustomerOrders:null});
case _customerOrders.FETCH_UPCOMING_CUSTOMER_ORDERS+'_REJECTED':return _extends({},state,{fetchUpcomingCustomerOrders:action.payload});


case _allergens.FETCH_ALLERGENS+'_PENDING':return _extends({},state,{fetchAllergens:null});
case _allergens.FETCH_ALLERGENS+'_REJECTED':return _extends({},state,{fetchAllergens:action.payload});


case _addresses.FETCH_ADDRESSES+'_PENDING':return _extends({},state,{fetchAddresses:null});
case _addresses.FETCH_ADDRESSES+'_REJECTED':return _extends({},state,{fetchAddresses:action.payload});

case _addresses.CREATE_ADDRESS+'_PENDING':return _extends({},state,{createAddress:null});
case _addresses.CREATE_ADDRESS+'_REJECTED':return _extends({},state,{createAddress:action.payload});

case _addresses.DELETE_ADDRESS+'_PENDING':return _extends({},state,{deleteAddress:null});
case _addresses.DELETE_ADDRESS+'_REJECTED':return _extends({},state,{deleteAddress:action.payload});


case _locations.FETCH_LOCATIONS+'_PENDING':return _extends({},state,{fetchLocations:null});
case _locations.FETCH_LOCATIONS+'_REJECTED':return _extends({},state,{fetchLocations:action.payload});

case _locations.FETCH_LOCATION+'_PENDING':return _extends({},state,{fetchLocation:null});
case _locations.FETCH_LOCATION+'_REJECTED':return _extends({},state,{fetchLocation:action.payload});


case _geolocations.FETCH_GEOLOCATIONS+'_PENDING':return _extends({},state,{fetchGeolocations:null});
case _geolocations.FETCH_GEOLOCATIONS+'_REJECTED':return _extends({},state,{fetchGeolocations:action.payload});


case _menus.FETCH_MENU+'_PENDING':return _extends({},state,{fetchMenu:null});
case _menus.FETCH_MENU+'_REJECTED':return _extends({},state,{fetchMenu:action.payload});


case _order.RESOLVE_ORDER+'_PENDING':return _extends({},state,{resolveOrder:null});
case _order.RESOLVE_ORDER+'_REJECTED':return _extends({},state,{resolveOrder:action.payload});

case _order.ADD_LINE_ITEM+'_PENDING':return _extends({},state,{addLineItem:null});
case _order.ADD_LINE_ITEM+'_REJECTED':return _extends({},state,{addLineItem:action.payload});

case _order.SUBMIT_ORDER+'_PENDING':return _extends({},state,{submitOrder:null});
case _order.SUBMIT_ORDER+'_REJECTED':return _extends({},state,{submitOrder:action.payload});

case _order.VALIDATE_CURRENT_CART+'_PENDING':return _extends({},state,{validateCurrentCart:null});
case _order.VALIDATE_CURRENT_CART+'_REJECTED':return _extends({},state,{validateCurrentCart:action.payload});

case _order.VALIDATE_CURRENT_ORDER+'_PENDING':return _extends({},state,{validateCurrentOrder:null});
case _order.VALIDATE_CURRENT_ORDER+'_REJECTED':return _extends({},state,{validateCurrentOrder:action.payload});

case _order.SET_LINE_ITEM_MADE_FOR+'_PENDING':return _extends({},state,{setLineItemMadeFor:null});
case _order.SET_LINE_ITEM_MADE_FOR+'_REJECTED':return _extends({},state,{setLineItemMadeFor:action.payload});

case _order.SET_LINE_ITEM_INSTRUCTIONS+'_PENDING':return _extends({},state,{setLineItemInstructions:null});
case _order.SET_LINE_ITEM_INSTRUCTIONS+'_REJECTED':return _extends({},state,{setLineItemInstructions:action.payload});


case _payments.FETCH_PAYMENTS+'_PENDING':return _extends({},state,{fetchPayments:null});
case _payments.FETCH_PAYMENTS+'_REJECTED':return _extends({},state,{fetchPayments:action.payload});

case _payments.CREATE_PAYMENT+'_PENDING':return _extends({},state,{createPayment:null});
case _payments.CREATE_PAYMENT+'_REJECTED':return _extends({},state,{createPayment:action.payload});

case _payments.DELETE_PAYMENT+'_PENDING':return _extends({},state,{deletePayment:null});
case _payments.DELETE_PAYMENT+'_REJECTED':return _extends({},state,{deletePayment:action.payload});

case _payments.SET_DEFAULT_PAYMENT+'_PENDING':return _extends({},state,{setDefaultPayment:null});
case _payments.SET_DEFAULT_PAYMENT+'_REJECTED':return _extends({},state,{setDefaultPayment:action.payload});


case _favorites.FETCH_FAVORITES+'_PENDING':return _extends({},state,{fetchFavorites:null});
case _favorites.FETCH_FAVORITES+'_REJECTED':return _extends({},state,{fetchFavorites:action.payload});

case _favorites.CREATE_FAVORITE+'_PENDING':return _extends({},state,{createFavorite:null});
case _favorites.CREATE_FAVORITE+'_REJECTED':return _extends({},state,{createFavorite:action.payload});

case _favorites.UPDATE_FAVORITE+'_PENDING':return _extends({},state,{updateFavorite:null});
case _favorites.UPDATE_FAVORITE+'_REJECTED':return _extends({},state,{updateFavorite:action.payload});

case _favorites.DELETE_FAVORITE+'_PENDING':return _extends({},state,{deleteFavorite:null});
case _favorites.DELETE_FAVORITE+'_REJECTED':return _extends({},state,{deleteFavorite:action.payload});


case RATINGS_FETCH_START:return _extends({},state,{fetchRating:null});
case RATINGS_FETCH_ERROR:return _extends({},state,{fetchRating:action.error});

case RATINGS_CREATE_START:return _extends({},state,{createRating:null});
case RATINGS_CREATE_ERROR:return _extends({},state,{createRating:action.error});

case RATINGS_UPDATE_START:return _extends({},state,{updateRating:null});
case RATINGS_UPDATE_ERROR:return _extends({},state,{updateRating:action.error});

case RATINGS_DELETE_START:return _extends({},state,{deleteRating:null});
case RATINGS_DELETE_ERROR:return _extends({},state,{deleteRating:action.error});


case _user.AUTHENTICATE_USER+'_PENDING':return _extends({},state,{authenticateUser:null});
case _user.AUTHENTICATE_USER+'_REJECTED':return _extends({},state,{authenticateUser:action.payload});

case _user.ADD_ALLERGENS+'_PENDING':return _extends({},state,{addAllergens:null});
case _user.ADD_ALLERGENS+'_FULFILLED':return _extends({},state,{addAllergens:action.payload});
case _user.ADD_ALLERGENS+'_REJECTED':return _extends({},state,{addAllergens:action.error});

case _user.REMOVE_ALLERGENS+'_PENDING':return _extends({},state,{removeAllergens:null});
case _user.REMOVE_ALLERGENS+'_FULFILLED':return _extends({},state,{removeAllergens:action.payload});
case _user.REMOVE_ALLERGENS+'_REJECTED':return _extends({},state,{removeAllergens:action.error});

case _user.RESOLVE_USER+'_PENDING':return _extends({},state,{resolveUser:null});
case _user.RESOLVE_USER+'_REJECTED':return _extends({},state,{resolveUser:action.payload});

case _user.UNAUTHENTICATE_USER+'_PENDING':return _extends({},state,{unauthenticateUser:null});
case _user.UNAUTHENTICATE_USER+'_REJECTED':return _extends({},state,{unauthenticateUser:action.payload});

case _user.FETCH_LEVELUP_LOYALTY+'_PENDING':return _extends({},state,{fetchLevelUpLoyalty:null});
case _user.FETCH_LEVELUP_LOYALTY+'_REJECTED':return _extends({},state,{fetchLevelUpLoyalty:action.payload});

case _user.FETCH_LEVELUP_CAMPAIGN+'_PENDING':return _extends({},state,{fetchLevelUpCampaign:null});
case _user.FETCH_LEVELUP_CAMPAIGN+'_REJECTED':return _extends({},state,{fetchLevelUpCampaign:action.payload});

case _user.FETCH_LEVELUP_QR_CODE+'_PENDING':return _extends({},state,{fetchLevelUpQRCode:null});
case _user.FETCH_LEVELUP_QR_CODE+'_REJECTED':return _extends({},state,{fetchLevelUpQRCode:action.payload});

case _user.UPDATE_LEVELUP_CONNECTION+'_PENDING':return _extends({},state,{updateLevelUpConnection:null});
case _user.UPDATE_LEVELUP_CONNECTION+'_REJECTED':return _extends({},state,{updateLevelUpConnection:action.payload});

case _user.CONNECT_LEVELUP+'_PENDING':return _extends({},state,{connectLevelUp:null});
case _user.CONNECT_LEVELUP+'_REJECTED':return _extends({},state,{connectLevelUp:action.payload});

case _user.DISCONNECT_LEVELUP+'_PENDING':return _extends({},state,{disconnectLevelUp:null});
case _user.DISCONNECT_LEVELUP+'_REJECTED':return _extends({},state,{disconnectLevelUp:action.payload});

case _user.FETCH_LEVELUP_PAYMENT_METHOD+'_PENDING':return _extends({},state,{fetchLevelUpPaymentMethod:null});
case _user.FETCH_LEVELUP_PAYMENT_METHOD+'_REJECTED':return _extends({},state,{fetchLevelUpPaymentMethod:action.payload});

case _user.VALIDATE_USER+'_PENDING':return _extends({},state,{validateUser:null});
case _user.VALIDATE_USER+'_REJECTED':return _extends({},state,{validateUser:action.payload});

case _user.RESET_USER_PASSWORD+'_PENDING':return _extends({},state,{resetUserPassword:null});
case _user.RESET_USER_PASSWORD+'_REJECTED':return _extends({},state,{resetUserPassword:action.payload});

case _user.RESET_LEVELUP_PASSWORD+'_PENDING':return _extends({},state,{resetLevelUpPassword:null});
case _user.RESET_LEVELUP_PASSWORD+'_REJECTED':return _extends({},state,{resetLevelUpPassword:action.payload});

case _user.FETCH_USER+'_PENDING':return _extends({},state,{fetchUser:null});
case _user.FETCH_USER+'_REJECTED':return _extends({},state,{fetchUser:action.payload});

case USER_UPDATE_START:return _extends({},state,{updateUser:null});
case USER_UPDATE_ERROR:return _extends({},state,{updateUser:action.error});

case USER_CREATE_START:return _extends({},state,{createUser:null});
case USER_CREATE_ERROR:return _extends({},state,{createUser:action.error});

default:return state;}

}