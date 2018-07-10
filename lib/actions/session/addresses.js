Object.defineProperty(exports,"__esModule",{value:true});exports.deleteAddress=exports.createAddress=exports.fetchAddresses=exports.DELETE_ADDRESS=exports.CREATE_ADDRESS=exports.FETCH_ADDRESSES=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _fireAction=require('../../utils/fireAction');var _fireAction2=_interopRequireDefault(_fireAction);
var _handleErrors=require('../../utils/handleErrors');var _handleErrors2=_interopRequireDefault(_handleErrors);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var FETCH_ADDRESSES=exports.FETCH_ADDRESSES='FETCH_ADDRESSES';
var CREATE_ADDRESS=exports.CREATE_ADDRESS='CREATE_ADDRESS';
var DELETE_ADDRESS=exports.DELETE_ADDRESS='DELETE_ADDRESS';

var fetchAddresses=exports.fetchAddresses=function fetchAddresses(brandibble){return function(dispatch){
var payload=brandibble.addresses.
all().
then(function(_ref){var data=_ref.data;return data;}).
catch(_handleErrors2.default);
return dispatch((0,_fireAction2.default)(FETCH_ADDRESSES,payload));
};};

var createAddress=exports.createAddress=function createAddress(brandibble){var address=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return function(dispatch){
var payload=brandibble.addresses.
create(address).
then(function(_ref2){var data=_ref2.data;return _extends({},data[0]);}).
catch(_handleErrors2.default);
return dispatch((0,_fireAction2.default)(CREATE_ADDRESS,payload));
};};

var deleteAddress=exports.deleteAddress=function deleteAddress(brandibble,id){return function(dispatch){
var payload=brandibble.addresses.
delete(id).
then(function(){return id;}).
catch(_handleErrors2.default);
return dispatch((0,_fireAction2.default)(DELETE_ADDRESS,payload));
};};