import { expect } from 'chai';
import reduxCrud from 'redux-crud';
import reducer from 'reducers/data/locations';

const { LOCATIONS_FETCH_SUCCESS } = reduxCrud.actionTypesFor('locations');
const initialState = [];

describe('reducers/data/locations', () => {
  it('should return the initial state', () => {
    expect(
      reducer(initialState, {})
    ).to.equal(initialState);
  });

  it('handles the LOCATIONS_FETCH_SUCCESS action', () => {
    let reduced = reducer(initialState, {
      type: LOCATIONS_FETCH_SUCCESS,
      records: [{id:1, street:'69 Weed St'}],
    });
    expect(reduced);
  });
});
