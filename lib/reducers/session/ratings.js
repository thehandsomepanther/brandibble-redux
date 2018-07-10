Object.defineProperty(exports,"__esModule",{value:true});exports.default=







favorites;var _reduxCrud=require('redux-crud');var _reduxCrud2=_interopRequireDefault(_reduxCrud);var _user=require('../../actions/session/user');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var baseReducers=_reduxCrud2.default.Map.reducersFor('ratings',{key:'receipt_id'});var initialState={};function favorites(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
case _user.UNAUTHENTICATE_USER+'_FULFILLED':
return initialState;

default:
return baseReducers(state,action);}

}