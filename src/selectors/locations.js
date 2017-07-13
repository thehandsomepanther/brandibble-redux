import { createSelector } from 'reselect';

export const locationsCollection = state => state.data.locations.locationsById;

export const locationsAsArray = createSelector(
  locationsCollection,
  locations => Object.values(locations),
);
