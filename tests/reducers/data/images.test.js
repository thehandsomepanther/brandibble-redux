/* global describe it */
import { expect } from 'chai';
import { FETCH_IMAGES } from 'actions/data/images';
import reducer, { initialState } from 'reducers/data/images';

describe('reducers/data/images', () => {
  it('should return the initial state', () => {
    const reduced = reducer(initialState, {});
    expect(reduced).to.equal(initialState);
  });

  it('handles the IMAGES_FETCH_SUCCESS action', () => {
    const payload = [{ id: 1, name: 'bird flu' }];
    const reduced = reducer(initialState, {
      type: `${FETCH_IMAGES}_FULFILLED`,
      payload,
    });
    expect(reduced.imagesById[payload[0].id]).to.exist;
  });
});
