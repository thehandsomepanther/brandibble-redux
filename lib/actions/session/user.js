Object.defineProperty(exports,"__esModule",{value:true});exports.fetchLevelUpPaymentMethod=exports.disconnectLevelUp=exports.connectLevelUp=exports.updateLevelUpConnection=exports.fetchLevelUpLoyalty=exports.fetchLevelUpCampaign=exports.fetchLevelUpQRCode=exports.FETCH_LEVELUP_PAYMENT_METHOD=exports.DISCONNECT_LEVELUP=exports.CONNECT_LEVELUP=exports.UPDATE_LEVELUP_CONNECTION=exports.FETCH_LEVELUP_CAMPAIGN=exports.FETCH_LEVELUP_LOYALTY=exports.FETCH_LEVELUP_QR_CODE=exports.REMOVE_ALLERGENS=exports.ADD_ALLERGENS=exports.RESET_LEVELUP_PASSWORD=exports.RESET_USER_PASSWORD=exports.FETCH_USER=exports.RESOLVE_USER=exports.UNAUTHENTICATE_USER=exports.AUTHENTICATE_USER=exports.VALIDATE_USER=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.



















































































































































































































validateUser=validateUser;exports.



authenticateUser=authenticateUser;exports.




addAllergens=addAllergens;exports.




removeAllergens=removeAllergens;exports.



unauthenticateUser=unauthenticateUser;exports.



fetchUser=fetchUser;exports.




resetUserPassword=resetUserPassword;exports.



resetLevelUpPassword=resetLevelUpPassword;exports.



resolveUser=resolveUser;exports.






createUser=createUser;exports.












