/* global describe it */
import { expect } from 'chai';
import reducer from 'reducers/session/ratings';
import {
  FETCH_RATING,
  CREATE_RATING,
  UPDATE_RATING,
  DELETE_RATING,
} from 'actions/session/ratings';

const initialState = {};

const ratingStub = {
  comments: 'This is a test order rating.',
  rating: 5,
  receipt_id: '647697',
};

describe('reducers/session/ratings', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).to.equal(initialState);
  });

  it('handles the FETCH_RATING_FULFILLED action', () => {
    const reduced = reducer(initialState, {
      type: `${FETCH_RATING}_FULFILLED`,
      payload: [ratingStub],
    });
    expect(reduced).to.deep.equal({
      [ratingStub.receipt_id]: { ...ratingStub },
    });
  });

  it('handles the DELETE_RATING_FULFILLED action', () => {
    const reduced = reducer({
      [ratingStub.receipt_id]: { ...ratingStub },
    }, {
      type: `${DELETE_RATING}_FULFILLED`,
      payload: { receipt_id: ratingStub.receipt_id },
    });
    expect(reduced).to.deep.equal({});
  });

  it('handles the CREATE_RATING_FULFILLED action', () => {
    const reduced = reducer(initialState, {
      type: `${CREATE_RATING}_FULFILLED`,
      payload: ratingStub,
    });
    expect(reduced).to.deep.equal({
      [ratingStub.receipt_id]: { ...ratingStub },
    });
  });

  it('handles the UPDATE_RATING_FULFILLED action', () => {
    const reduced = reducer({ [ratingStub.receipt_id]: { ...ratingStub } }, {
      type: `${UPDATE_RATING}_FULFILLED`,
      payload: {
        ...ratingStub,
        comments: 'update',
      },
    });
    expect(reduced).to.deep.equal({
      [ratingStub.receipt_id]: {
        ...ratingStub,
        comments: 'update',
      },
    });
  });
});
