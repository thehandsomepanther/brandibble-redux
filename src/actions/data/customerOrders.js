import reduxCrud from 'redux-crud';
const { fetchStart, fetchSuccess, fetchError } = reduxCrud.actionCreatorsFor('customerOrders');

export function fetchCustomerOrders(brandibble, customerId, status={}) {
  return dispatch => {
    dispatch(fetchStart());
    return brandibble.customers.orders(customerId, status)
      .then(({ data }) => dispatch(fetchSuccess(data, customerId)))
      .catch(({ errors }) => { debugger; dispatch(fetchError(errors)) });
  };
}
