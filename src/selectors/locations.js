import { createSelector } from 'reselect';
import find from 'lodash.find';
import get from '../utils/get';
import filter from 'lodash.filter';

export const locationsCollection = state => state.data.locations.locationsById;

export const locationsAsArray = createSelector(
  locationsCollection,
  locations => Object.values(locations),
);

/* Note: "Closed" does not mean currently closed. It means permanently closed, etc */
export const orderableLocationsAsArray = createSelector(
  locationsCollection,
  locations => filter(Object.values(locations), location => {
    return (!location.is_closed && !location.is_coming_soon);
  })
);

export const currentLocation = createSelector(
  state => locationsAsArray(state),
  state => get(state, 'session.order.orderData.location_id'),
  (locationsAsArray, location_id) => find(locationsAsArray, { location_id })
);
