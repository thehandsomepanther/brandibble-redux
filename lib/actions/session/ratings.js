Object.defineProperty(exports,"__esModule",{value:true});exports.deleteRating=exports.updateRating=exports.createRating=exports.fetchRating=undefined;
var _reduxCrud=require('redux-crud');var _reduxCrud2=_interopRequireDefault(_reduxCrud);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _reduxCrud$actionCrea=














_reduxCrud2.default.actionCreatorsFor('ratings',{key:'receipt_id'}),fetchStart=_reduxCrud$actionCrea.fetchStart,fetchSuccess=_reduxCrud$actionCrea.fetchSuccess,fetchError=_reduxCrud$actionCrea.fetchError,createStart=_reduxCrud$actionCrea.createStart,createSuccess=_reduxCrud$actionCrea.createSuccess,createError=_reduxCrud$actionCrea.createError,updateStart=_reduxCrud$actionCrea.updateStart,updateSuccess=_reduxCrud$actionCrea.updateSuccess,updateError=_reduxCrud$actionCrea.updateError,deleteStart=_reduxCrud$actionCrea.deleteStart,deleteSuccess=_reduxCrud$actionCrea.deleteSuccess,deleteError=_reduxCrud$actionCrea.deleteError;

var fetchRating=exports.fetchRating=function fetchRating(brandibble,receipt_id){
return function(dispatch){
dispatch(fetchStart({receipt_id:receipt_id}));
return brandibble.ratings.
show(receipt_id).
then(function(_ref){var data=_ref.data;return dispatch(fetchSuccess([data],{receipt_id:receipt_id}));}).
catch(function(_ref2){var errors=_ref2.errors;return dispatch(fetchError(errors,{receipt_id:receipt_id}));});
};
};

var createRating=exports.createRating=function createRating(brandibble,receipt_id){var data=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
return function(dispatch){
dispatch(createStart({receipt_id:receipt_id,record:data}));
return brandibble.ratings.
create(receipt_id,data).
then(function(_ref3){var data=_ref3.data;return dispatch(createSuccess(data));}).
catch(function(_ref4){var errors=_ref4.errors;return dispatch(createError(errors,{receipt_id:receipt_id}));});
};
};

var updateRating=exports.updateRating=function updateRating(brandibble,receipt_id){var data=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
return function(dispatch){
dispatch(updateStart({receipt_id:receipt_id,record:data}));
return brandibble.ratings.
update(receipt_id,data).
then(function(_ref5){var data=_ref5.data;return dispatch(updateSuccess(data));}).
catch(function(_ref6){var errors=_ref6.errors;return dispatch(updateError(errors,{receipt_id:receipt_id}));});
};
};

var deleteRating=exports.deleteRating=function deleteRating(brandibble,receipt_id){
return function(dispatch){
dispatch(deleteStart({receipt_id:receipt_id}));
return brandibble.ratings.
delete(receipt_id).
then(function(){return dispatch(deleteSuccess({receipt_id:receipt_id}));}).
catch(function(_ref7){var errors=_ref7.errors;return dispatch(deleteError(errors,{receipt_id:receipt_id}));});
};
};