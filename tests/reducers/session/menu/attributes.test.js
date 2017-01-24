import { expect } from 'chai';
import { Map } from 'immutable';
import reducer from 'reducers/session/menu/attributes';
import { MENU_FETCH } from 'actions/session/menu';

const initialState = null;

describe('reducers/session/menu/attributes', () => {
  it('should return the initial state', () => {
    expect(
      reducer(initialState, {})
    ).to.equal(initialState);
  });

  it('handles the MENU_FETCH_SUCCESS action', () => {
    let reduced = reducer(initialState, {
      type: `${MENU_FETCH}_FULFILLED`,
      payload: {attributes: {id:1}},
    });
    expect(reduced).to.be.an.instanceOf(Map);
  });
});
