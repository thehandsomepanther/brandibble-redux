import fireAction from '../utils/fireAction';
import handleErrors from '../utils/handleErrors';
import { resolveOrder, resolveOrderLocation } from './session/order';
import { resolveUser } from './session/user';

export const SETUP_BRANDIBBLE = 'SETUP_BRANDIBBLE';
export const SETUP_BRANDIBBLE_REDUX = 'SETUP_BRANDIBBLE_REDUX';
export const SEND_SUPPORT_TICKET = 'SEND_SUPPORT_TICKET';

// setupBrandibble
export const setupBrandibble = brandibble => (dispatch) => {
  const payload = brandibble.setup().catch(handleErrors);
  return dispatch(fireAction(SETUP_BRANDIBBLE, payload));
};

// setupBrandibbleRedux
const setupBrandibbleReduxDefaults = {
  locationId: null,
  serviceType: 'pickup',
};
export const setupBrandibbleRedux = (brandibble, data = setupBrandibbleReduxDefaults) => (dispatch) => {
  const { locationId, serviceType } = Object.assign({}, setupBrandibbleReduxDefaults, data);
  const payload = dispatch(setupBrandibble(brandibble)).then(({ value }) => {
    return Promise.all([
      dispatch(resolveUser(value)),
      dispatch(resolveOrder(value, locationId, serviceType)),
      dispatch(resolveOrderLocation(value)),
    ]);
  }).catch(handleErrors);

  return dispatch(fireAction(SETUP_BRANDIBBLE_REDUX, payload));
};

// sendSupportTicket
const sendSupportTicketDefaults = {
  body: null,
  email: null,
  name: null,
  subject: null,
};
export const sendSupportTicket = (brandibble, data = sendSupportTicketDefaults) => (dispatch) => {
  const payload = brandibble
    .sendSupportTicket(Object.assign({}, sendSupportTicketDefaults, data))
    .catch(handleErrors);
  return dispatch(fireAction(SEND_SUPPORT_TICKET, payload));
};
