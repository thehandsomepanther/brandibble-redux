Object.defineProperty(exports,"__esModule",{value:true});exports.initialState=undefined;exports.default=











addresses;var _seamlessImmutable=require('seamless-immutable');var _seamlessImmutable2=_interopRequireDefault(_seamlessImmutable);var _addresses=require('../../actions/session/addresses');var _user=require('../../actions/session/user');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var initialState=exports.initialState=(0,_seamlessImmutable2.default)({addressesById:(0,_seamlessImmutable2.default)({})});function addresses(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];var
payload=action.payload,type=action.type;

switch(type){
case _addresses.FETCH_ADDRESSES+'_FULFILLED':
return state.merge({
addressesById:state.addressesById.replace(_seamlessImmutable2.default.asObject(payload,function(address){
return[address.customer_address_id,address];
}))});

case _addresses.DELETE_ADDRESS+'_FULFILLED':
return state.merge({
addressesById:state.addressesById.without(payload)});

case _addresses.CREATE_ADDRESS+'_FULFILLED':
return state.setIn(['addressesById',payload.customer_address_id],payload);
case _user.UNAUTHENTICATE_USER+'_FULFILLED':
return initialState;
default:
return state;}

}