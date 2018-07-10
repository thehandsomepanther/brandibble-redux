Object.defineProperty(exports,"__esModule",{value:true});exports.currentLocation=exports.orderableLocationsAsArray=exports.locationsAsArray=exports.locationsCollection=undefined;var _reselect=require('reselect');
var _lodash=require('lodash.find');var _lodash2=_interopRequireDefault(_lodash);
var _lodash3=require('lodash.filter');var _lodash4=_interopRequireDefault(_lodash3);
var _get=require('../utils/get');var _get2=_interopRequireDefault(_get);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var locationsCollection=exports.locationsCollection=function locationsCollection(state){return state.data.locations.locationsById;};

var locationsAsArray=exports.locationsAsArray=(0,_reselect.createSelector)(
locationsCollection,
function(locations){return Object.values(locations);});



var orderableLocationsAsArray=exports.orderableLocationsAsArray=(0,_reselect.createSelector)(
locationsCollection,
function(locations){return(0,_lodash4.default)(Object.values(locations),function(location){
return!location.is_closed&&!location.is_coming_soon;
});});


var currentLocation=exports.currentLocation=(0,_reselect.createSelector)(
function(state){return locationsAsArray(state);},
function(state){return(0,_get2.default)(state,'session.order.orderData.location_id');},
function(locationsAsArray,location_id){return(0,_lodash2.default)(locationsAsArray,{location_id:location_id});});