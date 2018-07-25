/* global describe it */
import { expect } from 'chai';
import { PUSH_GEOLOCATION, FETCH_LOCATIONS, FETCH_LOCATION, FETCH_WAIT_TIMES } from 'actions/data/locations';
import { RESOLVE_ORDER_LOCATION } from 'actions/session/order';
import reducer, { initialState } from 'reducers/data/locations';
import { locationsStub, waitTimesStub } from '../../config/stubs';

describe('reducers/data/locations', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).to.equal(initialState);
  });

  it('handles the PUSH_GEOLOCATION action', () => {
    const reduced = reducer(initialState, {
      type: PUSH_GEOLOCATION,
      payload: locationsStub[0],
    });
    expect(reduced.locationsById[locationsStub[0].location_id]).to.exist;
  });

  it('handles the FETCH_LOCATION_FULFILLED action', () => {
    const reduced = reducer(initialState, {
      type: `${FETCH_LOCATION}_FULFILLED`,
      payload: locationsStub[0],
    });
    expect(reduced.locationsById[locationsStub[0].location_id]).to.exist;
  });

  it('handles the RESOLVE_LOCATION_FULFILLED action', () => {
    const reduced = reducer(initialState, {
      type: `${RESOLVE_ORDER_LOCATION}_FULFILLED`,
      payload: locationsStub[0],
    });
    expect(reduced.locationsById[locationsStub[0].location_id]).to.exist;
  });

  it('handles the RESOLVE_LOCATION_FULFILLED action as null payload', () => {
    const reduced = reducer(initialState, {
      type: `${RESOLVE_ORDER_LOCATION}_FULFILLED`,
      payload: null,
    });
    expect(reduced).to.deep.equal(initialState);
  });

  it('handles the FETCH_WAIT_TIMES_FULFULLED action', () => {
    const reduced = reducer(initialState, {
      type: `${FETCH_WAIT_TIMES}_FULFILLED`,
      payload: { locationId: locationsStub[0].location_id, data: waitTimesStub },
    });

    expect(reduced.locationsById[locationsStub[0].location_id].waitTimes).to.exist;
    expect(reduced.locationsById[locationsStub[0].location_id].waitTimes).to.equal(waitTimesStub);
  });

  it('handles the FETCH_LOCATIONS_FULFILLED action', () => {
    const reduced = reducer(initialState, {
      type: `${FETCH_LOCATIONS}_FULFILLED`,
      payload: locationsStub,
    });
    expect(reduced.locationsById[locationsStub[0].location_id]).to.exist;
  });
});
