import { expect } from 'chai';
import find from 'lodash.find';
import reduxCrud from 'redux-crud';
import configureStore from 'redux-mock-store';
import reduxMiddleware from 'config/middleware';
import { brandibble, addressStub, validCredentialsStub } from '../../config/stubs';
import { createAddress, deleteAddress, fetchAddresses } from 'actions/session/addresses';
import { authenticateUser } from 'actions/session/user';

const {
  ADDRESSES_CREATE_START,
  ADDRESSES_CREATE_SUCCESS,
  ADDRESSES_DELETE_START,
  ADDRESSES_DELETE_SUCCESS,
  ADDRESSES_FETCH_START,
  ADDRESSES_FETCH_SUCCESS,
} = reduxCrud.actionTypesFor('addresses');
const mockStore = configureStore(reduxMiddleware);

describe('actions/session/addresses', () => {
  let store;

  before(done => {
    store = mockStore();
    authenticateUser(brandibble, validCredentialsStub)(store.dispatch).then(() => {
      store.clearActions();
      done();
    });
  });

  afterEach(() => {
    store.clearActions();
  });

  describe('fetchAddresses', () => {
    let action, actionsCalled;

    before(done => {
      fetchAddresses(brandibble)(store.dispatch).then(() => {
        actionsCalled = store.getActions();
        done();
      });
    });

    it('should call 2 actions', () => {
      expect(actionsCalled).to.have.length.of(2);
    });

    it('should have ADDRESSES_FETCH_START action', () => {
      action = find(actionsCalled, {type: ADDRESSES_FETCH_START});
      expect(action).to.exist;
    });

    it('should have ADDRESSES_FETCH_SUCCESS action', () => {
      action = find(actionsCalled, {type: ADDRESSES_FETCH_SUCCESS});
      expect(action).to.exist;
    });
  });

  describe('createAddress', () => {
    let action, actionsCalled, id;

    before(done => {
      createAddress(brandibble, addressStub)(store.dispatch).then(() => {
        actionsCalled = store.getActions();
        action = find(actionsCalled, {type: ADDRESSES_CREATE_SUCCESS});
        id = action.record.customer_address_id;
        done();
      });
    });

    it('should call 2 actions', () => {
      expect(actionsCalled).to.have.length.of(2);
    });

    it('should have ADDRESSES_CREATE_START action', () => {
      action = find(actionsCalled, {type: ADDRESSES_CREATE_START});
      expect(action).to.exist;
    });

    it('should have ADDRESSES_CREATE_SUCCESS action', () => {
      action = find(actionsCalled, {type: ADDRESSES_CREATE_SUCCESS});
      expect(action).to.exist;
    });

    describe('deleteAddress', () => {
      before(done => {
        store.clearActions();
        deleteAddress(brandibble, id)(store.dispatch).then(() => {
          actionsCalled = store.getActions();
          done();
        });
      });

      it('should call 2 actions', () => {
        expect(actionsCalled).to.have.length.of(2);
      });

      it('should have ADDRESSES_DELETE_START action', () => {
        action = find(actionsCalled, {type: ADDRESSES_DELETE_START});
        expect(action).to.exist;
      });

      it('should have ADDRESSES_DELETE_SUCCESS action', () => {
        action = find(actionsCalled, {type: ADDRESSES_DELETE_SUCCESS});
        expect(action).to.exist;
      });
    });
  });
});
