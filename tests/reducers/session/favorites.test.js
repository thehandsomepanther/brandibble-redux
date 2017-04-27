/* global describe it */
import { expect } from 'chai';
import reduxCrud from 'redux-crud';
import reducer from 'reducers/session/payments';

const {
  FAVORITES_FETCH_SUCCESS,
  FAVORITES_DELETE_SUCCESS,
  FAVORITES_CREATE_SUCCESS,
  FAVORITES_UPDATE_SUCCESS,
} = reduxCrud.actionTypesFor('favorites');
const initialState = {};

describe('reducers/session/favorites', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).to.equal(initialState);
  });

  it('handles the FAVORITES_FETCH_SUCCESS action', () => {
    const reduced = reducer(initialState, {
      type: FAVORITES_FETCH_SUCCESS,
      records: [{ favorite_item_id: 1 }],
    });
    expect(reduced);
  });

  it('handles the FAVORITES_DELETE_SUCCESS action', () => {
    const reduced = reducer(initialState, {
      type: FAVORITES_DELETE_SUCCESS,
      record: { favorite_item_id: 1 },
    });
    expect(reduced);
  });

  it('handles the FAVORITES_CREATE_SUCCESS action', () => {
    const reduced = reducer(initialState, {
      type: FAVORITES_CREATE_SUCCESS,
      record: { favorite_item_id: 1 },
    });
    expect(reduced);
  });

  it('handles the FAVORITES_UPDATE_SUCCESS action', () => {
    const reduced = reducer(initialState, {
      type: FAVORITES_UPDATE_SUCCESS,
      record: { favorite_item_id: 1 },
    });
    expect(reduced);
  });
});
