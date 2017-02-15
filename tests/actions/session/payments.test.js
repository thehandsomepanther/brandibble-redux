import { expect } from 'chai';
import find from 'lodash.find';
import reduxCrud from 'redux-crud';
import configureStore from 'redux-mock-store';
import reduxMiddleware from 'config/middleware';
import { brandibble, cardStub, validCredentialsStub } from '../../config/stubs';
import { fetchPayments, createPayment, deletePayment } from 'actions/session/payments';
import { authenticateUser } from 'actions/session/user';

const {
  PAYMENTS_CREATE_START,
  PAYMENTS_CREATE_SUCCESS,
  PAYMENTS_DELETE_START,
  PAYMENTS_DELETE_SUCCESS,
  PAYMENTS_FETCH_START,
  PAYMENTS_FETCH_SUCCESS,
} = reduxCrud.actionTypesFor('payments');
const mockStore = configureStore(reduxMiddleware);

describe('actions/session/payments', () => {
  let action, actionsCalled, store;

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

  describe('fetchPayments', () => {
    before(done => {
      store = mockStore();
      fetchPayments(brandibble)(store.dispatch).then(() => {
        actionsCalled = store.getActions();
        done();
      });
    });

    it('should call 2 actions', () => {
      expect(actionsCalled).to.have.length.of(2);
    });

    it('should have PAYMENTS_FETCH_START action', () => {
      action = find(actionsCalled, {type: PAYMENTS_FETCH_START});
      expect(action).to.exist;
    });

    it('should have PAYMENTS_FETCH_SUCCESS action', () => {
      action = find(actionsCalled, {type: PAYMENTS_FETCH_SUCCESS});
      expect(action).to.exist;
    });
  });
  describe('createPayment', () => {
    let action, actionsCalled, id;

    before(done => {
      createPayment(brandibble, cardStub)(store.dispatch).then(() => {
        actionsCalled = store.getActions();
        action = find(actionsCalled, {type: PAYMENTS_CREATE_SUCCESS});
        id = action.record.customer_card_id;
        done();
      });
    });

    it('should call 2 actions', () => {
      expect(actionsCalled).to.have.length.of(2);
    });

    it('should have PAYMENTS_CREATE_START action', () => {
      action = find(actionsCalled, {type: PAYMENTS_CREATE_START});
      expect(action).to.exist;
    });

    it('should have PAYMENTS_CREATE_SUCCESS action', () => {
      action = find(actionsCalled, {type: PAYMENTS_CREATE_SUCCESS});
      expect(action).to.exist;
    });

    describe('deletePayment', () => {
      before(done => {
        store.clearActions();
        deletePayment(brandibble, id)(store.dispatch).then(() => {
          actionsCalled = store.getActions();
          done();
        });
      });

      it('should call 2 actions', () => {
        expect(actionsCalled).to.have.length.of(2);
      });

      it('should have PAYMENTS_DELETE_START action', () => {
        action = find(actionsCalled, {type: PAYMENTS_DELETE_START});
        expect(action).to.exist;
      });

      it('should have PAYMENTS_DELETE_SUCCESS action', () => {
        action = find(actionsCalled, {type: PAYMENTS_DELETE_SUCCESS});
        expect(action).to.exist;
      });
    });
  });
});
