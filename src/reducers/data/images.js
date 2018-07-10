import Immutable from 'seamless-immutable';
import { FETCH_IMAGES } from '../../actions/data/images';

export const initialState = Immutable({
  imagesById: Immutable({}),
});

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case `${FETCH_IMAGES}_FULFILLED`:
      return state.merge({
        imagesById: state.imagesById.replace(Immutable.asObject(payload, (image) => {
          return [image.id, image];
        })),
      });
    default:
      return state;
  }
};
