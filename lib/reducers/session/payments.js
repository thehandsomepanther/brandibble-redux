Object.defineProperty(exports,"__esModule",{value:true});exports.initialState=undefined;var _seamlessImmutable=require('seamless-immutable');var _seamlessImmutable2=_interopRequireDefault(_seamlessImmutable);

var _payments=require('../../actions/session/payments');






var _user=require('../../actions/session/user');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var initialState=exports.initialState=(0,_seamlessImmutable2.default)({
paymentsById:(0,_seamlessImmutable2.default)({})});exports.default=


function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];var
payload=action.payload,type=action.type;

switch(type){





case _payments.CREATE_PAYMENT+'_FULFILLED':
case _payments.FETCH_PAYMENTS+'_FULFILLED':
return state.merge({
paymentsById:state.paymentsById.replace(
_seamlessImmutable2.default.asObject(payload,function(payment){
return[payment.customer_card_id,payment];
}))});



case _payments.DELETE_PAYMENT+'_FULFILLED':
return state.merge({
paymentsById:state.paymentsById.without(function(v,k){
return k===''+payload&&v.customer_card_id===payload;
})});


case _payments.SET_DEFAULT_PAYMENT+'_FULFILLED':
var newState=state;

var currentDefault=Object.values(state.paymentsById.asMutable()).find(
function(p){return p.is_default;});

if(currentDefault){
newState=state.merge({
paymentsById:newState.paymentsById.setIn(
[currentDefault.customer_card_id,'is_default'],
false)});


}

var newDefault=Object.values(state.paymentsById.asMutable()).find(
function(p){return p.customer_card_id===action.payload;});

if(newDefault){
newState=state.merge({
paymentsById:newState.paymentsById.setIn(
[newDefault.customer_card_id,'is_default'],
true)});


}

return newState;

case _user.UNAUTHENTICATE_USER+'_FULFILLED':
return initialState;
default:
return state;}

};