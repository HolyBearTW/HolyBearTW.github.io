import{F as em,j as Et,L as nm,k as ne,l as es,m as Jo,p as Dl,u as rm,n as sm,h as im,c as Nl,o as om,f as am,q as um,s as cm,t as ei,v as kl,w as Ml,S as lm,e as hm,C as dm,r as oc,d as fm}from"./index.esm2017.ClLXxoL0.js";var ac=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ee,Fl;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function I(){}I.prototype=p.prototype,T.D=p.prototype,T.prototype=new I,T.prototype.constructor=T,T.C=function(E,v,R){for(var y=Array(arguments.length-2),Zt=2;Zt<arguments.length;Zt++)y[Zt-2]=arguments[Zt];return p.prototype[v].apply(E,y)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,I){I||(I=0);var E=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)E[v]=p.charCodeAt(I++)|p.charCodeAt(I++)<<8|p.charCodeAt(I++)<<16|p.charCodeAt(I++)<<24;else for(v=0;16>v;++v)E[v]=p[I++]|p[I++]<<8|p[I++]<<16|p[I++]<<24;p=T.g[0],I=T.g[1],v=T.g[2];var R=T.g[3],y=p+(R^I&(v^R))+E[0]+3614090360&4294967295;p=I+(y<<7&4294967295|y>>>25),y=R+(v^p&(I^v))+E[1]+3905402710&4294967295,R=p+(y<<12&4294967295|y>>>20),y=v+(I^R&(p^I))+E[2]+606105819&4294967295,v=R+(y<<17&4294967295|y>>>15),y=I+(p^v&(R^p))+E[3]+3250441966&4294967295,I=v+(y<<22&4294967295|y>>>10),y=p+(R^I&(v^R))+E[4]+4118548399&4294967295,p=I+(y<<7&4294967295|y>>>25),y=R+(v^p&(I^v))+E[5]+1200080426&4294967295,R=p+(y<<12&4294967295|y>>>20),y=v+(I^R&(p^I))+E[6]+2821735955&4294967295,v=R+(y<<17&4294967295|y>>>15),y=I+(p^v&(R^p))+E[7]+4249261313&4294967295,I=v+(y<<22&4294967295|y>>>10),y=p+(R^I&(v^R))+E[8]+1770035416&4294967295,p=I+(y<<7&4294967295|y>>>25),y=R+(v^p&(I^v))+E[9]+2336552879&4294967295,R=p+(y<<12&4294967295|y>>>20),y=v+(I^R&(p^I))+E[10]+4294925233&4294967295,v=R+(y<<17&4294967295|y>>>15),y=I+(p^v&(R^p))+E[11]+2304563134&4294967295,I=v+(y<<22&4294967295|y>>>10),y=p+(R^I&(v^R))+E[12]+1804603682&4294967295,p=I+(y<<7&4294967295|y>>>25),y=R+(v^p&(I^v))+E[13]+4254626195&4294967295,R=p+(y<<12&4294967295|y>>>20),y=v+(I^R&(p^I))+E[14]+2792965006&4294967295,v=R+(y<<17&4294967295|y>>>15),y=I+(p^v&(R^p))+E[15]+1236535329&4294967295,I=v+(y<<22&4294967295|y>>>10),y=p+(v^R&(I^v))+E[1]+4129170786&4294967295,p=I+(y<<5&4294967295|y>>>27),y=R+(I^v&(p^I))+E[6]+3225465664&4294967295,R=p+(y<<9&4294967295|y>>>23),y=v+(p^I&(R^p))+E[11]+643717713&4294967295,v=R+(y<<14&4294967295|y>>>18),y=I+(R^p&(v^R))+E[0]+3921069994&4294967295,I=v+(y<<20&4294967295|y>>>12),y=p+(v^R&(I^v))+E[5]+3593408605&4294967295,p=I+(y<<5&4294967295|y>>>27),y=R+(I^v&(p^I))+E[10]+38016083&4294967295,R=p+(y<<9&4294967295|y>>>23),y=v+(p^I&(R^p))+E[15]+3634488961&4294967295,v=R+(y<<14&4294967295|y>>>18),y=I+(R^p&(v^R))+E[4]+3889429448&4294967295,I=v+(y<<20&4294967295|y>>>12),y=p+(v^R&(I^v))+E[9]+568446438&4294967295,p=I+(y<<5&4294967295|y>>>27),y=R+(I^v&(p^I))+E[14]+3275163606&4294967295,R=p+(y<<9&4294967295|y>>>23),y=v+(p^I&(R^p))+E[3]+4107603335&4294967295,v=R+(y<<14&4294967295|y>>>18),y=I+(R^p&(v^R))+E[8]+1163531501&4294967295,I=v+(y<<20&4294967295|y>>>12),y=p+(v^R&(I^v))+E[13]+2850285829&4294967295,p=I+(y<<5&4294967295|y>>>27),y=R+(I^v&(p^I))+E[2]+4243563512&4294967295,R=p+(y<<9&4294967295|y>>>23),y=v+(p^I&(R^p))+E[7]+1735328473&4294967295,v=R+(y<<14&4294967295|y>>>18),y=I+(R^p&(v^R))+E[12]+2368359562&4294967295,I=v+(y<<20&4294967295|y>>>12),y=p+(I^v^R)+E[5]+4294588738&4294967295,p=I+(y<<4&4294967295|y>>>28),y=R+(p^I^v)+E[8]+2272392833&4294967295,R=p+(y<<11&4294967295|y>>>21),y=v+(R^p^I)+E[11]+1839030562&4294967295,v=R+(y<<16&4294967295|y>>>16),y=I+(v^R^p)+E[14]+4259657740&4294967295,I=v+(y<<23&4294967295|y>>>9),y=p+(I^v^R)+E[1]+2763975236&4294967295,p=I+(y<<4&4294967295|y>>>28),y=R+(p^I^v)+E[4]+1272893353&4294967295,R=p+(y<<11&4294967295|y>>>21),y=v+(R^p^I)+E[7]+4139469664&4294967295,v=R+(y<<16&4294967295|y>>>16),y=I+(v^R^p)+E[10]+3200236656&4294967295,I=v+(y<<23&4294967295|y>>>9),y=p+(I^v^R)+E[13]+681279174&4294967295,p=I+(y<<4&4294967295|y>>>28),y=R+(p^I^v)+E[0]+3936430074&4294967295,R=p+(y<<11&4294967295|y>>>21),y=v+(R^p^I)+E[3]+3572445317&4294967295,v=R+(y<<16&4294967295|y>>>16),y=I+(v^R^p)+E[6]+76029189&4294967295,I=v+(y<<23&4294967295|y>>>9),y=p+(I^v^R)+E[9]+3654602809&4294967295,p=I+(y<<4&4294967295|y>>>28),y=R+(p^I^v)+E[12]+3873151461&4294967295,R=p+(y<<11&4294967295|y>>>21),y=v+(R^p^I)+E[15]+530742520&4294967295,v=R+(y<<16&4294967295|y>>>16),y=I+(v^R^p)+E[2]+3299628645&4294967295,I=v+(y<<23&4294967295|y>>>9),y=p+(v^(I|~R))+E[0]+4096336452&4294967295,p=I+(y<<6&4294967295|y>>>26),y=R+(I^(p|~v))+E[7]+1126891415&4294967295,R=p+(y<<10&4294967295|y>>>22),y=v+(p^(R|~I))+E[14]+2878612391&4294967295,v=R+(y<<15&4294967295|y>>>17),y=I+(R^(v|~p))+E[5]+4237533241&4294967295,I=v+(y<<21&4294967295|y>>>11),y=p+(v^(I|~R))+E[12]+1700485571&4294967295,p=I+(y<<6&4294967295|y>>>26),y=R+(I^(p|~v))+E[3]+2399980690&4294967295,R=p+(y<<10&4294967295|y>>>22),y=v+(p^(R|~I))+E[10]+4293915773&4294967295,v=R+(y<<15&4294967295|y>>>17),y=I+(R^(v|~p))+E[1]+2240044497&4294967295,I=v+(y<<21&4294967295|y>>>11),y=p+(v^(I|~R))+E[8]+1873313359&4294967295,p=I+(y<<6&4294967295|y>>>26),y=R+(I^(p|~v))+E[15]+4264355552&4294967295,R=p+(y<<10&4294967295|y>>>22),y=v+(p^(R|~I))+E[6]+2734768916&4294967295,v=R+(y<<15&4294967295|y>>>17),y=I+(R^(v|~p))+E[13]+1309151649&4294967295,I=v+(y<<21&4294967295|y>>>11),y=p+(v^(I|~R))+E[4]+4149444226&4294967295,p=I+(y<<6&4294967295|y>>>26),y=R+(I^(p|~v))+E[11]+3174756917&4294967295,R=p+(y<<10&4294967295|y>>>22),y=v+(p^(R|~I))+E[2]+718787259&4294967295,v=R+(y<<15&4294967295|y>>>17),y=I+(R^(v|~p))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+R&4294967295}n.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var I=p-this.blockSize,E=this.B,v=this.h,R=0;R<p;){if(v==0)for(;R<=I;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<p;)if(E[v++]=T.charCodeAt(R++),v==this.blockSize){s(this,E),v=0;break}}else for(;R<p;)if(E[v++]=T[R++],v==this.blockSize){s(this,E),v=0;break}}this.h=v,this.o+=p},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var I=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=I&255,I/=256;for(this.u(T),T=Array(16),p=I=0;4>p;++p)for(var E=0;32>E;E+=8)T[I++]=this.g[p]>>>E&255;return T};function i(T,p){var I=u;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=p(T)}function a(T,p){this.h=p;for(var I=[],E=!0,v=T.length-1;0<=v;v--){var R=T[v]|0;E&&R==p||(I[v]=R,E=!1)}this.g=I}var u={};function c(T){return-128<=T&&128>T?i(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return C(h(-T));for(var p=[],I=1,E=0;T>=I;E++)p[E]=T/I|0,I*=4294967296;return new a(p,0)}function f(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return C(f(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(p,8)),E=g,v=0;v<T.length;v+=8){var R=Math.min(8,T.length-v),y=parseInt(T.substring(v,v+R),p);8>R?(R=h(Math.pow(p,R)),E=E.j(R).add(h(y))):(E=E.j(I),E=E.add(h(y)))}return E}var g=c(0),_=c(1),P=c(16777216);r=a.prototype,r.m=function(){if(N(this))return-C(this).m();for(var T=0,p=1,I=0;I<this.g.length;I++){var E=this.i(I);T+=(0<=E?E:4294967296+E)*p,p*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(b(this))return"0";if(N(this))return"-"+C(this).toString(T);for(var p=h(Math.pow(T,6)),I=this,E="";;){var v=$(I,p).g;I=z(I,v.j(p));var R=((0<I.g.length?I.g[0]:I.h)>>>0).toString(T);if(I=v,b(I))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function b(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function N(T){return T.h==-1}r.l=function(T){return T=z(this,T),N(T)?-1:b(T)?0:1};function C(T){for(var p=T.g.length,I=[],E=0;E<p;E++)I[E]=~T.g[E];return new a(I,~T.h).add(_)}r.abs=function(){return N(this)?C(this):this},r.add=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0,v=0;v<=p;v++){var R=E+(this.i(v)&65535)+(T.i(v)&65535),y=(R>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);E=y>>>16,R&=65535,y&=65535,I[v]=y<<16|R}return new a(I,I[I.length-1]&-2147483648?-1:0)};function z(T,p){return T.add(C(p))}r.j=function(T){if(b(this)||b(T))return g;if(N(this))return N(T)?C(this).j(C(T)):C(C(this).j(T));if(N(T))return C(this.j(C(T)));if(0>this.l(P)&&0>T.l(P))return h(this.m()*T.m());for(var p=this.g.length+T.g.length,I=[],E=0;E<2*p;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(var v=0;v<T.g.length;v++){var R=this.i(E)>>>16,y=this.i(E)&65535,Zt=T.i(v)>>>16,ar=T.i(v)&65535;I[2*E+2*v]+=y*ar,U(I,2*E+2*v),I[2*E+2*v+1]+=R*ar,U(I,2*E+2*v+1),I[2*E+2*v+1]+=y*Zt,U(I,2*E+2*v+1),I[2*E+2*v+2]+=R*Zt,U(I,2*E+2*v+2)}for(E=0;E<p;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=p;E<2*p;E++)I[E]=0;return new a(I,0)};function U(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function B(T,p){this.g=T,this.h=p}function $(T,p){if(b(p))throw Error("division by zero");if(b(T))return new B(g,g);if(N(T))return p=$(C(T),p),new B(C(p.g),C(p.h));if(N(p))return p=$(T,C(p)),new B(C(p.g),p.h);if(30<T.g.length){if(N(T)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var I=_,E=p;0>=E.l(T);)I=J(I),E=J(E);var v=K(I,1),R=K(E,1);for(E=K(E,2),I=K(I,2);!b(E);){var y=R.add(E);0>=y.l(T)&&(v=v.add(I),R=y),E=K(E,1),I=K(I,1)}return p=z(T,v.j(p)),new B(v,p)}for(v=g;0<=T.l(p);){for(I=Math.max(1,Math.floor(T.m()/p.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=h(I),y=R.j(p);N(y)||0<y.l(T);)I-=E,R=h(I),y=R.j(p);b(R)&&(R=_),v=v.add(R),T=z(T,y)}return new B(v,T)}r.A=function(T){return $(this,T).h},r.and=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0;E<p;E++)I[E]=this.i(E)&T.i(E);return new a(I,this.h&T.h)},r.or=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0;E<p;E++)I[E]=this.i(E)|T.i(E);return new a(I,this.h|T.h)},r.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0;E<p;E++)I[E]=this.i(E)^T.i(E);return new a(I,this.h^T.h)};function J(T){for(var p=T.g.length+1,I=[],E=0;E<p;E++)I[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(I,T.h)}function K(T,p){var I=p>>5;p%=32;for(var E=T.g.length-I,v=[],R=0;R<E;R++)v[R]=0<p?T.i(R+I)>>>p|T.i(R+I+1)<<32-p:T.i(R+I);return new a(v,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Fl=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Ee=a}).apply(typeof ac<"u"?ac:typeof self<"u"?self:typeof window<"u"?window:{});var Fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ol,br,Ll,js,Ao,Bl,ql,Ul;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fs=="object"&&Fs];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=e(this);function s(o,l){if(l)t:{var d=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in d))break t;d=d[A]}o=o[o.length-1],m=d[o],l=l(m),l!=m&&l!=null&&t(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,m=!1,A={next:function(){if(!m&&d<o.length){var S=d++;return{value:l(S,o[S]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function g(o,l,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function _(o,l,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,_.apply(null,arguments)}function P(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function b(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,A,S){for(var M=Array(arguments.length-2),et=2;et<arguments.length;et++)M[et-2]=arguments[et];return l.prototype[A].apply(m,M)}}function N(o){const l=o.length;if(0<l){const d=Array(l);for(let m=0;m<l;m++)d[m]=o[m];return d}return[]}function C(o,l){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const A=o.length||0,S=m.length||0;o.length=A+S;for(let M=0;M<S;M++)o[A+M]=m[M]}else o.push(m)}}class z{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function U(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function $(o){return $[" "](o),o}$[" "]=function(){};var J=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function K(o,l,d){for(const m in o)l.call(d,o[m],m,o)}function T(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function p(o){const l={};for(const d in o)l[d]=o[d];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)o[d]=m[d];for(let S=0;S<I.length;S++)d=I[S],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function v(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function R(o){u.setTimeout(()=>{throw o},0)}function y(){var o=Ki;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Zt{constructor(){this.h=this.g=null}add(l,d){const m=ar.get();m.set(l,d),this.h?this.h.next=m:this.g=m,this.h=m}}var ar=new z(()=>new Tf,o=>o.reset());class Tf{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ur,cr=!1,Ki=new Zt,ou=()=>{const o=u.Promise.resolve(void 0);ur=()=>{o.then(Ef)}};var Ef=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){R(d)}var l=ar;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}cr=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pt(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Pt.prototype.h=function(){this.defaultPrevented=!0};var vf=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};u.addEventListener("test",d,l),u.removeEventListener("test",d,l)}catch{}return o}();function lr(o,l){if(Pt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(J){t:{try{$(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:wf[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&lr.aa.h.call(this)}}b(lr,Pt);var wf={2:"touch",3:"pen",4:"mouse"};lr.prototype.h=function(){lr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var _s="closure_listenable_"+(1e6*Math.random()|0),Af=0;function Rf(o,l,d,m,A){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!m,this.ha=A,this.key=++Af,this.da=this.fa=!1}function ys(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Is(o){this.src=o,this.g={},this.h=0}Is.prototype.add=function(o,l,d,m,A){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var M=Qi(o,l,m,A);return-1<M?(l=o[M],d||(l.fa=!1)):(l=new Rf(l,this.src,S,!!m,A),l.fa=d,o.push(l)),l};function $i(o,l){var d=l.type;if(d in o.g){var m=o.g[d],A=Array.prototype.indexOf.call(m,l,void 0),S;(S=0<=A)&&Array.prototype.splice.call(m,A,1),S&&(ys(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Qi(o,l,d,m){for(var A=0;A<o.length;++A){var S=o[A];if(!S.da&&S.listener==l&&S.capture==!!d&&S.ha==m)return A}return-1}var Wi="closure_lm_"+(1e6*Math.random()|0),Hi={};function au(o,l,d,m,A){if(Array.isArray(l)){for(var S=0;S<l.length;S++)au(o,l[S],d,m,A);return null}return d=lu(d),o&&o[_s]?o.K(l,d,h(m)?!!m.capture:!1,A):Pf(o,l,d,!1,m,A)}function Pf(o,l,d,m,A,S){if(!l)throw Error("Invalid event type");var M=h(A)?!!A.capture:!!A,et=Xi(o);if(et||(o[Wi]=et=new Is(o)),d=et.add(l,d,m,M,S),d.proxy)return d;if(m=Vf(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)vf||(A=M),A===void 0&&(A=!1),o.addEventListener(l.toString(),m,A);else if(o.attachEvent)o.attachEvent(cu(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Vf(){function o(d){return l.call(o.src,o.listener,d)}const l=Sf;return o}function uu(o,l,d,m,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)uu(o,l[S],d,m,A);else m=h(m)?!!m.capture:!!m,d=lu(d),o&&o[_s]?(o=o.i,l=String(l).toString(),l in o.g&&(S=o.g[l],d=Qi(S,d,m,A),-1<d&&(ys(S[d]),Array.prototype.splice.call(S,d,1),S.length==0&&(delete o.g[l],o.h--)))):o&&(o=Xi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Qi(l,d,m,A)),(d=-1<o?l[o]:null)&&Yi(d))}function Yi(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[_s])$i(l.i,o);else{var d=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(d,m,o.capture):l.detachEvent?l.detachEvent(cu(d),m):l.addListener&&l.removeListener&&l.removeListener(m),(d=Xi(l))?($i(d,o),d.h==0&&(d.src=null,l[Wi]=null)):ys(o)}}}function cu(o){return o in Hi?Hi[o]:Hi[o]="on"+o}function Sf(o,l){if(o.da)o=!0;else{l=new lr(l,this);var d=o.listener,m=o.ha||o.src;o.fa&&Yi(o),o=d.call(m,l)}return o}function Xi(o){return o=o[Wi],o instanceof Is?o:null}var Ji="__closure_events_fn_"+(1e9*Math.random()>>>0);function lu(o){return typeof o=="function"?o:(o[Ji]||(o[Ji]=function(l){return o.handleEvent(l)}),o[Ji])}function Vt(){le.call(this),this.i=new Is(this),this.M=this,this.F=null}b(Vt,le),Vt.prototype[_s]=!0,Vt.prototype.removeEventListener=function(o,l,d,m){uu(this,o,l,d,m)};function kt(o,l){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new Pt(l,o);else if(l instanceof Pt)l.target=l.target||o;else{var A=l;l=new Pt(m,o),E(l,A)}if(A=!0,d)for(var S=d.length-1;0<=S;S--){var M=l.g=d[S];A=Ts(M,m,!0,l)&&A}if(M=l.g=o,A=Ts(M,m,!0,l)&&A,A=Ts(M,m,!1,l)&&A,d)for(S=0;S<d.length;S++)M=l.g=d[S],A=Ts(M,m,!1,l)&&A}Vt.prototype.N=function(){if(Vt.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],m=0;m<d.length;m++)ys(d[m]);delete o.g[l],o.h--}}this.F=null},Vt.prototype.K=function(o,l,d,m){return this.i.add(String(o),l,!1,d,m)},Vt.prototype.L=function(o,l,d,m){return this.i.add(String(o),l,!0,d,m)};function Ts(o,l,d,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,S=0;S<l.length;++S){var M=l[S];if(M&&!M.da&&M.capture==d){var et=M.listener,vt=M.ha||M.src;M.fa&&$i(o.i,M),A=et.call(vt,m)!==!1&&A}}return A&&!m.defaultPrevented}function hu(o,l,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function du(o){o.g=hu(()=>{o.g=null,o.i&&(o.i=!1,du(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class bf extends le{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:du(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hr(o){le.call(this),this.h=o,this.g={}}b(hr,le);var fu=[];function mu(o){K(o.g,function(l,d){this.g.hasOwnProperty(d)&&Yi(l)},o),o.g={}}hr.prototype.N=function(){hr.aa.N.call(this),mu(this)},hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zi=u.JSON.stringify,Cf=u.JSON.parse,xf=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function to(){}to.prototype.h=null;function gu(o){return o.h||(o.h=o.i())}function pu(){}var dr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eo(){Pt.call(this,"d")}b(eo,Pt);function no(){Pt.call(this,"c")}b(no,Pt);var Fe={},_u=null;function Es(){return _u=_u||new Vt}Fe.La="serverreachability";function yu(o){Pt.call(this,Fe.La,o)}b(yu,Pt);function fr(o){const l=Es();kt(l,new yu(l))}Fe.STAT_EVENT="statevent";function Iu(o,l){Pt.call(this,Fe.STAT_EVENT,o),this.stat=l}b(Iu,Pt);function Mt(o){const l=Es();kt(l,new Iu(l,o))}Fe.Ma="timingevent";function Tu(o,l){Pt.call(this,Fe.Ma,o),this.size=l}b(Tu,Pt);function mr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function gr(){this.g=!0}gr.prototype.xa=function(){this.g=!1};function Df(o,l,d,m,A,S){o.info(function(){if(o.g)if(S)for(var M="",et=S.split("&"),vt=0;vt<et.length;vt++){var X=et[vt].split("=");if(1<X.length){var St=X[0];X=X[1];var bt=St.split("_");M=2<=bt.length&&bt[1]=="type"?M+(St+"="+X+"&"):M+(St+"=redacted&")}}else M=null;else M=S;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+l+`
`+d+`
`+M})}function Nf(o,l,d,m,A,S,M){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+l+`
`+d+`
`+S+" "+M})}function dn(o,l,d,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Mf(o,d)+(m?" "+m:"")})}function kf(o,l){o.info(function(){return"TIMEOUT: "+l})}gr.prototype.info=function(){};function Mf(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var M=1;M<A.length;M++)A[M]=""}}}}return Zi(d)}catch{return l}}var vs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Eu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ro;function ws(){}b(ws,to),ws.prototype.g=function(){return new XMLHttpRequest},ws.prototype.i=function(){return{}},ro=new ws;function he(o,l,d,m){this.j=o,this.i=l,this.l=d,this.R=m||1,this.U=new hr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vu}function vu(){this.i=null,this.g="",this.h=!1}var wu={},so={};function io(o,l,d){o.L=1,o.v=Vs(te(l)),o.m=d,o.P=!0,Au(o,null)}function Au(o,l){o.F=Date.now(),As(o),o.A=te(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Lu(d.i,"t",m),o.C=0,d=o.j.J,o.h=new vu,o.g=nc(o.j,d?l:null,!o.m),0<o.O&&(o.M=new bf(_(o.Y,o,o.g),o.O)),l=o.U,d=o.g,m=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(fu[0]=A.toString()),A=fu);for(var S=0;S<A.length;S++){var M=au(d,A[S],m||l.handleEvent,!1,l.h||l);if(!M)break;l.g[M.key]=M}l=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),fr(),Df(o.i,o.u,o.A,o.l,o.R,o.m)}he.prototype.ca=function(o){o=o.target;const l=this.M;l&&ee(o)==3?l.j():this.Y(o)},he.prototype.Y=function(o){try{if(o==this.g)t:{const bt=ee(this.g);var l=this.g.Ba();const gn=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||Ku(this.g)))){this.J||bt!=4||l==7||(l==8||0>=gn?fr(3):fr(2)),oo(this);var d=this.g.Z();this.X=d;e:if(Ru(this)){var m=Ku(this.g);o="";var A=m.length,S=ee(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Oe(this),pr(this);var M="";break e}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(S&&l==A-1)});m.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=d==200,Nf(this.i,this.u,this.A,this.l,this.R,bt,d),this.o){if(this.T&&!this.K){e:{if(this.g){var et,vt=this.g;if((et=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(et)){var X=et;break e}}X=null}if(d=X)dn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ao(this,d);else{this.o=!1,this.s=3,Mt(12),Oe(this),pr(this);break t}}if(this.P){d=!0;let Gt;for(;!this.J&&this.C<M.length;)if(Gt=Ff(this,M),Gt==so){bt==4&&(this.s=4,Mt(14),d=!1),dn(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==wu){this.s=4,Mt(15),dn(this.i,this.l,M,"[Invalid Chunk]"),d=!1;break}else dn(this.i,this.l,Gt,null),ao(this,Gt);if(Ru(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||M.length!=0||this.h.h||(this.s=1,Mt(16),d=!1),this.o=this.o&&d,!d)dn(this.i,this.l,M,"[Invalid Chunked Response]"),Oe(this),pr(this);else if(0<M.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),mo(St),St.M=!0,Mt(11))}}else dn(this.i,this.l,M,null),ao(this,M);bt==4&&Oe(this),this.o&&!this.J&&(bt==4?Ju(this.j,this):(this.o=!1,As(this)))}else Zf(this.g),d==400&&0<M.indexOf("Unknown SID")?(this.s=3,Mt(12)):(this.s=0,Mt(13)),Oe(this),pr(this)}}}catch{}finally{}};function Ru(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Ff(o,l){var d=o.C,m=l.indexOf(`
`,d);return m==-1?so:(d=Number(l.substring(d,m)),isNaN(d)?wu:(m+=1,m+d>l.length?so:(l=l.slice(m,m+d),o.C=m+d,l)))}he.prototype.cancel=function(){this.J=!0,Oe(this)};function As(o){o.S=Date.now()+o.I,Pu(o,o.I)}function Pu(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=mr(_(o.ba,o),l)}function oo(o){o.B&&(u.clearTimeout(o.B),o.B=null)}he.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(kf(this.i,this.A),this.L!=2&&(fr(),Mt(17)),Oe(this),this.s=2,pr(this)):Pu(this,this.S-o)};function pr(o){o.j.G==0||o.J||Ju(o.j,o)}function Oe(o){oo(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,mu(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function ao(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||uo(d.h,o))){if(!o.K&&uo(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){t:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ns(d),xs(d);else break t;fo(d),Mt(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=mr(_(d.Za,d),6e3));if(1>=bu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Be(d,11)}else if((o.K||d.g==o)&&Ns(d),!U(l))for(A=d.Da.g.parse(l),l=0;l<A.length;l++){let X=A[l];if(d.T=X[0],X=X[1],d.G==2)if(X[0]=="c"){d.K=X[1],d.ia=X[2];const St=X[3];St!=null&&(d.la=St,d.j.info("VER="+d.la));const bt=X[4];bt!=null&&(d.Aa=bt,d.j.info("SVER="+d.Aa));const gn=X[5];gn!=null&&typeof gn=="number"&&0<gn&&(m=1.5*gn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Gt=o.g;if(Gt){const Ms=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ms){var S=m.h;S.g||Ms.indexOf("spdy")==-1&&Ms.indexOf("quic")==-1&&Ms.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(co(S,S.h),S.h=null))}if(m.D){const go=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;go&&(m.ya=go,st(m.I,m.D,go))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var M=o;if(m.qa=ec(m,m.J?m.ia:null,m.W),M.K){Cu(m.h,M);var et=M,vt=m.L;vt&&(et.I=vt),et.B&&(oo(et),As(et)),m.g=M}else Yu(m);0<d.i.length&&Ds(d)}else X[0]!="stop"&&X[0]!="close"||Be(d,7);else d.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Be(d,7):ho(d):X[0]!="noop"&&d.l&&d.l.ta(X),d.v=0)}}fr(4)}catch{}}var Of=class{constructor(o,l){this.g=o,this.map=l}};function Vu(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Su(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function bu(o){return o.h?1:o.g?o.g.size:0}function uo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function co(o,l){o.g?o.g.add(l):o.h=l}function Cu(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Vu.prototype.cancel=function(){if(this.i=xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function xu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return N(o.i)}function Lf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],d=o.length,m=0;m<d;m++)l.push(o[m]);return l}l=[],d=0;for(m in o)l[d++]=o[m];return l}function Bf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const m in o)l[d++]=m;return l}}}function Du(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=Bf(o),m=Lf(o),A=m.length,S=0;S<A;S++)l.call(void 0,m[S],d&&d[S],o)}var Nu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qf(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),A=null;if(0<=m){var S=o[d].substring(0,m);A=o[d].substring(m+1)}else S=o[d];l(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Le(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Le){this.h=o.h,Rs(this,o.j),this.o=o.o,this.g=o.g,Ps(this,o.s),this.l=o.l;var l=o.i,d=new Ir;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),ku(this,d),this.m=o.m}else o&&(l=String(o).match(Nu))?(this.h=!1,Rs(this,l[1]||"",!0),this.o=_r(l[2]||""),this.g=_r(l[3]||"",!0),Ps(this,l[4]),this.l=_r(l[5]||"",!0),ku(this,l[6]||"",!0),this.m=_r(l[7]||"")):(this.h=!1,this.i=new Ir(null,this.h))}Le.prototype.toString=function(){var o=[],l=this.j;l&&o.push(yr(l,Mu,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(yr(l,Mu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(yr(d,d.charAt(0)=="/"?Gf:zf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",yr(d,Kf)),o.join("")};function te(o){return new Le(o)}function Rs(o,l,d){o.j=d?_r(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Ps(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function ku(o,l,d){l instanceof Ir?(o.i=l,$f(o.i,o.h)):(d||(l=yr(l,jf)),o.i=new Ir(l,o.h))}function st(o,l,d){o.i.set(l,d)}function Vs(o){return st(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function _r(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function yr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Uf),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Uf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Mu=/[#\/\?@]/g,zf=/[#\?:]/g,Gf=/[#\?]/g,jf=/[#\?@]/g,Kf=/#/g;function Ir(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function de(o){o.g||(o.g=new Map,o.h=0,o.i&&qf(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=Ir.prototype,r.add=function(o,l){de(this),this.i=null,o=fn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function Fu(o,l){de(o),l=fn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Ou(o,l){return de(o),l=fn(o,l),o.g.has(l)}r.forEach=function(o,l){de(this),this.g.forEach(function(d,m){d.forEach(function(A){o.call(l,A,m,this)},this)},this)},r.na=function(){de(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let m=0;m<l.length;m++){const A=o[m];for(let S=0;S<A.length;S++)d.push(l[m])}return d},r.V=function(o){de(this);let l=[];if(typeof o=="string")Ou(this,o)&&(l=l.concat(this.g.get(fn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},r.set=function(o,l){return de(this),this.i=null,o=fn(this,o),Ou(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Lu(o,l,d){Fu(o,l),0<d.length&&(o.i=null,o.g.set(fn(o,l),N(d)),o.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var m=l[d];const S=encodeURIComponent(String(m)),M=this.V(m);for(m=0;m<M.length;m++){var A=S;M[m]!==""&&(A+="="+encodeURIComponent(String(M[m]))),o.push(A)}}return this.i=o.join("&")};function fn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function $f(o,l){l&&!o.j&&(de(o),o.i=null,o.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&(Fu(this,m),Lu(this,A,d))},o)),o.j=l}function Qf(o,l){const d=new gr;if(u.Image){const m=new Image;m.onload=P(fe,d,"TestLoadImage: loaded",!0,l,m),m.onerror=P(fe,d,"TestLoadImage: error",!1,l,m),m.onabort=P(fe,d,"TestLoadImage: abort",!1,l,m),m.ontimeout=P(fe,d,"TestLoadImage: timeout",!1,l,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function Wf(o,l){const d=new gr,m=new AbortController,A=setTimeout(()=>{m.abort(),fe(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(S=>{clearTimeout(A),S.ok?fe(d,"TestPingServer: ok",!0,l):fe(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),fe(d,"TestPingServer: error",!1,l)})}function fe(o,l,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function Hf(){this.g=new xf}function Yf(o,l,d){const m=d||"";try{Du(o,function(A,S){let M=A;h(A)&&(M=Zi(A)),l.push(m+S+"="+encodeURIComponent(M))})}catch(A){throw l.push(m+"type="+encodeURIComponent("_badmap")),A}}function Ss(o){this.l=o.Ub||null,this.j=o.eb||!1}b(Ss,to),Ss.prototype.g=function(){return new bs(this.l,this.j)},Ss.prototype.i=function(o){return function(){return o}}({});function bs(o,l){Vt.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(bs,Vt),r=bs.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Er(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Er(this)),this.g&&(this.readyState=3,Er(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Tr(this):Er(this),this.readyState==3&&Bu(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,Tr(this))},r.Qa=function(o){this.g&&(this.response=o,Tr(this))},r.ga=function(){this.g&&Tr(this)};function Tr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Er(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Er(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(bs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function qu(o){let l="";return K(o,function(d,m){l+=m,l+=":",l+=d,l+=`\r
`}),l}function lo(o,l,d){t:{for(m in d){var m=!1;break t}m=!0}m||(d=qu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):st(o,l,d))}function ht(o){Vt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(ht,Vt);var Xf=/^https?$/i,Jf=["POST","PUT"];r=ht.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ro.g(),this.v=this.o?gu(this.o):gu(ro),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){Uu(this,S);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const S of m.keys())d.set(S,m.get(S));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Jf,l,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,M]of d)this.g.setRequestHeader(S,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ju(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){Uu(this,S)}};function Uu(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,zu(o),Cs(o)}function zu(o){o.A||(o.A=!0,kt(o,"complete"),kt(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,kt(this,"complete"),kt(this,"abort"),Cs(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cs(this,!0)),ht.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Gu(this):this.bb())},r.bb=function(){Gu(this)};function Gu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ee(o)!=4||o.Z()!=2)){if(o.u&&ee(o)==4)hu(o.Ea,0,o);else if(kt(o,"readystatechange"),ee(o)==4){o.h=!1;try{const M=o.Z();t:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var d;if(!(d=l)){var m;if(m=M===0){var A=String(o.D).match(Nu)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),m=!Xf.test(A?A.toLowerCase():"")}d=m}if(d)kt(o,"complete"),kt(o,"success");else{o.m=6;try{var S=2<ee(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",zu(o)}}finally{Cs(o)}}}}function Cs(o,l){if(o.g){ju(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||kt(o,"ready");try{d.onreadystatechange=m}catch{}}}function ju(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function ee(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<ee(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Cf(l)}};function Ku(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Zf(o){const l={};o=(o.g&&2<=ee(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(U(o[m]))continue;var d=v(o[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=l[A]||[];l[A]=S,S.push(d)}T(l,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function $u(o){this.Aa=0,this.i=[],this.j=new gr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vr("baseRetryDelayMs",5e3,o),this.cb=vr("retryDelaySeedMs",1e4,o),this.Wa=vr("forwardChannelMaxRetries",2,o),this.wa=vr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Vu(o&&o.concurrentRequestLimit),this.Da=new Hf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=$u.prototype,r.la=8,r.G=1,r.connect=function(o,l,d,m){Mt(0),this.W=o,this.H=l||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=ec(this,null,this.W),Ds(this)};function ho(o){if(Qu(o),o.G==3){var l=o.U++,d=te(o.I);if(st(d,"SID",o.K),st(d,"RID",l),st(d,"TYPE","terminate"),wr(o,d),l=new he(o,o.j,l),l.L=2,l.v=Vs(te(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=l.v,d=!0),d||(l.g=nc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),As(l)}tc(o)}function xs(o){o.g&&(mo(o),o.g.cancel(),o.g=null)}function Qu(o){xs(o),o.u&&(u.clearTimeout(o.u),o.u=null),Ns(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Ds(o){if(!Su(o.h)&&!o.s){o.s=!0;var l=o.Ga;ur||ou(),cr||(ur(),cr=!0),Ki.add(l,o),o.B=0}}function tm(o,l){return bu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=mr(_(o.Ga,o,l),Zu(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new he(this,this.j,o);let S=this.o;if(this.S&&(S?(S=p(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)t:{for(var l=0,d=0;d<this.i.length;d++){e:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=d;break t}if(l===4096||d===this.i.length-1){l=d+1;break t}}l=1e3}else l=1e3;l=Hu(this,A,l),d=te(this.I),st(d,"RID",o),st(d,"CVER",22),this.D&&st(d,"X-HTTP-Session-Id",this.D),wr(this,d),S&&(this.O?l="headers="+encodeURIComponent(String(qu(S)))+"&"+l:this.m&&lo(d,this.m,S)),co(this.h,A),this.Ua&&st(d,"TYPE","init"),this.P?(st(d,"$req",l),st(d,"SID","null"),A.T=!0,io(A,d,null)):io(A,d,l),this.G=2}}else this.G==3&&(o?Wu(this,o):this.i.length==0||Su(this.h)||Wu(this))};function Wu(o,l){var d;l?d=l.l:d=o.U++;const m=te(o.I);st(m,"SID",o.K),st(m,"RID",d),st(m,"AID",o.T),wr(o,m),o.m&&o.o&&lo(m,o.m,o.o),d=new he(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Hu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),co(o.h,d),io(d,m,l)}function wr(o,l){o.H&&K(o.H,function(d,m){st(l,m,d)}),o.l&&Du({},function(d,m){st(l,m,d)})}function Hu(o,l,d){d=Math.min(o.i.length,d);var m=o.l?_(o.l.Na,o.l,o):null;t:{var A=o.i;let S=-1;for(;;){const M=["count="+d];S==-1?0<d?(S=A[0].g,M.push("ofs="+S)):S=0:M.push("ofs="+S);let et=!0;for(let vt=0;vt<d;vt++){let X=A[vt].g;const St=A[vt].map;if(X-=S,0>X)S=Math.max(0,A[vt].g-100),et=!1;else try{Yf(St,M,"req"+X+"_")}catch{m&&m(St)}}if(et){m=M.join("&");break t}}}return o=o.i.splice(0,d),l.D=o,m}function Yu(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;ur||ou(),cr||(ur(),cr=!0),Ki.add(l,o),o.v=0}}function fo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=mr(_(o.Fa,o),Zu(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Xu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=mr(_(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Mt(10),xs(this),Xu(this))};function mo(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Xu(o){o.g=new he(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=te(o.qa);st(l,"RID","rpc"),st(l,"SID",o.K),st(l,"AID",o.T),st(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&st(l,"TO",o.ja),st(l,"TYPE","xmlhttp"),wr(o,l),o.m&&o.o&&lo(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Vs(te(l)),d.m=null,d.P=!0,Au(d,o)}r.Za=function(){this.C!=null&&(this.C=null,xs(this),fo(this),Mt(19))};function Ns(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Ju(o,l){var d=null;if(o.g==l){Ns(o),mo(o),o.g=null;var m=2}else if(uo(o.h,l))d=l.D,Cu(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;m=Es(),kt(m,new Tu(m,d)),Ds(o)}else Yu(o);else if(A=l.s,A==3||A==0&&0<l.X||!(m==1&&tm(o,l)||m==2&&fo(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),A){case 1:Be(o,5);break;case 4:Be(o,10);break;case 3:Be(o,6);break;default:Be(o,2)}}}function Zu(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function Be(o,l){if(o.j.info("Error code "+l),l==2){var d=_(o.fb,o),m=o.Xa;const A=!m;m=new Le(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Rs(m,"https"),Vs(m),A?Qf(m.toString(),d):Wf(m.toString(),d)}else Mt(2);o.G=0,o.l&&o.l.sa(l),tc(o),Qu(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function tc(o){if(o.G=0,o.ka=[],o.l){const l=xu(o.h);(l.length!=0||o.i.length!=0)&&(C(o.ka,l),C(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function ec(o,l,d){var m=d instanceof Le?te(d):new Le(d);if(m.g!="")l&&(m.g=l+"."+m.g),Ps(m,m.s);else{var A=u.location;m=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var S=new Le(null);m&&Rs(S,m),l&&(S.g=l),A&&Ps(S,A),d&&(S.l=d),m=S}return d=o.D,l=o.ya,d&&l&&st(m,d,l),st(m,"VER",o.la),wr(o,m),m}function nc(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ht(new Ss({eb:d})):new ht(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function rc(){}r=rc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ks(){}ks.prototype.g=function(o,l){return new Bt(o,l)};function Bt(o,l){Vt.call(this),this.g=new $u(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!U(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!U(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new mn(this)}b(Bt,Vt),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){ho(this.g)},Bt.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Zi(o),o=d);l.i.push(new Of(l.Ya++,o)),l.G==3&&Ds(l)},Bt.prototype.N=function(){this.g.l=null,delete this.j,ho(this.g),delete this.g,Bt.aa.N.call(this)};function sc(o){eo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const d in l){o=d;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}b(sc,eo);function ic(){no.call(this),this.status=1}b(ic,no);function mn(o){this.g=o}b(mn,rc),mn.prototype.ua=function(){kt(this.g,"a")},mn.prototype.ta=function(o){kt(this.g,new sc(o))},mn.prototype.sa=function(o){kt(this.g,new ic)},mn.prototype.ra=function(){kt(this.g,"b")},ks.prototype.createWebChannel=ks.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,Ul=function(){return new ks},ql=function(){return Es()},Bl=Fe,Ao={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vs.NO_ERROR=0,vs.TIMEOUT=8,vs.HTTP_ERROR=6,js=vs,Eu.COMPLETE="complete",Ll=Eu,pu.EventType=dr,dr.OPEN="a",dr.CLOSE="b",dr.ERROR="c",dr.MESSAGE="d",Vt.prototype.listen=Vt.prototype.K,br=pu,ht.prototype.listenOnce=ht.prototype.L,ht.prototype.getLastError=ht.prototype.Ka,ht.prototype.getLastErrorCode=ht.prototype.Ba,ht.prototype.getStatus=ht.prototype.Z,ht.prototype.getResponseJson=ht.prototype.Oa,ht.prototype.getResponseText=ht.prototype.oa,ht.prototype.send=ht.prototype.ea,ht.prototype.setWithCredentials=ht.prototype.Ha,Ol=ht}).apply(typeof Fs<"u"?Fs:typeof self<"u"?self:typeof window<"u"?window:{});const uc="@firebase/firestore",cc="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xn="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new nm("@firebase/firestore");function vn(){return we.logLevel}function sy(r){we.setLogLevel(r)}function x(r,...t){if(we.logLevel<=ne.DEBUG){const e=t.map(Zo);we.debug(`Firestore (${Xn}): ${r}`,...e)}}function ft(r,...t){if(we.logLevel<=ne.ERROR){const e=t.map(Zo);we.error(`Firestore (${Xn}): ${r}`,...e)}}function zt(r,...t){if(we.logLevel<=ne.WARN){const e=t.map(Zo);we.warn(`Firestore (${Xn}): ${r}`,...e)}}function Zo(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,zl(r,n,e)}function zl(r,t,e){let n=`FIRESTORE (${Xn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw ft(n),new Error(n)}function L(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||zl(t,s,n)}function iy(r,t){r||O(57014,t)}function k(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends em{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(It.UNAUTHENTICATED))}shutdown(){}}class gm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class pm{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){L(this.o===void 0,42304);let n=this.i;const s=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let i=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},u=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string",31837,{l:n}),new Gl(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string",2055,{h:t}),new It(t)}}class _m{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=It.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ym{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new _m(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ro{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Im{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,fm(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){L(this.o===void 0,3512);const n=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>n(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ro(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(L(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ro(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class oy{getToken(){return Promise.resolve(new Ro(""))}invalidateToken(){}start(t,e){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Tm(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function G(r,t){return r<t?-1:r>t?1:0}function Po(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),s=t.codePointAt(e);if(n!==s){if(n<128&&s<128)return G(n,s);{const i=ta(),a=Em(i.encode(lc(r,e)),i.encode(lc(t,e)));return a!==0?a:G(n,s)}}e+=n>65535?2:1}return G(r.length,t.length)}function lc(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function Em(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return G(r[e],t[e]);return G(r.length,t.length)}function Sn(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}function Kl(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=-62135596800,dc=1e6;class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(t){return ct.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*dc);return new ct(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<hc)throw new D(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dc}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-hc;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(t){return new q(t)}static min(){return new q(new ct(0,0))}static max(){return new q(new ct(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="__name__";class Kt{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&O(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Kt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Kt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=Kt.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return G(t.length,e.length)}static compareSegments(t,e){const n=Kt.isNumericId(t),s=Kt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Kt.extractNumericId(t).compare(Kt.extractNumericId(e)):Po(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ee.fromString(t.substring(4,t.length-2))}}class W extends Kt{construct(t,e,n){return new W(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new D(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new W(e)}static emptyPath(){return new W([])}}const vm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Kt{construct(t,e,n){return new at(t,e,n)}static isValidIdentifier(t){return vm.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vo}static keyField(){return new at([Vo])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new D(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new D(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new D(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(W.fromString(t))}static fromName(t){return new F(W.fromString(t).popFirst(5))}static empty(){return new F(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new W(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=-1;class Cn{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function So(r){return r.fields.find(t=>t.kind===2)}function Ue(r){return r.fields.filter(t=>t.kind!==2)}function wm(r,t){let e=G(r.collectionGroup,t.collectionGroup);if(e!==0)return e;for(let n=0;n<Math.min(r.fields.length,t.fields.length);++n)if(e=Am(r.fields[n],t.fields[n]),e!==0)return e;return G(r.fields.length,t.fields.length)}Cn.UNKNOWN_ID=-1;class He{constructor(t,e){this.fieldPath=t,this.kind=e}}function Am(r,t){const e=at.comparator(r.fieldPath,t.fieldPath);return e!==0?e:G(r.kind,t.kind)}class xn{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new xn(0,Ut.min())}}function $l(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=q.fromTimestamp(n===1e9?new ct(e+1,0):new ct(e,n));return new Ut(s,F.empty(),t)}function Ql(r){return new Ut(r.readTime,r.key,bn)}class Ut{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ut(q.min(),F.empty(),bn)}static max(){return new Ut(q.max(),F.empty(),bn)}}function ea(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(r.documentKey,t.documentKey),e!==0?e:G(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Wl)throw r;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new w((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof w?e:w.resolve(e)}catch(e){return w.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):w.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):w.reject(e)}static resolve(t){return new w((e,n)=>{e(t)})}static reject(t){return new w((e,n)=>{n(t)})}static waitFor(t){return new w((e,n)=>{let s=0,i=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&e()},c=>n(c))}),a=!0,i===s&&e()})}static or(t){let e=w.resolve(!1);for(const n of t)e=e.next(s=>s?w.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,i)=>{n.push(e.call(this,s,i))}),this.waitFor(n)}static mapArray(t,e){return new w((n,s)=>{const i=t.length,a=new Array(i);let u=0;for(let c=0;c<i;c++){const h=c;e(t[h]).next(f=>{a[h]=f,++u,u===i&&n(a)},f=>s(f))}})}static doWhile(t,e){return new w((n,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="SimpleDb";class yi{static open(t,e,n,s){try{return new yi(e,t.transaction(s,n))}catch(i){throw new Nr(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new Tt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new Nr(t,e.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=na(n.target.error);this.S.reject(new Nr(t,s))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(x(qt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Pm(e)}}class Ht{static delete(t){return x(qt,"Removing database:",t),Ge(um().indexedDB.deleteDatabase(t)).toPromise()}static C(){if(!cm())return!1;if(Ht.F())return!0;const t=ei(),e=Ht.M(t),n=0<e&&e<10,s=Yl(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.O)==="YES"}static N(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.B=n,this.L=null,Ht.M(ei())===12.2&&ft("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(t){return this.db||(x(qt,"Opening database:",this.name),this.db=await new Promise((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new Nr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new D(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new D(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new Nr(t,a))},s.onupgradeneeded=i=>{x(qt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${a.version}`);this.B.q(a,s.transaction,i.oldVersion,this.version).next(()=>{x(qt,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",e=>{const n=e.target;this.L=n.version},{passive:!0})),this.$&&(this.db.onversionchange=e=>this.$(e)),this.db}U(t){this.$=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.k(t);const u=yi.open(this.db,t,i?"readonly":"readwrite",n),c=s(u).next(h=>(u.v(),h)).catch(h=>(u.abort(h),w.reject(h))).toPromise();return c.catch(()=>{}),await u.D,c}catch(u){const c=u,h=c.name!=="FirebaseError"&&a<3;if(x(qt,"Transaction failed with error:",c.message,"Retrying:",h),this.close(),!h)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Yl(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class Rm{constructor(t){this.K=t,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(t){this.K=t}done(){this.W=!0}H(t){this.G=t}delete(){return Ge(this.K.delete())}}class Nr extends D{constructor(t,e){super(V.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function xe(r){return r.name==="IndexedDbTransactionError"}class Pm{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(x(qt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(x(qt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Ge(n)}add(t){return x(qt,"ADD",this.store.name,t,t),Ge(this.store.add(t))}get(t){return Ge(this.store.get(t)).next(e=>(e===void 0&&(e=null),x(qt,"GET",this.store.name,t,e),e))}delete(t){return x(qt,"DELETE",this.store.name,t),Ge(this.store.delete(t))}count(){return x(qt,"COUNT",this.store.name),Ge(this.store.count())}J(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new w((a,u)=>{i.onerror=c=>{u(c.target.error)},i.onsuccess=c=>{a(c.target.result)}})}{const i=this.cursor(n),a=[];return this.Y(i,(u,c)=>{a.push(c)}).next(()=>a)}}Z(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new w((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}})}X(t,e){x(qt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.ee=!1;const s=this.cursor(n);return this.Y(s,(i,a,u)=>u.delete())}te(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.Y(s,e)}ne(t){const e=this.cursor({});return new w((n,s)=>{e.onerror=i=>{const a=na(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}Y(t,e){const n=[];return new w((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const c=new Rm(u),h=e(u.primaryKey,u.value,c);if(h instanceof w){const f=h.catch(g=>(c.done(),w.reject(g)));n.push(f)}c.isDone?s():c.j===null?u.continue():u.continue(c.j)}}).next(()=>w.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.ee?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Ge(r){return new w((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=na(n.target.error);e(s)}})}let fc=!1;function na(r){const t=Ht.M(ei());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new D("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return fc||(fc=!0,setTimeout(()=>{throw n},0)),n}}return r}const kr="IndexBackfiller";class Vm{constructor(t,e){this.asyncQueue=t,this.re=e,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(t){x(kr,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{const e=await this.re.se();x(kr,`Documents written: ${e}`)}catch(e){xe(e)?x(kr,"Ignoring IndexedDB error during index backfill: ",e):await Ce(e)}await this.ie(6e4)})}}class Sm{constructor(t,e){this.localStore=t,this.persistence=e}async se(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.oe(e,t))}oe(t,e){const n=new Set;let s=e,i=!0;return w.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return x(kr,`Processing collection: ${a}`),this._e(t,a,s).next(u=>{s-=u,n.add(a)});i=!1})).next(()=>e-s)}_e(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next(i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this.ae(s,i)).next(u=>(x(kr,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u))).next(()=>a.size)}))}ae(t,e){let n=t;return e.changes.forEach((s,i)=>{const a=Ql(i);ea(a,n)>0&&(n=a)}),new Ut(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ue(n),this.ce=n=>e.writeSequenceNumber(n))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Ft.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=-1;function ns(r){return r==null}function Ur(r){return r===0&&1/r==-1/0}function Xl(r){return typeof r=="number"&&Number.isInteger(r)&&!Ur(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="";function Dt(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=mc(t)),t=bm(r.get(e),t);return mc(t)}function bm(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case ni:e+="";break;default:e+=i}}return e}function mc(r){return r+ni+""}function Qt(r){const t=r.length;if(L(t>=2,64408,{path:r}),t===2)return L(r.charAt(0)===ni&&r.charAt(1)==="",56145,{path:r}),W.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf(ni,i);switch((a<0||a>e)&&O(50515,{path:r}),r.charAt(a+1)){case"":const u=r.substring(i,a);let c;s.length===0?c=u:(s+=u,c=s,s=""),n.push(c);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:O(61167,{path:r})}i=a+2}return new W(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="remoteDocuments",rs="owner",pn="owner",zr="mutationQueues",Cm="userId",jt="mutations",gc="batchId",Qe="userMutationsIndex",pc=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(r,t){return[r,Dt(t)]}function Jl(r,t,e){return[r,Dt(t),e]}const xm={},Dn="documentMutations",ri="remoteDocumentsV14",Dm=["prefixPath","collectionGroup","readTime","documentId"],$s="documentKeyIndex",Nm=["prefixPath","collectionGroup","documentId"],Zl="collectionGroupIndex",km=["collectionGroup","readTime","prefixPath","documentId"],Gr="remoteDocumentGlobal",bo="remoteDocumentGlobalKey",Nn="targets",th="queryTargetsIndex",Mm=["canonicalId","targetId"],kn="targetDocuments",Fm=["targetId","path"],ra="documentTargetsIndex",Om=["path","targetId"],si="targetGlobalKey",Ye="targetGlobal",jr="collectionParents",Lm=["collectionId","parent"],Mn="clientMetadata",Bm="clientId",Ii="bundles",qm="bundleId",Ti="namedQueries",Um="name",sa="indexConfiguration",zm="indexId",Co="collectionGroupIndex",Gm="collectionGroup",Mr="indexState",jm=["indexId","uid"],eh="sequenceNumberIndex",Km=["uid","sequenceNumber"],Fr="indexEntries",$m=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],nh="documentKeyIndex",Qm=["indexId","uid","orderedDocumentKey"],Ei="documentOverlays",Wm=["userId","collectionPath","documentId"],xo="collectionPathOverlayIndex",Hm=["userId","collectionPath","largestBatchId"],rh="collectionGroupOverlayIndex",Ym=["userId","collectionGroup","largestBatchId"],ia="globals",Xm="name",sh=[zr,jt,Dn,ze,Nn,rs,Ye,kn,Mn,Gr,jr,Ii,Ti],Jm=[...sh,Ei],ih=[zr,jt,Dn,ri,Nn,rs,Ye,kn,Mn,Gr,jr,Ii,Ti,Ei],oh=ih,oa=[...oh,sa,Mr,Fr],Zm=oa,ah=[...oa,ia],tg=ah;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends Hl{constructor(t,e){super(),this.he=t,this.currentSequenceNumber=e}}function _t(r,t){const e=k(r);return Ht.N(e.he,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function De(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function uh(r,t){const e=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.push(t(r[n],n,r));return e}function ch(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){this.comparator=t,this.root=e||wt.EMPTY}insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,wt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Os(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Os(this.root,t,this.comparator,!1)}getReverseIterator(){return new Os(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Os(this.root,t,this.comparator,!0)}}class Os{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class wt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??wt.RED,this.left=s??wt.EMPTY,this.right=i??wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new wt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return wt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,n,s,i){return this}insert(t,e,n){return new wt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new yc(this.data.getIterator())}getIteratorFrom(t){return new yc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof tt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new tt(this.comparator);return e.data=t,e}}class yc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function _n(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new Ot([])}unionWith(t){let e=new tt(at.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Sn(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new lh("Invalid base64 string: "+i):i}}(t);return new dt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const eg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function se(r){if(L(!!r,39018),typeof r=="string"){let t=0;const e=eg.exec(r);if(L(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:ot(r.seconds),nanos:ot(r.nanos)}}function ot(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ie(r){return typeof r=="string"?dt.fromBase64String(r):dt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="server_timestamp",dh="__type__",fh="__previous_value__",mh="__local_write_time__";function vi(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[dh])===null||e===void 0?void 0:e.stringValue)===hh}function wi(r){const t=r.mapValue.fields[fh];return vi(t)?wi(t):t}function Kr(r){const t=se(r.mapValue.fields[mh].timestampValue);return new ct(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(t,e,n,s,i,a,u,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const $r="(default)";class Xe{constructor(t,e){this.projectId=t,this.database=e||$r}static empty(){return new Xe("","")}get isDefaultDatabase(){return this.database===$r}isEqual(t){return t instanceof Xe&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="__type__",gh="__max__",Ie={mapValue:{fields:{__type__:{stringValue:gh}}}},ua="__vector__",Fn="value",Qs={nullValue:"NULL_VALUE"};function Ae(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?vi(r)?4:ph(r)?9007199254740991:Ai(r)?10:11:O(28295,{value:r})}function Jt(r,t){if(r===t)return!0;const e=Ae(r);if(e!==Ae(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Kr(r).isEqual(Kr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=se(s.timestampValue),u=se(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,i){return ie(s.bytesValue).isEqual(ie(i.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,i){return ot(s.geoPointValue.latitude)===ot(i.geoPointValue.latitude)&&ot(s.geoPointValue.longitude)===ot(i.geoPointValue.longitude)}(r,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ot(s.integerValue)===ot(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ot(s.doubleValue),u=ot(i.doubleValue);return a===u?Ur(a)===Ur(u):isNaN(a)&&isNaN(u)}return!1}(r,t);case 9:return Sn(r.arrayValue.values||[],t.arrayValue.values||[],Jt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(_c(a)!==_c(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!Jt(a[c],u[c])))return!1;return!0}(r,t);default:return O(52216,{left:r})}}function Qr(r,t){return(r.values||[]).find(e=>Jt(e,t))!==void 0}function Re(r,t){if(r===t)return 0;const e=Ae(r),n=Ae(t);if(e!==n)return G(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return G(r.booleanValue,t.booleanValue);case 2:return function(i,a){const u=ot(i.integerValue||i.doubleValue),c=ot(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(r,t);case 3:return Ic(r.timestampValue,t.timestampValue);case 4:return Ic(Kr(r),Kr(t));case 5:return Po(r.stringValue,t.stringValue);case 6:return function(i,a){const u=ie(i),c=ie(a);return u.compareTo(c)}(r.bytesValue,t.bytesValue);case 7:return function(i,a){const u=i.split("/"),c=a.split("/");for(let h=0;h<u.length&&h<c.length;h++){const f=G(u[h],c[h]);if(f!==0)return f}return G(u.length,c.length)}(r.referenceValue,t.referenceValue);case 8:return function(i,a){const u=G(ot(i.latitude),ot(a.latitude));return u!==0?u:G(ot(i.longitude),ot(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Tc(r.arrayValue,t.arrayValue);case 10:return function(i,a){var u,c,h,f;const g=i.fields||{},_=a.fields||{},P=(u=g[Fn])===null||u===void 0?void 0:u.arrayValue,b=(c=_[Fn])===null||c===void 0?void 0:c.arrayValue,N=G(((h=P==null?void 0:P.values)===null||h===void 0?void 0:h.length)||0,((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Tc(P,b)}(r.mapValue,t.mapValue);case 11:return function(i,a){if(i===Ie.mapValue&&a===Ie.mapValue)return 0;if(i===Ie.mapValue)return 1;if(a===Ie.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const _=Po(c[g],f[g]);if(_!==0)return _;const P=Re(u[c[g]],h[f[g]]);if(P!==0)return P}return G(c.length,f.length)}(r.mapValue,t.mapValue);default:throw O(23264,{Pe:e})}}function Ic(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return G(r,t);const e=se(r),n=se(t),s=G(e.seconds,n.seconds);return s!==0?s:G(e.nanos,n.nanos)}function Tc(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=Re(e[s],n[s]);if(i)return i}return G(e.length,n.length)}function On(r){return No(r)}function No(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=se(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ie(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return F.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=No(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${No(e.fields[a])}`;return s+"}"}(r.mapValue):O(61005,{value:r})}function Ws(r){switch(Ae(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=wi(r);return t?16+Ws(t):16;case 5:return 2*r.stringValue.length;case 6:return ie(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+Ws(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return De(n.fields,(i,a)=>{s+=i.length+Ws(a)}),s}(r.mapValue);default:throw O(13486,{value:r})}}function Je(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function ko(r){return!!r&&"integerValue"in r}function Wr(r){return!!r&&"arrayValue"in r}function Ec(r){return!!r&&"nullValue"in r}function vc(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Hs(r){return!!r&&"mapValue"in r}function Ai(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[aa])===null||e===void 0?void 0:e.stringValue)===ua}function Or(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return De(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Or(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Or(r.arrayValue.values[e]);return t}return Object.assign({},r)}function ph(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===gh}const _h={mapValue:{fields:{[aa]:{stringValue:ua},[Fn]:{arrayValue:{}}}}};function rg(r){return"nullValue"in r?Qs:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Je(Xe.empty(),F.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Ai(r)?_h:{mapValue:{}}:O(35942,{value:r})}function sg(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Je(Xe.empty(),F.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?_h:"mapValue"in r?Ai(r)?{mapValue:{}}:Ie:O(61959,{value:r})}function wc(r,t){const e=Re(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function Ac(r,t){const e=Re(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Hs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Or(e)}setAll(t){let e=at.emptyPath(),n={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const c=this.getFieldsMap(e);this.applyChanges(c,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=Or(a):s.push(u.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Hs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Jt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Hs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){De(e,(s,i)=>t[s]=i);for(const s of n)delete t[s]}clone(){return new At(Or(this.value))}}function yh(r){const t=[];return De(r.fields,(e,n)=>{const s=new at([e]);if(Hs(n)){const i=yh(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Ot(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e,n,s,i,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new it(t,0,q.min(),q.min(),q.min(),At.empty(),0)}static newFoundDocument(t,e,n,s){return new it(t,1,e,q.min(),n,s,0)}static newNoDocument(t,e){return new it(t,2,e,q.min(),q.min(),At.empty(),0)}static newUnknownDocument(t,e){return new it(t,3,e,q.min(),q.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof it&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,e){this.position=t,this.inclusive=e}}function Rc(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=F.comparator(F.fromName(a.referenceValue),e.key):n=Re(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Pc(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Jt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,e="asc"){this.field=t,this.dir=e}}function ig(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{}class H extends Ih{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new og(t,e,n):e==="array-contains"?new cg(t,n):e==="in"?new Rh(t,n):e==="not-in"?new lg(t,n):e==="array-contains-any"?new hg(t,n):new H(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new ag(t,n):new ug(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Re(e,this.value)):e!==null&&Ae(this.value)===Ae(e)&&this.matchesComparison(Re(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Z extends Ih{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Z(t,e)}matches(t){return Ln(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Ln(r){return r.op==="and"}function Mo(r){return r.op==="or"}function ca(r){return Th(r)&&Ln(r)}function Th(r){for(const t of r.filters)if(t instanceof Z)return!1;return!0}function Fo(r){if(r instanceof H)return r.field.canonicalString()+r.op.toString()+On(r.value);if(ca(r))return r.filters.map(t=>Fo(t)).join(",");{const t=r.filters.map(e=>Fo(e)).join(",");return`${r.op}(${t})`}}function Eh(r,t){return r instanceof H?function(n,s){return s instanceof H&&n.op===s.op&&n.field.isEqual(s.field)&&Jt(n.value,s.value)}(r,t):r instanceof Z?function(n,s){return s instanceof Z&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,u)=>i&&Eh(a,s.filters[u]),!0):!1}(r,t):void O(19439)}function vh(r,t){const e=r.filters.concat(t);return Z.create(e,r.op)}function wh(r){return r instanceof H?function(e){return`${e.field.canonicalString()} ${e.op} ${On(e.value)}`}(r):r instanceof Z?function(e){return e.op.toString()+" {"+e.getFilters().map(wh).join(" ,")+"}"}(r):"Filter"}class og extends H{constructor(t,e,n){super(t,e,n),this.key=F.fromName(n.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class ag extends H{constructor(t,e){super(t,"in",e),this.keys=Ah("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ug extends H{constructor(t,e){super(t,"not-in",e),this.keys=Ah("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ah(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>F.fromName(n.referenceValue))}class cg extends H{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Wr(e)&&Qr(e.arrayValue,this.value)}}class Rh extends H{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Qr(this.value.arrayValue,e)}}class lg extends H{constructor(t,e){super(t,"not-in",e)}matches(t){if(Qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Qr(this.value.arrayValue,e)}}class hg extends H{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Wr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Qr(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Ie=null}}function Oo(r,t=null,e=[],n=[],s=null,i=null,a=null){return new dg(r,t,e,n,s,i,a)}function Ze(r){const t=k(r);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Fo(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),ns(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>On(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>On(n)).join(",")),t.Ie=e}return t.Ie}function ss(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!ig(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Eh(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Pc(r.startAt,t.startAt)&&Pc(r.endAt,t.endAt)}function ii(r){return F.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function oi(r,t){return r.filters.filter(e=>e instanceof H&&e.field.isEqual(t))}function Vc(r,t,e){let n=Qs,s=!0;for(const i of oi(r,t)){let a=Qs,u=!0;switch(i.op){case"<":case"<=":a=rg(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=Qs}wc({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];wc({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function Sc(r,t,e){let n=Ie,s=!0;for(const i of oi(r,t)){let a=Ie,u=!0;switch(i.op){case">=":case">":a=sg(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=Ie}Ac({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];Ac({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Ph(r,t,e,n,s,i,a,u){return new oe(r,t,e,n,s,i,a,u)}function Jn(r){return new oe(r)}function bc(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function la(r){return r.collectionGroup!==null}function Pn(r){const t=k(r);if(t.Ee===null){t.Ee=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ee.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new tt(at.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(u=u.add(h.field))})}),u})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ee.push(new Hr(i,n))}),e.has(at.keyField().canonicalString())||t.Ee.push(new Hr(at.keyField(),n))}return t.Ee}function Nt(r){const t=k(r);return t.de||(t.de=Sh(t,Pn(r))),t.de}function Vh(r){const t=k(r);return t.Ae||(t.Ae=Sh(t,r.explicitOrderBy)),t.Ae}function Sh(r,t){if(r.limitType==="F")return Oo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Hr(s.field,i)});const e=r.endAt?new Pe(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Pe(r.startAt.position,r.startAt.inclusive):null;return Oo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Lo(r,t){const e=r.filters.concat([t]);return new oe(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function ai(r,t,e){return new oe(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function is(r,t){return ss(Nt(r),Nt(t))&&r.limitType===t.limitType}function bh(r){return`${Ze(Nt(r))}|lt:${r.limitType}`}function wn(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>wh(s)).join(", ")}]`),ns(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>On(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>On(s)).join(",")),`Target(${n})`}(Nt(r))}; limitType=${r.limitType})`}function os(r,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,t)&&function(n,s){for(const i of Pn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,u,c){const h=Rc(a,u,c);return a.inclusive?h<=0:h<0}(n.startAt,Pn(n),s)||n.endAt&&!function(a,u,c){const h=Rc(a,u,c);return a.inclusive?h>=0:h>0}(n.endAt,Pn(n),s))}(r,t)}function Ch(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function xh(r){return(t,e)=>{let n=!1;for(const s of Pn(r)){const i=fg(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function fg(r,t,e){const n=r.field.isKeyField()?F.comparator(t.key,e.key):function(i,a,u){const c=a.data.field(i),h=u.data.field(i);return c!==null&&h!==null?Re(c,h):O(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){De(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return ch(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=new rt(F.comparator);function Lt(){return mg}const Dh=new rt(F.comparator);function Cr(...r){let t=Dh;for(const e of r)t=t.insert(e.key,e);return t}function Nh(r){let t=Dh;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Wt(){return Lr()}function kh(){return Lr()}function Lr(){return new ae(r=>r.toString(),(r,t)=>r.isEqual(t))}const gg=new rt(F.comparator),pg=new tt(F.comparator);function j(...r){let t=pg;for(const e of r)t=t.add(e);return t}const _g=new tt(G);function ha(){return _g}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ur(t)?"-0":t}}function Mh(r){return{integerValue:""+r}}function Fh(r,t){return Xl(t)?Mh(t):da(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this._=void 0}}function yg(r,t,e){return r instanceof Bn?function(s,i){const a={fields:{[dh]:{stringValue:hh},[mh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&vi(i)&&(i=wi(i)),i&&(a.fields[fh]=i),{mapValue:a}}(e,t):r instanceof tn?Lh(r,t):r instanceof en?Bh(r,t):function(s,i){const a=Oh(s,i),u=Cc(a)+Cc(s.Re);return ko(a)&&ko(s.Re)?Mh(u):da(s.serializer,u)}(r,t)}function Ig(r,t,e){return r instanceof tn?Lh(r,t):r instanceof en?Bh(r,t):e}function Oh(r,t){return r instanceof qn?function(n){return ko(n)||function(i){return!!i&&"doubleValue"in i}(n)}(t)?t:{integerValue:0}:null}class Bn extends Ri{}class tn extends Ri{constructor(t){super(),this.elements=t}}function Lh(r,t){const e=qh(t);for(const n of r.elements)e.some(s=>Jt(s,n))||e.push(n);return{arrayValue:{values:e}}}class en extends Ri{constructor(t){super(),this.elements=t}}function Bh(r,t){let e=qh(t);for(const n of r.elements)e=e.filter(s=>!Jt(s,n));return{arrayValue:{values:e}}}class qn extends Ri{constructor(t,e){super(),this.serializer=t,this.Re=e}}function Cc(r){return ot(r.integerValue||r.doubleValue)}function qh(r){return Wr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t,e){this.field=t,this.transform=e}}function Tg(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof tn&&s instanceof tn||n instanceof en&&s instanceof en?Sn(n.elements,s.elements,Jt):n instanceof qn&&s instanceof qn?Jt(n.Re,s.Re):n instanceof Bn&&s instanceof Bn}(r.transform,t.transform)}class Eg{constructor(t,e){this.version=t,this.transformResults=e}}class ut{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ut}static exists(t){return new ut(void 0,t)}static updateTime(t){return new ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ys(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Pi{}function Uh(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new tr(r.key,ut.none()):new Zn(r.key,r.data,ut.none());{const e=r.data,n=At.empty();let s=new tt(at.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new ue(r.key,n,new Ot(s.toArray()),ut.none())}}function vg(r,t,e){r instanceof Zn?function(s,i,a){const u=s.value.clone(),c=Dc(s.fieldTransforms,i,a.transformResults);u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,t,e):r instanceof ue?function(s,i,a){if(!Ys(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=Dc(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(zh(s)),c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Br(r,t,e,n){return r instanceof Zn?function(i,a,u,c){if(!Ys(i.precondition,a))return u;const h=i.value.clone(),f=Nc(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(r,t,e,n):r instanceof ue?function(i,a,u,c){if(!Ys(i.precondition,a))return u;const h=Nc(i.fieldTransforms,c,a),f=a.data;return f.setAll(zh(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(r,t,e,n):function(i,a,u){return Ys(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,t,e)}function wg(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=Oh(n.transform,s||null);i!=null&&(e===null&&(e=At.empty()),e.set(n.field,i))}return e||null}function xc(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Sn(n,s,(i,a)=>Tg(i,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Zn extends Pi{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ue extends Pi{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function zh(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Dc(r,t,e){const n=new Map;L(r.length===e.length,32656,{Ve:e.length,me:r.length});for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,Ig(a,u,e[s]))}return n}function Nc(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,yg(i,a,t))}return n}class tr extends Pi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fa extends Pi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&vg(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Br(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Br(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=kh();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const c=Uh(a,u);c!==null&&n.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(q.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&Sn(this.mutations,t.mutations,(e,n)=>xc(e,n))&&Sn(this.baseMutations,t.baseMutations,(e,n)=>xc(e,n))}}class ga{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){L(t.mutations.length===n.length,58842,{fe:t.mutations.length,ge:n.length});let s=function(){return gg}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new ga(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,e,n){this.alias=t,this.aggregateType=e,this.fieldPath=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,Y;function jh(r){switch(r){case V.OK:return O(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return O(15467,{code:r})}}function Kh(r){if(r===void 0)return ft("GRPC error has no .code"),V.UNKNOWN;switch(r){case pt.OK:return V.OK;case pt.CANCELLED:return V.CANCELLED;case pt.UNKNOWN:return V.UNKNOWN;case pt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case pt.INTERNAL:return V.INTERNAL;case pt.UNAVAILABLE:return V.UNAVAILABLE;case pt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case pt.NOT_FOUND:return V.NOT_FOUND;case pt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case pt.ABORTED:return V.ABORTED;case pt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case pt.DATA_LOSS:return V.DATA_LOSS;default:return O(39323,{code:r})}}(Y=pt||(pt={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui=null;/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=new Ee([4294967295,4294967295],0);function kc(r){const t=ta().encode(r),e=new Fl;return e.update(t),new Uint8Array(e.digest())}function Mc(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Ee([e,n],0),new Ee([s,i],0)]}class _a{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new xr(`Invalid padding: ${e}`);if(n<0)throw new xr(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new xr(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new xr(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=Ee.fromNumber(this.pe)}we(t,e,n){let s=t.add(e.multiply(Ee.fromNumber(n)));return s.compare(Rg)===1&&(s=new Ee([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=kc(t),[n,s]=Mc(e);for(let i=0;i<this.hashCount;i++){const a=this.we(n,s,i);if(!this.be(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new _a(i,s,e);return n.forEach(u=>a.insert(u)),a}insert(t){if(this.pe===0)return;const e=kc(t),[n,s]=Mc(e);for(let i=0;i<this.hashCount;i++){const a=this.we(n,s,i);this.Se(a)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class xr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,cs.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new us(q.min(),s,new rt(G),Lt(),j())}}class cs{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new cs(n,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t,e,n,s){this.De=t,this.removedTargetIds=e,this.key=n,this.ve=s}}class $h{constructor(t,e){this.targetId=t,this.Ce=e}}class Qh{constructor(t,e,n=dt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Fc{constructor(){this.Fe=0,this.Me=Oc(),this.xe=dt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=j(),e=j(),n=j();return this.Me.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:O(38017,{changeType:i})}}),new cs(this.xe,this.Oe,t,e,n)}Qe(){this.Ne=!1,this.Me=Oc()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,L(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Pg{constructor(t){this.ze=t,this.je=new Map,this.He=Lt(),this.Je=Ls(),this.Ye=Ls(),this.Ze=new rt(G)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const n=this.rt(e);switch(t.state){case 0:this.it(e)&&n.ke(t.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(t.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(e);break;case 3:this.it(e)&&(n.Ge(),n.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),n.ke(t.resumeToken));break;default:O(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((n,s)=>{this.it(s)&&e(s)})}ot(t){const e=t.targetId,n=t.Ce.count,s=this._t(e);if(s){const i=s.target;if(ii(i))if(n===0){const a=new F(i.path);this.tt(e,a,it.newNoDocument(a,q.min()))}else L(n===1,20013,{expectedCount:n});else{const a=this.ut(e);if(a!==n){const u=this.ct(t),c=u?this.lt(u,t,a):1;if(c!==0){this.st(e);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,h)}ui==null||ui.ht(function(f,g,_,P,b){var N,C,z,U,B,$;const J={localCacheCount:f,existenceFilterCount:g.count,databaseId:_.database,projectId:_.projectId},K=g.unchangedNames;return K&&(J.bloomFilter={applied:b===0,hashCount:(N=K==null?void 0:K.hashCount)!==null&&N!==void 0?N:0,bitmapLength:(U=(z=(C=K==null?void 0:K.bits)===null||C===void 0?void 0:C.bitmap)===null||z===void 0?void 0:z.length)!==null&&U!==void 0?U:0,padding:($=(B=K==null?void 0:K.bits)===null||B===void 0?void 0:B.padding)!==null&&$!==void 0?$:0,mightContain:T=>{var p;return(p=P==null?void 0:P.mightContain(T))!==null&&p!==void 0&&p}}),J}(a,t.Ce,this.ze.Pt(),u,c))}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=ie(n).toUint8Array()}catch(c){if(c instanceof lh)return zt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new _a(a,s,i)}catch(c){return zt(c instanceof xr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.pe===0?null:u}lt(t,e,n){return e.Ce.count===n-this.Tt(t,e.targetId)?0:2}Tt(t,e){const n=this.ze.getRemoteKeysForTarget(e);let s=0;return n.forEach(i=>{const a=this.ze.Pt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.tt(e,i,null),s++)}),s}It(t){const e=new Map;this.je.forEach((i,a)=>{const u=this._t(a);if(u){if(i.current&&ii(u.target)){const c=new F(u.target.path);this.Et(c).has(a)||this.dt(a,c)||this.tt(a,c,it.newNoDocument(c,t))}i.Le&&(e.set(a,i.qe()),i.Qe())}});let n=j();this.Ye.forEach((i,a)=>{let u=!0;a.forEachWhile(c=>{const h=this._t(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.He.forEach((i,a)=>a.setReadTime(t));const s=new us(t,e,this.Ze,this.He,n);return this.He=Lt(),this.Je=Ls(),this.Ye=Ls(),this.Ze=new rt(G),s}et(t,e){if(!this.it(t))return;const n=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,n),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,n){if(!this.it(t))return;const s=this.rt(t);this.dt(t,e)?s.$e(e,1):s.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),n&&(this.He=this.He.insert(e,n))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new Fc,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new tt(G),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new tt(G),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||x("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Fc),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function Ls(){return new rt(F.comparator)}function Oc(){return new rt(F.comparator)}const Vg={asc:"ASCENDING",desc:"DESCENDING"},Sg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bg={and:"AND",or:"OR"};class Cg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Bo(r,t){return r.useProto3Json||ns(t)?t:{value:t}}function Un(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Wh(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function xg(r,t){return Un(r,t.toTimestamp())}function mt(r){return L(!!r,49232),q.fromTimestamp(function(e){const n=se(e);return new ct(n.seconds,n.nanos)}(r))}function ya(r,t){return qo(r,t).canonicalString()}function qo(r,t){const e=function(s){return new W(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Hh(r){const t=W.fromString(r);return L(id(t),10190,{key:t.toString()}),t}function Yr(r,t){return ya(r.databaseId,t.path)}function Yt(r,t){const e=Hh(t);if(e.get(1)!==r.databaseId.projectId)throw new D(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new D(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new F(Jh(e))}function Yh(r,t){return ya(r.databaseId,t)}function Xh(r){const t=Hh(r);return t.length===4?W.emptyPath():Jh(t)}function Uo(r){return new W(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Jh(r){return L(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Lc(r,t,e){return{name:Yr(r,t),fields:e.value.mapValue.fields}}function Zh(r,t,e){const n=Yt(r,t.name),s=mt(t.updateTime),i=t.createTime?mt(t.createTime):q.min(),a=new At({mapValue:{fields:t.fields}}),u=it.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function Dg(r,t){return"found"in t?function(n,s){L(!!s.found,43571),s.found.name,s.found.updateTime;const i=Yt(n,s.found.name),a=mt(s.found.updateTime),u=s.found.createTime?mt(s.found.createTime):q.min(),c=new At({mapValue:{fields:s.found.fields}});return it.newFoundDocument(i,a,u,c)}(r,t):"missing"in t?function(n,s){L(!!s.missing,3894),L(!!s.readTime,22933);const i=Yt(n,s.missing),a=mt(s.readTime);return it.newNoDocument(i,a)}(r,t):O(7234,{result:t})}function Ng(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:O(39313,{state:h})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(L(f===void 0||typeof f=="string",58123),dt.fromBase64String(f||"")):(L(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),dt.fromUint8Array(f||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(h){const f=h.code===void 0?V.UNKNOWN:Kh(h.code);return new D(f,h.message||"")}(a);e=new Qh(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Yt(r,n.document.name),i=mt(n.document.updateTime),a=n.document.createTime?mt(n.document.createTime):q.min(),u=new At({mapValue:{fields:n.document.fields}}),c=it.newFoundDocument(s,i,a,u),h=n.targetIds||[],f=n.removedTargetIds||[];e=new Xs(h,f,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Yt(r,n.document),i=n.readTime?mt(n.readTime):q.min(),a=it.newNoDocument(s,i),u=n.removedTargetIds||[];e=new Xs([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Yt(r,n.document),i=n.removedTargetIds||[];e=new Xs([],i,s,null)}else{if(!("filter"in t))return O(11601,{Vt:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new Ag(s,i),u=n.targetId;e=new $h(u,a)}}return e}function Xr(r,t){let e;if(t instanceof Zn)e={update:Lc(r,t.key,t.value)};else if(t instanceof tr)e={delete:Yr(r,t.key)};else if(t instanceof ue)e={update:Lc(r,t.key,t.data),updateMask:Bg(t.fieldMask)};else{if(!(t instanceof fa))return O(16599,{ft:t.type});e={verify:Yr(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(i,a){const u=a.transform;if(u instanceof Bn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof tn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof en)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof qn)return{fieldPath:a.field.canonicalString(),increment:u.Re};throw O(20930,{transform:a.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:xg(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O(27497)}(r,t.precondition)),e}function zo(r,t){const e=t.currentDocument?function(i){return i.updateTime!==void 0?ut.updateTime(mt(i.updateTime)):i.exists!==void 0?ut.exists(i.exists):ut.none()}(t.currentDocument):ut.none(),n=t.updateTransforms?t.updateTransforms.map(s=>function(a,u){let c=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),c=new Bn;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];c=new tn(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];c=new en(f)}else"increment"in u?c=new qn(a,u.increment):O(16584,{proto:u});const h=at.fromServerFormat(u.fieldPath);return new as(h,c)}(r,s)):[];if(t.update){t.update.name;const s=Yt(r,t.update.name),i=new At({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(c){const h=c.fieldPaths||[];return new Ot(h.map(f=>at.fromServerFormat(f)))}(t.updateMask);return new ue(s,i,a,e,n)}return new Zn(s,i,e,n)}if(t.delete){const s=Yt(r,t.delete);return new tr(s,e)}if(t.verify){const s=Yt(r,t.verify);return new fa(s,e)}return O(1463,{proto:t})}function kg(r,t){return r&&r.length>0?(L(t!==void 0,14353),r.map(e=>function(s,i){let a=s.updateTime?mt(s.updateTime):mt(i);return a.isEqual(q.min())&&(a=mt(i)),new Eg(a,s.transformResults||[])}(e,t))):[]}function td(r,t){return{documents:[Yh(r,t.path)]}}function Vi(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Yh(r,s);const i=function(h){if(h.length!==0)return sd(Z.create(h,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:_e(_.field),direction:Fg(_.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Bo(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{gt:e,parent:s}}function ed(r,t,e,n){const{gt:s,parent:i}=Vi(r,t),a={},u=[];let c=0;return e.forEach(h=>{const f=n?h.alias:"aggregate_"+c++;a[f]=h.alias,h.aggregateType==="count"?u.push({alias:f,count:{}}):h.aggregateType==="avg"?u.push({alias:f,avg:{field:_e(h.fieldPath)}}):h.aggregateType==="sum"&&u.push({alias:f,sum:{field:_e(h.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:u,structuredQuery:s.structuredQuery},parent:s.parent},yt:a,parent:i}}function nd(r){let t=Xh(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){L(n===1,65062);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=function(g){const _=rd(g);return _ instanceof Z&&ca(_)?_.getFilters():[_]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(_=>function(b){return new Hr(An(b.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(_))}(e.orderBy));let u=null;e.limit&&(u=function(g){let _;return _=typeof g=="object"?g.value:g,ns(_)?null:_}(e.limit));let c=null;e.startAt&&(c=function(g){const _=!!g.before,P=g.values||[];return new Pe(P,_)}(e.startAt));let h=null;return e.endAt&&(h=function(g){const _=!g.before,P=g.values||[];return new Pe(P,_)}(e.endAt)),Ph(t,s,a,i,u,"F",c,h)}function Mg(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function rd(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=An(e.unaryFilter.field);return H.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=An(e.unaryFilter.field);return H.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=An(e.unaryFilter.field);return H.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=An(e.unaryFilter.field);return H.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(r):r.fieldFilter!==void 0?function(e){return H.create(An(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Z.create(e.compositeFilter.filters.map(n=>rd(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(e.compositeFilter.op))}(r):O(30097,{filter:r})}function Fg(r){return Vg[r]}function Og(r){return Sg[r]}function Lg(r){return bg[r]}function _e(r){return{fieldPath:r.canonicalString()}}function An(r){return at.fromServerFormat(r.fieldPath)}function sd(r){return r instanceof H?function(e){if(e.op==="=="){if(vc(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NAN"}};if(Ec(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(vc(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NOT_NAN"}};if(Ec(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_e(e.field),op:Og(e.op),value:e.value}}}(r):r instanceof Z?function(e){const n=e.getFilters().map(s=>sd(s));return n.length===1?n[0]:{compositeFilter:{op:Lg(e.op),filters:n}}}(r):O(54877,{filter:r})}function Bg(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function id(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e,n,s,i=q.min(),a=q.min(),u=dt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(t){return new re(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t){this.wt=t}}function qg(r,t){let e;if(t.document)e=Zh(r.wt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=F.fromSegments(t.noDocument.path),s=rn(t.noDocument.readTime);e=it.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return O(56709);{const n=F.fromSegments(t.unknownDocument.path),s=rn(t.unknownDocument.version);e=it.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime(function(s){const i=new ct(s[0],s[1]);return q.fromTimestamp(i)}(t.readTime)),e}function Bc(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:ci(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(i,a){return{name:Yr(i,a.key),fields:a.data.value.mapValue.fields,updateTime:Un(i,a.version.toTimestamp()),createTime:Un(i,a.createTime.toTimestamp())}}(r.wt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:nn(t.version)};else{if(!t.isUnknownDocument())return O(57904,{document:t});n.unknownDocument={path:e.path.toArray(),version:nn(t.version)}}return n}function ci(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function nn(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function rn(r){const t=new ct(r.seconds,r.nanoseconds);return q.fromTimestamp(t)}function je(r,t){const e=(t.baseMutations||[]).map(i=>zo(r.wt,i));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map(i=>zo(r.wt,i)),s=ct.fromMillis(t.localWriteTimeMs);return new ma(t.batchId,s,e,n)}function Dr(r){const t=rn(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?rn(r.lastLimboFreeSnapshotVersion):q.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){const a=i.documents.length;return L(a===1,1966,{count:a}),Nt(Jn(Xh(i.documents[0])))}(r.query):function(i){return Nt(nd(i))}(r.query),new re(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,dt.fromBase64String(r.resumeToken))}function ad(r,t){const e=nn(t.snapshotVersion),n=nn(t.lastLimboFreeSnapshotVersion);let s;s=ii(t.target)?td(r.wt,t.target):Vi(r.wt,t.target).gt;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Ze(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Ia(r){const t=nd({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ai(t,t.limit,"L"):t}function po(r,t){return new pa(t.largestBatchId,zo(r.wt,t.overlayMutation))}function qc(r,t){const e=t.path.lastSegment();return[r,Dt(t.path.popLast()),e]}function Uc(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:nn(n.readTime),documentKey:Dt(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{getBundleMetadata(t,e){return zc(t).get(e).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:rn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(t,e){return zc(t).put(function(s){return{bundleId:s.id,createTime:nn(mt(s.createTime)),version:s.version}}(e))}getNamedQuery(t,e){return Gc(t).get(e).next(n=>{if(n)return function(i){return{name:i.name,query:Ia(i.bundledQuery),readTime:rn(i.readTime)}}(n)})}saveNamedQuery(t,e){return Gc(t).put(function(s){return{name:s.name,readTime:nn(mt(s.readTime)),bundledQuery:s.bundledQuery}}(e))}}function zc(r){return _t(r,Ii)}function Gc(r){return _t(r,Ti)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,e){this.serializer=t,this.userId=e}static bt(t,e){const n=e.uid||"";return new Si(t,n)}getOverlay(t,e){return Ar(t).get(qc(this.userId,e)).next(n=>n?po(this.serializer,n):null)}getOverlays(t,e){const n=Wt();return w.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){const s=[];return n.forEach((i,a)=>{const u=new pa(e,a);s.push(this.St(t,u))}),w.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach(a=>s.add(Dt(a.getCollectionPath())));const i=[];return s.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(Ar(t).X(xo,u))}),w.waitFor(i)}getOverlaysForCollection(t,e,n){const s=Wt(),i=Dt(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Ar(t).J(xo,a).next(u=>{for(const c of u){const h=po(this.serializer,c);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(t,e,n,s){const i=Wt();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Ar(t).te({index:rh,range:u},(c,h,f)=>{const g=po(this.serializer,h);i.size()<s||g.largestBatchId===a?(i.set(g.getKey(),g),a=g.largestBatchId):f.done()}).next(()=>i)}St(t,e){return Ar(t).put(function(s,i,a){const[u,c,h]=qc(i,a.mutation.key);return{userId:i,collectionPath:c,documentId:h,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Xr(s.wt,a.mutation)}}(this.serializer,this.userId,e))}}function Ar(r){return _t(r,Ei)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{Dt(t){return _t(t,ia)}getSessionToken(t){return this.Dt(t).get("sessionToken").next(e=>{const n=e==null?void 0:e.value;return n?dt.fromUint8Array(n):dt.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.Dt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(){}vt(t,e){this.Ct(t,e),e.Ft()}Ct(t,e){if("nullValue"in t)this.Mt(e,5);else if("booleanValue"in t)this.Mt(e,10),e.xt(t.booleanValue?1:0);else if("integerValue"in t)this.Mt(e,15),e.xt(ot(t.integerValue));else if("doubleValue"in t){const n=ot(t.doubleValue);isNaN(n)?this.Mt(e,13):(this.Mt(e,15),Ur(n)?e.xt(0):e.xt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Mt(e,20),typeof n=="string"&&(n=se(n)),e.Ot(`${n.seconds||""}`),e.xt(n.nanos||0)}else if("stringValue"in t)this.Nt(t.stringValue,e),this.Bt(e);else if("bytesValue"in t)this.Mt(e,30),e.Lt(ie(t.bytesValue)),this.Bt(e);else if("referenceValue"in t)this.kt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Mt(e,45),e.xt(n.latitude||0),e.xt(n.longitude||0)}else"mapValue"in t?ph(t)?this.Mt(e,Number.MAX_SAFE_INTEGER):Ai(t)?this.qt(t.mapValue,e):(this.Qt(t.mapValue,e),this.Bt(e)):"arrayValue"in t?(this.$t(t.arrayValue,e),this.Bt(e)):O(19022,{Ut:t})}Nt(t,e){this.Mt(e,25),this.Kt(t,e)}Kt(t,e){e.Ot(t)}Qt(t,e){const n=t.fields||{};this.Mt(e,55);for(const s of Object.keys(n))this.Nt(s,e),this.Ct(n[s],e)}qt(t,e){var n,s;const i=t.fields||{};this.Mt(e,53);const a=Fn,u=((s=(n=i[a].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.Mt(e,15),e.xt(ot(u)),this.Nt(a,e),this.Ct(i[a],e)}$t(t,e){const n=t.values||[];this.Mt(e,50);for(const s of n)this.Ct(s,e)}kt(t,e){this.Mt(e,37),F.fromName(t).path.forEach(n=>{this.Mt(e,60),this.Kt(n,e)})}Mt(t,e){t.xt(e)}Bt(t){t.xt(2)}}Ke.Wt=new Ke;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=255;function Gg(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function jc(r){const t=64-function(n){let s=0;for(let i=0;i<8;++i){const a=Gg(255&n[i]);if(s+=a,a!==8)break}return s}(r);return Math.ceil(t/8)}class jg{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.zt(n.value),n=e.next();this.jt()}Ht(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Jt(n.value),n=e.next();this.Yt()}Zt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.zt(n);else if(n<2048)this.zt(960|n>>>6),this.zt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.zt(480|n>>>12),this.zt(128|63&n>>>6),this.zt(128|63&n);else{const s=e.codePointAt(0);this.zt(240|s>>>18),this.zt(128|63&s>>>12),this.zt(128|63&s>>>6),this.zt(128|63&s)}}this.jt()}Xt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=e.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Yt()}en(t){const e=this.tn(t),n=jc(e);this.nn(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}rn(t){const e=this.tn(t),n=jc(e);this.nn(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}sn(){this._n(yn),this._n(255)}an(){this.un(yn),this.un(255)}reset(){this.position=0}seed(t){this.nn(t.length),this.buffer.set(t,this.position),this.position+=t.length}cn(){return this.buffer.slice(0,this.position)}tn(t){const e=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}zt(t){const e=255&t;e===0?(this._n(0),this._n(255)):e===yn?(this._n(yn),this._n(0)):this._n(e)}Jt(t){const e=255&t;e===0?(this.un(0),this.un(255)):e===yn?(this.un(yn),this.un(0)):this.un(t)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(t){this.nn(1),this.buffer[this.position++]=t}un(t){this.nn(1),this.buffer[this.position++]=~t}nn(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class Kg{constructor(t){this.ln=t}Lt(t){this.ln.Gt(t)}Ot(t){this.ln.Zt(t)}xt(t){this.ln.en(t)}Ft(){this.ln.sn()}}class $g{constructor(t){this.ln=t}Lt(t){this.ln.Ht(t)}Ot(t){this.ln.Xt(t)}xt(t){this.ln.rn(t)}Ft(){this.ln.an()}}class Rr{constructor(){this.ln=new jg,this.hn=new Kg(this.ln),this.Pn=new $g(this.ln)}seed(t){this.ln.seed(t)}Tn(t){return t===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,e,n,s){this.In=t,this.En=e,this.dn=n,this.An=s}Rn(){const t=this.An.length,e=t===0||this.An[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.An,0),e!==t?n.set([0],this.An.length):++n[n.length-1],new $e(this.In,this.En,this.dn,n)}Vn(t,e,n){return{indexId:this.In,uid:t,arrayValue:Js(this.dn),directionalValue:Js(this.An),orderedDocumentKey:Js(e),documentKey:n.path.toArray()}}mn(t,e,n){const s=this.Vn(t,e,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function me(r,t){let e=r.In-t.In;return e!==0?e:(e=Kc(r.dn,t.dn),e!==0?e:(e=Kc(r.An,t.An),e!==0?e:F.comparator(r.En,t.En)))}function Kc(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}function Js(r){return Ml()?function(e){let n="";for(let s=0;s<e.length;s++)n+=String.fromCharCode(e[s]);return n}(r):r}function $c(r){return typeof r!="string"?r:function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(r)}class Qc{constructor(t){this.fn=new tt((e,n)=>at.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.gn=t.orderBy,this.pn=[];for(const e of t.filters){const n=e;n.isInequality()?this.fn=this.fn.add(n):this.pn.push(n)}}get yn(){return this.fn.size>1}wn(t){if(L(t.collectionGroup===this.collectionId,49279),this.yn)return!1;const e=So(t);if(e!==void 0&&!this.bn(e))return!1;const n=Ue(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.bn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.fn.size>0){const u=this.fn.getIterator().getNext();if(!s.has(u.field.canonicalString())){const c=n[i];if(!this.Sn(u,c)||!this.Dn(this.gn[a++],c))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.gn.length||!this.Dn(this.gn[a++],u))return!1}return!0}vn(){if(this.yn)return null;let t=new tt(at.comparator);const e=[];for(const n of this.pn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new He(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new He(n.field,0))}for(const n of this.gn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new He(n.field,n.dir==="asc"?0:1)));return new Cn(Cn.UNKNOWN_ID,this.collectionId,e,xn.empty())}bn(t){for(const e of this.pn)if(this.Sn(e,t))return!0;return!1}Sn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}Dn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(r){var t,e;if(L(r instanceof H||r instanceof Z,20012),r instanceof H){if(r instanceof Rh){const s=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(i=>H.create(r.field,"==",i)))||[];return Z.create(s,"or")}return r}const n=r.filters.map(s=>ud(s));return Z.create(n,r.op)}function Qg(r){if(r.getFilters().length===0)return[];const t=Ko(ud(r));return L(cd(t),7391),Go(t)||jo(t)?[t]:t.getFilters()}function Go(r){return r instanceof H}function jo(r){return r instanceof Z&&ca(r)}function cd(r){return Go(r)||jo(r)||function(e){if(e instanceof Z&&Mo(e)){for(const n of e.getFilters())if(!Go(n)&&!jo(n))return!1;return!0}return!1}(r)}function Ko(r){if(L(r instanceof H||r instanceof Z,34018),r instanceof H)return r;if(r.filters.length===1)return Ko(r.filters[0]);const t=r.filters.map(n=>Ko(n));let e=Z.create(t,r.op);return e=li(e),cd(e)?e:(L(e instanceof Z,64498),L(Ln(e),40251),L(e.filters.length>1,57927),e.filters.reduce((n,s)=>Ta(n,s)))}function Ta(r,t){let e;return L(r instanceof H||r instanceof Z,38388),L(t instanceof H||t instanceof Z,25473),e=r instanceof H?t instanceof H?function(s,i){return Z.create([s,i],"and")}(r,t):Wc(r,t):t instanceof H?Wc(t,r):function(s,i){if(L(s.filters.length>0&&i.filters.length>0,48005),Ln(s)&&Ln(i))return vh(s,i.getFilters());const a=Mo(s)?s:i,u=Mo(s)?i:s,c=a.filters.map(h=>Ta(h,u));return Z.create(c,"or")}(r,t),li(e)}function Wc(r,t){if(Ln(t))return vh(t,r.getFilters());{const e=t.filters.map(n=>Ta(r,n));return Z.create(e,"or")}}function li(r){if(L(r instanceof H||r instanceof Z,11850),r instanceof H)return r;const t=r.getFilters();if(t.length===1)return li(t[0]);if(Th(r))return r;const e=t.map(s=>li(s)),n=[];return e.forEach(s=>{s instanceof H?n.push(s):s instanceof Z&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:Z.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.Cn=new Ea}addToCollectionParentIndex(t,e){return this.Cn.add(e),w.resolve()}getCollectionParents(t,e){return w.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return w.resolve()}deleteFieldIndex(t,e){return w.resolve()}deleteAllFieldIndexes(t){return w.resolve()}createTargetIndexes(t,e){return w.resolve()}getDocumentsMatchingTarget(t,e){return w.resolve(null)}getIndexType(t,e){return w.resolve(0)}getFieldIndexes(t,e){return w.resolve([])}getNextCollectionGroupToUpdate(t){return w.resolve(null)}getMinOffset(t,e){return w.resolve(Ut.min())}getMinOffsetFromCollectionGroup(t,e){return w.resolve(Ut.min())}updateCollectionGroup(t,e,n){return w.resolve()}updateIndexEntries(t,e){return w.resolve()}}class Ea{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new tt(W.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new tt(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="IndexedDbIndexManager",Bs=new Uint8Array(0);class Hg{constructor(t,e){this.databaseId=e,this.Fn=new Ea,this.Mn=new ae(n=>Ze(n),(n,s)=>ss(n,s)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.Fn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener(()=>{this.Fn.add(e)});const i={collectionId:n,parent:Dt(s)};return Yc(t).put(i)}return w.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[Kl(e),""],!1,!0);return Yc(t).J(s).next(i=>{for(const a of i){if(a.collectionId!==e)break;n.push(Qt(a.parent))}return n})}addFieldIndex(t,e){const n=Pr(t),s=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=Tn(t);return i.next(u=>{a.put(Uc(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=Pr(t),s=Tn(t),i=In(t);return n.delete(e.indexId).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=Pr(t),n=In(t),s=Tn(t);return e.X().next(()=>n.X()).next(()=>s.X())}createTargetIndexes(t,e){return w.forEach(this.xn(e),n=>this.getIndexType(t,n).next(s=>{if(s===0||s===1){const i=new Qc(n).vn();if(i!=null)return this.addFieldIndex(t,i)}}))}getDocumentsMatchingTarget(t,e){const n=In(t);let s=!0;const i=new Map;return w.forEach(this.xn(e),a=>this.On(t,a).next(u=>{s&&(s=!!u),i.set(a,u)})).next(()=>{if(s){let a=j();const u=[];return w.forEach(i,(c,h)=>{x(Hc,`Using index ${function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map($=>`${$.fieldPath}:${$.kind}`).join(",")}`}(c)} to execute ${Ze(e)}`);const f=function(B,$){const J=So($);if(J===void 0)return null;for(const K of oi(B,J.fieldPath))switch(K.op){case"array-contains-any":return K.value.arrayValue.values||[];case"array-contains":return[K.value]}return null}(h,c),g=function(B,$){const J=new Map;for(const K of Ue($))for(const T of oi(B,K.fieldPath))switch(T.op){case"==":case"in":J.set(K.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return J.set(K.fieldPath.canonicalString(),T.value),Array.from(J.values())}return null}(h,c),_=function(B,$){const J=[];let K=!0;for(const T of Ue($)){const p=T.kind===0?Vc(B,T.fieldPath,B.startAt):Sc(B,T.fieldPath,B.startAt);J.push(p.value),K&&(K=p.inclusive)}return new Pe(J,K)}(h,c),P=function(B,$){const J=[];let K=!0;for(const T of Ue($)){const p=T.kind===0?Sc(B,T.fieldPath,B.endAt):Vc(B,T.fieldPath,B.endAt);J.push(p.value),K&&(K=p.inclusive)}return new Pe(J,K)}(h,c),b=this.Nn(c,h,_),N=this.Nn(c,h,P),C=this.Bn(c,h,g),z=this.Ln(c.indexId,f,b,_.inclusive,N,P.inclusive,C);return w.forEach(z,U=>n.Z(U,e.limit).next(B=>{B.forEach($=>{const J=F.fromSegments($.documentKey);a.has(J)||(a=a.add(J),u.push(J))})}))}).next(()=>u)}return w.resolve(null)})}xn(t){let e=this.Mn.get(t);return e||(t.filters.length===0?e=[t]:e=Qg(Z.create(t.filters,"and")).map(n=>Oo(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.Mn.set(t,e),e)}Ln(t,e,n,s,i,a,u){const c=(e!=null?e.length:1)*Math.max(n.length,i.length),h=c/(e!=null?e.length:1),f=[];for(let g=0;g<c;++g){const _=e?this.kn(e[g/h]):Bs,P=this.qn(t,_,n[g%h],s),b=this.Qn(t,_,i[g%h],a),N=u.map(C=>this.qn(t,_,C,!0));f.push(...this.createRange(P,b,N))}return f}qn(t,e,n,s){const i=new $e(t,F.empty(),e,n);return s?i:i.Rn()}Qn(t,e,n,s){const i=new $e(t,F.empty(),e,n);return s?i.Rn():i}On(t,e){const n=new Qc(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next(i=>{let a=null;for(const u of i)n.wn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(t,e){let n=2;const s=this.xn(e);return w.forEach(s,i=>this.On(t,i).next(a=>{a?n!==0&&a.fields.length<function(c){let h=new tt(at.comparator),f=!1;for(const g of c.filters)for(const _ of g.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const g of c.orderBy)g.field.isKeyField()||(h=h.add(g.field));return h.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&s.length>1&&n===2?1:n)}$n(t,e){const n=new Rr;for(const s of Ue(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.Tn(s.kind);Ke.Wt.vt(i,a)}return n.cn()}kn(t){const e=new Rr;return Ke.Wt.vt(t,e.Tn(0)),e.cn()}Un(t,e){const n=new Rr;return Ke.Wt.vt(Je(this.databaseId,e),n.Tn(function(i){const a=Ue(i);return a.length===0?0:a[a.length-1].kind}(t))),n.cn()}Bn(t,e,n){if(n===null)return[];let s=[];s.push(new Rr);let i=0;for(const a of Ue(t)){const u=n[i++];for(const c of s)if(this.Kn(e,a.fieldPath)&&Wr(u))s=this.Wn(s,a,u);else{const h=c.Tn(a.kind);Ke.Wt.vt(u,h)}}return this.Gn(s)}Nn(t,e,n){return this.Bn(t,e,n.position)}Gn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].cn();return e}Wn(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const c=new Rr;c.seed(u.cn()),Ke.Wt.vt(a,c.Tn(e.kind)),i.push(c)}return i}Kn(t,e){return!!t.filters.find(n=>n instanceof H&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=Pr(t),s=Tn(t);return(e?n.J(Co,IDBKeyRange.bound(e,e)):n.J()).next(i=>{const a=[];return w.forEach(i,u=>s.get([u.indexId,this.uid]).next(c=>{a.push(function(f,g){const _=g?new xn(g.sequenceNumber,new Ut(rn(g.readTime),new F(Qt(g.documentKey)),g.largestBatchId)):xn.empty(),P=f.fields.map(([b,N])=>new He(at.fromServerFormat(b),N));return new Cn(f.indexId,f.collectionGroup,P,_)}(u,c))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:G(n.collectionGroup,s.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const s=Pr(t),i=Tn(t);return this.zn(t).next(a=>s.J(Co,IDBKeyRange.bound(e,e)).next(u=>w.forEach(u,c=>i.put(Uc(c.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return w.forEach(e,(s,i)=>{const a=n.get(s.collectionGroup);return(a?w.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next(u=>(n.set(s.collectionGroup,u),w.forEach(u,c=>this.jn(t,s,c).next(h=>{const f=this.Hn(i,c);return h.isEqual(f)?w.resolve():this.Jn(t,i,c,h,f)}))))})}Yn(t,e,n,s){return In(t).put(s.Vn(this.uid,this.Un(n,e.key),e.key))}Zn(t,e,n,s){return In(t).delete(s.mn(this.uid,this.Un(n,e.key),e.key))}jn(t,e,n){const s=In(t);let i=new tt(me);return s.te({index:nh,range:IDBKeyRange.only([n.indexId,this.uid,Js(this.Un(n,e))])},(a,u)=>{i=i.add(new $e(n.indexId,e,$c(u.arrayValue),$c(u.directionalValue)))}).next(()=>i)}Hn(t,e){let n=new tt(me);const s=this.$n(e,t);if(s==null)return n;const i=So(e);if(i!=null){const a=t.data.field(i.fieldPath);if(Wr(a))for(const u of a.arrayValue.values||[])n=n.add(new $e(e.indexId,t.key,this.kn(u),s))}else n=n.add(new $e(e.indexId,t.key,Bs,s));return n}Jn(t,e,n,s,i){x(Hc,"Updating index entries for document '%s'",e.key);const a=[];return function(c,h,f,g,_){const P=c.getIterator(),b=h.getIterator();let N=_n(P),C=_n(b);for(;N||C;){let z=!1,U=!1;if(N&&C){const B=f(N,C);B<0?U=!0:B>0&&(z=!0)}else N!=null?U=!0:z=!0;z?(g(C),C=_n(b)):U?(_(N),N=_n(P)):(N=_n(P),C=_n(b))}}(s,i,me,u=>{a.push(this.Yn(t,e,n,u))},u=>{a.push(this.Zn(t,e,n,u))}),w.waitFor(a)}zn(t){let e=1;return Tn(t).te({index:eh,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),e=s.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,u)=>me(a,u)).filter((a,u,c)=>!u||me(a,c[u-1])!==0);const s=[];s.push(t);for(const a of n){const u=me(a,t),c=me(a,e);if(u===0)s[0]=t.Rn();else if(u>0&&c<0)s.push(a),s.push(a.Rn());else if(c>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Xn(s[a],s[a+1]))return[];const u=s[a].mn(this.uid,Bs,F.empty()),c=s[a+1].mn(this.uid,Bs,F.empty());i.push(IDBKeyRange.bound(u,c))}return i}Xn(t,e){return me(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Xc)}getMinOffset(t,e){return w.mapArray(this.xn(e),n=>this.On(t,n).next(s=>s||O(44426))).next(Xc)}}function Yc(r){return _t(r,jr)}function In(r){return _t(r,Fr)}function Pr(r){return _t(r,sa)}function Tn(r){return _t(r,Mr)}function Xc(r){L(r.length!==0,28825);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;ea(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Ut(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ld=41943040;class xt{static withCacheSize(t){return new xt(t,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(r,t,e){const n=r.store(jt),s=r.store(Dn),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const c=n.te({range:a},(f,g,_)=>(u++,_.delete()));i.push(c.next(()=>{L(u===1,47070,{batchId:e.batchId})}));const h=[];for(const f of e.mutations){const g=Jl(t,f.key.path,e.batchId);i.push(s.delete(g)),h.push(f.key)}return w.waitFor(i).next(()=>h)}function hi(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw O(14731);t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(ld,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);class bi{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.er={}}static bt(t,e,n,s){L(t.uid!=="",64387);const i=t.isAuthenticated()?t.uid:"";return new bi(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ge(t).te({index:Qe,range:n},(s,i,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,s){const i=Rn(t),a=ge(t);return a.add({}).next(u=>{L(typeof u=="number",49019);const c=new ma(u,e,n,s),h=function(P,b,N){const C=N.baseMutations.map(U=>Xr(P.wt,U)),z=N.mutations.map(U=>Xr(P.wt,U));return{userId:b,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:C,mutations:z}}(this.serializer,this.userId,c),f=[];let g=new tt((_,P)=>G(_.canonicalString(),P.canonicalString()));for(const _ of s){const P=Jl(this.userId,_.key.path,u);g=g.add(_.key.path.popLast()),f.push(a.put(h)),f.push(i.put(P,xm))}return g.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(t,_))}),t.addOnCommittedListener(()=>{this.er[u]=c.keys()}),w.waitFor(f).next(()=>c)})}lookupMutationBatch(t,e){return ge(t).get(e).next(n=>n?(L(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:e}),je(this.serializer,n)):null)}tr(t,e){return this.er[e]?w.resolve(this.er[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const s=n.keys();return this.er[e]=s,s}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return ge(t).te({index:Qe,range:s},(a,u,c)=>{u.userId===this.userId&&(L(u.batchId>=n,47524,{nr:n}),i=je(this.serializer,u)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=ve;return ge(t).te({index:Qe,range:e,reverse:!0},(s,i,a)=>{n=i.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,ve],[this.userId,Number.POSITIVE_INFINITY]);return ge(t).J(Qe,e).next(n=>n.map(s=>je(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Ks(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return Rn(t).te({range:s},(a,u,c)=>{const[h,f,g]=a,_=Qt(f);if(h===this.userId&&e.path.isEqual(_))return ge(t).get(g).next(P=>{if(!P)throw O(61480,{rr:a,batchId:g});L(P.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:P.userId,batchId:g}),i.push(je(this.serializer,P))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new tt(G);const s=[];return e.forEach(i=>{const a=Ks(this.userId,i.path),u=IDBKeyRange.lowerBound(a),c=Rn(t).te({range:u},(h,f,g)=>{const[_,P,b]=h,N=Qt(P);_===this.userId&&i.path.isEqual(N)?n=n.add(b):g.done()});s.push(c)}),w.waitFor(s).next(()=>this.ir(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=Ks(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new tt(G);return Rn(t).te({range:a},(c,h,f)=>{const[g,_,P]=c,b=Qt(_);g===this.userId&&n.isPrefixOf(b)?b.length===s&&(u=u.add(P)):f.done()}).next(()=>this.ir(t,u))}ir(t,e){const n=[],s=[];return e.forEach(i=>{s.push(ge(t).get(i).next(a=>{if(a===null)throw O(35274,{batchId:i});L(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:i}),n.push(je(this.serializer,a))}))}),w.waitFor(s).next(()=>n)}removeMutationBatch(t,e){return hd(t.he,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.sr(e.batchId)}),w.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))}sr(t){delete this.er[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return w.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),s=[];return Rn(t).te({range:n},(i,a,u)=>{if(i[0]===this.userId){const c=Qt(i[1]);s.push(c)}else u.done()}).next(()=>{L(s.length===0,56720,{_r:s.map(i=>i.canonicalString())})})})}containsKey(t,e){return dd(t,this.userId,e)}ar(t){return fd(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:ve,lastStreamToken:""})}}function dd(r,t,e){const n=Ks(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return Rn(r).te({range:i,ee:!0},(u,c,h)=>{const[f,g,_]=u;f===t&&g===s&&(a=!0),h.done()}).next(()=>a)}function ge(r){return _t(r,jt)}function Rn(r){return _t(r,Dn)}function fd(r){return _t(r,zr)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new sn(0)}static lr(){return new sn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.hr(t).next(e=>{const n=new sn(e.highestTargetId);return e.highestTargetId=n.next(),this.Pr(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.hr(t).next(e=>q.fromTimestamp(new ct(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.hr(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.hr(t).next(s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.Pr(t,s)))}addTargetData(t,e){return this.Tr(t,e).next(()=>this.hr(t).next(n=>(n.targetCount+=1,this.Ir(e,n),this.Pr(t,n))))}updateTargetData(t,e){return this.Tr(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>En(t).delete(e.targetId)).next(()=>this.hr(t)).next(n=>(L(n.targetCount>0,8065),n.targetCount-=1,this.Pr(t,n)))}removeTargets(t,e,n){let s=0;const i=[];return En(t).te((a,u)=>{const c=Dr(u);c.sequenceNumber<=e&&n.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(t,c)))}).next(()=>w.waitFor(i)).next(()=>s)}forEachTarget(t,e){return En(t).te((n,s)=>{const i=Dr(s);e(i)})}hr(t){return Zc(t).get(si).next(e=>(L(e!==null,2888),e))}Pr(t,e){return Zc(t).put(si,e)}Tr(t,e){return En(t).put(ad(this.serializer,e))}Ir(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.hr(t).next(e=>e.targetCount)}getTargetData(t,e){const n=Ze(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return En(t).te({range:s,index:th},(a,u,c)=>{const h=Dr(u);ss(e,h.target)&&(i=h,c.done())}).next(()=>i)}addMatchingKeys(t,e,n){const s=[],i=ye(t);return e.forEach(a=>{const u=Dt(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))}),w.waitFor(s)}removeMatchingKeys(t,e,n){const s=ye(t);return w.forEach(e,i=>{const a=Dt(i.path);return w.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])})}removeMatchingKeysForTargetId(t,e){const n=ye(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=ye(t);let i=j();return s.te({range:n,ee:!0},(a,u,c)=>{const h=Qt(a[1]),f=new F(h);i=i.add(f)}).next(()=>i)}containsKey(t,e){const n=Dt(e.path),s=IDBKeyRange.bound([n],[Kl(n)],!1,!0);let i=0;return ye(t).te({index:ra,ee:!0,range:s},([a,u],c,h)=>{a!==0&&(i++,h.done())}).next(()=>i>0)}Rt(t,e){return En(t).get(e).next(n=>n?Dr(n):null)}}function En(r){return _t(r,Nn)}function Zc(r){return _t(r,Ye)}function ye(r){return _t(r,kn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="LruGarbageCollector",md=1048576;function el([r,t],[e,n]){const s=G(r,e);return s===0?G(t,n):s}class Xg{constructor(t){this.Er=t,this.buffer=new tt(el),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();el(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class gd{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){x(tl,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){xe(e)?x(tl,"Ignoring IndexedDB error during garbage collection: ",e):await Ce(e)}await this.mr(3e5)})}}class Jg{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return w.resolve(Ft.le);const n=new Xg(e);return this.gr.forEachTarget(t,s=>n.Rr(s.sequenceNumber)).next(()=>this.gr.yr(t,s=>n.Rr(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.gr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Jc)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jc):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let n,s,i,a,u,c,h;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s))).next(g=>(n=g,u=Date.now(),this.removeTargets(t,n,e))).next(g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(g=>(h=Date.now(),vn()<=ne.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(c-u)+`ms
	Removed ${g} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function pd(r,t){return new Jg(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(t,e){this.db=t,this.garbageCollector=pd(this,e)}pr(t){const e=this.br(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}br(t){let e=0;return this.yr(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}yr(t,e){return this.Sr(t,(n,s)=>e(s))}addReference(t,e,n){return qs(t,n)}removeReference(t,e,n){return qs(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return qs(t,e)}Dr(t,e){return function(s,i){let a=!1;return fd(s).ne(u=>dd(s,u,i).next(c=>(c&&(a=!0),w.resolve(!c)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Sr(t,(a,u)=>{if(u<=e){const c=this.Dr(t,a).next(h=>{if(!h)return i++,n.getEntry(t,a).next(()=>(n.removeEntry(a,q.min()),ye(t).delete(function(g){return[0,Dt(g.path)]}(a))))});s.push(c)}}).next(()=>w.waitFor(s)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return qs(t,e)}Sr(t,e){const n=ye(t);let s,i=Ft.le;return n.te({index:ra},([a,u],{path:c,sequenceNumber:h})=>{a===0?(i!==Ft.le&&e(new F(Qt(s)),i),i=h,s=c):i=Ft.le}).next(()=>{i!==Ft.le&&e(new F(Qt(s)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function qs(r,t){return ye(r).put(function(n,s){return{targetId:0,path:Dt(n.path),sequenceNumber:s}}(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.changes=new ae(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,it.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?w.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return qe(t).put(n)}removeEntry(t,e,n){return qe(t).delete(function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],ci(a),u[u.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.vr(t,n)))}getEntry(t,e){let n=it.newInvalidDocument(e);return qe(t).te({index:$s,range:IDBKeyRange.only(Vr(e))},(s,i)=>{n=this.Cr(e,i)}).next(()=>n)}Fr(t,e){let n={size:0,document:it.newInvalidDocument(e)};return qe(t).te({index:$s,range:IDBKeyRange.only(Vr(e))},(s,i)=>{n={document:this.Cr(e,i),size:hi(i)}}).next(()=>n)}getEntries(t,e){let n=Lt();return this.Mr(t,e,(s,i)=>{const a=this.Cr(s,i);n=n.insert(s,a)}).next(()=>n)}Or(t,e){let n=Lt(),s=new rt(F.comparator);return this.Mr(t,e,(i,a)=>{const u=this.Cr(i,a);n=n.insert(i,u),s=s.insert(i,hi(a))}).next(()=>({documents:n,Nr:s}))}Mr(t,e,n){if(e.isEmpty())return w.resolve();let s=new tt(sl);e.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(Vr(s.first()),Vr(s.last())),a=s.getIterator();let u=a.getNext();return qe(t).te({index:$s,range:i},(c,h,f)=>{const g=F.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;u&&sl(u,g)<0;)n(u,null),u=a.getNext();u&&u.isEqual(g)&&(n(u,h),u=a.hasNext()?a.getNext():null),u?f.H(Vr(u)):f.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),ci(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return qe(t).J(IDBKeyRange.bound(u,c,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=Lt();for(const g of h){const _=this.Cr(F.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);_.isFoundDocument()&&(os(e,_)||s.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(t,e,n,s){let i=Lt();const a=rl(e,n),u=rl(e,Ut.max());return qe(t).te({index:Zl,range:IDBKeyRange.bound(a,u,!0)},(c,h,f)=>{const g=this.Cr(F.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(g.key,g),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(t){return new ep(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return nl(t).get(bo).next(e=>(L(!!e,20021),e))}vr(t,e){return nl(t).put(bo,e)}Cr(t,e){if(e){const n=qg(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(q.min())))return n}return it.newInvalidDocument(t)}}function yd(r){return new tp(r)}class ep extends _d{constructor(t,e){super(),this.Br=t,this.trackRemovals=e,this.Lr=new ae(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(t){const e=[];let n=0,s=new tt((i,a)=>G(i.canonicalString(),a.canonicalString()));return this.changes.forEach((i,a)=>{const u=this.Lr.get(i);if(e.push(this.Br.removeEntry(t,i,u.readTime)),a.isValidDocument()){const c=Bc(this.Br.serializer,a);s=s.add(i.path.popLast());const h=hi(c);n+=h-u.size,e.push(this.Br.addEntry(t,i,c))}else if(n-=u.size,this.trackRemovals){const c=Bc(this.Br.serializer,a.convertToNoDocument(q.min()));e.push(this.Br.addEntry(t,i,c))}}),s.forEach(i=>{e.push(this.Br.indexManager.addToCollectionParentIndex(t,i))}),e.push(this.Br.updateMetadata(t,n)),w.waitFor(e)}getFromCache(t,e){return this.Br.Fr(t,e).next(n=>(this.Lr.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.Br.Or(t,e).next(({documents:n,Nr:s})=>(s.forEach((i,a)=>{this.Lr.set(i,{size:a,readTime:n.get(i).readTime})}),n))}}function nl(r){return _t(r,Gr)}function qe(r){return _t(r,ri)}function Vr(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function rl(r,t){const e=t.documentKey.path.toArray();return[r,ci(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function sl(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=G(e[i],n[i]),s)return s;return s=G(e.length,n.length),s||(s=G(e[e.length-2],n[n.length-2]),s||G(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&Br(n.mutation,s,Ot.empty(),ct.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,j()).next(()=>n))}getLocalViewOfDocuments(t,e,n=j()){const s=Wt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(i=>{let a=Cr();return i.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=Wt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,j()))}populateOverlays(t,e,n){const s=[];return n.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,n,s){let i=Lt();const a=Lr(),u=function(){return Lr()}();return e.forEach((c,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ue)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Br(f.mutation,h,f.mutation.getFieldMask(),ct.now())):a.set(h.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),e.forEach((h,f)=>{var g;return u.set(h,new np(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),u))}recalculateAndSaveOverlays(t,e){const n=Lr();let s=new rt((a,u)=>a-u),i=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(c=>{const h=e.get(c);if(h===null)return;let f=n.get(c)||Ot.empty();f=u.applyToLocalView(h,f),n.set(c,f);const g=(s.get(u.batchId)||j()).add(c);s=s.insert(u.batchId,g)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),h=c.key,f=c.value,g=kh();f.forEach(_=>{if(!i.has(_)){const P=Uh(e.get(_),n.get(_));P!==null&&g.set(_,P),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,g))}return w.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):la(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):w.resolve(Wt());let u=bn,c=i;return a.next(h=>w.forEach(h,(f,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(f)?w.resolve():this.remoteDocumentCache.getEntry(t,f).next(_=>{c=c.insert(f,_)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,c,h,j())).next(f=>({batchId:u,changes:Nh(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(n=>{let s=Cr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=Cr();return this.indexManager.getCollectionParents(t,i).next(u=>w.forEach(u,c=>{const h=function(g,_){return new oe(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,n,s).next(f=>{f.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,it.newInvalidDocument(f)))});let u=Cr();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&Br(f.mutation,h,Ot.empty(),ct.now()),os(e,h)&&(u=u.insert(c,h))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return w.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:mt(s.createTime)}}(e)),w.resolve()}getNamedQuery(t,e){return w.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(s){return{name:s.name,query:Ia(s.bundledQuery),readTime:mt(s.readTime)}}(e)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this.overlays=new rt(F.comparator),this.Qr=new Map}getOverlay(t,e){return w.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Wt();return w.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,i)=>{this.St(t,e,i)}),w.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Qr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(n)),w.resolve()}getOverlaysForCollection(t,e,n){const s=Wt(),i=e.length+1,a=new F(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,h=c.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return w.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new rt((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=Wt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const u=Wt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>u.set(h,f)),!(u.size()>=s)););return w.resolve(u)}St(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(n.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new pa(e,n));let i=this.Qr.get(e);i===void 0&&(i=j(),this.Qr.set(e,i)),this.Qr.set(e,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(t){return w.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,w.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.$r=new tt(yt.Ur),this.Kr=new tt(yt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const n=new yt(t,e);this.$r=this.$r.add(n),this.Kr=this.Kr.add(n)}Gr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.zr(new yt(t,e))}jr(t,e){t.forEach(n=>this.removeReference(n,e))}Hr(t){const e=new F(new W([])),n=new yt(e,t),s=new yt(e,t+1),i=[];return this.Kr.forEachInRange([n,s],a=>{this.zr(a),i.push(a.key)}),i}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new F(new W([])),n=new yt(e,t),s=new yt(e,t+1);let i=j();return this.Kr.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new yt(t,0),n=this.$r.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class yt{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return F.comparator(t.key,e.key)||G(t.Zr,e.Zr)}static Wr(t,e){return G(t.Zr,e.Zr)||F.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new tt(yt.Ur)}checkEmpty(t){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ma(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.Xr=this.Xr.add(new yt(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return w.resolve(a)}lookupMutationBatch(t,e){return w.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ti(n),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?ve:this.nr-1)}getAllMutationBatches(t){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new yt(e,0),s=new yt(e,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([n,s],a=>{const u=this.ei(a.Zr);i.push(u)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new tt(G);return e.forEach(s=>{const i=new yt(s,0),a=new yt(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,a],u=>{n=n.add(u.Zr)})}),w.resolve(this.ni(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;F.isDocumentKey(i)||(i=i.child(""));const a=new yt(new F(i),0);let u=new tt(G);return this.Xr.forEachWhile(c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(u=u.add(c.Zr)),!0)},a),w.resolve(this.ni(u))}ni(t){const e=[];return t.forEach(n=>{const s=this.ei(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){L(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Xr;return w.forEach(e.mutations,s=>{const i=new yt(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Xr=n})}sr(t){}containsKey(t,e){const n=new yt(e,0),s=this.Xr.firstAfterOrEqual(n);return w.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,w.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(t){this.ii=t,this.docs=function(){return new rt(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.ii(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return w.resolve(n?n.document.mutableCopy():it.newInvalidDocument(e))}getEntries(t,e){let n=Lt();return e.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),w.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Lt();const a=e.path,u=new F(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||ea(Ql(f),n)<=0||(s.has(f.key)||os(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(t,e,n,s){O(9500)}si(t,e){return w.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new up(this)}getSize(t){return w.resolve(this.size)}}class up extends _d{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Br.addEntry(t,s)):this.Br.removeEntry(n)}),w.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(t){this.persistence=t,this.oi=new ae(e=>Ze(e),ss),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this._i=0,this.ai=new va,this.targetCount=0,this.ui=sn.cr()}forEachTarget(t,e){return this.oi.forEach((n,s)=>e(s)),w.resolve()}getLastRemoteSnapshotVersion(t){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return w.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this._i&&(this._i=e),w.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new sn(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,w.resolve()}updateTargetData(t,e){return this.Tr(e),w.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,w.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.oi.forEach((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.oi.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),w.waitFor(i).next(()=>s)}getTargetCount(t){return w.resolve(this.targetCount)}getTargetData(t,e){const n=this.oi.get(e)||null;return w.resolve(n)}addMatchingKeys(t,e,n){return this.ai.Gr(e,n),w.resolve()}removeMatchingKeys(t,e,n){this.ai.jr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),w.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),w.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ai.Yr(e);return w.resolve(n)}containsKey(t,e){return w.resolve(this.ai.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,e){this.ci={},this.overlays={},this.li=new Ft(0),this.hi=!1,this.hi=!0,this.Pi=new ip,this.referenceDelegate=t(this),this.Ti=new cp(this),this.indexManager=new Wg,this.remoteDocumentCache=function(s){return new ap(s)}(n=>this.referenceDelegate.Ii(n)),this.serializer=new od(e),this.Ei=new rp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new sp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ci[t.toKey()];return n||(n=new op(e,this.referenceDelegate),this.ci[t.toKey()]=n),n}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,n){x("MemoryPersistence","Starting transaction:",t);const s=new lp(this.li.next());return this.referenceDelegate.di(),n(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(t,e){return w.or(Object.values(this.ci).map(n=>()=>n.containsKey(t,e)))}}class lp extends Hl{constructor(t){super(),this.currentSequenceNumber=t}}class Ci{constructor(t){this.persistence=t,this.Vi=new va,this.mi=null}static fi(t){return new Ci(t)}get gi(){if(this.mi)return this.mi;throw O(60996)}addReference(t,e,n){return this.Vi.addReference(n,e),this.gi.delete(n.toString()),w.resolve()}removeReference(t,e,n){return this.Vi.removeReference(n,e),this.gi.add(n.toString()),w.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),w.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(s=>this.gi.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>n.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.gi,n=>{const s=F.fromPath(n);return this.pi(t,s).next(i=>{i||e.removeEntry(s,q.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(n=>{n?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return w.or([()=>w.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class di{constructor(t,e){this.persistence=t,this.yi=new ae(n=>Dt(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=pd(this,e)}static fi(t,e){return new di(t,e)}di(){}Ai(t){return w.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}br(t){let e=0;return this.yr(t,n=>{e++}).next(()=>e)}yr(t,e){return w.forEach(this.yi,(n,s)=>this.Dr(t,n,s).next(i=>i?w.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(t,a=>this.Dr(t,a,e).next(u=>{u||(n++,i.removeEntry(a,q.min()))})).next(()=>i.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),w.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.yi.set(n,t.currentSequenceNumber),w.resolve()}removeReference(t,e,n){return this.yi.set(n,t.currentSequenceNumber),w.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),w.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Ws(t.data.value)),e}Dr(t,e,n){return w.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.yi.get(e);return w.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t){this.serializer=t}q(t,e,n,s){const i=new yi("createOrUpgrade",e);n<1&&s>=1&&(function(c){c.createObjectStore(rs)}(t),function(c){c.createObjectStore(zr,{keyPath:Cm}),c.createObjectStore(jt,{keyPath:gc,autoIncrement:!0}).createIndex(Qe,pc,{unique:!0}),c.createObjectStore(Dn)}(t),il(t),function(c){c.createObjectStore(ze)}(t));let a=w.resolve();return n<3&&s>=3&&(n!==0&&(function(c){c.deleteObjectStore(kn),c.deleteObjectStore(Nn),c.deleteObjectStore(Ye)}(t),il(t)),a=a.next(()=>function(c){const h=c.store(Ye),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return h.put(si,f)}(i))),n<4&&s>=4&&(n!==0&&(a=a.next(()=>function(c,h){return h.store(jt).J().next(g=>{c.deleteObjectStore(jt),c.createObjectStore(jt,{keyPath:gc,autoIncrement:!0}).createIndex(Qe,pc,{unique:!0});const _=h.store(jt),P=g.map(b=>_.put(b));return w.waitFor(P)})}(t,i))),a=a.next(()=>{(function(c){c.createObjectStore(Mn,{keyPath:Bm})})(t)})),n<5&&s>=5&&(a=a.next(()=>this.wi(i))),n<6&&s>=6&&(a=a.next(()=>(function(c){c.createObjectStore(Gr)}(t),this.bi(i)))),n<7&&s>=7&&(a=a.next(()=>this.Si(i))),n<8&&s>=8&&(a=a.next(()=>this.Di(t,i))),n<9&&s>=9&&(a=a.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&s>=10&&(a=a.next(()=>this.Ci(i))),n<11&&s>=11&&(a=a.next(()=>{(function(c){c.createObjectStore(Ii,{keyPath:qm})})(t),function(c){c.createObjectStore(Ti,{keyPath:Um})}(t)})),n<12&&s>=12&&(a=a.next(()=>{(function(c){const h=c.createObjectStore(Ei,{keyPath:Wm});h.createIndex(xo,Hm,{unique:!1}),h.createIndex(rh,Ym,{unique:!1})})(t)})),n<13&&s>=13&&(a=a.next(()=>function(c){const h=c.createObjectStore(ri,{keyPath:Dm});h.createIndex($s,Nm),h.createIndex(Zl,km)}(t)).next(()=>this.Fi(t,i)).next(()=>t.deleteObjectStore(ze))),n<14&&s>=14&&(a=a.next(()=>this.Mi(t,i))),n<15&&s>=15&&(a=a.next(()=>function(c){c.createObjectStore(sa,{keyPath:zm,autoIncrement:!0}).createIndex(Co,Gm,{unique:!1}),c.createObjectStore(Mr,{keyPath:jm}).createIndex(eh,Km,{unique:!1}),c.createObjectStore(Fr,{keyPath:$m}).createIndex(nh,Qm,{unique:!1})}(t))),n<16&&s>=16&&(a=a.next(()=>{e.objectStore(Mr).clear()}).next(()=>{e.objectStore(Fr).clear()})),n<17&&s>=17&&(a=a.next(()=>{(function(c){c.createObjectStore(ia,{keyPath:Xm})})(t)})),n<18&&s>=18&&Ml()&&(a=a.next(()=>{e.objectStore(Mr).clear()}).next(()=>{e.objectStore(Fr).clear()})),a}bi(t){let e=0;return t.store(ze).te((n,s)=>{e+=hi(s)}).next(()=>{const n={byteSize:e};return t.store(Gr).put(bo,n)})}wi(t){const e=t.store(zr),n=t.store(jt);return e.J().next(s=>w.forEach(s,i=>{const a=IDBKeyRange.bound([i.userId,ve],[i.userId,i.lastAcknowledgedBatchId]);return n.J(Qe,a).next(u=>w.forEach(u,c=>{L(c.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:c.batchId});const h=je(this.serializer,c);return hd(t,i.userId,h).next(()=>{})}))}))}Si(t){const e=t.store(kn),n=t.store(ze);return t.store(Ye).get(si).next(s=>{const i=[];return n.te((a,u)=>{const c=new W(a),h=function(g){return[0,Dt(g)]}(c);i.push(e.get(h).next(f=>f?w.resolve():(g=>e.put({targetId:0,path:Dt(g),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>w.waitFor(i))})}Di(t,e){t.createObjectStore(jr,{keyPath:Lm});const n=e.store(jr),s=new Ea,i=a=>{if(s.add(a)){const u=a.lastSegment(),c=a.popLast();return n.put({collectionId:u,parent:Dt(c)})}};return e.store(ze).te({ee:!0},(a,u)=>{const c=new W(a);return i(c.popLast())}).next(()=>e.store(Dn).te({ee:!0},([a,u,c],h)=>{const f=Qt(u);return i(f.popLast())}))}Ci(t){const e=t.store(Nn);return e.te((n,s)=>{const i=Dr(s),a=ad(this.serializer,i);return e.put(a)})}Fi(t,e){const n=e.store(ze),s=[];return n.te((i,a)=>{const u=e.store(ri),c=function(g){return g.document?new F(W.fromString(g.document.name).popFirst(5)):g.noDocument?F.fromSegments(g.noDocument.path):g.unknownDocument?F.fromSegments(g.unknownDocument.path):O(36783)}(a).path.toArray(),h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(h))}).next(()=>w.waitFor(s))}Mi(t,e){const n=e.store(jt),s=yd(this.serializer),i=new wa(Ci.fi,this.serializer.wt);return n.J().next(a=>{const u=new Map;return a.forEach(c=>{var h;let f=(h=u.get(c.userId))!==null&&h!==void 0?h:j();je(this.serializer,c).keys().forEach(g=>f=f.add(g)),u.set(c.userId,f)}),w.forEach(u,(c,h)=>{const f=new It(h),g=Si.bt(this.serializer,f),_=i.getIndexManager(f),P=bi.bt(f,this.serializer,_,i.referenceDelegate);return new Id(s,P,g,_).recalculateAndSaveOverlaysForDocumentKeys(new Do(e,Ft.le),c).next()})})}}function il(r){r.createObjectStore(kn,{keyPath:Fm}).createIndex(ra,Om,{unique:!0}),r.createObjectStore(Nn,{keyPath:"targetId"}).createIndex(th,Mm,{unique:!0}),r.createObjectStore(Ye)}const pe="IndexedDbPersistence",_o=18e5,yo=5e3,Io="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Td="main";class Aa{constructor(t,e,n,s,i,a,u,c,h,f,g=18){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.xi=i,this.window=a,this.document=u,this.Oi=h,this.Ni=f,this.Bi=g,this.li=null,this.hi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Li=null,this.inForeground=!1,this.ki=null,this.qi=null,this.Qi=Number.NEGATIVE_INFINITY,this.$i=_=>Promise.resolve(),!Aa.C())throw new D(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Zg(this,s),this.Ui=e+Td,this.serializer=new od(c),this.Ki=new Ht(this.Ui,this.Bi,new hp(this.serializer)),this.Pi=new zg,this.Ti=new Yg(this.referenceDelegate,this.serializer),this.remoteDocumentCache=yd(this.serializer),this.Ei=new Ug,this.window&&this.window.localStorage?this.Wi=this.window.localStorage:(this.Wi=null,f===!1&&ft(pe,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Gi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new D(V.FAILED_PRECONDITION,Io);return this.zi(),this.ji(),this.Hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Ti.getHighestSequenceNumber(t))}).then(t=>{this.li=new Ft(t,this.Oi)}).then(()=>{this.hi=!0}).catch(t=>(this.Ki&&this.Ki.close(),Promise.reject(t)))}Ji(t){return this.$i=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ki.U(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.xi.enqueueAndForget(async()=>{this.started&&await this.Gi()}))}Gi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Us(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Yi(t).next(e=>{e||(this.isPrimary=!1,this.xi.enqueueRetryable(()=>this.$i(!1)))})}).next(()=>this.Zi(t)).next(e=>this.isPrimary&&!e?this.Xi(t).next(()=>!1):!!e&&this.es(t).next(()=>!0))).catch(t=>{if(xe(t))return x(pe,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return x(pe,"Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.xi.enqueueRetryable(()=>this.$i(t)),this.isPrimary=t})}Yi(t){return Sr(t).get(pn).next(e=>w.resolve(this.ts(e)))}ns(t){return Us(t).delete(this.clientId)}async rs(){if(this.isPrimary&&!this.ss(this.Qi,_o)){this.Qi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=_t(e,Mn);return n.J().next(s=>{const i=this._s(s,_o),a=s.filter(u=>i.indexOf(u)===-1);return w.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Wi)for(const e of t)this.Wi.removeItem(this.us(e.clientId))}}Hi(){this.qi=this.xi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Gi().then(()=>this.rs()).then(()=>this.Hi()))}ts(t){return!!t&&t.ownerId===this.clientId}Zi(t){return this.Ni?w.resolve(!0):Sr(t).get(pn).next(e=>{if(e!==null&&this.ss(e.leaseTimestampMs,yo)&&!this.cs(e.ownerId)){if(this.ts(e)&&this.networkEnabled)return!0;if(!this.ts(e)){if(!e.allowTabSynchronization)throw new D(V.FAILED_PRECONDITION,Io);return!1}}return!(!this.networkEnabled||!this.inForeground)||Us(t).J().next(n=>this._s(n,yo).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&x(pe,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.hi=!1,this.ls(),this.qi&&(this.qi.cancel(),this.qi=null),this.hs(),this.Ps(),await this.Ki.runTransaction("shutdown","readwrite",[rs,Mn],t=>{const e=new Do(t,Ft.le);return this.Xi(e).next(()=>this.ns(e))}),this.Ki.close(),this.Ts()}_s(t,e){return t.filter(n=>this.ss(n.updateTimeMs,e)&&!this.cs(n.clientId))}Is(){return this.runTransaction("getActiveClients","readonly",t=>Us(t).J().next(e=>this._s(e,_o).map(n=>n.clientId)))}get started(){return this.hi}getGlobalsCache(){return this.Pi}getMutationQueue(t,e){return bi.bt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new Hg(t,this.serializer.wt.databaseId)}getDocumentOverlayCache(t){return Si.bt(this.serializer,t)}getBundleCache(){return this.Ei}runTransaction(t,e,n){x(pe,"Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=function(c){return c===18?tg:c===17?ah:c===16?Zm:c===15?oa:c===14?oh:c===13?ih:c===12?Jm:c===11?sh:void O(60245)}(this.Bi);let a;return this.Ki.runTransaction(t,s,i,u=>(a=new Do(u,this.li?this.li.next():Ft.le),e==="readwrite-primary"?this.Yi(a).next(c=>!!c||this.Zi(a)).next(c=>{if(!c)throw ft(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.xi.enqueueRetryable(()=>this.$i(!1)),new D(V.FAILED_PRECONDITION,Wl);return n(a)}).next(c=>this.es(a).next(()=>c)):this.Es(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Es(t){return Sr(t).get(pn).next(e=>{if(e!==null&&this.ss(e.leaseTimestampMs,yo)&&!this.cs(e.ownerId)&&!this.ts(e)&&!(this.Ni||this.allowTabSynchronization&&e.allowTabSynchronization))throw new D(V.FAILED_PRECONDITION,Io)})}es(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Sr(t).put(pn,e)}static C(){return Ht.C()}Xi(t){const e=Sr(t);return e.get(pn).next(n=>this.ts(n)?(x(pe,"Releasing primary lease."),e.delete(pn)):w.resolve())}ss(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(ft(`Detected an update time that is in the future: ${t} > ${n}`),!1))}zi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ki=()=>{this.xi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Gi()))},this.document.addEventListener("visibilitychange",this.ki),this.inForeground=this.document.visibilityState==="visible")}hs(){this.ki&&(this.document.removeEventListener("visibilitychange",this.ki),this.ki=null)}ji(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.Li=()=>{this.ls();const e=/(?:Version|Mobile)\/1[456]/;kl()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.xi.enterRestrictedMode(!0),this.xi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Li))}Ps(){this.Li&&(this.window.removeEventListener("pagehide",this.Li),this.Li=null)}cs(t){var e;try{const n=((e=this.Wi)===null||e===void 0?void 0:e.getItem(this.us(t)))!==null;return x(pe,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ft(pe,"Failed to get zombied client id.",n),!1}}ls(){if(this.Wi)try{this.Wi.setItem(this.us(this.clientId),String(Date.now()))}catch(t){ft("Failed to set zombie client id.",t)}}Ts(){if(this.Wi)try{this.Wi.removeItem(this.us(this.clientId))}catch{}}us(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Sr(r){return _t(r,rs)}function Us(r){return _t(r,Mn)}function Ra(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.ds=n,this.As=s}static Rs(t,e){let n=j(),s=j();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Pa(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return kl()?8:Yl(ei())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.ws(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.bs(t,e,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new dp;return this.Ss(t,e,a).next(u=>{if(i.result=u,this.fs)return this.Ds(t,e,a,u.size)})}).next(()=>i.result)}Ds(t,e,n,s){return n.documentReadCount<this.gs?(vn()<=ne.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",wn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),w.resolve()):(vn()<=ne.DEBUG&&x("QueryEngine","Query:",wn(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ps*s?(vn()<=ne.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",wn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nt(e))):w.resolve())}ws(t,e){if(bc(e))return w.resolve(null);let n=Nt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ai(e,null,"F"),n=Nt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const a=j(...i);return this.ys.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,n).next(c=>{const h=this.vs(e,u);return this.Cs(e,h,a,c.readTime)?this.ws(t,ai(e,null,"F")):this.Fs(t,h,e,c)}))})))}bs(t,e,n,s){return bc(e)||s.isEqual(q.min())?w.resolve(null):this.ys.getDocuments(t,n).next(i=>{const a=this.vs(e,i);return this.Cs(e,a,n,s)?w.resolve(null):(vn()<=ne.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wn(e)),this.Fs(t,a,e,$l(s,bn)).next(u=>u))})}vs(t,e){let n=new tt(xh(t));return e.forEach((s,i)=>{os(t,i)&&(n=n.add(i))}),n}Cs(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,e,n){return vn()<=ne.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",wn(e)),this.ys.getDocumentsMatchingQuery(t,e,Ut.min(),n)}Fs(t,e,n,s){return this.ys.getDocumentsMatchingQuery(t,n,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="LocalStore",fp=3e8;class mp{constructor(t,e,n,s){this.persistence=t,this.Ms=e,this.serializer=s,this.xs=new rt(G),this.Os=new ae(i=>Ze(i),ss),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(n)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Id(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function vd(r,t,e,n){return new mp(r,t,e,n)}async function wd(r,t){const e=k(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e.Ls(t),e.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],u=[];let c=j();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){u.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return e.localDocuments.getDocuments(n,c).next(h=>({ks:h,removedBatchIds:a,addedBatchIds:u}))})})}function gp(r,t){const e=k(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),i=e.Bs.newChangeBuffer({trackRemovals:!0});return function(u,c,h,f){const g=h.batch,_=g.keys();let P=w.resolve();return _.forEach(b=>{P=P.next(()=>f.getEntry(c,b)).next(N=>{const C=h.docVersions.get(b);L(C!==null,48541),N.version.compareTo(C)<0&&(g.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),P.next(()=>u.mutationQueue.removeMutationBatch(c,g))}(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let c=j();for(let h=0;h<u.mutationResults.length;++h)u.mutationResults[h].transformResults.length>0&&(c=c.add(u.batch.mutations[h].key));return c}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function Ad(r){const t=k(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function pp(r,t){const e=k(r),n=t.snapshotVersion;let s=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.Bs.newChangeBuffer({trackRemovals:!0});s=e.xs;const u=[];t.targetChanges.forEach((f,g)=>{const _=s.get(g);if(!_)return;u.push(e.Ti.removeMatchingKeys(i,f.removedDocuments,g).next(()=>e.Ti.addMatchingKeys(i,f.addedDocuments,g)));let P=_.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?P=P.withResumeToken(dt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(f.resumeToken,n)),s=s.insert(g,P),function(N,C,z){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=fp?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(_,P,f)&&u.push(e.Ti.updateTargetData(i,P))});let c=Lt(),h=j();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))}),u.push(Rd(i,a,t.documentUpdates).next(f=>{c=f.qs,h=f.Qs})),!n.isEqual(q.min())){const f=e.Ti.getLastRemoteSnapshotVersion(i).next(g=>e.Ti.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(f)}return w.waitFor(u).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(e.xs=s,i))}function Rd(r,t,e){let n=j(),s=j();return e.forEach(i=>n=n.add(i)),t.getEntries(r,n).next(i=>{let a=Lt();return e.forEach((u,c)=>{const h=i.get(u);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(q.min())?(t.removeEntry(u,c.readTime),a=a.insert(u,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),a=a.insert(u,c)):x(Va,"Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",c.version)}),{qs:a,Qs:s}})}function _p(r,t){const e=k(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=ve),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function zn(r,t){const e=k(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Ti.getTargetData(n,t).next(i=>i?(s=i,w.resolve(s)):e.Ti.allocateTargetId(n).next(a=>(s=new re(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Ti.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.xs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.xs=e.xs.insert(n.targetId,n),e.Os.set(t,n.targetId)),n})}async function Gn(r,t,e){const n=k(r),s=n.xs.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!xe(a))throw a;x(Va,`Failed to update sequence numbers for target ${t}: ${a}`)}n.xs=n.xs.remove(t),n.Os.delete(s.target)}function fi(r,t,e){const n=k(r);let s=q.min(),i=j();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const g=k(c),_=g.Os.get(f);return _!==void 0?w.resolve(g.xs.get(_)):g.Ti.getTargetData(h,f)}(n,a,Nt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Ti.getMatchingKeysForTargetId(a,u.targetId).next(c=>{i=c})}).next(()=>n.Ms.getDocumentsMatchingQuery(a,t,e?s:q.min(),e?i:j())).next(u=>(Sd(n,Ch(t),u),{documents:u,$s:i})))}function Pd(r,t){const e=k(r),n=k(e.Ti),s=e.xs.get(t);return s?Promise.resolve(s.target):e.persistence.runTransaction("Get target data","readonly",i=>n.Rt(i,t).next(a=>a?a.target:null))}function Vd(r,t){const e=k(r),n=e.Ns.get(t)||q.min();return e.persistence.runTransaction("Get new document changes","readonly",s=>e.Bs.getAllFromCollectionGroup(s,t,$l(n,bn),Number.MAX_SAFE_INTEGER)).then(s=>(Sd(e,t,s),s))}function Sd(r,t,e){let n=r.Ns.get(t)||q.min();e.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.Ns.set(t,n)}async function yp(r,t,e,n){const s=k(r);let i=j(),a=Lt();for(const h of e){const f=t.Us(h.metadata.name);h.document&&(i=i.add(f));const g=t.Ks(h);g.setReadTime(t.Ws(h.metadata.readTime)),a=a.insert(f,g)}const u=s.Bs.newChangeBuffer({trackRemovals:!0}),c=await zn(s,function(f){return Nt(Jn(W.fromString(`__bundle__/docs/${f}`)))}(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",h=>Rd(h,u,a).next(f=>(u.apply(h),f)).next(f=>s.Ti.removeMatchingKeysForTargetId(h,c.targetId).next(()=>s.Ti.addMatchingKeys(h,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(h,f.qs,f.Qs)).next(()=>f.qs)))}async function Ip(r,t,e=j()){const n=await zn(r,Nt(Ia(t.bundledQuery))),s=k(r);return s.persistence.runTransaction("Save named query","readwrite",i=>{const a=mt(t.readTime);if(n.snapshotVersion.compareTo(a)>=0)return s.Ei.saveNamedQuery(i,t);const u=n.withResumeToken(dt.EMPTY_BYTE_STRING,a);return s.xs=s.xs.insert(u.targetId,u),s.Ti.updateTargetData(i,u).next(()=>s.Ti.removeMatchingKeysForTargetId(i,n.targetId)).next(()=>s.Ti.addMatchingKeys(i,e,n.targetId)).next(()=>s.Ei.saveNamedQuery(i,t))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="firestore_clients";function ol(r,t){return`${bd}_${r}_${t}`}const Cd="firestore_mutations";function al(r,t,e){let n=`${Cd}_${r}_${e}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}const xd="firestore_targets";function To(r,t){return`${xd}_${r}_${t}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="SharedClientState";class mi{constructor(t,e,n,s){this.user=t,this.batchId=e,this.state=n,this.error=s}static Gs(t,e,n){const s=JSON.parse(n);let i,a=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return a&&s.error&&(a=typeof s.error.message=="string"&&typeof s.error.code=="string",a&&(i=new D(s.error.code,s.error.message))),a?new mi(t,e,s.state,i):(ft($t,`Failed to parse mutation state for ID '${e}': ${n}`),null)}zs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class qr{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Gs(t,e){const n=JSON.parse(e);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new D(n.error.code,n.error.message))),i?new qr(t,n.state,s):(ft($t,`Failed to parse target state for ID '${t}': ${e}`),null)}zs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class gi{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Gs(t,e){const n=JSON.parse(e);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=ha();for(let a=0;s&&a<n.activeTargetIds.length;++a)s=Xl(n.activeTargetIds[a]),i=i.add(n.activeTargetIds[a]);return s?new gi(t,i):(ft($t,`Failed to parse client data for instance '${t}': ${e}`),null)}}class Sa{constructor(t,e){this.clientId=t,this.onlineState=e}static Gs(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new Sa(e.clientId,e.onlineState):(ft($t,`Failed to parse online state: ${t}`),null)}}class $o{constructor(){this.activeTargetIds=ha()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Eo{constructor(t,e,n,s,i){this.window=t,this.xi=e,this.persistenceKey=n,this.Js=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ys=this.Zs.bind(this),this.Xs=new rt(G),this.started=!1,this.eo=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.no=ol(this.persistenceKey,this.Js),this.ro=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.Xs=this.Xs.insert(this.Js,new $o),this.io=new RegExp(`^${bd}_${a}_([^_]*)$`),this.so=new RegExp(`^${Cd}_${a}_(\\d+)(?:_(.*))?$`),this.oo=new RegExp(`^${xd}_${a}_(\\d+)$`),this._o=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.ao=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ys)}static C(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Is();for(const n of t){if(n===this.Js)continue;const s=this.getItem(ol(this.persistenceKey,n));if(s){const i=gi.Gs(n,s);i&&(this.Xs=this.Xs.insert(i.clientId,i))}}this.uo();const e=this.storage.getItem(this._o);if(e){const n=this.co(e);n&&this.lo(n)}for(const n of this.eo)this.Zs(n);this.eo=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.ro,JSON.stringify(t))}getAllActiveQueryTargets(){return this.ho(this.Xs)}isActiveQueryTarget(t){let e=!1;return this.Xs.forEach((n,s)=>{s.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.Po(t,"pending")}updateMutationState(t,e,n){this.Po(t,e,n),this.To(t)}addLocalQueryTarget(t,e=!0){let n="not-current";if(this.isActiveQueryTarget(t)){const s=this.storage.getItem(To(this.persistenceKey,t));if(s){const i=qr.Gs(t,s);i&&(n=i.state)}}return e&&this.Io.js(t),this.uo(),n}removeLocalQueryTarget(t){this.Io.Hs(t),this.uo()}isLocalQueryTarget(t){return this.Io.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(To(this.persistenceKey,t))}updateQueryState(t,e,n){this.Eo(t,e,n)}handleUserChange(t,e,n){e.forEach(s=>{this.To(s)}),this.currentUser=t,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(t){this.Ao(t)}notifyBundleLoaded(t){this.Ro(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ys),this.removeItem(this.no),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return x($t,"READ",t,e),e}setItem(t,e){x($t,"SET",t,e),this.storage.setItem(t,e)}removeItem(t){x($t,"REMOVE",t),this.storage.removeItem(t)}Zs(t){const e=t;if(e.storageArea===this.storage){if(x($t,"EVENT",e.key,e.newValue),e.key===this.no)return void ft("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.xi.enqueueRetryable(async()=>{if(this.started){if(e.key!==null){if(this.io.test(e.key)){if(e.newValue==null){const n=this.Vo(e.key);return this.mo(n,null)}{const n=this.fo(e.key,e.newValue);if(n)return this.mo(n.clientId,n)}}else if(this.so.test(e.key)){if(e.newValue!==null){const n=this.po(e.key,e.newValue);if(n)return this.yo(n)}}else if(this.oo.test(e.key)){if(e.newValue!==null){const n=this.wo(e.key,e.newValue);if(n)return this.bo(n)}}else if(e.key===this._o){if(e.newValue!==null){const n=this.co(e.newValue);if(n)return this.lo(n)}}else if(e.key===this.ro){const n=function(i){let a=Ft.le;if(i!=null)try{const u=JSON.parse(i);L(typeof u=="number",30636,{So:i}),a=u}catch(u){ft($t,"Failed to read sequence number from WebStorage",u)}return a}(e.newValue);n!==Ft.le&&this.sequenceNumberHandler(n)}else if(e.key===this.ao){const n=this.Do(e.newValue);await Promise.all(n.map(s=>this.syncEngine.vo(s)))}}}else this.eo.push(e)})}}get Io(){return this.Xs.get(this.Js)}uo(){this.setItem(this.no,this.Io.zs())}Po(t,e,n){const s=new mi(this.currentUser,t,e,n),i=al(this.persistenceKey,this.currentUser,t);this.setItem(i,s.zs())}To(t){const e=al(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Ao(t){const e={clientId:this.Js,onlineState:t};this.storage.setItem(this._o,JSON.stringify(e))}Eo(t,e,n){const s=To(this.persistenceKey,t),i=new qr(t,e,n);this.setItem(s,i.zs())}Ro(t){const e=JSON.stringify(Array.from(t));this.setItem(this.ao,e)}Vo(t){const e=this.io.exec(t);return e?e[1]:null}fo(t,e){const n=this.Vo(t);return gi.Gs(n,e)}po(t,e){const n=this.so.exec(t),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return mi.Gs(new It(i),s,e)}wo(t,e){const n=this.oo.exec(t),s=Number(n[1]);return qr.Gs(s,e)}co(t){return Sa.Gs(t)}Do(t){return JSON.parse(t)}async yo(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Co(t.batchId,t.state,t.error);x($t,`Ignoring mutation for non-active user ${t.user.uid}`)}bo(t){return this.syncEngine.Fo(t.targetId,t.state,t.error)}mo(t,e){const n=e?this.Xs.insert(t,e):this.Xs.remove(t),s=this.ho(this.Xs),i=this.ho(n),a=[],u=[];return i.forEach(c=>{s.has(c)||a.push(c)}),s.forEach(c=>{i.has(c)||u.push(c)}),this.syncEngine.Mo(a,u).then(()=>{this.Xs=n})}lo(t){this.Xs.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}ho(t){let e=ha();return t.forEach((n,s)=>{e=e.unionWith(s.activeTargetIds)}),e}}class Dd{constructor(){this.xo=new $o,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,n){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new $o,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{No(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="ConnectivityMonitor";class cl{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){x(ul,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){x(ul,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs=null;function Qo(){return zs===null?zs=function(){return 268435456+Math.round(2147483648*Math.random())}():zs++,"0x"+zs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="RestConnection",Ep={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class vp{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${n}/databases/${s}`,this.Go=this.databaseId.database===$r?`project_id=${n}`:`project_id=${n}&database_id=${s}`}zo(t,e,n,s,i){const a=Qo(),u=this.jo(t,e.toUriEncodedString());x(vo,`Sending RPC '${t}' ${a}:`,u,n);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:h}=new URL(u),f=Jo(h);return this.Jo(t,u,c,n,f).then(g=>(x(vo,`Received RPC '${t}' ${a}: `,g),g),g=>{throw zt(vo,`RPC '${t}' ${a} failed with error: `,g,"url: ",u,"request:",n),g})}Yo(t,e,n,s,i,a){return this.zo(t,e,n,s,i)}Ho(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,i)=>t[i]=s),n&&n.headers.forEach((s,i)=>t[i]=s)}jo(t,e){const n=Ep[t];return`${this.Ko}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection";class Ap extends vp{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,s,i){const a=Qo();return new Promise((u,c)=>{const h=new Ol;h.setWithCredentials(!0),h.listenOnce(Ll.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case js.NO_ERROR:const g=h.getResponseJson();x(Ct,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(g)),u(g);break;case js.TIMEOUT:x(Ct,`RPC '${t}' ${a} timed out`),c(new D(V.DEADLINE_EXCEEDED,"Request time out"));break;case js.HTTP_ERROR:const _=h.getStatus();if(x(Ct,`RPC '${t}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let P=h.getResponseJson();Array.isArray(P)&&(P=P[0]);const b=P==null?void 0:P.error;if(b&&b.status&&b.message){const N=function(z){const U=z.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(U)>=0?U:V.UNKNOWN}(b.status);c(new D(N,b.message))}else c(new D(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new D(V.UNAVAILABLE,"Connection failed."));break;default:O(9055,{h_:t,streamId:a,P_:h.getLastErrorCode(),T_:h.getLastError()})}}finally{x(Ct,`RPC '${t}' ${a} completed.`)}});const f=JSON.stringify(s);x(Ct,`RPC '${t}' ${a} sending request:`,s),h.send(e,"POST",f,n,15)})}I_(t,e,n){const s=Qo(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ul(),u=ql(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const f=i.join("");x(Ct,`Creating RPC '${t}' stream ${s}: ${f}`,c);const g=a.createWebChannel(f,c);this.E_(g);let _=!1,P=!1;const b=new wp({Zo:C=>{P?x(Ct,`Not sending because RPC '${t}' stream ${s} is closed:`,C):(_||(x(Ct,`Opening RPC '${t}' stream ${s} transport.`),g.open(),_=!0),x(Ct,`RPC '${t}' stream ${s} sending:`,C),g.send(C))},Xo:()=>g.close()}),N=(C,z,U)=>{C.listen(z,B=>{try{U(B)}catch($){setTimeout(()=>{throw $},0)}})};return N(g,br.EventType.OPEN,()=>{P||(x(Ct,`RPC '${t}' stream ${s} transport opened.`),b.__())}),N(g,br.EventType.CLOSE,()=>{P||(P=!0,x(Ct,`RPC '${t}' stream ${s} transport closed`),b.u_(),this.d_(g))}),N(g,br.EventType.ERROR,C=>{P||(P=!0,zt(Ct,`RPC '${t}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),b.u_(new D(V.UNAVAILABLE,"The operation could not be completed")))}),N(g,br.EventType.MESSAGE,C=>{var z;if(!P){const U=C.data[0];L(!!U,16349);const B=U,$=(B==null?void 0:B.error)||((z=B[0])===null||z===void 0?void 0:z.error);if($){x(Ct,`RPC '${t}' stream ${s} received error:`,$);const J=$.status;let K=function(I){const E=pt[I];if(E!==void 0)return Kh(E)}(J),T=$.message;K===void 0&&(K=V.INTERNAL,T="Unknown error status: "+J+" with message "+$.message),P=!0,b.u_(new D(K,T)),g.close()}else x(Ct,`RPC '${t}' stream ${s} received:`,U),b.c_(U)}}),N(u,Bl.STAT_EVENT,C=>{C.stat===Ao.PROXY?x(Ct,`RPC '${t}' stream ${s} detected buffering proxy`):C.stat===Ao.NOPROXY&&x(Ct,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.a_()},0),b}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(e=>e===t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(){return typeof window<"u"?window:null}function Zs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(r){return new Cg(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t,e,n=1e3,s=1.5,i=6e4){this.xi=t,this.timerId=e,this.A_=n,this.R_=s,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const e=Math.floor(this.m_+this.w_()),n=Math.max(0,Date.now()-this.g_),s=Math.max(0,e-n);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="PersistentStream";class kd{constructor(t,e,n,s,i,a,u,c){this.xi=t,this.S_=n,this.D_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new ba(t,e)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,e){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(ft(e.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),e=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.v_===e&&this.z_(n,s)},n=>{t(()=>{const s=new D(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.j_(s)})})}z_(t,e){const n=this.G_(this.v_);this.stream=this.H_(t,e),this.stream.e_(()=>{n(()=>this.listener.e_())}),this.stream.n_(()=>{n(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{n(()=>this.j_(s))}),this.stream.onMessage(s=>{n(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return x(ll,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return e=>{this.xi.enqueueAndForget(()=>this.v_===t?e():(x(ll,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rp extends kd{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}H_(t,e){return this.connection.I_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const e=Ng(this.serializer,t),n=function(i){if(!("targetChange"in i))return q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?mt(a.readTime):q.min()}(t);return this.listener.Y_(e,n)}Z_(t){const e={};e.database=Uo(this.serializer),e.addTarget=function(i,a){let u;const c=a.target;if(u=ii(c)?{documents:td(i,c)}:{query:Vi(i,c).gt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Wh(i,a.resumeToken);const h=Bo(i,a.expectedCount);h!==null&&(u.expectedCount=h)}else if(a.snapshotVersion.compareTo(q.min())>0){u.readTime=Un(i,a.snapshotVersion.toTimestamp());const h=Bo(i,a.expectedCount);h!==null&&(u.expectedCount=h)}return u}(this.serializer,t);const n=Mg(this.serializer,t);n&&(e.labels=n),this.Q_(e)}X_(t){const e={};e.database=Uo(this.serializer),e.removeTarget=t,this.Q_(e)}}class Pp extends kd{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(t,e){return this.connection.I_("Write",t,e)}J_(t){return L(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,L(!t.writeResults||t.writeResults.length===0,55816),this.listener.na()}onNext(t){L(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.x_.reset();const e=kg(t.writeResults,t.commitTime),n=mt(t.commitTime);return this.listener.ra(n,e)}ia(){const t={};t.database=Uo(this.serializer),this.Q_(t)}ta(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Xr(this.serializer,n))};this.Q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{}class Sp extends Vp{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new D(V.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,n,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.zo(t,qo(e,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(V.UNKNOWN,i.toString())})}Yo(t,e,n,s,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Yo(t,qo(e,n),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(V.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class bp{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(ft(e),this.ua=!1):x("OnlineStateTracker",e)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="RemoteStore";class Cp{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(a=>{n.enqueueAndForget(async()=>{Ne(this)&&(x(on,"Restarting streams for network reachability change."),await async function(c){const h=k(c);h.da.add(4),await er(h),h.Va.set("Unknown"),h.da.delete(4),await hs(h)}(this))})}),this.Va=new bp(n,s)}}async function hs(r){if(Ne(r))for(const t of r.Aa)await t(!0)}async function er(r){for(const t of r.Aa)await t(!1)}function xi(r,t){const e=k(r);e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),Da(e)?xa(e):rr(e).N_()&&Ca(e,t))}function jn(r,t){const e=k(r),n=rr(e);e.Ea.delete(t),n.N_()&&Md(e,t),e.Ea.size===0&&(n.N_()?n.k_():Ne(e)&&e.Va.set("Unknown"))}function Ca(r,t){if(r.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}rr(r).Z_(t)}function Md(r,t){r.ma.Ke(t),rr(r).X_(t)}function xa(r){r.ma=new Pg({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>r.Ea.get(t)||null,Pt:()=>r.datastore.serializer.databaseId}),rr(r).start(),r.Va.ca()}function Da(r){return Ne(r)&&!rr(r).O_()&&r.Ea.size>0}function Ne(r){return k(r).da.size===0}function Fd(r){r.ma=void 0}async function xp(r){r.Va.set("Online")}async function Dp(r){r.Ea.forEach((t,e)=>{Ca(r,t)})}async function Np(r,t){Fd(r),Da(r)?(r.Va.Pa(t),xa(r)):r.Va.set("Unknown")}async function kp(r,t,e){if(r.Va.set("Online"),t instanceof Qh&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.Ea.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ea.delete(u),s.ma.removeTarget(u))}(r,t)}catch(n){x(on,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await pi(r,n)}else if(t instanceof Xs?r.ma.Xe(t):t instanceof $h?r.ma.ot(t):r.ma.nt(t),!e.isEqual(q.min()))try{const n=await Ad(r.localStore);e.compareTo(n)>=0&&await function(i,a){const u=i.ma.It(a);return u.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ea.get(h);f&&i.Ea.set(h,f.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,h)=>{const f=i.Ea.get(c);if(!f)return;i.Ea.set(c,f.withResumeToken(dt.EMPTY_BYTE_STRING,f.snapshotVersion)),Md(i,c);const g=new re(f.target,c,h,f.sequenceNumber);Ca(i,g)}),i.remoteSyncer.applyRemoteEvent(u)}(r,e)}catch(n){x(on,"Failed to raise snapshot:",n),await pi(r,n)}}async function pi(r,t,e){if(!xe(t))throw t;r.da.add(1),await er(r),r.Va.set("Offline"),e||(e=()=>Ad(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{x(on,"Retrying IndexedDB access"),await e(),r.da.delete(1),await hs(r)})}function Od(r,t){return t().catch(e=>pi(r,e,t))}async function nr(r){const t=k(r),e=Ve(t);let n=t.Ia.length>0?t.Ia[t.Ia.length-1].batchId:ve;for(;Mp(t);)try{const s=await _p(t.localStore,n);if(s===null){t.Ia.length===0&&e.k_();break}n=s.batchId,Fp(t,s)}catch(s){await pi(t,s)}Ld(t)&&Bd(t)}function Mp(r){return Ne(r)&&r.Ia.length<10}function Fp(r,t){r.Ia.push(t);const e=Ve(r);e.N_()&&e.ea&&e.ta(t.mutations)}function Ld(r){return Ne(r)&&!Ve(r).O_()&&r.Ia.length>0}function Bd(r){Ve(r).start()}async function Op(r){Ve(r).ia()}async function Lp(r){const t=Ve(r);for(const e of r.Ia)t.ta(e.mutations)}async function Bp(r,t,e){const n=r.Ia.shift(),s=ga.from(n,t,e);await Od(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await nr(r)}async function qp(r,t){t&&Ve(r).ea&&await async function(n,s){if(function(a){return jh(a)&&a!==V.ABORTED}(s.code)){const i=n.Ia.shift();Ve(n).L_(),await Od(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await nr(n)}}(r,t),Ld(r)&&Bd(r)}async function hl(r,t){const e=k(r);e.asyncQueue.verifyOperationInProgress(),x(on,"RemoteStore received new credentials");const n=Ne(e);e.da.add(3),await er(e),n&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await hs(e)}async function Wo(r,t){const e=k(r);t?(e.da.delete(2),await hs(e)):t||(e.da.add(2),await er(e),e.Va.set("Unknown"))}function rr(r){return r.fa||(r.fa=function(e,n,s){const i=k(e);return i.oa(),new Rp(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{e_:xp.bind(null,r),n_:Dp.bind(null,r),i_:Np.bind(null,r),Y_:kp.bind(null,r)}),r.Aa.push(async t=>{t?(r.fa.L_(),Da(r)?xa(r):r.Va.set("Unknown")):(await r.fa.stop(),Fd(r))})),r.fa}function Ve(r){return r.ga||(r.ga=function(e,n,s){const i=k(e);return i.oa(),new Pp(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{e_:()=>Promise.resolve(),n_:Op.bind(null,r),i_:qp.bind(null,r),na:Lp.bind(null,r),ra:Bp.bind(null,r)}),r.Aa.push(async t=>{t?(r.ga.L_(),await nr(r)):(await r.ga.stop(),r.Ia.length>0&&(x(on,`Stopping write stream with ${r.Ia.length} pending writes`),r.Ia=[]))})),r.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new Na(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sr(r,t){if(ft("AsyncQueue",`${t}: ${r}`),xe(r))return new D(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{static emptySet(t){return new Vn(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||F.comparator(e.key,n.key):(e,n)=>F.comparator(e.key,n.key),this.keyedMap=Cr(),this.sortedSet=new rt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Vn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Vn;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.pa=new rt(F.comparator)}track(t){const e=t.doc.key,n=this.pa.get(e);n?t.type!==0&&n.type===3?this.pa=this.pa.insert(e,t):t.type===3&&n.type!==1?this.pa=this.pa.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.pa=this.pa.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.pa=this.pa.remove(e):t.type===1&&n.type===2?this.pa=this.pa.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):O(63341,{Vt:t,ya:n}):this.pa=this.pa.insert(e,t)}wa(){const t=[];return this.pa.inorderTraversal((e,n)=>{t.push(n)}),t}}class Kn{constructor(t,e,n,s,i,a,u,c,h){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Kn(t,e,Vn.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&is(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class zp{constructor(){this.queries=fl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const s=k(e),i=s.queries;s.queries=fl(),i.forEach((a,u)=>{for(const c of u.Sa)c.onError(n)})})(this,new D(V.ABORTED,"Firestore shutting down"))}}function fl(){return new ae(r=>bh(r),is)}async function ka(r,t){const e=k(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.Da()&&t.va()&&(n=2):(i=new Up,n=t.va()?0:1);try{switch(n){case 0:i.ba=await e.onListen(s,!0);break;case 1:i.ba=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=sr(a,`Initialization of query '${wn(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.Sa.push(t),t.Fa(e.onlineState),i.ba&&t.Ma(i.ba)&&Fa(e)}async function Ma(r,t){const e=k(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.va()?0:1:!i.Da()&&t.va()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Gp(r,t){const e=k(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.Sa)u.Ma(s)&&(n=!0);a.ba=s}}n&&Fa(e)}function jp(r,t,e){const n=k(r),s=n.queries.get(t);if(s)for(const i of s.Sa)i.onError(e);n.queries.delete(t)}function Fa(r){r.Ca.forEach(t=>{t.next()})}var Ho,ml;(ml=Ho||(Ho={})).xa="default",ml.Cache="cache";class Oa{constructor(t,e,n){this.query=t,this.Oa=e,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=n||{}}Ma(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Kn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Na?this.La(t)&&(this.Oa.next(t),e=!0):this.ka(t,this.onlineState)&&(this.qa(t),e=!0),this.Ba=t,e}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let e=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),e=!0),e}ka(t,e){if(!t.fromCache||!this.va())return!0;const n=e!=="Offline";return(!this.options.Qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}La(t){if(t.docChanges.length>0)return!0;const e=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}qa(t){t=Kn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==Ho.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(t,e){this.$a=t,this.byteLength=e}Ua(){return"metadata"in this.$a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t){this.serializer=t}Us(t){return Yt(this.serializer,t)}Ks(t){return t.metadata.exists?Zh(this.serializer,t.document,!1):it.newNoDocument(this.Us(t.metadata.name),this.Ws(t.metadata.readTime))}Ws(t){return mt(t)}}class $p{constructor(t,e,n){this.Ka=t,this.localStore=e,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=qd(t)}Wa(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.$a.namedQuery)this.queries.push(t.$a.namedQuery);else if(t.$a.documentMetadata){this.documents.push({metadata:t.$a.documentMetadata}),t.$a.documentMetadata.exists||++e;const n=W.fromString(t.$a.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else t.$a.document&&(this.documents[this.documents.length-1].document=t.$a.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}Ga(t){const e=new Map,n=new gl(this.serializer);for(const s of t)if(s.metadata.queries){const i=n.Us(s.metadata.name);for(const a of s.metadata.queries){const u=(e.get(a)||j()).add(i);e.set(a,u)}}return e}async complete(){const t=await yp(this.localStore,new gl(this.serializer),this.documents,this.Ka.id),e=this.Ga(this.documents);for(const n of this.queries)await Ip(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",{progress:this.progress,za:this.collectionGroups,ja:t}}}function qd(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t){this.key=t}}class zd{constructor(t){this.key=t}}class Gd{constructor(t,e){this.query=t,this.Ha=e,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=j(),this.mutatedKeys=j(),this.Za=xh(t),this.Xa=new Vn(this.Za)}get eu(){return this.Ha}tu(t,e){const n=e?e.nu:new dl,s=e?e.Xa:this.Xa;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((f,g)=>{const _=s.get(f),P=os(this.query,g)?g:null,b=!!_&&this.mutatedKeys.has(_.key),N=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let C=!1;_&&P?_.data.isEqual(P.data)?b!==N&&(n.track({type:3,doc:P}),C=!0):this.ru(_,P)||(n.track({type:2,doc:P}),C=!0,(c&&this.Za(P,c)>0||h&&this.Za(P,h)<0)&&(u=!0)):!_&&P?(n.track({type:0,doc:P}),C=!0):_&&!P&&(n.track({type:1,doc:_}),C=!0,(c||h)&&(u=!0)),C&&(P?(a=a.add(P),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{Xa:a,nu:n,Cs:u,mutatedKeys:i}}ru(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const a=t.nu.wa();a.sort((f,g)=>function(P,b){const N=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{Vt:C})}};return N(P)-N(b)}(f.type,g.type)||this.Za(f.doc,g.doc)),this.iu(n),s=s!=null&&s;const u=e&&!s?this.su():[],c=this.Ya.size===0&&this.current&&!s?1:0,h=c!==this.Ja;return this.Ja=c,a.length!==0||h?{snapshot:new Kn(this.query,t.Xa,i,a,t.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),ou:u}:{ou:u}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new dl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=j(),this.Xa.forEach(n=>{this._u(n.key)&&(this.Ya=this.Ya.add(n.key))});const e=[];return t.forEach(n=>{this.Ya.has(n)||e.push(new zd(n))}),this.Ya.forEach(n=>{t.has(n)||e.push(new Ud(n))}),e}au(t){this.Ha=t.$s,this.Ya=j();const e=this.tu(t.documents);return this.applyChanges(e,!0)}uu(){return Kn.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const ke="SyncEngine";class Qp{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Wp{constructor(t){this.key=t,this.cu=!1}}class Hp{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new ae(u=>bh(u),is),this.Pu=new Map,this.Tu=new Set,this.Iu=new rt(F.comparator),this.Eu=new Map,this.du=new va,this.Au={},this.Ru=new Map,this.Vu=sn.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function Yp(r,t,e=!0){const n=Di(r);let s;const i=n.hu.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.uu()):s=await jd(n,t,e,!0),s}async function Xp(r,t){const e=Di(r);await jd(e,t,!0,!1)}async function jd(r,t,e,n){const s=await zn(r.localStore,Nt(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let u;return n&&(u=await La(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&xi(r.remoteStore,s),u}async function La(r,t,e,n,s){r.fu=(g,_,P)=>async function(N,C,z,U){let B=C.view.tu(z);B.Cs&&(B=await fi(N.localStore,C.query,!1).then(({documents:T})=>C.view.tu(T,B)));const $=U&&U.targetChanges.get(C.targetId),J=U&&U.targetMismatches.get(C.targetId)!=null,K=C.view.applyChanges(B,N.isPrimaryClient,$,J);return Yo(N,C.targetId,K.ou),K.snapshot}(r,g,_,P);const i=await fi(r.localStore,t,!0),a=new Gd(t,i.$s),u=a.tu(i.documents),c=cs.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),h=a.applyChanges(u,r.isPrimaryClient,c);Yo(r,e,h.ou);const f=new Qp(t,e,a);return r.hu.set(t,f),r.Pu.has(e)?r.Pu.get(e).push(t):r.Pu.set(e,[t]),h.snapshot}async function Jp(r,t,e){const n=k(r),s=n.hu.get(t),i=n.Pu.get(s.targetId);if(i.length>1)return n.Pu.set(s.targetId,i.filter(a=>!is(a,t))),void n.hu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Gn(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&jn(n.remoteStore,s.targetId),$n(n,s.targetId)}).catch(Ce)):($n(n,s.targetId),await Gn(n.localStore,s.targetId,!0))}async function Zp(r,t){const e=k(r),n=e.hu.get(t),s=e.Pu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),jn(e.remoteStore,n.targetId))}async function t_(r,t,e){const n=za(r);try{const s=await function(a,u){const c=k(a),h=ct.now(),f=u.reduce((P,b)=>P.add(b.key),j());let g,_;return c.persistence.runTransaction("Locally write mutations","readwrite",P=>{let b=Lt(),N=j();return c.Bs.getEntries(P,f).next(C=>{b=C,b.forEach((z,U)=>{U.isValidDocument()||(N=N.add(z))})}).next(()=>c.localDocuments.getOverlayedDocuments(P,b)).next(C=>{g=C;const z=[];for(const U of u){const B=wg(U,g.get(U.key).overlayedDocument);B!=null&&z.push(new ue(U.key,B,yh(B.value.mapValue),ut.exists(!0)))}return c.mutationQueue.addMutationBatch(P,h,z,u)}).next(C=>{_=C;const z=C.applyToLocalDocumentSet(g,N);return c.documentOverlayCache.saveOverlays(P,C.batchId,z)})}).then(()=>({batchId:_.batchId,changes:Nh(g)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,u,c){let h=a.Au[a.currentUser.toKey()];h||(h=new rt(G)),h=h.insert(u,c),a.Au[a.currentUser.toKey()]=h}(n,s.batchId,e),await ce(n,s.changes),await nr(n.remoteStore)}catch(s){const i=sr(s,"Failed to persist write");e.reject(i)}}async function Kd(r,t){const e=k(r);try{const n=await pp(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Eu.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.cu=!0:s.modifiedDocuments.size>0?L(a.cu,14607):s.removedDocuments.size>0&&(L(a.cu,42227),a.cu=!1))}),await ce(e,n,t)}catch(n){await Ce(n)}}function pl(r,t,e){const n=k(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.hu.forEach((i,a)=>{const u=a.view.Fa(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const c=k(a);c.onlineState=u;let h=!1;c.queries.forEach((f,g)=>{for(const _ of g.Sa)_.Fa(u)&&(h=!0)}),h&&Fa(c)}(n.eventManager,t),s.length&&n.lu.Y_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function e_(r,t,e){const n=k(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Eu.get(t),i=s&&s.key;if(i){let a=new rt(F.comparator);a=a.insert(i,it.newNoDocument(i,q.min()));const u=j().add(i),c=new us(q.min(),new Map,new rt(G),a,u);await Kd(n,c),n.Iu=n.Iu.remove(i),n.Eu.delete(t),Ua(n)}else await Gn(n.localStore,t,!1).then(()=>$n(n,t,e)).catch(Ce)}async function n_(r,t){const e=k(r),n=t.batch.batchId;try{const s=await gp(e.localStore,t);qa(e,n,null),Ba(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await ce(e,s)}catch(s){await Ce(s)}}async function r_(r,t,e){const n=k(r);try{const s=await function(a,u){const c=k(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,u).next(g=>(L(g!==null,37113),f=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(n.localStore,t);qa(n,t,e),Ba(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await ce(n,s)}catch(s){await Ce(s)}}async function s_(r,t){const e=k(r);Ne(e.remoteStore)||x(ke,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(a){const u=k(a);return u.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>u.mutationQueue.getHighestUnacknowledgedBatchId(c))}(e.localStore);if(n===ve)return void t.resolve();const s=e.Ru.get(n)||[];s.push(t),e.Ru.set(n,s)}catch(n){const s=sr(n,"Initialization of waitForPendingWrites() operation failed");t.reject(s)}}function Ba(r,t){(r.Ru.get(t)||[]).forEach(e=>{e.resolve()}),r.Ru.delete(t)}function qa(r,t,e){const n=k(r);let s=n.Au[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.Au[n.currentUser.toKey()]=s}}function $n(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Pu.get(t))r.hu.delete(n),e&&r.lu.gu(n,e);r.Pu.delete(t),r.isPrimaryClient&&r.du.Hr(t).forEach(n=>{r.du.containsKey(n)||$d(r,n)})}function $d(r,t){r.Tu.delete(t.path.canonicalString());const e=r.Iu.get(t);e!==null&&(jn(r.remoteStore,e),r.Iu=r.Iu.remove(t),r.Eu.delete(e),Ua(r))}function Yo(r,t,e){for(const n of e)n instanceof Ud?(r.du.addReference(n.key,t),i_(r,n)):n instanceof zd?(x(ke,"Document no longer in limbo: "+n.key),r.du.removeReference(n.key,t),r.du.containsKey(n.key)||$d(r,n.key)):O(19791,{pu:n})}function i_(r,t){const e=t.key,n=e.path.canonicalString();r.Iu.get(e)||r.Tu.has(n)||(x(ke,"New document in limbo: "+e),r.Tu.add(n),Ua(r))}function Ua(r){for(;r.Tu.size>0&&r.Iu.size<r.maxConcurrentLimboResolutions;){const t=r.Tu.values().next().value;r.Tu.delete(t);const e=new F(W.fromString(t)),n=r.Vu.next();r.Eu.set(n,new Wp(e)),r.Iu=r.Iu.insert(e,n),xi(r.remoteStore,new re(Nt(Jn(e.path)),n,"TargetPurposeLimboResolution",Ft.le))}}async function ce(r,t,e){const n=k(r),s=[],i=[],a=[];n.hu.isEmpty()||(n.hu.forEach((u,c)=>{a.push(n.fu(c,t,e).then(h=>{var f;if((h||e)&&n.isPrimaryClient){const g=h?!h.fromCache:(f=e==null?void 0:e.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Pa.Rs(c.targetId,h);i.push(g)}}))}),await Promise.all(a),n.lu.Y_(s),await async function(c,h){const f=k(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>w.forEach(h,_=>w.forEach(_.ds,P=>f.persistence.referenceDelegate.addReference(g,_.targetId,P)).next(()=>w.forEach(_.As,P=>f.persistence.referenceDelegate.removeReference(g,_.targetId,P)))))}catch(g){if(!xe(g))throw g;x(Va,"Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const P=f.xs.get(_),b=P.snapshotVersion,N=P.withLastLimboFreeSnapshotVersion(b);f.xs=f.xs.insert(_,N)}}}(n.localStore,i))}async function o_(r,t){const e=k(r);if(!e.currentUser.isEqual(t)){x(ke,"User change. New user:",t.toKey());const n=await wd(e.localStore,t);e.currentUser=t,function(i,a){i.Ru.forEach(u=>{u.forEach(c=>{c.reject(new D(V.CANCELLED,a))})}),i.Ru.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await ce(e,n.ks)}}function a_(r,t){const e=k(r),n=e.Eu.get(t);if(n&&n.cu)return j().add(n.key);{let s=j();const i=e.Pu.get(t);if(!i)return s;for(const a of i){const u=e.hu.get(a);s=s.unionWith(u.view.eu)}return s}}async function u_(r,t){const e=k(r),n=await fi(e.localStore,t.query,!0),s=t.view.au(n);return e.isPrimaryClient&&Yo(e,t.targetId,s.ou),s}async function c_(r,t){const e=k(r);return Vd(e.localStore,t).then(n=>ce(e,n))}async function l_(r,t,e,n){const s=k(r),i=await function(u,c){const h=k(u),f=k(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",g=>f.tr(g,c).next(_=>_?h.localDocuments.getDocuments(g,_):w.resolve(null)))}(s.localStore,t);i!==null?(e==="pending"?await nr(s.remoteStore):e==="acknowledged"||e==="rejected"?(qa(s,t,n||null),Ba(s,t),function(u,c){k(k(u).mutationQueue).sr(c)}(s.localStore,t)):O(6720,"Unknown batchState",{yu:e}),await ce(s,i)):x(ke,"Cannot apply mutation batch with id: "+t)}async function h_(r,t){const e=k(r);if(Di(e),za(e),t===!0&&e.mu!==!0){const n=e.sharedClientState.getAllActiveQueryTargets(),s=await _l(e,n.toArray());e.mu=!0,await Wo(e.remoteStore,!0);for(const i of s)xi(e.remoteStore,i)}else if(t===!1&&e.mu!==!1){const n=[];let s=Promise.resolve();e.Pu.forEach((i,a)=>{e.sharedClientState.isLocalQueryTarget(a)?n.push(a):s=s.then(()=>($n(e,a),Gn(e.localStore,a,!0))),jn(e.remoteStore,a)}),await s,await _l(e,n),function(a){const u=k(a);u.Eu.forEach((c,h)=>{jn(u.remoteStore,h)}),u.du.Jr(),u.Eu=new Map,u.Iu=new rt(F.comparator)}(e),e.mu=!1,await Wo(e.remoteStore,!1)}}async function _l(r,t,e){const n=k(r),s=[],i=[];for(const a of t){let u;const c=n.Pu.get(a);if(c&&c.length!==0){u=await zn(n.localStore,Nt(c[0]));for(const h of c){const f=n.hu.get(h),g=await u_(n,f);g.snapshot&&i.push(g.snapshot)}}else{const h=await Pd(n.localStore,a);u=await zn(n.localStore,h),await La(n,Qd(h),a,!1,u.resumeToken)}s.push(u)}return n.lu.Y_(i),s}function Qd(r){return Ph(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function d_(r){return function(e){return k(k(e).persistence).Is()}(k(r).localStore)}async function f_(r,t,e,n){const s=k(r);if(s.mu)return void x(ke,"Ignoring unexpected query state notification.");const i=s.Pu.get(t);if(i&&i.length>0)switch(e){case"current":case"not-current":{const a=await Vd(s.localStore,Ch(i[0])),u=us.createSynthesizedRemoteEventForCurrentChange(t,e==="current",dt.EMPTY_BYTE_STRING);await ce(s,a,u);break}case"rejected":await Gn(s.localStore,t,!0),$n(s,t,n);break;default:O(64155,e)}}async function m_(r,t,e){const n=Di(r);if(n.mu){for(const s of t){if(n.Pu.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){x(ke,"Adding an already active target "+s);continue}const i=await Pd(n.localStore,s),a=await zn(n.localStore,i);await La(n,Qd(i),a.targetId,!1,a.resumeToken),xi(n.remoteStore,a)}for(const s of e)n.Pu.has(s)&&await Gn(n.localStore,s,!1).then(()=>{jn(n.remoteStore,s),$n(n,s)}).catch(Ce)}}function Di(r){const t=k(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Kd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=a_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=e_.bind(null,t),t.lu.Y_=Gp.bind(null,t.eventManager),t.lu.gu=jp.bind(null,t.eventManager),t}function za(r){const t=k(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=n_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=r_.bind(null,t),t}function g_(r,t,e){const n=k(r);(async function(i,a,u){try{const c=await a.getMetadata();if(await function(P,b){const N=k(P),C=mt(b.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",z=>N.Ei.getBundleMetadata(z,b.id)).then(z=>!!z&&z.createTime.compareTo(C)>=0)}(i.localStore,c))return await a.close(),u._completeWith(function(P){return{taskState:"Success",documentsLoaded:P.totalDocuments,bytesLoaded:P.totalBytes,totalDocuments:P.totalDocuments,totalBytes:P.totalBytes}}(c)),Promise.resolve(new Set);u._updateProgress(qd(c));const h=new $p(c,i.localStore,a.serializer);let f=await a.wu();for(;f;){const _=await h.Wa(f);_&&u._updateProgress(_),f=await a.wu()}const g=await h.complete();return await ce(i,g.ja,void 0),await function(P,b){const N=k(P);return N.persistence.runTransaction("Save bundle","readwrite",C=>N.Ei.saveBundleMetadata(C,b))}(i.localStore,c),u._completeWith(g.progress),Promise.resolve(g.za)}catch(c){return zt(ke,`Loading bundle failed with ${c}`),u._failWith(c),Promise.resolve(new Set)}})(n,t,e).then(s=>{n.sharedClientState.notifyBundleLoaded(s)})}class Qn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ls(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,e){return null}Cu(t,e){return null}Du(t){return vd(this.persistence,new Ed,t.initialUser,this.serializer)}Su(t){return new wa(Ci.fi,this.serializer)}bu(t){return new Dd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qn.provider={build:()=>new Qn};class Ga extends Qn{constructor(t){super(),this.cacheSizeBytes=t}vu(t,e){L(this.persistence.referenceDelegate instanceof di,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new gd(n,t.asyncQueue,e)}Su(t){const e=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new wa(n=>di.fi(n,e),this.serializer)}}class ja extends Qn{constructor(t,e,n){super(),this.Fu=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Fu.initialize(this,t),await za(this.Fu.syncEngine),await nr(this.Fu.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Du(t){return vd(this.persistence,new Ed,t.initialUser,this.serializer)}vu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new gd(n,t.asyncQueue,e)}Cu(t,e){const n=new Sm(e,this.persistence);return new Vm(t.asyncQueue,n)}Su(t){const e=Ra(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new Aa(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Nd(),Zs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(t){return new Dd}}class Wd extends ja{constructor(t,e){super(t,e,!1),this.Fu=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Fu.syncEngine;this.sharedClientState instanceof Eo&&(this.sharedClientState.syncEngine={Co:l_.bind(null,e),Fo:f_.bind(null,e),Mo:m_.bind(null,e),Is:d_.bind(null,e),vo:c_.bind(null,e)},await this.sharedClientState.start()),await this.persistence.Ji(async n=>{await h_(this.Fu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}bu(t){const e=Nd();if(!Eo.C(e))throw new D(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Ra(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Eo(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Se{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>pl(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=o_.bind(null,this.syncEngine),await Wo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new zp}()}createDatastore(t){const e=ls(t.databaseInfo.databaseId),n=function(i){return new Ap(i)}(t.databaseInfo);return function(i,a,u,c){return new Sp(i,a,u,c)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,i,a,u){return new Cp(n,s,i,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>pl(this.syncEngine,e,0),function(){return cl.C()?new cl:new Tp}())}createSyncEngine(t,e){return function(s,i,a,u,c,h,f){const g=new Hp(s,i,a,u,c,h);return f&&(g.mu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const i=k(s);x(on,"RemoteStore shutting down."),i.da.add(5),await er(i),i.Ra.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Se.provider={build:()=>new Se};function yl(r,t=10240){let e=0;return{async read(){if(e<r.byteLength){const n={value:r.slice(e,e+t),done:!1};return e+=t,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):ft("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(t,e){this.Ou=t,this.serializer=e,this.metadata=new Tt,this.buffer=new Uint8Array,this.Nu=function(){return new TextDecoder("utf-8")}(),this.Bu().then(n=>{n&&n.Ua()?this.metadata.resolve(n.$a.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.$a)}`))},n=>this.metadata.reject(n))}close(){return this.Ou.cancel()}async getMetadata(){return this.metadata.promise}async wu(){return await this.getMetadata(),this.Bu()}async Bu(){const t=await this.Lu();if(t===null)return null;const e=this.Nu.decode(t),n=Number(e);isNaN(n)&&this.ku(`length string (${e}) is not valid number`);const s=await this.qu(n);return new Kp(JSON.parse(s),t.length+n)}Qu(){return this.buffer.findIndex(t=>t===123)}async Lu(){for(;this.Qu()<0&&!await this.$u(););if(this.buffer.length===0)return null;const t=this.Qu();t<0&&this.ku("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async qu(t){for(;this.buffer.length<t;)await this.$u()&&this.ku("Reached the end of bundle when more is expected.");const e=this.Nu.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}ku(t){throw this.Ou.cancel(),new Error(`Invalid bundle format: ${t}`)}async $u(){const t=await this.Ou.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new D(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(s,i){const a=k(s),u={documents:i.map(g=>Yr(a.serializer,g))},c=await a.Yo("BatchGetDocuments",a.serializer.databaseId,W.emptyPath(),u,i.length),h=new Map;c.forEach(g=>{const _=Dg(a.serializer,g);h.set(_.key.toString(),_)});const f=[];return i.forEach(g=>{const _=h.get(g.toString());L(!!_,55234,{key:g}),f.push(_)}),f}(this.datastore,t);return e.forEach(n=>this.recordVersion(n)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(t.toString())}delete(t){this.write(new tr(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,n)=>{const s=F.fromPath(n);this.mutations.push(new fa(s,this.precondition(s)))}),await async function(n,s){const i=k(n),a={writes:s.map(u=>Xr(i.serializer,u))};await i.zo("Commit",i.serializer.databaseId,W.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw O(50498,{Uu:t.constructor.name});e=q.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new D(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(q.min())?ut.exists(!1):ut.updateTime(e):ut.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(q.min()))throw new D(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ut.updateTime(e)}return ut.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(t,e,n,s,i){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=s,this.deferred=i,this.Ku=n.maxAttempts,this.x_=new ba(this.asyncQueue,"transaction_retry")}Wu(){this.Ku-=1,this.Gu()}Gu(){this.x_.y_(async()=>{const t=new __(this.datastore),e=this.zu(t);e&&e.then(n=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(n)}).catch(s=>{this.ju(s)}))}).catch(n=>{this.ju(n)})})}zu(t){try{const e=this.updateFunction(t);return!ns(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ju(t){this.Ku>0&&this.Hu(t)?(this.Ku-=1,this.asyncQueue.enqueueAndForget(()=>(this.Gu(),Promise.resolve()))):this.deferred.reject(t)}Hu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!jh(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="FirestoreClient";class I_{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=jl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{x(be,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(x(be,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=sr(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function wo(r,t){r.asyncQueue.verifyOperationInProgress(),x(be,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await wd(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Il(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Ka(r);x(be,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>hl(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>hl(t.remoteStore,s)),r._onlineComponents=t}async function Ka(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){x(be,"Using user provided OfflineComponentProvider");try{await wo(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;zt("Error using user provided cache. Falling back to memory cache: "+e),await wo(r,new Qn)}}else x(be,"Using default OfflineComponentProvider"),await wo(r,new Ga(void 0));return r._offlineComponents}async function ki(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(x(be,"Using user provided OnlineComponentProvider"),await Il(r,r._uninitializedComponentsProvider._online)):(x(be,"Using default OnlineComponentProvider"),await Il(r,new Se))),r._onlineComponents}function Hd(r){return Ka(r).then(t=>t.persistence)}function ir(r){return Ka(r).then(t=>t.localStore)}function Yd(r){return ki(r).then(t=>t.remoteStore)}function $a(r){return ki(r).then(t=>t.syncEngine)}function Xd(r){return ki(r).then(t=>t.datastore)}async function Wn(r){const t=await ki(r),e=t.eventManager;return e.onListen=Yp.bind(null,t.syncEngine),e.onUnlisten=Jp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Xp.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Zp.bind(null,t.syncEngine),e}function T_(r){return r.asyncQueue.enqueue(async()=>{const t=await Hd(r),e=await Yd(r);return t.setNetworkEnabled(!0),function(s){const i=k(s);return i.da.delete(0),hs(i)}(e)})}function E_(r){return r.asyncQueue.enqueue(async()=>{const t=await Hd(r),e=await Yd(r);return t.setNetworkEnabled(!1),async function(s){const i=k(s);i.da.add(0),await er(i),i.Va.set("Offline")}(e)})}function v_(r,t){const e=new Tt;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,a){try{const u=await function(h,f){const g=k(h);return g.persistence.runTransaction("read document","readonly",_=>g.localDocuments.getDocument(_,f))}(s,i);u.isFoundDocument()?a.resolve(u):u.isNoDocument()?a.resolve(null):a.reject(new D(V.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(u){const c=sr(u,`Failed to get document '${i} from cache`);a.reject(c)}}(await ir(r),t,e)),e.promise}function Jd(r,t,e={}){const n=new Tt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,c,h){const f=new Ni({next:_=>{f.xu(),a.enqueueAndForget(()=>Ma(i,g));const P=_.docs.has(u);!P&&_.fromCache?h.reject(new D(V.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&_.fromCache&&c&&c.source==="server"?h.reject(new D(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new Oa(Jn(u.path),f,{includeMetadataChanges:!0,Qa:!0});return ka(i,g)}(await Wn(r),r.asyncQueue,t,e,n)),n.promise}function w_(r,t){const e=new Tt;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,a){try{const u=await fi(s,i,!0),c=new Gd(i,u.$s),h=c.tu(u.documents),f=c.applyChanges(h,!1);a.resolve(f.snapshot)}catch(u){const c=sr(u,`Failed to execute query '${i} against cache`);a.reject(c)}}(await ir(r),t,e)),e.promise}function Zd(r,t,e={}){const n=new Tt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,c,h){const f=new Ni({next:_=>{f.xu(),a.enqueueAndForget(()=>Ma(i,g)),_.fromCache&&c.source==="server"?h.reject(new D(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new Oa(u,f,{includeMetadataChanges:!0,Qa:!0});return ka(i,g)}(await Wn(r),r.asyncQueue,t,e,n)),n.promise}function A_(r,t,e){const n=new Tt;return r.asyncQueue.enqueueAndForget(async()=>{try{const s=await Xd(r);n.resolve(async function(a,u,c){var h;const f=k(a),{request:g,yt:_,parent:P}=ed(f.serializer,Vh(u),c);f.connection.Uo||delete g.parent;const b=(await f.Yo("RunAggregationQuery",f.serializer.databaseId,P,g,1)).filter(C=>!!C.result);L(b.length===1,64727);const N=(h=b[0].result)===null||h===void 0?void 0:h.aggregateFields;return Object.keys(N).reduce((C,z)=>(C[_[z]]=N[z],C),{})}(s,t,e))}catch(s){n.reject(s)}}),n.promise}function R_(r,t){const e=new Ni(t);return r.asyncQueue.enqueueAndForget(async()=>function(s,i){k(s).Ca.add(i),i.next()}(await Wn(r),e)),()=>{e.xu(),r.asyncQueue.enqueueAndForget(async()=>function(s,i){k(s).Ca.delete(i)}(await Wn(r),e))}}function P_(r,t,e,n){const s=function(a,u){let c;return c=typeof a=="string"?ta().encode(a):a,function(f,g){return new p_(f,g)}(function(f,g){if(f instanceof Uint8Array)return yl(f,g);if(f instanceof ArrayBuffer)return yl(new Uint8Array(f),g);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),u)}(e,ls(t));r.asyncQueue.enqueueAndForget(async()=>{g_(await $a(r),s,n)})}function V_(r,t){return r.asyncQueue.enqueue(async()=>function(n,s){const i=k(n);return i.persistence.runTransaction("Get named query","readonly",a=>i.Ei.getNamedQuery(a,s))}(await ir(r),t))}function S_(r,t){return r.asyncQueue.enqueue(async()=>async function(n,s){const i=k(n),a=i.indexManager,u=[];return i.persistence.runTransaction("Configure indexes","readwrite",c=>a.getFieldIndexes(c).next(h=>function(g,_,P,b,N){g=[...g],_=[..._],g.sort(P),_.sort(P);const C=g.length,z=_.length;let U=0,B=0;for(;U<z&&B<C;){const $=P(g[B],_[U]);$<0?N(g[B++]):$>0?b(_[U++]):(U++,B++)}for(;U<z;)b(_[U++]);for(;B<C;)N(g[B++])}(h,s,wm,f=>{u.push(a.addFieldIndex(c,f))},f=>{u.push(a.deleteFieldIndex(c,f))})).next(()=>w.waitFor(u)))}(await ir(r),t))}function b_(r,t){return r.asyncQueue.enqueue(async()=>function(n,s){k(n).Ms.fs=s}(await ir(r),t))}function C_(r){return r.asyncQueue.enqueue(async()=>function(e){const n=k(e),s=n.indexManager;return n.persistence.runTransaction("Delete All Indexes","readwrite",i=>s.deleteAllFieldIndexes(i))}(await ir(r)))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(r,t,e){if(!e)throw new D(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function x_(r,t,e,n){if(t===!0&&n===!0)throw new D(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function El(r){if(!F.isDocumentKey(r))throw new D(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function vl(r){if(F.isDocumentKey(r))throw new D(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Mi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O(12329,{type:typeof r})}function Q(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new D(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Mi(r);throw new D(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}function ef(r,t){if(t<=0)throw new D(V.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="firestore.googleapis.com",wl=!0;class Al{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new D(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nf,this.ssl=wl}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:wl;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ld;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<md)throw new D(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}x_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tf((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new D(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new D(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new D(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ds{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Al({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Al(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mm;switch(n.type){case"firstParty":return new ym(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Tl.get(e);n&&(x("ComponentProvider","Removing Datastore"),Tl.delete(e),n.terminate())}(this),Promise.resolve()}}function D_(r,t,e,n={}){var s;r=Q(r,ds);const i=Jo(t),a=r._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:r._getEmulatorOptions()}),c=`${t}:${e}`;i&&(Dl(`https://${c}`),rm("Firestore",!0)),a.host!==nf&&a.host!==c&&zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:n});if(!es(h,u)&&(r._setSettings(h),n.mockUserToken)){let f,g;if(typeof n.mockUserToken=="string")f=n.mockUserToken,g=It.MOCK_USER;else{f=sm(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const _=n.mockUserToken.sub||n.mockUserToken.user_id;if(!_)throw new D(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new It(_)}r._authCredentials=new gm(new Gl(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Rt(this.firestore,t,this._query)}}class gt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new gt(this.firestore,t,this._key)}}class Xt extends Rt{constructor(t,e,n){super(t,e,Jn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new gt(this.firestore,null,new F(t))}withConverter(t){return new Xt(this.firestore,t,this._path)}}function cy(r,t,...e){if(r=Et(r),Qa("collection","path",t),r instanceof ds){const n=W.fromString(t,...e);return vl(n),new Xt(r,null,n)}{if(!(r instanceof gt||r instanceof Xt))throw new D(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return vl(n),new Xt(r.firestore,null,n)}}function ly(r,t){if(r=Q(r,ds),Qa("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new D(V.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Rt(r,null,function(n){return new oe(W.emptyPath(),n)}(t))}function N_(r,t,...e){if(r=Et(r),arguments.length===1&&(t=jl.newId()),Qa("doc","path",t),r instanceof ds){const n=W.fromString(t,...e);return El(n),new gt(r,null,new F(n))}{if(!(r instanceof gt||r instanceof Xt))throw new D(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return El(n),new gt(r.firestore,r instanceof Xt?r.converter:null,new F(n))}}function hy(r,t){return r=Et(r),t=Et(t),(r instanceof gt||r instanceof Xt)&&(t instanceof gt||t instanceof Xt)&&r.firestore===t.firestore&&r.path===t.path&&r.converter===t.converter}function rf(r,t){return r=Et(r),t=Et(t),r instanceof Rt&&t instanceof Rt&&r.firestore===t.firestore&&is(r._query,t._query)&&r.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="AsyncQueue";class Pl{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new ba(this,"async_queue_retry"),this.rc=()=>{const n=Zs();n&&x(Rl,"Visibility state changed to "+n.visibilityState),this.x_.b_()},this.sc=t;const e=Zs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const e=Zs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const e=new Tt;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!xe(t))throw t;x(Rl,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const e=this.sc.then(()=>(this.ec=!0,t().catch(n=>{throw this.Xu=n,this.ec=!1,ft("INTERNAL UNHANDLED ERROR: ",Vl(n)),n}).then(n=>(this.ec=!1,n))));return this.sc=e,e}enqueueAfterDelay(t,e,n){this.oc(),this.nc.indexOf(t)>-1&&(e=0);const s=Na.createAndSchedule(this,t,e,n,i=>this.uc(i));return this.Zu.push(s),s}oc(){this.Xu&&O(47125,{cc:Vl(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const e of this.Zu)if(e.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Zu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const e=this.Zu.indexOf(t);this.Zu.splice(e,1)}}function Vl(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class k_{constructor(){this._progressObserver={},this._taskCompletionResolver=new Tt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=-1;class nt extends ds{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Pl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Pl(t),this._firestoreClient=void 0,await t}}}function fy(r,t,e){e||(e=$r);const n=Nl(r,"firestore");if(n.isInitialized(e)){const s=n.getImmediate({identifier:e}),i=n.getOptions(e);if(es(i,t))return s;throw new D(V.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new D(V.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<md)throw new D(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.host&&Jo(t.host)&&Dl(t.host),n.initialize({options:t,instanceIdentifier:e})}function my(r,t){const e=typeof r=="object"?r:im(),n=typeof r=="string"?r:t||$r,s=Nl(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=om("firestore");i&&D_(s,...i)}return s}function lt(r){if(r._terminated)throw new D(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||sf(r),r._firestoreClient}function sf(r){var t,e,n;const s=r._freezeSettings(),i=function(u,c,h,f){return new ng(u,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,tf(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new I_(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(r._componentsProvider))}function gy(r,t){zt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();return of(r,Se.provider,{build:n=>new ja(n,e.cacheSizeBytes,t==null?void 0:t.forceOwnership)}),Promise.resolve()}async function py(r){zt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();of(r,Se.provider,{build:e=>new Wd(e,t.cacheSizeBytes)})}function of(r,t,e){if((r=Q(r,nt))._firestoreClient||r._terminated)throw new D(V.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new D(V.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:t,_offline:e},sf(r)}function _y(r){if(r._initialized&&!r._terminated)throw new D(V.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Tt;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Ht.C())return Promise.resolve();const s=n+Td;await Ht.delete(s)}(Ra(r._databaseId,r._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function yy(r){return function(e){const n=new Tt;return e.asyncQueue.enqueueAndForget(async()=>s_(await $a(e),n)),n.promise}(lt(r=Q(r,nt)))}function Iy(r){return T_(lt(r=Q(r,nt)))}function Ty(r){return E_(lt(r=Q(r,nt)))}function Ey(r){return am(r.app,"firestore",r._databaseId.database),r._delete()}function vy(r,t){const e=lt(r=Q(r,nt)),n=new k_;return P_(e,r._databaseId,t,n),n}function wy(r,t){return V_(lt(r=Q(r,nt)),t).then(e=>e?new Rt(r,null,e.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class M_{constructor(t,e,n){this._userDataWriter=e,this._data=n,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t){this._byteString=t}static fromBase64String(t){try{return new an(dt.fromBase64String(t))}catch(e){throw new D(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new an(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function Ay(){return new un(Vo)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=/^__.*__$/;class O_{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ue(t,this.data,this.fieldMask,e,this.fieldTransforms):new Zn(t,this.data,e,this.fieldTransforms)}}class af{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ue(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function uf(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{Ic:r})}}class Oi{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(t){return new Oi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:n,Rc:!1});return s.Vc(t),s}mc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:n,Rc:!1});return s.Ec(),s}fc(t){return this.dc({path:void 0,Rc:!0})}gc(t){return _i(t,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ec(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vc(this.path.get(t))}Vc(t){if(t.length===0)throw this.gc("Document fields must not be empty");if(uf(this.Ic)&&F_.test(t))throw this.gc('Document fields cannot begin and end with "__"')}}class L_{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ls(t)}bc(t,e,n,s=!1){return new Oi({Ic:t,methodName:e,wc:n,path:at.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ln(r){const t=r._freezeSettings(),e=ls(r._databaseId);return new L_(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Li(r,t,e,n,s,i={}){const a=r.bc(i.merge||i.mergeFields?2:0,t,e,s);eu("Data must be an object, but it was:",a,n);const u=hf(n,a);let c,h;if(i.merge)c=new Ot(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const _=Zr(t,g,e);if(!a.contains(_))throw new D(V.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);ff(f,_)||f.push(_)}c=new Ot(f),h=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=a.fieldTransforms;return new O_(new At(u),c,h)}class fs extends cn{_toFieldTransform(t){if(t.Ic!==2)throw t.Ic===1?t.gc(`${this._methodName}() can only appear at the top level of your update data`):t.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof fs}}function cf(r,t,e){return new Oi({Ic:3,wc:t.settings.wc,methodName:r._methodName,Rc:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Ha extends cn{_toFieldTransform(t){return new as(t.path,new Bn)}isEqual(t){return t instanceof Ha}}class Ya extends cn{constructor(t,e){super(t),this.Sc=e}_toFieldTransform(t){const e=cf(this,t,!0),n=this.Sc.map(i=>hn(i,e)),s=new tn(n);return new as(t.path,s)}isEqual(t){return t instanceof Ya&&es(this.Sc,t.Sc)}}class Xa extends cn{constructor(t,e){super(t),this.Sc=e}_toFieldTransform(t){const e=cf(this,t,!0),n=this.Sc.map(i=>hn(i,e)),s=new en(n);return new as(t.path,s)}isEqual(t){return t instanceof Xa&&es(this.Sc,t.Sc)}}class Ja extends cn{constructor(t,e){super(t),this.Dc=e}_toFieldTransform(t){const e=new qn(t.serializer,Fh(t.serializer,this.Dc));return new as(t.path,e)}isEqual(t){return t instanceof Ja&&this.Dc===t.Dc}}function Za(r,t,e,n){const s=r.bc(1,t,e);eu("Data must be an object, but it was:",s,n);const i=[],a=At.empty();De(n,(c,h)=>{const f=Bi(t,c,e);h=Et(h);const g=s.mc(f);if(h instanceof fs)i.push(f);else{const _=hn(h,g);_!=null&&(i.push(f),a.set(f,_))}});const u=new Ot(i);return new af(a,u,s.fieldTransforms)}function tu(r,t,e,n,s,i){const a=r.bc(1,t,e),u=[Zr(t,n,e)],c=[s];if(i.length%2!=0)throw new D(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)u.push(Zr(t,i[_])),c.push(i[_+1]);const h=[],f=At.empty();for(let _=u.length-1;_>=0;--_)if(!ff(h,u[_])){const P=u[_];let b=c[_];b=Et(b);const N=a.mc(P);if(b instanceof fs)h.push(P);else{const C=hn(b,N);C!=null&&(h.push(P),f.set(P,C))}}const g=new Ot(h);return new af(f,g,a.fieldTransforms)}function lf(r,t,e,n=!1){return hn(e,r.bc(n?4:3,t))}function hn(r,t){if(df(r=Et(r)))return eu("Unsupported field value:",t,r),hf(r,t);if(r instanceof cn)return function(n,s){if(!uf(s.Ic))throw s.gc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Rc&&t.Ic!==4)throw t.gc("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const u of n){let c=hn(u,s.fc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(r,t)}return function(n,s){if((n=Et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Fh(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ct.fromDate(n);return{timestampValue:Un(s.serializer,i)}}if(n instanceof ct){const i=new ct(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Un(s.serializer,i)}}if(n instanceof Wa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof an)return{bytesValue:Wh(s.serializer,n._byteString)};if(n instanceof gt){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ya(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Fi)return function(a,u){return{mapValue:{fields:{[aa]:{stringValue:ua},[Fn]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.gc("VectorValues must only contain numeric values.");return da(u.serializer,h)})}}}}}}(n,s);throw s.gc(`Unsupported field value: ${Mi(n)}`)}(r,t)}function hf(r,t){const e={};return ch(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):De(r,(n,s)=>{const i=hn(s,t.Ac(n));i!=null&&(e[n]=i)}),{mapValue:{fields:e}}}function df(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ct||r instanceof Wa||r instanceof an||r instanceof gt||r instanceof cn||r instanceof Fi)}function eu(r,t,e){if(!df(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=Mi(e);throw n==="an object"?t.gc(r+" a custom object"):t.gc(r+" "+n)}}function Zr(r,t,e){if((t=Et(t))instanceof un)return t._internalPath;if(typeof t=="string")return Bi(r,t);throw _i("Field path arguments must be of type string or ",r,!1,void 0,e)}const B_=new RegExp("[~\\*/\\[\\]]");function Bi(r,t,e){if(t.search(B_)>=0)throw _i(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new un(...t.split("."))._internalPath}catch{throw _i(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function _i(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${n}`),a&&(c+=` in document ${s}`),c+=")"),new D(V.INVALID_ARGUMENT,u+r+c)}function ff(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new q_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(qi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class q_ extends ts{data(){return super.data()}}function qi(r,t){return typeof t=="string"?Bi(r,t):t instanceof un?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new D(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nu{}class ms extends nu{}function Ry(r,t,...e){let n=[];t instanceof nu&&n.push(t),n=n.concat(e),function(i){const a=i.filter(c=>c instanceof or).length,u=i.filter(c=>c instanceof gs).length;if(a>1||a>0&&u>0)throw new D(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class gs extends ms{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new gs(t,e,n)}_apply(t){const e=this._parse(t);return pf(t._query,e),new Rt(t.firestore,t.converter,Lo(t._query,e))}_parse(t){const e=ln(t.firestore);return function(i,a,u,c,h,f,g){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new D(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){bl(g,f);const b=[];for(const N of g)b.push(Sl(c,i,N));_={arrayValue:{values:b}}}else _=Sl(c,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||bl(g,f),_=lf(u,a,g,f==="in"||f==="not-in");return H.create(h,f,_)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Py(r,t,e){const n=t,s=qi("where",r);return gs._create(s,n,e)}class or extends nu{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new or(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Z.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let a=s;const u=i.getFlattenedFilters();for(const c of u)pf(a,c),a=Lo(a,c)}(t._query,e),new Rt(t.firestore,t.converter,Lo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Vy(...r){return r.forEach(t=>_f("or",t)),or._create("or",r)}function Sy(...r){return r.forEach(t=>_f("and",t)),or._create("and",r)}class ru extends ms{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ru(t,e)}_apply(t){const e=function(s,i,a){if(s.startAt!==null)throw new D(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Hr(i,a)}(t._query,this._field,this._direction);return new Rt(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new oe(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function by(r,t="asc"){const e=t,n=qi("orderBy",r);return ru._create(n,e)}class Ui extends ms{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new Ui(t,e,n)}_apply(t){return new Rt(t.firestore,t.converter,ai(t._query,this._limit,this._limitType))}}function Cy(r){return ef("limit",r),Ui._create("limit",r,"F")}function xy(r){return ef("limitToLast",r),Ui._create("limitToLast",r,"L")}class zi extends ms{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new zi(t,e,n)}_apply(t){const e=gf(t,this.type,this._docOrFields,this._inclusive);return new Rt(t.firestore,t.converter,function(s,i){return new oe(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(t._query,e))}}function Dy(...r){return zi._create("startAt",r,!0)}function Ny(...r){return zi._create("startAfter",r,!1)}class Gi extends ms{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Gi(t,e,n)}_apply(t){const e=gf(t,this.type,this._docOrFields,this._inclusive);return new Rt(t.firestore,t.converter,function(s,i){return new oe(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(t._query,e))}}function ky(...r){return Gi._create("endBefore",r,!1)}function My(...r){return Gi._create("endAt",r,!0)}function gf(r,t,e,n){if(e[0]=Et(e[0]),e[0]instanceof ts)return function(i,a,u,c,h){if(!c)throw new D(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const f=[];for(const g of Pn(i))if(g.field.isKeyField())f.push(Je(a,c.key));else{const _=c.data.field(g.field);if(vi(_))throw new D(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const P=g.field.canonicalString();throw new D(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${P}' (used as the orderBy) does not exist.`)}f.push(_)}return new Pe(f,h)}(r._query,r.firestore._databaseId,t,e[0]._document,n);{const s=ln(r.firestore);return function(a,u,c,h,f,g){const _=a.explicitOrderBy;if(f.length>_.length)throw new D(V.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const P=[];for(let b=0;b<f.length;b++){const N=f[b];if(_[b].field.isKeyField()){if(typeof N!="string")throw new D(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof N}`);if(!la(a)&&N.indexOf("/")!==-1)throw new D(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${N}' contains a slash.`);const C=a.path.child(W.fromString(N));if(!F.isDocumentKey(C))throw new D(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${C}' is not because it contains an odd number of segments.`);const z=new F(C);P.push(Je(u,z))}else{const C=lf(c,h,N);P.push(C)}}return new Pe(P,g)}(r._query,r.firestore._databaseId,s,t,e,n)}}function Sl(r,t,e){if(typeof(e=Et(e))=="string"){if(e==="")throw new D(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!la(t)&&e.indexOf("/")!==-1)throw new D(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(W.fromString(e));if(!F.isDocumentKey(n))throw new D(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Je(r,new F(n))}if(e instanceof gt)return Je(r,e._key);throw new D(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mi(e)}.`)}function bl(r,t){if(!Array.isArray(r)||r.length===0)throw new D(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function pf(r,t){const e=function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new D(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function _f(r,t){if(!(t instanceof gs||t instanceof or))throw new D(V.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class yf{convertValue(t,e="none"){switch(Ae(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ie(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return De(t,(s,i)=>{n[s]=this.convertValue(i,e)}),n}convertVectorValue(t){var e,n,s;const i=(s=(n=(e=t.fields)===null||e===void 0?void 0:e[Fn].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(a=>ot(a.doubleValue));return new Fi(i)}convertGeoPoint(t){return new Wa(ot(t.latitude),ot(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=wi(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Kr(t));default:return null}}convertTimestamp(t){const e=se(t);return new ct(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=W.fromString(t);L(id(n),9688,{name:t});const s=new Xe(n.get(1),n.get(3)),i=new F(n.popFirst(5));return s.isEqual(e)||ft(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class U_ extends yf{constructor(t){super(),this.firestore=t}convertBytes(t){return new an(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new gt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(r){return new Jr("sum",Zr("sum",r))}function Oy(r){return new Jr("avg",Zr("average",r))}function z_(){return new Jr("count")}function Ly(r,t){var e,n;return r instanceof Jr&&t instanceof Jr&&r.aggregateType===t.aggregateType&&((e=r._internalFieldPath)===null||e===void 0?void 0:e.canonicalString())===((n=t._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())}function By(r,t){return rf(r.query,t.query)&&es(r.data(),t.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Hn extends ts{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ti(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(qi("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ti extends Hn{data(t={}){return super.data(t)}}class Yn{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new We(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new ti(this._firestore,this._userDataWriter,n.key,n,new We(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const c=new ti(s._firestore,s._userDataWriter,u.doc.key,u.doc,new We(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const c=new ti(s._firestore,s._userDataWriter,u.doc.key,u.doc,new We(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return u.type!==0&&(h=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:G_(u.type),doc:c,oldIndex:h,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function G_(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:r})}}function qy(r,t){return r instanceof Hn&&t instanceof Hn?r._firestore===t._firestore&&r._key.isEqual(t._key)&&(r._document===null?t._document===null:r._document.isEqual(t._document))&&r._converter===t._converter:r instanceof Yn&&t instanceof Yn&&r._firestore===t._firestore&&rf(r.query,t.query)&&r.metadata.isEqual(t.metadata)&&r._snapshot.isEqual(t._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(r){r=Q(r,gt);const t=Q(r.firestore,nt);return Jd(lt(t),r._key).then(e=>su(t,r,e))}class Me extends yf{constructor(t){super(),this.firestore=t}convertBytes(t){return new an(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new gt(this.firestore,null,e)}}function zy(r){r=Q(r,gt);const t=Q(r.firestore,nt),e=lt(t),n=new Me(t);return v_(e,r._key).then(s=>new Hn(t,n,r._key,s,new We(s!==null&&s.hasLocalMutations,!0),r.converter))}function Gy(r){r=Q(r,gt);const t=Q(r.firestore,nt);return Jd(lt(t),r._key,{source:"server"}).then(e=>su(t,r,e))}function jy(r){r=Q(r,Rt);const t=Q(r.firestore,nt),e=lt(t),n=new Me(t);return mf(r._query),Zd(e,r._query).then(s=>new Yn(t,n,r,s))}function Ky(r){r=Q(r,Rt);const t=Q(r.firestore,nt),e=lt(t),n=new Me(t);return w_(e,r._query).then(s=>new Yn(t,n,r,s))}function $y(r){r=Q(r,Rt);const t=Q(r.firestore,nt),e=lt(t),n=new Me(t);return Zd(e,r._query,{source:"server"}).then(s=>new Yn(t,n,r,s))}function Qy(r,t,e){r=Q(r,gt);const n=Q(r.firestore,nt),s=ji(r.converter,t,e);return ps(n,[Li(ln(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,ut.none())])}function Wy(r,t,e,...n){r=Q(r,gt);const s=Q(r.firestore,nt),i=ln(s);let a;return a=typeof(t=Et(t))=="string"||t instanceof un?tu(i,"updateDoc",r._key,t,e,n):Za(i,"updateDoc",r._key,t),ps(s,[a.toMutation(r._key,ut.exists(!0))])}function Hy(r){return ps(Q(r.firestore,nt),[new tr(r._key,ut.none())])}function Yy(r,t){const e=Q(r.firestore,nt),n=N_(r),s=ji(r.converter,t);return ps(e,[Li(ln(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,ut.exists(!1))]).then(()=>n)}function Xy(r,...t){var e,n,s;r=Et(r);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Xo(t[a])||(i=t[a],a++);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Xo(t[a])){const g=t[a];t[a]=(e=g.next)===null||e===void 0?void 0:e.bind(g),t[a+1]=(n=g.error)===null||n===void 0?void 0:n.bind(g),t[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let c,h,f;if(r instanceof gt)h=Q(r.firestore,nt),f=Jn(r._key.path),c={next:g=>{t[a]&&t[a](su(h,r,g))},error:t[a+1],complete:t[a+2]};else{const g=Q(r,Rt);h=Q(g.firestore,nt),f=g._query;const _=new Me(h);c={next:P=>{t[a]&&t[a](new Yn(h,_,g,P))},error:t[a+1],complete:t[a+2]},mf(r._query)}return function(_,P,b,N){const C=new Ni(N),z=new Oa(P,C,b);return _.asyncQueue.enqueueAndForget(async()=>ka(await Wn(_),z)),()=>{C.xu(),_.asyncQueue.enqueueAndForget(async()=>Ma(await Wn(_),z))}}(lt(h),f,u,c)}function Jy(r,t){return R_(lt(r=Q(r,nt)),Xo(t)?t:{next:t})}function ps(r,t){return function(n,s){const i=new Tt;return n.asyncQueue.enqueueAndForget(async()=>t_(await $a(n),s,i)),i.promise}(lt(r),t)}function su(r,t,e){const n=e.docs.get(t._key),s=new Me(r);return new Hn(r,s,t._key,n,new We(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(r){return j_(r,{count:z_()})}function j_(r,t){const e=Q(r.firestore,nt),n=lt(e),s=uh(t,(i,a)=>new Gh(a,i.aggregateType,i._internalFieldPath));return A_(n,r._query,s).then(i=>function(u,c,h){const f=new Me(u);return new M_(c,f,h)}(e,r,i))}class K_{constructor(t){this.kind="memory",this._onlineComponentProvider=Se.provider,t!=null&&t.garbageCollector?this._offlineComponentProvider=t.garbageCollector._offlineComponentProvider:this._offlineComponentProvider={build:()=>new Ga(void 0)}}toJSON(){return{kind:this.kind}}}class $_{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=X_(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class Q_{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Qn.provider}toJSON(){return{kind:this.kind}}}class W_{constructor(t){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new Ga(t)}}toJSON(){return{kind:this.kind}}}function tI(){return new Q_}function eI(r){return new W_(r==null?void 0:r.cacheSizeBytes)}function nI(r){return new K_(r)}function rI(r){return new $_(r)}class H_{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Se.provider,this._offlineComponentProvider={build:e=>new ja(e,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}}class Y_{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Se.provider,this._offlineComponentProvider={build:e=>new Wd(e,t==null?void 0:t.cacheSizeBytes)}}}function X_(r){return new H_(r==null?void 0:r.forceOwnership)}function sI(){return new Y_}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=ln(t)}set(t,e,n){this._verifyNotCommitted();const s=Te(t,this._firestore),i=ji(s.converter,e,n),a=Li(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(a.toMutation(s._key,ut.none())),this}update(t,e,n,...s){this._verifyNotCommitted();const i=Te(t,this._firestore);let a;return a=typeof(e=Et(e))=="string"||e instanceof un?tu(this._dataReader,"WriteBatch.update",i._key,e,n,s):Za(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(a.toMutation(i._key,ut.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Te(t,this._firestore);return this._mutations=this._mutations.concat(new tr(e._key,ut.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Te(r,t){if((r=Et(r)).firestore!==t)throw new D(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=ln(t)}get(t){const e=Te(t,this._firestore),n=new U_(this._firestore);return this._transaction.lookup([e._key]).then(s=>{if(!s||s.length!==1)return O(24041);const i=s[0];if(i.isFoundDocument())return new ts(this._firestore,n,i.key,i,e.converter);if(i.isNoDocument())return new ts(this._firestore,n,e._key,null,e.converter);throw O(18433,{doc:i})})}set(t,e,n){const s=Te(t,this._firestore),i=ji(s.converter,e,n),a=Li(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,n);return this._transaction.set(s._key,a),this}update(t,e,n,...s){const i=Te(t,this._firestore);let a;return a=typeof(e=Et(e))=="string"||e instanceof un?tu(this._dataReader,"Transaction.update",i._key,e,n,s):Za(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,a),this}delete(t){const e=Te(t,this._firestore);return this._transaction.delete(e._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey extends ty{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Te(t,this._firestore),n=new Me(this._firestore);return super.get(t).then(s=>new Hn(this._firestore,n,e._key,s._document,new We(!1,!1),e.converter))}}function iI(r,t,e){r=Q(r,nt);const n=Object.assign(Object.assign({},J_),e);return function(i){if(i.maxAttempts<1)throw new D(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(i,a,u){const c=new Tt;return i.asyncQueue.enqueueAndForget(async()=>{const h=await Xd(i);new y_(i.asyncQueue,h,u,a,c).Wu()}),c.promise}(lt(r),s=>t(new ey(r,s)),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(){return new fs("deleteField")}function aI(){return new Ha("serverTimestamp")}function uI(...r){return new Ya("arrayUnion",r)}function cI(...r){return new Xa("arrayRemove",r)}function lI(r){return new Ja("increment",r)}function hI(r){return new Fi(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(r){return lt(r=Q(r,nt)),new Z_(r,t=>ps(r,t))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(r,t){const e=lt(r=Q(r,nt));if(!e._uninitializedComponentsProvider||e._uninitializedComponentsProvider._offline.kind==="memory")return zt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const n=function(i){const a=typeof i=="string"?function(h){try{return JSON.parse(h)}catch(f){throw new D(V.INVALID_ARGUMENT,"Failed to parse JSON: "+(f==null?void 0:f.message))}}(i):i,u=[];if(Array.isArray(a.indexes))for(const c of a.indexes){const h=Cl(c,"collectionGroup"),f=[];if(Array.isArray(c.fields))for(const g of c.fields){const _=Bi("setIndexConfiguration",Cl(g,"fieldPath"));g.arrayConfig==="CONTAINS"?f.push(new He(_,2)):g.order==="ASCENDING"?f.push(new He(_,0)):g.order==="DESCENDING"&&f.push(new He(_,1))}u.push(new Cn(Cn.UNKNOWN_ID,h,f,xn.empty()))}return u}(t);return S_(e,n)}function Cl(r,t){if(typeof r[t]!="string")throw new D(V.INVALID_ARGUMENT,"Missing string value for: "+t);return r[t]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(t){this._firestore=t,this.type="PersistentCacheIndexManager"}}function mI(r){var t;r=Q(r,nt);const e=xl.get(r);if(e)return e;if(((t=lt(r)._uninitializedComponentsProvider)===null||t===void 0?void 0:t._offline.kind)!=="persistent")return null;const n=new ny(r);return xl.set(r,n),n}function gI(r){If(r,!0)}function pI(r){If(r,!1)}function _I(r){C_(lt(r._firestore)).then(t=>x("deleting all persistent cache indexes succeeded")).catch(t=>zt("deleting all persistent cache indexes failed",t))}function If(r,t){b_(lt(r._firestore),t).then(e=>x(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch(e=>zt(`setting persistent cache index auto creation isEnabled=${t} failed`,e))}const xl=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(r){var t;const e=(t=lt(Q(r.firestore,nt))._onlineComponents)===null||t===void 0?void 0:t.datastore.serializer;return e===void 0?null:Vi(e,Nt(r._query)).gt}function II(r,t){var e;const n=uh(t,(i,a)=>new Gh(a,i.aggregateType,i._internalFieldPath)),s=(e=lt(Q(r.firestore,nt))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return s===void 0?null:ed(s,Vh(r._query),n,!0).request}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(t){return iu.instance.onExistenceFilterMismatch(t)}}class iu{constructor(){this.vc=new Map}static get instance(){return Gs||(Gs=new iu,function(e){if(ui)throw new Error("a TestingHooksSpi instance is already set");ui=e}(Gs)),Gs}ht(t){this.vc.forEach(e=>e(t))}onExistenceFilterMismatch(t){const e=Symbol(),n=this.vc;return n.set(e,t),()=>n.delete(e)}}let Gs=null;(function(t,e=!0){(function(s){Xn=s})(lm),hm(new dm("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new nt(new pm(n.getProvider("auth-internal")),new Im(a,n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new D(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xe(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:e},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),oc(uc,cc,t),oc(uc,cc,"esm2017")})();export{yf as AbstractUserDataWriter,Jr as AggregateField,M_ as AggregateQuerySnapshot,an as Bytes,dy as CACHE_SIZE_UNLIMITED,Xt as CollectionReference,gt as DocumentReference,Hn as DocumentSnapshot,un as FieldPath,cn as FieldValue,nt as Firestore,D as FirestoreError,Wa as GeoPoint,k_ as LoadBundleTask,ny as PersistentCacheIndexManager,Rt as Query,or as QueryCompositeFilterConstraint,ms as QueryConstraint,ti as QueryDocumentSnapshot,Gi as QueryEndAtConstraint,gs as QueryFieldFilterConstraint,Ui as QueryLimitConstraint,ru as QueryOrderByConstraint,Yn as QuerySnapshot,zi as QueryStartAtConstraint,We as SnapshotMetadata,ct as Timestamp,ey as Transaction,Fi as VectorValue,Z_ as WriteBatch,jl as _AutoId,dt as _ByteString,Xe as _DatabaseId,F as _DocumentKey,oy as _EmptyAppCheckTokenProvider,mm as _EmptyAuthCredentialsProvider,at as _FieldPath,TI as _TestingHooks,Q as _cast,iy as _debugAssert,II as _internalAggregationQueryToProtoRunAggregationQueryRequest,yI as _internalQueryToProtoQueryTarget,uy as _isBase64Available,zt as _logWarn,x_ as _validateIsNotUsedTogether,Yy as addDoc,Ly as aggregateFieldEqual,By as aggregateQuerySnapshotEqual,Sy as and,cI as arrayRemove,uI as arrayUnion,Oy as average,_y as clearIndexedDbPersistence,cy as collection,ly as collectionGroup,D_ as connectFirestoreEmulator,z_ as count,_I as deleteAllPersistentCacheIndexes,Hy as deleteDoc,oI as deleteField,Ty as disableNetwork,pI as disablePersistentCacheIndexAutoCreation,N_ as doc,Ay as documentId,gy as enableIndexedDbPersistence,py as enableMultiTabIndexedDbPersistence,Iy as enableNetwork,gI as enablePersistentCacheIndexAutoCreation,My as endAt,ky as endBefore,lt as ensureFirestoreConfigured,ps as executeWrite,j_ as getAggregateFromServer,Zy as getCountFromServer,Uy as getDoc,zy as getDocFromCache,Gy as getDocFromServer,jy as getDocs,Ky as getDocsFromCache,$y as getDocsFromServer,my as getFirestore,mI as getPersistentCacheIndexManager,lI as increment,fy as initializeFirestore,Cy as limit,xy as limitToLast,vy as loadBundle,tI as memoryEagerGarbageCollector,nI as memoryLocalCache,eI as memoryLruGarbageCollector,wy as namedQuery,Xy as onSnapshot,Jy as onSnapshotsInSync,Vy as or,by as orderBy,rI as persistentLocalCache,sI as persistentMultipleTabManager,X_ as persistentSingleTabManager,Ry as query,rf as queryEqual,hy as refEqual,iI as runTransaction,aI as serverTimestamp,Qy as setDoc,fI as setIndexConfiguration,sy as setLogLevel,qy as snapshotEqual,Ny as startAfter,Dy as startAt,Fy as sum,Ey as terminate,Wy as updateDoc,hI as vector,yy as waitForPendingWrites,Py as where,dI as writeBatch};
