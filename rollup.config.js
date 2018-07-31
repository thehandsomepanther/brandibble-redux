import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  external: [
    'babel-polyfill',
    'brandibble',
    'localforage',
    'lodash.filter',
    'lodash.find',
    'lodash.map',
    'lodash.pickby',
    'lodash.reduce',
    'moment',
    'redux',
    'redux-promise-middleware',
    'redux-thunk',
    'reselect',
  ],
  output: {
    file: pkg.main,
    format: 'cjs',
  },
  plugins: [
    resolve({
      module: true,
      main: true,
    }),
    babel({
      babelrc: false,
      presets: [['env', { modules: false }]],
      plugins: ['transform-class-properties', 'transform-object-rest-spread', 'external-helpers'],
      exclude: 'node_modules/**',
    }),
  ],
};
