(function () {
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,'function' === typeof ClickAndPointLib.define && ClickAndPointLib.define.amd&&ClickAndPointLib.define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

(function(){function n(n,t){return n.set(t[0],t[1]),n}function t(n,t){return n.add(t),n}function r(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function e(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&t(n[r],r,n)!==!1;);return n}function i(n,t){for(var r=null==n?0:n.length;r--&&t(n[r],r,n)!==!1;);return n}function o(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return!1;return!0}function f(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function a(n,t){var r=null==n?0:n.length;return!!r&&b(n,t,0)>-1}function c(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return!0;return!1}function l(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function s(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function h(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function p(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function v(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}function _(n){return n.split("")}function g(n){return n.match(Dt)||[]}function y(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,!1}),e}function d(n,t,r,e){for(var u=n.length,i=r+(e?1:-1);e?i--:++i<u;)if(t(n[i],i,n))return i;return-1}function b(n,t,r){return t===t?K(n,t,r):d(n,m,r)}function w(n,t,r,e){for(var u=r-1,i=n.length;++u<i;)if(e(n[u],t))return u;return-1}function m(n){return n!==n}function x(n,t){var r=null==n?0:n.length;return r?I(n,t)/r:Ln}function j(n){return function(t){return null==t?X:t[n]}}function A(n){return function(t){return null==n?X:n[t]}}function k(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function O(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}function I(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==X&&(r=r===X?i:r+i)}return r}function R(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function z(n,t){return l(t,function(t){return[t,n[t]]})}function E(n){return function(t){return n(t)}}function S(n,t){return l(t,function(t){return n[t]})}function W(n,t){return n.has(t)}function L(n,t){for(var r=-1,e=n.length;++r<e&&b(t,n[r],0)>-1;);return r}function C(n,t){for(var r=n.length;r--&&b(t,n[r],0)>-1;);return r}function U(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&++e;return e}function B(n){return"\\"+Yr[n]}function T(n,t){return null==n?X:n[t]}function $(n){return Nr.test(n)}function D(n){return Pr.test(n)}function M(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}function F(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function N(n,t){return function(r){return n(t(r))}}function P(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&o!==fn||(n[r]=fn,i[u++]=r)}return i}function q(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function Z(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function K(n,t,r){for(var e=r-1,u=n.length;++e<u;)if(n[e]===t)return e;return-1}function V(n,t,r){for(var e=r+1;e--;)if(n[e]===t)return e;return e}function G(n){return $(n)?J(n):ve(n)}function H(n){return $(n)?Y(n):_(n)}function J(n){for(var t=Mr.lastIndex=0;Mr.test(n);)++t;return t}function Y(n){return n.match(Mr)||[]}function Q(n){return n.match(Fr)||[]}var X,nn="4.17.4",tn=200,rn="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",en="Expected a function",un="__lodash_hash_undefined__",on=500,fn="__lodash_placeholder__",an=1,cn=2,ln=4,sn=1,hn=2,pn=1,vn=2,_n=4,gn=8,yn=16,dn=32,bn=64,wn=128,mn=256,xn=512,jn=30,An="...",kn=800,On=16,In=1,Rn=2,zn=3,En=1/0,Sn=9007199254740991,Wn=1.7976931348623157e308,Ln=NaN,Cn=4294967295,Un=Cn-1,Bn=Cn>>>1,Tn=[["ary",wn],["bind",pn],["bindKey",vn],["curry",gn],["curryRight",yn],["flip",xn],["partial",dn],["partialRight",bn],["rearg",mn]],$n="[object Arguments]",Dn="[object Array]",Mn="[object AsyncFunction]",Fn="[object Boolean]",Nn="[object Date]",Pn="[object DOMException]",qn="[object Error]",Zn="[object Function]",Kn="[object GeneratorFunction]",Vn="[object Map]",Gn="[object Number]",Hn="[object Null]",Jn="[object Object]",Yn="[object Promise]",Qn="[object Proxy]",Xn="[object RegExp]",nt="[object Set]",tt="[object String]",rt="[object Symbol]",et="[object Undefined]",ut="[object WeakMap]",it="[object WeakSet]",ot="[object ArrayBuffer]",ft="[object DataView]",at="[object Float32Array]",ct="[object Float64Array]",lt="[object Int8Array]",st="[object Int16Array]",ht="[object Int32Array]",pt="[object Uint8Array]",vt="[object Uint8ClampedArray]",_t="[object Uint16Array]",gt="[object Uint32Array]",yt=/\b__p \+= '';/g,dt=/\b(__p \+=) '' \+/g,bt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,wt=/&(?:amp|lt|gt|quot|#39);/g,mt=/[&<>"']/g,xt=RegExp(wt.source),jt=RegExp(mt.source),At=/<%-([\s\S]+?)%>/g,kt=/<%([\s\S]+?)%>/g,Ot=/<%=([\s\S]+?)%>/g,It=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Rt=/^\w*$/,zt=/^\./,Et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,St=/[\\^$.*+?()[\]{}|]/g,Wt=RegExp(St.source),Lt=/^\s+|\s+$/g,Ct=/^\s+/,Ut=/\s+$/,Bt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Tt=/\{\n\/\* \[wrapped with (.+)\] \*/,$t=/,? & /,Dt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Mt=/\\(\\)?/g,Ft=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Nt=/\w*$/,Pt=/^[-+]0x[0-9a-f]+$/i,qt=/^0b[01]+$/i,Zt=/^\[object .+?Constructor\]$/,Kt=/^0o[0-7]+$/i,Vt=/^(?:0|[1-9]\d*)$/,Gt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ht=/($^)/,Jt=/['\n\r\u2028\u2029\\]/g,Yt="\\ud800-\\udfff",Qt="\\u0300-\\u036f",Xt="\\ufe20-\\ufe2f",nr="\\u20d0-\\u20ff",tr=Qt+Xt+nr,rr="\\u2700-\\u27bf",er="a-z\\xdf-\\xf6\\xf8-\\xff",ur="\\xac\\xb1\\xd7\\xf7",ir="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",or="\\u2000-\\u206f",fr=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ar="A-Z\\xc0-\\xd6\\xd8-\\xde",cr="\\ufe0e\\ufe0f",lr=ur+ir+or+fr,sr="['’]",hr="["+Yt+"]",pr="["+lr+"]",vr="["+tr+"]",_r="\\d+",gr="["+rr+"]",yr="["+er+"]",dr="[^"+Yt+lr+_r+rr+er+ar+"]",br="\\ud83c[\\udffb-\\udfff]",wr="(?:"+vr+"|"+br+")",mr="[^"+Yt+"]",xr="(?:\\ud83c[\\udde6-\\uddff]){2}",jr="[\\ud800-\\udbff][\\udc00-\\udfff]",Ar="["+ar+"]",kr="\\u200d",Or="(?:"+yr+"|"+dr+")",Ir="(?:"+Ar+"|"+dr+")",Rr="(?:"+sr+"(?:d|ll|m|re|s|t|ve))?",zr="(?:"+sr+"(?:D|LL|M|RE|S|T|VE))?",Er=wr+"?",Sr="["+cr+"]?",Wr="(?:"+kr+"(?:"+[mr,xr,jr].join("|")+")"+Sr+Er+")*",Lr="\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",Cr="\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)",Ur=Sr+Er+Wr,Br="(?:"+[gr,xr,jr].join("|")+")"+Ur,Tr="(?:"+[mr+vr+"?",vr,xr,jr,hr].join("|")+")",$r=RegExp(sr,"g"),Dr=RegExp(vr,"g"),Mr=RegExp(br+"(?="+br+")|"+Tr+Ur,"g"),Fr=RegExp([Ar+"?"+yr+"+"+Rr+"(?="+[pr,Ar,"$"].join("|")+")",Ir+"+"+zr+"(?="+[pr,Ar+Or,"$"].join("|")+")",Ar+"?"+Or+"+"+Rr,Ar+"+"+zr,Cr,Lr,_r,Br].join("|"),"g"),Nr=RegExp("["+kr+Yt+tr+cr+"]"),Pr=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,qr=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Zr=-1,Kr={};Kr[at]=Kr[ct]=Kr[lt]=Kr[st]=Kr[ht]=Kr[pt]=Kr[vt]=Kr[_t]=Kr[gt]=!0,Kr[$n]=Kr[Dn]=Kr[ot]=Kr[Fn]=Kr[ft]=Kr[Nn]=Kr[qn]=Kr[Zn]=Kr[Vn]=Kr[Gn]=Kr[Jn]=Kr[Xn]=Kr[nt]=Kr[tt]=Kr[ut]=!1;var Vr={};Vr[$n]=Vr[Dn]=Vr[ot]=Vr[ft]=Vr[Fn]=Vr[Nn]=Vr[at]=Vr[ct]=Vr[lt]=Vr[st]=Vr[ht]=Vr[Vn]=Vr[Gn]=Vr[Jn]=Vr[Xn]=Vr[nt]=Vr[tt]=Vr[rt]=Vr[pt]=Vr[vt]=Vr[_t]=Vr[gt]=!0,Vr[qn]=Vr[Zn]=Vr[ut]=!1;var Gr={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},Hr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jr={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Yr={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Qr=parseFloat,Xr=parseInt,ne="object"==typeof global&&global&&global.Object===Object&&global,te="object"==typeof self&&self&&self.Object===Object&&self,re=ne||te||Function("return this")(),ee="object"==typeof exports&&exports&&!exports.nodeType&&exports,ue=ee&&"object"==typeof module&&module&&!module.nodeType&&module,ie=ue&&ue.exports===ee,oe=ie&&ne.process,fe=function(){try{return oe&&oe.binding&&oe.binding("util")}catch(n){}}(),ae=fe&&fe.isArrayBuffer,ce=fe&&fe.isDate,le=fe&&fe.isMap,se=fe&&fe.isRegExp,he=fe&&fe.isSet,pe=fe&&fe.isTypedArray,ve=j("length"),_e=A(Gr),ge=A(Hr),ye=A(Jr),de=function _(A){function K(n){if(la(n)&&!mh(n)&&!(n instanceof Dt)){if(n instanceof Y)return n;if(ml.call(n,"__wrapped__"))return io(n)}return new Y(n)}function J(){}function Y(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=X}function Dt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Cn,this.__views__=[]}function Yt(){var n=new Dt(this.__wrapped__);return n.__actions__=Mu(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Mu(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Mu(this.__views__),n}function Qt(){if(this.__filtered__){var n=new Dt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Xt(){var n=this.__wrapped__.value(),t=this.__dir__,r=mh(n),e=t<0,u=r?n.length:0,i=zi(0,u,this.__views__),o=i.start,f=i.end,a=f-o,c=e?f:o-1,l=this.__iteratees__,s=l.length,h=0,p=Yl(a,this.__takeCount__);if(!r||!e&&u==a&&p==a)return mu(n,this.__actions__);var v=[];n:for(;a--&&h<p;){c+=t;for(var _=-1,g=n[c];++_<s;){var y=l[_],d=y.iteratee,b=y.type,w=d(g);if(b==Rn)g=w;else if(!w){if(b==In)continue n;break n}}v[h++]=g}return v}function nr(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function tr(){this.__data__=fs?fs(null):{},this.size=0}function rr(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function er(n){var t=this.__data__;if(fs){var r=t[n];return r===un?X:r}return ml.call(t,n)?t[n]:X}function ur(n){var t=this.__data__;return fs?t[n]!==X:ml.call(t,n)}function ir(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=fs&&t===X?un:t,this}function or(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function fr(){this.__data__=[],this.size=0}function ar(n){var t=this.__data__,r=Lr(t,n);if(r<0)return!1;var e=t.length-1;return r==e?t.pop():Ul.call(t,r,1),--this.size,!0}function cr(n){var t=this.__data__,r=Lr(t,n);return r<0?X:t[r][1]}function lr(n){return Lr(this.__data__,n)>-1}function sr(n,t){var r=this.__data__,e=Lr(r,n);return e<0?(++this.size,r.push([n,t])):r[e][1]=t,this}function hr(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function pr(){this.size=0,this.__data__={hash:new nr,map:new(es||or),string:new nr}}function vr(n){var t=ki(this,n).delete(n);return this.size-=t?1:0,t}function _r(n){return ki(this,n).get(n)}function gr(n){return ki(this,n).has(n)}function yr(n,t){var r=ki(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this}function dr(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new hr;++t<r;)this.add(n[t])}function br(n){return this.__data__.set(n,un),this}function wr(n){return this.__data__.has(n)}function mr(n){var t=this.__data__=new or(n);this.size=t.size}function xr(){this.__data__=new or,this.size=0}function jr(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r}function Ar(n){return this.__data__.get(n)}function kr(n){return this.__data__.has(n)}function Or(n,t){var r=this.__data__;if(r instanceof or){var e=r.__data__;if(!es||e.length<tn-1)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new hr(e)}return r.set(n,t),this.size=r.size,this}function Ir(n,t){var r=mh(n),e=!r&&wh(n),u=!r&&!e&&jh(n),i=!r&&!e&&!u&&Rh(n),o=r||e||u||i,f=o?R(n.length,vl):[],a=f.length;for(var c in n)!t&&!ml.call(n,c)||o&&("length"==c||u&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Ti(c,a))||f.push(c);return f}function Rr(n){var t=n.length;return t?n[ru(0,t-1)]:X}function zr(n,t){return to(Mu(n),Fr(t,0,n.length))}function Er(n){return to(Mu(n))}function Sr(n,t,r){(r===X||Jf(n[t],r))&&(r!==X||t in n)||Tr(n,t,r)}function Wr(n,t,r){var e=n[t];ml.call(n,t)&&Jf(e,r)&&(r!==X||t in n)||Tr(n,t,r)}function Lr(n,t){for(var r=n.length;r--;)if(Jf(n[r][0],t))return r;return-1}function Cr(n,t,r,e){return bs(n,function(n,u,i){t(e,n,r(n),i)}),e}function Ur(n,t){return n&&Fu(t,Za(t),n)}function Br(n,t){return n&&Fu(t,Ka(t),n)}function Tr(n,t,r){"__proto__"==t&&Dl?Dl(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}function Mr(n,t){for(var r=-1,e=t.length,u=fl(e),i=null==n;++r<e;)u[r]=i?X:Na(n,t[r]);return u}function Fr(n,t,r){return n===n&&(r!==X&&(n=n<=r?n:r),t!==X&&(n=n>=t?n:t)),n}function Nr(n,t,r,e,i,o){var f,a=t&an,c=t&cn,l=t&ln;if(r&&(f=i?r(n,e,i,o):r(n)),f!==X)return f;if(!ca(n))return n;var s=mh(n);if(s){if(f=Wi(n),!a)return Mu(n,f)}else{var h=Ss(n),p=h==Zn||h==Kn;if(jh(n))return Ru(n,a);if(h==Jn||h==$n||p&&!i){if(f=c||p?{}:Li(n),!a)return c?Pu(n,Br(f,n)):Nu(n,Ur(f,n))}else{if(!Vr[h])return i?n:{};f=Ci(n,h,Nr,a)}}o||(o=new mr);var v=o.get(n);if(v)return v;o.set(n,f);var _=l?c?mi:wi:c?Ka:Za,g=s?X:_(n);return u(g||n,function(e,u){g&&(u=e,e=n[u]),Wr(f,u,Nr(e,t,r,u,n,o))}),f}function Pr(n){var t=Za(n);return function(r){return Gr(r,n,t)}}function Gr(n,t,r){var e=r.length;if(null==n)return!e;for(n=hl(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===X&&!(u in n)||!i(o))return!1}return!0}function Hr(n,t,r){if("function"!=typeof n)throw new _l(en);return Cs(function(){n.apply(X,r)},t)}function Jr(n,t,r,e){var u=-1,i=a,o=!0,f=n.length,s=[],h=t.length;if(!f)return s;r&&(t=l(t,E(r))),e?(i=c,o=!1):t.length>=tn&&(i=W,o=!1,t=new dr(t));n:for(;++u<f;){var p=n[u],v=null==r?p:r(p);if(p=e||0!==p?p:0,o&&v===v){for(var _=h;_--;)if(t[_]===v)continue n;s.push(p)}else i(t,v,e)||s.push(p)}return s}function Yr(n,t){var r=!0;return bs(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ne(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===X?o===o&&!ma(o):r(o,f)))var f=o,a=i}return a}function te(n,t,r,e){var u=n.length;for(r=Ia(r),r<0&&(r=-r>u?0:u+r),e=e===X||e>u?u:Ia(e),e<0&&(e+=u),e=r>e?0:Ra(e);r<e;)n[r++]=t;return n}function ee(n,t){var r=[];return bs(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function ue(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Bi),u||(u=[]);++i<o;){var f=n[i];t>0&&r(f)?t>1?ue(f,t-1,r,e,u):s(u,f):e||(u[u.length]=f)}return u}function oe(n,t){return n&&ms(n,t,Za)}function fe(n,t){return n&&xs(n,t,Za)}function ve(n,t){return f(t,function(t){return oa(n[t])})}function de(n,t){t=Ou(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[ro(t[r++])];return r&&r==e?n:X}function we(n,t,r){var e=t(n);return mh(n)?e:s(e,r(n))}function me(n){return null==n?n===X?et:Hn:$l&&$l in hl(n)?Ri(n):Hi(n)}function xe(n,t){return n>t}function je(n,t){return null!=n&&ml.call(n,t)}function Ae(n,t){return null!=n&&t in hl(n)}function ke(n,t,r){return n>=Yl(t,r)&&n<Jl(t,r)}function Oe(n,t,r){for(var e=r?c:a,u=n[0].length,i=n.length,o=i,f=fl(i),s=1/0,h=[];o--;){var p=n[o];o&&t&&(p=l(p,E(t))),s=Yl(p.length,s),f[o]=!r&&(t||u>=120&&p.length>=120)?new dr(o&&p):X}p=n[0];var v=-1,_=f[0];n:for(;++v<u&&h.length<s;){var g=p[v],y=t?t(g):g;if(g=r||0!==g?g:0,!(_?W(_,y):e(h,y,r))){for(o=i;--o;){var d=f[o];if(!(d?W(d,y):e(n[o],y,r)))continue n}_&&_.push(y),h.push(g)}}return h}function Ie(n,t,r,e){return oe(n,function(n,u,i){t(e,r(n),u,i)}),e}function Re(n,t,e){t=Ou(t,n),n=Yi(n,t);var u=null==n?n:n[ro(ko(t))];return null==u?X:r(u,n,e)}function ze(n){return la(n)&&me(n)==$n}function Ee(n){return la(n)&&me(n)==ot}function Se(n){return la(n)&&me(n)==Nn}function We(n,t,r,e,u){return n===t||(null==n||null==t||!la(n)&&!la(t)?n!==n&&t!==t:Le(n,t,r,e,We,u))}function Le(n,t,r,e,u,i){var o=mh(n),f=mh(t),a=o?Dn:Ss(n),c=f?Dn:Ss(t);a=a==$n?Jn:a,c=c==$n?Jn:c;var l=a==Jn,s=c==Jn,h=a==c;if(h&&jh(n)){if(!jh(t))return!1;o=!0,l=!1}if(h&&!l)return i||(i=new mr),o||Rh(n)?gi(n,t,r,e,u,i):yi(n,t,a,r,e,u,i);if(!(r&sn)){var p=l&&ml.call(n,"__wrapped__"),v=s&&ml.call(t,"__wrapped__");if(p||v){var _=p?n.value():n,g=v?t.value():t;return i||(i=new mr),u(_,g,r,e,i)}}return!!h&&(i||(i=new mr),di(n,t,r,e,u,i))}function Ce(n){return la(n)&&Ss(n)==Vn}function Ue(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=hl(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++u<i;){f=r[u];var a=f[0],c=n[a],l=f[1];if(o&&f[2]){if(c===X&&!(a in n))return!1}else{var s=new mr;if(e)var h=e(c,l,a,n,t,s);if(!(h===X?We(l,c,sn|hn,e,s):h))return!1}}return!0}function Be(n){if(!ca(n)||Ni(n))return!1;var t=oa(n)?Il:Zt;return t.test(eo(n))}function Te(n){return la(n)&&me(n)==Xn}function $e(n){return la(n)&&Ss(n)==nt}function De(n){return la(n)&&aa(n.length)&&!!Kr[me(n)]}function Me(n){return"function"==typeof n?n:null==n?Uc:"object"==typeof n?mh(n)?Ke(n[0],n[1]):Ze(n):Pc(n)}function Fe(n){if(!Pi(n))return Hl(n);var t=[];for(var r in hl(n))ml.call(n,r)&&"constructor"!=r&&t.push(r);return t}function Ne(n){if(!ca(n))return Gi(n);var t=Pi(n),r=[];for(var e in n)("constructor"!=e||!t&&ml.call(n,e))&&r.push(e);return r}function Pe(n,t){return n<t}function qe(n,t){var r=-1,e=Yf(n)?fl(n.length):[];return bs(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Ze(n){var t=Oi(n);return 1==t.length&&t[0][2]?Zi(t[0][0],t[0][1]):function(r){return r===n||Ue(r,n,t)}}function Ke(n,t){return Di(n)&&qi(t)?Zi(ro(n),t):function(r){var e=Na(r,n);return e===X&&e===t?qa(r,n):We(t,e,sn|hn)}}function Ve(n,t,r,e,u){n!==t&&ms(t,function(i,o){if(ca(i))u||(u=new mr),Ge(n,t,o,r,Ve,e,u);else{var f=e?e(n[o],i,o+"",n,t,u):X;f===X&&(f=i),Sr(n,o,f)}},Ka)}function Ge(n,t,r,e,u,i,o){var f=n[r],a=t[r],c=o.get(a);if(c)return void Sr(n,r,c);var l=i?i(f,a,r+"",n,t,o):X,s=l===X;if(s){var h=mh(a),p=!h&&jh(a),v=!h&&!p&&Rh(a);l=a,h||p||v?mh(f)?l=f:Qf(f)?l=Mu(f):p?(s=!1,l=Ru(a,!0)):v?(s=!1,l=Uu(a,!0)):l=[]:da(a)||wh(a)?(l=f,wh(f)?l=Ea(f):(!ca(f)||e&&oa(f))&&(l=Li(a))):s=!1}s&&(o.set(a,l),u(l,a,e,i,o),o.delete(a)),Sr(n,r,l)}function He(n,t){var r=n.length;if(r)return t+=t<0?r:0,Ti(t,r)?n[t]:X}function Je(n,t,r){var e=-1;t=l(t.length?t:[Uc],E(Ai()));var u=qe(n,function(n,r,u){var i=l(t,function(t){return t(n)});return{criteria:i,index:++e,value:n}});return O(u,function(n,t){return Tu(n,t,r)})}function Ye(n,t){return Qe(n,t,function(t,r){return qa(n,r)})}function Qe(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=de(n,o);r(f,o)&&au(i,Ou(o,n),f)}return i}function Xe(n){return function(t){return de(t,n)}}function nu(n,t,r,e){var u=e?w:b,i=-1,o=t.length,f=n;for(n===t&&(t=Mu(t)),r&&(f=l(n,E(r)));++i<o;)for(var a=0,c=t[i],s=r?r(c):c;(a=u(f,s,a,e))>-1;)f!==n&&Ul.call(f,a,1),Ul.call(n,a,1);return n}function tu(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;Ti(u)?Ul.call(n,u,1):du(n,u)}}return n}function ru(n,t){return n+ql(ns()*(t-n+1))}function eu(n,t,r,e){for(var u=-1,i=Jl(Pl((t-n)/(r||1)),0),o=fl(i);i--;)o[e?i:++u]=n,n+=r;return o}function uu(n,t){var r="";if(!n||t<1||t>Sn)return r;do t%2&&(r+=n),t=ql(t/2),t&&(n+=n);while(t);return r}function iu(n,t){return Us(Ji(n,t,Uc),n+"")}function ou(n){return Rr(uc(n))}function fu(n,t){var r=uc(n);return to(r,Fr(t,0,r.length))}function au(n,t,r,e){if(!ca(n))return n;t=Ou(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var a=ro(t[u]),c=r;if(u!=o){var l=f[a];c=e?e(l,a,f):X,c===X&&(c=ca(l)?l:Ti(t[u+1])?[]:{})}Wr(f,a,c),f=f[a]}return n}function cu(n){return to(uc(n))}function lu(n,t,r){var e=-1,u=n.length;t<0&&(t=-t>u?0:u+t),r=r>u?u:r,r<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=fl(u);++e<u;)i[e]=n[e+t];return i}function su(n,t){var r;return bs(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function hu(n,t,r){var e=0,u=null==n?e:n.length;if("number"==typeof t&&t===t&&u<=Bn){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!ma(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return pu(n,t,Uc,r)}function pu(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,a=ma(t),c=t===X;u<i;){var l=ql((u+i)/2),s=r(n[l]),h=s!==X,p=null===s,v=s===s,_=ma(s);if(o)var g=e||v;else g=c?v&&(e||h):f?v&&h&&(e||!p):a?v&&h&&!p&&(e||!_):!p&&!_&&(e?s<=t:s<t);g?u=l+1:i=l}return Yl(i,Un)}function vu(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!Jf(f,a)){var a=f;i[u++]=0===o?0:o}}return i}function _u(n){return"number"==typeof n?n:ma(n)?Ln:+n}function gu(n){if("string"==typeof n)return n;if(mh(n))return l(n,gu)+"";if(ma(n))return ys?ys.call(n):"";var t=n+"";return"0"==t&&1/n==-En?"-0":t}function yu(n,t,r){var e=-1,u=a,i=n.length,o=!0,f=[],l=f;if(r)o=!1,u=c;else if(i>=tn){var s=t?null:Is(n);if(s)return q(s);o=!1,u=W,l=new dr}else l=t?[]:f;n:for(;++e<i;){var h=n[e],p=t?t(h):h;if(h=r||0!==h?h:0,o&&p===p){for(var v=l.length;v--;)if(l[v]===p)continue n;t&&l.push(p),f.push(h)}else u(l,p,r)||(l!==f&&l.push(p),f.push(h))}return f}function du(n,t){return t=Ou(t,n),n=Yi(n,t),null==n||delete n[ro(ko(t))]}function bu(n,t,r,e){return au(n,t,r(de(n,t)),e)}function wu(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?lu(n,e?0:i,e?i+1:u):lu(n,e?i+1:0,e?u:i)}function mu(n,t){var r=n;return r instanceof Dt&&(r=r.value()),h(t,function(n,t){return t.func.apply(t.thisArg,s([n],t.args))},r)}function xu(n,t,r){var e=n.length;if(e<2)return e?yu(n[0]):[];for(var u=-1,i=fl(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=Jr(i[u]||o,n[f],t,r));return yu(ue(i,1),t,r)}function ju(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;){var f=e<i?t[e]:X;r(o,n[e],f)}return o}function Au(n){return Qf(n)?n:[]}function ku(n){return"function"==typeof n?n:Uc}function Ou(n,t){return mh(n)?n:Di(n,t)?[n]:Bs(Wa(n))}function Iu(n,t,r){var e=n.length;return r=r===X?e:r,!t&&r>=e?n:lu(n,t,r)}function Ru(n,t){if(t)return n.slice();var r=n.length,e=Sl?Sl(r):new n.constructor(r);return n.copy(e),e}function zu(n){var t=new n.constructor(n.byteLength);return new El(t).set(new El(n)),t}function Eu(n,t){var r=t?zu(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.byteLength)}function Su(t,r,e){var u=r?e(F(t),an):F(t);return h(u,n,new t.constructor)}function Wu(n){var t=new n.constructor(n.source,Nt.exec(n));return t.lastIndex=n.lastIndex,t}function Lu(n,r,e){var u=r?e(q(n),an):q(n);return h(u,t,new n.constructor)}function Cu(n){return gs?hl(gs.call(n)):{}}function Uu(n,t){var r=t?zu(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.length)}function Bu(n,t){if(n!==t){var r=n!==X,e=null===n,u=n===n,i=ma(n),o=t!==X,f=null===t,a=t===t,c=ma(t);if(!f&&!c&&!i&&n>t||i&&o&&a&&!f&&!c||e&&o&&a||!r&&a||!u)return 1;if(!e&&!i&&!c&&n<t||c&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!a)return-1}return 0}function Tu(n,t,r){for(var e=-1,u=n.criteria,i=t.criteria,o=u.length,f=r.length;++e<o;){var a=Bu(u[e],i[e]);if(a){if(e>=f)return a;var c=r[e];return a*("desc"==c?-1:1)}}return n.index-t.index}function $u(n,t,r,e){for(var u=-1,i=n.length,o=r.length,f=-1,a=t.length,c=Jl(i-o,0),l=fl(a+c),s=!e;++f<a;)l[f]=t[f];for(;++u<o;)(s||u<i)&&(l[r[u]]=n[u]);for(;c--;)l[f++]=n[u++];return l}function Du(n,t,r,e){for(var u=-1,i=n.length,o=-1,f=r.length,a=-1,c=t.length,l=Jl(i-f,0),s=fl(l+c),h=!e;++u<l;)s[u]=n[u];for(var p=u;++a<c;)s[p+a]=t[a];for(;++o<f;)(h||u<i)&&(s[p+r[o]]=n[u++]);return s}function Mu(n,t){var r=-1,e=n.length;for(t||(t=fl(e));++r<e;)t[r]=n[r];return t}function Fu(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],a=e?e(r[f],n[f],f,r,n):X;a===X&&(a=n[f]),u?Tr(r,f,a):Wr(r,f,a)}return r}function Nu(n,t){return Fu(n,zs(n),t)}function Pu(n,t){return Fu(n,Es(n),t)}function qu(n,t){return function(r,u){var i=mh(r)?e:Cr,o=t?t():{};return i(r,n,Ai(u,2),o)}}function Zu(n){return iu(function(t,r){var e=-1,u=r.length,i=u>1?r[u-1]:X,o=u>2?r[2]:X;for(i=n.length>3&&"function"==typeof i?(u--,i):X,o&&$i(r[0],r[1],o)&&(i=u<3?X:i,u=1),t=hl(t);++e<u;){var f=r[e];f&&n(t,f,e,i)}return t})}function Ku(n,t){return function(r,e){if(null==r)return r;if(!Yf(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=hl(r);(t?i--:++i<u)&&e(o[i],i,o)!==!1;);return r}}function Vu(n){return function(t,r,e){for(var u=-1,i=hl(t),o=e(t),f=o.length;f--;){var a=o[n?f:++u];if(r(i[a],a,i)===!1)break}return t}}function Gu(n,t,r){function e(){var t=this&&this!==re&&this instanceof e?i:n;return t.apply(u?r:this,arguments)}var u=t&pn,i=Yu(n);return e}function Hu(n){return function(t){t=Wa(t);var r=$(t)?H(t):X,e=r?r[0]:t.charAt(0),u=r?Iu(r,1).join(""):t.slice(1);return e[n]()+u}}function Ju(n){return function(t){return h(Ec(lc(t).replace($r,"")),n,"")}}function Yu(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=ds(n.prototype),e=n.apply(r,t);return ca(e)?e:r}}function Qu(n,t,e){function u(){for(var o=arguments.length,f=fl(o),a=o,c=ji(u);a--;)f[a]=arguments[a];var l=o<3&&f[0]!==c&&f[o-1]!==c?[]:P(f,c);if(o-=l.length,o<e)return ci(n,t,ti,u.placeholder,X,f,l,X,X,e-o);var s=this&&this!==re&&this instanceof u?i:n;return r(s,this,f)}var i=Yu(n);return u}function Xu(n){return function(t,r,e){var u=hl(t);if(!Yf(t)){var i=Ai(r,3);t=Za(t),r=function(n){return i(u[n],n,u)}}var o=n(t,r,e);return o>-1?u[i?t[o]:o]:X}}function ni(n){return bi(function(t){var r=t.length,e=r,u=Y.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if("function"!=typeof i)throw new _l(en);if(u&&!o&&"wrapper"==xi(i))var o=new Y([],!0)}for(e=o?e:r;++e<r;){i=t[e];var f=xi(i),a="wrapper"==f?Rs(i):X;o=a&&Fi(a[0])&&a[1]==(wn|gn|dn|mn)&&!a[4].length&&1==a[9]?o[xi(a[0])].apply(o,a[3]):1==i.length&&Fi(i)?o[f]():o.thru(i)}return function(){var n=arguments,e=n[0];if(o&&1==n.length&&mh(e))return o.plant(e).value();for(var u=0,i=r?t[u].apply(this,n):e;++u<r;)i=t[u].call(this,i);return i}})}function ti(n,t,r,e,u,i,o,f,a,c){function l(){for(var y=arguments.length,d=fl(y),b=y;b--;)d[b]=arguments[b];if(v)var w=ji(l),m=U(d,w);if(e&&(d=$u(d,e,u,v)),i&&(d=Du(d,i,o,v)),y-=m,v&&y<c){var x=P(d,w);return ci(n,t,ti,l.placeholder,r,d,x,f,a,c-y)}var j=h?r:this,A=p?j[n]:n;return y=d.length,f?d=Qi(d,f):_&&y>1&&d.reverse(),s&&a<y&&(d.length=a),this&&this!==re&&this instanceof l&&(A=g||Yu(A)),A.apply(j,d)}var s=t&wn,h=t&pn,p=t&vn,v=t&(gn|yn),_=t&xn,g=p?X:Yu(n);return l}function ri(n,t){return function(r,e){return Ie(r,n,t(e),{})}}function ei(n,t){return function(r,e){var u;if(r===X&&e===X)return t;if(r!==X&&(u=r),e!==X){if(u===X)return e;"string"==typeof r||"string"==typeof e?(r=gu(r),e=gu(e)):(r=_u(r),e=_u(e)),u=n(r,e)}return u}}function ui(n){return bi(function(t){return t=l(t,E(Ai())),iu(function(e){var u=this;return n(t,function(n){return r(n,u,e)})})})}function ii(n,t){t=t===X?" ":gu(t);var r=t.length;if(r<2)return r?uu(t,n):t;var e=uu(t,Pl(n/G(t)));return $(t)?Iu(H(e),0,n).join(""):e.slice(0,n)}function oi(n,t,e,u){function i(){for(var t=-1,a=arguments.length,c=-1,l=u.length,s=fl(l+a),h=this&&this!==re&&this instanceof i?f:n;++c<l;)s[c]=u[c];for(;a--;)s[c++]=arguments[++t];return r(h,o?e:this,s)}var o=t&pn,f=Yu(n);return i}function fi(n){return function(t,r,e){return e&&"number"!=typeof e&&$i(t,r,e)&&(r=e=X),t=Oa(t),r===X?(r=t,t=0):r=Oa(r),e=e===X?t<r?1:-1:Oa(e),eu(t,r,e,n)}}function ai(n){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=za(t),r=za(r)),n(t,r)}}function ci(n,t,r,e,u,i,o,f,a,c){var l=t&gn,s=l?o:X,h=l?X:o,p=l?i:X,v=l?X:i;t|=l?dn:bn,t&=~(l?bn:dn),t&_n||(t&=~(pn|vn));var _=[n,t,u,p,s,v,h,f,a,c],g=r.apply(X,_);return Fi(n)&&Ls(g,_),g.placeholder=e,Xi(g,n,t)}function li(n){var t=sl[n];return function(n,r){if(n=za(n),r=null==r?0:Yl(Ia(r),292)){var e=(Wa(n)+"e").split("e"),u=t(e[0]+"e"+(+e[1]+r));return e=(Wa(u)+"e").split("e"),+(e[0]+"e"+(+e[1]-r))}return t(n)}}function si(n){return function(t){var r=Ss(t);return r==Vn?F(t):r==nt?Z(t):z(t,n(t))}}function hi(n,t,r,e,u,i,o,f){var a=t&vn;if(!a&&"function"!=typeof n)throw new _l(en);var c=e?e.length:0;if(c||(t&=~(dn|bn),e=u=X),o=o===X?o:Jl(Ia(o),0),f=f===X?f:Ia(f),c-=u?u.length:0,t&bn){var l=e,s=u;e=u=X}var h=a?X:Rs(n),p=[n,t,r,e,u,l,s,i,o,f];if(h&&Vi(p,h),n=p[0],t=p[1],r=p[2],e=p[3],u=p[4],f=p[9]=p[9]===X?a?0:n.length:Jl(p[9]-c,0),!f&&t&(gn|yn)&&(t&=~(gn|yn)),t&&t!=pn)v=t==gn||t==yn?Qu(n,t,f):t!=dn&&t!=(pn|dn)||u.length?ti.apply(X,p):oi(n,t,r,e);else var v=Gu(n,t,r);var _=h?js:Ls;return Xi(_(v,p),n,t)}function pi(n,t,r,e){return n===X||Jf(n,dl[r])&&!ml.call(e,r)?t:n}function vi(n,t,r,e,u,i){return ca(n)&&ca(t)&&(i.set(t,n),Ve(n,t,X,vi,i),i.delete(t)),n}function _i(n){return da(n)?X:n}function gi(n,t,r,e,u,i){var o=r&sn,f=n.length,a=t.length;if(f!=a&&!(o&&a>f))return!1;var c=i.get(n);if(c&&i.get(t))return c==t;var l=-1,s=!0,h=r&hn?new dr:X;for(i.set(n,t),i.set(t,n);++l<f;){var p=n[l],_=t[l];if(e)var g=o?e(_,p,l,t,n,i):e(p,_,l,n,t,i);if(g!==X){if(g)continue;s=!1;break}if(h){if(!v(t,function(n,t){if(!W(h,t)&&(p===n||u(p,n,r,e,i)))return h.push(t)})){s=!1;break}}else if(p!==_&&!u(p,_,r,e,i)){s=!1;break}}return i.delete(n),i.delete(t),s}function yi(n,t,r,e,u,i,o){switch(r){case ft:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case ot:return!(n.byteLength!=t.byteLength||!i(new El(n),new El(t)));case Fn:case Nn:case Gn:return Jf(+n,+t);case qn:return n.name==t.name&&n.message==t.message;case Xn:case tt:return n==t+"";case Vn:var f=F;case nt:var a=e&sn;if(f||(f=q),n.size!=t.size&&!a)return!1;var c=o.get(n);if(c)return c==t;e|=hn,o.set(n,t);var l=gi(f(n),f(t),e,u,i,o);return o.delete(n),l;case rt:if(gs)return gs.call(n)==gs.call(t)}return!1}function di(n,t,r,e,u,i){var o=r&sn,f=wi(n),a=f.length,c=wi(t),l=c.length;if(a!=l&&!o)return!1;for(var s=a;s--;){var h=f[s];if(!(o?h in t:ml.call(t,h)))return!1}var p=i.get(n);if(p&&i.get(t))return p==t;var v=!0;i.set(n,t),i.set(t,n);for(var _=o;++s<a;){h=f[s];var g=n[h],y=t[h];if(e)var d=o?e(y,g,h,t,n,i):e(g,y,h,n,t,i);if(!(d===X?g===y||u(g,y,r,e,i):d)){v=!1;break}_||(_="constructor"==h)}if(v&&!_){var b=n.constructor,w=t.constructor;b!=w&&"constructor"in n&&"constructor"in t&&!("function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w)&&(v=!1);
}return i.delete(n),i.delete(t),v}function bi(n){return Us(Ji(n,X,go),n+"")}function wi(n){return we(n,Za,zs)}function mi(n){return we(n,Ka,Es)}function xi(n){for(var t=n.name+"",r=cs[t],e=ml.call(cs,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function ji(n){var t=ml.call(K,"placeholder")?K:n;return t.placeholder}function Ai(){var n=K.iteratee||Bc;return n=n===Bc?Me:n,arguments.length?n(arguments[0],arguments[1]):n}function ki(n,t){var r=n.__data__;return Mi(t)?r["string"==typeof t?"string":"hash"]:r.map}function Oi(n){for(var t=Za(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,qi(u)]}return t}function Ii(n,t){var r=T(n,t);return Be(r)?r:X}function Ri(n){var t=ml.call(n,$l),r=n[$l];try{n[$l]=X;var e=!0}catch(n){}var u=Al.call(n);return e&&(t?n[$l]=r:delete n[$l]),u}function zi(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=Yl(t,n+o);break;case"takeRight":n=Jl(n,t-o)}}return{start:n,end:t}}function Ei(n){var t=n.match(Tt);return t?t[1].split($t):[]}function Si(n,t,r){t=Ou(t,n);for(var e=-1,u=t.length,i=!1;++e<u;){var o=ro(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&aa(u)&&Ti(o,u)&&(mh(n)||wh(n)))}function Wi(n){var t=n.length,r=n.constructor(t);return t&&"string"==typeof n[0]&&ml.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Li(n){return"function"!=typeof n.constructor||Pi(n)?{}:ds(Wl(n))}function Ci(n,t,r,e){var u=n.constructor;switch(t){case ot:return zu(n);case Fn:case Nn:return new u(+n);case ft:return Eu(n,e);case at:case ct:case lt:case st:case ht:case pt:case vt:case _t:case gt:return Uu(n,e);case Vn:return Su(n,e,r);case Gn:case tt:return new u(n);case Xn:return Wu(n);case nt:return Lu(n,e,r);case rt:return Cu(n)}}function Ui(n,t){var r=t.length;if(!r)return n;var e=r-1;return t[e]=(r>1?"& ":"")+t[e],t=t.join(r>2?", ":" "),n.replace(Bt,"{\n/* [wrapped with "+t+"] */\n")}function Bi(n){return mh(n)||wh(n)||!!(Bl&&n&&n[Bl])}function Ti(n,t){return t=null==t?Sn:t,!!t&&("number"==typeof n||Vt.test(n))&&n>-1&&n%1==0&&n<t}function $i(n,t,r){if(!ca(r))return!1;var e=typeof t;return!!("number"==e?Yf(r)&&Ti(t,r.length):"string"==e&&t in r)&&Jf(r[t],n)}function Di(n,t){if(mh(n))return!1;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!ma(n))||(Rt.test(n)||!It.test(n)||null!=t&&n in hl(t))}function Mi(n){var t=typeof n;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n}function Fi(n){var t=xi(n),r=K[t];if("function"!=typeof r||!(t in Dt.prototype))return!1;if(n===r)return!0;var e=Rs(r);return!!e&&n===e[0]}function Ni(n){return!!jl&&jl in n}function Pi(n){var t=n&&n.constructor,r="function"==typeof t&&t.prototype||dl;return n===r}function qi(n){return n===n&&!ca(n)}function Zi(n,t){return function(r){return null!=r&&(r[n]===t&&(t!==X||n in hl(r)))}}function Ki(n){var t=Bf(n,function(n){return r.size===on&&r.clear(),n}),r=t.cache;return t}function Vi(n,t){var r=n[1],e=t[1],u=r|e,i=u<(pn|vn|wn),o=e==wn&&r==gn||e==wn&&r==mn&&n[7].length<=t[8]||e==(wn|mn)&&t[7].length<=t[8]&&r==gn;if(!i&&!o)return n;e&pn&&(n[2]=t[2],u|=r&pn?0:_n);var f=t[3];if(f){var a=n[3];n[3]=a?$u(a,f,t[4]):f,n[4]=a?P(n[3],fn):t[4]}return f=t[5],f&&(a=n[5],n[5]=a?Du(a,f,t[6]):f,n[6]=a?P(n[5],fn):t[6]),f=t[7],f&&(n[7]=f),e&wn&&(n[8]=null==n[8]?t[8]:Yl(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u,n}function Gi(n){var t=[];if(null!=n)for(var r in hl(n))t.push(r);return t}function Hi(n){return Al.call(n)}function Ji(n,t,e){return t=Jl(t===X?n.length-1:t,0),function(){for(var u=arguments,i=-1,o=Jl(u.length-t,0),f=fl(o);++i<o;)f[i]=u[t+i];i=-1;for(var a=fl(t+1);++i<t;)a[i]=u[i];return a[t]=e(f),r(n,this,a)}}function Yi(n,t){return t.length<2?n:de(n,lu(t,0,-1))}function Qi(n,t){for(var r=n.length,e=Yl(t.length,r),u=Mu(n);e--;){var i=t[e];n[e]=Ti(i,r)?u[i]:X}return n}function Xi(n,t,r){var e=t+"";return Us(n,Ui(e,uo(Ei(e),r)))}function no(n){var t=0,r=0;return function(){var e=Ql(),u=On-(e-r);if(r=e,u>0){if(++t>=kn)return arguments[0]}else t=0;return n.apply(X,arguments)}}function to(n,t){var r=-1,e=n.length,u=e-1;for(t=t===X?e:t;++r<t;){var i=ru(r,u),o=n[i];n[i]=n[r],n[r]=o}return n.length=t,n}function ro(n){if("string"==typeof n||ma(n))return n;var t=n+"";return"0"==t&&1/n==-En?"-0":t}function eo(n){if(null!=n){try{return wl.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function uo(n,t){return u(Tn,function(r){var e="_."+r[0];t&r[1]&&!a(n,e)&&n.push(e)}),n.sort()}function io(n){if(n instanceof Dt)return n.clone();var t=new Y(n.__wrapped__,n.__chain__);return t.__actions__=Mu(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function oo(n,t,r){t=(r?$i(n,t,r):t===X)?1:Jl(Ia(t),0);var e=null==n?0:n.length;if(!e||t<1)return[];for(var u=0,i=0,o=fl(Pl(e/t));u<e;)o[i++]=lu(n,u,u+=t);return o}function fo(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u}function ao(){var n=arguments.length;if(!n)return[];for(var t=fl(n-1),r=arguments[0],e=n;e--;)t[e-1]=arguments[e];return s(mh(r)?Mu(r):[r],ue(t,1))}function co(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:Ia(t),lu(n,t<0?0:t,e)):[]}function lo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:Ia(t),t=e-t,lu(n,0,t<0?0:t)):[]}function so(n,t){return n&&n.length?wu(n,Ai(t,3),!0,!0):[]}function ho(n,t){return n&&n.length?wu(n,Ai(t,3),!0):[]}function po(n,t,r,e){var u=null==n?0:n.length;return u?(r&&"number"!=typeof r&&$i(n,t,r)&&(r=0,e=u),te(n,t,r,e)):[]}function vo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:Ia(r);return u<0&&(u=Jl(e+u,0)),d(n,Ai(t,3),u)}function _o(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==X&&(u=Ia(r),u=r<0?Jl(e+u,0):Yl(u,e-1)),d(n,Ai(t,3),u,!0)}function go(n){var t=null==n?0:n.length;return t?ue(n,1):[]}function yo(n){var t=null==n?0:n.length;return t?ue(n,En):[]}function bo(n,t){var r=null==n?0:n.length;return r?(t=t===X?1:Ia(t),ue(n,t)):[]}function wo(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e}function mo(n){return n&&n.length?n[0]:X}function xo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:Ia(r);return u<0&&(u=Jl(e+u,0)),b(n,t,u)}function jo(n){var t=null==n?0:n.length;return t?lu(n,0,-1):[]}function Ao(n,t){return null==n?"":Gl.call(n,t)}function ko(n){var t=null==n?0:n.length;return t?n[t-1]:X}function Oo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;return r!==X&&(u=Ia(r),u=u<0?Jl(e+u,0):Yl(u,e-1)),t===t?V(n,t,u):d(n,m,u,!0)}function Io(n,t){return n&&n.length?He(n,Ia(t)):X}function Ro(n,t){return n&&n.length&&t&&t.length?nu(n,t):n}function zo(n,t,r){return n&&n.length&&t&&t.length?nu(n,t,Ai(r,2)):n}function Eo(n,t,r){return n&&n.length&&t&&t.length?nu(n,t,X,r):n}function So(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=Ai(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return tu(n,u),r}function Wo(n){return null==n?n:ts.call(n)}function Lo(n,t,r){var e=null==n?0:n.length;return e?(r&&"number"!=typeof r&&$i(n,t,r)?(t=0,r=e):(t=null==t?0:Ia(t),r=r===X?e:Ia(r)),lu(n,t,r)):[]}function Co(n,t){return hu(n,t)}function Uo(n,t,r){return pu(n,t,Ai(r,2))}function Bo(n,t){var r=null==n?0:n.length;if(r){var e=hu(n,t);if(e<r&&Jf(n[e],t))return e}return-1}function To(n,t){return hu(n,t,!0)}function $o(n,t,r){return pu(n,t,Ai(r,2),!0)}function Do(n,t){var r=null==n?0:n.length;if(r){var e=hu(n,t,!0)-1;if(Jf(n[e],t))return e}return-1}function Mo(n){return n&&n.length?vu(n):[]}function Fo(n,t){return n&&n.length?vu(n,Ai(t,2)):[]}function No(n){var t=null==n?0:n.length;return t?lu(n,1,t):[]}function Po(n,t,r){return n&&n.length?(t=r||t===X?1:Ia(t),lu(n,0,t<0?0:t)):[]}function qo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:Ia(t),t=e-t,lu(n,t<0?0:t,e)):[]}function Zo(n,t){return n&&n.length?wu(n,Ai(t,3),!1,!0):[]}function Ko(n,t){return n&&n.length?wu(n,Ai(t,3)):[]}function Vo(n){return n&&n.length?yu(n):[]}function Go(n,t){return n&&n.length?yu(n,Ai(t,2)):[]}function Ho(n,t){return t="function"==typeof t?t:X,n&&n.length?yu(n,X,t):[]}function Jo(n){if(!n||!n.length)return[];var t=0;return n=f(n,function(n){if(Qf(n))return t=Jl(n.length,t),!0}),R(t,function(t){return l(n,j(t))})}function Yo(n,t){if(!n||!n.length)return[];var e=Jo(n);return null==t?e:l(e,function(n){return r(t,X,n)})}function Qo(n,t){return ju(n||[],t||[],Wr)}function Xo(n,t){return ju(n||[],t||[],au)}function nf(n){var t=K(n);return t.__chain__=!0,t}function tf(n,t){return t(n),n}function rf(n,t){return t(n)}function ef(){return nf(this)}function uf(){return new Y(this.value(),this.__chain__)}function of(){this.__values__===X&&(this.__values__=ka(this.value()));var n=this.__index__>=this.__values__.length,t=n?X:this.__values__[this.__index__++];return{done:n,value:t}}function ff(){return this}function af(n){for(var t,r=this;r instanceof J;){var e=io(r);e.__index__=0,e.__values__=X,t?u.__wrapped__=e:t=e;var u=e;r=r.__wrapped__}return u.__wrapped__=n,t}function cf(){var n=this.__wrapped__;if(n instanceof Dt){var t=n;return this.__actions__.length&&(t=new Dt(this)),t=t.reverse(),t.__actions__.push({func:rf,args:[Wo],thisArg:X}),new Y(t,this.__chain__)}return this.thru(Wo)}function lf(){return mu(this.__wrapped__,this.__actions__)}function sf(n,t,r){var e=mh(n)?o:Yr;return r&&$i(n,t,r)&&(t=X),e(n,Ai(t,3))}function hf(n,t){var r=mh(n)?f:ee;return r(n,Ai(t,3))}function pf(n,t){return ue(bf(n,t),1)}function vf(n,t){return ue(bf(n,t),En)}function _f(n,t,r){return r=r===X?1:Ia(r),ue(bf(n,t),r)}function gf(n,t){var r=mh(n)?u:bs;return r(n,Ai(t,3))}function yf(n,t){var r=mh(n)?i:ws;return r(n,Ai(t,3))}function df(n,t,r,e){n=Yf(n)?n:uc(n),r=r&&!e?Ia(r):0;var u=n.length;return r<0&&(r=Jl(u+r,0)),wa(n)?r<=u&&n.indexOf(t,r)>-1:!!u&&b(n,t,r)>-1}function bf(n,t){var r=mh(n)?l:qe;return r(n,Ai(t,3))}function wf(n,t,r,e){return null==n?[]:(mh(t)||(t=null==t?[]:[t]),r=e?X:r,mh(r)||(r=null==r?[]:[r]),Je(n,t,r))}function mf(n,t,r){var e=mh(n)?h:k,u=arguments.length<3;return e(n,Ai(t,4),r,u,bs)}function xf(n,t,r){var e=mh(n)?p:k,u=arguments.length<3;return e(n,Ai(t,4),r,u,ws)}function jf(n,t){var r=mh(n)?f:ee;return r(n,Tf(Ai(t,3)))}function Af(n){var t=mh(n)?Rr:ou;return t(n)}function kf(n,t,r){t=(r?$i(n,t,r):t===X)?1:Ia(t);var e=mh(n)?zr:fu;return e(n,t)}function Of(n){var t=mh(n)?Er:cu;return t(n)}function If(n){if(null==n)return 0;if(Yf(n))return wa(n)?G(n):n.length;var t=Ss(n);return t==Vn||t==nt?n.size:Fe(n).length}function Rf(n,t,r){var e=mh(n)?v:su;return r&&$i(n,t,r)&&(t=X),e(n,Ai(t,3))}function zf(n,t){if("function"!=typeof t)throw new _l(en);return n=Ia(n),function(){if(--n<1)return t.apply(this,arguments)}}function Ef(n,t,r){return t=r?X:t,t=n&&null==t?n.length:t,hi(n,wn,X,X,X,X,t)}function Sf(n,t){var r;if("function"!=typeof t)throw new _l(en);return n=Ia(n),function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=X),r}}function Wf(n,t,r){t=r?X:t;var e=hi(n,gn,X,X,X,X,X,t);return e.placeholder=Wf.placeholder,e}function Lf(n,t,r){t=r?X:t;var e=hi(n,yn,X,X,X,X,X,t);return e.placeholder=Lf.placeholder,e}function Cf(n,t,r){function e(t){var r=h,e=p;return h=p=X,d=t,_=n.apply(e,r)}function u(n){return d=n,g=Cs(f,t),b?e(n):_}function i(n){var r=n-y,e=n-d,u=t-r;return w?Yl(u,v-e):u}function o(n){var r=n-y,e=n-d;return y===X||r>=t||r<0||w&&e>=v}function f(){var n=ch();return o(n)?a(n):void(g=Cs(f,i(n)))}function a(n){return g=X,m&&h?e(n):(h=p=X,_)}function c(){g!==X&&Os(g),d=0,h=y=p=g=X}function l(){return g===X?_:a(ch())}function s(){var n=ch(),r=o(n);if(h=arguments,p=this,y=n,r){if(g===X)return u(y);if(w)return g=Cs(f,t),e(y)}return g===X&&(g=Cs(f,t)),_}var h,p,v,_,g,y,d=0,b=!1,w=!1,m=!0;if("function"!=typeof n)throw new _l(en);return t=za(t)||0,ca(r)&&(b=!!r.leading,w="maxWait"in r,v=w?Jl(za(r.maxWait)||0,t):v,m="trailing"in r?!!r.trailing:m),s.cancel=c,s.flush=l,s}function Uf(n){return hi(n,xn)}function Bf(n,t){if("function"!=typeof n||null!=t&&"function"!=typeof t)throw new _l(en);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o)||i,o};return r.cache=new(Bf.Cache||hr),r}function Tf(n){if("function"!=typeof n)throw new _l(en);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function $f(n){return Sf(2,n)}function Df(n,t){if("function"!=typeof n)throw new _l(en);return t=t===X?t:Ia(t),iu(n,t)}function Mf(n,t){if("function"!=typeof n)throw new _l(en);return t=null==t?0:Jl(Ia(t),0),iu(function(e){var u=e[t],i=Iu(e,0,t);return u&&s(i,u),r(n,this,i)})}function Ff(n,t,r){var e=!0,u=!0;if("function"!=typeof n)throw new _l(en);return ca(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),Cf(n,t,{leading:e,maxWait:t,trailing:u})}function Nf(n){return Ef(n,1)}function Pf(n,t){return _h(ku(t),n)}function qf(){if(!arguments.length)return[];var n=arguments[0];return mh(n)?n:[n]}function Zf(n){return Nr(n,ln)}function Kf(n,t){return t="function"==typeof t?t:X,Nr(n,ln,t)}function Vf(n){return Nr(n,an|ln)}function Gf(n,t){return t="function"==typeof t?t:X,Nr(n,an|ln,t)}function Hf(n,t){return null==t||Gr(n,t,Za(t))}function Jf(n,t){return n===t||n!==n&&t!==t}function Yf(n){return null!=n&&aa(n.length)&&!oa(n)}function Qf(n){return la(n)&&Yf(n)}function Xf(n){return n===!0||n===!1||la(n)&&me(n)==Fn}function na(n){return la(n)&&1===n.nodeType&&!da(n)}function ta(n){if(null==n)return!0;if(Yf(n)&&(mh(n)||"string"==typeof n||"function"==typeof n.splice||jh(n)||Rh(n)||wh(n)))return!n.length;var t=Ss(n);if(t==Vn||t==nt)return!n.size;if(Pi(n))return!Fe(n).length;for(var r in n)if(ml.call(n,r))return!1;return!0}function ra(n,t){return We(n,t)}function ea(n,t,r){r="function"==typeof r?r:X;var e=r?r(n,t):X;return e===X?We(n,t,X,r):!!e}function ua(n){if(!la(n))return!1;var t=me(n);return t==qn||t==Pn||"string"==typeof n.message&&"string"==typeof n.name&&!da(n)}function ia(n){return"number"==typeof n&&Vl(n)}function oa(n){if(!ca(n))return!1;var t=me(n);return t==Zn||t==Kn||t==Mn||t==Qn}function fa(n){return"number"==typeof n&&n==Ia(n)}function aa(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=Sn}function ca(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function la(n){return null!=n&&"object"==typeof n}function sa(n,t){return n===t||Ue(n,t,Oi(t))}function ha(n,t,r){return r="function"==typeof r?r:X,Ue(n,t,Oi(t),r)}function pa(n){return ya(n)&&n!=+n}function va(n){if(Ws(n))throw new cl(rn);return Be(n)}function _a(n){return null===n}function ga(n){return null==n}function ya(n){return"number"==typeof n||la(n)&&me(n)==Gn}function da(n){if(!la(n)||me(n)!=Jn)return!1;var t=Wl(n);if(null===t)return!0;var r=ml.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&wl.call(r)==kl}function ba(n){return fa(n)&&n>=-Sn&&n<=Sn}function wa(n){return"string"==typeof n||!mh(n)&&la(n)&&me(n)==tt}function ma(n){return"symbol"==typeof n||la(n)&&me(n)==rt}function xa(n){return n===X}function ja(n){return la(n)&&Ss(n)==ut}function Aa(n){return la(n)&&me(n)==it}function ka(n){if(!n)return[];if(Yf(n))return wa(n)?H(n):Mu(n);if(Tl&&n[Tl])return M(n[Tl]());var t=Ss(n),r=t==Vn?F:t==nt?q:uc;return r(n)}function Oa(n){if(!n)return 0===n?n:0;if(n=za(n),n===En||n===-En){var t=n<0?-1:1;return t*Wn}return n===n?n:0}function Ia(n){var t=Oa(n),r=t%1;return t===t?r?t-r:t:0}function Ra(n){return n?Fr(Ia(n),0,Cn):0}function za(n){if("number"==typeof n)return n;if(ma(n))return Ln;if(ca(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=ca(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(Lt,"");var r=qt.test(n);return r||Kt.test(n)?Xr(n.slice(2),r?2:8):Pt.test(n)?Ln:+n}function Ea(n){return Fu(n,Ka(n))}function Sa(n){return n?Fr(Ia(n),-Sn,Sn):0===n?n:0}function Wa(n){return null==n?"":gu(n)}function La(n,t){var r=ds(n);return null==t?r:Ur(r,t)}function Ca(n,t){return y(n,Ai(t,3),oe)}function Ua(n,t){return y(n,Ai(t,3),fe)}function Ba(n,t){return null==n?n:ms(n,Ai(t,3),Ka)}function Ta(n,t){return null==n?n:xs(n,Ai(t,3),Ka)}function $a(n,t){return n&&oe(n,Ai(t,3))}function Da(n,t){return n&&fe(n,Ai(t,3))}function Ma(n){return null==n?[]:ve(n,Za(n))}function Fa(n){return null==n?[]:ve(n,Ka(n))}function Na(n,t,r){var e=null==n?X:de(n,t);return e===X?r:e}function Pa(n,t){return null!=n&&Si(n,t,je)}function qa(n,t){return null!=n&&Si(n,t,Ae)}function Za(n){return Yf(n)?Ir(n):Fe(n)}function Ka(n){return Yf(n)?Ir(n,!0):Ne(n)}function Va(n,t){var r={};return t=Ai(t,3),oe(n,function(n,e,u){Tr(r,t(n,e,u),n)}),r}function Ga(n,t){var r={};return t=Ai(t,3),oe(n,function(n,e,u){Tr(r,e,t(n,e,u))}),r}function Ha(n,t){return Ja(n,Tf(Ai(t)))}function Ja(n,t){if(null==n)return{};var r=l(mi(n),function(n){return[n]});return t=Ai(t),Qe(n,r,function(n,r){return t(n,r[0])})}function Ya(n,t,r){t=Ou(t,n);var e=-1,u=t.length;for(u||(u=1,n=X);++e<u;){var i=null==n?X:n[ro(t[e])];i===X&&(e=u,i=r),n=oa(i)?i.call(n):i}return n}function Qa(n,t,r){return null==n?n:au(n,t,r)}function Xa(n,t,r,e){return e="function"==typeof e?e:X,null==n?n:au(n,t,r,e)}function nc(n,t,r){var e=mh(n),i=e||jh(n)||Rh(n);if(t=Ai(t,4),null==r){var o=n&&n.constructor;r=i?e?new o:[]:ca(n)&&oa(o)?ds(Wl(n)):{}}return(i?u:oe)(n,function(n,e,u){return t(r,n,e,u)}),r}function tc(n,t){return null==n||du(n,t)}function rc(n,t,r){return null==n?n:bu(n,t,ku(r))}function ec(n,t,r,e){return e="function"==typeof e?e:X,null==n?n:bu(n,t,ku(r),e)}function uc(n){return null==n?[]:S(n,Za(n))}function ic(n){return null==n?[]:S(n,Ka(n))}function oc(n,t,r){return r===X&&(r=t,t=X),r!==X&&(r=za(r),r=r===r?r:0),t!==X&&(t=za(t),t=t===t?t:0),Fr(za(n),t,r)}function fc(n,t,r){return t=Oa(t),r===X?(r=t,t=0):r=Oa(r),n=za(n),ke(n,t,r)}function ac(n,t,r){if(r&&"boolean"!=typeof r&&$i(n,t,r)&&(t=r=X),r===X&&("boolean"==typeof t?(r=t,t=X):"boolean"==typeof n&&(r=n,n=X)),n===X&&t===X?(n=0,t=1):(n=Oa(n),t===X?(t=n,n=0):t=Oa(t)),n>t){var e=n;n=t,t=e}if(r||n%1||t%1){var u=ns();return Yl(n+u*(t-n+Qr("1e-"+((u+"").length-1))),t)}return ru(n,t)}function cc(n){return np(Wa(n).toLowerCase())}function lc(n){return n=Wa(n),n&&n.replace(Gt,_e).replace(Dr,"")}function sc(n,t,r){n=Wa(n),t=gu(t);var e=n.length;r=r===X?e:Fr(Ia(r),0,e);var u=r;return r-=t.length,r>=0&&n.slice(r,u)==t}function hc(n){return n=Wa(n),n&&jt.test(n)?n.replace(mt,ge):n}function pc(n){return n=Wa(n),n&&Wt.test(n)?n.replace(St,"\\$&"):n}function vc(n,t,r){n=Wa(n),t=Ia(t);var e=t?G(n):0;if(!t||e>=t)return n;var u=(t-e)/2;return ii(ql(u),r)+n+ii(Pl(u),r)}function _c(n,t,r){n=Wa(n),t=Ia(t);var e=t?G(n):0;return t&&e<t?n+ii(t-e,r):n}function gc(n,t,r){n=Wa(n),t=Ia(t);var e=t?G(n):0;return t&&e<t?ii(t-e,r)+n:n}function yc(n,t,r){return r||null==t?t=0:t&&(t=+t),Xl(Wa(n).replace(Ct,""),t||0)}function dc(n,t,r){return t=(r?$i(n,t,r):t===X)?1:Ia(t),uu(Wa(n),t)}function bc(){var n=arguments,t=Wa(n[0]);return n.length<3?t:t.replace(n[1],n[2])}function wc(n,t,r){return r&&"number"!=typeof r&&$i(n,t,r)&&(t=r=X),(r=r===X?Cn:r>>>0)?(n=Wa(n),n&&("string"==typeof t||null!=t&&!Oh(t))&&(t=gu(t),!t&&$(n))?Iu(H(n),0,r):n.split(t,r)):[]}function mc(n,t,r){return n=Wa(n),r=null==r?0:Fr(Ia(r),0,n.length),t=gu(t),n.slice(r,r+t.length)==t}function xc(n,t,r){var e=K.templateSettings;r&&$i(n,t,r)&&(t=X),n=Wa(n),t=Lh({},t,e,pi);var u,i,o=Lh({},t.imports,e.imports,pi),f=Za(o),a=S(o,f),c=0,l=t.interpolate||Ht,s="__p += '",h=pl((t.escape||Ht).source+"|"+l.source+"|"+(l===Ot?Ft:Ht).source+"|"+(t.evaluate||Ht).source+"|$","g"),p="//# sourceURL="+("sourceURL"in t?t.sourceURL:"lodash.templateSources["+ ++Zr+"]")+"\n";n.replace(h,function(t,r,e,o,f,a){return e||(e=o),s+=n.slice(c,a).replace(Jt,B),r&&(u=!0,s+="' +\n__e("+r+") +\n'"),f&&(i=!0,s+="';\n"+f+";\n__p += '"),e&&(s+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),c=a+t.length,t}),s+="';\n";var v=t.variable;v||(s="with (obj) {\n"+s+"\n}\n"),s=(i?s.replace(yt,""):s).replace(dt,"$1").replace(bt,"$1;"),s="function("+(v||"obj")+") {\n"+(v?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(u?", __e = _.escape":"")+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+s+"return __p\n}";var _=tp(function(){return ll(f,p+"return "+s).apply(X,a)});if(_.source=s,ua(_))throw _;return _}function jc(n){return Wa(n).toLowerCase()}function Ac(n){return Wa(n).toUpperCase()}function kc(n,t,r){if(n=Wa(n),n&&(r||t===X))return n.replace(Lt,"");if(!n||!(t=gu(t)))return n;var e=H(n),u=H(t),i=L(e,u),o=C(e,u)+1;return Iu(e,i,o).join("")}function Oc(n,t,r){if(n=Wa(n),n&&(r||t===X))return n.replace(Ut,"");if(!n||!(t=gu(t)))return n;var e=H(n),u=C(e,H(t))+1;return Iu(e,0,u).join("")}function Ic(n,t,r){if(n=Wa(n),n&&(r||t===X))return n.replace(Ct,"");if(!n||!(t=gu(t)))return n;var e=H(n),u=L(e,H(t));return Iu(e,u).join("")}function Rc(n,t){var r=jn,e=An;if(ca(t)){var u="separator"in t?t.separator:u;r="length"in t?Ia(t.length):r,e="omission"in t?gu(t.omission):e}n=Wa(n);var i=n.length;if($(n)){var o=H(n);i=o.length}if(r>=i)return n;var f=r-G(e);if(f<1)return e;var a=o?Iu(o,0,f).join(""):n.slice(0,f);if(u===X)return a+e;if(o&&(f+=a.length-f),Oh(u)){if(n.slice(f).search(u)){var c,l=a;for(u.global||(u=pl(u.source,Wa(Nt.exec(u))+"g")),u.lastIndex=0;c=u.exec(l);)var s=c.index;a=a.slice(0,s===X?f:s)}}else if(n.indexOf(gu(u),f)!=f){var h=a.lastIndexOf(u);h>-1&&(a=a.slice(0,h))}return a+e}function zc(n){return n=Wa(n),n&&xt.test(n)?n.replace(wt,ye):n}function Ec(n,t,r){return n=Wa(n),t=r?X:t,t===X?D(n)?Q(n):g(n):n.match(t)||[]}function Sc(n){var t=null==n?0:n.length,e=Ai();return n=t?l(n,function(n){if("function"!=typeof n[1])throw new _l(en);return[e(n[0]),n[1]]}):[],iu(function(e){for(var u=-1;++u<t;){var i=n[u];if(r(i[0],this,e))return r(i[1],this,e)}})}function Wc(n){return Pr(Nr(n,an))}function Lc(n){return function(){return n}}function Cc(n,t){return null==n||n!==n?t:n}function Uc(n){return n}function Bc(n){return Me("function"==typeof n?n:Nr(n,an))}function Tc(n){return Ze(Nr(n,an))}function $c(n,t){return Ke(n,Nr(t,an))}function Dc(n,t,r){var e=Za(t),i=ve(t,e);null!=r||ca(t)&&(i.length||!e.length)||(r=t,t=n,n=this,i=ve(t,Za(t)));var o=!(ca(r)&&"chain"in r&&!r.chain),f=oa(n);return u(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__),u=r.__actions__=Mu(this.__actions__);return u.push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,s([this.value()],arguments))})}),n}function Mc(){return re._===this&&(re._=Ol),this}function Fc(){}function Nc(n){return n=Ia(n),iu(function(t){return He(t,n)})}function Pc(n){return Di(n)?j(ro(n)):Xe(n)}function qc(n){return function(t){return null==n?X:de(n,t)}}function Zc(){return[]}function Kc(){return!1}function Vc(){return{}}function Gc(){return""}function Hc(){return!0}function Jc(n,t){if(n=Ia(n),n<1||n>Sn)return[];var r=Cn,e=Yl(n,Cn);t=Ai(t),n-=Cn;for(var u=R(e,t);++r<n;)t(r);return u}function Yc(n){return mh(n)?l(n,ro):ma(n)?[n]:Mu(Bs(Wa(n)))}function Qc(n){var t=++xl;return Wa(n)+t}function Xc(n){return n&&n.length?ne(n,Uc,xe):X}function nl(n,t){return n&&n.length?ne(n,Ai(t,2),xe):X}function tl(n){return x(n,Uc)}function rl(n,t){return x(n,Ai(t,2))}function el(n){return n&&n.length?ne(n,Uc,Pe):X}function ul(n,t){return n&&n.length?ne(n,Ai(t,2),Pe):X}function il(n){return n&&n.length?I(n,Uc):0}function ol(n,t){return n&&n.length?I(n,Ai(t,2)):0}A=null==A?re:be.defaults(re.Object(),A,be.pick(re,qr));var fl=A.Array,al=A.Date,cl=A.Error,ll=A.Function,sl=A.Math,hl=A.Object,pl=A.RegExp,vl=A.String,_l=A.TypeError,gl=fl.prototype,yl=ll.prototype,dl=hl.prototype,bl=A["__core-js_shared__"],wl=yl.toString,ml=dl.hasOwnProperty,xl=0,jl=function(){var n=/[^.]+$/.exec(bl&&bl.keys&&bl.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Al=dl.toString,kl=wl.call(hl),Ol=re._,Il=pl("^"+wl.call(ml).replace(St,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Rl=ie?A.Buffer:X,zl=A.Symbol,El=A.Uint8Array,Sl=Rl?Rl.allocUnsafe:X,Wl=N(hl.getPrototypeOf,hl),Ll=hl.create,Cl=dl.propertyIsEnumerable,Ul=gl.splice,Bl=zl?zl.isConcatSpreadable:X,Tl=zl?zl.iterator:X,$l=zl?zl.toStringTag:X,Dl=function(){try{var n=Ii(hl,"defineProperty");return n({},"",{}),n}catch(n){}}(),Ml=A.clearTimeout!==re.clearTimeout&&A.clearTimeout,Fl=al&&al.now!==re.Date.now&&al.now,Nl=A.setTimeout!==re.setTimeout&&A.setTimeout,Pl=sl.ceil,ql=sl.floor,Zl=hl.getOwnPropertySymbols,Kl=Rl?Rl.isBuffer:X,Vl=A.isFinite,Gl=gl.join,Hl=N(hl.keys,hl),Jl=sl.max,Yl=sl.min,Ql=al.now,Xl=A.parseInt,ns=sl.random,ts=gl.reverse,rs=Ii(A,"DataView"),es=Ii(A,"Map"),us=Ii(A,"Promise"),is=Ii(A,"Set"),os=Ii(A,"WeakMap"),fs=Ii(hl,"create"),as=os&&new os,cs={},ls=eo(rs),ss=eo(es),hs=eo(us),ps=eo(is),vs=eo(os),_s=zl?zl.prototype:X,gs=_s?_s.valueOf:X,ys=_s?_s.toString:X,ds=function(){function n(){}return function(t){if(!ca(t))return{};if(Ll)return Ll(t);n.prototype=t;var r=new n;return n.prototype=X,r}}();K.templateSettings={escape:At,evaluate:kt,interpolate:Ot,variable:"",imports:{_:K}},K.prototype=J.prototype,K.prototype.constructor=K,Y.prototype=ds(J.prototype),Y.prototype.constructor=Y,Dt.prototype=ds(J.prototype),Dt.prototype.constructor=Dt,nr.prototype.clear=tr,nr.prototype.delete=rr,nr.prototype.get=er,nr.prototype.has=ur,nr.prototype.set=ir,or.prototype.clear=fr,or.prototype.delete=ar,or.prototype.get=cr,or.prototype.has=lr,or.prototype.set=sr,hr.prototype.clear=pr,hr.prototype.delete=vr,hr.prototype.get=_r,hr.prototype.has=gr,hr.prototype.set=yr,dr.prototype.add=dr.prototype.push=br,dr.prototype.has=wr,mr.prototype.clear=xr,mr.prototype.delete=jr,mr.prototype.get=Ar,mr.prototype.has=kr,mr.prototype.set=Or;var bs=Ku(oe),ws=Ku(fe,!0),ms=Vu(),xs=Vu(!0),js=as?function(n,t){return as.set(n,t),n}:Uc,As=Dl?function(n,t){return Dl(n,"toString",{configurable:!0,enumerable:!1,value:Lc(t),writable:!0})}:Uc,ks=iu,Os=Ml||function(n){return re.clearTimeout(n)},Is=is&&1/q(new is([,-0]))[1]==En?function(n){return new is(n)}:Fc,Rs=as?function(n){return as.get(n)}:Fc,zs=Zl?function(n){return null==n?[]:(n=hl(n),f(Zl(n),function(t){return Cl.call(n,t)}))}:Zc,Es=Zl?function(n){for(var t=[];n;)s(t,zs(n)),n=Wl(n);return t}:Zc,Ss=me;(rs&&Ss(new rs(new ArrayBuffer(1)))!=ft||es&&Ss(new es)!=Vn||us&&Ss(us.resolve())!=Yn||is&&Ss(new is)!=nt||os&&Ss(new os)!=ut)&&(Ss=function(n){var t=me(n),r=t==Jn?n.constructor:X,e=r?eo(r):"";if(e)switch(e){case ls:return ft;case ss:return Vn;case hs:return Yn;case ps:return nt;case vs:return ut}return t});var Ws=bl?oa:Kc,Ls=no(js),Cs=Nl||function(n,t){return re.setTimeout(n,t)},Us=no(As),Bs=Ki(function(n){var t=[];return zt.test(n)&&t.push(""),n.replace(Et,function(n,r,e,u){t.push(e?u.replace(Mt,"$1"):r||n)}),t}),Ts=iu(function(n,t){return Qf(n)?Jr(n,ue(t,1,Qf,!0)):[]}),$s=iu(function(n,t){var r=ko(t);return Qf(r)&&(r=X),Qf(n)?Jr(n,ue(t,1,Qf,!0),Ai(r,2)):[]}),Ds=iu(function(n,t){var r=ko(t);return Qf(r)&&(r=X),Qf(n)?Jr(n,ue(t,1,Qf,!0),X,r):[]}),Ms=iu(function(n){var t=l(n,Au);return t.length&&t[0]===n[0]?Oe(t):[]}),Fs=iu(function(n){var t=ko(n),r=l(n,Au);return t===ko(r)?t=X:r.pop(),r.length&&r[0]===n[0]?Oe(r,Ai(t,2)):[]}),Ns=iu(function(n){var t=ko(n),r=l(n,Au);return t="function"==typeof t?t:X,t&&r.pop(),r.length&&r[0]===n[0]?Oe(r,X,t):[]}),Ps=iu(Ro),qs=bi(function(n,t){var r=null==n?0:n.length,e=Mr(n,t);return tu(n,l(t,function(n){return Ti(n,r)?+n:n}).sort(Bu)),e}),Zs=iu(function(n){return yu(ue(n,1,Qf,!0))}),Ks=iu(function(n){var t=ko(n);return Qf(t)&&(t=X),yu(ue(n,1,Qf,!0),Ai(t,2))}),Vs=iu(function(n){var t=ko(n);return t="function"==typeof t?t:X,yu(ue(n,1,Qf,!0),X,t)}),Gs=iu(function(n,t){return Qf(n)?Jr(n,t):[]}),Hs=iu(function(n){return xu(f(n,Qf))}),Js=iu(function(n){var t=ko(n);return Qf(t)&&(t=X),xu(f(n,Qf),Ai(t,2))}),Ys=iu(function(n){var t=ko(n);return t="function"==typeof t?t:X,xu(f(n,Qf),X,t)}),Qs=iu(Jo),Xs=iu(function(n){var t=n.length,r=t>1?n[t-1]:X;return r="function"==typeof r?(n.pop(),r):X,Yo(n,r)}),nh=bi(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return Mr(t,n)};return!(t>1||this.__actions__.length)&&e instanceof Dt&&Ti(r)?(e=e.slice(r,+r+(t?1:0)),e.__actions__.push({func:rf,args:[u],thisArg:X}),new Y(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(X),n})):this.thru(u)}),th=qu(function(n,t,r){ml.call(n,r)?++n[r]:Tr(n,r,1)}),rh=Xu(vo),eh=Xu(_o),uh=qu(function(n,t,r){ml.call(n,r)?n[r].push(t):Tr(n,r,[t])}),ih=iu(function(n,t,e){var u=-1,i="function"==typeof t,o=Yf(n)?fl(n.length):[];return bs(n,function(n){o[++u]=i?r(t,n,e):Re(n,t,e)}),o}),oh=qu(function(n,t,r){Tr(n,r,t)}),fh=qu(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),ah=iu(function(n,t){if(null==n)return[];var r=t.length;return r>1&&$i(n,t[0],t[1])?t=[]:r>2&&$i(t[0],t[1],t[2])&&(t=[t[0]]),Je(n,ue(t,1),[])}),ch=Fl||function(){return re.Date.now()},lh=iu(function(n,t,r){var e=pn;if(r.length){var u=P(r,ji(lh));e|=dn}return hi(n,e,t,r,u)}),sh=iu(function(n,t,r){var e=pn|vn;if(r.length){var u=P(r,ji(sh));e|=dn}return hi(t,e,n,r,u)}),hh=iu(function(n,t){return Hr(n,1,t)}),ph=iu(function(n,t,r){return Hr(n,za(t)||0,r)});Bf.Cache=hr;var vh=ks(function(n,t){t=1==t.length&&mh(t[0])?l(t[0],E(Ai())):l(ue(t,1),E(Ai()));var e=t.length;return iu(function(u){for(var i=-1,o=Yl(u.length,e);++i<o;)u[i]=t[i].call(this,u[i]);return r(n,this,u)})}),_h=iu(function(n,t){var r=P(t,ji(_h));return hi(n,dn,X,t,r)}),gh=iu(function(n,t){var r=P(t,ji(gh));return hi(n,bn,X,t,r)}),yh=bi(function(n,t){return hi(n,mn,X,X,X,t)}),dh=ai(xe),bh=ai(function(n,t){return n>=t}),wh=ze(function(){return arguments}())?ze:function(n){return la(n)&&ml.call(n,"callee")&&!Cl.call(n,"callee")},mh=fl.isArray,xh=ae?E(ae):Ee,jh=Kl||Kc,Ah=ce?E(ce):Se,kh=le?E(le):Ce,Oh=se?E(se):Te,Ih=he?E(he):$e,Rh=pe?E(pe):De,zh=ai(Pe),Eh=ai(function(n,t){return n<=t}),Sh=Zu(function(n,t){if(Pi(t)||Yf(t))return void Fu(t,Za(t),n);for(var r in t)ml.call(t,r)&&Wr(n,r,t[r])}),Wh=Zu(function(n,t){Fu(t,Ka(t),n)}),Lh=Zu(function(n,t,r,e){Fu(t,Ka(t),n,e)}),Ch=Zu(function(n,t,r,e){Fu(t,Za(t),n,e)}),Uh=bi(Mr),Bh=iu(function(n){return n.push(X,pi),r(Lh,X,n)}),Th=iu(function(n){return n.push(X,vi),r(Nh,X,n)}),$h=ri(function(n,t,r){n[t]=r},Lc(Uc)),Dh=ri(function(n,t,r){ml.call(n,t)?n[t].push(r):n[t]=[r]},Ai),Mh=iu(Re),Fh=Zu(function(n,t,r){Ve(n,t,r)}),Nh=Zu(function(n,t,r,e){Ve(n,t,r,e)}),Ph=bi(function(n,t){var r={};if(null==n)return r;var e=!1;t=l(t,function(t){return t=Ou(t,n),e||(e=t.length>1),t}),Fu(n,mi(n),r),e&&(r=Nr(r,an|cn|ln,_i));for(var u=t.length;u--;)du(r,t[u]);return r}),qh=bi(function(n,t){return null==n?{}:Ye(n,t)}),Zh=si(Za),Kh=si(Ka),Vh=Ju(function(n,t,r){return t=t.toLowerCase(),n+(r?cc(t):t)}),Gh=Ju(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Hh=Ju(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Jh=Hu("toLowerCase"),Yh=Ju(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Qh=Ju(function(n,t,r){return n+(r?" ":"")+np(t)}),Xh=Ju(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),np=Hu("toUpperCase"),tp=iu(function(n,t){try{return r(n,X,t)}catch(n){return ua(n)?n:new cl(n)}}),rp=bi(function(n,t){return u(t,function(t){t=ro(t),Tr(n,t,lh(n[t],n))}),n}),ep=ni(),up=ni(!0),ip=iu(function(n,t){return function(r){return Re(r,n,t)}}),op=iu(function(n,t){return function(r){return Re(n,r,t)}}),fp=ui(l),ap=ui(o),cp=ui(v),lp=fi(),sp=fi(!0),hp=ei(function(n,t){return n+t},0),pp=li("ceil"),vp=ei(function(n,t){return n/t},1),_p=li("floor"),gp=ei(function(n,t){return n*t},1),yp=li("round"),dp=ei(function(n,t){return n-t},0);return K.after=zf,K.ary=Ef,K.assign=Sh,K.assignIn=Wh,K.assignInWith=Lh,K.assignWith=Ch,K.at=Uh,K.before=Sf,K.bind=lh,K.bindAll=rp,K.bindKey=sh,K.castArray=qf,K.chain=nf,K.chunk=oo,K.compact=fo,K.concat=ao,K.cond=Sc,K.conforms=Wc,K.constant=Lc,K.countBy=th,K.create=La,K.curry=Wf,K.curryRight=Lf,K.debounce=Cf,K.defaults=Bh,K.defaultsDeep=Th,K.defer=hh,K.delay=ph,K.difference=Ts,K.differenceBy=$s,K.differenceWith=Ds,K.drop=co,
K.dropRight=lo,K.dropRightWhile=so,K.dropWhile=ho,K.fill=po,K.filter=hf,K.flatMap=pf,K.flatMapDeep=vf,K.flatMapDepth=_f,K.flatten=go,K.flattenDeep=yo,K.flattenDepth=bo,K.flip=Uf,K.flow=ep,K.flowRight=up,K.fromPairs=wo,K.functions=Ma,K.functionsIn=Fa,K.groupBy=uh,K.initial=jo,K.intersection=Ms,K.intersectionBy=Fs,K.intersectionWith=Ns,K.invert=$h,K.invertBy=Dh,K.invokeMap=ih,K.iteratee=Bc,K.keyBy=oh,K.keys=Za,K.keysIn=Ka,K.map=bf,K.mapKeys=Va,K.mapValues=Ga,K.matches=Tc,K.matchesProperty=$c,K.memoize=Bf,K.merge=Fh,K.mergeWith=Nh,K.method=ip,K.methodOf=op,K.mixin=Dc,K.negate=Tf,K.nthArg=Nc,K.omit=Ph,K.omitBy=Ha,K.once=$f,K.orderBy=wf,K.over=fp,K.overArgs=vh,K.overEvery=ap,K.overSome=cp,K.partial=_h,K.partialRight=gh,K.partition=fh,K.pick=qh,K.pickBy=Ja,K.property=Pc,K.propertyOf=qc,K.pull=Ps,K.pullAll=Ro,K.pullAllBy=zo,K.pullAllWith=Eo,K.pullAt=qs,K.range=lp,K.rangeRight=sp,K.rearg=yh,K.reject=jf,K.remove=So,K.rest=Df,K.reverse=Wo,K.sampleSize=kf,K.set=Qa,K.setWith=Xa,K.shuffle=Of,K.slice=Lo,K.sortBy=ah,K.sortedUniq=Mo,K.sortedUniqBy=Fo,K.split=wc,K.spread=Mf,K.tail=No,K.take=Po,K.takeRight=qo,K.takeRightWhile=Zo,K.takeWhile=Ko,K.tap=tf,K.throttle=Ff,K.thru=rf,K.toArray=ka,K.toPairs=Zh,K.toPairsIn=Kh,K.toPath=Yc,K.toPlainObject=Ea,K.transform=nc,K.unary=Nf,K.union=Zs,K.unionBy=Ks,K.unionWith=Vs,K.uniq=Vo,K.uniqBy=Go,K.uniqWith=Ho,K.unset=tc,K.unzip=Jo,K.unzipWith=Yo,K.update=rc,K.updateWith=ec,K.values=uc,K.valuesIn=ic,K.without=Gs,K.words=Ec,K.wrap=Pf,K.xor=Hs,K.xorBy=Js,K.xorWith=Ys,K.zip=Qs,K.zipObject=Qo,K.zipObjectDeep=Xo,K.zipWith=Xs,K.entries=Zh,K.entriesIn=Kh,K.extend=Wh,K.extendWith=Lh,Dc(K,K),K.add=hp,K.attempt=tp,K.camelCase=Vh,K.capitalize=cc,K.ceil=pp,K.clamp=oc,K.clone=Zf,K.cloneDeep=Vf,K.cloneDeepWith=Gf,K.cloneWith=Kf,K.conformsTo=Hf,K.deburr=lc,K.defaultTo=Cc,K.divide=vp,K.endsWith=sc,K.eq=Jf,K.escape=hc,K.escapeRegExp=pc,K.every=sf,K.find=rh,K.findIndex=vo,K.findKey=Ca,K.findLast=eh,K.findLastIndex=_o,K.findLastKey=Ua,K.floor=_p,K.forEach=gf,K.forEachRight=yf,K.forIn=Ba,K.forInRight=Ta,K.forOwn=$a,K.forOwnRight=Da,K.get=Na,K.gt=dh,K.gte=bh,K.has=Pa,K.hasIn=qa,K.head=mo,K.identity=Uc,K.includes=df,K.indexOf=xo,K.inRange=fc,K.invoke=Mh,K.isArguments=wh,K.isArray=mh,K.isArrayBuffer=xh,K.isArrayLike=Yf,K.isArrayLikeObject=Qf,K.isBoolean=Xf,K.isBuffer=jh,K.isDate=Ah,K.isElement=na,K.isEmpty=ta,K.isEqual=ra,K.isEqualWith=ea,K.isError=ua,K.isFinite=ia,K.isFunction=oa,K.isInteger=fa,K.isLength=aa,K.isMap=kh,K.isMatch=sa,K.isMatchWith=ha,K.isNaN=pa,K.isNative=va,K.isNil=ga,K.isNull=_a,K.isNumber=ya,K.isObject=ca,K.isObjectLike=la,K.isPlainObject=da,K.isRegExp=Oh,K.isSafeInteger=ba,K.isSet=Ih,K.isString=wa,K.isSymbol=ma,K.isTypedArray=Rh,K.isUndefined=xa,K.isWeakMap=ja,K.isWeakSet=Aa,K.join=Ao,K.kebabCase=Gh,K.last=ko,K.lastIndexOf=Oo,K.lowerCase=Hh,K.lowerFirst=Jh,K.lt=zh,K.lte=Eh,K.max=Xc,K.maxBy=nl,K.mean=tl,K.meanBy=rl,K.min=el,K.minBy=ul,K.stubArray=Zc,K.stubFalse=Kc,K.stubObject=Vc,K.stubString=Gc,K.stubTrue=Hc,K.multiply=gp,K.nth=Io,K.noConflict=Mc,K.noop=Fc,K.now=ch,K.pad=vc,K.padEnd=_c,K.padStart=gc,K.parseInt=yc,K.random=ac,K.reduce=mf,K.reduceRight=xf,K.repeat=dc,K.replace=bc,K.result=Ya,K.round=yp,K.runInContext=_,K.sample=Af,K.size=If,K.snakeCase=Yh,K.some=Rf,K.sortedIndex=Co,K.sortedIndexBy=Uo,K.sortedIndexOf=Bo,K.sortedLastIndex=To,K.sortedLastIndexBy=$o,K.sortedLastIndexOf=Do,K.startCase=Qh,K.startsWith=mc,K.subtract=dp,K.sum=il,K.sumBy=ol,K.template=xc,K.times=Jc,K.toFinite=Oa,K.toInteger=Ia,K.toLength=Ra,K.toLower=jc,K.toNumber=za,K.toSafeInteger=Sa,K.toString=Wa,K.toUpper=Ac,K.trim=kc,K.trimEnd=Oc,K.trimStart=Ic,K.truncate=Rc,K.unescape=zc,K.uniqueId=Qc,K.upperCase=Xh,K.upperFirst=np,K.each=gf,K.eachRight=yf,K.first=mo,Dc(K,function(){var n={};return oe(K,function(t,r){ml.call(K.prototype,r)||(n[r]=t)}),n}(),{chain:!1}),K.VERSION=nn,u(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){K[n].placeholder=K}),u(["drop","take"],function(n,t){Dt.prototype[n]=function(r){r=r===X?1:Jl(Ia(r),0);var e=this.__filtered__&&!t?new Dt(this):this.clone();return e.__filtered__?e.__takeCount__=Yl(r,e.__takeCount__):e.__views__.push({size:Yl(r,Cn),type:n+(e.__dir__<0?"Right":"")}),e},Dt.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),u(["filter","map","takeWhile"],function(n,t){var r=t+1,e=r==In||r==zn;Dt.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:Ai(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),u(["head","last"],function(n,t){var r="take"+(t?"Right":"");Dt.prototype[n]=function(){return this[r](1).value()[0]}}),u(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Dt.prototype[n]=function(){return this.__filtered__?new Dt(this):this[r](1)}}),Dt.prototype.compact=function(){return this.filter(Uc)},Dt.prototype.find=function(n){return this.filter(n).head()},Dt.prototype.findLast=function(n){return this.reverse().find(n)},Dt.prototype.invokeMap=iu(function(n,t){return"function"==typeof n?new Dt(this):this.map(function(r){return Re(r,n,t)})}),Dt.prototype.reject=function(n){return this.filter(Tf(Ai(n)))},Dt.prototype.slice=function(n,t){n=Ia(n);var r=this;return r.__filtered__&&(n>0||t<0)?new Dt(r):(n<0?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==X&&(t=Ia(t),r=t<0?r.dropRight(-t):r.take(t-n)),r)},Dt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Dt.prototype.toArray=function(){return this.take(Cn)},oe(Dt.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=K[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(K.prototype[t]=function(){var t=this.__wrapped__,o=e?[1]:arguments,f=t instanceof Dt,a=o[0],c=f||mh(t),l=function(n){var t=u.apply(K,s([n],o));return e&&h?t[0]:t};c&&r&&"function"==typeof a&&1!=a.length&&(f=c=!1);var h=this.__chain__,p=!!this.__actions__.length,v=i&&!h,_=f&&!p;if(!i&&c){t=_?t:new Dt(this);var g=n.apply(t,o);return g.__actions__.push({func:rf,args:[l],thisArg:X}),new Y(g,h)}return v&&_?n.apply(this,o):(g=this.thru(l),v?e?g.value()[0]:g.value():g)})}),u(["pop","push","shift","sort","splice","unshift"],function(n){var t=gl[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);K.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(mh(u)?u:[],n)}return this[r](function(r){return t.apply(mh(r)?r:[],n)})}}),oe(Dt.prototype,function(n,t){var r=K[t];if(r){var e=r.name+"",u=cs[e]||(cs[e]=[]);u.push({name:t,func:r})}}),cs[ti(X,vn).name]=[{name:"wrapper",func:X}],Dt.prototype.clone=Yt,Dt.prototype.reverse=Qt,Dt.prototype.value=Xt,K.prototype.at=nh,K.prototype.chain=ef,K.prototype.commit=uf,K.prototype.next=of,K.prototype.plant=af,K.prototype.reverse=cf,K.prototype.toJSON=K.prototype.valueOf=K.prototype.value=lf,K.prototype.first=K.prototype.head,Tl&&(K.prototype[Tl]=ff),K},be=de();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(re._=be,ClickAndPointLib.define('lodash',[],function(){return be})):ue?((ue.exports=be)._=be,ee._=be):re._=be}).call(this);
//# sourceMappingURL=lodash.min.js.map;
ClickAndPointLib.define('utility/read-file.js',[
    'jquery'
], function($) {
    var readFile = (path) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                async: true,
                url: path,
                crossDomain: true,
                success: (data) => {
                    resolve(data);
                },
                error: reject,
            });
        });
    }

    var readFileAsJson = (path) => {
        return readFile(path)
        .then((data) => {
            if (data !== null && typeof data === 'object' && typeof data !== 'string') {
                return data;
            }
            return JSON.parse(data);
        });
    }


    return {
        readFileAsJson: readFileAsJson,
    }
});

ClickAndPointLib.define('utility/check-data.js',[
    'lodash'
], function(_) {
    var checkKeys = (data, keys, exception=false, origin='') => {
        _.each(keys, (key) => {
            var value = _.get(data, key, null);
            if (value === null || value === '' ) {
                if (exception) {
                    throw `[${origin}] Data is missing "${key}" key.`;
                } else {
                    return false;
                }
            }
        });

        return true;
    }

    return {
        checkKeys: checkKeys,
    }
});

ClickAndPointLib.define('app/renderer.js',[
],
() => {
    var Renderer = function($canvas, canvasContext) {
        var myself = self;
        var backgroundRatio = {
            width: 1,
            height: 1,
        };
        var offset = {
            x: 0,
            y: 0,
        }

        this.setBackgroundRatio = (width, height) => {
            backgroundRatio.width = width;
            backgroundRatio.height = height;
        }

        this.get$Canvas = () => {
            return $canvas;
        }

        this.getCanvas = () => {
            return canvas;
        }

        this.getContext = () => {
            return canvasContext;
        }

        this.convertCoordonateToBackground = (point) => {
            return {
                x: point.x * backgroundRatio.width + offset.x,
                y: point.y * backgroundRatio.height + offset.y,
            };
        }

        this.convertValueToBackground = (value) => {
            return value * backgroundRatio.width;
        }

        this.setOffset = (offsetX, offsetY) => {
            offset.x = offsetX;
            offset.y = offsetY;
        }

        this.getOffset = () => {
            return offset;
        }
    }

    return Renderer;
});

ClickAndPointLib.define('app/mouse.js',[
    '../utility/check-data.js',
],
(CheckData) => {
    var Mouse = function() {
        var myself = self;

        var x = null;
        var y = null;

        var isClicked = false;

        this.registerMouseMove = (newX, newY) => {
            x = newX;
            y = newY;
        }

        this.getX = () => {
            return x;
        }

        this.getY = () => {
            return y;
        }

        this.isInitialize = () => {
            return x !== null && y !== null;
        }

        this.registerClick = () => {
            isClicked = true;
        }
        this.registerRelease = () => {
            isClicked = false;
        }

        this.toString = () => {
            return `Mouse:(${x}, ${y})`;
        }

        var _setCursor = function(cursor) {
            document.body.style.cursor = cursor;
        }

        this.defaultCursor = () => {
            _setCursor('default');
        }

        this.updateCursor = (newCursor) => {
            _setCursor(newCursor);
        }
    }

    return Mouse;
});

ClickAndPointLib.define('app/location.js',[
    '../utility/check-data.js',
],
(CheckData) => {
    var Location = function(parent, data) {
        this.parent = parent;
        var myself = self;
        var shape = data.shape;

        this.getName = () => {
            return parent.getName() + ` - Location ${shape}`;
        }

        CheckData.checkKeys(
            data,
            [
                'description',
                'shape',
            ],
            true,
            this.getName()
        );

        var description = data.description;
        var colorInside = 'blue';
        var colorDefault = 'black';
        var wasDrawn = false;

        this.square = {
            dataCheck: () => {
                CheckData.checkKeys(
                    description,
                    [
                        'bottomRightCorner',
                        'bottomRightCorner.x',
                        'bottomRightCorner.y',
                        'topLeftCorner',
                        'topLeftCorner.x',
                        'topLeftCorner.y',
                    ],
                    true,
                    this.getName()
                );
                if (description.topLeftCorner.x >= description.bottomRightCorner.x) {
                    throw `[${this.getName()}] The topLeftCorner.x is bigger than bottomRightCorner.x`;
                }
                if (description.topLeftCorner.y >= description.bottomRightCorner.y) {
                    throw `[${this.getName()}] The topLeftCorner.y is bigger than bottomRightCorner.y`;
                }
            },
            draw: (renderer, color) => {
                var topLeftCorner = renderer.convertCoordonateToBackground(description.topLeftCorner);
                var bottomRightCorner = renderer.convertCoordonateToBackground(description.bottomRightCorner);
                var canvasContext = renderer.getContext();

                canvasContext.beginPath();
                canvasContext.rect(
                    topLeftCorner.x,
                    topLeftCorner.y,
                    bottomRightCorner.x - topLeftCorner.x,
                    bottomRightCorner.y - topLeftCorner.y,
                );

                canvasContext.lineWidth = 3;
                canvasContext.strokeStyle = color;
                canvasContext.stroke();

                return Promise.resolve({});
            },
            isInside: (renderer, mouse) => {
                if (!mouse.isInitialize()) {
                    return false;
                }
                var topLeftCorner = renderer.convertCoordonateToBackground(description.topLeftCorner);
                var bottomRightCorner = renderer.convertCoordonateToBackground(description.bottomRightCorner);
                return (
                    mouse.getX() <= bottomRightCorner.x && mouse.getX() >= topLeftCorner.x &&
                    mouse.getY() <= bottomRightCorner.y && mouse.getY() >= topLeftCorner.y
                );
            },
        };

        this.circle = {
            dataCheck: () => {
                CheckData.checkKeys(
                    description,
                    [
                        'center',
                        'center.x',
                        'center.y',
                        'radius',
                    ],
                    true,
                    this.getName()
                );
            },
            draw: (renderer, color) => {
                var center = renderer.convertCoordonateToBackground(description.center);
                var radius = renderer.convertValueToBackground(description.radius);
                var canvasContext = renderer.getContext();

                canvasContext.beginPath();
                canvasContext.arc(center.x, center.y, radius, 0, 2 * Math.PI, false);
                canvasContext.lineWidth = 3;
                canvasContext.strokeStyle = color;
                canvasContext.stroke();

                return Promise.resolve({});
            },
            isInside: (renderer, mouse) => {
                if (!mouse.isInitialize()) {
                    return false;
                }
                var center = renderer.convertCoordonateToBackground(description.center);
                var radius = renderer.convertValueToBackground(description.radius);
                return Math.pow(mouse.getX() - center.x, 2) + Math.pow(mouse.getY() - center.y, 2)
                    < Math.pow(radius, 2);
            },
        }

        this.icon = {
            dataCheck: () => {
                this.square.dataCheck();
                CheckData.checkKeys(
                    description,
                    [
                        'image',
                    ],
                    true,
                    this.getName()
                );
            },
            draw: (renderer, color) => {
                return new Promise((resolve) => {
                    var topLeftCorner = renderer.convertCoordonateToBackground(description.topLeftCorner);
                    var bottomRightCorner = renderer.convertCoordonateToBackground(description.bottomRightCorner);
                    var img = new Image();
                    var $canvas = renderer.get$Canvas();
                    var canvasContext = renderer.getContext();

                    img.onload = (source) => {
                        var originalWidth = source.target.naturalWidth;
                        var originalHeight = source.target.naturalHeight;
                        var originalRatio = originalWidth / originalHeight * 1.0;

                        canvasContext.drawImage(img,
                            topLeftCorner.x,
                            topLeftCorner.y,
                            bottomRightCorner.x - topLeftCorner.x,
                            bottomRightCorner.y - topLeftCorner.y,
                        );
                        resolve();
                    };
                    img.src = description.image;
                });
            },
            isInside: (renderer, mouse) => {
                return this.square.isInside(renderer, mouse);
            },
        }

        var handleUpdate = (renderer, mouse) => {
            var isInside = this[shape].isInside(renderer, mouse);
            return Promise.resolve()
            .then(() => {
                if (isInside) {
                    wasDrawn = true;
                    return this[shape].draw(renderer, colorInside);
                } else if (!parent.isHidding()) {
                    wasDrawn = true;
                    return this[shape].draw(renderer, colorDefault);
                } else {
                    var returnedData = {
                        needRedrawScene: wasDrawn,
                    };
                    wasDrawn = false;
                    return Promise.resolve(returnedData);
                }
            })
            .then((output) => {
                return _.merge(output, {
                    isInside: isInside,
                });
            });
        }

        this.render = (renderer, mouse) => {
            return handleUpdate(renderer, mouse);
        }

        this.handleCursorMove = (renderer, mouse) => {
            return handleUpdate(renderer, mouse);
        }

        this.handleClickDown = (renderer, mouse) => {
            var isInside = this[shape].isInside(renderer, mouse);
            return Promise.resolve({
                isInside: isInside,
            });
        }
        this.handleClickUp = (renderer, mouse) => {
            var isInside = this[shape].isInside(renderer, mouse);
            return Promise.resolve({
                isInside: isInside,
            });
        }

        this[shape].dataCheck();
    }

    return Location;
});

ClickAndPointLib.define('app/action.js',[
    'lodash',
    '../utility/check-data.js',
],
(_, CheckData) => {
    var Action = function(parent, key, data) {
        this.parent = parent;
        var myself = self;
        var game = null;
        var cursorWasChanged = false;

        this.getName = () => {
            return parent.getName() + ` - Action '${key}'`;
        }

        var getGame = () => {
            if (game) {
                return game;
            }
            var currentParent = parent;
            while (currentParent.parent) {
                currentParent = currentParent.parent;
            }
            game = currentParent;
            return getGame();
        }

        CheckData.checkKeys(
            data,
            [
                'type',
                'target',
            ],
            true,
            this.getName()
        );

        var type = data.type;
        var target = data.target;

        this.validType = {
            goto: {
                checkData: () => {
                    getGame().isValidSceneKey(target, true);
                },
                hoverCursor: data.hoverCursor || 'zoom-in',
                actClickDown: (renderer, mouse, isHover) => {
                    if (isHover) {
                        return Promise.resolve({
                            newScene: target,
                        });
                    }
                    return Promise.resolve({});
                },
                actClickUp: (renderer, mouse, isHover) => {
                    return Promise.resolve({});
                },
                shouldBeShown: () => { return true; }
            },
            take: {
                checkData: () => {
                    getGame().isValidItemKey(target, true);
                },
                hoverCursor: data.hoverCursor || 'pointer',
                actClickDown: (renderer, mouse, isHover) => {
                    if (isHover) {
                        return Promise.resolve({
                            takeItem: target,
                        });
                    }
                    return Promise.resolve({});
                },
                actClickUp: (renderer, mouse, isHover) => {
                    return Promise.resolve({});
                },
                shouldBeShown: () => {
                    return !getGame().isItemOwned(target);
                }
            },
            setVariable: {
                hoverCursor: null,
                checkData: () => {
                    CheckData.checkKeys(
                        data,
                        [
                            'value',
                        ],
                        true,
                        this.getName()
                    );
                    getGame().isValidVariableName(target, true);
                },
                actClickDown: (renderer, mouse, isHover) => {
                    if (isHover) {
                        return Promise.resolve({
                            setVariable: {
                                target: target,
                                value: data.value,
                            }
                        });
                    }
                    return Promise.resolve({});
                },
                actClickUp: (renderer, mouse, isHover) => {
                    return Promise.resolve({});
                },
                shouldBeShown: () => {
                    return false;
                }
            }
        };

        var handleUpdate = (renderer, mouse, isHover) => {
            if (isHover && this.validType[type].hoverCursor !== null) {
                mouse.updateCursor(this.validType[type].hoverCursor);
                cursorWasChanged = true;
            }
            var data = {
                needDefaultCursor: !isHover && cursorWasChanged,
                isActive: cursorWasChanged && isHover,
            };
            if (!isHover) {
                cursorWasChanged = false;
            }

            return Promise.resolve(data);
        }

        this.shouldBeShown = () => {
            return this.validType[type].shouldBeShown();
        }

        this.render = (renderer, mouse, isHover) => {
            return handleUpdate(renderer, mouse, isHover);
        }

        this.handleCursorMove = (renderer, mouse, isHover) => {
            return handleUpdate(renderer, mouse, isHover);
        }

        this.handleClickDown = (renderer, mouse, isHover) => {
            return this.validType[type].actClickDown(renderer, mouse, isHover);
        }
        this.handleClickUp = (renderer, mouse, isHover) => {
            return this.validType[type].actClickUp(renderer, mouse, isHover);
        }

        if (!_.has(this.validType, type)) {
            throw `The action type '${type}' is not valid.`;
        }

        this.validType[type].checkData();
    }

    return Action;
});

ClickAndPointLib.define('app/interaction.js',[
    'lodash',
    '../utility/check-data.js',
    './location.js',
    './action.js',
],
(_, CheckData, Location, Action) => {
    var Interaction = function(parent, key, data) {
        this.parent = parent;
        var myself = self;
        var game = null;

        this.getName = () => {
            return parent.getName() + ` - Interaction '${key}'`;
        }

        var getGame = () => {
            if (game) {
                return game;
            }
            var currentParent = parent;
            while (currentParent.parent) {
                currentParent = currentParent.parent;
            }
            game = currentParent;
            return getGame();
        }

        CheckData.checkKeys(
            data,
            [
                'location',
                'actions',
                'hidden',
            ],
            true,
            this.getName()
        );

        var location = new Location(this, data.location);
        var actions = _.flatMap(data.actions, (action, index) => {
            if (typeof action === 'string') {
                var actions = getGame().getActions(action);
                return actions;
            } else {
                return new Action(this, index, action);
            }
        });

        var dynamicCondition = data.if
        ? () => {
            return !!getGame().getVariable(data.if);
        }
        : () => { return true; }

        this.isHidding = () => {
            return data.hidden;
        }

        this.exists = () => {
            return dynamicCondition() && _.reduce(actions, function(acc, action) {
                return acc || action.shouldBeShown();
            }, false);
        }

        var handleUpdate = (renderer, mouse, methodName) => {
            if (!this.exists()) {
                return Promise.resolve({});
            }

            return location[methodName](renderer, mouse)
            .then((outputFromLocation) => {
                var promises = _.map(actions, (action) => {
                    return action[methodName](renderer, mouse, outputFromLocation.isInside);
                });
                return Promise.all(promises)
                .then((output) => {
                    return Promise.resolve(_.concat(outputFromLocation, output));
                });
            });
        }

        this.render = (renderer, mouse) => {
            return handleUpdate(renderer, mouse, 'render');
        }
        this.handleCursorMove = (renderer, mouse) => {
            return handleUpdate(renderer, mouse, 'handleCursorMove');
        }
        this.handleClickDown = (renderer, mouse) => {
            return handleUpdate(renderer, mouse, 'handleClickDown');
        }
        this.handleClickUp = (renderer, mouse) => {
            return handleUpdate(renderer, mouse, 'handleClickUp');
        }
    }

    return Interaction;
});

ClickAndPointLib.define('app/scene.js',[
    'lodash',
    '../utility/check-data.js',
    './interaction.js',
],
(_, CheckData, Interaction) => {
    var Scene = function(parent, key, data) {
        this.parent = parent;
        var myself = self;

        this.getName = () => {
            if (parent) {
                return parent.getName() + ` - Scene '${key}'`;
            } else {
                return `Scene '${key}'`;
            }
        }

        CheckData.checkKeys(
            data,
            [
                'name',
                'backgroundImg',
                'interactions',
            ],
            true,
            this.getName()
        );

        var name = data.name;
        var key = key;
        var backgroundImg = data.backgroundImg;
        var interactions = _.map(data.interactions, (interaction, index) => {
            return new Interaction(this, index, interaction);
        });

        this.getImageBackground = () => {
            return backgroundImg;
        }

        var renderBackground = (renderer) => {
            return new Promise((resolve, reject) => {
                var img = new Image();
                var $canvas = renderer.get$Canvas();
                var canvasContext = renderer.getContext();

                img.onload = (source) => {
                    var originalWidth = source.target.naturalWidth;
                    var originalHeight = source.target.naturalHeight;
                    var originalRatio = originalWidth / originalHeight * 1.0;

                    var fullHeight = $canvas.height();
                    var height = fullHeight;
                    var fullWidth =  $canvas.width();
                    var width = fullWidth;

                    var ratioWidth = originalWidth / width;
                    var ratioHeight = originalHeight / height;
                    if (ratioWidth > ratioHeight) {
                        height = width / originalRatio;
                    } else {
                        width = height * originalRatio;
                    }

                    renderer.setBackgroundRatio(
                        width / originalWidth,
                        height / originalHeight,
                    );

                    var cornerX = 0;
                    var cornerY = 0;

                    if (height < fullHeight) {
                        cornerY = (fullHeight - height) / 2;
                    }
                    if (width < fullWidth) {
                        cornerX = (fullWidth - width) / 2;
                    }

                    renderer.setOffset(cornerX, cornerY);

                    canvasContext.drawImage(img, cornerX, cornerY, width, height);
                    resolve();
                };
                img.src = backgroundImg;
            });
        }

        var handleUpdate = (renderer, mouse, methodName) => {
            var promises = _.map(interactions, (interaction) => {
                return interaction[methodName](renderer, mouse);
            });
            return Promise.all(promises)
            .then((output) => {
                output = _.flatten(output);
                // None is active and at least one was
                if (_.every(output, (a) => { return !a.isActive; }) &&
                    _.some(output, (a) => {return a.needDefaultCursor;})) {
                    mouse.defaultCursor();
                }

                // at least one is TRUE
                if (_.some(output, (a) => {return a.needRedrawScene;})) {
                    return this.render(renderer, mouse);
                } else {
                    return Promise.resolve(output);
                }
            });;
        }

        this.render = (renderer, mouse) => {
            return renderBackground(renderer)
            .then(() => {
                return handleUpdate(renderer, mouse, 'render');
            })

        }

        this.handleCursorMove = (renderer, mouse) => {
            return handleUpdate(renderer, mouse, 'handleCursorMove');
        }

        this.handleClickDown = (renderer, mouse) => {
            var promises = _.map(interactions, (interaction) => {
                return interaction.handleClickDown(renderer, mouse);
            });
            return Promise.all(promises)
        }

        this.handleClickUp = (renderer, mouse) => {
            var promises = _.map(interactions, (interaction) => {
                return interaction.handleClickUp(renderer, mouse);
            });
            return Promise.all(promises)
        }
    }

    return Scene;
});

ClickAndPointLib.define('app/item.js',[
    '../utility/check-data.js',
],
(CheckData) => {
    var Item = function(parent, key, data) {
        this.parent = parent;
        var myself = self;
        var game = null;

        this.getName = () => {
            return parent.getName() + ` - Item '${key}'`;
        }

        var getGame = () => {
            if (game) {
                return game;
            }
            var currentParent = parent;
            while (currentParent.parent) {
                currentParent = currentParent.parent;
            }
            game = currentParent;
            return getGame();
        }

        CheckData.checkKeys(
            data,
            [
                'description',
                'icon',
            ],
            true,
            this.getName()
        );
    }

    return Item;
});

ClickAndPointLib.define('app/game',[
    'jquery',
    'lodash',
    '../utility/read-file.js',
    '../utility/check-data.js',
    './renderer.js',
    './mouse.js',
    './scene.js',
    './action.js',
    './item.js',
],
($, _, ReadFile, CheckData, Renderer, Mouse, Scene, Action, Item) => {
    var Game = function(sourceFile, canvas) {
        var myself = self;
        var $canvas = null;
        this.renderer = null;

        if (canvas) {
            var canvas = canvas;
            $canvas = $(canvas);
            var canvasContext = canvas.getContext('2d');
            this.renderer = new Renderer($canvas, canvasContext);
        }

        var offsetX, offsetY;

        var backgroundColor = null;

        this.mouse = new Mouse();

        this.sourceFile = sourceFile;
        this.sourceData = null;
        this.scenes = {};
        this.globalActions = {};
        this.currentScene = null;
        this.items = {};
        this.variables = {};

        this.getName = () => {
            return 'MainGame';
        }

        this.getActions = (actionName) => {
            var result = _.has(this.globalActions, actionName);

            if (!result) {
                throw `[MISSING ACTION] The action '${actionName}' cannot be find.`;
            }

            return this.globalActions[actionName];
        }

        this.start = () => {
            return ReadFile.readFileAsJson(sourceFile)
            .then((data) => {
                this.sourceData = data;

                CheckData.checkKeys(
                    this.sourceData,
                    [
                        'startScene',
                        'scenes',
                        'items',
                        'globalActions',
                        'variables',
                    ],
                    true,
                    this.getName()
                );

                backgroundColor = this.sourceData.backgroundColor || 'black';

                // init actions
                _.each(this.sourceData.globalActions, (actionData, key) => {
                    CheckData.checkKeys(actionData, ['actions'], true,
                        this.getName() + ` - globalActions - ${key}`);

                    this.globalActions[key] = [];
                });

                // init scenes
                _.each(this.sourceData.scenes, (sceneData, key) => {
                    this.scenes[key] = {};
                });

                // Init Items
                _.each(this.sourceData.items, (item, key) => {
                    this.items[key] = {};
                });

                // init variables
                _.each(this.sourceData.variables, (variable, key) => {
                    this.variables[key] = {};
                });


                // create Global Actions
                 _.each(this.sourceData.globalActions, (actionData, key) => {
                    _.each(actionData.actions, (action, index) => {
                        this.globalActions[key].push(new Action(this, `${key}-${index}` ,action));
                    });
                });
                ////

                // Create scenes
                _.each(this.sourceData.scenes, (sceneData, key) => {
                    this.scenes[key] = new Scene(this, key, sceneData);
                });
                CheckData.checkKeys(this.scenes, [this.sourceData.startScene], true,
                    `The scenes are missing first scene named '${this.sourceData.startScene}'`);
                ////

                // Create items
                _.each(this.sourceData.items, (item, key) => {
                    this.items[key] = new Item(this, key, item);
                });

                // create variables
                _.each(this.sourceData.variables, (variable, key) => {
                    this.variables[key] = variable;
                });

                return changeScene(this.sourceData.startScene)
                .then((output) => {
                    return render();
                })
                .then(() => {
                    $(window).resize(_.debounce(render, 500, {
                        maxWait: 1000,
                    }));

                    if ($canvas) {
                        $canvas.mousemove(_.debounce(handleCursorMove, 150, {
                            maxWait: 200,
                        }));
                        $canvas.mousedown(handleClickDown);
                        $canvas.mouseup(handleClickUp);
                    }
                });
            });
        };

        this.isValidSceneKey = (sceneKey, raise=false) => {
            var result = _.has(this.scenes, sceneKey);

            if (!result && raise) {
                throw `[MISSING SCENE] The scene '${sceneKey}' cannot be find.`;
            }

            return result;
        }

        this.isValidItemKey = (itemKey, raise=false) => {
            var result = _.has(this.items, itemKey);

            if (!result && raise) {
                throw `[MISSING ITEMS] The item '${itemKey}' cannot be find.`;
            }

            return result;
        }

        this.isValidVariableName = (varName, raise=false) => {
            var result = _.has(this.variables, varName);

            if (!result && raise) {
                throw `[MISSING VARIABLE] The variable '${varName}' cannot be find.`;
            }

            return result;
        }

        this.isItemOwned = (itemKey) => {
            this.isValidItemKey(itemKey, true);
            return this.items[itemKey].owned;
        }

        this.getVariable = (varName) => {
            this.isValidVariableName(varName, true);
            return this.variables[varName];
        }

        var resetCanvas = () => {
            var canvas = this.renderer.getCanvas();
            var context = this.renderer.getContext();
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = backgroundColor;
            context.fillRect(0, 0, canvas.width, canvas.height);
        }

        var changeScene = (sceneKey) => {
            this.isValidSceneKey(sceneKey, true);

            this.currentScene = this.scenes[sceneKey];
            this.mouse.defaultCursor();
            return Promise.resolve({
                render: true,
            });
        }

        var takeItem = (itemKey) => {
            this.isValidItemKey(itemKey, true);
            this.items[itemKey].owned = true;
            this.mouse.updateCursor('default');
            return Promise.resolve({
                render: true,
            });
        }

        var updateVariable = (varName, varValue) => {
            this.variables[varName] = varValue;
            return Promise.resolve({
                render: true,
            });
        }

        var render = () => {
            if (!this.renderer) {
                return Promise.reject('Renderer is not defined');
            }

            resetCanvas();
            var boundingBox = canvas.getBoundingClientRect();
            offsetX = boundingBox.left;
            offsetY = boundingBox.top;

            return this.currentScene.render(this.renderer, this.mouse);
        }

        var updateMousePosition = (e) => {
            mouseX = parseInt(e.clientX - offsetX);
            mouseY = parseInt(e.clientY - offsetY);
            this.mouse.registerMouseMove(mouseX, mouseY);
        }

        var handleCursorMove = (e) => {
            e.preventDefault();
            e.stopPropagation();

            updateMousePosition(e);
            return this.currentScene.handleCursorMove(this.renderer, this.mouse);
        }

        var handleClickDown = (e) => {
            e.preventDefault();
            e.stopPropagation();

            updateMousePosition(e);
            this.mouse.registerClick();
            return this.currentScene.handleClickDown(this.renderer, this.mouse)
            .then((output) => {
                output = _.flatten(output);
                var newScene = _.find(output, 'newScene');
                var takenItems = _.filter(output, 'takeItem');
                var updateVariables = _.filter(output, 'setVariable');

                var promises = [];

                if (newScene) {
                    promises.push(changeScene(newScene.newScene));
                }
                if (takenItems && takenItems.length > 0 ) {
                    promises = _.concat(promises, _.map(takenItems, (takenItem) => {
                        return takeItem(takenItem.takeItem);
                    }));
                }
                if (updateVariables && updateVariables.length > 0) {
                    promises = _.concat(promises, _.map(updateVariables, (updateVar) => {
                        return updateVariable(
                            updateVar.setVariable.target,
                            updateVar.setVariable.value
                        );
                    }));
                }
                return Promise.all(promises);
            })
            .then((outputs) => {
                var needRender = _.find(outputs, 'render');

                if (needRender) {
                    return render();
                }

                return Promise.resolve();
            });
        }

        var handleClickUp = (e) => {
            e.preventDefault();
            e.stopPropagation();

            updateMousePosition(e);
            this.mouse.registerRelease();
            return this.currentScene.handleClickUp(this.renderer, this.mouse);
        }
    }

    return Game;
});

}());