// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=4294967295,r=Number.POSITIVE_INFINITY;var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var a,i="function"==typeof Symbol?Symbol:void 0,u="function"==typeof i?i.toStringTag:"";a=n&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,a,i,c;if(null==t)return o.call(t);n=t[u],c=u,r=null!=(i=t)&&e.call(i,c);try{t[u]=void 0}catch(r){return o.call(t)}return a=o.call(t),r?t[u]=n:delete t[u],a}:function(t){return o.call(t)};var c=a,f="function"==typeof Float32Array;var l=Number.POSITIVE_INFINITY,y="function"==typeof Float32Array?Float32Array:null;var p="function"==typeof Float32Array?Float32Array:void 0;var v=function(){var t,r,n;if("function"!=typeof y)return!1;try{r=new y([1,3.14,-3.14,5e40]),n=r,t=(f&&n instanceof Float32Array||"[object Float32Array]"===c(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===l}catch(r){t=!1}return t}()?p:function(){throw new Error("not implemented")},s="function"==typeof Uint32Array;var b="function"==typeof Uint32Array?Uint32Array:null;var m="function"==typeof Uint32Array?Uint32Array:void 0;var A=function(){var t,r,n;if("function"!=typeof b)return!1;try{r=new b(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(s&&n instanceof Uint32Array||"[object Uint32Array]"===c(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?m:function(){throw new Error("not implemented")},w=new v(1);new A(w.buffer)[0]=2139095040;var d=w[0];function I(n){switch(n){case"float64":return l;case"int32":return 2147483647;case"uint32":return t;case"float32":return d;case"int8":return 127;case"uint8":case"uint8c":return 255;case"int16":return 32767;case"uint16":return 65535;case"float16":return r;default:throw new TypeError(function(){var t,r=arguments,n="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}("1XxBn",n))}}export{I as default};
//# sourceMappingURL=mod.js.map