updateUser=updateUser;var _reduxCrud=require('redux-crud');var _reduxCrud2=_interopRequireDefault(_reduxCrud);var _generateUUID=require('../../utils/generateUUID');var _generateUUID2=_interopRequireDefault(_generateUUID);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _reduxCrud$actionCrea=_reduxCrud2.default.actionCreatorsFor('user'),updateStart=_reduxCrud$actionCrea.updateStart,updateSuccess=_reduxCrud$actionCrea.updateSuccess,updateError=_reduxCrud$actionCrea.updateError,createStart=_reduxCrud$actionCrea.createStart,createSuccess=_reduxCrud$actionCrea.createSuccess,createError=_reduxCrud$actionCrea.createError;var VALIDATE_USER=exports.VALIDATE_USER='VALIDATE_USER';var AUTHENTICATE_USER=exports.AUTHENTICATE_USER='AUTHENTICATE_USER';var UNAUTHENTICATE_USER=exports.UNAUTHENTICATE_USER='UNAUTHENTICATE_USER';var RESOLVE_USER=exports.RESOLVE_USER='RESOLVE_USER';var FETCH_USER=exports.FETCH_USER='FETCH_USER';var RESET_USER_PASSWORD=exports.RESET_USER_PASSWORD='RESET_USER_PASSWORD';var RESET_LEVELUP_PASSWORD=exports.RESET_LEVELUP_PASSWORD='RESET_LEVELUP_PASSWORD';var ADD_ALLERGENS=exports.ADD_ALLERGENS='ADD_ALLERGENS';var REMOVE_ALLERGENS=exports.REMOVE_ALLERGENS='REMOVE_ALLERGENS';var FETCH_LEVELUP_QR_CODE=exports.FETCH_LEVELUP_QR_CODE='FETCH_LEVELUP_QR_CODE';var FETCH_LEVELUP_LOYALTY=exports.FETCH_LEVELUP_LOYALTY='FETCH_LEVELUP_LOYALTY';var FETCH_LEVELUP_CAMPAIGN=exports.FETCH_LEVELUP_CAMPAIGN='FETCH_LEVELUP_CAMPAIGN';var UPDATE_LEVELUP_CONNECTION=exports.UPDATE_LEVELUP_CONNECTION='UPDATE_LEVELUP_CONNECTION';var CONNECT_LEVELUP=exports.CONNECT_LEVELUP='CONNECT_LEVELUP';var DISCONNECT_LEVELUP=exports.DISCONNECT_LEVELUP='DISCONNECT_LEVELUP';var FETCH_LEVELUP_PAYMENT_METHOD=exports.FETCH_LEVELUP_PAYMENT_METHOD='FETCH_LEVELUP_PAYMENT_METHOD';var NO_OP=function NO_OP(f){return f;};function _validateUser(brandibble,email,success,fail){return{type:VALIDATE_USER,payload:brandibble.customers.validateCustomer({email:email}).then(function(_ref){var data=_ref.data;success(data);return data;}).catch(function(response){var errors=response.errors;throw fail(errors||response);})};}function _authenticateUser(brandibble,loginData,success,fail){return{type:AUTHENTICATE_USER,payload:brandibble.customers.authenticate(loginData).then(function(_ref2){var data=_ref2.data;success(data);return data;}).catch(function(response){var errors=response.errors;throw fail(errors||response);})};}function _addAllergens(brandibble,allergens,success,fail){return{type:ADD_ALLERGENS,payload:brandibble.allergens.create(allergens).then(function(_ref3){var data=_ref3.data;success(data);return data;}).catch(function(response){var errors=response.errors;throw fail(errors||response);})};}function _removeAllergens(brandibble,allergens,success,fail){return{type:REMOVE_ALLERGENS,payload:brandibble.allergens.remove(allergens).then(function(_ref4){var data=_ref4.data;success(data);return data;}).catch(function(response){var errors=response.errors;throw fail(errors||response);})};}function _unauthenticateUser(brandibble,success,fail){return{type:UNAUTHENTICATE_USER,payload:brandibble.customers.invalidate().then(success).catch(function(response){var errors=response.errors;throw fail(errors||response);})};}function _resolveUser(payload){return{type:RESOLVE_USER,payload:payload};}function _fetchUser(brandibble,id){return{type:FETCH_USER,payload:brandibble.customers.show(id).then(function(_ref5){var data=_ref5.data;return data;}).catch(function(response){var errors=response.errors;return errors||response;})};}function _resetUserPassword(brandibble,email,success,fail){return{type:RESET_USER_PASSWORD,payload:brandibble.customers.resetPassword(email).then(success).catch(function(response){var errors=response.errors;throw fail(errors||response);})};}function _resetLevelUpPassword(brandibble,email,success,fail){return{type:RESET_LEVELUP_PASSWORD,payload:brandibble.customers.resetLevelUpPassword(email).then(success).catch(function(response){var errors=response.errors;throw fail(errors||response);})};}var _fetchLevelUpQRCode=function _fetchLevelUpQRCode(brandibble,body,success,fail){return{type:FETCH_LEVELUP_QR_CODE,payload:brandibble.customers.currentLevelUpQRCode(body).then(function(_ref6){var data=_ref6.data;success(data.qr_code);return data.qr_code;}).catch(function(response){var errors=response.errors;throw fail(errors||response);})};};var _fetchLevelUpCampaign=function _fetchLevelUpCampaign(brandibble,campaignId,campaignType,success,fail){return{type:FETCH_LEVELUP_CAMPAIGN,payload:brandibble.customers.currentLevelUpCampaign(campaignId,campaignType).then(function(_ref7){var data=_ref7.data;var responseWithMeta={campaign:data.campaign,meta:{campaignId:campaignId,campaignType:campaignType}};success(responseWithMeta);return responseWithMeta;}).catch(function(response){var errors=response.errors;throw fail(errors||response);})};};var _fetchLevelUpLoyalty=function _fetchLevelUpLoyalty(brandibble,success,fail){return{type:FETCH_LEVELUP_LOYALTY,payload:brandibble.customers.currentLevelUpLoyalty().then(function(_ref8){var data=_ref8.data;success(data.loyalty);return data.loyalty;}).catch(function(response){var errors=response.errors;throw fail(errors||response);})};};var _updateLevelUpConnection=function _updateLevelUpConnection(brandibble,customerId,password){return{type:UPDATE_LEVELUP_CONNECTION,payload:brandibble.customers.levelUpUpdate(customerId,password)};};var _connectLevelUp=function _connectLevelUp(brandibble,customerId,email,password){return{type:CONNECT_LEVELUP,payload:brandibble.customers.levelUpConnect(customerId,email,password)};};var _disconnectLevelUp=function _disconnectLevelUp(brandibble,customerId){return{type:DISCONNECT_LEVELUP,payload:brandibble.customers.levelUpDisconnect(customerId).catch(function(response){var errors=response.errors;throw errors||response;})};};var _fetchLevelUpPaymentMethod=function _fetchLevelUpPaymentMethod(brandibble,customerId){return{type:FETCH_LEVELUP_PAYMENT_METHOD,payload:brandibble.customers.levelUpPaymentMethod(customerId).then(function(_ref9){var data=_ref9.data;return data.payment_method;}).catch(function(response){var errors=response.errors;throw errors||response;})};};function validateUser(brandibble,email){var success=arguments.length>2&&arguments[2]!==undefined?arguments[2]:NO_OP;var fail=arguments.length>3&&arguments[3]!==undefined?arguments[3]:NO_OP;return function(dispatch){return dispatch(_validateUser(brandibble,email,success,fail));};}function authenticateUser(brandibble,loginData){var success=arguments.length>2&&arguments[2]!==undefined?arguments[2]:NO_OP;var fail=arguments.length>3&&arguments[3]!==undefined?arguments[3]:NO_OP;return function(dispatch){return dispatch(_authenticateUser(brandibble,loginData,success,fail));};}function addAllergens(brandibble,allergens){var success=arguments.length>2&&arguments[2]!==undefined?arguments[2]:NO_OP;var fail=arguments.length>3&&arguments[3]!==undefined?arguments[3]:NO_OP;return function(dispatch){return dispatch(_addAllergens(brandibble,allergens,success,fail));};}function removeAllergens(brandibble,allergens){var success=arguments.length>2&&arguments[2]!==undefined?arguments[2]:NO_OP;var fail=arguments.length>3&&arguments[3]!==undefined?arguments[3]:NO_OP;return function(dispatch){return dispatch(_removeAllergens(brandibble,allergens,success,fail));};}function unauthenticateUser(brandibble){var success=arguments.length>1&&arguments[1]!==undefined?arguments[1]:NO_OP;var fail=arguments.length>2&&arguments[2]!==undefined?arguments[2]:NO_OP;return function(dispatch){return dispatch(_unauthenticateUser(brandibble,success,fail));};}function fetchUser(brandibble,id){return function(dispatch){return dispatch(_fetchUser(brandibble,id));};}function resetUserPassword(brandibble,email){var success=arguments.length>2&&arguments[2]!==undefined?arguments[2]:NO_OP;var fail=arguments.length>3&&arguments[3]!==undefined?arguments[3]:NO_OP;return function(dispatch){return dispatch(_resetUserPassword(brandibble,email,success,fail));};}function resetLevelUpPassword(brandibble,email){var success=arguments.length>2&&arguments[2]!==undefined?arguments[2]:NO_OP;var fail=arguments.length>3&&arguments[3]!==undefined?arguments[3]:NO_OP;return function(dispatch){return dispatch(_resetLevelUpPassword(brandibble,email,success,fail));};}function resolveUser(brandibble){var adapter=brandibble.adapter,customers=brandibble.customers;var payload=adapter.customerToken?customers.current().then(function(_ref10){var data=_ref10.data;return data;}):Promise.resolve({});return function(dispatch){return dispatch(_resolveUser(payload));};}function createUser(brandibble){var data=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return function(dispatch){var id=(0,_generateUUID2.default)();dispatch(createStart({record:data,id:id}));return brandibble.customers.create(data).then(function(_ref11){var data=_ref11.data;return dispatch(createSuccess(_extends({id:id},data)));}).catch(function(response){var errors=response.errors;return dispatch(createError(errors||response,{id:id,data:data}));});};}function updateUser(brandibble,id){var data=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
return function(dispatch){
dispatch(updateStart({record:data,id:id}));
return brandibble.customers.updateCurrent(data).
then(function(_ref12){var data=_ref12.data;return dispatch(updateSuccess(_extends({id:id},data)));}).
catch(function(response){var
errors=response.errors;
return dispatch(updateError(errors||response,{id:id,data:data}));
});
};
}


