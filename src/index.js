import middleware from './config/middleware';
import reducers from './reducers';
import BrandibbleRef from 'brandibble';

export * from './actions';
export const Brandibble = BrandibbleRef;
export const reducer = reducers;
export const brandibbleMiddleware = middleware;
