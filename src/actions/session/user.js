import reduxCrud from 'redux-crud';
import generateUUID from 'utils/generateUUID';
const {
  fetchStart,
  fetchSuccess,
  fetchError,
  updateStart,
  updateSuccess,
  updateError,
  createStart,
  createSuccess,
  createError,
} = reduxCrud.actionCreatorsFor('user');

export const VALIDATE_USER = 'VALIDATE_USER';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const UNAUTHENTICATE_USER = 'UNAUTHENTICATE_USER';
export const RESOLVE_USER = 'RESOLVE_USER';
export const RESET_USER_PASSWORD = 'RESET_USER_PASSWORD';

const NO_OP = f => f;

function _validateUser(brandibble, email, success, fail) {
  return {
    type: VALIDATE_USER,
    payload: brandibble.customers.validateCustomer({email}).then(({data}) => {
      success(data);
      return data;
    })
    .catch(({errors}) => fail(errors)),
  };
}

function _authenticateUser(brandibble, loginData, success, fail) {
  return {
    type: AUTHENTICATE_USER,
    payload: brandibble.customers.authenticate(loginData).then(({data}) => {
      success(data);
      return data;
    })
    .catch(({errors}) => fail(errors)),
  }
}

function _unauthenticateUser(brandibble, success, fail) {
  return {
    type: UNAUTHENTICATE_USER,
    payload: brandibble.customers.invalidate().then(success).catch(({errors}) => fail(errors)),
  }
}

function _resolveUser(payload) {
  return { type: RESOLVE_USER, payload: payload }
}

function _resetUserPassword(brandibble, email, success, fail) {
  return {
    type: RESET_USER_PASSWORD,
    payload: brandibble.customers.resetPassword(email).then(success).catch(({errors}) => { throw fail(errors) }),
  }
}

export function validateUser(brandibble, email, success=NO_OP, fail=NO_OP) {
  return dispatch => dispatch(_validateUser(brandibble, email, success, fail));
}

export function authenticateUser(brandibble, loginData, success=NO_OP, fail=NO_OP) {
  return dispatch => dispatch(_authenticateUser(brandibble, loginData, success, fail));
}

export function unauthenticateUser(brandibble, success=NO_OP, fail=NO_OP) {
  return dispatch => dispatch(_unauthenticateUser(brandibble, success, fail));
}

// TODO - untested
export function resetUserPassword(brandibble, email, success=NO_OP, fail=NO_OP) {
  return dispatch => dispatch(_resetUserPassword(brandibble, email, success, fail));
}

export function resolveUser(brandibble) {
  const { adapter, customers } = brandibble;
  const payload = adapter.customerToken ? customers.current() : Promise.resolve({});

  return dispatch => dispatch(_resolveUser(payload));
}

export function fetchUser(brandibble, id) {
  return dispatch => {
    dispatch(fetchStart());
    return brandibble.customers.show(id)
      .then(({data}) => dispatch(fetchSuccess(data)))
      .catch(({errors}) => dispatch(fetchError(errors)));
  };
}

export function createUser(brandibble, data={}) {
  return dispatch => {
    const id = generateUUID()
    dispatch(createStart({record: data, id}));
    return brandibble.customers.create(data)
      .then(({data}) => dispatch(createSuccess({id, ...data})))
      .catch(({errors}) => dispatch(createError(errors, {id, data})));
  };
}

export function updateUser(brandibble, id, data={}) {
  return dispatch => {
    dispatch(updateStart({record: data, id}));
    return brandibble.customers.updateCurrent(data)
      .then(({data}) => dispatch(updateSuccess({id, ...data})))
      .catch(({errors}) => dispatch(updateError(errors, {id, data})));
  };
}
