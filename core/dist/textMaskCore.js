!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.textMaskCore=r():e.textMaskCore=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,f=e.conformedValue,s=e.rawValue,d=e.placeholderChar,c=e.placeholder,v=e.indexesOfPipedChars,p=void 0===v?n:v,h=e.caretTrapIndexes,g=void 0===h?n:h;if(0===l)return 0;var m=s.length,y=t.length,b=c.length,C=f.length,P=m-y,x=P>0,O=0===y,k=P>1&&!x&&!O;if(k)return l;var j=x&&(t===f||f===c),M=0,w=void 0,T=void 0;if(j)M=l-P;else{var V=f.toLowerCase(),_=s.toLowerCase(),S=_.substr(0,l).split(o),N=S.filter(function(e){return V.indexOf(e)!==-1});T=N[N.length-1];var A=a.substr(0,N.length).split(o).filter(function(e){return e!==d}).length,E=c.substr(0,N.length).split(o).filter(function(e){return e!==d}).length,R=E!==A,I=void 0!==a[N.length-1]&&void 0!==c[N.length-2]&&a[N.length-1]!==d&&a[N.length-1]!==c[N.length-1]&&a[N.length-1]===c[N.length-2];!x&&(R||I)&&A>0&&c.indexOf(T)>-1&&void 0!==s[l]&&(w=!0,T=s[l]);for(var J=p.map(function(e){return V[e]}),q=J.filter(function(e){return e===T}).length,F=N.filter(function(e){return e===T}).length,L=c.substr(0,c.indexOf(d)).split(o).filter(function(e,r){return e===T&&s[r]!==e}).length,W=L+F+q+(w?1:0),z=0,B=0;B<C;B++){var D=V[B];if(M=B+1,D===T&&z++,z>=W)break}}if(x){for(var G=M,H=M;H<=b;H++)if(c[H]===d&&(G=H),c[H]===d||g.indexOf(H)!==-1||H===b)return G}else if(w){for(var K=M-1;K>=0;K--)if(f[K]===T||g.indexOf(K)!==-1||0===K)return K}else for(var Q=M;Q>=0;Q--)if(c[Q-1]===d||g.indexOf(Q)!==-1||0===Q)return Q}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.guide,u=void 0===n||n,l=t.previousConformedValue,f=void 0===l?a:l,s=t.placeholderChar,d=void 0===s?i.placeholderChar:s,c=t.placeholder,v=void 0===c?(0,o.convertMaskToPlaceholder)(r,d):c,p=t.currentCaretPosition,h=t.keepCharPositions,g=u===!1&&void 0!==f,m=e.length,y=f.length,b=v.length,C=r.length,P=m-y,x=P>0,O=p+(x?-P:0),k=O+Math.abs(P);if(h===!0&&!x){for(var j=a,M=O;M<k;M++)v[M]===d&&(j+=d);e=e.slice(0,O)+j+e.slice(O,m)}for(var w=e.split(a).map(function(e,r){return{char:e,isNew:r>=O&&r<k}}),T=m-1;T>=0;T--){var V=w[T].char;if(V!==d){var _=T>=O&&y===C;V===v[_?T-P:T]&&w.splice(T,1)}}var S=a,N=!1;e:for(var A=0;A<b;A++){var E=v[A];if(E===d){if(w.length>0)for(;w.length>0;){var R=w.shift(),I=R.char,J=R.isNew;if(I===d&&g!==!0){S+=d;continue e}if(r[A].test(I)){if(h===!0&&J!==!1&&f!==a&&u!==!1&&x){for(var q=w.length,F=null,L=0;L<q;L++){var W=w[L];if(W.char!==d&&W.isNew===!1)break;if(W.char===d){F=L;break}}null!==F?(S+=I,w.splice(F,1)):A--}else S+=I;continue e}N=!0}g===!1&&(S+=v.substr(A,b));break}S+=E}if(g&&x===!1){for(var z=null,B=0;B<S.length;B++)v[B]===d&&(z=B);S=null!==z?S.substr(0,z+1):a}return{conformedValue:S,meta:{someCharsRejected:N}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(4),i=t(1),a=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var r=[],t=void 0;t=e.indexOf(f),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isString=o,r.isNumber=i,r.processCaretTraps=a;var u=t(1),l=[],f="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,f=n.mask,d=n.guide,m=n.pipe,b=n.placeholderChar,C=void 0===b?p.placeholderChar:b,P=n.keepCharPositions,x=void 0!==P&&P,O=n.showMask,k=void 0!==O&&O;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof f?"undefined":l(f))===y&&void 0!==f.pipe&&void 0!==f.mask&&(m=f.pipe,f=f.mask);var j=void 0,M=void 0;if(f instanceof Array&&(j=(0,v.convertMaskToPlaceholder)(f,C)),f!==!1){var w=a(t),T=o.selectionStart,V=r.previousConformedValue,_=r.previousPlaceholder,S=void 0;if(("undefined"==typeof f?"undefined":l(f))===h){var N=f(w,{currentCaretPosition:T,previousConformedValue:V,placeholderChar:C});if(N instanceof Array?M=N:(M=N.mask,w=N.rawValue),M===!1)return;var A=(0,v.processCaretTraps)(M),E=A.maskWithoutCaretTraps,R=A.indexes;M=E,S=R,j=(0,v.convertMaskToPlaceholder)(M,C)}else M=f;var I={previousConformedValue:V,guide:d,placeholderChar:C,pipe:m,placeholder:j,currentCaretPosition:T,keepCharPositions:x},J=M.filter(function(e,r,t){return"object"!==("undefined"==typeof e?"undefined":l(e))&&t.indexOf(e)===r}),q=(J.length>0?"\\"+J.join("\\"):"",(0,c.default)(w,M,I)),F=q.conformedValue,L=("undefined"==typeof m?"undefined":l(m))===h,W={};L&&(W=m(F,u({rawValue:w},I)),W===!1?W={value:V,rejected:!0}:(0,v.isString)(W)&&(W={value:W}));var z=L?W.value:F,B=(0,s.default)({previousConformedValue:V,previousPlaceholder:_,conformedValue:z,placeholder:j,rawValue:w,currentCaretPosition:T,placeholderChar:C,indexesOfPipedChars:W.indexesOfPipedChars,caretTrapIndexes:S}),D=z===j&&0===B,G=k?j:g,H=D?G:z;r.previousConformedValue=H,r.previousPlaceholder=j,o.value!==H&&(o.value=H,i(o,B))}}}}}function i(e,r){document.activeElement===e&&(b?C(function(){return e.setSelectionRange(r,r,m)},0):e.setSelectionRange(r,r,m))}function a(e){if((0,v.isString)(e))return e;if((0,v.isNumber)(e))return String(e);if(void 0===e||null===e)return g;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var f=t(2),s=n(f),d=t(3),c=n(d),v=t(4),p=t(1),h="function",g="",m="none",y="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),C="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});