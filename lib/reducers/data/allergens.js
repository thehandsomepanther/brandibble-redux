Object.defineProperty(exports,"__esModule",{value:true});exports.initialState=undefined;var _seamlessImmutable=require('seamless-immutable');var _seamlessImmutable2=_interopRequireDefault(_seamlessImmutable);
var _allergens=require('../../actions/data/allergens');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var initialState=exports.initialState=(0,_seamlessImmutable2.default)({
allergensById:(0,_seamlessImmutable2.default)({})});exports.default=


function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
case _allergens.FETCH_ALLERGENS+'_FULFILLED':
return state.merge({
allergensById:state.allergensById.replace(_seamlessImmutable2.default.asObject(action.payload,function(allergen){
return[allergen.id,allergen];
}))});

default:
return state;}

};