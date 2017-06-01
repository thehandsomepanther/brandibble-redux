import reduxCrud from 'redux-crud';
import filter from 'lodash.filter';

const { fetchStart, fetchSuccess, fetchError } = reduxCrud.actionCreatorsFor('locations', { key: 'location_id' });

export function fetchLocations(brandibble, query = {}) {
  return (dispatch) => {
    dispatch(fetchStart());
    return brandibble.locations.index(query)
      .then(({ data }) => {
        // TODO: This is a temporary fix that should be taken out
        // when JC properly implements the orderable flag.
        // Pls Note: is_closed does not correspond to opening hours,
        // it's related to temporary & permanently closed locations.
        let orderableLocations = filter(data, location => {
          return (!location.is_closed && !location.is_coming_soon);
        });
        return dispatch(fetchSuccess(orderableLocations));
      })
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
