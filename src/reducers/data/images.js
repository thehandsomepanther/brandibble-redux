
import { FETCH_IMAGES } from '../../actions/data/images';

export const initialState = {
  imagesById: {},
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case `${FETCH_IMAGES}_FULFILLED`:
      return {
        ...state,
        imagesById: payload.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {}),
      };
    default:
      return state;
  }
};
