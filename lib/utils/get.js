Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(obj){var path=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';return(
path.length?
path.split('.').reduce(function(acc,part){return acc&&acc[part];},obj):
obj);};