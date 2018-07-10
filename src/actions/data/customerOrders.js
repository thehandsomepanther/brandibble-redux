export const FETCH_ALL_CUSTOMER_ORDERS = 'FETCH_ALL_CUSTOMER_ORDERS';
export const FETCH_PAST_CUSTOMER_ORDERS = 'FETCH_PAST_CUSTOMER_ORDERS';
export const FETCH_UPCOMING_CUSTOMER_ORDERS = 'FETCH_UPCOMING_CUSTOMER_ORDERS';

function _fetchAllCustomerOrders(brandibble, customerId, include_item_details = false) {
  return {
    type: FETCH_ALL_CUSTOMER_ORDERS,
    payload: brandibble.customers.orders(customerId, { status: 'both', include_item_details }),
  };
}

function _fetchPastCustomerOrders(brandibble, customerId, limit = 10, include_item_details = false) {
  return {
    type: FETCH_PAST_CUSTOMER_ORDERS,
    payload: brandibble.customers.orders(customerId, { status: 'past', limit, include_item_details }),
  };
}

function _fetchUpcomingCustomerOrders(brandibble, customerId, limit = 10, include_item_details = false) {
  return {
    type: FETCH_UPCOMING_CUSTOMER_ORDERS,
    payload: brandibble.customers.orders(customerId, { status: 'upcoming', limit, include_item_details }),
  };
}

// Public
export function fetchAllCustomerOrders(...args) {
  return dispatch => dispatch(_fetchAllCustomerOrders(...args));
}

export function fetchPastCustomerOrders(...args) {
  return dispatch => dispatch(_fetchPastCustomerOrders(...args));
}

export function fetchUpcomingCustomerOrders(...args) {
  return dispatch => dispatch(_fetchUpcomingCustomerOrders(...args));
}
