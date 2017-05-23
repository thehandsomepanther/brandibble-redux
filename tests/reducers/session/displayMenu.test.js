/* global describe it */
import { expect } from 'chai';
import reduxCrud from 'redux-crud';
import reducer from 'reducers/session/displayMenu';
import { menusStub } from '../../config/stubs';

const { DISPLAY_MENU_FETCH_SUCCESS } = reduxCrud.actionTypesFor('displayMenu');
const initialState = {};
const payload = menusStub;

describe('reducers/session/displayMenu', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).to.equal(initialState);
  });

  it('handles the DISPLAY_MENU_FETCH_SUCCESS action', () => {
    const reduced = reducer(initialState, {
      type: DISPLAY_MENU_FETCH_SUCCESS,
      records: payload,
    });
    expect(reduced[payload.id]).to.equal(payload);
  });
});
