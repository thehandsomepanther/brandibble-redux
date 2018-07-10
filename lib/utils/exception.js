Object.defineProperty(exports,"__esModule",{value:true});exports.default=BrandibbleReduxException;function BrandibbleReduxException(action,message){
this.message='brandibble-redux: *'+action+'* '+(message||'An unknown exception was triggered.');
this.stack=new Error().stack;
}