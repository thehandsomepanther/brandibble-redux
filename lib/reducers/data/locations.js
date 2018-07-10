Object.defineProperty(exports,"__esModule",{value:true});exports.initialState=undefined;var _seamlessImmutable=require('seamless-immutable');var _seamlessImmutable2=_interopRequireDefault(_seamlessImmutable);
var _order=require('../../actions/session/order');
var _locations=require('../../actions/data/locations');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}





var initialState=exports.initialState=(0,_seamlessImmutable2.default)({
locationsById:(0,_seamlessImmutable2.default)({})});exports.default=


function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];var
payload=action.payload,type=action.type;

switch(type){
case _locations.PUSH_GEOLOCATION:
return state.setIn(['locationsById',payload.location_id],payload);
case _locations.FETCH_LOCATION+'_FULFILLED':
case _order.RESOLVE_ORDER_LOCATION+'_FULFILLED':
if(payload)return state.setIn(['locationsById',payload.location_id],payload);
return state;
case _locations.FETCH_LOCATIONS+'_FULFILLED':
return state.merge({
locationsById:state.locationsById.replace(_seamlessImmutable2.default.asObject(payload,function(location){
return[location.location_id,location];
}))});

default:
return state;}

};