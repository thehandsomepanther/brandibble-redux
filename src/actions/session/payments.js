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
} = reduxCrud.actionCreatorsFor('payments');

export function fetchPayments(brandibble) {
  return dispatch => {
    dispatch(fetchStart());
    return brandibble.payments.all()
      .then(({data}) => dispatch(fetchSuccess(data)))
      .catch(({errors}) => dispatch(fetchError(errors)));
  };
}

export function createPayment(brandibble, data={}) {
  return dispatch => {
    const id = generateUUID();
    dispatch(createStart({record: data, id}));
    return brandibble.payments.create(data)
      .then(({data}) => dispatch(createSuccess({id, ...data[0]})))
      .catch(({errors}) => dispatch(createError(errors, {id, data})));
  };
}

export function deletePayment(brandibble, id) {
  return dispatch => {
    dispatch(deleteStart({id}));
    return brandibble.payments.delete(id)
      .then(() => dispatch(deleteSuccess({id})))
      .catch(({errors}) => dispatch(fetchError(errors, {id})));
  };
}

// TODO - set default payment action
