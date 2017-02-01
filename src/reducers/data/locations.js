import reduxCrud from 'redux-crud';
const baseReducers = reduxCrud.List.reducersFor('locations');

const initialState = [];

export default function locations(state=initialState, action) {
  switch(action.type) {
    default:
      return baseReducers(state, action);
  }
}
