import { expect } from 'chai';
import { List } from 'immutable';
import reducer from 'reducers/session/menu/categories';
import { MENU_FETCH } from 'actions/session/menu';

const initialState = null;

describe('reducers/session/menu/categories', () => {
  it('should return the initial state', () => {
    expect(
      reducer(initialState, {})
    ).to.equal(initialState);
  });

  it('handles the MENU_CATEGORIES_FETCH action', () => {
    let reduced = reducer(initialState, {
      type: `${MENU_FETCH}_FULFILLED`,
      payload: {categories: [{id:1},{id:2}]},
    });
    expect(reduced).to.be.an.instanceOf(List);
  });
});
