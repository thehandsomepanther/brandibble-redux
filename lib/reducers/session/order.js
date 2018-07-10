Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=






















































order;var _lodash=require('lodash.map');var _lodash2=_interopRequireDefault(_lodash);var _order=require('../../actions/session/order');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var initialState={ref:null,orderData:null,lineItemsData:null,validated:null,validatedCart:null};function _buildFormattedLineItemsHash(ref){return(0,_lodash2.default)(ref.cart.lineItems,function(li){var uuid=li.uuid,quantity=li.quantity,madeFor=li.madeFor,instructions=li.instructions,product=li.product,operationMaps=li.operationMaps;return{uuid:uuid,quantity:quantity,madeFor:madeFor,instructions:instructions,isValid:li.isValid(),errors:li.errors(),productData:product,optionGroupMappings:operationMaps};});}function order(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
case _order.RESOLVE_ORDER+'_FULFILLED':
case _order.BIND_CUSTOMER_TO_ORDER+'_FULFILLED':
case _order.SET_ORDER_LOCATION_ID+'_FULFILLED':
case _order.SET_ORDER_ADDRESS+'_FULFILLED':
case _order.ADD_LINE_ITEM+'_FULFILLED':
case _order.PUSH_LINE_ITEM+'_FULFILLED':
case _order.SET_LINE_ITEM_QUANTITY+'_FULFILLED':
case _order.SET_LINE_ITEM_MADE_FOR+'_FULFILLED':
case _order.SET_LINE_ITEM_INSTRUCTIONS+'_FULFILLED':
case _order.REMOVE_LINE_ITEM+'_FULFILLED':
case _order.ADD_OPTION_TO_LINE_ITEM+'_FULFILLED':
case _order.SET_PAYMENT_METHOD+'_FULFILLED':
case _order.SET_PROMO_CODE+'_FULFILLED':
case _order.SET_MISC_OPTIONS+'_FULFILLED':
case _order.SET_REQUESTED_AT+'_FULFILLED':
case _order.REMOVE_OPTION_FROM_LINE_ITEM+'_FULFILLED':
case _order.CREATE_NEW_ORDER+'_FULFILLED':{
var ref=action.payload.order;
return _extends({},
state,{
ref:ref,
orderData:_extends({},ref.format(),{wantsFutureOrder:ref.wantsFutureOrder}),
lineItemsData:_buildFormattedLineItemsHash(ref)});

}

case _order.SUBMIT_ORDER+'_FULFILLED':{
return _extends({},
state,{
validated:null,
validatedCart:null});

}

case _order.VALIDATE_CURRENT_ORDER+'_FULFILLED':{
return _extends({},
state,{
validated:action.payload});

}

case _order.VALIDATE_CURRENT_CART+'_FULFILLED':{
return _extends({},
state,{
validatedCart:action.payload});

}

default:
return state;}

}