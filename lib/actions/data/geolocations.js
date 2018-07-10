Object.defineProperty(exports,"__esModule",{value:true});exports.clearGeolocations=exports.fetchGeolocations=exports.CLEAR_GEOLOCATIONS=exports.FETCH_GEOLOCATIONS=undefined;var _fireAction=require('../../utils/fireAction');var _fireAction2=_interopRequireDefault(_fireAction);
var _handleErrors=require('../../utils/handleErrors');var _handleErrors2=_interopRequireDefault(_handleErrors);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var FETCH_GEOLOCATIONS=exports.FETCH_GEOLOCATIONS='FETCH_GEOLOCATIONS';
var CLEAR_GEOLOCATIONS=exports.CLEAR_GEOLOCATIONS='CLEAR_GEOLOCATIONS';

var fetchGeolocations=exports.fetchGeolocations=function fetchGeolocations(brandibble){var query=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return function(dispatch){
var payload=brandibble.locations.
index(query).
then(function(_ref){var data=_ref.data;return data;}).
catch(_handleErrors2.default);
return dispatch((0,_fireAction2.default)(FETCH_GEOLOCATIONS,payload));
};};

var clearGeolocations=exports.clearGeolocations=function clearGeolocations(){return function(dispatch){
return dispatch((0,_fireAction2.default)(CLEAR_GEOLOCATIONS,null));
};};