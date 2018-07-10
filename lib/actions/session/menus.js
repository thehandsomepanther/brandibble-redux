Object.defineProperty(exports,"__esModule",{value:true});exports.fetchMenu=exports.FETCH_MENU=undefined;var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);
var _fireAction=require('../../utils/fireAction');var _fireAction2=_interopRequireDefault(_fireAction);
var _handleErrors=require('../../utils/handleErrors');var _handleErrors2=_interopRequireDefault(_handleErrors);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var FETCH_MENU=exports.FETCH_MENU='FETCH_MENU';

var NOW=new Date();

var defaultMenuType={
locationId:null,
requestedAt:NOW,
serviceType:'delivery'};


var fetchMenu=exports.fetchMenu=function fetchMenu(
brandibble){var
menuType=arguments.length>1&&arguments[1]!==undefined?arguments[1]:defaultMenuType;return(
function(dispatch){var
locationId=menuType.locationId,requestedAt=menuType.requestedAt,serviceType=menuType.serviceType;
var requestedAtFormatted=new Date((0,_moment2.default)(requestedAt));

var payload=brandibble.menus.
build(locationId,serviceType,requestedAtFormatted).
then(function(_ref){var data=_ref.data;return data;}).
catch(_handleErrors2.default);

return dispatch((0,_fireAction2.default)(FETCH_MENU,payload));
});};