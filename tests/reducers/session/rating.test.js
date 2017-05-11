/* global describe it */
import { expect } from 'chai';
import reduxCrud from 'redux-crud';
import reducer from 'reducers/session/ratings';

const {
  RATINGS_FETCH_SUCCESS,
  RATINGS_DELETE_SUCCESS,
  RATINGS_CREATE_SUCCESS,
  RATINGS_UPDATE_SUCCESS,
} = reduxCrud.actionTypesFor('ratings');
const initialState = {};

describe('reducers/session/ratings', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).to.equal(initialState);
  });

  it('handles the RATINGS_FETCH_SUCCESS action', () => {
    const reduced = reducer(initialState, {
      type: RATINGS_FETCH_SUCCESS,
      records: [{ receipt_id: 1 }],
    });
    expect(reduced);
  });

  it('handles the RATINGS_DELETE_SUCCESS action', () => {
    const reduced = reducer(initialState, {
      type: RATINGS_DELETE_SUCCESS,
      record: { receipt_id: 1 },
    });
    expect(reduced);
  });

  it('handles the RATINGS_CREATE_SUCCESS action', () => {
    const reduced = reducer(initialState, {
      type: RATINGS_CREATE_SUCCESS,
      record: { receipt_id: 1 },
    });
    expect(reduced);
  });

  it('handles the RATINGS_UPDATE_SUCCESS action', () => {
    const reduced = reducer(initialState, {
      type: RATINGS_UPDATE_SUCCESS,
      record: { receipt_id: 1 },
    });
    expect(reduced);
  });
});
