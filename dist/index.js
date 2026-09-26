"use strict";var p=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var o=p(function(O,l){
var c=require('@stdlib/ndarray-base-numel-dimension/dist'),g=require('@stdlib/ndarray-base-order/dist'),s=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),n=require('@stdlib/ndarray-base-data-buffer/dist'),q=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),m=require('@stdlib/blas-base-dspmv/dist').ndarray;function f(r){var e,a,d,v,i,t;return v=r[0],i=r[1],t=r[2],a=q(r[3]),e=q(r[4]),d=q(r[5]),m(g(v),a,c(i,0),e,n(v),u(v),n(i),s(i,0),u(i),d,n(t),s(t,0),u(t)),t}l.exports=f
});var x=o();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
