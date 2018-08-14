import { createSelector } from 'reselect';
import filter from 'lodash.filter';
import get from '../utils/get';

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
  }),
);

export const currentLocation = createSelector(
  locationsCollection,
  state => get(state, 'session.order.orderData.location_id'),
  (locations, location_id) => locations[location_id],
);
