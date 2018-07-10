Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=

















levelup;var _seamlessImmutable=require('seamless-immutable');var _seamlessImmutable2=_interopRequireDefault(_seamlessImmutable);var _user=require('../../actions/session/user');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var initialState={loyalty:{},qr_code:null,payment_method:null,campaignsById:(0,_seamlessImmutable2.default)({})};function levelup(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
case _user.FETCH_LEVELUP_LOYALTY+'_FULFILLED':
return _extends({},
state,{
loyalty:action.payload});

case _user.FETCH_LEVELUP_CAMPAIGN+'_FULFILLED':
return _seamlessImmutable2.default.setIn(state,['campaignsById',action.payload.meta.campaignId+'-'+action.payload.meta.campaignType],action.payload.campaign);

case _user.FETCH_LEVELUP_QR_CODE+'_FULFILLED':
return _extends({},
state,{
qr_code:action.payload});

case _user.FETCH_LEVELUP_PAYMENT_METHOD+'_FULFILLED':
return _extends({},
state,{
payment_method:action.payload});

case _user.UNAUTHENTICATE_USER+'_FULFILLED':
case _user.DISCONNECT_LEVELUP+'_FULFILLED':
return initialState;
default:
return state;}

}