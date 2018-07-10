Object.defineProperty(exports,"__esModule",{value:true});exports.allergensAsArray=exports.allergensCollection=undefined;var _reselect=require('reselect');

var allergensCollection=exports.allergensCollection=function allergensCollection(state){return state.data.allergens.allergensById;};

var allergensAsArray=exports.allergensAsArray=(0,_reselect.createSelector)(
allergensCollection,
function(allergens){return Object.values(allergens);});