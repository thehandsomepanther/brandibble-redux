import reduxCrud from 'redux-crud';

const { fetchStart, fetchSuccess, fetchError } = reduxCrud.actionCreatorsFor('locations', { key: 'location_id' });

export function fetchLocations(brandibble, query = {}) {
  return (dispatch) => {
    dispatch(fetchStart());
    return brandibble.locations.index(query)
      .then(({ data }) => dispatch(fetchSuccess(data)))
      .catch(response => {
        const { errors } = response;
        return dispatch(fetchError(errors || response));
      });
  };
}

export function fetchLocation(brandibble, locationId, lat, lng) {
  return (dispatch) => {
    dispatch(fetchStart());
    return brandibble.locations.show(locationId, lat, lng)
      .then(({ data }) => dispatch(fetchSuccess(data)))
      .catch(response => {
        const { errors } = response;
        return dispatch(fetchError(errors || response));
      });
  };
}
