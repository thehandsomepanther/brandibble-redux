/* eslint no-shadow:1 */
import reduxCrud from 'redux-crud';
import generateUUID from 'utils/generateUUID';

const {
  createStart,
  createSuccess,
  createError,
  deleteStart,
  deleteSuccess,
  deleteError,
  fetchStart,
  fetchSuccess,
  fetchError,
} = reduxCrud.actionCreatorsFor('addresses', { key: 'customer_address_id' });

export function fetchAddresses(brandibble) {
  return (dispatch) => {
    dispatch(fetchStart());
    return brandibble.addresses.all()
      .then(({ data }) => dispatch(fetchSuccess(data)))
      .catch(response => {
        const { errors } = response;
        return dispatch(fetchError(errors || response));
      });
  };
}

export function createAddress(brandibble, data = {}) {
  return (dispatch) => {
    const id = generateUUID();
    dispatch(createStart({ record: data, customer_address_id: id }));
    return brandibble.addresses.create(data)
      .then(({ data }) => dispatch(createSuccess({ customer_address_id: id, ...data[0] })))
      .catch(response  => {
        const { errors } = response;
        return dispatch(createError(errors || response, { customer_address_id: id, data }));
      });
  };
}

export function deleteAddress(brandibble, id) {
  return (dispatch) => {
    dispatch(deleteStart({ customer_address_id: id }));
    return brandibble.addresses.delete(id)
      .then(() => dispatch(deleteSuccess({ customer_address_id: id })))
      .catch(response => {
        const { errors } = response;
        return dispatch(deleteError(errors || response, { customer_address_id: id }))
      });
  };
}
