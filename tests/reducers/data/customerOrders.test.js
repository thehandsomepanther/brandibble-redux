import { expect } from 'chai';
import reduxCrud from 'redux-crud';
import reducer from 'reducers/data/customerOrders';
import { customerOrdersStub } from '../../config/stubs';

const { CUSTOMER_ORDERS_FETCH_SUCCESS } = reduxCrud.actionTypesFor('customerOrders');
const initialState = [];
const payload = customerOrdersStub;

describe('reducers/data/customerOrders', () => {
  it('should return the initial state', () => {
    expect(
      reducer(initialState, {})
    ).to.equal(initialState);
  });

  it('handles the CUSTOMER_ORDERS_FETCH_SUCCESS action', () => {
    let reduced = reducer(initialState, {
      type: CUSTOMER_ORDERS_FETCH_SUCCESS,
      records: payload,
    });
    expect(reduced[0].orders_id).to.equal(payload[0].orders_id);
  });
});
