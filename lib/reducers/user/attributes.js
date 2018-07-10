Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=
























attributes;var _reduxCrud=require('redux-crud');var _reduxCrud2=_interopRequireDefault(_reduxCrud);var _user=require('../../actions/session/user');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _reduxCrud$actionType=_reduxCrud2.default.actionTypesFor('user'),USER_CREATE_SUCCESS=_reduxCrud$actionType.USER_CREATE_SUCCESS,USER_UPDATE_SUCCESS=_reduxCrud$actionType.USER_UPDATE_SUCCESS;var initialState={};function removeAllergens(removeArr,currentArr){var newArr=[];for(var i=0;i<currentArr.length;i++){if(!removeArr.includes(currentArr[i]))newArr.push(currentArr[i]);}return newArr;}function attributes(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
case _user.RESOLVE_USER+'_FULFILLED':
case _user.AUTHENTICATE_USER+'_FULFILLED':
case _user.FETCH_USER+'_FULFILLED':
return action.payload;

case _user.ADD_ALLERGENS+'_FULFILLED':
return _extends({},
state,{
allergens:state.allergens.concat(action.payload.added)});


case _user.REMOVE_ALLERGENS+'_FULFILLED':
return _extends({},
state,{
allergens:removeAllergens(action.payload.removed,state.allergens)});


case USER_CREATE_SUCCESS:
case USER_UPDATE_SUCCESS:
return action.record;
case _user.UNAUTHENTICATE_USER+'_FULFILLED':
return initialState;
default:
return state;}

}