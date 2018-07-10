Object.defineProperty(exports,"__esModule",{value:true});exports.initialState=undefined;var _seamlessImmutable=require('seamless-immutable');var _seamlessImmutable2=_interopRequireDefault(_seamlessImmutable);
var _favorites=require('../../actions/session/favorites');





var _user=require('../../actions/session/user');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var initialState=exports.initialState=(0,_seamlessImmutable2.default)({
favoritesById:(0,_seamlessImmutable2.default)({})});exports.default=


function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];var
payload=action.payload,type=action.type;

switch(type){
case _favorites.FETCH_FAVORITES+'_FULFILLED':
return state.merge({
favoritesById:state.favoritesById.replace(_seamlessImmutable2.default.asObject(payload,function(favorite){
return[favorite.favorite_item_id,favorite];
}))});

case _favorites.DELETE_FAVORITE+'_FULFILLED':
return state.merge({
favoritesById:state.favoritesById.without(function(v,k){
return k===''+payload&&v.favorite_item_id===payload;
})});

case _favorites.UPDATE_FAVORITE+'_FULFILLED':
case _favorites.CREATE_FAVORITE+'_FULFILLED':
return state.setIn(['favoritesById',payload.favorite_item_id],payload);

case _user.UNAUTHENTICATE_USER+'_FULFILLED':
return initialState;
default:
return state;}

};