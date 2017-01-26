import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

export default [
  thunk,
  promiseMiddleware({
    // matches redux-crud action type suffixes
    promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR'],
  }),
];
