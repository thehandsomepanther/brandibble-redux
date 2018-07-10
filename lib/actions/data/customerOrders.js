Object.defineProperty(exports,"__esModule",{value:true});exports.

























fetchAllCustomerOrders=fetchAllCustomerOrders;exports.



fetchPastCustomerOrders=fetchPastCustomerOrders;exports.



fetchUpcomingCustomerOrders=fetchUpcomingCustomerOrders;var FETCH_ALL_CUSTOMER_ORDERS=exports.FETCH_ALL_CUSTOMER_ORDERS='FETCH_ALL_CUSTOMER_ORDERS';var FETCH_PAST_CUSTOMER_ORDERS=exports.FETCH_PAST_CUSTOMER_ORDERS='FETCH_PAST_CUSTOMER_ORDERS';var FETCH_UPCOMING_CUSTOMER_ORDERS=exports.FETCH_UPCOMING_CUSTOMER_ORDERS='FETCH_UPCOMING_CUSTOMER_ORDERS';function _fetchAllCustomerOrders(brandibble,customerId){var include_item_details=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;return{type:FETCH_ALL_CUSTOMER_ORDERS,payload:brandibble.customers.orders(customerId,{status:'both',include_item_details:include_item_details})};}function _fetchPastCustomerOrders(brandibble,customerId){var limit=arguments.length>2&&arguments[2]!==undefined?arguments[2]:10;var include_item_details=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;return{type:FETCH_PAST_CUSTOMER_ORDERS,payload:brandibble.customers.orders(customerId,{status:'past',limit:limit,include_item_details:include_item_details})};}function _fetchUpcomingCustomerOrders(brandibble,customerId){var limit=arguments.length>2&&arguments[2]!==undefined?arguments[2]:10;var include_item_details=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;return{type:FETCH_UPCOMING_CUSTOMER_ORDERS,payload:brandibble.customers.orders(customerId,{status:'upcoming',limit:limit,include_item_details:include_item_details})};}function fetchAllCustomerOrders(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return function(dispatch){return dispatch(_fetchAllCustomerOrders.apply(undefined,args));};}function fetchPastCustomerOrders(){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}return function(dispatch){return dispatch(_fetchPastCustomerOrders.apply(undefined,args));};}function fetchUpcomingCustomerOrders(){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}
return function(dispatch){return dispatch(_fetchUpcomingCustomerOrders.apply(undefined,args));};
}