Object.defineProperty(exports,"__esModule",{value:true});exports.default=




allergens;var _reduxCrud=require('redux-crud');var _reduxCrud2=_interopRequireDefault(_reduxCrud);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var baseReducers=_reduxCrud2.default.Map.reducersFor('menus');var initialState={};function allergens(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
default:
return baseReducers(state,action);}

}