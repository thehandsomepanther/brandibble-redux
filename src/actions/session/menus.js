import moment from 'moment';
import reduxCrud from 'redux-crud';
import generateUUID from 'utils/generateUUID';

const { fetchStart, fetchSuccess, fetchError } = reduxCrud.actionCreatorsFor('menus');

const NO_OP = f => f;
const NOW = new Date();

export function fetchMenu(brandibble, locationId, serviceType = 'delivery', requestedAt = NOW, success = NO_OP, fail = NO_OP) {
  const requestedAtFormatted = new Date(moment(requestedAt));
  return (dispatch) => {
    dispatch(fetchStart());
    return brandibble.menus.build(locationId, serviceType, requestedAtFormatted)
      .then(({ data }) => {
        const menuData = data;
        menuData.id = generateUUID();
        dispatch(fetchSuccess(menuData));
        return success(menuData);
      })
      .catch((response) => {
        const { errors } = response;
        dispatch(fetchError(errors || response));
        throw fail(errors || response);
      });
  };
}

export function fetchDisplayMenu(brandibble, locationId, serviceType = 'delivery', requestedAt = NOW, success = NO_OP, fail = NO_OP) {
  const requestedAtFormatted = new Date(moment(requestedAt));
  return (dispatch) => {
    dispatch(fetchStart());
    return brandibble.menus.display(locationId, serviceType, requestedAtFormatted)
      .then(({ data }) => {
        const menuData = data;
        menuData.id = generateUUID();
        dispatch(fetchSuccess(menuData));
        return success(menuData);
      })
      .catch((response) => {
        const { errors } = response;
        dispatch(fetchError(errors || response));
        throw fail(errors || response);
      });
  };
}
