import reduxCrud from 'redux-crud';
const baseReducers = reduxCrud.List.reducersFor('customerOrders', {key: 'orders_id'});

const initialState = [];

export default function customerOrders(state=initialState, action) {
  switch(action.type) {
    default:
      return baseReducers(state, action);
  }
}
