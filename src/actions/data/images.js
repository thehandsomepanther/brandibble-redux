import fireAction from '../../utils/fireAction';
import handleErrors from '../../utils/handleErrors';

export const FETCH_IMAGES = 'FETCH_IMAGES';

export const fetchImages = (brandibble, ids, type)  => (dispatch) => {
  const payload = brandibble.images.show(ids, type).then(({ data }) => data).catch(handleErrors);
  return dispatch(fireAction(FETCH_IMAGES, payload));
};
