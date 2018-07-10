Object.defineProperty(exports,"__esModule",{value:true});exports.fetchLocations=exports.fetchLocation=exports.pushGeolocation=exports.PUSH_GEOLOCATION=exports.FETCH_LOCATION=exports.FETCH_LOCATIONS=undefined;var _lodash=require('lodash.filter');var _lodash2=_interopRequireDefault(_lodash);
var _fireAction=require('../../utils/fireAction');var _fireAction2=_interopRequireDefault(_fireAction);
var _handleErrors=require('../../utils/handleErrors');var _handleErrors2=_interopRequireDefault(_handleErrors);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var FETCH_LOCATIONS=exports.FETCH_LOCATIONS='FETCH_LOCATIONS';
var FETCH_LOCATION=exports.FETCH_LOCATION='FETCH_LOCATION';
var PUSH_GEOLOCATION=exports.PUSH_GEOLOCATION='PUSH_GEOLOCATION';

var pushGeolocation=exports.pushGeolocation=function pushGeolocation(location){return function(dispatch){
return dispatch((0,_fireAction2.default)(PUSH_GEOLOCATION,location));
};};

var fetchLocation=exports.fetchLocation=function fetchLocation(brandibble,locationId,lat,lng){
return function(dispatch){
var payload=brandibble.locations.
show(locationId,lat,lng).
then(function(_ref){var data=_ref.data;return data;}).
catch(_handleErrors2.default);
return dispatch((0,_fireAction2.default)(FETCH_LOCATION,payload));
};
};










var fetchLocations=exports.fetchLocations=function fetchLocations(brandibble){var query=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return function(dispatch){
var payload=brandibble.locations.
index(query).
then(function(_ref2){var data=_ref2.data;




var orderableLocations=(0,_lodash2.default)(data,function(location){
return!location.is_closed&&!location.is_coming_soon;
});
return orderableLocations;
}).
catch(_handleErrors2.default);

return dispatch((0,_fireAction2.default)(FETCH_LOCATIONS,payload));
};};