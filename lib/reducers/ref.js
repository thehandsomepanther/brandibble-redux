Object.defineProperty(exports,"__esModule",{value:true});exports.default=



ref;var _application=require('../actions/application');var initialState={};function ref(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
case _application.SETUP_BRANDIBBLE+'_FULFILLED':
return action.payload;
default:
return state;}

}