/* global describe it */
import { expect } from 'chai';
import { FETCH_MENU } from 'actions/session/menu';
import reducer, { initialState } from 'reducers/session/menu';
import { menusStub } from '../../config/stubs';

const payload = menusStub;

describe('reducers/session/menus', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).to.equal(initialState);
  });

  it(`handles the ${FETCH_MENU}_FULFILLED action`, () => {
    const reduced = reducer(initialState, {
      type: `${FETCH_MENU}_FULFILLED`,
      payload,
    });
    expect(reduced[payload.id]).to.equal(payload);
  });
});
