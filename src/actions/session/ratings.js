/* eslint no-shadow:1 */
import fireAction from '../../utils/fireAction';
import handleErrors from '../../utils/handleErrors';

export const FETCH_RATING = 'FETCH_RATING';
export const CREATE_RATING = 'CREATE_RATING';
export const UPDATE_RATING = 'UPDATE_RATING';
export const DELETE_RATING = 'DELETE_RATING';

export const fetchRating = (brandibble, receipt_id) => (dispatch) => {
  const payload = brandibble.ratings.show(receipt_id)
    .then(({ data }) => [data])
    .catch(handleErrors);

  return dispatch(fireAction(FETCH_RATING, payload));
};

export const createRating = (brandibble, receipt_id, data = {}) => (dispatch) => {
  const payload = brandibble.ratings.create(receipt_id, data)
    .then(({ data }) => data)
    .catch(handleErrors);

  return dispatch(fireAction(CREATE_RATING, payload));
};

export const updateRating = (brandibble, receipt_id, data = {}) => (dispatch) => {
  const payload = brandibble.ratings.update(receipt_id, data)
    .then(({ data }) => data)
    .catch(handleErrors);

  return dispatch(fireAction(UPDATE_RATING, payload));
};

export const deleteRating = (brandibble, receipt_id) => (dispatch) => {
  const payload = brandibble.ratings.delete(receipt_id)
    .then(() => null)
    .catch(handleErrors);

  return dispatch(fireAction(DELETE_RATING, payload));
};
