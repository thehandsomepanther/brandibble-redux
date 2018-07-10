Object.defineProperty(exports,"__esModule",{value:true});exports.initialState=undefined;var _seamlessImmutable=require('seamless-immutable');var _seamlessImmutable2=_interopRequireDefault(_seamlessImmutable);
var _images=require('../../actions/data/images');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var initialState=exports.initialState=(0,_seamlessImmutable2.default)({
imagesById:(0,_seamlessImmutable2.default)({})});exports.default=


function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];var
payload=action.payload,type=action.type;

switch(type){
case _images.FETCH_IMAGES+'_FULFILLED':
return state.merge({
imagesById:state.imagesById.replace(_seamlessImmutable2.default.asObject(payload,function(image){
return[image.id,image];
}))});

default:
return state;}

};