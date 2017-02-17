import reduxCrud from 'redux-crud';
const { fetchStart, fetchSuccess, fetchError } = reduxCrud.actionCreatorsFor('customerOrders', {key: 'orders_id'});

export function fetchCustomerOrders(brandibble, customerId, query={}) {
  return dispatch => {
    dispatch(fetchStart());
    return brandibble.customers.orders(customerId, query)
      .then(({ data }) => dispatch(fetchSuccess(data, customerId)))
      .catch(({ errors }) => dispatch(fetchError(errors)));
  };
}
