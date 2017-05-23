/* global describe afterEach before beforeEach it */
/* eslint one-var-declaration-per-line:1, one-var:1 */
import { expect } from 'chai';
import find from 'lodash.find';
import configureStore from 'redux-mock-store';
import reduxMiddleware from 'config/middleware';
import { fetchDisplayMenu } from 'actions/session/displayMenu';
import { brandibble, SAMPLE_MENU_LOCATION_ID } from '../../config/stubs';

const mockStore = configureStore(reduxMiddleware);
const NOW = new Date();
const success = () => 'success';
const fail = () => 'fail';

describe('actions/session/displayMenu', () => {
  describe('fetchDisplayMenu', () => {
    let store, actionsCalled, action;

    describe('calls actions', () => {
      before(() => {
        store = mockStore();
        return fetchDisplayMenu(brandibble, SAMPLE_MENU_LOCATION_ID)(store.dispatch).then(() => {
          actionsCalled = store.getActions();
        });
      });

      it('should call at least 2 actions', () => {
        expect(actionsCalled).to.have.length.of.at.least(2);
      });

      it('should have DISPLAY_MENU_FETCH_START action', () => {
        action = find(actionsCalled, { type: 'DISPLAY_MENU_FETCH_START' });
        expect(action).to.exist;
      });

      it('should have DISPLAY_MENU_FETCH_SUCCESS action', () => {
        action = find(actionsCalled, { type: 'DISPLAY_MENU_FETCH_SUCCESS' });
        expect(action).to.exist;
      });
    });

    describe('handles callbacks', () => {
      beforeEach(() => store = mockStore());

      it('should handle success callback', () => {
        fetchDisplayMenu(brandibble, SAMPLE_MENU_LOCATION_ID, 'delivery', NOW, success)(store.dispatch).then((res) => {
          expect(res).to.equal('success');
        });
      });

      it('should handle fail callback', () => {
        fetchDisplayMenu(brandibble, null, 'delivery', NOW, success, fail)(store.dispatch).then((res) => {
          actionsCalled = store.getActions();
          action = find(actionsCalled, { type: 'DISPLAY_MENU_FETCH_ERROR' });
          expect(action).to.exist;
          expect(res).to.equal('fail');
        });
      });
    });
  });
});
