import { expect } from 'chai';
import find from 'lodash.find';
import configureStore from 'redux-mock-store';
import reduxMiddleware from 'config/middleware';
import { brandibble } from '../config/stubs';
import { setupBrandibble } from 'actions/setup';

const mockStore = configureStore(reduxMiddleware);


describe('actions/setup', () => {
  let store, action, actionsCalled;
  describe('setupBrandibble', () => {
    beforeEach(done => {
      store = mockStore();
      setupBrandibble(brandibble)(store.dispatch).then(() => {
        actionsCalled = store.getActions();
        done();
      });

    });

    it('should call 2 actions', () => {
      expect(actionsCalled).to.have.length.of(2);
    });

    it('brandbibble should be online', () => {
      action = find(actionsCalled, {type: 'SETUP_BRANDIBBLE_FULFILLED'});
      expect(action).to.exist;
    });
  });
});
