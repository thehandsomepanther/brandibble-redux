/* global describe afterEach before beforeEach it */
/* eslint one-var-declaration-per-line:1, one-var:1 */
import { expect } from 'chai';
import find from 'lodash.find';
import reduxCrud from 'redux-crud';
import configureStore from 'redux-mock-store';
import reduxMiddleware from 'config/middleware';
import { fetchFavorites, createFavorite, updateFavorite, deleteFavorite } from 'actions/session/favorites';
import { authenticateUser } from 'actions/session/user';
import { brandibble, buildLineItem, validCredentialsStub } from '../../config/stubs';

const {
  FAVORITES_CREATE_START,
  FAVORITES_CREATE_SUCCESS,
  FAVORITES_DELETE_START,
  FAVORITES_DELETE_SUCCESS,
  FAVORITES_UPDATE_START,
  FAVORITES_UPDATE_SUCCESS,
  FAVORITES_FETCH_START,
  FAVORITES_FETCH_SUCCESS,
} = reduxCrud.actionTypesFor('favorites');
const mockStore = configureStore(reduxMiddleware);

describe('actions/session/favorites', () => {
  let action, actionsCalled, store;

  before(() => {
    store = mockStore();
    return authenticateUser(brandibble, validCredentialsStub)(store.dispatch).then(() => {
      store.clearActions();
    });
  });

  afterEach(() => store.clearActions());

  describe('fetchFavorites', () => {
    before(() => {
      store = mockStore();
      return fetchFavorites(brandibble)(store.dispatch).then(() => {
        actionsCalled = store.getActions();
      });
    });

    it('should call 2 actions', () => expect(actionsCalled).to.have.length.of(2));

    it('should have FAVORITES_FETCH_START action', () => {
      action = find(actionsCalled, { type: FAVORITES_FETCH_START });
      expect(action).to.exist;
    });

    it('should have FAVORITES_FETCH_SUCCESS action', () => {
      action = find(actionsCalled, { type: FAVORITES_FETCH_SUCCESS });
      expect(action).to.exist;
    });
  });
  describe('createFavorite', () => {
    let id;

    before(() => {
      return createFavorite(brandibble, 'my favorite', buildLineItem())(store.dispatch).then(() => {
        actionsCalled = store.getActions();
        action = find(actionsCalled, { type: FAVORITES_CREATE_SUCCESS });
        id = action.record.favorite_item_id;
      });
    });

    it('should call 2 actions', () => expect(actionsCalled).to.have.length.of(2));

    it('should have FAVORITES_CREATE_START action', () => {
      action = find(actionsCalled, { type: FAVORITES_CREATE_START });
      expect(action).to.exist;
    });

    it('should have FAVORITES_CREATE_SUCCESS action', () => {
      action = find(actionsCalled, { type: FAVORITES_CREATE_SUCCESS });
      expect(action).to.exist;
    });

    describe('updateFavorite', () => {
      before(() => {
        store.clearActions();
        return updateFavorite(brandibble, id, 'updated favorite', buildLineItem())(store.dispatch).then(() => {
          actionsCalled = store.getActions();
        });
      });

      it('should call 2 actions', () => expect(actionsCalled).to.have.length.of(2));

      it('should have FAVORITES_UPDATE_START action', () => {
        action = find(actionsCalled, { type: FAVORITES_UPDATE_START });
        expect(action).to.exist;
      });

      it('should have FAVORITES_UPDATE_SUCCESS action', () => {
        action = find(actionsCalled, { type: FAVORITES_UPDATE_SUCCESS });
        expect(action).to.exist;
      });
    });

    describe('deleteFavorite', () => {
      before(() => {
        store.clearActions();
        return deleteFavorite(brandibble, id)(store.dispatch).then(() => {
          actionsCalled = store.getActions();
        });
      });

      it('should call 2 actions', () => expect(actionsCalled).to.have.length.of(2));

      it('should have FAVORITES_DELETE_START action', () => {
        action = find(actionsCalled, { type: FAVORITES_DELETE_START });
        expect(action).to.exist;
      });

      it('should have FAVORITES_DELETE_SUCCESS action', () => {
        action = find(actionsCalled, { type: FAVORITES_DELETE_SUCCESS });
        expect(action).to.exist;
      });
    });
  });
});
