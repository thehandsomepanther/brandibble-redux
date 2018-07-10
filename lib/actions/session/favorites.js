Object.defineProperty(exports,"__esModule",{value:true});exports.deleteFavorite=exports.updateFavorite=exports.createFavorite=exports.fetchFavorites=exports.DELETE_FAVORITE=exports.UPDATE_FAVORITE=exports.CREATE_FAVORITE=exports.FETCH_FAVORITES=undefined;var _fireAction=require('../../utils/fireAction');var _fireAction2=_interopRequireDefault(_fireAction);
var _handleErrors=require('../../utils/handleErrors');var _handleErrors2=_interopRequireDefault(_handleErrors);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var FETCH_FAVORITES=exports.FETCH_FAVORITES='FETCH_FAVORITES';
var CREATE_FAVORITE=exports.CREATE_FAVORITE='CREATE_FAVORITE';
var UPDATE_FAVORITE=exports.UPDATE_FAVORITE='UPDATE_FAVORITE';
var DELETE_FAVORITE=exports.DELETE_FAVORITE='DELETE_FAVORITE';

var fetchFavorites=exports.fetchFavorites=function fetchFavorites(brandibble){return function(dispatch){
var payload=brandibble.favorites.
all().
then(function(_ref){var data=_ref.data;return data;}).
catch(_handleErrors2.default);
return dispatch((0,_fireAction2.default)(FETCH_FAVORITES,payload));
};};

var createFavorite=exports.createFavorite=function createFavorite(brandibble){var favorite=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return function(dispatch){var
lineItem=favorite.lineItem,name=favorite.name;
var payload=brandibble.favorites.
create(name,lineItem).
then(function(_ref2){var data=_ref2.data;return data;}).
catch(_handleErrors2.default);
return dispatch((0,_fireAction2.default)(CREATE_FAVORITE,payload));
};};

var updateFavorite=exports.updateFavorite=function updateFavorite(brandibble){var favorite=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return function(dispatch){var
id=favorite.id,name=favorite.name,lineItem=favorite.lineItem;
var payload=brandibble.favorites.
update(id,name,lineItem).
then(function(_ref3){var data=_ref3.data;return data;}).
catch(_handleErrors2.default);
return dispatch((0,_fireAction2.default)(UPDATE_FAVORITE,payload));
};};

var deleteFavorite=exports.deleteFavorite=function deleteFavorite(brandibble,id){return function(dispatch){
var payload=brandibble.favorites.
delete(id).
then(function(){return id;}).
catch(_handleErrors2.default);
return dispatch((0,_fireAction2.default)(DELETE_FAVORITE,payload));
};};