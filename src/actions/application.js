import { resolveOrder } from 'actions/session/order';
import { resolveUser } from 'actions/session/user';

export const SETUP_BRANDIBBLE = 'SETUP_BRANDIBBLE';
export const SETUP_BRANDIBBLE_REDUX = 'SETUP_BRANDIBBLE_REDUX';
export const SEND_SUPPORT_TICKET = 'SEND_SUPPORT_TICKET';

const _setupBrandibble = (brandibble) => {
  return {
    type: SETUP_BRANDIBBLE,
    payload: brandibble.setup(),
  };
};

const _setupBrandibbleRedux = (payload) => {
  return { type: SETUP_BRANDIBBLE_REDUX, payload };
};

const _sendSupportTicket = (brandibble, data) => {
  return {
    type: SEND_SUPPORT_TICKET,
    payload: brandibble.sendSupportTicket(data),
  };
};

export const setupBrandibble = (Brandibble) => {
  return dispatch => dispatch(_setupBrandibble(Brandibble));
};

export const setupBrandibbleRedux = (Brandibble, defaultLocationId = null, defaultServiceType = 'delivery') => {
  return (dispatch) => {
    const payload = dispatch(setupBrandibble(Brandibble)).then(({ value }) => {
      return Promise.all([
        dispatch(resolveUser(value)),
        dispatch(resolveOrder(value, defaultLocationId, defaultServiceType)),
      ]);
    });

    return dispatch(_setupBrandibbleRedux(payload));
  };
};

// subject, body, email, name
export const sendSupportTicket = (brandibble, data = {}) => {
  return dispatch => dispatch(_sendSupportTicket(brandibble, data));
};
