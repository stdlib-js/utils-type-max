// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n=4294967295,r=Number.POSITIVE_INFINITY,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,a=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,f="function"==typeof i?i.toStringTag:"";t=e&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,i,u;if(null==t)return o.call(t);r=t[f],u=f,n=null!=(i=t)&&a.call(i,u);try{t[f]=void 0}catch(n){return o.call(t)}return e=o.call(t),n?t[f]=r:delete t[f],e}:function(t){return o.call(t)};var u=t,c="function"==typeof Float32Array,l=Number.POSITIVE_INFINITY,y="function"==typeof Float32Array?Float32Array:null,p="function"==typeof Float32Array?Float32Array:void 0,s=function(){var t,n,r;if("function"!=typeof y)return!1;try{n=new y([1,3.14,-3.14,5e40]),r=n,t=(c&&r instanceof Float32Array||"[object Float32Array]"===u(r))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===l}catch(n){t=!1}return t}()?p:function(){throw new Error("not implemented")},d="function"==typeof Uint32Array,b="function"==typeof Uint32Array?Uint32Array:null,m="function"==typeof Uint32Array?Uint32Array:void 0,A=function(){var t,n,r;if("function"!=typeof b)return!1;try{n=new b(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(d&&r instanceof Uint32Array||"[object Uint32Array]"===u(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?m:function(){throw new Error("not implemented")},h=new s(1);new A(h.buffer)[0]=2139095040;var v=h[0];return function(t){switch(t){case"float64":return l;case"int32":return 2147483647;case"uint32":return n;case"float32":return v;case"int8":return 127;case"uint8":case"uint8c":return 255;case"int16":return 32767;case"uint16":return 65535;case"float16":return r;default:throw new TypeError(function(){var t,n=arguments,r="https://stdlib.io/e/"+n[0]+"?";for(t=1;t<n.length;t++)r+="&arg[]="+encodeURIComponent(n[t]);return r}("1XxBn",t))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).typemax=n();
//# sourceMappingURL=browser.js.map
