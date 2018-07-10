/* eslint no-shadow:1 */
import reduxCrud from 'redux-crud';

const {
  fetchStart,
  fetchSuccess,
  fetchError,
  createStart,
  createSuccess,
  createError,
  updateStart,
  updateSuccess,
  updateError,
  deleteStart,
  deleteSuccess,
  deleteError,
} = reduxCrud.actionCreatorsFor('ratings', { key: 'receipt_id' });

export const fetchRating = (brandibble, receipt_id) => {
  return (dispatch) => {
    dispatch(fetchStart({ receipt_id }));
    return brandibble.ratings
      .show(receipt_id)
      .then(({ data }) => dispatch(fetchSuccess([data], { receipt_id })))
      .catch(({ errors }) => dispatch(fetchError(errors, { receipt_id })));
  };
};

export const createRating = (brandibble, receipt_id, data = {}) => {
  return (dispatch) => {
    dispatch(createStart({ receipt_id, record: data }));
    return brandibble.ratings
      .create(receipt_id, data)
      .then(({ data }) => dispatch(createSuccess(data)))
      .catch(({ errors }) => dispatch(createError(errors, { receipt_id })));
  };
};

export const updateRating = (brandibble, receipt_id, data = {}) => {
  return (dispatch) => {
    dispatch(updateStart({ receipt_id, record: data }));
    return brandibble.ratings
      .update(receipt_id, data)
      .then(({ data }) => dispatch(updateSuccess(data)))
      .catch(({ errors }) => dispatch(updateError(errors, { receipt_id })));
  };
};

export const deleteRating = (brandibble, receipt_id) => {
  return (dispatch) => {
    dispatch(deleteStart({ receipt_id }));
    return brandibble.ratings
      .delete(receipt_id)
      .then(() => dispatch(deleteSuccess({ receipt_id })))
      .catch(({ errors }) => dispatch(deleteError(errors, { receipt_id })));
  };
};
