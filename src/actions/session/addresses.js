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
} = reduxCrud.actionCreatorsFor('addresses');

export function fetchAddresses(brandibble) {
  return dispatch => {
    dispatch(fetchStart());
    return brandibble.addresses.all()
      .then(({data}) => dispatch(fetchSuccess(data)))
      .catch(({errors}) => dispatch(fetchError(errors)));
  };
}

export function createAddress(brandibble, data={}) {
  return dispatch => {
    const id = generateUUID();
    dispatch(createStart({record: data, id}));
    return brandibble.addresses.create(data)
      .then(({data}) => dispatch(createSuccess({id, ...data[0]})))
      .catch(({errors}) => dispatch(createError(errors, {id, data})));
  };
}

export function deleteAddress(brandibble, id) {
  return dispatch => {
    dispatch(deleteStart({id}));
    return brandibble.addresses.delete(id)
      .then(() => dispatch(deleteSuccess({id})))
      .catch(({errors}) => dispatch(fetchError(errors, {id})));
  };
}
