import { expect } from 'chai';
import find from 'lodash.find';
import reduxCrud from 'redux-crud';
import configureStore from 'redux-mock-store';
import reduxMiddleware from 'config/middleware';
import { brandibble, SAMPLE_EMAIL, validCredentialsStub } from '../../config/stubs';
import {
  authenticateUser,
  createUser,
  fetchUser,
  resolveUser,
  unauthenticateUser,
  updateUser,
  validateUser,
} from 'actions/session/user';

const {
  USER_CREATE_START,
  USER_CREATE_SUCCESS,
  USER_CREATE_ERROR,
  USER_FETCH_START,
  USER_FETCH_SUCCESS,
  USER_UPDATE_START,
  USER_UPDATE_SUCCESS,
} = reduxCrud.actionTypesFor('user');

const mockStore = configureStore(reduxMiddleware);
const success = () =>  this.status = 'success';
const fail = () => this.status = 'fail';

describe('actions/session/user', () => {
  describe('validateUser', () => {
    let store, actionsCalled, action;

    describe('calls actions', () => {
      before(done => {
        store = mockStore();
        validateUser(brandibble, SAMPLE_EMAIL)(store.dispatch).then(() => {
          actionsCalled = store.getActions();
          done();
        });
      });

      it('should call at least 2 actions', () => {
        expect(actionsCalled).to.have.length.of.at.least(2);
      });

      it('should have VALIDATE_USER_PENDING action', () => {
        action = find(actionsCalled, {type: 'VALIDATE_USER_PENDING'});
        expect(action).to.exist;
      });

      it('should have VALIDATE_USER_FULFILLED action', () => {
        action = find(actionsCalled, {type: 'VALIDATE_USER_FULFILLED'});
        expect(action).to.exist;
      });
    });

    describe('handles callbacks', () => {
      beforeEach(done => {
        store = mockStore();
        done();
      });

      it('should handle success callback', () => {
        validateUser(brandibble, SAMPLE_EMAIL, success)(store.dispatch).then(() => {
          expect(this.status).to.equal('success');
        });
      });

      it('should handle fail callback', () => {
        validateUser(brandibble, null, success, fail)(store.dispatch).then(() => {
          expect(this.status).to.equal('fail');
        });
      });
    });
  });

  describe('authenticateUser', () => {
    let store, actionsCalled, action;

    describe('calls actions', () => {
      before(done => {
        store = mockStore();
        authenticateUser(brandibble, validCredentialsStub)(store.dispatch).then(() => {
          actionsCalled = store.getActions();
          done();
        });
      });

      it('should call at least 2 actions', () => {
        expect(actionsCalled).to.have.length.of.at.least(2);
      });

      it('should have AUTHENTICATE_USER_PENDING action', () => {
        action = find(actionsCalled, {type: 'AUTHENTICATE_USER_PENDING'});
        expect(action).to.exist;
      });

      it('should have AUTHENTICATE_USER_FULFILLED action', () => {
        action = find(actionsCalled, {type: 'AUTHENTICATE_USER_FULFILLED'});
        expect(action).to.exist;
      });
    });

    describe('handles callbacks', () => {
      beforeEach(done => {
        store = mockStore();
        done();
      });

      it('should handle success callback', () => {
        authenticateUser(brandibble, validCredentialsStub, success)(store.dispatch).then(() => {
          expect(this.status).to.equal('success');
        });
      });

      it('should handle fail callback', () => {
        authenticateUser(brandibble, null, success, fail)(store.dispatch).then(() => {
          expect(this.status).to.equal('fail');
        });
      });
    });

    describe('throws error on wrong credentials', () => {
      let credentials;
      before(done => {
        credentials = validCredentialsStub;
        credentials.password = 'SUPER WRONG PASSWORD';
        store = mockStore();
        authenticateUser(brandibble, credentials)(store.dispatch).catch(() => {
          actionsCalled = store.getActions();
          done();
        });
      });

      it('should call at least 2 actions', () => {
        expect(actionsCalled).to.have.length.of.at.least(2);
      });

      it('should have AUTHENTICATE_USER_PENDING action', () => {
        action = find(actionsCalled, {type: 'AUTHENTICATE_USER_PENDING'});
        expect(action).to.exist;
      });

      it('should have AUTHENTICATE_USER_REJECTED action', () => {
        action = find(actionsCalled, {type: 'AUTHENTICATE_USER_REJECTED'});
        expect(action).to.exist;
      });
    });
  });

  describe('unauthenticateUser', () => {
    let store, actionsCalled, action;

    describe('calls actions', () => {
      before(done => {
        store = mockStore();
        unauthenticateUser(brandibble)(store.dispatch).then(() => {
          actionsCalled = store.getActions();
          done();
        });
      });

      it('should call at least 2 actions', () => {
        expect(actionsCalled).to.have.length.of.at.least(2);
      });

      it('should have UNAUTHENTICATE_USER_PENDING action', () => {
        action = find(actionsCalled, {type: 'UNAUTHENTICATE_USER_PENDING'});
        expect(action).to.exist;
      });

      it('should have AUTHENTICATE_USER_FULFILLED action', () => {
        action = find(actionsCalled, {type: 'UNAUTHENTICATE_USER_FULFILLED'});
        expect(action).to.exist;
      });
    });

    describe('handles callbacks', () => {
      beforeEach(() => {
        store = mockStore();
        authenticateUser(brandibble, validCredentialsStub)(store.dispatch);
      });

      it('should handle success callback', done => {
        unauthenticateUser(brandibble, success)(store.dispatch).then(() => {
          expect(this.status).to.equal('success');
          done();
        });
      });

      it('should handle fail callback', () => {
        unauthenticateUser(brandibble)(store.dispatch).then(() => {
          unauthenticateUser(brandibble, success, fail)(store.dispatch).then(() => {
            expect(this.status).to.equal('fail');
          });
        });
      });
    });
  });

  describe('resolveUser', () => {
    let store, actionsCalled, action;

    describe('calls actions', () => {
      before(done => {
        store = mockStore();
        resolveUser(brandibble)(store.dispatch).then(() => {
          actionsCalled = store.getActions();
          done();
        });
      });

      it('should call at least 2 actions', () => {
        expect(actionsCalled).to.have.length.of.at.least(2);
      });

      it('should have RESOLVE_USER_PENDING action', () => {
        action = find(actionsCalled, {type: 'RESOLVE_USER_PENDING'});
        expect(action).to.exist;
      });

      it('should have RESOLVE_USER_FULFILLED action', () => {
        action = find(actionsCalled, {type: 'RESOLVE_USER_FULFILLED'});
        expect(action).to.exist;
      });
    });

    describe('when unauthorized', () => {
      before(done => {
        store = mockStore();
        unauthenticateUser(brandibble, validCredentialsStub)(store.dispatch).then(() => {
          resolveUser(brandibble)(store.dispatch).then(() => {
            actionsCalled = store.getActions();
            action = find(actionsCalled, {type: 'RESOLVE_USER_FULFILLED'});
            done();
          });
        });
      });

      it('should have RESOLVE_USER_FULFILLED action', () => {
        expect(action).to.exist;
      });

      it('RESOLVE_USER_FULFILLED action should have an object with no keys', () => {
        expect(Object.keys(action.payload)).to.have.length.of(0);
      });
    });
  });

  describe('createUser', () => {
    let store, actionsCalled, action, userData;

    describe('valid data', () => {
      before(done => {
        store = mockStore();
        userData = {
          first_name: 'Hugh',
          last_name: 'Francis',
          email: `sanctuary-testing-${(new Date()).valueOf().toString()}@example.com`,
          password: 'password',
        };

        createUser(brandibble, userData)(store.dispatch).then(() => {
          actionsCalled = store.getActions();
          done();
        });
      });

      it('should call at least 2 actions', () => {
        expect(actionsCalled).to.have.length.of.at.least(2);
      });

      it('should have USER_CREATE_START action', () => {
        action = find(actionsCalled, {type: USER_CREATE_START});
        expect(action).to.exist;
      });

      it('should have USER_CREATE_SUCCESS action', () => {
        action = find(actionsCalled, {type: USER_CREATE_SUCCESS});
        expect(action).to.exist;
      });

      describe('able to be authenticated', () => {
        let id;

        before(done => {
          action = find(actionsCalled, {type: USER_CREATE_SUCCESS});
          id = action.record.customer_id;

          authenticateUser(brandibble, userData)(store.dispatch).then(() => {
            actionsCalled = store.getActions();
            done();
          });
        });

        it('should have AUTHENTICATE_USER_FULFILLED action', () => {
          action = find(actionsCalled, {type: 'AUTHENTICATE_USER_FULFILLED'});
          expect(action).to.exist;
        });

        describe('fetchUser', () => {
          before(done => {
            store.clearActions();
            fetchUser(brandibble, id)(store.dispatch).then(() => {
              actionsCalled = store.getActions();
              done();
            });
          });

          it('should call at least 2 actions', () => {
            expect(actionsCalled).to.have.length.of.at.least(2);
          });

          it('should have USER_FETCH_START action', () => {
            action = find(actionsCalled, {type: USER_FETCH_START});
            expect(action).to.exist;
          });

          it('should have USER_FETCH_SUCCESS action', () => {
            action = find(actionsCalled, {type: USER_FETCH_SUCCESS});
            expect(action).to.exist;
          });
        });

        describe('updateUser', () => {
          before(done => {
            store.clearActions();
            userData.first_name = 'Boo';
            updateUser(brandibble, id, userData)(store.dispatch).then(() => {
              actionsCalled = store.getActions();
              done();
            });
          });

          it('should call at least 2 actions', () => {
            expect(actionsCalled).to.have.length.of.at.least(2);
          });

          it('should have USER_UPDATE_START action', () => {
            action = find(actionsCalled, {type: USER_UPDATE_START});
            expect(action).to.exist;
          });

          it('should have USER_UPDATE_SUCCESS action', () => {
            action = find(actionsCalled, {type: USER_UPDATE_SUCCESS});
            expect(action).to.exist;
          });
        });

      });
    });

    describe('invalid data', () => {
      before(done => {
        store = mockStore();
        let userData = {
          first_name: 'Hugh',
          last_name: 'Francis',
          email: `sanctuary-testing-${(new Date()).valueOf().toString()}@example`,
          password: 'password',
        };

        createUser(brandibble, userData)(store.dispatch).then(() => {
          actionsCalled = store.getActions();
          done();
        });
      });

      it('should call at least 2 actions', () => {
        expect(actionsCalled).to.have.length.of.at.least(2);
      });

      it('should have USER_CREATE_START action', () => {
        action = find(actionsCalled, {type: USER_CREATE_START});
        expect(action).to.exist;
      });

      it('should have USER_CREATE_ERROR action', () => {
        action = find(actionsCalled, {type: USER_CREATE_ERROR});
        expect(action).to.exist;
      });
    });
  });
});
