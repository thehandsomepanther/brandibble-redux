export const SETUP_BRANDIBBLE = 'SETUP_BRANDIBBLE';

function _setupBrandibble(brandibble) {
  return {
    type: SETUP_BRANDIBBLE,
    payload: brandibble.setup(),
  }
}

export function setupBrandibble(Brandibble) {
  return dispatch => dispatch(_setupBrandibble(Brandibble));
}
