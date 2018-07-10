Object.defineProperty(exports,"__esModule",{value:true});exports.deletePayment=exports.setDefaultPayment=exports.createPayment=exports.fetchPayments=exports.DELETE_PAYMENT=exports.SET_DEFAULT_PAYMENT=exports.CREATE_PAYMENT=exports.FETCH_PAYMENTS=undefined;var _fireAction=require('../../utils/fireAction');var _fireAction2=_interopRequireDefault(_fireAction);
var _handleErrors=require('../../utils/handleErrors');var _handleErrors2=_interopRequireDefault(_handleErrors);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var FETCH_PAYMENTS=exports.FETCH_PAYMENTS='FETCH_PAYMENTS';
var CREATE_PAYMENT=exports.CREATE_PAYMENT='CREATE_PAYMENT';
var SET_DEFAULT_PAYMENT=exports.SET_DEFAULT_PAYMENT='SET_DEFAULT_PAYMENT';
var DELETE_PAYMENT=exports.DELETE_PAYMENT='DELETE_PAYMENT';

var fetchPayments=exports.fetchPayments=function fetchPayments(brandibble){return function(dispatch){
var payload=brandibble.payments.all().then(function(_ref){var data=_ref.data;return data;}).catch(_handleErrors2.default);
return dispatch((0,_fireAction2.default)(FETCH_PAYMENTS,payload));
};};

var createPayment=exports.createPayment=function createPayment(brandibble){var payment=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return function(dispatch){
var payload=brandibble.payments.create(payment).then(function(_ref2){var data=_ref2.data;return data;}).catch(_handleErrors2.default);
return dispatch((0,_fireAction2.default)(CREATE_PAYMENT,payload));
};};


var setDefaultPayment=exports.setDefaultPayment=function setDefaultPayment(brandibble,customer_card_id){return function(dispatch){
var payload=brandibble.payments.setDefault(customer_card_id).then(function(){return customer_card_id;}).catch(_handleErrors2.default);
return dispatch((0,_fireAction2.default)(SET_DEFAULT_PAYMENT,payload));
};};

var deletePayment=exports.deletePayment=function deletePayment(brandibble,id){return function(dispatch){
var payload=brandibble.payments.delete(id).then(function(){return id;}).catch(_handleErrors2.default);
return dispatch((0,_fireAction2.default)(DELETE_PAYMENT,payload));
};};