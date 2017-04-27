import reduxCrud from 'redux-crud';

const baseReducers = reduxCrud.Map.reducersFor('favorites', { key: 'favorite_item_id' });
const initialState = {};

export default function favorites(state = initialState, action) {
  switch (action.type) {
    default:
      return baseReducers(state, action);
  }
}
