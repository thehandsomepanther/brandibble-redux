Object.defineProperty(exports,"__esModule",{value:true});exports.default=



validations;var _user=require('../../actions/session/user');var initialState={};function validations(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
case _user.VALIDATE_USER+'_FULFILLED':
return action.payload;
case _user.UNAUTHENTICATE_USER+'_FULFILLED':
return initialState;
default:
return state;}

}