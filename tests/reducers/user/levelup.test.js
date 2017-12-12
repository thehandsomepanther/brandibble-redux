/* global describe it */
import Immutable from 'seamless-immutable';
import { expect } from 'chai';
import {
  FETCH_LEVELUP_LOYALTY,
  FETCH_LEVELUP_QR_CODE,
  FETCH_LEVELUP_PAYMENT_METHOD,
  FETCH_LEVELUP_CAMPAIGN,
} from 'actions/session/user';
import reducer from 'reducers/user/levelup';

const initialState = {
  loyalty: {},
  qr_code: null,
  payment_method: null,
  campaign: null,
};

describe('reducers/user/levelup', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).to.equal(initialState);
  });

  it('handles the FETCH_LEVELUP_LOYALTY_FULFILLED action', () => {
    const payload = { points: 69 };
    const reduced = reducer(initialState, {
      type: `${FETCH_LEVELUP_LOYALTY}_FULFILLED`,
      payload,
    });
    expect(reduced.loyalty).to.equal(payload);
  });

  it('handles the FETCH_LEVELUP_QR_CODE_FULFILLED action', () => {
    const payload = '69';
    const reduced = reducer(initialState, {
      type: `${FETCH_LEVELUP_QR_CODE}_FULFILLED`,
      payload,
    });
    expect(reduced.qr_code).to.equal(payload);
  });


  it('handles the FETCH_LEVELUP_CAMPAIGN_FULFILLED action', () => {
    const payload = '69';
    const reduced = reducer(initialState, {
      type: `${FETCH_LEVELUP_CAMPAIGN}_FULFILLED`,
      payload,
    });
    expect(reduced.campaign).to.equal(payload);
  });

  it('handles the FETCH_LEVELUP_PAYMENT_METHOD_FULFILLED action', () => {
    const payload = { description: 'Visa 1234' };
    const reduced = reducer(initialState, {
      type: `${FETCH_LEVELUP_PAYMENT_METHOD}_FULFILLED`,
      payload,
    });
    expect(reduced.payment_method).to.equal(payload);
  });
});
