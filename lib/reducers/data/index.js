Object.defineProperty(exports,"__esModule",{value:true});var _redux=require('redux');
var _allergens=require('./allergens');var _allergens2=_interopRequireDefault(_allergens);
var _locations=require('./locations');var _locations2=_interopRequireDefault(_locations);
var _geolocations=require('./geolocations');var _geolocations2=_interopRequireDefault(_geolocations);
var _customerOrders=require('./customerOrders');var _customerOrders2=_interopRequireDefault(_customerOrders);
var _images=require('./images');var _images2=_interopRequireDefault(_images);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

(0,_redux.combineReducers)({
allergens:_allergens2.default,
locations:_locations2.default,
geolocations:_geolocations2.default,
customerOrders:_customerOrders2.default,
images:_images2.default});