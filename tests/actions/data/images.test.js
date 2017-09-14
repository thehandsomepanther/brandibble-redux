/* global describe before it */
/* eslint one-var-declaration-per-line:1, one-var:1 */
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import { fetchImages } from 'actions/data/images';
import reduxMiddleware from 'config/middleware';
import { brandibble, productStub } from '../../config/stubs';

const mockStore = configureStore(reduxMiddleware);

describe('actions/data/images', () => {
  let store, actionsCalled;
  describe('fetchImages', () => {
    before(() => {
      store = mockStore();
      return fetchImages(brandibble, productStub.id)(store.dispatch).then(() => {
        actionsCalled = store.getActions();
      });
    });

    it('should call 2 actions', () => expect(actionsCalled).to.have.length.of(2));
  });
});
