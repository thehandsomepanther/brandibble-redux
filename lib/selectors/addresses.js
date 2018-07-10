Object.defineProperty(exports,"__esModule",{value:true});exports.addressesAsArray=exports.addressesCollection=undefined;var _reselect=require('reselect');

var addressesCollection=exports.addressesCollection=function addressesCollection(state){return state.data.addresses.addressesById;};

var addressesAsArray=exports.addressesAsArray=(0,_reselect.createSelector)(
addressesCollection,
function(addresses){return Object.values(addresses);});