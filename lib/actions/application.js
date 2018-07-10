Object.defineProperty(exports,"__esModule",{value:true});exports.sendSupportTicket=exports.setupBrandibbleRedux=exports.setupBrandibble=exports.SEND_SUPPORT_TICKET=exports.SETUP_BRANDIBBLE_REDUX=exports.SETUP_BRANDIBBLE=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _fireAction=require('../utils/fireAction');var _fireAction2=_interopRequireDefault(_fireAction);
var _handleErrors=require('../utils/handleErrors');var _handleErrors2=_interopRequireDefault(_handleErrors);
var _order=require('./session/order');
var _user=require('./session/user');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var SETUP_BRANDIBBLE=exports.SETUP_BRANDIBBLE='SETUP_BRANDIBBLE';
var SETUP_BRANDIBBLE_REDUX=exports.SETUP_BRANDIBBLE_REDUX='SETUP_BRANDIBBLE_REDUX';
var SEND_SUPPORT_TICKET=exports.SEND_SUPPORT_TICKET='SEND_SUPPORT_TICKET';


var setupBrandibble=exports.setupBrandibble=function setupBrandibble(brandibble){return function(dispatch){
var payload=brandibble.setup().catch(_handleErrors2.default);
return dispatch((0,_fireAction2.default)(SETUP_BRANDIBBLE,payload));
};};


var setupBrandibbleReduxDefaults={
locationId:null,
serviceType:'pickup'};

var setupBrandibbleRedux=exports.setupBrandibbleRedux=function setupBrandibbleRedux(
brandibble){var
data=arguments.length>1&&arguments[1]!==undefined?arguments[1]:setupBrandibbleReduxDefaults;return(
function(dispatch){var _Object$assign=
_extends(
{},
setupBrandibbleReduxDefaults,
data),locationId=_Object$assign.locationId,serviceType=_Object$assign.serviceType;

var payload=dispatch(setupBrandibble(brandibble)).
then(function(_ref){var value=_ref.value;
return Promise.all([
dispatch((0,_user.resolveUser)(value)),
dispatch((0,_order.resolveOrder)(value,locationId,serviceType)),
dispatch((0,_order.resolveOrderLocation)(value))]);

}).
catch(_handleErrors2.default);

return dispatch((0,_fireAction2.default)(SETUP_BRANDIBBLE_REDUX,payload));
});};


var sendSupportTicketDefaults={
body:null,
email:null,
name:null,
subject:null};

var sendSupportTicket=exports.sendSupportTicket=function sendSupportTicket(
brandibble){var
data=arguments.length>1&&arguments[1]!==undefined?arguments[1]:sendSupportTicketDefaults;return(
function(dispatch){
var payload=brandibble.
sendSupportTicket(_extends({},sendSupportTicketDefaults,data)).
catch(_handleErrors2.default);
return dispatch((0,_fireAction2.default)(SEND_SUPPORT_TICKET,payload));
});};