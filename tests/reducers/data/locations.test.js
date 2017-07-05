/* global describe it */
import { expect } from 'chai';
import {
  FETCH_LOCATIONS,
  FETCH_LOCATION,
} from 'actions/data/locations';
import reducer from 'reducers/data/locations';
import { locationsStub } from '../../config/stubs';

const initialState = [];
const payload = locationsStub;

describe('reducers/data/locations', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).to.equal(initialState);
  });

  it('handles the FETCH_LOCATION_FULFILLED action', () => {
    const reduced = reducer(initialState, {
      type: `${FETCH_LOCATION}_FULFILLED`,
      payload,
    });
    expect(reduced[0].id).to.equal(payload[0].id);
  });

  it('handles the FETCH_LOCATIONS_FULFILLED action', () => {
    const reduced = reducer(initialState, {
      type: `${FETCH_LOCATIONS}_FULFILLED`,
      payload,
    });
    expect(reduced[0].id).to.equal(payload[0].id);
  });
});
