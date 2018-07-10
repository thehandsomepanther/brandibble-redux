Object.defineProperty(exports,"__esModule",{value:true});exports.fetchAllergens=exports.FETCH_ALLERGENS=undefined;var _fireAction=require('../../utils/fireAction');var _fireAction2=_interopRequireDefault(_fireAction);
var _handleErrors=require('../../utils/handleErrors');var _handleErrors2=_interopRequireDefault(_handleErrors);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var FETCH_ALLERGENS=exports.FETCH_ALLERGENS='FETCH_ALLERGENS';

var fetchAllergens=exports.fetchAllergens=function fetchAllergens(brandibble){return function(dispatch){
var payload=brandibble.allergens.all().then(function(_ref){var data=_ref.data;return data;}).catch(_handleErrors2.default);
return dispatch((0,_fireAction2.default)(FETCH_ALLERGENS,payload));
};};