var fetchLevelUpQRCode=exports.fetchLevelUpQRCode=function fetchLevelUpQRCode(brandibble){var data=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var success=arguments.length>2&&arguments[2]!==undefined?arguments[2]:NO_OP;var fail=arguments.length>3&&arguments[3]!==undefined?arguments[3]:NO_OP;
return function(dispatch){return dispatch(_fetchLevelUpQRCode(brandibble,data,success,fail));};
};

var fetchLevelUpCampaign=exports.fetchLevelUpCampaign=function fetchLevelUpCampaign(brandibble,campaignId,campaignType){var success=arguments.length>3&&arguments[3]!==undefined?arguments[3]:NO_OP;var fail=arguments.length>4&&arguments[4]!==undefined?arguments[4]:NO_OP;
return function(dispatch){return dispatch(_fetchLevelUpCampaign(brandibble,campaignId,campaignType,success,fail));};
};

var fetchLevelUpLoyalty=exports.fetchLevelUpLoyalty=function fetchLevelUpLoyalty(brandibble){var success=arguments.length>1&&arguments[1]!==undefined?arguments[1]:NO_OP;var fail=arguments.length>2&&arguments[2]!==undefined?arguments[2]:NO_OP;
return function(dispatch){return dispatch(_fetchLevelUpLoyalty(brandibble,success,fail));};
};

var updateLevelUpConnection=exports.updateLevelUpConnection=function updateLevelUpConnection(brandibble,customerId,password){
return function(dispatch){return dispatch(_updateLevelUpConnection(brandibble,customerId,password));};
};

var connectLevelUp=exports.connectLevelUp=function connectLevelUp(brandibble,customerId,email,password){
return function(dispatch){return dispatch(_connectLevelUp(brandibble,customerId,email,password));};
};

var disconnectLevelUp=exports.disconnectLevelUp=function disconnectLevelUp(brandibble,customerId){
return function(dispatch){return dispatch(_disconnectLevelUp(brandibble,customerId));};
};

var fetchLevelUpPaymentMethod=exports.fetchLevelUpPaymentMethod=function fetchLevelUpPaymentMethod(brandibble,customerId){
return function(dispatch){return dispatch(_fetchLevelUpPaymentMethod(brandibble,customerId));};
};