/* eslint no-shadow:1 */
import reduxCrud from 'redux-crud';
import generateUUID from 'utils/generateUUID';

const {
  fetchStart,
  fetchSuccess,
  fetchError,
  createStart,
  createSuccess,
  createError,
  deleteStart,
  deleteSuccess,
  deleteError,
} = reduxCrud.actionCreatorsFor('payments', { key: 'customer_card_id' });

export const SET_DEFAULT_PAYMENT = 'SET_DEFAULT_PAYMENT';

const NO_OP = f => f;

export function fetchPayments(brandibble) {
  return (dispatch) => {
    dispatch(fetchStart());
    return brandibble.payments.all()
      .then(({ data }) => dispatch(fetchSuccess(data)))
      .catch(response => {
        const { errors } = response;
        return dispatch(fetchError(errors || response));
      });
  };
}

export function createPayment(brandibble, data = {}) {
  return (dispatch) => {
    const id = generateUUID();
    dispatch(createStart({ record: data, customer_card_id: id }));
    return brandibble.payments.create(data)
      .then(({ data }) => dispatch(createSuccess({ customer_card_id: id, ...data[0] })))
      .catch(response => {
        const { errors } = response;
        return dispatch(createError(errors || response, { customer_card_id: id, data }));
      });
  };
}

function _setDefaultPayment(brandibble, customer_card_id, success = NO_OP, fail = NO_OP) {
  return {
    type: SET_DEFAULT_PAYMENT,
    payload: brandibble.payments.setDefault(customer_card_id)
      .then((data) => {
        success(data);
        return customer_card_id;
      })
      .catch(response => {
        const { errors } = response;
        throw fail(errors || response);
      })
  };
}

export function setDefaultPayment(brandibble, customer_card_id) {
  return dispatch => dispatch(_setDefaultPayment(brandibble, customer_card_id));
}

export function deletePayment(brandibble, id) {
  return (dispatch) => {
    dispatch(deleteStart({ customer_card_id: id }));
    return brandibble.payments.delete(id)
      .then(() => dispatch(deleteSuccess({ customer_card_id: id })))
      .catch(response => {
        const { errors } = response;
        return dispatch(deleteError(errors || response, { customer_card_id: id }));
      });
  };
}
