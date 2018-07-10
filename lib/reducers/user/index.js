Object.defineProperty(exports,"__esModule",{value:true});var _redux=require('redux');
var _attributes=require('./attributes');var _attributes2=_interopRequireDefault(_attributes);
var _levelup=require('./levelup');var _levelup2=_interopRequireDefault(_levelup);
var _validations=require('./validations');var _validations2=_interopRequireDefault(_validations);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

(0,_redux.combineReducers)({
attributes:_attributes2.default,
levelup:_levelup2.default,
validations:_validations2.default});