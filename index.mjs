// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-code-point-at@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-utf16-surrogate-pair-at@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-tools-grapheme-cluster-break@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";var o=i.breakType,m=i.breakProperty,d=i.emojiProperty;function h(i,h){var p,l,g,j,a,f,u;if(!t(i))throw new TypeError(n("1P53F,Ex",i));if(j=i.length,arguments.length>1){if(!s(h))throw new TypeError(n("1P57f,LW",h));a=h}else a=j-1;if(0===j||a<=0)return-1;for(a>=j&&(a=j-1),p=[],l=[],f=e(i,0),p.push(m(f)),l.push(d(f)),g=-1,u=1;u<=a;u++)r(i,u-1)?(g=u-2,p.length=0,l.length=0):(f=e(i,u),p.push(m(f)),l.push(d(f)),o(p,l)>0&&(g=u-1,p.length=0,l.length=0));return g}export{h as default};
//# sourceMappingURL=index.mjs.map
