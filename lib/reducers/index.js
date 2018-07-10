Object.defineProperty(exports,"__esModule",{value:true});var _redux=require('redux');
var _data=require('./data');var _data2=_interopRequireDefault(_data);
var _error=require('./error');var _error2=_interopRequireDefault(_error);
var _ref=require('./ref');var _ref2=_interopRequireDefault(_ref);
var _session=require('./session');var _session2=_interopRequireDefault(_session);
var _status=require('./status');var _status2=_interopRequireDefault(_status);
var _user=require('./user');var _user2=_interopRequireDefault(_user);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

(0,_redux.combineReducers)({
data:_data2.default,
error:_error2.default,
ref:_ref2.default,
session:_session2.default,
status:_status2.default,
user:_user2.default});