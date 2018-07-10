Object.defineProperty(exports,"__esModule",{value:true});exports.favoritesAsArray=exports.favoritesCollection=undefined;var _reselect=require('reselect');

var favoritesCollection=exports.favoritesCollection=function favoritesCollection(state){return state.session.favorites.favoritesById;};

var favoritesAsArray=exports.favoritesAsArray=(0,_reselect.createSelector)(
favoritesCollection,
function(favorites){return Object.values(favorites);});