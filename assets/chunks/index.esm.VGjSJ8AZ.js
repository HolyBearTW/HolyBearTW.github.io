import{F as vd,h as Et,L as Ad,j as Xt,k as Ls,l as Rd,g as Pd,c as Tc,m as Vd,e as Sd,n as As,o as bd,p as Ec,S as Cd,d as xd,C as Dd,r as ou}from"./index.esm2017.DjmjxxN_.js";var au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Be,wc;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function I(){}I.prototype=p.prototype,T.D=p.prototype,T.prototype=new I,T.prototype.constructor=T,T.C=function(E,w,R){for(var y=Array(arguments.length-2),Ht=2;Ht<arguments.length;Ht++)y[Ht-2]=arguments[Ht];return p.prototype[w].apply(E,y)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,I){I||(I=0);var E=Array(16);if(typeof p=="string")for(var w=0;16>w;++w)E[w]=p.charCodeAt(I++)|p.charCodeAt(I++)<<8|p.charCodeAt(I++)<<16|p.charCodeAt(I++)<<24;else for(w=0;16>w;++w)E[w]=p[I++]|p[I++]<<8|p[I++]<<16|p[I++]<<24;p=T.g[0],I=T.g[1],w=T.g[2];var R=T.g[3],y=p+(R^I&(w^R))+E[0]+3614090360&4294967295;p=I+(y<<7&4294967295|y>>>25),y=R+(w^p&(I^w))+E[1]+3905402710&4294967295,R=p+(y<<12&4294967295|y>>>20),y=w+(I^R&(p^I))+E[2]+606105819&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(p^w&(R^p))+E[3]+3250441966&4294967295,I=w+(y<<22&4294967295|y>>>10),y=p+(R^I&(w^R))+E[4]+4118548399&4294967295,p=I+(y<<7&4294967295|y>>>25),y=R+(w^p&(I^w))+E[5]+1200080426&4294967295,R=p+(y<<12&4294967295|y>>>20),y=w+(I^R&(p^I))+E[6]+2821735955&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(p^w&(R^p))+E[7]+4249261313&4294967295,I=w+(y<<22&4294967295|y>>>10),y=p+(R^I&(w^R))+E[8]+1770035416&4294967295,p=I+(y<<7&4294967295|y>>>25),y=R+(w^p&(I^w))+E[9]+2336552879&4294967295,R=p+(y<<12&4294967295|y>>>20),y=w+(I^R&(p^I))+E[10]+4294925233&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(p^w&(R^p))+E[11]+2304563134&4294967295,I=w+(y<<22&4294967295|y>>>10),y=p+(R^I&(w^R))+E[12]+1804603682&4294967295,p=I+(y<<7&4294967295|y>>>25),y=R+(w^p&(I^w))+E[13]+4254626195&4294967295,R=p+(y<<12&4294967295|y>>>20),y=w+(I^R&(p^I))+E[14]+2792965006&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(p^w&(R^p))+E[15]+1236535329&4294967295,I=w+(y<<22&4294967295|y>>>10),y=p+(w^R&(I^w))+E[1]+4129170786&4294967295,p=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(p^I))+E[6]+3225465664&4294967295,R=p+(y<<9&4294967295|y>>>23),y=w+(p^I&(R^p))+E[11]+643717713&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^p&(w^R))+E[0]+3921069994&4294967295,I=w+(y<<20&4294967295|y>>>12),y=p+(w^R&(I^w))+E[5]+3593408605&4294967295,p=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(p^I))+E[10]+38016083&4294967295,R=p+(y<<9&4294967295|y>>>23),y=w+(p^I&(R^p))+E[15]+3634488961&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^p&(w^R))+E[4]+3889429448&4294967295,I=w+(y<<20&4294967295|y>>>12),y=p+(w^R&(I^w))+E[9]+568446438&4294967295,p=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(p^I))+E[14]+3275163606&4294967295,R=p+(y<<9&4294967295|y>>>23),y=w+(p^I&(R^p))+E[3]+4107603335&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^p&(w^R))+E[8]+1163531501&4294967295,I=w+(y<<20&4294967295|y>>>12),y=p+(w^R&(I^w))+E[13]+2850285829&4294967295,p=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(p^I))+E[2]+4243563512&4294967295,R=p+(y<<9&4294967295|y>>>23),y=w+(p^I&(R^p))+E[7]+1735328473&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^p&(w^R))+E[12]+2368359562&4294967295,I=w+(y<<20&4294967295|y>>>12),y=p+(I^w^R)+E[5]+4294588738&4294967295,p=I+(y<<4&4294967295|y>>>28),y=R+(p^I^w)+E[8]+2272392833&4294967295,R=p+(y<<11&4294967295|y>>>21),y=w+(R^p^I)+E[11]+1839030562&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^p)+E[14]+4259657740&4294967295,I=w+(y<<23&4294967295|y>>>9),y=p+(I^w^R)+E[1]+2763975236&4294967295,p=I+(y<<4&4294967295|y>>>28),y=R+(p^I^w)+E[4]+1272893353&4294967295,R=p+(y<<11&4294967295|y>>>21),y=w+(R^p^I)+E[7]+4139469664&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^p)+E[10]+3200236656&4294967295,I=w+(y<<23&4294967295|y>>>9),y=p+(I^w^R)+E[13]+681279174&4294967295,p=I+(y<<4&4294967295|y>>>28),y=R+(p^I^w)+E[0]+3936430074&4294967295,R=p+(y<<11&4294967295|y>>>21),y=w+(R^p^I)+E[3]+3572445317&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^p)+E[6]+76029189&4294967295,I=w+(y<<23&4294967295|y>>>9),y=p+(I^w^R)+E[9]+3654602809&4294967295,p=I+(y<<4&4294967295|y>>>28),y=R+(p^I^w)+E[12]+3873151461&4294967295,R=p+(y<<11&4294967295|y>>>21),y=w+(R^p^I)+E[15]+530742520&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^p)+E[2]+3299628645&4294967295,I=w+(y<<23&4294967295|y>>>9),y=p+(w^(I|~R))+E[0]+4096336452&4294967295,p=I+(y<<6&4294967295|y>>>26),y=R+(I^(p|~w))+E[7]+1126891415&4294967295,R=p+(y<<10&4294967295|y>>>22),y=w+(p^(R|~I))+E[14]+2878612391&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~p))+E[5]+4237533241&4294967295,I=w+(y<<21&4294967295|y>>>11),y=p+(w^(I|~R))+E[12]+1700485571&4294967295,p=I+(y<<6&4294967295|y>>>26),y=R+(I^(p|~w))+E[3]+2399980690&4294967295,R=p+(y<<10&4294967295|y>>>22),y=w+(p^(R|~I))+E[10]+4293915773&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~p))+E[1]+2240044497&4294967295,I=w+(y<<21&4294967295|y>>>11),y=p+(w^(I|~R))+E[8]+1873313359&4294967295,p=I+(y<<6&4294967295|y>>>26),y=R+(I^(p|~w))+E[15]+4264355552&4294967295,R=p+(y<<10&4294967295|y>>>22),y=w+(p^(R|~I))+E[6]+2734768916&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~p))+E[13]+1309151649&4294967295,I=w+(y<<21&4294967295|y>>>11),y=p+(w^(I|~R))+E[4]+4149444226&4294967295,p=I+(y<<6&4294967295|y>>>26),y=R+(I^(p|~w))+E[11]+3174756917&4294967295,R=p+(y<<10&4294967295|y>>>22),y=w+(p^(R|~I))+E[2]+718787259&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~p))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+R&4294967295}n.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var I=p-this.blockSize,E=this.B,w=this.h,R=0;R<p;){if(w==0)for(;R<=I;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<p;)if(E[w++]=T.charCodeAt(R++),w==this.blockSize){s(this,E),w=0;break}}else for(;R<p;)if(E[w++]=T[R++],w==this.blockSize){s(this,E),w=0;break}}this.h=w,this.o+=p},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var I=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=I&255,I/=256;for(this.u(T),T=Array(16),p=I=0;4>p;++p)for(var E=0;32>E;E+=8)T[I++]=this.g[p]>>>E&255;return T};function i(T,p){var I=u;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=p(T)}function a(T,p){this.h=p;for(var I=[],E=!0,w=T.length-1;0<=w;w--){var R=T[w]|0;E&&R==p||(I[w]=R,E=!1)}this.g=I}var u={};function c(T){return-128<=T&&128>T?i(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return b(d(-T));for(var p=[],I=1,E=0;T>=I;E++)p[E]=T/I|0,I*=4294967296;return new a(p,0)}function f(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return b(f(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=d(Math.pow(p,8)),E=g,w=0;w<T.length;w+=8){var R=Math.min(8,T.length-w),y=parseInt(T.substring(w,w+R),p);8>R?(R=d(Math.pow(p,R)),E=E.j(R).add(d(y))):(E=E.j(I),E=E.add(d(y)))}return E}var g=c(0),_=c(1),P=c(16777216);r=a.prototype,r.m=function(){if(N(this))return-b(this).m();for(var T=0,p=1,I=0;I<this.g.length;I++){var E=this.i(I);T+=(0<=E?E:4294967296+E)*p,p*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(N(this))return"-"+b(this).toString(T);for(var p=d(Math.pow(T,6)),I=this,E="";;){var w=Q(I,p).g;I=U(I,w.j(p));var R=((0<I.g.length?I.g[0]:I.h)>>>0).toString(T);if(I=w,D(I))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function N(T){return T.h==-1}r.l=function(T){return T=U(this,T),N(T)?-1:D(T)?0:1};function b(T){for(var p=T.g.length,I=[],E=0;E<p;E++)I[E]=~T.g[E];return new a(I,~T.h).add(_)}r.abs=function(){return N(this)?b(this):this},r.add=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0,w=0;w<=p;w++){var R=E+(this.i(w)&65535)+(T.i(w)&65535),y=(R>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);E=y>>>16,R&=65535,y&=65535,I[w]=y<<16|R}return new a(I,I[I.length-1]&-2147483648?-1:0)};function U(T,p){return T.add(b(p))}r.j=function(T){if(D(this)||D(T))return g;if(N(this))return N(T)?b(this).j(b(T)):b(b(this).j(T));if(N(T))return b(this.j(b(T)));if(0>this.l(P)&&0>T.l(P))return d(this.m()*T.m());for(var p=this.g.length+T.g.length,I=[],E=0;E<2*p;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<T.g.length;w++){var R=this.i(E)>>>16,y=this.i(E)&65535,Ht=T.i(w)>>>16,Un=T.i(w)&65535;I[2*E+2*w]+=y*Un,G(I,2*E+2*w),I[2*E+2*w+1]+=R*Un,G(I,2*E+2*w+1),I[2*E+2*w+1]+=y*Ht,G(I,2*E+2*w+1),I[2*E+2*w+2]+=R*Ht,G(I,2*E+2*w+2)}for(E=0;E<p;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=p;E<2*p;E++)I[E]=0;return new a(I,0)};function G(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function B(T,p){this.g=T,this.h=p}function Q(T,p){if(D(p))throw Error("division by zero");if(D(T))return new B(g,g);if(N(T))return p=Q(b(T),p),new B(b(p.g),b(p.h));if(N(p))return p=Q(T,b(p)),new B(b(p.g),p.h);if(30<T.g.length){if(N(T)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var I=_,E=p;0>=E.l(T);)I=X(I),E=X(E);var w=K(I,1),R=K(E,1);for(E=K(E,2),I=K(I,2);!D(E);){var y=R.add(E);0>=y.l(T)&&(w=w.add(I),R=y),E=K(E,1),I=K(I,1)}return p=U(T,w.j(p)),new B(w,p)}for(w=g;0<=T.l(p);){for(I=Math.max(1,Math.floor(T.m()/p.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=d(I),y=R.j(p);N(y)||0<y.l(T);)I-=E,R=d(I),y=R.j(p);D(R)&&(R=_),w=w.add(R),T=U(T,y)}return new B(w,T)}r.A=function(T){return Q(this,T).h},r.and=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0;E<p;E++)I[E]=this.i(E)&T.i(E);return new a(I,this.h&T.h)},r.or=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0;E<p;E++)I[E]=this.i(E)|T.i(E);return new a(I,this.h|T.h)},r.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0;E<p;E++)I[E]=this.i(E)^T.i(E);return new a(I,this.h^T.h)};function X(T){for(var p=T.g.length+1,I=[],E=0;E<p;E++)I[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(I,T.h)}function K(T,p){var I=p>>5;p%=32;for(var E=T.g.length-I,w=[],R=0;R<E;R++)w[R]=0<p?T.i(R+I)>>>p|T.i(R+I+1)<<32-p:T.i(R+I);return new a(w,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,wc=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Be=a}).apply(typeof au<"u"?au:typeof self<"u"?self:typeof window<"u"?window:{});var us=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vc,cr,Ac,gs,Bi,Rc,Pc,Vc;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof us=="object"&&us];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,l){if(l)t:{var h=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in h))break t;h=h[A]}o=o[o.length-1],m=h[o],l=l(m),l!=m&&l!=null&&t(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,m=!1,A={next:function(){if(!m&&h<o.length){var S=h++;return{value:l(S,o[S]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,h){return o.call.apply(o.bind,arguments)}function g(o,l,h){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function _(o,l,h){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,_.apply(null,arguments)}function P(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function D(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(m,A,S){for(var F=Array(arguments.length-2),et=2;et<arguments.length;et++)F[et-2]=arguments[et];return l.prototype[A].apply(m,F)}}function N(o){const l=o.length;if(0<l){const h=Array(l);for(let m=0;m<l;m++)h[m]=o[m];return h}return[]}function b(o,l){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(c(m)){const A=o.length||0,S=m.length||0;o.length=A+S;for(let F=0;F<S;F++)o[A+F]=m[F]}else o.push(m)}}class U{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function G(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function Q(o){return Q[" "](o),o}Q[" "]=function(){};var X=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function K(o,l,h){for(const m in o)l.call(h,o[m],m,o)}function T(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function p(o){const l={};for(const h in o)l[h]=o[h];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let h,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(h in m)o[h]=m[h];for(let S=0;S<I.length;S++)h=I[S],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function w(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function R(o){u.setTimeout(()=>{throw o},0)}function y(){var o=ci;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Ht{constructor(){this.h=this.g=null}add(l,h){const m=Un.get();m.set(l,h),this.h?this.h.next=m:this.g=m,this.h=m}}var Un=new U(()=>new Gh,o=>o.reset());class Gh{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Gn,zn=!1,ci=new Ht,oa=()=>{const o=u.Promise.resolve(void 0);Gn=()=>{o.then(zh)}};var zh=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){R(h)}var l=Un;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}zn=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pt(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Pt.prototype.h=function(){this.defaultPrevented=!0};var jh=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,l),u.removeEventListener("test",h,l)}catch{}return o}();function jn(o,l){if(Pt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(X){t:{try{Q(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Kh[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&jn.aa.h.call(this)}}D(jn,Pt);var Kh={2:"touch",3:"pen",4:"mouse"};jn.prototype.h=function(){jn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var zr="closure_listenable_"+(1e6*Math.random()|0),Qh=0;function $h(o,l,h,m,A){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!m,this.ha=A,this.key=++Qh,this.da=this.fa=!1}function jr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Kr(o){this.src=o,this.g={},this.h=0}Kr.prototype.add=function(o,l,h,m,A){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var F=hi(o,l,m,A);return-1<F?(l=o[F],h||(l.fa=!1)):(l=new $h(l,this.src,S,!!m,A),l.fa=h,o.push(l)),l};function li(o,l){var h=l.type;if(h in o.g){var m=o.g[h],A=Array.prototype.indexOf.call(m,l,void 0),S;(S=0<=A)&&Array.prototype.splice.call(m,A,1),S&&(jr(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function hi(o,l,h,m){for(var A=0;A<o.length;++A){var S=o[A];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==m)return A}return-1}var di="closure_lm_"+(1e6*Math.random()|0),fi={};function aa(o,l,h,m,A){if(Array.isArray(l)){for(var S=0;S<l.length;S++)aa(o,l[S],h,m,A);return null}return h=la(h),o&&o[zr]?o.K(l,h,d(m)?!!m.capture:!1,A):Wh(o,l,h,!1,m,A)}function Wh(o,l,h,m,A,S){if(!l)throw Error("Invalid event type");var F=d(A)?!!A.capture:!!A,et=gi(o);if(et||(o[di]=et=new Kr(o)),h=et.add(l,h,m,F,S),h.proxy)return h;if(m=Hh(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)jh||(A=F),A===void 0&&(A=!1),o.addEventListener(l.toString(),m,A);else if(o.attachEvent)o.attachEvent(ca(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Hh(){function o(h){return l.call(o.src,o.listener,h)}const l=Jh;return o}function ua(o,l,h,m,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)ua(o,l[S],h,m,A);else m=d(m)?!!m.capture:!!m,h=la(h),o&&o[zr]?(o=o.i,l=String(l).toString(),l in o.g&&(S=o.g[l],h=hi(S,h,m,A),-1<h&&(jr(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete o.g[l],o.h--)))):o&&(o=gi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=hi(l,h,m,A)),(h=-1<o?l[o]:null)&&mi(h))}function mi(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[zr])li(l.i,o);else{var h=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(h,m,o.capture):l.detachEvent?l.detachEvent(ca(h),m):l.addListener&&l.removeListener&&l.removeListener(m),(h=gi(l))?(li(h,o),h.h==0&&(h.src=null,l[di]=null)):jr(o)}}}function ca(o){return o in fi?fi[o]:fi[o]="on"+o}function Jh(o,l){if(o.da)o=!0;else{l=new jn(l,this);var h=o.listener,m=o.ha||o.src;o.fa&&mi(o),o=h.call(m,l)}return o}function gi(o){return o=o[di],o instanceof Kr?o:null}var pi="__closure_events_fn_"+(1e9*Math.random()>>>0);function la(o){return typeof o=="function"?o:(o[pi]||(o[pi]=function(l){return o.handleEvent(l)}),o[pi])}function Vt(){oe.call(this),this.i=new Kr(this),this.M=this,this.F=null}D(Vt,oe),Vt.prototype[zr]=!0,Vt.prototype.removeEventListener=function(o,l,h,m){ua(this,o,l,h,m)};function kt(o,l){var h,m=o.F;if(m)for(h=[];m;m=m.F)h.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new Pt(l,o);else if(l instanceof Pt)l.target=l.target||o;else{var A=l;l=new Pt(m,o),E(l,A)}if(A=!0,h)for(var S=h.length-1;0<=S;S--){var F=l.g=h[S];A=Qr(F,m,!0,l)&&A}if(F=l.g=o,A=Qr(F,m,!0,l)&&A,A=Qr(F,m,!1,l)&&A,h)for(S=0;S<h.length;S++)F=l.g=h[S],A=Qr(F,m,!1,l)&&A}Vt.prototype.N=function(){if(Vt.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],m=0;m<h.length;m++)jr(h[m]);delete o.g[l],o.h--}}this.F=null},Vt.prototype.K=function(o,l,h,m){return this.i.add(String(o),l,!1,h,m)},Vt.prototype.L=function(o,l,h,m){return this.i.add(String(o),l,!0,h,m)};function Qr(o,l,h,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,S=0;S<l.length;++S){var F=l[S];if(F&&!F.da&&F.capture==h){var et=F.listener,wt=F.ha||F.src;F.fa&&li(o.i,F),A=et.call(wt,m)!==!1&&A}}return A&&!m.defaultPrevented}function ha(o,l,h){if(typeof o=="function")h&&(o=_(o,h));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function da(o){o.g=ha(()=>{o.g=null,o.i&&(o.i=!1,da(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Yh extends oe{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:da(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kn(o){oe.call(this),this.h=o,this.g={}}D(Kn,oe);var fa=[];function ma(o){K(o.g,function(l,h){this.g.hasOwnProperty(h)&&mi(l)},o),o.g={}}Kn.prototype.N=function(){Kn.aa.N.call(this),ma(this)},Kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _i=u.JSON.stringify,Xh=u.JSON.parse,Zh=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function yi(){}yi.prototype.h=null;function ga(o){return o.h||(o.h=o.i())}function pa(){}var Qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ii(){Pt.call(this,"d")}D(Ii,Pt);function Ti(){Pt.call(this,"c")}D(Ti,Pt);var Se={},_a=null;function $r(){return _a=_a||new Vt}Se.La="serverreachability";function ya(o){Pt.call(this,Se.La,o)}D(ya,Pt);function $n(o){const l=$r();kt(l,new ya(l))}Se.STAT_EVENT="statevent";function Ia(o,l){Pt.call(this,Se.STAT_EVENT,o),this.stat=l}D(Ia,Pt);function Ft(o){const l=$r();kt(l,new Ia(l,o))}Se.Ma="timingevent";function Ta(o,l){Pt.call(this,Se.Ma,o),this.size=l}D(Ta,Pt);function Wn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function Hn(){this.g=!0}Hn.prototype.xa=function(){this.g=!1};function td(o,l,h,m,A,S){o.info(function(){if(o.g)if(S)for(var F="",et=S.split("&"),wt=0;wt<et.length;wt++){var Y=et[wt].split("=");if(1<Y.length){var St=Y[0];Y=Y[1];var bt=St.split("_");F=2<=bt.length&&bt[1]=="type"?F+(St+"="+Y+"&"):F+(St+"=redacted&")}}else F=null;else F=S;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+l+`
`+h+`
`+F})}function ed(o,l,h,m,A,S,F){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+l+`
`+h+`
`+S+" "+F})}function tn(o,l,h,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+rd(o,h)+(m?" "+m:"")})}function nd(o,l){o.info(function(){return"TIMEOUT: "+l})}Hn.prototype.info=function(){};function rd(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var m=h[o];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var F=1;F<A.length;F++)A[F]=""}}}}return _i(h)}catch{return l}}var Wr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ea={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ei;function Hr(){}D(Hr,yi),Hr.prototype.g=function(){return new XMLHttpRequest},Hr.prototype.i=function(){return{}},Ei=new Hr;function ae(o,l,h,m){this.j=o,this.i=l,this.l=h,this.R=m||1,this.U=new Kn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wa}function wa(){this.i=null,this.g="",this.h=!1}var va={},wi={};function vi(o,l,h){o.L=1,o.v=Zr(Jt(l)),o.m=h,o.P=!0,Aa(o,null)}function Aa(o,l){o.F=Date.now(),Jr(o),o.A=Jt(o.v);var h=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),La(h.i,"t",m),o.C=0,h=o.j.J,o.h=new wa,o.g=nu(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Yh(_(o.Y,o,o.g),o.O)),l=o.U,h=o.g,m=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(fa[0]=A.toString()),A=fa);for(var S=0;S<A.length;S++){var F=aa(h,A[S],m||l.handleEvent,!1,l.h||l);if(!F)break;l.g[F.key]=F}l=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),$n(),td(o.i,o.u,o.A,o.l,o.R,o.m)}ae.prototype.ca=function(o){o=o.target;const l=this.M;l&&Yt(o)==3?l.j():this.Y(o)},ae.prototype.Y=function(o){try{if(o==this.g)t:{const bt=Yt(this.g);var l=this.g.Ba();const rn=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||Ka(this.g)))){this.J||bt!=4||l==7||(l==8||0>=rn?$n(3):$n(2)),Ai(this);var h=this.g.Z();this.X=h;e:if(Ra(this)){var m=Ka(this.g);o="";var A=m.length,S=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){be(this),Jn(this);var F="";break e}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(S&&l==A-1)});m.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=h==200,ed(this.i,this.u,this.A,this.l,this.R,bt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var et,wt=this.g;if((et=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(et)){var Y=et;break e}}Y=null}if(h=Y)tn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ri(this,h);else{this.o=!1,this.s=3,Ft(12),be(this),Jn(this);break t}}if(this.P){h=!0;let Gt;for(;!this.J&&this.C<F.length;)if(Gt=sd(this,F),Gt==wi){bt==4&&(this.s=4,Ft(14),h=!1),tn(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==va){this.s=4,Ft(15),tn(this.i,this.l,F,"[Invalid Chunk]"),h=!1;break}else tn(this.i,this.l,Gt,null),Ri(this,Gt);if(Ra(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||F.length!=0||this.h.h||(this.s=1,Ft(16),h=!1),this.o=this.o&&h,!h)tn(this.i,this.l,F,"[Invalid Chunked Response]"),be(this),Jn(this);else if(0<F.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),xi(St),St.M=!0,Ft(11))}}else tn(this.i,this.l,F,null),Ri(this,F);bt==4&&be(this),this.o&&!this.J&&(bt==4?Xa(this.j,this):(this.o=!1,Jr(this)))}else Ed(this.g),h==400&&0<F.indexOf("Unknown SID")?(this.s=3,Ft(12)):(this.s=0,Ft(13)),be(this),Jn(this)}}}catch{}finally{}};function Ra(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function sd(o,l){var h=o.C,m=l.indexOf(`
`,h);return m==-1?wi:(h=Number(l.substring(h,m)),isNaN(h)?va:(m+=1,m+h>l.length?wi:(l=l.slice(m,m+h),o.C=m+h,l)))}ae.prototype.cancel=function(){this.J=!0,be(this)};function Jr(o){o.S=Date.now()+o.I,Pa(o,o.I)}function Pa(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Wn(_(o.ba,o),l)}function Ai(o){o.B&&(u.clearTimeout(o.B),o.B=null)}ae.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(nd(this.i,this.A),this.L!=2&&($n(),Ft(17)),be(this),this.s=2,Jn(this)):Pa(this,this.S-o)};function Jn(o){o.j.G==0||o.J||Xa(o.j,o)}function be(o){Ai(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,ma(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Ri(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Pi(h.h,o))){if(!o.K&&Pi(h.h,o)&&h.G==3){try{var m=h.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)is(h),rs(h);else break t;Ci(h),Ft(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Wn(_(h.Za,h),6e3));if(1>=ba(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else xe(h,11)}else if((o.K||h.g==o)&&is(h),!G(l))for(A=h.Da.g.parse(l),l=0;l<A.length;l++){let Y=A[l];if(h.T=Y[0],Y=Y[1],h.G==2)if(Y[0]=="c"){h.K=Y[1],h.ia=Y[2];const St=Y[3];St!=null&&(h.la=St,h.j.info("VER="+h.la));const bt=Y[4];bt!=null&&(h.Aa=bt,h.j.info("SVER="+h.Aa));const rn=Y[5];rn!=null&&typeof rn=="number"&&0<rn&&(m=1.5*rn,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Gt=o.g;if(Gt){const as=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(as){var S=m.h;S.g||as.indexOf("spdy")==-1&&as.indexOf("quic")==-1&&as.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Vi(S,S.h),S.h=null))}if(m.D){const Di=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;Di&&(m.ya=Di,st(m.I,m.D,Di))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var F=o;if(m.qa=eu(m,m.J?m.ia:null,m.W),F.K){Ca(m.h,F);var et=F,wt=m.L;wt&&(et.I=wt),et.B&&(Ai(et),Jr(et)),m.g=F}else Ja(m);0<h.i.length&&ss(h)}else Y[0]!="stop"&&Y[0]!="close"||xe(h,7);else h.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?xe(h,7):bi(h):Y[0]!="noop"&&h.l&&h.l.ta(Y),h.v=0)}}$n(4)}catch{}}var id=class{constructor(o,l){this.g=o,this.map=l}};function Va(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sa(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ba(o){return o.h?1:o.g?o.g.size:0}function Pi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Vi(o,l){o.g?o.g.add(l):o.h=l}function Ca(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Va.prototype.cancel=function(){if(this.i=xa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function xa(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return N(o.i)}function od(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],h=o.length,m=0;m<h;m++)l.push(o[m]);return l}l=[],h=0;for(m in o)l[h++]=o[m];return l}function ad(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const m in o)l[h++]=m;return l}}}function Da(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=ad(o),m=od(o),A=m.length,S=0;S<A;S++)l.call(void 0,m[S],h&&h[S],o)}var Na=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ud(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var m=o[h].indexOf("="),A=null;if(0<=m){var S=o[h].substring(0,m);A=o[h].substring(m+1)}else S=o[h];l(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ce(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ce){this.h=o.h,Yr(this,o.j),this.o=o.o,this.g=o.g,Xr(this,o.s),this.l=o.l;var l=o.i,h=new Zn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),ka(this,h),this.m=o.m}else o&&(l=String(o).match(Na))?(this.h=!1,Yr(this,l[1]||"",!0),this.o=Yn(l[2]||""),this.g=Yn(l[3]||"",!0),Xr(this,l[4]),this.l=Yn(l[5]||"",!0),ka(this,l[6]||"",!0),this.m=Yn(l[7]||"")):(this.h=!1,this.i=new Zn(null,this.h))}Ce.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Xn(l,Fa,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Xn(l,Fa,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Xn(h,h.charAt(0)=="/"?hd:ld,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Xn(h,fd)),o.join("")};function Jt(o){return new Ce(o)}function Yr(o,l,h){o.j=h?Yn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Xr(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function ka(o,l,h){l instanceof Zn?(o.i=l,md(o.i,o.h)):(h||(l=Xn(l,dd)),o.i=new Zn(l,o.h))}function st(o,l,h){o.i.set(l,h)}function Zr(o){return st(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Yn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Xn(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,cd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function cd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Fa=/[#\/\?@]/g,ld=/[#\?:]/g,hd=/[#\?]/g,dd=/[#\?@]/g,fd=/#/g;function Zn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function ue(o){o.g||(o.g=new Map,o.h=0,o.i&&ud(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}r=Zn.prototype,r.add=function(o,l){ue(this),this.i=null,o=en(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Ma(o,l){ue(o),l=en(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Oa(o,l){return ue(o),l=en(o,l),o.g.has(l)}r.forEach=function(o,l){ue(this),this.g.forEach(function(h,m){h.forEach(function(A){o.call(l,A,m,this)},this)},this)},r.na=function(){ue(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let m=0;m<l.length;m++){const A=o[m];for(let S=0;S<A.length;S++)h.push(l[m])}return h},r.V=function(o){ue(this);let l=[];if(typeof o=="string")Oa(this,o)&&(l=l.concat(this.g.get(en(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},r.set=function(o,l){return ue(this),this.i=null,o=en(this,o),Oa(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function La(o,l,h){Ma(o,l),0<h.length&&(o.i=null,o.g.set(en(o,l),N(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var m=l[h];const S=encodeURIComponent(String(m)),F=this.V(m);for(m=0;m<F.length;m++){var A=S;F[m]!==""&&(A+="="+encodeURIComponent(String(F[m]))),o.push(A)}}return this.i=o.join("&")};function en(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function md(o,l){l&&!o.j&&(ue(o),o.i=null,o.g.forEach(function(h,m){var A=m.toLowerCase();m!=A&&(Ma(this,m),La(this,A,h))},o)),o.j=l}function gd(o,l){const h=new Hn;if(u.Image){const m=new Image;m.onload=P(ce,h,"TestLoadImage: loaded",!0,l,m),m.onerror=P(ce,h,"TestLoadImage: error",!1,l,m),m.onabort=P(ce,h,"TestLoadImage: abort",!1,l,m),m.ontimeout=P(ce,h,"TestLoadImage: timeout",!1,l,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function pd(o,l){const h=new Hn,m=new AbortController,A=setTimeout(()=>{m.abort(),ce(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(S=>{clearTimeout(A),S.ok?ce(h,"TestPingServer: ok",!0,l):ce(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),ce(h,"TestPingServer: error",!1,l)})}function ce(o,l,h,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(h)}catch{}}function _d(){this.g=new Zh}function yd(o,l,h){const m=h||"";try{Da(o,function(A,S){let F=A;d(A)&&(F=_i(A)),l.push(m+S+"="+encodeURIComponent(F))})}catch(A){throw l.push(m+"type="+encodeURIComponent("_badmap")),A}}function ts(o){this.l=o.Ub||null,this.j=o.eb||!1}D(ts,yi),ts.prototype.g=function(){return new es(this.l,this.j)},ts.prototype.i=function(o){return function(){return o}}({});function es(o,l){Vt.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(es,Vt),r=es.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,er(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,er(this)),this.g&&(this.readyState=3,er(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ba(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ba(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?tr(this):er(this),this.readyState==3&&Ba(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,tr(this))},r.Qa=function(o){this.g&&(this.response=o,tr(this))},r.ga=function(){this.g&&tr(this)};function tr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,er(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function er(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function qa(o){let l="";return K(o,function(h,m){l+=m,l+=":",l+=h,l+=`\r
`}),l}function Si(o,l,h){t:{for(m in h){var m=!1;break t}m=!0}m||(h=qa(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):st(o,l,h))}function ht(o){Vt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(ht,Vt);var Id=/^https?$/i,Td=["POST","PUT"];r=ht.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ei.g(),this.v=this.o?ga(this.o):ga(Ei),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){Ua(this,S);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)h.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const S of m.keys())h.set(S,m.get(S));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Td,l,void 0))||m||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,F]of h)this.g.setRequestHeader(S,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ja(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){Ua(this,S)}};function Ua(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Ga(o),ns(o)}function Ga(o){o.A||(o.A=!0,kt(o,"complete"),kt(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,kt(this,"complete"),kt(this,"abort"),ns(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ns(this,!0)),ht.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?za(this):this.bb())},r.bb=function(){za(this)};function za(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Yt(o)!=4||o.Z()!=2)){if(o.u&&Yt(o)==4)ha(o.Ea,0,o);else if(kt(o,"readystatechange"),Yt(o)==4){o.h=!1;try{const F=o.Z();t:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var h;if(!(h=l)){var m;if(m=F===0){var A=String(o.D).match(Na)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),m=!Id.test(A?A.toLowerCase():"")}h=m}if(h)kt(o,"complete"),kt(o,"success");else{o.m=6;try{var S=2<Yt(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",Ga(o)}}finally{ns(o)}}}}function ns(o,l){if(o.g){ja(o);const h=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||kt(o,"ready");try{h.onreadystatechange=m}catch{}}}function ja(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function Yt(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Xh(l)}};function Ka(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ed(o){const l={};o=(o.g&&2<=Yt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(G(o[m]))continue;var h=w(o[m]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[A]||[];l[A]=S,S.push(h)}T(l,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nr(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Qa(o){this.Aa=0,this.i=[],this.j=new Hn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nr("baseRetryDelayMs",5e3,o),this.cb=nr("retryDelaySeedMs",1e4,o),this.Wa=nr("forwardChannelMaxRetries",2,o),this.wa=nr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Va(o&&o.concurrentRequestLimit),this.Da=new _d,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Qa.prototype,r.la=8,r.G=1,r.connect=function(o,l,h,m){Ft(0),this.W=o,this.H=l||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=eu(this,null,this.W),ss(this)};function bi(o){if($a(o),o.G==3){var l=o.U++,h=Jt(o.I);if(st(h,"SID",o.K),st(h,"RID",l),st(h,"TYPE","terminate"),rr(o,h),l=new ae(o,o.j,l),l.L=2,l.v=Zr(Jt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=l.v,h=!0),h||(l.g=nu(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Jr(l)}tu(o)}function rs(o){o.g&&(xi(o),o.g.cancel(),o.g=null)}function $a(o){rs(o),o.u&&(u.clearTimeout(o.u),o.u=null),is(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function ss(o){if(!Sa(o.h)&&!o.s){o.s=!0;var l=o.Ga;Gn||oa(),zn||(Gn(),zn=!0),ci.add(l,o),o.B=0}}function wd(o,l){return ba(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Wn(_(o.Ga,o,l),Za(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new ae(this,this.j,o);let S=this.o;if(this.S&&(S?(S=p(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)t:{for(var l=0,h=0;h<this.i.length;h++){e:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=h;break t}if(l===4096||h===this.i.length-1){l=h+1;break t}}l=1e3}else l=1e3;l=Ha(this,A,l),h=Jt(this.I),st(h,"RID",o),st(h,"CVER",22),this.D&&st(h,"X-HTTP-Session-Id",this.D),rr(this,h),S&&(this.O?l="headers="+encodeURIComponent(String(qa(S)))+"&"+l:this.m&&Si(h,this.m,S)),Vi(this.h,A),this.Ua&&st(h,"TYPE","init"),this.P?(st(h,"$req",l),st(h,"SID","null"),A.T=!0,vi(A,h,null)):vi(A,h,l),this.G=2}}else this.G==3&&(o?Wa(this,o):this.i.length==0||Sa(this.h)||Wa(this))};function Wa(o,l){var h;l?h=l.l:h=o.U++;const m=Jt(o.I);st(m,"SID",o.K),st(m,"RID",h),st(m,"AID",o.T),rr(o,m),o.m&&o.o&&Si(m,o.m,o.o),h=new ae(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Ha(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Vi(o.h,h),vi(h,m,l)}function rr(o,l){o.H&&K(o.H,function(h,m){st(l,m,h)}),o.l&&Da({},function(h,m){st(l,m,h)})}function Ha(o,l,h){h=Math.min(o.i.length,h);var m=o.l?_(o.l.Na,o.l,o):null;t:{var A=o.i;let S=-1;for(;;){const F=["count="+h];S==-1?0<h?(S=A[0].g,F.push("ofs="+S)):S=0:F.push("ofs="+S);let et=!0;for(let wt=0;wt<h;wt++){let Y=A[wt].g;const St=A[wt].map;if(Y-=S,0>Y)S=Math.max(0,A[wt].g-100),et=!1;else try{yd(St,F,"req"+Y+"_")}catch{m&&m(St)}}if(et){m=F.join("&");break t}}}return o=o.i.splice(0,h),l.D=o,m}function Ja(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Gn||oa(),zn||(Gn(),zn=!0),ci.add(l,o),o.v=0}}function Ci(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Wn(_(o.Fa,o),Za(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Ya(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Wn(_(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ft(10),rs(this),Ya(this))};function xi(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Ya(o){o.g=new ae(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=Jt(o.qa);st(l,"RID","rpc"),st(l,"SID",o.K),st(l,"AID",o.T),st(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&st(l,"TO",o.ja),st(l,"TYPE","xmlhttp"),rr(o,l),o.m&&o.o&&Si(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Zr(Jt(l)),h.m=null,h.P=!0,Aa(h,o)}r.Za=function(){this.C!=null&&(this.C=null,rs(this),Ci(this),Ft(19))};function is(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Xa(o,l){var h=null;if(o.g==l){is(o),xi(o),o.g=null;var m=2}else if(Pi(o.h,l))h=l.D,Ca(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;m=$r(),kt(m,new Ta(m,h)),ss(o)}else Ja(o);else if(A=l.s,A==3||A==0&&0<l.X||!(m==1&&wd(o,l)||m==2&&Ci(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),A){case 1:xe(o,5);break;case 4:xe(o,10);break;case 3:xe(o,6);break;default:xe(o,2)}}}function Za(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function xe(o,l){if(o.j.info("Error code "+l),l==2){var h=_(o.fb,o),m=o.Xa;const A=!m;m=new Ce(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Yr(m,"https"),Zr(m),A?gd(m.toString(),h):pd(m.toString(),h)}else Ft(2);o.G=0,o.l&&o.l.sa(l),tu(o),$a(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ft(2)):(this.j.info("Failed to ping google.com"),Ft(1))};function tu(o){if(o.G=0,o.ka=[],o.l){const l=xa(o.h);(l.length!=0||o.i.length!=0)&&(b(o.ka,l),b(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function eu(o,l,h){var m=h instanceof Ce?Jt(h):new Ce(h);if(m.g!="")l&&(m.g=l+"."+m.g),Xr(m,m.s);else{var A=u.location;m=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var S=new Ce(null);m&&Yr(S,m),l&&(S.g=l),A&&Xr(S,A),h&&(S.l=h),m=S}return h=o.D,l=o.ya,h&&l&&st(m,h,l),st(m,"VER",o.la),rr(o,m),m}function nu(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ht(new ts({eb:h})):new ht(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ru(){}r=ru.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function os(){}os.prototype.g=function(o,l){return new Bt(o,l)};function Bt(o,l){Vt.call(this),this.g=new Qa(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!G(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!G(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new nn(this)}D(Bt,Vt),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){bi(this.g)},Bt.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=_i(o),o=h);l.i.push(new id(l.Ya++,o)),l.G==3&&ss(l)},Bt.prototype.N=function(){this.g.l=null,delete this.j,bi(this.g),delete this.g,Bt.aa.N.call(this)};function su(o){Ii.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const h in l){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}D(su,Ii);function iu(){Ti.call(this),this.status=1}D(iu,Ti);function nn(o){this.g=o}D(nn,ru),nn.prototype.ua=function(){kt(this.g,"a")},nn.prototype.ta=function(o){kt(this.g,new su(o))},nn.prototype.sa=function(o){kt(this.g,new iu)},nn.prototype.ra=function(){kt(this.g,"b")},os.prototype.createWebChannel=os.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,Vc=function(){return new os},Pc=function(){return $r()},Rc=Se,Bi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wr.NO_ERROR=0,Wr.TIMEOUT=8,Wr.HTTP_ERROR=6,gs=Wr,Ea.COMPLETE="complete",Ac=Ea,pa.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",Vt.prototype.listen=Vt.prototype.K,cr=pa,ht.prototype.listenOnce=ht.prototype.L,ht.prototype.getLastError=ht.prototype.Ka,ht.prototype.getLastErrorCode=ht.prototype.Ba,ht.prototype.getStatus=ht.prototype.Z,ht.prototype.getResponseJson=ht.prototype.Oa,ht.prototype.getResponseText=ht.prototype.oa,ht.prototype.send=ht.prototype.ea,ht.prototype.setWithCredentials=ht.prototype.Ha,vc=ht}).apply(typeof us<"u"?us:typeof self<"u"?self:typeof window<"u"?window:{});const uu="@firebase/firestore";/**
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
 */let xn="10.14.0";/**
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
 */const pe=new Ad("@firebase/firestore");function cn(){return pe.logLevel}function fp(r){pe.setLogLevel(r)}function C(r,...t){if(pe.logLevel<=Xt.DEBUG){const e=t.map(oo);pe.debug(`Firestore (${xn}): ${r}`,...e)}}function ft(r,...t){if(pe.logLevel<=Xt.ERROR){const e=t.map(oo);pe.error(`Firestore (${xn}): ${r}`,...e)}}function Ut(r,...t){if(pe.logLevel<=Xt.WARN){const e=t.map(oo);pe.warn(`Firestore (${xn}): ${r}`,...e)}}function oo(r){if(typeof r=="string")return r;try{/**
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
 */function O(r="Unexpected state"){const t=`FIRESTORE (${xn}) INTERNAL ASSERTION FAILED: `+r;throw ft(t),new Error(t)}function L(r,t){r||O()}function mp(r,t){r||O()}function k(r,t){return r}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends vd{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Sc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Nd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(It.UNAUTHENTICATED))}shutdown(){}}class kd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Fd{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){L(this.o===void 0);let n=this.i;const s=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let i=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},u=c=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string"),new Sc(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new It(t)}}class Md{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Od{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Md(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ld{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){L(this.o===void 0);const n=i=>{i.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,C("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>n(i))};const s=i=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(L(typeof e.token=="string"),this.R=e.token,new bc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class gp{getToken(){return Promise.resolve(new bc(""))}invalidateToken(){}start(t,e){}shutdown(){}}/**
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
 */function Bd(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class Cc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Bd(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function z(r,t){return r<t?-1:r>t?1:0}function gn(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}function xc(r){return r+"\0"}/**
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
 */class ct{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ct.fromMillis(Date.now())}static fromDate(t){return ct.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ct(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new q(t)}static min(){return new q(new ct(0,0))}static max(){return new q(new ct(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class yr{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(),n===void 0?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return yr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof yr?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=t.get(s),a=e.get(s);if(i<a)return-1;if(i>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class W extends yr{construct(t,e,n){return new W(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new x(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new W(e)}static emptyPath(){return new W([])}}const qd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends yr{construct(t,e,n){return new at(t,e,n)}static isValidIdentifier(t){return qd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new x(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new x(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new x(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(W.fromString(t))}static fromName(t){return new M(W.fromString(t).popFirst(5))}static empty(){return new M(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new W(t.slice()))}}/**
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
 */class pn{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function qi(r){return r.fields.find(t=>t.kind===2)}function Ne(r){return r.fields.filter(t=>t.kind!==2)}function Ud(r,t){let e=z(r.collectionGroup,t.collectionGroup);if(e!==0)return e;for(let n=0;n<Math.min(r.fields.length,t.fields.length);++n)if(e=Gd(r.fields[n],t.fields[n]),e!==0)return e;return z(r.fields.length,t.fields.length)}pn.UNKNOWN_ID=-1;class qe{constructor(t,e){this.fieldPath=t,this.kind=e}}function Gd(r,t){const e=at.comparator(r.fieldPath,t.fieldPath);return e!==0?e:z(r.kind,t.kind)}class _n{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new _n(0,qt.min())}}function Dc(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=q.fromTimestamp(n===1e9?new ct(e+1,0):new ct(e,n));return new qt(s,M.empty(),t)}function Nc(r){return new qt(r.readTime,r.key,-1)}class qt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new qt(q.min(),M.empty(),-1)}static max(){return new qt(q.max(),M.empty(),-1)}}function ao(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:z(r.largestBatchId,t.largestBatchId))}/**
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
 */const kc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ve(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==kc)throw r;C("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class v{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new v((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof v?e:v.resolve(e)}catch(e){return v.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):v.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):v.reject(e)}static resolve(t){return new v((e,n)=>{e(t)})}static reject(t){return new v((e,n)=>{n(t)})}static waitFor(t){return new v((e,n)=>{let s=0,i=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&e()},c=>n(c))}),a=!0,i===s&&e()})}static or(t){let e=v.resolve(!1);for(const n of t)e=e.next(s=>s?v.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,i)=>{n.push(e.call(this,s,i))}),this.waitFor(n)}static mapArray(t,e){return new v((n,s)=>{const i=t.length,a=new Array(i);let u=0;for(let c=0;c<i;c++){const d=c;e(t[d]).next(f=>{a[d]=f,++u,u===i&&n(a)},f=>s(f))}})}static doWhile(t,e){return new v((n,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):n()};i()})}}/**
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
 */class Bs{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new Tt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new fr(t,e.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=uo(n.target.error);this.V.reject(new fr(t,s))}}static open(t,e,n,s){try{return new Bs(e,t.transaction(s,n))}catch(i){throw new fr(e,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(C("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new jd(e)}}class Kt{constructor(t,e,n){this.name=t,this.version=e,this.p=n,Kt.S(As())===12.2&&ft("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return C("SimpleDb","Removing database:",t),ke(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!bd())return!1;if(Kt.v())return!0;const t=As(),e=Kt.S(t),n=0<e&&e<10,s=Mc(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static v(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.C)==="YES"}static F(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(t){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new fr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new x(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new x(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new fr(t,a))},s.onupgradeneeded=i=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.p.O(a,s.transaction,i.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=e=>this.N(e)),this.db}L(t){this.N=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.M(t);const u=Bs.open(this.db,t,i?"readonly":"readwrite",n),c=s(u).next(d=>(u.g(),d)).catch(d=>(u.abort(d),v.reject(d))).toPromise();return c.catch(()=>{}),await u.m,c}catch(u){const c=u,d=c.name!=="FirebaseError"&&a<3;if(C("SimpleDb","Transaction failed with error:",c.message,"Retrying:",d),this.close(),!d)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Mc(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class zd{constructor(t){this.B=t,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(t){this.B=t}done(){this.k=!0}$(t){this.q=t}delete(){return ke(this.B.delete())}}class fr extends x{constructor(t,e){super(V.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Ae(r){return r.name==="IndexedDbTransactionError"}class jd{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(C("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),ke(n)}add(t){return C("SimpleDb","ADD",this.store.name,t,t),ke(this.store.add(t))}get(t){return ke(this.store.get(t)).next(e=>(e===void 0&&(e=null),C("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return C("SimpleDb","DELETE",this.store.name,t),ke(this.store.delete(t))}count(){return C("SimpleDb","COUNT",this.store.name),ke(this.store.count())}U(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new v((a,u)=>{i.onerror=c=>{u(c.target.error)},i.onsuccess=c=>{a(c.target.result)}})}{const i=this.cursor(n),a=[];return this.W(i,(u,c)=>{a.push(c)}).next(()=>a)}}G(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new v((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}})}j(t,e){C("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.H=!1;const s=this.cursor(n);return this.W(s,(i,a,u)=>u.delete())}J(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.W(s,e)}Y(t){const e=this.cursor({});return new v((n,s)=>{e.onerror=i=>{const a=uo(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}W(t,e){const n=[];return new v((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const c=new zd(u),d=e(u.primaryKey,u.value,c);if(d instanceof v){const f=d.catch(g=>(c.done(),v.reject(g)));n.push(f)}c.isDone?s():c.K===null?u.continue():u.continue(c.K)}}).next(()=>v.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.H?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function ke(r){return new v((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=uo(n.target.error);e(s)}})}let cu=!1;function uo(r){const t=Kt.S(As());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return cu||(cu=!0,setTimeout(()=>{throw n},0)),n}}return r}class Kd{constructor(t,e){this.asyncQueue=t,this.Z=e,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(t){C("IndexBackfiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{C("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(e){Ae(e)?C("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",e):await ve(e)}await this.X(6e4)})}}class Qd{constructor(t,e){this.localStore=t,this.persistence=e}async ee(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.te(e,t))}te(t,e){const n=new Set;let s=e,i=!0;return v.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return C("IndexBackfiller",`Processing collection: ${a}`),this.ne(t,a,s).next(u=>{s-=u,n.add(a)});i=!1})).next(()=>e-s)}ne(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next(i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this.re(s,i)).next(u=>(C("IndexBackfiller",`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u))).next(()=>a.size)}))}re(t,e){let n=t;return e.changes.forEach((s,i)=>{const a=Nc(i);ao(a,n)>0&&(n=a)}),new qt(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
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
 */class Mt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Mt.oe=-1;function br(r){return r==null}function Ir(r){return r===0&&1/r==-1/0}function Oc(r){return typeof r=="number"&&Number.isInteger(r)&&!Ir(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function Dt(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=lu(t)),t=$d(r.get(e),t);return lu(t)}function $d(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case"":e+="";break;default:e+=i}}return e}function lu(r){return r+""}function zt(r){const t=r.length;if(L(t>=2),t===2)return L(r.charAt(0)===""&&r.charAt(1)===""),W.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf("",i);switch((a<0||a>e)&&O(),r.charAt(a+1)){case"":const u=r.substring(i,a);let c;s.length===0?c=u:(s+=u,c=s,s=""),n.push(c);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:O()}i=a+2}return new W(n)}/**
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
 */const hu=["userId","batchId"];/**
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
 */function ps(r,t){return[r,Dt(t)]}function Lc(r,t,e){return[r,Dt(t),e]}const Wd={},Hd=["prefixPath","collectionGroup","readTime","documentId"],Jd=["prefixPath","collectionGroup","documentId"],Yd=["collectionGroup","readTime","prefixPath","documentId"],Xd=["canonicalId","targetId"],Zd=["targetId","path"],tf=["path","targetId"],ef=["collectionId","parent"],nf=["indexId","uid"],rf=["uid","sequenceNumber"],sf=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],of=["indexId","uid","orderedDocumentKey"],af=["userId","collectionPath","documentId"],uf=["userId","collectionPath","largestBatchId"],cf=["userId","collectionGroup","largestBatchId"],Bc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],lf=[...Bc,"documentOverlays"],qc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Uc=qc,co=[...Uc,"indexConfiguration","indexState","indexEntries"],hf=co,df=[...co,"globals"];/**
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
 */class Ui extends Fc{constructor(t,e){super(),this._e=t,this.currentSequenceNumber=e}}function _t(r,t){const e=k(r);return Kt.F(e._e,t)}/**
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
 */function du(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Re(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Gc(r,t){const e=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.push(t(r[n],n,r));return e}function zc(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class rt{constructor(t,e){this.comparator=t,this.root=e||vt.EMPTY}insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new cs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new cs(this.root,t,this.comparator,!1)}getReverseIterator(){return new cs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new cs(this.root,t,this.comparator,!0)}}class cs{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class vt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??vt.RED,this.left=s??vt.EMPTY,this.right=i??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new vt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return vt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,s,i){return this}insert(t,e,n){return new vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new fu(this.data.getIterator())}getIteratorFrom(t){return new fu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof tt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new tt(this.comparator);return e.data=t,e}}class fu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function sn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Ot{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new Ot([])}unionWith(t){let e=new tt(at.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return gn(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class jc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function _p(){return typeof atob<"u"}/**
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
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jc("Invalid base64 string: "+i):i}}(t);return new dt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const ff=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(r){if(L(!!r),typeof r=="string"){let t=0;const e=ff.exec(r);if(L(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:ot(r.seconds),nanos:ot(r.nanos)}}function ot(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ee(r){return typeof r=="string"?dt.fromBase64String(r):dt.fromUint8Array(r)}/**
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
 */function qs(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Us(r){const t=r.mapValue.fields.__previous_value__;return qs(t)?Us(t):t}function Tr(r){const t=te(r.mapValue.fields.__local_write_time__.timestampValue);return new ct(t.seconds,t.nanos)}/**
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
 */class mf{constructor(t,e,n,s,i,a,u,c,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=d}}class Ue{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ue("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ue&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ge={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},_s={nullValue:"NULL_VALUE"};function _e(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?qs(r)?4:Kc(r)?9007199254740991:Gs(r)?10:11:O()}function Wt(r,t){if(r===t)return!0;const e=_e(r);if(e!==_e(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Tr(r).isEqual(Tr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=te(s.timestampValue),u=te(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,i){return ee(s.bytesValue).isEqual(ee(i.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,i){return ot(s.geoPointValue.latitude)===ot(i.geoPointValue.latitude)&&ot(s.geoPointValue.longitude)===ot(i.geoPointValue.longitude)}(r,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ot(s.integerValue)===ot(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ot(s.doubleValue),u=ot(i.doubleValue);return a===u?Ir(a)===Ir(u):isNaN(a)&&isNaN(u)}return!1}(r,t);case 9:return gn(r.arrayValue.values||[],t.arrayValue.values||[],Wt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(du(a)!==du(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!Wt(a[c],u[c])))return!1;return!0}(r,t);default:return O()}}function Er(r,t){return(r.values||[]).find(e=>Wt(e,t))!==void 0}function ye(r,t){if(r===t)return 0;const e=_e(r),n=_e(t);if(e!==n)return z(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,t.booleanValue);case 2:return function(i,a){const u=ot(i.integerValue||i.doubleValue),c=ot(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(r,t);case 3:return mu(r.timestampValue,t.timestampValue);case 4:return mu(Tr(r),Tr(t));case 5:return z(r.stringValue,t.stringValue);case 6:return function(i,a){const u=ee(i),c=ee(a);return u.compareTo(c)}(r.bytesValue,t.bytesValue);case 7:return function(i,a){const u=i.split("/"),c=a.split("/");for(let d=0;d<u.length&&d<c.length;d++){const f=z(u[d],c[d]);if(f!==0)return f}return z(u.length,c.length)}(r.referenceValue,t.referenceValue);case 8:return function(i,a){const u=z(ot(i.latitude),ot(a.latitude));return u!==0?u:z(ot(i.longitude),ot(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return gu(r.arrayValue,t.arrayValue);case 10:return function(i,a){var u,c,d,f;const g=i.fields||{},_=a.fields||{},P=(u=g.value)===null||u===void 0?void 0:u.arrayValue,D=(c=_.value)===null||c===void 0?void 0:c.arrayValue,N=z(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((f=D==null?void 0:D.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:gu(P,D)}(r.mapValue,t.mapValue);case 11:return function(i,a){if(i===ge.mapValue&&a===ge.mapValue)return 0;if(i===ge.mapValue)return 1;if(a===ge.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),d=a.fields||{},f=Object.keys(d);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const _=z(c[g],f[g]);if(_!==0)return _;const P=ye(u[c[g]],d[f[g]]);if(P!==0)return P}return z(c.length,f.length)}(r.mapValue,t.mapValue);default:throw O()}}function mu(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return z(r,t);const e=te(r),n=te(t),s=z(e.seconds,n.seconds);return s!==0?s:z(e.nanos,n.nanos)}function gu(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=ye(e[s],n[s]);if(i)return i}return z(e.length,n.length)}function yn(r){return Gi(r)}function Gi(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=te(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ee(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return M.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=Gi(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${Gi(e.fields[a])}`;return s+"}"}(r.mapValue):O()}function ys(r){switch(_e(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Us(r);return t?16+ys(t):16;case 5:return 2*r.stringValue.length;case 6:return ee(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+ys(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Re(n.fields,(i,a)=>{s+=i.length+ys(a)}),s}(r.mapValue);default:throw O()}}function Ge(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function zi(r){return!!r&&"integerValue"in r}function wr(r){return!!r&&"arrayValue"in r}function pu(r){return!!r&&"nullValue"in r}function _u(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Is(r){return!!r&&"mapValue"in r}function Gs(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function mr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Re(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=mr(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=mr(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Kc(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Qc={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function gf(r){return"nullValue"in r?_s:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Ge(Ue.empty(),M.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Gs(r)?Qc:{mapValue:{}}:O()}function pf(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Ge(Ue.empty(),M.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Qc:"mapValue"in r?Gs(r)?{mapValue:{}}:ge:O()}function yu(r,t){const e=ye(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function Iu(r,t){const e=ye(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
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
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Is(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=mr(e)}setAll(t){let e=at.emptyPath(),n={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const c=this.getFieldsMap(e);this.applyChanges(c,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=mr(a):s.push(u.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Is(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Wt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Is(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Re(e,(s,i)=>t[s]=i);for(const s of n)delete t[s]}clone(){return new At(mr(this.value))}}function $c(r){const t=[];return Re(r.fields,(e,n)=>{const s=new at([e]);if(Is(n)){const i=$c(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Ot(t)}/**
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
 */class Ie{constructor(t,e){this.position=t,this.inclusive=e}}function Tu(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=M.comparator(M.fromName(a.referenceValue),e.key):n=ye(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Eu(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Wt(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class vr{constructor(t,e="asc"){this.field=t,this.dir=e}}function _f(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Wc{}class H extends Wc{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new yf(t,e,n):e==="array-contains"?new Ef(t,n):e==="in"?new tl(t,n):e==="not-in"?new wf(t,n):e==="array-contains-any"?new vf(t,n):new H(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new If(t,n):new Tf(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ye(e,this.value)):e!==null&&_e(this.value)===_e(e)&&this.matchesComparison(ye(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Z extends Wc{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Z(t,e)}matches(t){return In(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function In(r){return r.op==="and"}function ji(r){return r.op==="or"}function lo(r){return Hc(r)&&In(r)}function Hc(r){for(const t of r.filters)if(t instanceof Z)return!1;return!0}function Ki(r){if(r instanceof H)return r.field.canonicalString()+r.op.toString()+yn(r.value);if(lo(r))return r.filters.map(t=>Ki(t)).join(",");{const t=r.filters.map(e=>Ki(e)).join(",");return`${r.op}(${t})`}}function Jc(r,t){return r instanceof H?function(n,s){return s instanceof H&&n.op===s.op&&n.field.isEqual(s.field)&&Wt(n.value,s.value)}(r,t):r instanceof Z?function(n,s){return s instanceof Z&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,u)=>i&&Jc(a,s.filters[u]),!0):!1}(r,t):void O()}function Yc(r,t){const e=r.filters.concat(t);return Z.create(e,r.op)}function Xc(r){return r instanceof H?function(e){return`${e.field.canonicalString()} ${e.op} ${yn(e.value)}`}(r):r instanceof Z?function(e){return e.op.toString()+" {"+e.getFilters().map(Xc).join(" ,")+"}"}(r):"Filter"}class yf extends H{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class If extends H{constructor(t,e){super(t,"in",e),this.keys=Zc("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Tf extends H{constructor(t,e){super(t,"not-in",e),this.keys=Zc("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Zc(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>M.fromName(n.referenceValue))}class Ef extends H{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return wr(e)&&Er(e.arrayValue,this.value)}}class tl extends H{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Er(this.value.arrayValue,e)}}class wf extends H{constructor(t,e){super(t,"not-in",e)}matches(t){if(Er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Er(this.value.arrayValue,e)}}class vf extends H{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!wr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Er(this.value.arrayValue,n))}}/**
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
 */class Af{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.ue=null}}function Qi(r,t=null,e=[],n=[],s=null,i=null,a=null){return new Af(r,t,e,n,s,i,a)}function ze(r){const t=k(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Ki(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),br(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>yn(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>yn(n)).join(",")),t.ue=e}return t.ue}function Cr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!_f(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Jc(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Eu(r.startAt,t.startAt)&&Eu(r.endAt,t.endAt)}function Rs(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ps(r,t){return r.filters.filter(e=>e instanceof H&&e.field.isEqual(t))}function wu(r,t,e){let n=_s,s=!0;for(const i of Ps(r,t)){let a=_s,u=!0;switch(i.op){case"<":case"<=":a=gf(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=_s}yu({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];yu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function vu(r,t,e){let n=ge,s=!0;for(const i of Ps(r,t)){let a=ge,u=!0;switch(i.op){case">=":case">":a=pf(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=ge}Iu({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];Iu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class ne{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function el(r,t,e,n,s,i,a,u){return new ne(r,t,e,n,s,i,a,u)}function Dn(r){return new ne(r)}function Au(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ho(r){return r.collectionGroup!==null}function fn(r){const t=k(r);if(t.ce===null){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new tt(at.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new vr(i,n))}),e.has(at.keyField().canonicalString())||t.ce.push(new vr(at.keyField(),n))}return t.ce}function Nt(r){const t=k(r);return t.le||(t.le=rl(t,fn(r))),t.le}function nl(r){const t=k(r);return t.he||(t.he=rl(t,r.explicitOrderBy)),t.he}function rl(r,t){if(r.limitType==="F")return Qi(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new vr(s.field,i)});const e=r.endAt?new Ie(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Ie(r.startAt.position,r.startAt.inclusive):null;return Qi(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function $i(r,t){const e=r.filters.concat([t]);return new ne(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Vs(r,t,e){return new ne(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function xr(r,t){return Cr(Nt(r),Nt(t))&&r.limitType===t.limitType}function sl(r){return`${ze(Nt(r))}|lt:${r.limitType}`}function ln(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Xc(s)).join(", ")}]`),br(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>yn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>yn(s)).join(",")),`Target(${n})`}(Nt(r))}; limitType=${r.limitType})`}function Dr(r,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,t)&&function(n,s){for(const i of fn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,u,c){const d=Tu(a,u,c);return a.inclusive?d<=0:d<0}(n.startAt,fn(n),s)||n.endAt&&!function(a,u,c){const d=Tu(a,u,c);return a.inclusive?d>=0:d>0}(n.endAt,fn(n),s))}(r,t)}function il(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function ol(r){return(t,e)=>{let n=!1;for(const s of fn(r)){const i=Rf(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Rf(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):function(i,a,u){const c=a.data.field(i),d=u.data.field(i);return c!==null&&d!==null?ye(c,d):O()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O()}}/**
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
 */class re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Re(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return zc(this.inner)}size(){return this.innerSize}}/**
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
 */const Pf=new rt(M.comparator);function Lt(){return Pf}const al=new rt(M.comparator);function lr(...r){let t=al;for(const e of r)t=t.insert(e.key,e);return t}function ul(r){let t=al;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function jt(){return gr()}function cl(){return gr()}function gr(){return new re(r=>r.toString(),(r,t)=>r.isEqual(t))}const Vf=new rt(M.comparator),Sf=new tt(M.comparator);function j(...r){let t=Sf;for(const e of r)t=t.add(e);return t}const bf=new tt(z);function fo(){return bf}/**
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
 */function mo(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ir(t)?"-0":t}}function ll(r){return{integerValue:""+r}}function hl(r,t){return Oc(t)?ll(t):mo(r,t)}/**
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
 */class zs{constructor(){this._=void 0}}function Cf(r,t,e){return r instanceof Tn?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&qs(i)&&(i=Us(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(e,t):r instanceof je?fl(r,t):r instanceof Ke?ml(r,t):function(s,i){const a=dl(s,i),u=Ru(a)+Ru(s.Pe);return zi(a)&&zi(s.Pe)?ll(u):mo(s.serializer,u)}(r,t)}function xf(r,t,e){return r instanceof je?fl(r,t):r instanceof Ke?ml(r,t):e}function dl(r,t){return r instanceof En?function(n){return zi(n)||function(i){return!!i&&"doubleValue"in i}(n)}(t)?t:{integerValue:0}:null}class Tn extends zs{}class je extends zs{constructor(t){super(),this.elements=t}}function fl(r,t){const e=gl(t);for(const n of r.elements)e.some(s=>Wt(s,n))||e.push(n);return{arrayValue:{values:e}}}class Ke extends zs{constructor(t){super(),this.elements=t}}function ml(r,t){let e=gl(t);for(const n of r.elements)e=e.filter(s=>!Wt(s,n));return{arrayValue:{values:e}}}class En extends zs{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ru(r){return ot(r.integerValue||r.doubleValue)}function gl(r){return wr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Nr{constructor(t,e){this.field=t,this.transform=e}}function Df(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof je&&s instanceof je||n instanceof Ke&&s instanceof Ke?gn(n.elements,s.elements,Wt):n instanceof En&&s instanceof En?Wt(n.Pe,s.Pe):n instanceof Tn&&s instanceof Tn}(r.transform,t.transform)}class Nf{constructor(t,e){this.version=t,this.transformResults=e}}class ut{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ut}static exists(t){return new ut(void 0,t)}static updateTime(t){return new ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ts(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class js{}function pl(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new kn(r.key,ut.none()):new Nn(r.key,r.data,ut.none());{const e=r.data,n=At.empty();let s=new tt(at.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new se(r.key,n,new Ot(s.toArray()),ut.none())}}function kf(r,t,e){r instanceof Nn?function(s,i,a){const u=s.value.clone(),c=Vu(s.fieldTransforms,i,a.transformResults);u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,t,e):r instanceof se?function(s,i,a){if(!Ts(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=Vu(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(_l(s)),c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function pr(r,t,e,n){return r instanceof Nn?function(i,a,u,c){if(!Ts(i.precondition,a))return u;const d=i.value.clone(),f=Su(i.fieldTransforms,c,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof se?function(i,a,u,c){if(!Ts(i.precondition,a))return u;const d=Su(i.fieldTransforms,c,a),f=a.data;return f.setAll(_l(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(r,t,e,n):function(i,a,u){return Ts(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,t,e)}function Ff(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=dl(n.transform,s||null);i!=null&&(e===null&&(e=At.empty()),e.set(n.field,i))}return e||null}function Pu(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&gn(n,s,(i,a)=>Df(i,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Nn extends js{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class se extends js{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _l(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Vu(r,t,e){const n=new Map;L(r.length===e.length);for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,xf(a,u,e[s]))}return n}function Su(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,Cf(i,a,t))}return n}class kn extends js{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class go extends js{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class po{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&kf(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=pr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=pr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=cl();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const c=pl(a,u);c!==null&&n.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(q.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&gn(this.mutations,t.mutations,(e,n)=>Pu(e,n))&&gn(this.baseMutations,t.baseMutations,(e,n)=>Pu(e,n))}}class _o{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){L(t.mutations.length===n.length);let s=function(){return Vf}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new _o(t,e,n,s)}}/**
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
 */class yo{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class yl{constructor(t,e,n){this.alias=t,this.aggregateType=e,this.fieldPath=n}}/**
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
 */class Mf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var pt,J;function Il(r){switch(r){default:return O();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Tl(r){if(r===void 0)return ft("GRPC error has no .code"),V.UNKNOWN;switch(r){case pt.OK:return V.OK;case pt.CANCELLED:return V.CANCELLED;case pt.UNKNOWN:return V.UNKNOWN;case pt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case pt.INTERNAL:return V.INTERNAL;case pt.UNAVAILABLE:return V.UNAVAILABLE;case pt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case pt.NOT_FOUND:return V.NOT_FOUND;case pt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case pt.ABORTED:return V.ABORTED;case pt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case pt.DATA_LOSS:return V.DATA_LOSS;default:return O()}}(J=pt||(pt={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let Ss=null;/**
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
 */function El(){return new TextEncoder}/**
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
 */const Of=new Be([4294967295,4294967295],0);function bu(r){const t=El().encode(r),e=new wc;return e.update(t),new Uint8Array(e.digest())}function Cu(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Be([e,n],0),new Be([s,i],0)]}class Io{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new hr(`Invalid padding: ${e}`);if(n<0)throw new hr(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new hr(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new hr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Be.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(Be.fromNumber(n)));return s.compare(Of)===1&&(s=new Be([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=bu(t),[n,s]=Cu(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(n,s,i);if(!this.de(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Io(i,s,e);return n.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=bu(t),[n,s]=Cu(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(n,s,i);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class hr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kr{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Fr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new kr(q.min(),s,new rt(z),Lt(),j())}}class Fr{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Fr(n,e,j(),j(),j())}}/**
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
 */class Es{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class wl{constructor(t,e){this.targetId=t,this.me=e}}class vl{constructor(t,e,n=dt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class xu{constructor(){this.fe=0,this.ge=Nu(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=j(),e=j(),n=j();return this.ge.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:O()}}),new Fr(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=Nu()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,L(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Lf{constructor(t){this.Le=t,this.Be=new Map,this.ke=Lt(),this.qe=Du(),this.Qe=new rt(z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const i=s.target;if(Rs(i))if(n===0){const a=new M(i.path);this.Ue(e,a,it.newNoDocument(a,q.min()))}else L(n===1);else{const a=this.Ye(e);if(a!==n){const u=this.Ze(t),c=u?this.Xe(u,t,a):1;if(c!==0){this.je(e);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}Ss==null||Ss.et(function(f,g,_,P,D){var N,b,U,G,B,Q;const X={localCacheCount:f,existenceFilterCount:g.count,databaseId:_.database,projectId:_.projectId},K=g.unchangedNames;return K&&(X.bloomFilter={applied:D===0,hashCount:(N=K==null?void 0:K.hashCount)!==null&&N!==void 0?N:0,bitmapLength:(G=(U=(b=K==null?void 0:K.bits)===null||b===void 0?void 0:b.bitmap)===null||U===void 0?void 0:U.length)!==null&&G!==void 0?G:0,padding:(Q=(B=K==null?void 0:K.bits)===null||B===void 0?void 0:B.padding)!==null&&Q!==void 0?Q:0,mightContain:T=>{var p;return(p=P==null?void 0:P.mightContain(T))!==null&&p!==void 0&&p}}),X}(a,t.me,this.Le.tt(),u,c))}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=ee(n).toUint8Array()}catch(c){if(c instanceof jc)return Ut("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new Io(a,s,i)}catch(c){return Ut(c instanceof hr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Ie===0?null:u}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach(i=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,i,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((i,a)=>{const u=this.Je(a);if(u){if(i.current&&Rs(u.target)){const c=new M(u.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,it.newNoDocument(c,t))}i.be&&(e.set(a,i.ve()),i.Ce())}});let n=j();this.qe.forEach((i,a)=>{let u=!0;a.forEachWhile(c=>{const d=this.Je(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(t));const s=new kr(t,e,this.Qe,this.ke,n);return this.ke=Lt(),this.qe=Du(),this.Qe=new rt(z),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new xu,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new tt(z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||C("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new xu),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Du(){return new rt(M.comparator)}function Nu(){return new rt(M.comparator)}const Bf={asc:"ASCENDING",desc:"DESCENDING"},qf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Uf={and:"AND",or:"OR"};class Gf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Wi(r,t){return r.useProto3Json||br(t)?t:{value:t}}function wn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Al(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function zf(r,t){return wn(r,t.toTimestamp())}function mt(r){return L(!!r),q.fromTimestamp(function(e){const n=te(e);return new ct(n.seconds,n.nanos)}(r))}function To(r,t){return Hi(r,t).canonicalString()}function Hi(r,t){const e=function(s){return new W(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Rl(r){const t=W.fromString(r);return L(Fl(t)),t}function Ar(r,t){return To(r.databaseId,t.path)}function Qt(r,t){const e=Rl(t);if(e.get(1)!==r.databaseId.projectId)throw new x(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new x(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(Sl(e))}function Pl(r,t){return To(r.databaseId,t)}function Vl(r){const t=Rl(r);return t.length===4?W.emptyPath():Sl(t)}function Ji(r){return new W(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Sl(r){return L(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function ku(r,t,e){return{name:Ar(r,t),fields:e.value.mapValue.fields}}function bl(r,t,e){const n=Qt(r,t.name),s=mt(t.updateTime),i=t.createTime?mt(t.createTime):q.min(),a=new At({mapValue:{fields:t.fields}}),u=it.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function jf(r,t){return"found"in t?function(n,s){L(!!s.found),s.found.name,s.found.updateTime;const i=Qt(n,s.found.name),a=mt(s.found.updateTime),u=s.found.createTime?mt(s.found.createTime):q.min(),c=new At({mapValue:{fields:s.found.fields}});return it.newFoundDocument(i,a,u,c)}(r,t):"missing"in t?function(n,s){L(!!s.missing),L(!!s.readTime);const i=Qt(n,s.missing),a=mt(s.readTime);return it.newNoDocument(i,a)}(r,t):O()}function Kf(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(L(f===void 0||typeof f=="string"),dt.fromBase64String(f||"")):(L(f===void 0||f instanceof Buffer||f instanceof Uint8Array),dt.fromUint8Array(f||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const f=d.code===void 0?V.UNKNOWN:Tl(d.code);return new x(f,d.message||"")}(a);e=new vl(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Qt(r,n.document.name),i=mt(n.document.updateTime),a=n.document.createTime?mt(n.document.createTime):q.min(),u=new At({mapValue:{fields:n.document.fields}}),c=it.newFoundDocument(s,i,a,u),d=n.targetIds||[],f=n.removedTargetIds||[];e=new Es(d,f,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Qt(r,n.document),i=n.readTime?mt(n.readTime):q.min(),a=it.newNoDocument(s,i),u=n.removedTargetIds||[];e=new Es([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Qt(r,n.document),i=n.removedTargetIds||[];e=new Es([],i,s,null)}else{if(!("filter"in t))return O();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new Mf(s,i),u=n.targetId;e=new wl(u,a)}}return e}function Rr(r,t){let e;if(t instanceof Nn)e={update:ku(r,t.key,t.value)};else if(t instanceof kn)e={delete:Ar(r,t.key)};else if(t instanceof se)e={update:ku(r,t.key,t.data),updateMask:Yf(t.fieldMask)};else{if(!(t instanceof go))return O();e={verify:Ar(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(i,a){const u=a.transform;if(u instanceof Tn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof je)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Ke)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof En)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw O()}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:zf(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O()}(r,t.precondition)),e}function Yi(r,t){const e=t.currentDocument?function(i){return i.updateTime!==void 0?ut.updateTime(mt(i.updateTime)):i.exists!==void 0?ut.exists(i.exists):ut.none()}(t.currentDocument):ut.none(),n=t.updateTransforms?t.updateTransforms.map(s=>function(a,u){let c=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME"),c=new Tn;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];c=new je(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];c=new Ke(f)}else"increment"in u?c=new En(a,u.increment):O();const d=at.fromServerFormat(u.fieldPath);return new Nr(d,c)}(r,s)):[];if(t.update){t.update.name;const s=Qt(r,t.update.name),i=new At({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(c){const d=c.fieldPaths||[];return new Ot(d.map(f=>at.fromServerFormat(f)))}(t.updateMask);return new se(s,i,a,e,n)}return new Nn(s,i,e,n)}if(t.delete){const s=Qt(r,t.delete);return new kn(s,e)}if(t.verify){const s=Qt(r,t.verify);return new go(s,e)}return O()}function Qf(r,t){return r&&r.length>0?(L(t!==void 0),r.map(e=>function(s,i){let a=s.updateTime?mt(s.updateTime):mt(i);return a.isEqual(q.min())&&(a=mt(i)),new Nf(a,s.transformResults||[])}(e,t))):[]}function Cl(r,t){return{documents:[Pl(r,t.path)]}}function Ks(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Pl(r,s);const i=function(d){if(d.length!==0)return kl(Z.create(d,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(_){return{field:de(_.field),direction:Wf(_.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Wi(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function xl(r,t,e,n){const{_t:s,parent:i}=Ks(r,t),a={},u=[];let c=0;return e.forEach(d=>{const f=n?d.alias:"aggregate_"+c++;a[f]=d.alias,d.aggregateType==="count"?u.push({alias:f,count:{}}):d.aggregateType==="avg"?u.push({alias:f,avg:{field:de(d.fieldPath)}}):d.aggregateType==="sum"&&u.push({alias:f,sum:{field:de(d.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:u,structuredQuery:s.structuredQuery},parent:s.parent},ut:a,parent:i}}function Dl(r){let t=Vl(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){L(n===1);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=function(g){const _=Nl(g);return _ instanceof Z&&lo(_)?_.getFilters():[_]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(_=>function(D){return new vr(hn(D.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(_))}(e.orderBy));let u=null;e.limit&&(u=function(g){let _;return _=typeof g=="object"?g.value:g,br(_)?null:_}(e.limit));let c=null;e.startAt&&(c=function(g){const _=!!g.before,P=g.values||[];return new Ie(P,_)}(e.startAt));let d=null;return e.endAt&&(d=function(g){const _=!g.before,P=g.values||[];return new Ie(P,_)}(e.endAt)),el(t,s,a,i,u,"F",c,d)}function $f(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Nl(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=hn(e.unaryFilter.field);return H.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=hn(e.unaryFilter.field);return H.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hn(e.unaryFilter.field);return H.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=hn(e.unaryFilter.field);return H.create(a,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(r):r.fieldFilter!==void 0?function(e){return H.create(hn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Z.create(e.compositeFilter.filters.map(n=>Nl(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(r):O()}function Wf(r){return Bf[r]}function Hf(r){return qf[r]}function Jf(r){return Uf[r]}function de(r){return{fieldPath:r.canonicalString()}}function hn(r){return at.fromServerFormat(r.fieldPath)}function kl(r){return r instanceof H?function(e){if(e.op==="=="){if(_u(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NAN"}};if(pu(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(_u(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NOT_NAN"}};if(pu(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:de(e.field),op:Hf(e.op),value:e.value}}}(r):r instanceof Z?function(e){const n=e.getFilters().map(s=>kl(s));return n.length===1?n[0]:{compositeFilter:{op:Jf(e.op),filters:n}}}(r):O()}function Yf(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Fl(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Zt{constructor(t,e,n,s,i=q.min(),a=q.min(),u=dt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(t){return new Zt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Ml{constructor(t){this.ct=t}}function Xf(r,t){let e;if(t.document)e=bl(r.ct,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=M.fromSegments(t.noDocument.path),s=$e(t.noDocument.readTime);e=it.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return O();{const n=M.fromSegments(t.unknownDocument.path),s=$e(t.unknownDocument.version);e=it.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime(function(s){const i=new ct(s[0],s[1]);return q.fromTimestamp(i)}(t.readTime)),e}function Fu(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:bs(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(i,a){return{name:Ar(i,a.key),fields:a.data.value.mapValue.fields,updateTime:wn(i,a.version.toTimestamp()),createTime:wn(i,a.createTime.toTimestamp())}}(r.ct,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:Qe(t.version)};else{if(!t.isUnknownDocument())return O();n.unknownDocument={path:e.path.toArray(),version:Qe(t.version)}}return n}function bs(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function Qe(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function $e(r){const t=new ct(r.seconds,r.nanoseconds);return q.fromTimestamp(t)}function Fe(r,t){const e=(t.baseMutations||[]).map(i=>Yi(r.ct,i));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map(i=>Yi(r.ct,i)),s=ct.fromMillis(t.localWriteTimeMs);return new po(t.batchId,s,e,n)}function dr(r){const t=$e(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?$e(r.lastLimboFreeSnapshotVersion):q.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return L(i.documents.length===1),Nt(Dn(Vl(i.documents[0])))}(r.query):function(i){return Nt(Dl(i))}(r.query),new Zt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,dt.fromBase64String(r.resumeToken))}function Ol(r,t){const e=Qe(t.snapshotVersion),n=Qe(t.lastLimboFreeSnapshotVersion);let s;s=Rs(t.target)?Cl(r.ct,t.target):Ks(r.ct,t.target)._t;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:ze(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Eo(r){const t=Dl({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Vs(t,t.limit,"L"):t}function Ni(r,t){return new yo(t.largestBatchId,Yi(r.ct,t.overlayMutation))}function Mu(r,t){const e=t.path.lastSegment();return[r,Dt(t.path.popLast()),e]}function Ou(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:Qe(n.readTime),documentKey:Dt(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class Zf{getBundleMetadata(t,e){return Lu(t).get(e).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:$e(i.createTime),version:i.version}}(n)})}saveBundleMetadata(t,e){return Lu(t).put(function(s){return{bundleId:s.id,createTime:Qe(mt(s.createTime)),version:s.version}}(e))}getNamedQuery(t,e){return Bu(t).get(e).next(n=>{if(n)return function(i){return{name:i.name,query:Eo(i.bundledQuery),readTime:$e(i.readTime)}}(n)})}saveNamedQuery(t,e){return Bu(t).put(function(s){return{name:s.name,readTime:Qe(mt(s.readTime)),bundledQuery:s.bundledQuery}}(e))}}function Lu(r){return _t(r,"bundles")}function Bu(r){return _t(r,"namedQueries")}/**
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
 */class Qs{constructor(t,e){this.serializer=t,this.userId=e}static lt(t,e){const n=e.uid||"";return new Qs(t,n)}getOverlay(t,e){return sr(t).get(Mu(this.userId,e)).next(n=>n?Ni(this.serializer,n):null)}getOverlays(t,e){const n=jt();return v.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){const s=[];return n.forEach((i,a)=>{const u=new yo(e,a);s.push(this.ht(t,u))}),v.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach(a=>s.add(Dt(a.getCollectionPath())));const i=[];return s.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(sr(t).j("collectionPathOverlayIndex",u))}),v.waitFor(i)}getOverlaysForCollection(t,e,n){const s=jt(),i=Dt(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return sr(t).U("collectionPathOverlayIndex",a).next(u=>{for(const c of u){const d=Ni(this.serializer,c);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(t,e,n,s){const i=jt();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return sr(t).J({index:"collectionGroupOverlayIndex",range:u},(c,d,f)=>{const g=Ni(this.serializer,d);i.size()<s||g.largestBatchId===a?(i.set(g.getKey(),g),a=g.largestBatchId):f.done()}).next(()=>i)}ht(t,e){return sr(t).put(function(s,i,a){const[u,c,d]=Mu(i,a.mutation.key);return{userId:i,collectionPath:c,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Rr(s.ct,a.mutation)}}(this.serializer,this.userId,e))}}function sr(r){return _t(r,"documentOverlays")}/**
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
 */class tm{Pt(t){return _t(t,"globals")}getSessionToken(t){return this.Pt(t).get("sessionToken").next(e=>{const n=e==null?void 0:e.value;return n?dt.fromUint8Array(n):dt.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.Pt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
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
 */class Me{constructor(){}It(t,e){this.Tt(t,e),e.Et()}Tt(t,e){if("nullValue"in t)this.dt(e,5);else if("booleanValue"in t)this.dt(e,10),e.At(t.booleanValue?1:0);else if("integerValue"in t)this.dt(e,15),e.At(ot(t.integerValue));else if("doubleValue"in t){const n=ot(t.doubleValue);isNaN(n)?this.dt(e,13):(this.dt(e,15),Ir(n)?e.At(0):e.At(n))}else if("timestampValue"in t){let n=t.timestampValue;this.dt(e,20),typeof n=="string"&&(n=te(n)),e.Rt(`${n.seconds||""}`),e.At(n.nanos||0)}else if("stringValue"in t)this.Vt(t.stringValue,e),this.ft(e);else if("bytesValue"in t)this.dt(e,30),e.gt(ee(t.bytesValue)),this.ft(e);else if("referenceValue"in t)this.yt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.dt(e,45),e.At(n.latitude||0),e.At(n.longitude||0)}else"mapValue"in t?Kc(t)?this.dt(e,Number.MAX_SAFE_INTEGER):Gs(t)?this.wt(t.mapValue,e):(this.St(t.mapValue,e),this.ft(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.ft(e)):O()}Vt(t,e){this.dt(e,25),this.Dt(t,e)}Dt(t,e){e.Rt(t)}St(t,e){const n=t.fields||{};this.dt(e,55);for(const s of Object.keys(n))this.Vt(s,e),this.Tt(n[s],e)}wt(t,e){var n,s;const i=t.fields||{};this.dt(e,53);const a="value",u=((s=(n=i[a].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.dt(e,15),e.At(ot(u)),this.Vt(a,e),this.Tt(i[a],e)}bt(t,e){const n=t.values||[];this.dt(e,50);for(const s of n)this.Tt(s,e)}yt(t,e){this.dt(e,37),M.fromName(t).path.forEach(n=>{this.dt(e,60),this.Dt(n,e)})}dt(t,e){t.At(e)}ft(t){t.At(2)}}Me.vt=new Me;function em(r){if(r===0)return 8;let t=0;return!(r>>4)&&(t+=4,r<<=4),!(r>>6)&&(t+=2,r<<=2),!(r>>7)&&(t+=1),t}function qu(r){const t=64-function(n){let s=0;for(let i=0;i<8;++i){const a=em(255&n[i]);if(s+=a,a!==8)break}return s}(r);return Math.ceil(t/8)}class nm{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ft(n.value),n=e.next();this.Mt()}xt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ot(n.value),n=e.next();this.Nt()}Lt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const s=e.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const s=e.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(t){const e=this.qt(t),n=qu(e);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}Kt(t){const e=this.qt(t),n=qu(e);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(t){this.Qt(t.length),this.buffer.set(t,this.position),this.position+=t.length}zt(){return this.buffer.slice(0,this.position)}qt(t){const e=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(t),n=(128&e[0])!=0;e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Ft(t){const e=255&t;e===0?(this.Ut(0),this.Ut(255)):e===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ot(t){const e=255&t;e===0?(this.Gt(0),this.Gt(255)):e===255?(this.Gt(255),this.Gt(0)):this.Gt(t)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(t){this.Qt(1),this.buffer[this.position++]=t}Gt(t){this.Qt(1),this.buffer[this.position++]=~t}Qt(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class rm{constructor(t){this.jt=t}gt(t){this.jt.Ct(t)}Rt(t){this.jt.Lt(t)}At(t){this.jt.kt(t)}Et(){this.jt.$t()}}class sm{constructor(t){this.jt=t}gt(t){this.jt.xt(t)}Rt(t){this.jt.Bt(t)}At(t){this.jt.Kt(t)}Et(){this.jt.Wt()}}class ir{constructor(){this.jt=new nm,this.Ht=new rm(this.jt),this.Jt=new sm(this.jt)}seed(t){this.jt.seed(t)}Yt(t){return t===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class Oe{constructor(t,e,n,s){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=s}Zt(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new Oe(this.indexId,this.documentKey,this.arrayValue,n)}}function le(r,t){let e=r.indexId-t.indexId;return e!==0?e:(e=Uu(r.arrayValue,t.arrayValue),e!==0?e:(e=Uu(r.directionalValue,t.directionalValue),e!==0?e:M.comparator(r.documentKey,t.documentKey)))}function Uu(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}/**
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
 */class Gu{constructor(t){this.Xt=new tt((e,n)=>at.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.en=t.orderBy,this.tn=[];for(const e of t.filters){const n=e;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(t){if(L(t.collectionGroup===this.collectionId),this.nn)return!1;const e=qi(t);if(e!==void 0&&!this.sn(e))return!1;const n=Ne(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.sn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Xt.size>0){const u=this.Xt.getIterator().getNext();if(!s.has(u.field.canonicalString())){const c=n[i];if(!this.on(u,c)||!this._n(this.en[a++],c))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.en.length||!this._n(this.en[a++],u))return!1}return!0}an(){if(this.nn)return null;let t=new tt(at.comparator);const e=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new qe(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new qe(n.field,0))}for(const n of this.en)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new qe(n.field,n.dir==="asc"?0:1)));return new pn(pn.UNKNOWN_ID,this.collectionId,e,_n.empty())}sn(t){for(const e of this.tn)if(this.on(e,t))return!0;return!1}on(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}_n(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
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
 */function Ll(r){var t,e;if(L(r instanceof H||r instanceof Z),r instanceof H){if(r instanceof tl){const s=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(i=>H.create(r.field,"==",i)))||[];return Z.create(s,"or")}return r}const n=r.filters.map(s=>Ll(s));return Z.create(n,r.op)}function im(r){if(r.getFilters().length===0)return[];const t=to(Ll(r));return L(Bl(t)),Xi(t)||Zi(t)?[t]:t.getFilters()}function Xi(r){return r instanceof H}function Zi(r){return r instanceof Z&&lo(r)}function Bl(r){return Xi(r)||Zi(r)||function(e){if(e instanceof Z&&ji(e)){for(const n of e.getFilters())if(!Xi(n)&&!Zi(n))return!1;return!0}return!1}(r)}function to(r){if(L(r instanceof H||r instanceof Z),r instanceof H)return r;if(r.filters.length===1)return to(r.filters[0]);const t=r.filters.map(n=>to(n));let e=Z.create(t,r.op);return e=Cs(e),Bl(e)?e:(L(e instanceof Z),L(In(e)),L(e.filters.length>1),e.filters.reduce((n,s)=>wo(n,s)))}function wo(r,t){let e;return L(r instanceof H||r instanceof Z),L(t instanceof H||t instanceof Z),e=r instanceof H?t instanceof H?function(s,i){return Z.create([s,i],"and")}(r,t):zu(r,t):t instanceof H?zu(t,r):function(s,i){if(L(s.filters.length>0&&i.filters.length>0),In(s)&&In(i))return Yc(s,i.getFilters());const a=ji(s)?s:i,u=ji(s)?i:s,c=a.filters.map(d=>wo(d,u));return Z.create(c,"or")}(r,t),Cs(e)}function zu(r,t){if(In(t))return Yc(t,r.getFilters());{const e=t.filters.map(n=>wo(r,n));return Z.create(e,"or")}}function Cs(r){if(L(r instanceof H||r instanceof Z),r instanceof H)return r;const t=r.getFilters();if(t.length===1)return Cs(t[0]);if(Hc(r))return r;const e=t.map(s=>Cs(s)),n=[];return e.forEach(s=>{s instanceof H?n.push(s):s instanceof Z&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:Z.create(n,r.op)}/**
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
 */class om{constructor(){this.un=new vo}addToCollectionParentIndex(t,e){return this.un.add(e),v.resolve()}getCollectionParents(t,e){return v.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return v.resolve()}deleteFieldIndex(t,e){return v.resolve()}deleteAllFieldIndexes(t){return v.resolve()}createTargetIndexes(t,e){return v.resolve()}getDocumentsMatchingTarget(t,e){return v.resolve(null)}getIndexType(t,e){return v.resolve(0)}getFieldIndexes(t,e){return v.resolve([])}getNextCollectionGroupToUpdate(t){return v.resolve(null)}getMinOffset(t,e){return v.resolve(qt.min())}getMinOffsetFromCollectionGroup(t,e){return v.resolve(qt.min())}updateCollectionGroup(t,e,n){return v.resolve()}updateIndexEntries(t,e){return v.resolve()}}class vo{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new tt(W.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new tt(W.comparator)).toArray()}}/**
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
 */const ls=new Uint8Array(0);class am{constructor(t,e){this.databaseId=e,this.cn=new vo,this.ln=new re(n=>ze(n),(n,s)=>Cr(n,s)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.cn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener(()=>{this.cn.add(e)});const i={collectionId:n,parent:Dt(s)};return ju(t).put(i)}return v.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[xc(e),""],!1,!0);return ju(t).U(s).next(i=>{for(const a of i){if(a.collectionId!==e)break;n.push(zt(a.parent))}return n})}addFieldIndex(t,e){const n=or(t),s=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=an(t);return i.next(u=>{a.put(Ou(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=or(t),s=an(t),i=on(t);return n.delete(e.indexId).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=or(t),n=on(t),s=an(t);return e.j().next(()=>n.j()).next(()=>s.j())}createTargetIndexes(t,e){return v.forEach(this.hn(e),n=>this.getIndexType(t,n).next(s=>{if(s===0||s===1){const i=new Gu(n).an();if(i!=null)return this.addFieldIndex(t,i)}}))}getDocumentsMatchingTarget(t,e){const n=on(t);let s=!0;const i=new Map;return v.forEach(this.hn(e),a=>this.Pn(t,a).next(u=>{s&&(s=!!u),i.set(a,u)})).next(()=>{if(s){let a=j();const u=[];return v.forEach(i,(c,d)=>{C("IndexedDbIndexManager",`Using index ${function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map(Q=>`${Q.fieldPath}:${Q.kind}`).join(",")}`}(c)} to execute ${ze(e)}`);const f=function(B,Q){const X=qi(Q);if(X===void 0)return null;for(const K of Ps(B,X.fieldPath))switch(K.op){case"array-contains-any":return K.value.arrayValue.values||[];case"array-contains":return[K.value]}return null}(d,c),g=function(B,Q){const X=new Map;for(const K of Ne(Q))for(const T of Ps(B,K.fieldPath))switch(T.op){case"==":case"in":X.set(K.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return X.set(K.fieldPath.canonicalString(),T.value),Array.from(X.values())}return null}(d,c),_=function(B,Q){const X=[];let K=!0;for(const T of Ne(Q)){const p=T.kind===0?wu(B,T.fieldPath,B.startAt):vu(B,T.fieldPath,B.startAt);X.push(p.value),K&&(K=p.inclusive)}return new Ie(X,K)}(d,c),P=function(B,Q){const X=[];let K=!0;for(const T of Ne(Q)){const p=T.kind===0?vu(B,T.fieldPath,B.endAt):wu(B,T.fieldPath,B.endAt);X.push(p.value),K&&(K=p.inclusive)}return new Ie(X,K)}(d,c),D=this.In(c,d,_),N=this.In(c,d,P),b=this.Tn(c,d,g),U=this.En(c.indexId,f,D,_.inclusive,N,P.inclusive,b);return v.forEach(U,G=>n.G(G,e.limit).next(B=>{B.forEach(Q=>{const X=M.fromSegments(Q.documentKey);a.has(X)||(a=a.add(X),u.push(X))})}))}).next(()=>u)}return v.resolve(null)})}hn(t){let e=this.ln.get(t);return e||(t.filters.length===0?e=[t]:e=im(Z.create(t.filters,"and")).map(n=>Qi(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.ln.set(t,e),e)}En(t,e,n,s,i,a,u){const c=(e!=null?e.length:1)*Math.max(n.length,i.length),d=c/(e!=null?e.length:1),f=[];for(let g=0;g<c;++g){const _=e?this.dn(e[g/d]):ls,P=this.An(t,_,n[g%d],s),D=this.Rn(t,_,i[g%d],a),N=u.map(b=>this.An(t,_,b,!0));f.push(...this.createRange(P,D,N))}return f}An(t,e,n,s){const i=new Oe(t,M.empty(),e,n);return s?i:i.Zt()}Rn(t,e,n,s){const i=new Oe(t,M.empty(),e,n);return s?i.Zt():i}Pn(t,e){const n=new Gu(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next(i=>{let a=null;for(const u of i)n.rn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(t,e){let n=2;const s=this.hn(e);return v.forEach(s,i=>this.Pn(t,i).next(a=>{a?n!==0&&a.fields.length<function(c){let d=new tt(at.comparator),f=!1;for(const g of c.filters)for(const _ of g.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:d=d.add(_.field));for(const g of c.orderBy)g.field.isKeyField()||(d=d.add(g.field));return d.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&s.length>1&&n===2?1:n)}Vn(t,e){const n=new ir;for(const s of Ne(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.Yt(s.kind);Me.vt.It(i,a)}return n.zt()}dn(t){const e=new ir;return Me.vt.It(t,e.Yt(0)),e.zt()}mn(t,e){const n=new ir;return Me.vt.It(Ge(this.databaseId,e),n.Yt(function(i){const a=Ne(i);return a.length===0?0:a[a.length-1].kind}(t))),n.zt()}Tn(t,e,n){if(n===null)return[];let s=[];s.push(new ir);let i=0;for(const a of Ne(t)){const u=n[i++];for(const c of s)if(this.fn(e,a.fieldPath)&&wr(u))s=this.gn(s,a,u);else{const d=c.Yt(a.kind);Me.vt.It(u,d)}}return this.pn(s)}In(t,e,n){return this.Tn(t,e,n.position)}pn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].zt();return e}gn(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const c=new ir;c.seed(u.zt()),Me.vt.It(a,c.Yt(e.kind)),i.push(c)}return i}fn(t,e){return!!t.filters.find(n=>n instanceof H&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=or(t),s=an(t);return(e?n.U("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.U()).next(i=>{const a=[];return v.forEach(i,u=>s.get([u.indexId,this.uid]).next(c=>{a.push(function(f,g){const _=g?new _n(g.sequenceNumber,new qt($e(g.readTime),new M(zt(g.documentKey)),g.largestBatchId)):_n.empty(),P=f.fields.map(([D,N])=>new qe(at.fromServerFormat(D),N));return new pn(f.indexId,f.collectionGroup,P,_)}(u,c))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:z(n.collectionGroup,s.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const s=or(t),i=an(t);return this.yn(t).next(a=>s.U("collectionGroupIndex",IDBKeyRange.bound(e,e)).next(u=>v.forEach(u,c=>i.put(Ou(c.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return v.forEach(e,(s,i)=>{const a=n.get(s.collectionGroup);return(a?v.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next(u=>(n.set(s.collectionGroup,u),v.forEach(u,c=>this.wn(t,s,c).next(d=>{const f=this.Sn(i,c);return d.isEqual(f)?v.resolve():this.bn(t,i,c,d,f)}))))})}Dn(t,e,n,s){return on(t).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(n,e.key),documentKey:e.key.path.toArray()})}vn(t,e,n,s){return on(t).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(n,e.key),e.key.path.toArray()])}wn(t,e,n){const s=on(t);let i=new tt(le);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,e)])},(a,u)=>{i=i.add(new Oe(n.indexId,e,u.arrayValue,u.directionalValue))}).next(()=>i)}Sn(t,e){let n=new tt(le);const s=this.Vn(e,t);if(s==null)return n;const i=qi(e);if(i!=null){const a=t.data.field(i.fieldPath);if(wr(a))for(const u of a.arrayValue.values||[])n=n.add(new Oe(e.indexId,t.key,this.dn(u),s))}else n=n.add(new Oe(e.indexId,t.key,ls,s));return n}bn(t,e,n,s,i){C("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const a=[];return function(c,d,f,g,_){const P=c.getIterator(),D=d.getIterator();let N=sn(P),b=sn(D);for(;N||b;){let U=!1,G=!1;if(N&&b){const B=f(N,b);B<0?G=!0:B>0&&(U=!0)}else N!=null?G=!0:U=!0;U?(g(b),b=sn(D)):G?(_(N),N=sn(P)):(N=sn(P),b=sn(D))}}(s,i,le,u=>{a.push(this.Dn(t,e,n,u))},u=>{a.push(this.vn(t,e,n,u))}),v.waitFor(a)}yn(t){let e=1;return an(t).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),e=s.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,u)=>le(a,u)).filter((a,u,c)=>!u||le(a,c[u-1])!==0);const s=[];s.push(t);for(const a of n){const u=le(a,t),c=le(a,e);if(u===0)s[0]=t.Zt();else if(u>0&&c<0)s.push(a),s.push(a.Zt());else if(c>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Cn(s[a],s[a+1]))return[];const u=[s[a].indexId,this.uid,s[a].arrayValue,s[a].directionalValue,ls,[]],c=[s[a+1].indexId,this.uid,s[a+1].arrayValue,s[a+1].directionalValue,ls,[]];i.push(IDBKeyRange.bound(u,c))}return i}Cn(t,e){return le(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Ku)}getMinOffset(t,e){return v.mapArray(this.hn(e),n=>this.Pn(t,n).next(s=>s||O())).next(Ku)}}function ju(r){return _t(r,"collectionParents")}function on(r){return _t(r,"indexEntries")}function or(r){return _t(r,"indexConfiguration")}function an(r){return _t(r,"indexState")}function Ku(r){L(r.length!==0);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;ao(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new qt(t.readTime,t.documentKey,e)}/**
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
 */const Qu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class xt{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new xt(t,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function ql(r,t,e){const n=r.store("mutations"),s=r.store("documentMutations"),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const c=n.J({range:a},(f,g,_)=>(u++,_.delete()));i.push(c.next(()=>{L(u===1)}));const d=[];for(const f of e.mutations){const g=Lc(t,f.key.path,e.batchId);i.push(s.delete(g)),d.push(f.key)}return v.waitFor(i).next(()=>d)}function xs(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw O();t=r.noDocument}return JSON.stringify(t).length}/**
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
 */xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(41943040,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);class $s{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Fn={}}static lt(t,e,n,s){L(t.uid!=="");const i=t.isAuthenticated()?t.uid:"";return new $s(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return he(t).J({index:"userMutationsIndex",range:n},(s,i,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,s){const i=dn(t),a=he(t);return a.add({}).next(u=>{L(typeof u=="number");const c=new po(u,e,n,s),d=function(P,D,N){const b=N.baseMutations.map(G=>Rr(P.ct,G)),U=N.mutations.map(G=>Rr(P.ct,G));return{userId:D,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:b,mutations:U}}(this.serializer,this.userId,c),f=[];let g=new tt((_,P)=>z(_.canonicalString(),P.canonicalString()));for(const _ of s){const P=Lc(this.userId,_.key.path,u);g=g.add(_.key.path.popLast()),f.push(a.put(d)),f.push(i.put(P,Wd))}return g.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(t,_))}),t.addOnCommittedListener(()=>{this.Fn[u]=c.keys()}),v.waitFor(f).next(()=>c)})}lookupMutationBatch(t,e){return he(t).get(e).next(n=>n?(L(n.userId===this.userId),Fe(this.serializer,n)):null)}Mn(t,e){return this.Fn[e]?v.resolve(this.Fn[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const s=n.keys();return this.Fn[e]=s,s}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return he(t).J({index:"userMutationsIndex",range:s},(a,u,c)=>{u.userId===this.userId&&(L(u.batchId>=n),i=Fe(this.serializer,u)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return he(t).J({index:"userMutationsIndex",range:e,reverse:!0},(s,i,a)=>{n=i.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return he(t).U("userMutationsIndex",e).next(n=>n.map(s=>Fe(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=ps(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return dn(t).J({range:s},(a,u,c)=>{const[d,f,g]=a,_=zt(f);if(d===this.userId&&e.path.isEqual(_))return he(t).get(g).next(P=>{if(!P)throw O();L(P.userId===this.userId),i.push(Fe(this.serializer,P))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new tt(z);const s=[];return e.forEach(i=>{const a=ps(this.userId,i.path),u=IDBKeyRange.lowerBound(a),c=dn(t).J({range:u},(d,f,g)=>{const[_,P,D]=d,N=zt(P);_===this.userId&&i.path.isEqual(N)?n=n.add(D):g.done()});s.push(c)}),v.waitFor(s).next(()=>this.xn(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=ps(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new tt(z);return dn(t).J({range:a},(c,d,f)=>{const[g,_,P]=c,D=zt(_);g===this.userId&&n.isPrefixOf(D)?D.length===s&&(u=u.add(P)):f.done()}).next(()=>this.xn(t,u))}xn(t,e){const n=[],s=[];return e.forEach(i=>{s.push(he(t).get(i).next(a=>{if(a===null)throw O();L(a.userId===this.userId),n.push(Fe(this.serializer,a))}))}),v.waitFor(s).next(()=>n)}removeMutationBatch(t,e){return ql(t._e,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.On(e.batchId)}),v.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))}On(t){delete this.Fn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return v.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),s=[];return dn(t).J({range:n},(i,a,u)=>{if(i[0]===this.userId){const c=zt(i[1]);s.push(c)}else u.done()}).next(()=>{L(s.length===0)})})}containsKey(t,e){return Ul(t,this.userId,e)}Nn(t){return Gl(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Ul(r,t,e){const n=ps(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return dn(r).J({range:i,H:!0},(u,c,d)=>{const[f,g,_]=u;f===t&&g===s&&(a=!0),d.done()}).next(()=>a)}function he(r){return _t(r,"mutations")}function dn(r){return _t(r,"documentMutations")}function Gl(r){return _t(r,"mutationQueues")}/**
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
 */class We{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new We(0)}static kn(){return new We(-1)}}/**
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
 */class um{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.qn(t).next(e=>{const n=new We(e.highestTargetId);return e.highestTargetId=n.next(),this.Qn(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.qn(t).next(e=>q.fromTimestamp(new ct(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.qn(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.qn(t).next(s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.Qn(t,s)))}addTargetData(t,e){return this.Kn(t,e).next(()=>this.qn(t).next(n=>(n.targetCount+=1,this.$n(e,n),this.Qn(t,n))))}updateTargetData(t,e){return this.Kn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>un(t).delete(e.targetId)).next(()=>this.qn(t)).next(n=>(L(n.targetCount>0),n.targetCount-=1,this.Qn(t,n)))}removeTargets(t,e,n){let s=0;const i=[];return un(t).J((a,u)=>{const c=dr(u);c.sequenceNumber<=e&&n.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(t,c)))}).next(()=>v.waitFor(i)).next(()=>s)}forEachTarget(t,e){return un(t).J((n,s)=>{const i=dr(s);e(i)})}qn(t){return $u(t).get("targetGlobalKey").next(e=>(L(e!==null),e))}Qn(t,e){return $u(t).put("targetGlobalKey",e)}Kn(t,e){return un(t).put(Ol(this.serializer,e))}$n(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.qn(t).next(e=>e.targetCount)}getTargetData(t,e){const n=ze(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return un(t).J({range:s,index:"queryTargetsIndex"},(a,u,c)=>{const d=dr(u);Cr(e,d.target)&&(i=d,c.done())}).next(()=>i)}addMatchingKeys(t,e,n){const s=[],i=fe(t);return e.forEach(a=>{const u=Dt(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))}),v.waitFor(s)}removeMatchingKeys(t,e,n){const s=fe(t);return v.forEach(e,i=>{const a=Dt(i.path);return v.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])})}removeMatchingKeysForTargetId(t,e){const n=fe(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=fe(t);let i=j();return s.J({range:n,H:!0},(a,u,c)=>{const d=zt(a[1]),f=new M(d);i=i.add(f)}).next(()=>i)}containsKey(t,e){const n=Dt(e.path),s=IDBKeyRange.bound([n],[xc(n)],!1,!0);let i=0;return fe(t).J({index:"documentTargetsIndex",H:!0,range:s},([a,u],c,d)=>{a!==0&&(i++,d.done())}).next(()=>i>0)}ot(t,e){return un(t).get(e).next(n=>n?dr(n):null)}}function un(r){return _t(r,"targets")}function $u(r){return _t(r,"targetGlobal")}function fe(r){return _t(r,"targetDocuments")}/**
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
 */function Wu([r,t],[e,n]){const s=z(r,e);return s===0?z(t,n):s}class cm{constructor(t){this.Un=t,this.buffer=new tt(Wu),this.Wn=0}Gn(){return++this.Wn}zn(t){const e=[t,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Wu(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class zl{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(t){C("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ae(e)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ve(e)}await this.Hn(3e5)})}}class lm{constructor(t,e){this.Jn=t,this.params=e}calculateTargetCount(t,e){return this.Jn.Yn(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return v.resolve(Mt.oe);const n=new cm(e);return this.Jn.forEachTarget(t,s=>n.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(t,s=>n.zn(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Jn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Jn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(Qu)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qu):this.Xn(t,e))}getCacheSize(t){return this.Jn.getCacheSize(t)}Xn(t,e){let n,s,i,a,u,c,d;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s))).next(g=>(n=g,u=Date.now(),this.removeTargets(t,n,e))).next(g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(g=>(d=Date.now(),cn()<=Xt.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(c-u)+`ms
	Removed ${g} documents in `+(d-c)+`ms
Total Duration: ${d-f}ms`),v.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function jl(r,t){return new lm(r,t)}/**
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
 */class hm{constructor(t,e){this.db=t,this.garbageCollector=jl(this,e)}Yn(t){const e=this.er(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}er(t){let e=0;return this.Zn(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Zn(t,e){return this.tr(t,(n,s)=>e(s))}addReference(t,e,n){return hs(t,n)}removeReference(t,e,n){return hs(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return hs(t,e)}nr(t,e){return function(s,i){let a=!1;return Gl(s).Y(u=>Ul(s,u,i).next(c=>(c&&(a=!0),v.resolve(!c)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(t,(a,u)=>{if(u<=e){const c=this.nr(t,a).next(d=>{if(!d)return i++,n.getEntry(t,a).next(()=>(n.removeEntry(a,q.min()),fe(t).delete(function(g){return[0,Dt(g.path)]}(a))))});s.push(c)}}).next(()=>v.waitFor(s)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return hs(t,e)}tr(t,e){const n=fe(t);let s,i=Mt.oe;return n.J({index:"documentTargetsIndex"},([a,u],{path:c,sequenceNumber:d})=>{a===0?(i!==Mt.oe&&e(new M(zt(s)),i),i=d,s=c):i=Mt.oe}).next(()=>{i!==Mt.oe&&e(new M(zt(s)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function hs(r,t){return fe(r).put(function(n,s){return{targetId:0,path:Dt(n.path),sequenceNumber:s}}(t,r.currentSequenceNumber))}/**
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
 */class Kl{constructor(){this.changes=new re(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,it.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?v.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class dm{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return De(t).put(n)}removeEntry(t,e,n){return De(t).delete(function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],bs(a),u[u.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.rr(t,n)))}getEntry(t,e){let n=it.newInvalidDocument(e);return De(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(ar(e))},(s,i)=>{n=this.ir(e,i)}).next(()=>n)}sr(t,e){let n={size:0,document:it.newInvalidDocument(e)};return De(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(ar(e))},(s,i)=>{n={document:this.ir(e,i),size:xs(i)}}).next(()=>n)}getEntries(t,e){let n=Lt();return this._r(t,e,(s,i)=>{const a=this.ir(s,i);n=n.insert(s,a)}).next(()=>n)}ar(t,e){let n=Lt(),s=new rt(M.comparator);return this._r(t,e,(i,a)=>{const u=this.ir(i,a);n=n.insert(i,u),s=s.insert(i,xs(a))}).next(()=>({documents:n,ur:s}))}_r(t,e,n){if(e.isEmpty())return v.resolve();let s=new tt(Yu);e.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(ar(s.first()),ar(s.last())),a=s.getIterator();let u=a.getNext();return De(t).J({index:"documentKeyIndex",range:i},(c,d,f)=>{const g=M.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&Yu(u,g)<0;)n(u,null),u=a.getNext();u&&u.isEqual(g)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?f.$(ar(u)):f.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),bs(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return De(t).U(IDBKeyRange.bound(u,c,!0)).next(d=>{i==null||i.incrementDocumentReadCount(d.length);let f=Lt();for(const g of d){const _=this.ir(M.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);_.isFoundDocument()&&(Dr(e,_)||s.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(t,e,n,s){let i=Lt();const a=Ju(e,n),u=Ju(e,qt.max());return De(t).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,u,!0)},(c,d,f)=>{const g=this.ir(M.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(g.key,g),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(t){return new fm(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return Hu(t).get("remoteDocumentGlobalKey").next(e=>(L(!!e),e))}rr(t,e){return Hu(t).put("remoteDocumentGlobalKey",e)}ir(t,e){if(e){const n=Xf(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(q.min())))return n}return it.newInvalidDocument(t)}}function Ql(r){return new dm(r)}class fm extends Kl{constructor(t,e){super(),this.cr=t,this.trackRemovals=e,this.lr=new re(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(t){const e=[];let n=0,s=new tt((i,a)=>z(i.canonicalString(),a.canonicalString()));return this.changes.forEach((i,a)=>{const u=this.lr.get(i);if(e.push(this.cr.removeEntry(t,i,u.readTime)),a.isValidDocument()){const c=Fu(this.cr.serializer,a);s=s.add(i.path.popLast());const d=xs(c);n+=d-u.size,e.push(this.cr.addEntry(t,i,c))}else if(n-=u.size,this.trackRemovals){const c=Fu(this.cr.serializer,a.convertToNoDocument(q.min()));e.push(this.cr.addEntry(t,i,c))}}),s.forEach(i=>{e.push(this.cr.indexManager.addToCollectionParentIndex(t,i))}),e.push(this.cr.updateMetadata(t,n)),v.waitFor(e)}getFromCache(t,e){return this.cr.sr(t,e).next(n=>(this.lr.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.cr.ar(t,e).next(({documents:n,ur:s})=>(s.forEach((i,a)=>{this.lr.set(i,{size:a,readTime:n.get(i).readTime})}),n))}}function Hu(r){return _t(r,"remoteDocumentGlobal")}function De(r){return _t(r,"remoteDocumentsV14")}function ar(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Ju(r,t){const e=t.documentKey.path.toArray();return[r,bs(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function Yu(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=z(e[i],n[i]),s)return s;return s=z(e.length,n.length),s||(s=z(e[e.length-2],n[n.length-2]),s||z(e[e.length-1],n[n.length-1]))}/**
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
 */class mm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class $l{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&pr(n.mutation,s,Ot.empty(),ct.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,j()).next(()=>n))}getLocalViewOfDocuments(t,e,n=j()){const s=jt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(i=>{let a=lr();return i.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=jt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,j()))}populateOverlays(t,e,n){const s=[];return n.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,n,s){let i=Lt();const a=gr(),u=function(){return gr()}();return e.forEach((c,d)=>{const f=n.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof se)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),pr(f.mutation,d,f.mutation.getFieldMask(),ct.now())):a.set(d.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((d,f)=>a.set(d,f)),e.forEach((d,f)=>{var g;return u.set(d,new mm(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),u))}recalculateAndSaveOverlays(t,e){const n=gr();let s=new rt((a,u)=>a-u),i=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(c=>{const d=e.get(c);if(d===null)return;let f=n.get(c)||Ot.empty();f=u.applyToLocalView(d,f),n.set(c,f);const g=(s.get(u.batchId)||j()).add(c);s=s.insert(u.batchId,g)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),d=c.key,f=c.value,g=cl();f.forEach(_=>{if(!i.has(_)){const P=pl(e.get(_),n.get(_));P!==null&&g.set(_,P),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return v.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ho(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):v.resolve(jt());let u=-1,c=i;return a.next(d=>v.forEach(d,(f,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(f)?v.resolve():this.remoteDocumentCache.getEntry(t,f).next(_=>{c=c.insert(f,_)}))).next(()=>this.populateOverlays(t,d,i)).next(()=>this.computeViews(t,c,d,j())).next(f=>({batchId:u,changes:ul(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(n=>{let s=lr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=lr();return this.indexManager.getCollectionParents(t,i).next(u=>v.forEach(u,c=>{const d=function(g,_){return new ne(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next(f=>{f.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s))).next(a=>{i.forEach((c,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,it.newInvalidDocument(f)))});let u=lr();return a.forEach((c,d)=>{const f=i.get(c);f!==void 0&&pr(f.mutation,d,Ot.empty(),ct.now()),Dr(e,d)&&(u=u.insert(c,d))}),u})}}/**
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
 */class gm{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return v.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:mt(s.createTime)}}(e)),v.resolve()}getNamedQuery(t,e){return v.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Eo(s.bundledQuery),readTime:mt(s.readTime)}}(e)),v.resolve()}}/**
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
 */class pm{constructor(){this.overlays=new rt(M.comparator),this.Ir=new Map}getOverlay(t,e){return v.resolve(this.overlays.get(e))}getOverlays(t,e){const n=jt();return v.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,i)=>{this.ht(t,e,i)}),v.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(n)),v.resolve()}getOverlaysForCollection(t,e,n){const s=jt(),i=e.length+1,a=new M(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,d=c.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return v.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new rt((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let f=i.get(d.largestBatchId);f===null&&(f=jt(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const u=jt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,f)=>u.set(d,f)),!(u.size()>=s)););return v.resolve(u)}ht(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new yo(e,n));let i=this.Ir.get(e);i===void 0&&(i=j(),this.Ir.set(e,i)),this.Ir.set(e,i.add(n.key))}}/**
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
 */class _m{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(t){return v.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,v.resolve()}}/**
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
 */class Ao{constructor(){this.Tr=new tt(yt.Er),this.dr=new tt(yt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new yt(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new yt(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new M(new W([])),n=new yt(e,t),s=new yt(e,t+1),i=[];return this.dr.forEachInRange([n,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new M(new W([])),n=new yt(e,t),s=new yt(e,t+1);let i=j();return this.dr.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new yt(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class yt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return M.comparator(t.key,e.key)||z(t.wr,e.wr)}static Ar(t,e){return z(t.wr,e.wr)||M.comparator(t.key,e.key)}}/**
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
 */class ym{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new tt(yt.Er)}checkEmpty(t){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new po(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.br=this.br.add(new yt(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return v.resolve(a)}lookupMutationBatch(t,e){return v.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.vr(n),i=s<0?0:s;return v.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new yt(e,0),s=new yt(e,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,s],a=>{const u=this.Dr(a.wr);i.push(u)}),v.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new tt(z);return e.forEach(s=>{const i=new yt(s,0),a=new yt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],u=>{n=n.add(u.wr)})}),v.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;M.isDocumentKey(i)||(i=i.child(""));const a=new yt(new M(i),0);let u=new tt(z);return this.br.forEachWhile(c=>{const d=c.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(c.wr)),!0)},a),v.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach(n=>{const s=this.Dr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){L(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return v.forEach(e.mutations,s=>{const i=new yt(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new yt(e,0),s=this.br.firstAfterOrEqual(n);return v.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,v.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Im{constructor(t){this.Mr=t,this.docs=function(){return new rt(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return v.resolve(n?n.document.mutableCopy():it.newInvalidDocument(e))}getEntries(t,e){let n=Lt();return e.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),v.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Lt();const a=e.path,u=new M(a.child("")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:d,value:{document:f}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||ao(Nc(f),n)<=0||(s.has(f.key)||Dr(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return v.resolve(i)}getAllFromCollectionGroup(t,e,n,s){O()}Or(t,e){return v.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Tm(this)}getSize(t){return v.resolve(this.size)}}class Tm extends Kl{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(n)}),v.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class Em{constructor(t){this.persistence=t,this.Nr=new re(e=>ze(e),Cr),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ao,this.targetCount=0,this.kr=We.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,s)=>e(s)),v.resolve()}getLastRemoteSnapshotVersion(t){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return v.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),v.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new We(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,v.resolve()}updateTargetData(t,e){return this.Kn(e),v.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,v.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),v.waitFor(i).next(()=>s)}getTargetCount(t){return v.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return v.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),v.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),v.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),v.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return v.resolve(n)}containsKey(t,e){return v.resolve(this.Br.containsKey(e))}}/**
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
 */class Ro{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Mt(0),this.Kr=!1,this.Kr=!0,this.$r=new _m,this.referenceDelegate=t(this),this.Ur=new Em(this),this.indexManager=new om,this.remoteDocumentCache=function(s){return new Im(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Ml(e),this.Gr=new gm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new pm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new ym(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){C("MemoryPersistence","Starting transaction:",t);const s=new wm(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(t,e){return v.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class wm extends Fc{constructor(t){super(),this.currentSequenceNumber=t}}class Ws{constructor(t){this.persistence=t,this.Jr=new Ao,this.Yr=null}static Zr(t){return new Ws(t)}get Xr(){if(this.Yr)return this.Yr;throw O()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),v.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),v.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),v.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Xr,n=>{const s=M.fromPath(n);return this.ei(t,s).next(i=>{i||e.removeEntry(s,q.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return v.or([()=>v.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}class Ds{constructor(t,e){this.persistence=t,this.ti=new re(n=>Dt(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=jl(this,e)}static Zr(t,e){return new Ds(t,e)}zr(){}jr(t){return v.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Yn(t){const e=this.er(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}er(t){let e=0;return this.Zn(t,n=>{e++}).next(()=>e)}Zn(t,e){return v.forEach(this.ti,(n,s)=>this.nr(t,n,s).next(i=>i?v.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Or(t,a=>this.nr(t,a,e).next(u=>{u||(n++,i.removeEntry(a,q.min()))})).next(()=>i.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.ti.set(e,t.currentSequenceNumber),v.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.ti.set(n,t.currentSequenceNumber),v.resolve()}removeReference(t,e,n){return this.ti.set(n,t.currentSequenceNumber),v.resolve()}updateLimboDocument(t,e){return this.ti.set(e,t.currentSequenceNumber),v.resolve()}Wr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ys(t.data.value)),e}nr(t,e,n){return v.or([()=>this.persistence.Hr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.ti.get(e);return v.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class vm{constructor(t){this.serializer=t}O(t,e,n,s){const i=new Bs("createOrUpgrade",e);n<1&&s>=1&&(function(c){c.createObjectStore("owner")}(t),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",hu,{unique:!0}),c.createObjectStore("documentMutations")}(t),Xu(t),function(c){c.createObjectStore("remoteDocuments")}(t));let a=v.resolve();return n<3&&s>=3&&(n!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(t),Xu(t)),a=a.next(()=>function(c){const d=c.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",f)}(i))),n<4&&s>=4&&(n!==0&&(a=a.next(()=>function(c,d){return d.store("mutations").U().next(f=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",hu,{unique:!0});const g=d.store("mutations"),_=f.map(P=>g.put(P));return v.waitFor(_)})}(t,i))),a=a.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(t)})),n<5&&s>=5&&(a=a.next(()=>this.ni(i))),n<6&&s>=6&&(a=a.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(t),this.ri(i)))),n<7&&s>=7&&(a=a.next(()=>this.ii(i))),n<8&&s>=8&&(a=a.next(()=>this.si(t,i))),n<9&&s>=9&&(a=a.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&s>=10&&(a=a.next(()=>this.oi(i))),n<11&&s>=11&&(a=a.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(t),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(t)})),n<12&&s>=12&&(a=a.next(()=>{(function(c){const d=c.createObjectStore("documentOverlays",{keyPath:af});d.createIndex("collectionPathOverlayIndex",uf,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",cf,{unique:!1})})(t)})),n<13&&s>=13&&(a=a.next(()=>function(c){const d=c.createObjectStore("remoteDocumentsV14",{keyPath:Hd});d.createIndex("documentKeyIndex",Jd),d.createIndex("collectionGroupIndex",Yd)}(t)).next(()=>this._i(t,i)).next(()=>t.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(a=a.next(()=>this.ai(t,i))),n<15&&s>=15&&(a=a.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:nf}).createIndex("sequenceNumberIndex",rf,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:sf}).createIndex("documentKeyIndex",of,{unique:!1})}(t))),n<16&&s>=16&&(a=a.next(()=>{e.objectStore("indexState").clear()}).next(()=>{e.objectStore("indexEntries").clear()})),n<17&&s>=17&&(a=a.next(()=>{(function(c){c.createObjectStore("globals",{keyPath:"name"})})(t)})),a}ri(t){let e=0;return t.store("remoteDocuments").J((n,s)=>{e+=xs(s)}).next(()=>{const n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(t){const e=t.store("mutationQueues"),n=t.store("mutations");return e.U().next(s=>v.forEach(s,i=>{const a=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",a).next(u=>v.forEach(u,c=>{L(c.userId===i.userId);const d=Fe(this.serializer,c);return ql(t,i.userId,d).next(()=>{})}))}))}ii(t){const e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return n.J((a,u)=>{const c=new W(a),d=function(g){return[0,Dt(g)]}(c);i.push(e.get(d).next(f=>f?v.resolve():(g=>e.put({targetId:0,path:Dt(g),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>v.waitFor(i))})}si(t,e){t.createObjectStore("collectionParents",{keyPath:ef});const n=e.store("collectionParents"),s=new vo,i=a=>{if(s.add(a)){const u=a.lastSegment(),c=a.popLast();return n.put({collectionId:u,parent:Dt(c)})}};return e.store("remoteDocuments").J({H:!0},(a,u)=>{const c=new W(a);return i(c.popLast())}).next(()=>e.store("documentMutations").J({H:!0},([a,u,c],d)=>{const f=zt(u);return i(f.popLast())}))}oi(t){const e=t.store("targets");return e.J((n,s)=>{const i=dr(s),a=Ol(this.serializer,i);return e.put(a)})}_i(t,e){const n=e.store("remoteDocuments"),s=[];return n.J((i,a)=>{const u=e.store("remoteDocumentsV14"),c=function(g){return g.document?new M(W.fromString(g.document.name).popFirst(5)):g.noDocument?M.fromSegments(g.noDocument.path):g.unknownDocument?M.fromSegments(g.unknownDocument.path):O()}(a).path.toArray(),d={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(d))}).next(()=>v.waitFor(s))}ai(t,e){const n=e.store("mutations"),s=Ql(this.serializer),i=new Ro(Ws.Zr,this.serializer.ct);return n.U().next(a=>{const u=new Map;return a.forEach(c=>{var d;let f=(d=u.get(c.userId))!==null&&d!==void 0?d:j();Fe(this.serializer,c).keys().forEach(g=>f=f.add(g)),u.set(c.userId,f)}),v.forEach(u,(c,d)=>{const f=new It(d),g=Qs.lt(this.serializer,f),_=i.getIndexManager(f),P=$s.lt(f,this.serializer,_,i.referenceDelegate);return new $l(s,P,g,_).recalculateAndSaveOverlaysForDocumentKeys(new Ui(e,Mt.oe),c).next()})})}}function Xu(r){r.createObjectStore("targetDocuments",{keyPath:Zd}).createIndex("documentTargetsIndex",tf,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Xd,{unique:!0}),r.createObjectStore("targetGlobal")}const ki="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Po{constructor(t,e,n,s,i,a,u,c,d,f,g=17){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.ui=i,this.window=a,this.document=u,this.ci=d,this.li=f,this.hi=g,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=_=>Promise.resolve(),!Po.D())throw new x(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new hm(this,s),this.Ai=e+"main",this.serializer=new Ml(c),this.Ri=new Kt(this.Ai,this.hi,new vm(this.serializer)),this.$r=new tm,this.Ur=new um(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Ql(this.serializer),this.Gr=new Zf,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&ft("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(V.FAILED_PRECONDITION,ki);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Ur.getHighestSequenceNumber(t))}).then(t=>{this.Qr=new Mt(t,this.ci)}).then(()=>{this.Kr=!0}).catch(t=>(this.Ri&&this.Ri.close(),Promise.reject(t)))}yi(t){return this.di=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ri.L(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>ds(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(t).next(e=>{e||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(t)).next(e=>this.isPrimary&&!e?this.bi(t).next(()=>!1):!!e&&this.Di(t).next(()=>!0))).catch(t=>{if(Ae(t))return C("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.ui.enqueueRetryable(()=>this.di(t)),this.isPrimary=t})}wi(t){return ur(t).get("owner").next(e=>v.resolve(this.vi(e)))}Ci(t){return ds(t).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=_t(e,"clientMetadata");return n.U().next(s=>{const i=this.xi(s,18e5),a=s.filter(u=>i.indexOf(u)===-1);return v.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Vi)for(const e of t)this.Vi.removeItem(this.Oi(e.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(t){return!!t&&t.ownerId===this.clientId}Si(t){return this.li?v.resolve(!0):ur(t).get("owner").next(e=>{if(e!==null&&this.Mi(e.leaseTimestampMs,5e3)&&!this.Ni(e.ownerId)){if(this.vi(e)&&this.networkEnabled)return!0;if(!this.vi(e)){if(!e.allowTabSynchronization)throw new x(V.FAILED_PRECONDITION,ki);return!1}}return!(!this.networkEnabled||!this.inForeground)||ds(t).U().next(n=>this.xi(n,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&C("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],t=>{const e=new Ui(t,Mt.oe);return this.bi(e).next(()=>this.Ci(e))}),this.Ri.close(),this.qi()}xi(t,e){return t.filter(n=>this.Mi(n.updateTimeMs,e)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",t=>ds(t).U().next(e=>this.xi(e,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(t,e){return $s.lt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new am(t,this.serializer.ct.databaseId)}getDocumentOverlayCache(t){return Qs.lt(this.serializer,t)}getBundleCache(){return this.Gr}runTransaction(t,e,n){C("IndexedDbPersistence","Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=function(c){return c===17?df:c===16?hf:c===15?co:c===14?Uc:c===13?qc:c===12?lf:c===11?Bc:void O()}(this.hi);let a;return this.Ri.runTransaction(t,s,i,u=>(a=new Ui(u,this.Qr?this.Qr.next():Mt.oe),e==="readwrite-primary"?this.wi(a).next(c=>!!c||this.Si(a)).next(c=>{if(!c)throw ft(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new x(V.FAILED_PRECONDITION,kc);return n(a)}).next(c=>this.Di(a).next(()=>c)):this.Ki(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Ki(t){return ur(t).get("owner").next(e=>{if(e!==null&&this.Mi(e.leaseTimestampMs,5e3)&&!this.Ni(e.ownerId)&&!this.vi(e)&&!(this.li||this.allowTabSynchronization&&e.allowTabSynchronization))throw new x(V.FAILED_PRECONDITION,ki)})}Di(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ur(t).put("owner",e)}static D(){return Kt.D()}bi(t){const e=ur(t);return e.get("owner").next(n=>this.vi(n)?(C("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):v.resolve())}Mi(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(ft(`Detected an update time that is in the future: ${t} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const e=/(?:Version|Mobile)\/1[456]/;Ec()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(t){var e;try{const n=((e=this.Vi)===null||e===void 0?void 0:e.getItem(this.Oi(t)))!==null;return C("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ft("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(t){ft("Failed to set zombie client id.",t)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function ur(r){return _t(r,"owner")}function ds(r){return _t(r,"clientMetadata")}function Vo(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
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
 */class So{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=s}static Wi(t,e){let n=j(),s=j();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new So(t,e.fromCache,n,s)}}/**
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
 */class Am{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Wl{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ec()?8:Mc(As())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.Yi(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(t,e,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Am;return this.Xi(t,e,a).next(u=>{if(i.result=u,this.zi)return this.es(t,e,a,u.size)})}).next(()=>i.result)}es(t,e,n,s){return n.documentReadCount<this.ji?(cn()<=Xt.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",ln(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),v.resolve()):(cn()<=Xt.DEBUG&&C("QueryEngine","Query:",ln(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(cn()<=Xt.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",ln(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nt(e))):v.resolve())}Yi(t,e){if(Au(e))return v.resolve(null);let n=Nt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Vs(e,null,"F"),n=Nt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const a=j(...i);return this.Ji.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,n).next(c=>{const d=this.ts(e,u);return this.ns(e,d,a,c.readTime)?this.Yi(t,Vs(e,null,"F")):this.rs(t,d,e,c)}))})))}Zi(t,e,n,s){return Au(e)||s.isEqual(q.min())?v.resolve(null):this.Ji.getDocuments(t,n).next(i=>{const a=this.ts(e,i);return this.ns(e,a,n,s)?v.resolve(null):(cn()<=Xt.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ln(e)),this.rs(t,a,e,Dc(s,-1)).next(u=>u))})}ts(t,e){let n=new tt(ol(t));return e.forEach((s,i)=>{Dr(t,i)&&(n=n.add(i))}),n}ns(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(t,e,n){return cn()<=Xt.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",ln(e)),this.Ji.getDocumentsMatchingQuery(t,e,qt.min(),n)}rs(t,e,n,s){return this.Ji.getDocumentsMatchingQuery(t,n,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class Rm{constructor(t,e,n,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new rt(z),this._s=new re(i=>ze(i),Cr),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new $l(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Hl(r,t,e,n){return new Rm(r,t,e,n)}async function Jl(r,t){const e=k(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],u=[];let c=j();for(const d of s){a.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}for(const d of i){u.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}return e.localDocuments.getDocuments(n,c).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Pm(r,t){const e=k(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),i=e.cs.newChangeBuffer({trackRemovals:!0});return function(u,c,d,f){const g=d.batch,_=g.keys();let P=v.resolve();return _.forEach(D=>{P=P.next(()=>f.getEntry(c,D)).next(N=>{const b=d.docVersions.get(D);L(b!==null),N.version.compareTo(b)<0&&(g.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),f.addEntry(N)))})}),P.next(()=>u.mutationQueue.removeMutationBatch(c,g))}(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let c=j();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(c=c.add(u.batch.mutations[d].key));return c}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function Yl(r){const t=k(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Vm(r,t){const e=k(r),n=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const u=[];t.targetChanges.forEach((f,g)=>{const _=s.get(g);if(!_)return;u.push(e.Ur.removeMatchingKeys(i,f.removedDocuments,g).next(()=>e.Ur.addMatchingKeys(i,f.addedDocuments,g)));let P=_.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?P=P.withResumeToken(dt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(f.resumeToken,n)),s=s.insert(g,P),function(N,b,U){return N.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(_,P,f)&&u.push(e.Ur.updateTargetData(i,P))});let c=Lt(),d=j();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))}),u.push(Xl(i,a,t.documentUpdates).next(f=>{c=f.Ps,d=f.Is})),!n.isEqual(q.min())){const f=e.Ur.getLastRemoteSnapshotVersion(i).next(g=>e.Ur.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(f)}return v.waitFor(u).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,d)).next(()=>c)}).then(i=>(e.os=s,i))}function Xl(r,t,e){let n=j(),s=j();return e.forEach(i=>n=n.add(i)),t.getEntries(r,n).next(i=>{let a=Lt();return e.forEach((u,c)=>{const d=i.get(u);c.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(q.min())?(t.removeEntry(u,c.readTime),a=a.insert(u,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(c),a=a.insert(u,c)):C("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function Sm(r,t){const e=k(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function vn(r,t){const e=k(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Ur.getTargetData(n,t).next(i=>i?(s=i,v.resolve(s)):e.Ur.allocateTargetId(n).next(a=>(s=new Zt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function An(r,t,e){const n=k(r),s=n.os.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ae(a))throw a;C("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}n.os=n.os.remove(t),n._s.delete(s.target)}function Ns(r,t,e){const n=k(r);let s=q.min(),i=j();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,d,f){const g=k(c),_=g._s.get(f);return _!==void 0?v.resolve(g.os.get(_)):g.Ur.getTargetData(d,f)}(n,a,Nt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(a,u.targetId).next(c=>{i=c})}).next(()=>n.ss.getDocumentsMatchingQuery(a,t,e?s:q.min(),e?i:j())).next(u=>(eh(n,il(t),u),{documents:u,Ts:i})))}function Zl(r,t){const e=k(r),n=k(e.Ur),s=e.os.get(t);return s?Promise.resolve(s.target):e.persistence.runTransaction("Get target data","readonly",i=>n.ot(i,t).next(a=>a?a.target:null))}function th(r,t){const e=k(r),n=e.us.get(t)||q.min();return e.persistence.runTransaction("Get new document changes","readonly",s=>e.cs.getAllFromCollectionGroup(s,t,Dc(n,-1),Number.MAX_SAFE_INTEGER)).then(s=>(eh(e,t,s),s))}function eh(r,t,e){let n=r.us.get(t)||q.min();e.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.us.set(t,n)}async function bm(r,t,e,n){const s=k(r);let i=j(),a=Lt();for(const d of e){const f=t.Es(d.metadata.name);d.document&&(i=i.add(f));const g=t.ds(d);g.setReadTime(t.As(d.metadata.readTime)),a=a.insert(f,g)}const u=s.cs.newChangeBuffer({trackRemovals:!0}),c=await vn(s,function(f){return Nt(Dn(W.fromString(`__bundle__/docs/${f}`)))}(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",d=>Xl(d,u,a).next(f=>(u.apply(d),f)).next(f=>s.Ur.removeMatchingKeysForTargetId(d,c.targetId).next(()=>s.Ur.addMatchingKeys(d,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(d,f.Ps,f.Is)).next(()=>f.Ps)))}async function Cm(r,t,e=j()){const n=await vn(r,Nt(Eo(t.bundledQuery))),s=k(r);return s.persistence.runTransaction("Save named query","readwrite",i=>{const a=mt(t.readTime);if(n.snapshotVersion.compareTo(a)>=0)return s.Gr.saveNamedQuery(i,t);const u=n.withResumeToken(dt.EMPTY_BYTE_STRING,a);return s.os=s.os.insert(u.targetId,u),s.Ur.updateTargetData(i,u).next(()=>s.Ur.removeMatchingKeysForTargetId(i,n.targetId)).next(()=>s.Ur.addMatchingKeys(i,e,n.targetId)).next(()=>s.Gr.saveNamedQuery(i,t))})}function Zu(r,t){return`firestore_clients_${r}_${t}`}function tc(r,t,e){let n=`firestore_mutations_${r}_${e}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}function Fi(r,t){return`firestore_targets_${r}_${t}`}class ks{constructor(t,e,n,s){this.user=t,this.batchId=e,this.state=n,this.error=s}static Rs(t,e,n){const s=JSON.parse(n);let i,a=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return a&&s.error&&(a=typeof s.error.message=="string"&&typeof s.error.code=="string",a&&(i=new x(s.error.code,s.error.message))),a?new ks(t,e,s.state,i):(ft("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}Vs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class _r{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Rs(t,e){const n=JSON.parse(e);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new x(n.error.code,n.error.message))),i?new _r(t,n.state,s):(ft("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Vs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Fs{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Rs(t,e){const n=JSON.parse(e);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=fo();for(let a=0;s&&a<n.activeTargetIds.length;++a)s=Oc(n.activeTargetIds[a]),i=i.add(n.activeTargetIds[a]);return s?new Fs(t,i):(ft("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class bo{constructor(t,e){this.clientId=t,this.onlineState=e}static Rs(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new bo(e.clientId,e.onlineState):(ft("SharedClientState",`Failed to parse online state: ${t}`),null)}}class eo{constructor(){this.activeTargetIds=fo()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Mi{constructor(t,e,n,s,i){this.window=t,this.ui=e,this.persistenceKey=n,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new rt(z),this.started=!1,this.bs=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=Zu(this.persistenceKey,this.ps),this.vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new eo),this.Cs=new RegExp(`^firestore_clients_${a}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${a}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${a}_(\\d+)$`),this.xs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.Os=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Qi();for(const n of t){if(n===this.ps)continue;const s=this.getItem(Zu(this.persistenceKey,n));if(s){const i=Fs.Rs(n,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const e=this.storage.getItem(this.xs);if(e){const n=this.Ls(e);n&&this.Bs(n)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.vs,JSON.stringify(t))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(t){let e=!1;return this.Ss.forEach((n,s)=>{s.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.qs(t,"pending")}updateMutationState(t,e,n){this.qs(t,e,n),this.Qs(t)}addLocalQueryTarget(t,e=!0){let n="not-current";if(this.isActiveQueryTarget(t)){const s=this.storage.getItem(Fi(this.persistenceKey,t));if(s){const i=_r.Rs(t,s);i&&(n=i.state)}}return e&&this.Ks.fs(t),this.Ns(),n}removeLocalQueryTarget(t){this.Ks.gs(t),this.Ns()}isLocalQueryTarget(t){return this.Ks.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Fi(this.persistenceKey,t))}updateQueryState(t,e,n){this.$s(t,e,n)}handleUserChange(t,e,n){e.forEach(s=>{this.Qs(s)}),this.currentUser=t,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(t){this.Us(t)}notifyBundleLoaded(t){this.Ws(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return C("SharedClientState","READ",t,e),e}setItem(t,e){C("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){C("SharedClientState","REMOVE",t),this.storage.removeItem(t)}ws(t){const e=t;if(e.storageArea===this.storage){if(C("SharedClientState","EVENT",e.key,e.newValue),e.key===this.Ds)return void ft("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(e.key!==null){if(this.Cs.test(e.key)){if(e.newValue==null){const n=this.Gs(e.key);return this.zs(n,null)}{const n=this.js(e.key,e.newValue);if(n)return this.zs(n.clientId,n)}}else if(this.Fs.test(e.key)){if(e.newValue!==null){const n=this.Hs(e.key,e.newValue);if(n)return this.Js(n)}}else if(this.Ms.test(e.key)){if(e.newValue!==null){const n=this.Ys(e.key,e.newValue);if(n)return this.Zs(n)}}else if(e.key===this.xs){if(e.newValue!==null){const n=this.Ls(e.newValue);if(n)return this.Bs(n)}}else if(e.key===this.vs){const n=function(i){let a=Mt.oe;if(i!=null)try{const u=JSON.parse(i);L(typeof u=="number"),a=u}catch(u){ft("SharedClientState","Failed to read sequence number from WebStorage",u)}return a}(e.newValue);n!==Mt.oe&&this.sequenceNumberHandler(n)}else if(e.key===this.Os){const n=this.Xs(e.newValue);await Promise.all(n.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(e)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(t,e,n){const s=new ks(this.currentUser,t,e,n),i=tc(this.persistenceKey,this.currentUser,t);this.setItem(i,s.Vs())}Qs(t){const e=tc(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Us(t){const e={clientId:this.ps,onlineState:t};this.storage.setItem(this.xs,JSON.stringify(e))}$s(t,e,n){const s=Fi(this.persistenceKey,t),i=new _r(t,e,n);this.setItem(s,i.Vs())}Ws(t){const e=JSON.stringify(Array.from(t));this.setItem(this.Os,e)}Gs(t){const e=this.Cs.exec(t);return e?e[1]:null}js(t,e){const n=this.Gs(t);return Fs.Rs(n,e)}Hs(t,e){const n=this.Fs.exec(t),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return ks.Rs(new It(i),s,e)}Ys(t,e){const n=this.Ms.exec(t),s=Number(n[1]);return _r.Rs(s,e)}Ls(t){return bo.Rs(t)}Xs(t){return JSON.parse(t)}async Js(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.no(t.batchId,t.state,t.error);C("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}Zs(t){return this.syncEngine.ro(t.targetId,t.state,t.error)}zs(t,e){const n=e?this.Ss.insert(t,e):this.Ss.remove(t),s=this.ks(this.Ss),i=this.ks(n),a=[],u=[];return i.forEach(c=>{s.has(c)||a.push(c)}),s.forEach(c=>{i.has(c)||u.push(c)}),this.syncEngine.io(a,u).then(()=>{this.Ss=n})}Bs(t){this.Ss.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}ks(t){let e=fo();return t.forEach((n,s)=>{e=e.unionWith(s.activeTargetIds)}),e}}class nh{constructor(){this.so=new eo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new eo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class xm{_o(t){}shutdown(){}}/**
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
 */class ec{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fs=null;function Oi(){return fs===null?fs=function(){return 268435456+Math.round(2147483648*Math.random())}():fs++,"0x"+fs.toString(16)}/**
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
 */const Dm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Nm{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const Ct="WebChannelConnection";class km extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(e,n,s,i,a){const u=Oi(),c=this.xo(e,n.toUriEncodedString());C("RestConnection",`Sending RPC '${e}' ${u}:`,c,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,a),this.No(e,c,d,s).then(f=>(C("RestConnection",`Received RPC '${e}' ${u}: `,f),f),f=>{throw Ut("RestConnection",`RPC '${e}' ${u} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(e,n,s,i,a,u){return this.Mo(e,n,s,i,a)}Oo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,a)=>e[a]=i),s&&s.headers.forEach((i,a)=>e[a]=i)}xo(e,n){const s=Dm[e];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,s){const i=Oi();return new Promise((a,u)=>{const c=new vc;c.setWithCredentials(!0),c.listenOnce(Ac.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case gs.NO_ERROR:const f=c.getResponseJson();C(Ct,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(f)),a(f);break;case gs.TIMEOUT:C(Ct,`RPC '${t}' ${i} timed out`),u(new x(V.DEADLINE_EXCEEDED,"Request time out"));break;case gs.HTTP_ERROR:const g=c.getStatus();if(C(Ct,`RPC '${t}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const P=_==null?void 0:_.error;if(P&&P.status&&P.message){const D=function(b){const U=b.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(U)>=0?U:V.UNKNOWN}(P.status);u(new x(D,P.message))}else u(new x(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new x(V.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{C(Ct,`RPC '${t}' ${i} completed.`)}});const d=JSON.stringify(s);C(Ct,`RPC '${t}' ${i} sending request:`,s),c.send(e,"POST",d,n,15)})}Bo(t,e,n){const s=Oi(),i=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Vc(),u=Pc(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const f=i.join("");C(Ct,`Creating RPC '${t}' stream ${s}: ${f}`,c);const g=a.createWebChannel(f,c);let _=!1,P=!1;const D=new Nm({Io:b=>{P?C(Ct,`Not sending because RPC '${t}' stream ${s} is closed:`,b):(_||(C(Ct,`Opening RPC '${t}' stream ${s} transport.`),g.open(),_=!0),C(Ct,`RPC '${t}' stream ${s} sending:`,b),g.send(b))},To:()=>g.close()}),N=(b,U,G)=>{b.listen(U,B=>{try{G(B)}catch(Q){setTimeout(()=>{throw Q},0)}})};return N(g,cr.EventType.OPEN,()=>{P||(C(Ct,`RPC '${t}' stream ${s} transport opened.`),D.yo())}),N(g,cr.EventType.CLOSE,()=>{P||(P=!0,C(Ct,`RPC '${t}' stream ${s} transport closed`),D.So())}),N(g,cr.EventType.ERROR,b=>{P||(P=!0,Ut(Ct,`RPC '${t}' stream ${s} transport errored:`,b),D.So(new x(V.UNAVAILABLE,"The operation could not be completed")))}),N(g,cr.EventType.MESSAGE,b=>{var U;if(!P){const G=b.data[0];L(!!G);const B=G,Q=B.error||((U=B[0])===null||U===void 0?void 0:U.error);if(Q){C(Ct,`RPC '${t}' stream ${s} received error:`,Q);const X=Q.status;let K=function(I){const E=pt[I];if(E!==void 0)return Tl(E)}(X),T=Q.message;K===void 0&&(K=V.INTERNAL,T="Unknown error status: "+X+" with message "+Q.message),P=!0,D.So(new x(K,T)),g.close()}else C(Ct,`RPC '${t}' stream ${s} received:`,G),D.bo(G)}}),N(u,Rc.STAT_EVENT,b=>{b.stat===Bi.PROXY?C(Ct,`RPC '${t}' stream ${s} detected buffering proxy`):b.stat===Bi.NOPROXY&&C(Ct,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}}/**
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
 */function rh(){return typeof window<"u"?window:null}function ws(){return typeof document<"u"?document:null}/**
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
 */function Mr(r){return new Gf(r,!0)}/**
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
 */class Co{constructor(t,e,n=1e3,s=1.5,i=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-n);s>0&&C("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class sh{constructor(t,e,n,s,i,a,u,c){this.ui=t,this.Ho=n,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Co(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(ft(e.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===e&&this.P_(n,s)},n=>{t(()=>{const s=new x(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return C("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fm extends sh{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Kf(this.serializer,t),n=function(i){if(!("targetChange"in i))return q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?mt(a.readTime):q.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Ji(this.serializer),e.addTarget=function(i,a){let u;const c=a.target;if(u=Rs(c)?{documents:Cl(i,c)}:{query:Ks(i,c)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Al(i,a.resumeToken);const d=Wi(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(q.min())>0){u.readTime=wn(i,a.snapshotVersion.toTimestamp());const d=Wi(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const n=$f(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Ji(this.serializer),e.removeTarget=t,this.a_(e)}}class Mm extends sh{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return L(!!t.streamToken),this.lastStreamToken=t.streamToken,L(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Qf(t.writeResults,t.commitTime),n=mt(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=Ji(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Rr(this.serializer,n))};this.a_(e)}}/**
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
 */class Om extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new x(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(t,Hi(e,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(V.UNKNOWN,i.toString())})}Lo(t,e,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(t,Hi(e,n),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(V.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Lm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ft(e),this.D_=!1):C("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Bm{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{n.enqueueAndForget(async()=>{Pe(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=k(c);d.L_.add(4),await Fn(d),d.q_.set("Unknown"),d.L_.delete(4),await Or(d)}(this))})}),this.q_=new Lm(n,s)}}async function Or(r){if(Pe(r))for(const t of r.B_)await t(!0)}async function Fn(r){for(const t of r.B_)await t(!1)}function Hs(r,t){const e=k(r);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),No(e)?Do(e):On(e).r_()&&xo(e,t))}function Rn(r,t){const e=k(r),n=On(e);e.N_.delete(t),n.r_()&&ih(e,t),e.N_.size===0&&(n.r_()?n.o_():Pe(e)&&e.q_.set("Unknown"))}function xo(r,t){if(r.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}On(r).A_(t)}function ih(r,t){r.Q_.xe(t),On(r).R_(t)}function Do(r){r.Q_=new Lf({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.N_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),On(r).start(),r.q_.v_()}function No(r){return Pe(r)&&!On(r).n_()&&r.N_.size>0}function Pe(r){return k(r).L_.size===0}function oh(r){r.Q_=void 0}async function qm(r){r.q_.set("Online")}async function Um(r){r.N_.forEach((t,e)=>{xo(r,t)})}async function Gm(r,t){oh(r),No(r)?(r.q_.M_(t),Do(r)):r.q_.set("Unknown")}async function zm(r,t,e){if(r.q_.set("Online"),t instanceof vl&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.N_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.N_.delete(u),s.Q_.removeTarget(u))}(r,t)}catch(n){C("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ms(r,n)}else if(t instanceof Es?r.Q_.Ke(t):t instanceof wl?r.Q_.He(t):r.Q_.We(t),!e.isEqual(q.min()))try{const n=await Yl(r.localStore);e.compareTo(n)>=0&&await function(i,a){const u=i.Q_.rt(a);return u.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(d);f&&i.N_.set(d,f.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,d)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(dt.EMPTY_BYTE_STRING,f.snapshotVersion)),ih(i,c);const g=new Zt(f.target,c,d,f.sequenceNumber);xo(i,g)}),i.remoteSyncer.applyRemoteEvent(u)}(r,e)}catch(n){C("RemoteStore","Failed to raise snapshot:",n),await Ms(r,n)}}async function Ms(r,t,e){if(!Ae(t))throw t;r.L_.add(1),await Fn(r),r.q_.set("Offline"),e||(e=()=>Yl(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await Or(r)})}function ah(r,t){return t().catch(e=>Ms(r,e,t))}async function Mn(r){const t=k(r),e=Te(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;jm(t);)try{const s=await Sm(t.localStore,n);if(s===null){t.O_.length===0&&e.o_();break}n=s.batchId,Km(t,s)}catch(s){await Ms(t,s)}uh(t)&&ch(t)}function jm(r){return Pe(r)&&r.O_.length<10}function Km(r,t){r.O_.push(t);const e=Te(r);e.r_()&&e.V_&&e.m_(t.mutations)}function uh(r){return Pe(r)&&!Te(r).n_()&&r.O_.length>0}function ch(r){Te(r).start()}async function Qm(r){Te(r).p_()}async function $m(r){const t=Te(r);for(const e of r.O_)t.m_(e.mutations)}async function Wm(r,t,e){const n=r.O_.shift(),s=_o.from(n,t,e);await ah(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Mn(r)}async function Hm(r,t){t&&Te(r).V_&&await async function(n,s){if(function(a){return Il(a)&&a!==V.ABORTED}(s.code)){const i=n.O_.shift();Te(n).s_(),await ah(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Mn(n)}}(r,t),uh(r)&&ch(r)}async function nc(r,t){const e=k(r);e.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const n=Pe(e);e.L_.add(3),await Fn(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Or(e)}async function no(r,t){const e=k(r);t?(e.L_.delete(2),await Or(e)):t||(e.L_.add(2),await Fn(e),e.q_.set("Unknown"))}function On(r){return r.K_||(r.K_=function(e,n,s){const i=k(e);return i.w_(),new Fm(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:qm.bind(null,r),Ro:Um.bind(null,r),mo:Gm.bind(null,r),d_:zm.bind(null,r)}),r.B_.push(async t=>{t?(r.K_.s_(),No(r)?Do(r):r.q_.set("Unknown")):(await r.K_.stop(),oh(r))})),r.K_}function Te(r){return r.U_||(r.U_=function(e,n,s){const i=k(e);return i.w_(),new Mm(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Qm.bind(null,r),mo:Hm.bind(null,r),f_:$m.bind(null,r),g_:Wm.bind(null,r)}),r.B_.push(async t=>{t?(r.U_.s_(),await Mn(r)):(await r.U_.stop(),r.O_.length>0&&(C("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
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
 */class ko{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new ko(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ln(r,t){if(ft("AsyncQueue",`${t}: ${r}`),Ae(r))return new x(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class mn{constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=lr(),this.sortedSet=new rt(this.comparator)}static emptySet(t){return new mn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof mn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new mn;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class rc{constructor(){this.W_=new rt(M.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):O():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Pn{constructor(t,e,n,s,i,a,u,c,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Pn(t,e,mn.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class Jm{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Ym{constructor(){this.queries=sc(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const s=k(e),i=s.queries;s.queries=sc(),i.forEach((a,u)=>{for(const c of u.j_)c.onError(n)})})(this,new x(V.ABORTED,"Firestore shutting down"))}}function sc(){return new re(r=>sl(r),xr)}async function Fo(r,t){const e=k(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.H_()&&t.J_()&&(n=2):(i=new Jm,n=t.J_()?0:1);try{switch(n){case 0:i.z_=await e.onListen(s,!0);break;case 1:i.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Ln(a,`Initialization of query '${ln(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.j_.push(t),t.Z_(e.onlineState),i.z_&&t.X_(i.z_)&&Oo(e)}async function Mo(r,t){const e=k(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.j_.indexOf(t);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=t.J_()?0:1:!i.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Xm(r,t){const e=k(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.j_)u.X_(s)&&(n=!0);a.z_=s}}n&&Oo(e)}function Zm(r,t,e){const n=k(r),s=n.queries.get(t);if(s)for(const i of s.j_)i.onError(e);n.queries.delete(t)}function Oo(r){r.Y_.forEach(t=>{t.next()})}var ro,ic;(ic=ro||(ro={})).ea="default",ic.Cache="cache";class Lo{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Pn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Pn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==ro.Cache}}/**
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
 */class tg{constructor(t,e){this.aa=t,this.byteLength=e}ua(){return"metadata"in this.aa}}/**
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
 */class oc{constructor(t){this.serializer=t}Es(t){return Qt(this.serializer,t)}ds(t){return t.metadata.exists?bl(this.serializer,t.document,!1):it.newNoDocument(this.Es(t.metadata.name),this.As(t.metadata.readTime))}As(t){return mt(t)}}class eg{constructor(t,e,n){this.ca=t,this.localStore=e,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=lh(t)}la(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.aa.namedQuery)this.queries.push(t.aa.namedQuery);else if(t.aa.documentMetadata){this.documents.push({metadata:t.aa.documentMetadata}),t.aa.documentMetadata.exists||++e;const n=W.fromString(t.aa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else t.aa.document&&(this.documents[this.documents.length-1].document=t.aa.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}ha(t){const e=new Map,n=new oc(this.serializer);for(const s of t)if(s.metadata.queries){const i=n.Es(s.metadata.name);for(const a of s.metadata.queries){const u=(e.get(a)||j()).add(i);e.set(a,u)}}return e}async complete(){const t=await bm(this.localStore,new oc(this.serializer),this.documents,this.ca.id),e=this.ha(this.documents);for(const n of this.queries)await Cm(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:t}}}function lh(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
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
 */class hh{constructor(t){this.key=t}}class dh{constructor(t){this.key=t}}class fh{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=j(),this.mutatedKeys=j(),this.Aa=ol(t),this.Ra=new mn(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new rc,s=e?e.Ra:this.Ra;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((f,g)=>{const _=s.get(f),P=Dr(this.query,g)?g:null,D=!!_&&this.mutatedKeys.has(_.key),N=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let b=!1;_&&P?_.data.isEqual(P.data)?D!==N&&(n.track({type:3,doc:P}),b=!0):this.ga(_,P)||(n.track({type:2,doc:P}),b=!0,(c&&this.Aa(P,c)>0||d&&this.Aa(P,d)<0)&&(u=!0)):!_&&P?(n.track({type:0,doc:P}),b=!0):_&&!P&&(n.track({type:1,doc:_}),b=!0,(c||d)&&(u=!0)),b&&(P?(a=a.add(P),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{Ra:a,fa:n,ns:u,mutatedKeys:i}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((f,g)=>function(P,D){const N=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return N(P)-N(D)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(n),s=s!=null&&s;const u=e&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,d=c!==this.Ea;return this.Ea=c,a.length!==0||d?{snapshot:new Pn(this.query,t.Ra,i,a,t.mutatedKeys,c===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new rc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=j(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new dh(n))}),this.da.forEach(n=>{t.has(n)||e.push(new hh(n))}),e}ba(t){this.Ta=t.Ts,this.da=j();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Pn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class ng{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class rg{constructor(t){this.key=t,this.va=!1}}class sg{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new re(u=>sl(u),xr),this.Ma=new Map,this.xa=new Set,this.Oa=new rt(M.comparator),this.Na=new Map,this.La=new Ao,this.Ba={},this.ka=new Map,this.qa=We.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ig(r,t,e=!0){const n=Js(r);let s;const i=n.Fa.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await mh(n,t,e,!0),s}async function og(r,t){const e=Js(r);await mh(e,t,!0,!1)}async function mh(r,t,e,n){const s=await vn(r.localStore,Nt(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let u;return n&&(u=await Bo(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Hs(r.remoteStore,s),u}async function Bo(r,t,e,n,s){r.Ka=(g,_,P)=>async function(N,b,U,G){let B=b.view.ma(U);B.ns&&(B=await Ns(N.localStore,b.query,!1).then(({documents:T})=>b.view.ma(T,B)));const Q=G&&G.targetChanges.get(b.targetId),X=G&&G.targetMismatches.get(b.targetId)!=null,K=b.view.applyChanges(B,N.isPrimaryClient,Q,X);return so(N,b.targetId,K.wa),K.snapshot}(r,g,_,P);const i=await Ns(r.localStore,t,!0),a=new fh(t,i.Ts),u=a.ma(i.documents),c=Fr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,c);so(r,e,d.wa);const f=new ng(t,e,a);return r.Fa.set(t,f),r.Ma.has(e)?r.Ma.get(e).push(t):r.Ma.set(e,[t]),d.snapshot}async function ag(r,t,e){const n=k(r),s=n.Fa.get(t),i=n.Ma.get(s.targetId);if(i.length>1)return n.Ma.set(s.targetId,i.filter(a=>!xr(a,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await An(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Rn(n.remoteStore,s.targetId),Vn(n,s.targetId)}).catch(ve)):(Vn(n,s.targetId),await An(n.localStore,s.targetId,!0))}async function ug(r,t){const e=k(r),n=e.Fa.get(t),s=e.Ma.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Rn(e.remoteStore,n.targetId))}async function cg(r,t,e){const n=zo(r);try{const s=await function(a,u){const c=k(a),d=ct.now(),f=u.reduce((P,D)=>P.add(D.key),j());let g,_;return c.persistence.runTransaction("Locally write mutations","readwrite",P=>{let D=Lt(),N=j();return c.cs.getEntries(P,f).next(b=>{D=b,D.forEach((U,G)=>{G.isValidDocument()||(N=N.add(U))})}).next(()=>c.localDocuments.getOverlayedDocuments(P,D)).next(b=>{g=b;const U=[];for(const G of u){const B=Ff(G,g.get(G.key).overlayedDocument);B!=null&&U.push(new se(G.key,B,$c(B.value.mapValue),ut.exists(!0)))}return c.mutationQueue.addMutationBatch(P,d,U,u)}).next(b=>{_=b;const U=b.applyToLocalDocumentSet(g,N);return c.documentOverlayCache.saveOverlays(P,b.batchId,U)})}).then(()=>({batchId:_.batchId,changes:ul(g)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,u,c){let d=a.Ba[a.currentUser.toKey()];d||(d=new rt(z)),d=d.insert(u,c),a.Ba[a.currentUser.toKey()]=d}(n,s.batchId,e),await ie(n,s.changes),await Mn(n.remoteStore)}catch(s){const i=Ln(s,"Failed to persist write");e.reject(i)}}async function gh(r,t){const e=k(r);try{const n=await Vm(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Na.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?L(a.va):s.removedDocuments.size>0&&(L(a.va),a.va=!1))}),await ie(e,n,t)}catch(n){await ve(n)}}function ac(r,t,e){const n=k(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Fa.forEach((i,a)=>{const u=a.view.Z_(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const c=k(a);c.onlineState=u;let d=!1;c.queries.forEach((f,g)=>{for(const _ of g.j_)_.Z_(u)&&(d=!0)}),d&&Oo(c)}(n.eventManager,t),s.length&&n.Ca.d_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function lg(r,t,e){const n=k(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Na.get(t),i=s&&s.key;if(i){let a=new rt(M.comparator);a=a.insert(i,it.newNoDocument(i,q.min()));const u=j().add(i),c=new kr(q.min(),new Map,new rt(z),a,u);await gh(n,c),n.Oa=n.Oa.remove(i),n.Na.delete(t),Go(n)}else await An(n.localStore,t,!1).then(()=>Vn(n,t,e)).catch(ve)}async function hg(r,t){const e=k(r),n=t.batch.batchId;try{const s=await Pm(e.localStore,t);Uo(e,n,null),qo(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await ie(e,s)}catch(s){await ve(s)}}async function dg(r,t,e){const n=k(r);try{const s=await function(a,u){const c=k(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return c.mutationQueue.lookupMutationBatch(d,u).next(g=>(L(g!==null),f=g.keys(),c.mutationQueue.removeMutationBatch(d,g))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,f,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>c.localDocuments.getDocuments(d,f))})}(n.localStore,t);Uo(n,t,e),qo(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await ie(n,s)}catch(s){await ve(s)}}async function fg(r,t){const e=k(r);Pe(e.remoteStore)||C("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(a){const u=k(a);return u.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>u.mutationQueue.getHighestUnacknowledgedBatchId(c))}(e.localStore);if(n===-1)return void t.resolve();const s=e.ka.get(n)||[];s.push(t),e.ka.set(n,s)}catch(n){const s=Ln(n,"Initialization of waitForPendingWrites() operation failed");t.reject(s)}}function qo(r,t){(r.ka.get(t)||[]).forEach(e=>{e.resolve()}),r.ka.delete(t)}function Uo(r,t,e){const n=k(r);let s=n.Ba[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.Ba[n.currentUser.toKey()]=s}}function Vn(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Ma.get(t))r.Fa.delete(n),e&&r.Ca.$a(n,e);r.Ma.delete(t),r.isPrimaryClient&&r.La.gr(t).forEach(n=>{r.La.containsKey(n)||ph(r,n)})}function ph(r,t){r.xa.delete(t.path.canonicalString());const e=r.Oa.get(t);e!==null&&(Rn(r.remoteStore,e),r.Oa=r.Oa.remove(t),r.Na.delete(e),Go(r))}function so(r,t,e){for(const n of e)n instanceof hh?(r.La.addReference(n.key,t),mg(r,n)):n instanceof dh?(C("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,t),r.La.containsKey(n.key)||ph(r,n.key)):O()}function mg(r,t){const e=t.key,n=e.path.canonicalString();r.Oa.get(e)||r.xa.has(n)||(C("SyncEngine","New document in limbo: "+e),r.xa.add(n),Go(r))}function Go(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const t=r.xa.values().next().value;r.xa.delete(t);const e=new M(W.fromString(t)),n=r.qa.next();r.Na.set(n,new rg(e)),r.Oa=r.Oa.insert(e,n),Hs(r.remoteStore,new Zt(Nt(Dn(e.path)),n,"TargetPurposeLimboResolution",Mt.oe))}}async function ie(r,t,e){const n=k(r),s=[],i=[],a=[];n.Fa.isEmpty()||(n.Fa.forEach((u,c)=>{a.push(n.Ka(c,t,e).then(d=>{var f;if((d||e)&&n.isPrimaryClient){const g=d?!d.fromCache:(f=e==null?void 0:e.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(d){s.push(d);const g=So.Wi(c.targetId,d);i.push(g)}}))}),await Promise.all(a),n.Ca.d_(s),await async function(c,d){const f=k(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>v.forEach(d,_=>v.forEach(_.$i,P=>f.persistence.referenceDelegate.addReference(g,_.targetId,P)).next(()=>v.forEach(_.Ui,P=>f.persistence.referenceDelegate.removeReference(g,_.targetId,P)))))}catch(g){if(!Ae(g))throw g;C("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const _=g.targetId;if(!g.fromCache){const P=f.os.get(_),D=P.snapshotVersion,N=P.withLastLimboFreeSnapshotVersion(D);f.os=f.os.insert(_,N)}}}(n.localStore,i))}async function gg(r,t){const e=k(r);if(!e.currentUser.isEqual(t)){C("SyncEngine","User change. New user:",t.toKey());const n=await Jl(e.localStore,t);e.currentUser=t,function(i,a){i.ka.forEach(u=>{u.forEach(c=>{c.reject(new x(V.CANCELLED,a))})}),i.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await ie(e,n.hs)}}function pg(r,t){const e=k(r),n=e.Na.get(t);if(n&&n.va)return j().add(n.key);{let s=j();const i=e.Ma.get(t);if(!i)return s;for(const a of i){const u=e.Fa.get(a);s=s.unionWith(u.view.Va)}return s}}async function _g(r,t){const e=k(r),n=await Ns(e.localStore,t.query,!0),s=t.view.ba(n);return e.isPrimaryClient&&so(e,t.targetId,s.wa),s}async function yg(r,t){const e=k(r);return th(e.localStore,t).then(n=>ie(e,n))}async function Ig(r,t,e,n){const s=k(r),i=await function(u,c){const d=k(u),f=k(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",g=>f.Mn(g,c).next(_=>_?d.localDocuments.getDocuments(g,_):v.resolve(null)))}(s.localStore,t);i!==null?(e==="pending"?await Mn(s.remoteStore):e==="acknowledged"||e==="rejected"?(Uo(s,t,n||null),qo(s,t),function(u,c){k(k(u).mutationQueue).On(c)}(s.localStore,t)):O(),await ie(s,i)):C("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Tg(r,t){const e=k(r);if(Js(e),zo(e),t===!0&&e.Qa!==!0){const n=e.sharedClientState.getAllActiveQueryTargets(),s=await uc(e,n.toArray());e.Qa=!0,await no(e.remoteStore,!0);for(const i of s)Hs(e.remoteStore,i)}else if(t===!1&&e.Qa!==!1){const n=[];let s=Promise.resolve();e.Ma.forEach((i,a)=>{e.sharedClientState.isLocalQueryTarget(a)?n.push(a):s=s.then(()=>(Vn(e,a),An(e.localStore,a,!0))),Rn(e.remoteStore,a)}),await s,await uc(e,n),function(a){const u=k(a);u.Na.forEach((c,d)=>{Rn(u.remoteStore,d)}),u.La.pr(),u.Na=new Map,u.Oa=new rt(M.comparator)}(e),e.Qa=!1,await no(e.remoteStore,!1)}}async function uc(r,t,e){const n=k(r),s=[],i=[];for(const a of t){let u;const c=n.Ma.get(a);if(c&&c.length!==0){u=await vn(n.localStore,Nt(c[0]));for(const d of c){const f=n.Fa.get(d),g=await _g(n,f);g.snapshot&&i.push(g.snapshot)}}else{const d=await Zl(n.localStore,a);u=await vn(n.localStore,d),await Bo(n,_h(d),a,!1,u.resumeToken)}s.push(u)}return n.Ca.d_(i),s}function _h(r){return el(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function Eg(r){return function(e){return k(k(e).persistence).Qi()}(k(r).localStore)}async function wg(r,t,e,n){const s=k(r);if(s.Qa)return void C("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(t);if(i&&i.length>0)switch(e){case"current":case"not-current":{const a=await th(s.localStore,il(i[0])),u=kr.createSynthesizedRemoteEventForCurrentChange(t,e==="current",dt.EMPTY_BYTE_STRING);await ie(s,a,u);break}case"rejected":await An(s.localStore,t,!0),Vn(s,t,n);break;default:O()}}async function vg(r,t,e){const n=Js(r);if(n.Qa){for(const s of t){if(n.Ma.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){C("SyncEngine","Adding an already active target "+s);continue}const i=await Zl(n.localStore,s),a=await vn(n.localStore,i);await Bo(n,_h(i),a.targetId,!1,a.resumeToken),Hs(n.remoteStore,a)}for(const s of e)n.Ma.has(s)&&await An(n.localStore,s,!1).then(()=>{Rn(n.remoteStore,s),Vn(n,s)}).catch(ve)}}function Js(r){const t=k(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=gh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=pg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=lg.bind(null,t),t.Ca.d_=Xm.bind(null,t.eventManager),t.Ca.$a=Zm.bind(null,t.eventManager),t}function zo(r){const t=k(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=dg.bind(null,t),t}function Ag(r,t,e){const n=k(r);(async function(i,a,u){try{const c=await a.getMetadata();if(await function(P,D){const N=k(P),b=mt(D.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",U=>N.Gr.getBundleMetadata(U,D.id)).then(U=>!!U&&U.createTime.compareTo(b)>=0)}(i.localStore,c))return await a.close(),u._completeWith(function(P){return{taskState:"Success",documentsLoaded:P.totalDocuments,bytesLoaded:P.totalBytes,totalDocuments:P.totalDocuments,totalBytes:P.totalBytes}}(c)),Promise.resolve(new Set);u._updateProgress(lh(c));const d=new eg(c,i.localStore,a.serializer);let f=await a.Ua();for(;f;){const _=await d.la(f);_&&u._updateProgress(_),f=await a.Ua()}const g=await d.complete();return await ie(i,g.Ia,void 0),await function(P,D){const N=k(P);return N.persistence.runTransaction("Save bundle","readwrite",b=>N.Gr.saveBundleMetadata(b,D))}(i.localStore,c),u._completeWith(g.progress),Promise.resolve(g.Pa)}catch(c){return Ut("SyncEngine",`Loading bundle failed with ${c}`),u._failWith(c),Promise.resolve(new Set)}})(n,t,e).then(s=>{n.sharedClientState.notifyBundleLoaded(s)})}class Ee{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Mr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Hl(this.persistence,new Wl,t.initialUser,this.serializer)}Ga(t){return new Ro(Ws.Zr,this.serializer)}Wa(t){return new nh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ee.provider={build:()=>new Ee};class Rg extends Ee{constructor(t){super(),this.cacheSizeBytes=t}ja(t,e){L(this.persistence.referenceDelegate instanceof Ds);const n=this.persistence.referenceDelegate.garbageCollector;return new zl(n,t.asyncQueue,e)}Ga(t){const e=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new Ro(n=>Ds.Zr(n,e),this.serializer)}}class jo extends Ee{constructor(t,e,n){super(),this.Ja=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Ja.initialize(this,t),await zo(this.Ja.syncEngine),await Mn(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(t){return Hl(this.persistence,new Wl,t.initialUser,this.serializer)}ja(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new zl(n,t.asyncQueue,e)}Ha(t,e){const n=new Qd(e,this.persistence);return new Kd(t.asyncQueue,n)}Ga(t){const e=Vo(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new Po(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,rh(),ws(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(t){return new nh}}class yh extends jo{constructor(t,e){super(t,e,!1),this.Ja=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Ja.syncEngine;this.sharedClientState instanceof Mi&&(this.sharedClientState.syncEngine={no:Ig.bind(null,e),ro:wg.bind(null,e),io:vg.bind(null,e),Qi:Eg.bind(null,e),eo:yg.bind(null,e)},await this.sharedClientState.start()),await this.persistence.yi(async n=>{await Tg(this.Ja.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Wa(t){const e=rh();if(!Mi.D(e))throw new x(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Vo(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Mi(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class we{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ac(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=gg.bind(null,this.syncEngine),await no(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ym}()}createDatastore(t){const e=Mr(t.databaseInfo.databaseId),n=function(i){return new km(i)}(t.databaseInfo);return function(i,a,u,c){return new Om(i,a,u,c)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,i,a,u){return new Bm(n,s,i,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>ac(this.syncEngine,e,0),function(){return ec.D()?new ec:new xm}())}createSyncEngine(t,e){return function(s,i,a,u,c,d,f){const g=new sg(s,i,a,u,c,d);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const i=k(s);C("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Fn(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}we.provider={build:()=>new we};function cc(r,t=10240){let e=0;return{async read(){if(e<r.byteLength){const n={value:r.slice(e,e+t),done:!1};return e+=t,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Ys{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):ft("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Pg{constructor(t,e){this.Xa=t,this.serializer=e,this.metadata=new Tt,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(n=>{n&&n.ua()?this.metadata.resolve(n.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.aa)}`))},n=>this.metadata.reject(n))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const t=await this.nu();if(t===null)return null;const e=this.eu.decode(t),n=Number(e);isNaN(n)&&this.ru(`length string (${e}) is not valid number`);const s=await this.iu(n);return new tg(JSON.parse(s),t.length+n)}su(){return this.buffer.findIndex(t=>t===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const t=this.su();t<0&&this.ru("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async iu(t){for(;this.buffer.length<t;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const e=this.eu.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}ru(t){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${t}`)}async ou(){const t=await this.Xa.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}/**
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
 */class Vg{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new x(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(s,i){const a=k(s),u={documents:i.map(g=>Ar(a.serializer,g))},c=await a.Lo("BatchGetDocuments",a.serializer.databaseId,W.emptyPath(),u,i.length),d=new Map;c.forEach(g=>{const _=jf(a.serializer,g);d.set(_.key.toString(),_)});const f=[];return i.forEach(g=>{const _=d.get(g.toString());L(!!_),f.push(_)}),f}(this.datastore,t);return e.forEach(n=>this.recordVersion(n)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(t.toString())}delete(t){this.write(new kn(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,n)=>{const s=M.fromPath(n);this.mutations.push(new go(s,this.precondition(s)))}),await async function(n,s){const i=k(n),a={writes:s.map(u=>Rr(i.serializer,u))};await i.Mo("Commit",i.serializer.databaseId,W.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw O();e=q.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new x(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(q.min())?ut.exists(!1):ut.updateTime(e):ut.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(q.min()))throw new x(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ut.updateTime(e)}return ut.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class Sg{constructor(t,e,n,s,i){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=s,this.deferred=i,this._u=n.maxAttempts,this.t_=new Co(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const t=new Vg(this.datastore),e=this.cu(t);e&&e.then(n=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(n)}).catch(s=>{this.lu(s)}))}).catch(n=>{this.lu(n)})})}cu(t){try{const e=this.updateFunction(t);return!br(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}lu(t){this._u>0&&this.hu(t)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(t)}hu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Il(e)}return!1}}/**
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
 */class bg{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=Cc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{C("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(C("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ln(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Li(r,t){r.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Jl(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function lc(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Ko(r);C("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>nc(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>nc(t.remoteStore,s)),r._onlineComponents=t}async function Ko(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await Li(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Ut("Error using user provided cache. Falling back to memory cache: "+e),await Li(r,new Ee)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await Li(r,new Ee);return r._offlineComponents}async function Xs(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await lc(r,r._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await lc(r,new we))),r._onlineComponents}function Ih(r){return Ko(r).then(t=>t.persistence)}function Bn(r){return Ko(r).then(t=>t.localStore)}function Th(r){return Xs(r).then(t=>t.remoteStore)}function Qo(r){return Xs(r).then(t=>t.syncEngine)}function Eh(r){return Xs(r).then(t=>t.datastore)}async function Sn(r){const t=await Xs(r),e=t.eventManager;return e.onListen=ig.bind(null,t.syncEngine),e.onUnlisten=ag.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=og.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=ug.bind(null,t.syncEngine),e}function Cg(r){return r.asyncQueue.enqueue(async()=>{const t=await Ih(r),e=await Th(r);return t.setNetworkEnabled(!0),function(s){const i=k(s);return i.L_.delete(0),Or(i)}(e)})}function xg(r){return r.asyncQueue.enqueue(async()=>{const t=await Ih(r),e=await Th(r);return t.setNetworkEnabled(!1),async function(s){const i=k(s);i.L_.add(0),await Fn(i),i.q_.set("Offline")}(e)})}function Dg(r,t){const e=new Tt;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,a){try{const u=await function(d,f){const g=k(d);return g.persistence.runTransaction("read document","readonly",_=>g.localDocuments.getDocument(_,f))}(s,i);u.isFoundDocument()?a.resolve(u):u.isNoDocument()?a.resolve(null):a.reject(new x(V.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(u){const c=Ln(u,`Failed to get document '${i} from cache`);a.reject(c)}}(await Bn(r),t,e)),e.promise}function wh(r,t,e={}){const n=new Tt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,c,d){const f=new Ys({next:_=>{f.Za(),a.enqueueAndForget(()=>Mo(i,g));const P=_.docs.has(u);!P&&_.fromCache?d.reject(new x(V.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&_.fromCache&&c&&c.source==="server"?d.reject(new x(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),g=new Lo(Dn(u.path),f,{includeMetadataChanges:!0,_a:!0});return Fo(i,g)}(await Sn(r),r.asyncQueue,t,e,n)),n.promise}function Ng(r,t){const e=new Tt;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,a){try{const u=await Ns(s,i,!0),c=new fh(i,u.Ts),d=c.ma(u.documents),f=c.applyChanges(d,!1);a.resolve(f.snapshot)}catch(u){const c=Ln(u,`Failed to execute query '${i} against cache`);a.reject(c)}}(await Bn(r),t,e)),e.promise}function vh(r,t,e={}){const n=new Tt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,c,d){const f=new Ys({next:_=>{f.Za(),a.enqueueAndForget(()=>Mo(i,g)),_.fromCache&&c.source==="server"?d.reject(new x(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),g=new Lo(u,f,{includeMetadataChanges:!0,_a:!0});return Fo(i,g)}(await Sn(r),r.asyncQueue,t,e,n)),n.promise}function kg(r,t,e){const n=new Tt;return r.asyncQueue.enqueueAndForget(async()=>{try{const s=await Eh(r);n.resolve(async function(a,u,c){var d;const f=k(a),{request:g,ut:_,parent:P}=xl(f.serializer,nl(u),c);f.connection.Fo||delete g.parent;const D=(await f.Lo("RunAggregationQuery",f.serializer.databaseId,P,g,1)).filter(b=>!!b.result);L(D.length===1);const N=(d=D[0].result)===null||d===void 0?void 0:d.aggregateFields;return Object.keys(N).reduce((b,U)=>(b[_[U]]=N[U],b),{})}(s,t,e))}catch(s){n.reject(s)}}),n.promise}function Fg(r,t){const e=new Ys(t);return r.asyncQueue.enqueueAndForget(async()=>function(s,i){k(s).Y_.add(i),i.next()}(await Sn(r),e)),()=>{e.Za(),r.asyncQueue.enqueueAndForget(async()=>function(s,i){k(s).Y_.delete(i)}(await Sn(r),e))}}function Mg(r,t,e,n){const s=function(a,u){let c;return c=typeof a=="string"?El().encode(a):a,function(f,g){return new Pg(f,g)}(function(f,g){if(f instanceof Uint8Array)return cc(f,g);if(f instanceof ArrayBuffer)return cc(new Uint8Array(f),g);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),u)}(e,Mr(t));r.asyncQueue.enqueueAndForget(async()=>{Ag(await Qo(r),s,n)})}function Og(r,t){return r.asyncQueue.enqueue(async()=>function(n,s){const i=k(n);return i.persistence.runTransaction("Get named query","readonly",a=>i.Gr.getNamedQuery(a,s))}(await Bn(r),t))}function Lg(r,t){return r.asyncQueue.enqueue(async()=>async function(n,s){const i=k(n),a=i.indexManager,u=[];return i.persistence.runTransaction("Configure indexes","readwrite",c=>a.getFieldIndexes(c).next(d=>function(g,_,P,D,N){g=[...g],_=[..._],g.sort(P),_.sort(P);const b=g.length,U=_.length;let G=0,B=0;for(;G<U&&B<b;){const Q=P(g[B],_[G]);Q<0?N(g[B++]):Q>0?D(_[G++]):(G++,B++)}for(;G<U;)D(_[G++]);for(;B<b;)N(g[B++])}(d,s,Ud,f=>{u.push(a.addFieldIndex(c,f))},f=>{u.push(a.deleteFieldIndex(c,f))})).next(()=>v.waitFor(u)))}(await Bn(r),t))}function Bg(r,t){return r.asyncQueue.enqueue(async()=>function(n,s){k(n).ss.zi=s}(await Bn(r),t))}function qg(r){return r.asyncQueue.enqueue(async()=>function(e){const n=k(e),s=n.indexManager;return n.persistence.runTransaction("Delete All Indexes","readwrite",i=>s.deleteAllFieldIndexes(i))}(await Bn(r)))}/**
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
 */function Ah(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const hc=new Map;/**
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
 */function $o(r,t,e){if(!e)throw new x(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Ug(r,t,e,n){if(t===!0&&n===!0)throw new x(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function dc(r){if(!M.isDocumentKey(r))throw new x(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function fc(r){if(M.isDocumentKey(r))throw new x(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Zs(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O()}function $(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new x(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Zs(r);throw new x(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}function Rh(r,t){if(t<=0)throw new x(V.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
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
 */class mc{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new x(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ug("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ah((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Lr{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mc(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Nd;switch(n.type){case"firstParty":return new Od(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=hc.get(e);n&&(C("ComponentProvider","Removing Datastore"),hc.delete(e),n.terminate())}(this),Promise.resolve()}}function Gg(r,t,e,n={}){var s;const i=(r=$(r,Lr))._getSettings(),a=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Ut("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),n.mockUserToken){let u,c;if(typeof n.mockUserToken=="string")u=n.mockUserToken,c=It.MOCK_USER;else{u=Rd(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new x(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new It(d)}r._authCredentials=new kd(new Sc(u,c))}}/**
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
 */class Rt{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Rt(this.firestore,t,this._query)}}class gt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $t(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new gt(this.firestore,t,this._key)}}class $t extends Rt{constructor(t,e,n){super(t,e,Dn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new gt(this.firestore,null,new M(t))}withConverter(t){return new $t(this.firestore,t,this._path)}}function Tp(r,t,...e){if(r=Et(r),$o("collection","path",t),r instanceof Lr){const n=W.fromString(t,...e);return fc(n),new $t(r,null,n)}{if(!(r instanceof gt||r instanceof $t))throw new x(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return fc(n),new $t(r.firestore,null,n)}}function Ep(r,t){if(r=$(r,Lr),$o("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new x(V.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Rt(r,null,function(n){return new ne(W.emptyPath(),n)}(t))}function zg(r,t,...e){if(r=Et(r),arguments.length===1&&(t=Cc.newId()),$o("doc","path",t),r instanceof Lr){const n=W.fromString(t,...e);return dc(n),new gt(r,null,new M(n))}{if(!(r instanceof gt||r instanceof $t))throw new x(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return dc(n),new gt(r.firestore,r instanceof $t?r.converter:null,new M(n))}}function wp(r,t){return r=Et(r),t=Et(t),(r instanceof gt||r instanceof $t)&&(t instanceof gt||t instanceof $t)&&r.firestore===t.firestore&&r.path===t.path&&r.converter===t.converter}function Ph(r,t){return r=Et(r),t=Et(t),r instanceof Rt&&t instanceof Rt&&r.firestore===t.firestore&&xr(r._query,t._query)&&r.converter===t.converter}/**
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
 */class gc{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Co(this,"async_queue_retry"),this.Vu=()=>{const n=ws();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=ws();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=ws();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Tt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Ae(t))throw t;C("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(n);throw ft("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=ko.createAndSchedule(this,t,e,n,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&O()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function io(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class jg{constructor(){this._progressObserver={},this._taskCompletionResolver=new Tt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}/**
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
 */const vp=-1;class nt extends Lr{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new gc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new gc(t),this._firestoreClient=void 0,await t}}}function Ap(r,t,e){e||(e="(default)");const n=Tc(r,"firestore");if(n.isInitialized(e)){const s=n.getImmediate({identifier:e}),i=n.getOptions(e);if(Ls(i,t))return s;throw new x(V.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new x(V.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:t,instanceIdentifier:e})}function Rp(r,t){const e=typeof r=="object"?r:Pd(),n=typeof r=="string"?r:t||"(default)",s=Tc(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Vd("firestore");i&&Gg(s,...i)}return s}function lt(r){if(r._terminated)throw new x(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Vh(r),r._firestoreClient}function Vh(r){var t,e,n;const s=r._freezeSettings(),i=function(u,c,d,f){return new mf(u,c,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ah(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new bg(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(r._componentsProvider))}function Pp(r,t){Ut("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();return Sh(r,we.provider,{build:n=>new jo(n,e.cacheSizeBytes,t==null?void 0:t.forceOwnership)}),Promise.resolve()}async function Vp(r){Ut("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();Sh(r,we.provider,{build:e=>new yh(e,t.cacheSizeBytes)})}function Sh(r,t,e){if((r=$(r,nt))._firestoreClient||r._terminated)throw new x(V.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new x(V.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:t,_offline:e},Vh(r)}function Sp(r){if(r._initialized&&!r._terminated)throw new x(V.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Tt;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Kt.D())return Promise.resolve();const s=n+"main";await Kt.delete(s)}(Vo(r._databaseId,r._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function bp(r){return function(e){const n=new Tt;return e.asyncQueue.enqueueAndForget(async()=>fg(await Qo(e),n)),n.promise}(lt(r=$(r,nt)))}function Cp(r){return Cg(lt(r=$(r,nt)))}function xp(r){return xg(lt(r=$(r,nt)))}function Dp(r){return Sd(r.app,"firestore",r._databaseId.database),r._delete()}function Np(r,t){const e=lt(r=$(r,nt)),n=new jg;return Mg(e,r._databaseId,t,n),n}function kp(r,t){return Og(lt(r=$(r,nt)),t).then(e=>e?new Rt(r,null,e.query):null)}/**
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
 */class Pr{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class Kg{constructor(t,e,n){this._userDataWriter=e,this._data=n,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class He{constructor(t){this._byteString=t}static fromBase64String(t){try{return new He(dt.fromBase64String(t))}catch(e){throw new x(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new He(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Je{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function Fp(){return new Je("__name__")}/**
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
 */class Ye{constructor(t){this._methodName=t}}/**
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
 */class Wo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}}/**
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
 */class ti{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
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
 */const Qg=/^__.*__$/;class $g{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new se(t,this.data,this.fieldMask,e,this.fieldTransforms):new Nn(t,this.data,e,this.fieldTransforms)}}class bh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new se(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ch(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class ei{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new ei(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:n,xu:!1});return s.Ou(t),s}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Os(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Ch(this.Cu)&&Qg.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Wg{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Mr(t)}Qu(t,e,n,s=!1){return new ei({Cu:t,methodName:e,qu:n,path:at.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xe(r){const t=r._freezeSettings(),e=Mr(r._databaseId);return new Wg(r._databaseId,!!t.ignoreUndefinedProperties,e)}function ni(r,t,e,n,s,i={}){const a=r.Qu(i.merge||i.mergeFields?2:0,t,e,s);ea("Data must be an object, but it was:",a,n);const u=Nh(n,a);let c,d;if(i.merge)c=new Ot(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const _=Vr(t,g,e);if(!a.contains(_))throw new x(V.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Fh(f,_)||f.push(_)}c=new Ot(f),d=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,d=a.fieldTransforms;return new $g(new At(u),c,d)}class Br extends Ye{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Br}}function xh(r,t,e){return new ei({Cu:3,qu:t.settings.qu,methodName:r._methodName,xu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Ho extends Ye{_toFieldTransform(t){return new Nr(t.path,new Tn)}isEqual(t){return t instanceof Ho}}class Jo extends Ye{constructor(t,e){super(t),this.Ku=e}_toFieldTransform(t){const e=xh(this,t,!0),n=this.Ku.map(i=>Ze(i,e)),s=new je(n);return new Nr(t.path,s)}isEqual(t){return t instanceof Jo&&Ls(this.Ku,t.Ku)}}class Yo extends Ye{constructor(t,e){super(t),this.Ku=e}_toFieldTransform(t){const e=xh(this,t,!0),n=this.Ku.map(i=>Ze(i,e)),s=new Ke(n);return new Nr(t.path,s)}isEqual(t){return t instanceof Yo&&Ls(this.Ku,t.Ku)}}class Xo extends Ye{constructor(t,e){super(t),this.$u=e}_toFieldTransform(t){const e=new En(t.serializer,hl(t.serializer,this.$u));return new Nr(t.path,e)}isEqual(t){return t instanceof Xo&&this.$u===t.$u}}function Zo(r,t,e,n){const s=r.Qu(1,t,e);ea("Data must be an object, but it was:",s,n);const i=[],a=At.empty();Re(n,(c,d)=>{const f=ri(t,c,e);d=Et(d);const g=s.Nu(f);if(d instanceof Br)i.push(f);else{const _=Ze(d,g);_!=null&&(i.push(f),a.set(f,_))}});const u=new Ot(i);return new bh(a,u,s.fieldTransforms)}function ta(r,t,e,n,s,i){const a=r.Qu(1,t,e),u=[Vr(t,n,e)],c=[s];if(i.length%2!=0)throw new x(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)u.push(Vr(t,i[_])),c.push(i[_+1]);const d=[],f=At.empty();for(let _=u.length-1;_>=0;--_)if(!Fh(d,u[_])){const P=u[_];let D=c[_];D=Et(D);const N=a.Nu(P);if(D instanceof Br)d.push(P);else{const b=Ze(D,N);b!=null&&(d.push(P),f.set(P,b))}}const g=new Ot(d);return new bh(f,g,a.fieldTransforms)}function Dh(r,t,e,n=!1){return Ze(e,r.Qu(n?4:3,t))}function Ze(r,t){if(kh(r=Et(r)))return ea("Unsupported field value:",t,r),Nh(r,t);if(r instanceof Ye)return function(n,s){if(!Ch(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const u of n){let c=Ze(u,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(r,t)}return function(n,s){if((n=Et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hl(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ct.fromDate(n);return{timestampValue:wn(s.serializer,i)}}if(n instanceof ct){const i=new ct(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:wn(s.serializer,i)}}if(n instanceof Wo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof He)return{bytesValue:Al(s.serializer,n._byteString)};if(n instanceof gt){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:To(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof ti)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw u.Bu("VectorValues must only contain numeric values.");return mo(u.serializer,c)})}}}}}}(n,s);throw s.Bu(`Unsupported field value: ${Zs(n)}`)}(r,t)}function Nh(r,t){const e={};return zc(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Re(r,(n,s)=>{const i=Ze(s,t.Mu(n));i!=null&&(e[n]=i)}),{mapValue:{fields:e}}}function kh(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ct||r instanceof Wo||r instanceof He||r instanceof gt||r instanceof Ye||r instanceof ti)}function ea(r,t,e){if(!kh(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=Zs(e);throw n==="an object"?t.Bu(r+" a custom object"):t.Bu(r+" "+n)}}function Vr(r,t,e){if((t=Et(t))instanceof Je)return t._internalPath;if(typeof t=="string")return ri(r,t);throw Os("Field path arguments must be of type string or ",r,!1,void 0,e)}const Hg=new RegExp("[~\\*/\\[\\]]");function ri(r,t,e){if(t.search(Hg)>=0)throw Os(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Je(...t.split("."))._internalPath}catch{throw Os(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Os(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${n}`),a&&(c+=` in document ${s}`),c+=")"),new x(V.INVALID_ARGUMENT,u+r+c)}function Fh(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class Sr{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Jg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(si("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Jg extends Sr{data(){return super.data()}}function si(r,t){return typeof t=="string"?ri(r,t):t instanceof Je?t._internalPath:t._delegate._internalPath}/**
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
 */function Mh(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new x(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class na{}class qr extends na{}function Mp(r,t,...e){let n=[];t instanceof na&&n.push(t),n=n.concat(e),function(i){const a=i.filter(c=>c instanceof qn).length,u=i.filter(c=>c instanceof Ur).length;if(a>1||a>0&&u>0)throw new x(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Ur extends qr{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Ur(t,e,n)}_apply(t){const e=this._parse(t);return Lh(t._query,e),new Rt(t.firestore,t.converter,$i(t._query,e))}_parse(t){const e=Xe(t.firestore);return function(i,a,u,c,d,f,g){let _;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new x(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){_c(g,f);const P=[];for(const D of g)P.push(pc(c,i,D));_={arrayValue:{values:P}}}else _=pc(c,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||_c(g,f),_=Dh(u,a,g,f==="in"||f==="not-in");return H.create(d,f,_)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Op(r,t,e){const n=t,s=si("where",r);return Ur._create(s,n,e)}class qn extends na{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new qn(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Z.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let a=s;const u=i.getFlattenedFilters();for(const c of u)Lh(a,c),a=$i(a,c)}(t._query,e),new Rt(t.firestore,t.converter,$i(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Lp(...r){return r.forEach(t=>Bh("or",t)),qn._create("or",r)}function Bp(...r){return r.forEach(t=>Bh("and",t)),qn._create("and",r)}class ra extends qr{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ra(t,e)}_apply(t){const e=function(s,i,a){if(s.startAt!==null)throw new x(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vr(i,a)}(t._query,this._field,this._direction);return new Rt(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new ne(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function qp(r,t="asc"){const e=t,n=si("orderBy",r);return ra._create(n,e)}class ii extends qr{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new ii(t,e,n)}_apply(t){return new Rt(t.firestore,t.converter,Vs(t._query,this._limit,this._limitType))}}function Up(r){return Rh("limit",r),ii._create("limit",r,"F")}function Gp(r){return Rh("limitToLast",r),ii._create("limitToLast",r,"L")}class oi extends qr{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new oi(t,e,n)}_apply(t){const e=Oh(t,this.type,this._docOrFields,this._inclusive);return new Rt(t.firestore,t.converter,function(s,i){return new ne(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(t._query,e))}}function zp(...r){return oi._create("startAt",r,!0)}function jp(...r){return oi._create("startAfter",r,!1)}class ai extends qr{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new ai(t,e,n)}_apply(t){const e=Oh(t,this.type,this._docOrFields,this._inclusive);return new Rt(t.firestore,t.converter,function(s,i){return new ne(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(t._query,e))}}function Kp(...r){return ai._create("endBefore",r,!1)}function Qp(...r){return ai._create("endAt",r,!0)}function Oh(r,t,e,n){if(e[0]=Et(e[0]),e[0]instanceof Sr)return function(i,a,u,c,d){if(!c)throw new x(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const f=[];for(const g of fn(i))if(g.field.isKeyField())f.push(Ge(a,c.key));else{const _=c.data.field(g.field);if(qs(_))throw new x(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const P=g.field.canonicalString();throw new x(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${P}' (used as the orderBy) does not exist.`)}f.push(_)}return new Ie(f,d)}(r._query,r.firestore._databaseId,t,e[0]._document,n);{const s=Xe(r.firestore);return function(a,u,c,d,f,g){const _=a.explicitOrderBy;if(f.length>_.length)throw new x(V.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const P=[];for(let D=0;D<f.length;D++){const N=f[D];if(_[D].field.isKeyField()){if(typeof N!="string")throw new x(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof N}`);if(!ho(a)&&N.indexOf("/")!==-1)throw new x(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${N}' contains a slash.`);const b=a.path.child(W.fromString(N));if(!M.isDocumentKey(b))throw new x(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const U=new M(b);P.push(Ge(u,U))}else{const b=Dh(c,d,N);P.push(b)}}return new Ie(P,g)}(r._query,r.firestore._databaseId,s,t,e,n)}}function pc(r,t,e){if(typeof(e=Et(e))=="string"){if(e==="")throw new x(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ho(t)&&e.indexOf("/")!==-1)throw new x(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(W.fromString(e));if(!M.isDocumentKey(n))throw new x(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Ge(r,new M(n))}if(e instanceof gt)return Ge(r,e._key);throw new x(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zs(e)}.`)}function _c(r,t){if(!Array.isArray(r)||r.length===0)throw new x(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Lh(r,t){const e=function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new x(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new x(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Bh(r,t){if(!(t instanceof Ur||t instanceof qn))throw new x(V.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class qh{convertValue(t,e="none"){switch(_e(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Re(t,(s,i)=>{n[s]=this.convertValue(i,e)}),n}convertVectorValue(t){var e,n,s;const i=(s=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(a=>ot(a.doubleValue));return new ti(i)}convertGeoPoint(t){return new Wo(ot(t.latitude),ot(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Us(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Tr(t));default:return null}}convertTimestamp(t){const e=te(t);return new ct(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=W.fromString(t);L(Fl(n));const s=new Ue(n.get(1),n.get(3)),i=new M(n.popFirst(5));return s.isEqual(e)||ft(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function ui(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class Yg extends qh{constructor(t){super(),this.firestore=t}convertBytes(t){return new He(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new gt(this.firestore,null,e)}}/**
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
 */function $p(r){return new Pr("sum",Vr("sum",r))}function Wp(r){return new Pr("avg",Vr("average",r))}function Xg(){return new Pr("count")}function Hp(r,t){var e,n;return r instanceof Pr&&t instanceof Pr&&r.aggregateType===t.aggregateType&&((e=r._internalFieldPath)===null||e===void 0?void 0:e.canonicalString())===((n=t._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())}function Jp(r,t){return Ph(r.query,t.query)&&Ls(r.data(),t.data())}/**
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
 */class Le{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class bn extends Sr{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new vs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(si("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class vs extends bn{data(t={}){return super.data(t)}}class Cn{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Le(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new vs(this._firestore,this._userDataWriter,n.key,n,new Le(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const c=new vs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Le(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const c=new vs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Le(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:Zg(u.type),doc:c,oldIndex:d,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Zg(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}function Yp(r,t){return r instanceof bn&&t instanceof bn?r._firestore===t._firestore&&r._key.isEqual(t._key)&&(r._document===null?t._document===null:r._document.isEqual(t._document))&&r._converter===t._converter:r instanceof Cn&&t instanceof Cn&&r._firestore===t._firestore&&Ph(r.query,t.query)&&r.metadata.isEqual(t.metadata)&&r._snapshot.isEqual(t._snapshot)}/**
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
 */function Xp(r){r=$(r,gt);const t=$(r.firestore,nt);return wh(lt(t),r._key).then(e=>sa(t,r,e))}class Ve extends qh{constructor(t){super(),this.firestore=t}convertBytes(t){return new He(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new gt(this.firestore,null,e)}}function Zp(r){r=$(r,gt);const t=$(r.firestore,nt),e=lt(t),n=new Ve(t);return Dg(e,r._key).then(s=>new bn(t,n,r._key,s,new Le(s!==null&&s.hasLocalMutations,!0),r.converter))}function t_(r){r=$(r,gt);const t=$(r.firestore,nt);return wh(lt(t),r._key,{source:"server"}).then(e=>sa(t,r,e))}function e_(r){r=$(r,Rt);const t=$(r.firestore,nt),e=lt(t),n=new Ve(t);return Mh(r._query),vh(e,r._query).then(s=>new Cn(t,n,r,s))}function n_(r){r=$(r,Rt);const t=$(r.firestore,nt),e=lt(t),n=new Ve(t);return Ng(e,r._query).then(s=>new Cn(t,n,r,s))}function r_(r){r=$(r,Rt);const t=$(r.firestore,nt),e=lt(t),n=new Ve(t);return vh(e,r._query,{source:"server"}).then(s=>new Cn(t,n,r,s))}function s_(r,t,e){r=$(r,gt);const n=$(r.firestore,nt),s=ui(r.converter,t,e);return Gr(n,[ni(Xe(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,ut.none())])}function i_(r,t,e,...n){r=$(r,gt);const s=$(r.firestore,nt),i=Xe(s);let a;return a=typeof(t=Et(t))=="string"||t instanceof Je?ta(i,"updateDoc",r._key,t,e,n):Zo(i,"updateDoc",r._key,t),Gr(s,[a.toMutation(r._key,ut.exists(!0))])}function o_(r){return Gr($(r.firestore,nt),[new kn(r._key,ut.none())])}function a_(r,t){const e=$(r.firestore,nt),n=zg(r),s=ui(r.converter,t);return Gr(e,[ni(Xe(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,ut.exists(!1))]).then(()=>n)}function u_(r,...t){var e,n,s;r=Et(r);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||io(t[a])||(i=t[a],a++);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(io(t[a])){const g=t[a];t[a]=(e=g.next)===null||e===void 0?void 0:e.bind(g),t[a+1]=(n=g.error)===null||n===void 0?void 0:n.bind(g),t[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let c,d,f;if(r instanceof gt)d=$(r.firestore,nt),f=Dn(r._key.path),c={next:g=>{t[a]&&t[a](sa(d,r,g))},error:t[a+1],complete:t[a+2]};else{const g=$(r,Rt);d=$(g.firestore,nt),f=g._query;const _=new Ve(d);c={next:P=>{t[a]&&t[a](new Cn(d,_,g,P))},error:t[a+1],complete:t[a+2]},Mh(r._query)}return function(_,P,D,N){const b=new Ys(N),U=new Lo(P,b,D);return _.asyncQueue.enqueueAndForget(async()=>Fo(await Sn(_),U)),()=>{b.Za(),_.asyncQueue.enqueueAndForget(async()=>Mo(await Sn(_),U))}}(lt(d),f,u,c)}function c_(r,t){return Fg(lt(r=$(r,nt)),io(t)?t:{next:t})}function Gr(r,t){return function(n,s){const i=new Tt;return n.asyncQueue.enqueueAndForget(async()=>cg(await Qo(n),s,i)),i.promise}(lt(r),t)}function sa(r,t,e){const n=e.docs.get(t._key),s=new Ve(r);return new bn(r,s,t._key,n,new Le(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */function l_(r){return tp(r,{count:Xg()})}function tp(r,t){const e=$(r.firestore,nt),n=lt(e),s=Gc(t,(i,a)=>new yl(a,i.aggregateType,i._internalFieldPath));return kg(n,r._query,s).then(i=>function(u,c,d){const f=new Ve(u);return new Kg(c,f,d)}(e,r,i))}class ep{constructor(t){this.kind="memory",this._onlineComponentProvider=we.provider,t!=null&&t.garbageCollector?this._offlineComponentProvider=t.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=Ee.provider}toJSON(){return{kind:this.kind}}}class np{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=ap(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class rp{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Ee.provider}toJSON(){return{kind:this.kind}}}class sp{constructor(t){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new Rg(t)}}toJSON(){return{kind:this.kind}}}function h_(){return new rp}function d_(r){return new sp(r==null?void 0:r.cacheSizeBytes)}function f_(r){return new ep(r)}function m_(r){return new np(r)}class ip{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=we.provider,this._offlineComponentProvider={build:e=>new jo(e,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}}class op{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=we.provider,this._offlineComponentProvider={build:e=>new yh(e,t==null?void 0:t.cacheSizeBytes)}}}function ap(r){return new ip(r==null?void 0:r.forceOwnership)}function g_(){return new op}/**
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
 */const up={maxAttempts:5};/**
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
 */class cp{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Xe(t)}set(t,e,n){this._verifyNotCommitted();const s=me(t,this._firestore),i=ui(s.converter,e,n),a=ni(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(a.toMutation(s._key,ut.none())),this}update(t,e,n,...s){this._verifyNotCommitted();const i=me(t,this._firestore);let a;return a=typeof(e=Et(e))=="string"||e instanceof Je?ta(this._dataReader,"WriteBatch.update",i._key,e,n,s):Zo(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(a.toMutation(i._key,ut.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=me(t,this._firestore);return this._mutations=this._mutations.concat(new kn(e._key,ut.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function me(r,t){if((r=Et(r)).firestore!==t)throw new x(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */class lp extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Xe(e)}get(e){const n=me(e,this._firestore),s=new Yg(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return O();const a=i[0];if(a.isFoundDocument())return new Sr(this._firestore,s,a.key,a,n.converter);if(a.isNoDocument())return new Sr(this._firestore,s,n._key,null,n.converter);throw O()})}set(e,n,s){const i=me(e,this._firestore),a=ui(i.converter,n,s),u=ni(this._dataReader,"Transaction.set",i._key,a,i.converter!==null,s);return this._transaction.set(i._key,u),this}update(e,n,s,...i){const a=me(e,this._firestore);let u;return u=typeof(n=Et(n))=="string"||n instanceof Je?ta(this._dataReader,"Transaction.update",a._key,n,s,i):Zo(this._dataReader,"Transaction.update",a._key,n),this._transaction.update(a._key,u),this}delete(e){const n=me(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=me(t,this._firestore),n=new Ve(this._firestore);return super.get(t).then(s=>new bn(this._firestore,n,e._key,s._document,new Le(!1,!1),e.converter))}}function __(r,t,e){r=$(r,nt);const n=Object.assign(Object.assign({},up),e);return function(i){if(i.maxAttempts<1)throw new x(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(i,a,u){const c=new Tt;return i.asyncQueue.enqueueAndForget(async()=>{const d=await Eh(i);new Sg(i.asyncQueue,d,u,a,c).au()}),c.promise}(lt(r),s=>t(new lp(r,s)),n)}/**
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
 */function y_(){return new Br("deleteField")}function I_(){return new Ho("serverTimestamp")}function T_(...r){return new Jo("arrayUnion",r)}function E_(...r){return new Yo("arrayRemove",r)}function w_(r){return new Xo("increment",r)}function v_(r){return new ti(r)}/**
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
 */function A_(r){return lt(r=$(r,nt)),new cp(r,t=>Gr(r,t))}/**
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
 */function R_(r,t){const e=lt(r=$(r,nt));if(!e._uninitializedComponentsProvider||e._uninitializedComponentsProvider._offline.kind==="memory")return Ut("Cannot enable indexes when persistence is disabled"),Promise.resolve();const n=function(i){const a=typeof i=="string"?function(d){try{return JSON.parse(d)}catch(f){throw new x(V.INVALID_ARGUMENT,"Failed to parse JSON: "+(f==null?void 0:f.message))}}(i):i,u=[];if(Array.isArray(a.indexes))for(const c of a.indexes){const d=yc(c,"collectionGroup"),f=[];if(Array.isArray(c.fields))for(const g of c.fields){const _=ri("setIndexConfiguration",yc(g,"fieldPath"));g.arrayConfig==="CONTAINS"?f.push(new qe(_,2)):g.order==="ASCENDING"?f.push(new qe(_,0)):g.order==="DESCENDING"&&f.push(new qe(_,1))}u.push(new pn(pn.UNKNOWN_ID,d,f,_n.empty()))}return u}(t);return Lg(e,n)}function yc(r,t){if(typeof r[t]!="string")throw new x(V.INVALID_ARGUMENT,"Missing string value for: "+t);return r[t]}/**
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
 */class hp{constructor(t){this._firestore=t,this.type="PersistentCacheIndexManager"}}function P_(r){var t;r=$(r,nt);const e=Ic.get(r);if(e)return e;if(((t=lt(r)._uninitializedComponentsProvider)===null||t===void 0?void 0:t._offline.kind)!=="persistent")return null;const n=new hp(r);return Ic.set(r,n),n}function V_(r){Uh(r,!0)}function S_(r){Uh(r,!1)}function b_(r){qg(lt(r._firestore)).then(t=>C("deleting all persistent cache indexes succeeded")).catch(t=>Ut("deleting all persistent cache indexes failed",t))}function Uh(r,t){Bg(lt(r._firestore),t).then(e=>C(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch(e=>Ut(`setting persistent cache index auto creation isEnabled=${t} failed`,e))}const Ic=new WeakMap;/**
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
 */function C_(r){var t;const e=(t=lt($(r.firestore,nt))._onlineComponents)===null||t===void 0?void 0:t.datastore.serializer;return e===void 0?null:Ks(e,Nt(r._query))._t}function x_(r,t){var e;const n=Gc(t,(i,a)=>new yl(a,i.aggregateType,i._internalFieldPath)),s=(e=lt($(r.firestore,nt))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return s===void 0?null:xl(s,nl(r._query),n,!0).request}/**
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
 */class D_{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(t){return ia.instance.onExistenceFilterMismatch(t)}}class ia{constructor(){this.Uu=new Map}static get instance(){return ms||(ms=new ia,function(e){if(Ss)throw new Error("a TestingHooksSpi instance is already set");Ss=e}(ms)),ms}et(t){this.Uu.forEach(e=>e(t))}onExistenceFilterMismatch(t){const e=Symbol(),n=this.Uu;return n.set(e,t),()=>n.delete(e)}}let ms=null;(function(t,e=!0){(function(s){xn=s})(Cd),xd(new Dd("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new nt(new Fd(n.getProvider("auth-internal")),new Ld(n.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ue(d.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:e},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),ou(uu,"4.7.3",t),ou(uu,"4.7.3","esm2017")})();export{qh as AbstractUserDataWriter,Pr as AggregateField,Kg as AggregateQuerySnapshot,He as Bytes,vp as CACHE_SIZE_UNLIMITED,$t as CollectionReference,gt as DocumentReference,bn as DocumentSnapshot,Je as FieldPath,Ye as FieldValue,nt as Firestore,x as FirestoreError,Wo as GeoPoint,jg as LoadBundleTask,hp as PersistentCacheIndexManager,Rt as Query,qn as QueryCompositeFilterConstraint,qr as QueryConstraint,vs as QueryDocumentSnapshot,ai as QueryEndAtConstraint,Ur as QueryFieldFilterConstraint,ii as QueryLimitConstraint,ra as QueryOrderByConstraint,Cn as QuerySnapshot,oi as QueryStartAtConstraint,Le as SnapshotMetadata,ct as Timestamp,lp as Transaction,ti as VectorValue,cp as WriteBatch,Cc as _AutoId,dt as _ByteString,Ue as _DatabaseId,M as _DocumentKey,gp as _EmptyAppCheckTokenProvider,Nd as _EmptyAuthCredentialsProvider,at as _FieldPath,D_ as _TestingHooks,$ as _cast,mp as _debugAssert,x_ as _internalAggregationQueryToProtoRunAggregationQueryRequest,C_ as _internalQueryToProtoQueryTarget,_p as _isBase64Available,Ut as _logWarn,Ug as _validateIsNotUsedTogether,a_ as addDoc,Hp as aggregateFieldEqual,Jp as aggregateQuerySnapshotEqual,Bp as and,E_ as arrayRemove,T_ as arrayUnion,Wp as average,Sp as clearIndexedDbPersistence,Tp as collection,Ep as collectionGroup,Gg as connectFirestoreEmulator,Xg as count,b_ as deleteAllPersistentCacheIndexes,o_ as deleteDoc,y_ as deleteField,xp as disableNetwork,S_ as disablePersistentCacheIndexAutoCreation,zg as doc,Fp as documentId,Pp as enableIndexedDbPersistence,Vp as enableMultiTabIndexedDbPersistence,Cp as enableNetwork,V_ as enablePersistentCacheIndexAutoCreation,Qp as endAt,Kp as endBefore,lt as ensureFirestoreConfigured,Gr as executeWrite,tp as getAggregateFromServer,l_ as getCountFromServer,Xp as getDoc,Zp as getDocFromCache,t_ as getDocFromServer,e_ as getDocs,n_ as getDocsFromCache,r_ as getDocsFromServer,Rp as getFirestore,P_ as getPersistentCacheIndexManager,w_ as increment,Ap as initializeFirestore,Up as limit,Gp as limitToLast,Np as loadBundle,h_ as memoryEagerGarbageCollector,f_ as memoryLocalCache,d_ as memoryLruGarbageCollector,kp as namedQuery,u_ as onSnapshot,c_ as onSnapshotsInSync,Lp as or,qp as orderBy,m_ as persistentLocalCache,g_ as persistentMultipleTabManager,ap as persistentSingleTabManager,Mp as query,Ph as queryEqual,wp as refEqual,__ as runTransaction,I_ as serverTimestamp,s_ as setDoc,R_ as setIndexConfiguration,fp as setLogLevel,Yp as snapshotEqual,jp as startAfter,zp as startAt,$p as sum,Dp as terminate,i_ as updateDoc,v_ as vector,bp as waitForPendingWrites,Op as where,A_ as writeBatch};
