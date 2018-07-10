Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=
















customerOrders;var _customerOrders=require('../../actions/data/customerOrders');var _order=require('../../actions/session/order');var _user=require('../../actions/session/user');var initialState={all:null,past:null,recentSubmission:null,upcoming:null};function customerOrders(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
case _customerOrders.FETCH_ALL_CUSTOMER_ORDERS+'_FULFILLED':
return _extends({},
state,{
all:action.payload});

case _order.SUBMIT_ORDER+'_FULFILLED':{
return _extends({},
state,{
recentSubmission:action.payload});

}
case _customerOrders.FETCH_PAST_CUSTOMER_ORDERS+'_FULFILLED':
return _extends({},
state,{
past:action.payload});

case _customerOrders.FETCH_UPCOMING_CUSTOMER_ORDERS+'_FULFILLED':
return _extends({},
state,{
upcoming:action.payload});

case _user.UNAUTHENTICATE_USER+'_FULFILLED':
return initialState;
default:
return state;}

}