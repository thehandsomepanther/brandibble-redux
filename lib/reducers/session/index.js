Object.defineProperty(exports,"__esModule",{value:true});var _redux=require('redux');
var _addresses=require('./addresses');var _addresses2=_interopRequireDefault(_addresses);
var _menus=require('./menus');var _menus2=_interopRequireDefault(_menus);
var _order=require('./order');var _order2=_interopRequireDefault(_order);
var _payments=require('./payments');var _payments2=_interopRequireDefault(_payments);
var _favorites=require('./favorites');var _favorites2=_interopRequireDefault(_favorites);
var _ratings=require('./ratings');var _ratings2=_interopRequireDefault(_ratings);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

(0,_redux.combineReducers)({
addresses:_addresses2.default,
menus:_menus2.default,
order:_order2.default,
payments:_payments2.default,
favorites:_favorites2.default,
ratings:_ratings2.default});