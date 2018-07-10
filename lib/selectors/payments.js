Object.defineProperty(exports,"__esModule",{value:true});exports.paymentsAsArray=exports.paymentsCollection=undefined;var _reselect=require('reselect');

var paymentsCollection=exports.paymentsCollection=function paymentsCollection(state){return state.session.payments.paymentsById;};

var paymentsAsArray=exports.paymentsAsArray=(0,_reselect.createSelector)(
paymentsCollection,
function(payments){return Object.values(payments);});