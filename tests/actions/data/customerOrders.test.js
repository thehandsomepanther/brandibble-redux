import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import reduxMiddleware from 'config/middleware';
import { fetchCustomerOrders } from 'actions/data/customerOrders';
import { brandibble, validCredentialsStub } from '../../config/stubs';
import { authenticateUser } from 'actions/session/user';

const mockStore = configureStore(reduxMiddleware);

describe('actions/data/customerOrders', () => {
  let store, actionsCalled, first, last, customerId;

  before(done => {
    store = mockStore();
    authenticateUser(brandibble, validCredentialsStub)(store.dispatch).then(res => {
      customerId = res.value.customer_id;
      store.clearActions();
      done();
    });
  });

  afterEach(() => {
    store.clearActions();
  });

  describe('fetchCustomerOrders', () => {
    before(() => {
      store = mockStore();
      return fetchCustomerOrders(brandibble, customerId)(store.dispatch).then(() => {
        actionsCalled = store.getActions();
        [first, last] = actionsCalled;
      });
    });

    it('should call 2 actions', () => {
      expect(actionsCalled).to.have.length.of(2);
    });

    it('first action should be CUSTOMER_ORDERS_FETCH_START', () => {
      expect(first).to.have.property('type', 'CUSTOMER_ORDERS_FETCH_START');
    });

    it('last action should be CUSTOMER_ORDERS_FETCH_SUCCESS', () => {
      expect(last).to.have.property('type', 'CUSTOMER_ORDERS_FETCH_SUCCESS');
    });
  });
});
