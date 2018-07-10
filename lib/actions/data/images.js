Object.defineProperty(exports,"__esModule",{value:true});exports.fetchImages=exports.FETCH_IMAGES=undefined;var _fireAction=require('../../utils/fireAction');var _fireAction2=_interopRequireDefault(_fireAction);
var _handleErrors=require('../../utils/handleErrors');var _handleErrors2=_interopRequireDefault(_handleErrors);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var FETCH_IMAGES=exports.FETCH_IMAGES='FETCH_IMAGES';

var fetchImages=exports.fetchImages=function fetchImages(brandibble,ids,type){return function(dispatch){
var payload=brandibble.images.
show(ids,type).
then(function(_ref){var data=_ref.data;return data;}).
catch(_handleErrors2.default);
return dispatch((0,_fireAction2.default)(FETCH_IMAGES,payload));
};};