!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.trackEvent=function(t,e,n){"undefined"!=typeof ga&&ga("gtag_UA_121612479_1.send",{hitType:"event",eventCategory:t,eventAction:e,eventLabel:n});if((0,o.getUser)())(0,o.postActivity)((0,o.getUser)(),t,e,n);else{var r={};r.category=t,r.action=e,r.label=n;var i=[];(0,o.getLocalActivity)()&&(i=JSON.parse((0,o.getLocalActivity)())),i.push(r),(0,o.setLocalActivity)(JSON.stringify(i))}};var o=n(2)},function(t,e,n){"use strict";var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(o=window)}t.exports=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getUser=i,e.getLocalActivity=a,e.setUser=s,e.setLocalActivity=function(t){localStorage.setItem("coProcureActivity",t)},e.showIdentityModal=function(t){c({title:'<i class="material-icons">lock</i> Unlock access to thousands of contracts',body:'<p>Enter your government email address to immediately get full free access - including contract downloads.</p>\n      <form method="post" action="">\n        <label>\n          <span class="field-description">Your email address</span>\n          <input type="text" name="email">\n        </label>\n        <button type="submit" class="add-email">Submit</button>\n      </form>',close:!1,contractId:t})},e.showContactVendorModal=function(t){c({title:"Contact Vendor",body:'<form method="post" action="">\n        <label>\n          <span class="field-description">What information do you need from this vendor?</span>\n          <textarea name="purchase-info"></textarea>\n        </label>\n        <button type="submit" class="contact-vendor">Submit</button>\n      </form>',close:!1,contractId:t})},e.showAdditionalDocsModal=function(t){c({title:"Additional Documents",body:'<form method="post" action="">\n        <label>\n          <span class="field-description">Thanks for letting us know that you\'d like some additional documentation for this record. What documents would you like to request? Contract, bid tabulation, bid solicitation, amendments, other (please explain)</span>\n          <textarea name="additional-documents"></textarea>\n        </label>\n        <button type="submit" class="additional-documents">Submit</button>\n      </form>',close:!1,contractId:t})},e.postActivity=l;var o=n(0),r=n(3);function i(){var t=localStorage.getItem("coProcureUser");return t||!1}function a(){var t=localStorage.getItem("coProcureActivity");return t||!1}function s(t){localStorage.setItem("coProcureUser",t)}function c(t){var e='<div class="js-identityModal modal fade" tabindex="-1" role="dialog">\n    <div class="modal-dialog" role="document">\n      <div class="modal-content">\n        <div class="modal-header">\n          <h5 class="modal-title">'+t.title+'</h5>\n        </div>\n        <div class="modal-body">\n          '+t.body+'\n          <input type="hidden" class="contractId" name="contractId" value="'+t.contractId+'">\n        </div>\n      </div>\n    </div>\n  </div>';document.body.insertAdjacentHTML("beforeend",'<div class="modal-backdrop fade"></div>'),document.body.insertAdjacentHTML("beforeend",e),setTimeout(function(){document.querySelector(".js-identityModal .modal-dialog").classList.add("show")},50),document.querySelector(".js-identityModal button.add-email")&&document.querySelector(".js-identityModal button.add-email").addEventListener("click",function(e){e.preventDefault(),e.stopPropagation();var n=document.querySelector('.modal-dialog form input[name="email"').value;if(n.indexOf("@")>-1){fetch("https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n})}).then(function(t){return t.text()}).then(function(t){console.log(t)}),s(n),(0,o.trackEvent)("user","login",t.contractId);var r=[];a()&&(r=JSON.parse(a())),r.forEach(function(t){l(t.category,t.action,t.label)}),document.querySelector(".modal-backdrop").remove(),document.querySelector(".js-identityModal").remove(),localStorage.removeItem("coProcureActivity")}else document.querySelector('.modal-dialog form input[name="email"').style.border="solid 2px red"}),document.querySelector(".js-identityModal button.contact-vendor")&&document.querySelector(".js-identityModal button.contact-vendor").addEventListener("click",function(e){e.preventDefault(),e.stopPropagation();var n=i(),r=document.querySelector('textarea[name="purchase-info"]').value,a=document.querySelector("input.contractId").value;fetch("https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/vendor-contact",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,requestType:"Vendor contact request",description:r,contract:a})}).then(function(t){return t.text()}).then(function(t){console.log(t),document.querySelector(".modal-backdrop").remove(),document.querySelector(".js-identityModal").remove()}),(0,o.trackEvent)("user","contact-vendor",t.contractId)}),document.querySelector(".js-identityModal button.additional-documents")&&document.querySelector(".js-identityModal button.additional-documents").addEventListener("click",function(e){e.preventDefault(),e.stopPropagation();var n=i(),r=document.querySelector('textarea[name="additional-documents"]').value,a=document.querySelector("input.contractId").value;fetch("https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/vendor-contact",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,requestType:"Request for additional documents",description:r,contract:a})}).then(function(t){return t.text()}).then(function(t){console.log(t),document.querySelector(".modal-backdrop").remove(),document.querySelector(".js-identityModal").remove()}),(0,o.trackEvent)("user","additional-documents",t.contractId)}),document.querySelector(".modal").addEventListener("click",function(t){if(t.preventDefault(),!(0,r.checkParents)(t,"modal-dialog")){document.querySelector(".modal-backdrop").remove(),document.querySelector(".js-identityModal").remove();var e=document.querySelector(".expandable-contract.flipped"),n=e.dataset.hitId,o=document.querySelector('.contracts[data-hit-id="'+n+'"]');e.classList.remove("flipped"),o.style.display="none"}})}function l(t,e,n,o){var r={email:t,category:e,action:n,label:o,userAgent:navigator.userAgent,screenSize:window.innerWidth+" "+window.innerHeight};console.log(r);fetch("https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/activity",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(function(t){return t.text()}).then(function(t){console.log(t)})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.checkParents=function(t,e){var n=t.target;for(;n;){if(n.classList&&n.classList.length>0){var o=n.classList;if(o.contains(e))return n}n=n.parentNode}return!1}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){return e.reject(n)})})}},function(t,e,n){"use strict";n(6),n(7),n(8),n(13);var o=n(14),r=n(16),i=n(17),a=n(0);document.getElementById("submit-search").addEventListener("click",function(t){t.preventDefault(),window.highlightItem="",window.reverseSort="",getResults(!1,0),this.classList.add("spinner")}),window.currentSort="",window.limit=!1,window.getResults=function(t,e){var n="";t&&""==document.querySelector('input[name="query"]').value&&(n="kcrpc%20and%20"),""!=document.querySelector('input[name="query"]').value&&(0,a.trackEvent)("search","query",document.querySelector('input[name="query"]').value);var r="https://9957n2ojug.execute-api.us-west-1.amazonaws.com/stage/?size=100&start="+e+"&q="+n+document.querySelector('input[name="query"]').value+window.currentSort;fetch(r).then(function(t){200===t.status?t.json().then(function(t){(0,o.displayResults)(t),document.getElementById("submit-search").classList.remove("spinner")}):console.log("Looks like there was a problem. Status Code: "+t.status)}).catch(function(t){console.log("Fetch Error :-S",t)})},document.querySelector(".search-results").addEventListener("click",function(t){(0,r.handleExpansion)(t),(0,i.handleSort)(t)}),window.location.pathname.indexOf("kcrpc")>-1&&(window.limit=!0,window.getResults(!0,0))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Headers=l,e.Request=y,e.Response=w,e.fetch=_;var o={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(o.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};function a(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function s(t){return"string"!=typeof t&&(t=String(t)),t}function c(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o.iterable&&(e[Symbol.iterator]=function(){return e}),e}function l(t){this.map={},t instanceof l?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function u(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function d(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function f(t){var e=new FileReader,n=d(e);return e.readAsArrayBuffer(t),n}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:o.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:o.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:o.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():o.arrayBuffer&&o.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||i(t))?this._bodyArrayBuffer=p(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o.blob&&(this.blob=function(){var t=u(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?u(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}),this.text=function(){var t,e,n,o=u(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,n=d(e),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),o=0;o<e.length;o++)n[o]=String.fromCharCode(e[o]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(t,e){t=a(t),e=s(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},l.prototype.delete=function(t){delete this.map[a(t)]},l.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},l.prototype.set=function(t,e){this.map[a(t)]=s(e)},l.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},l.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),c(t)},l.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),c(t)},l.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),c(t)},o.iterable&&(l.prototype[Symbol.iterator]=l.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function y(t,e){var n,o,r=(e=e||{}).body;if(t instanceof y){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(n=e.method||this.method||"GET",o=n.toUpperCase(),m.indexOf(o)>-1?o:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function v(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),o=n.shift().replace(/\+/g," "),r=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(r))}}),e}function w(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},h.call(y.prototype),h.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},w.error=function(){var t=new w(null,{status:0,statusText:""});return t.type="error",t};var b=[301,302,303,307,308];w.redirect=function(t,e){if(-1===b.indexOf(e))throw new RangeError("Invalid status code");return new w(null,{status:e,headers:{location:t}})};var g=e.DOMException=self.DOMException;try{new g}catch(t){e.DOMException=g=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack},g.prototype=Object.create(Error.prototype),g.prototype.constructor=g}function _(t,e){return new Promise(function(n,r){var i=new y(t,e);if(i.signal&&i.signal.aborted)return r(new g("Aborted","AbortError"));var a=new XMLHttpRequest;function s(){a.abort()}a.onload=function(){var t,e,o={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new l,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var n=t.split(":"),o=n.shift().trim();if(o){var r=n.join(":").trim();e.append(o,r)}}),e)};o.url="responseURL"in a?a.responseURL:o.headers.get("X-Request-URL");var r="response"in a?a.response:a.responseText;n(new w(r,o))},a.onerror=function(){r(new TypeError("Network request failed"))},a.ontimeout=function(){r(new TypeError("Network request failed"))},a.onabort=function(){r(new g("Aborted","AbortError"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&o.blob&&(a.responseType="blob"),i.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),i.signal&&(i.signal.addEventListener("abort",s),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",s)}),a.send(void 0===i._bodyInit?null:i._bodyInit)})}_.polyfill=!0,self.fetch||(self.fetch=_,self.Headers=l,self.Request=y,self.Response=w)},function(t,e,n){"use strict";window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})},function(t,e,n){"use strict";(function(t){var e=r(n(9)),o=r(n(4));function r(t){return t&&t.__esModule?t:{default:t}}var i=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("unable to locate global object")}();"Promise"in i?i.Promise.prototype.finally||(i.Promise.prototype.finally=o.default):i.Promise=e.default}).call(this,n(1))},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(4),a=(o=i)&&o.__esModule?o:{default:o};var s=setTimeout;function c(){}function l(t){if(!(this instanceof l))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],m(t,this)}function u(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,l._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var o;try{o=n(t._value)}catch(t){return void f(e.promise,t)}d(e.promise,o)}else(1===t._state?d:f)(e.promise,t._value)})):t._deferreds.push(e)}function d(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"===(void 0===e?"undefined":r(e))||"function"==typeof e)){var n=e.then;if(e instanceof l)return t._state=3,t._value=e,void p(t);if("function"==typeof n)return void m((o=n,i=e,function(){o.apply(i,arguments)}),t)}t._state=1,t._value=e,p(t)}catch(e){f(t,e)}var o,i}function f(t,e){t._state=2,t._value=e,p(t)}function p(t){2===t._state&&0===t._deferreds.length&&l._immediateFn(function(){t._handled||l._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)u(t,t._deferreds[e]);t._deferreds=null}function h(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function m(t,e){var n=!1;try{t(function(t){n||(n=!0,d(e,t))},function(t){n||(n=!0,f(e,t))})}catch(t){if(n)return;n=!0,f(e,t)}}l.prototype.catch=function(t){return this.then(null,t)},l.prototype.then=function(t,e){var n=new this.constructor(c);return u(this,new h(t,e,n)),n},l.prototype.finally=a.default,l.all=function(t){return new l(function(e,n){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(t);if(0===o.length)return e([]);var i=o.length;function a(t,s){try{if(s&&("object"===(void 0===s?"undefined":r(s))||"function"==typeof s)){var c=s.then;if("function"==typeof c)return void c.call(s,function(e){a(t,e)},n)}o[t]=s,0==--i&&e(o)}catch(t){n(t)}}for(var s=0;s<o.length;s++)a(s,o[s])})},l.resolve=function(t){return t&&"object"===(void 0===t?"undefined":r(t))&&t.constructor===l?t:new l(function(e){e(t)})},l.reject=function(t){return new l(function(e,n){n(t)})},l.race=function(t){return new l(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},l._immediateFn="function"==typeof t&&function(e){t(e)}||function(t){s(t,0)},l._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},e.default=l}).call(this,n(10).setImmediate)},function(t,e,n){"use strict";(function(t){var o=void 0!==t&&t||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(r.call(setTimeout,o,arguments),clearTimeout)},e.setInterval=function(){return new i(r.call(setInterval,o,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(o,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(11),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||void 0,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||void 0}).call(this,n(1))},function(t,e,n){"use strict";(function(t,e){!function(t,n){if(!t.setImmediate){var o,r,i,a,s,c=1,l={},u=!1,d=t.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(t);f=f&&f.setTimeout?f:t,"[object process]"==={}.toString.call(t.process)?o=function(t){e.nextTick(function(){h(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((i=new MessageChannel).port1.onmessage=function(t){h(t.data)},o=function(t){i.port2.postMessage(t)}):d&&"onreadystatechange"in d.createElement("script")?(r=d.documentElement,o=function(t){var e=d.createElement("script");e.onreadystatechange=function(){h(t),e.onreadystatechange=null,r.removeChild(e),e=null},r.appendChild(e)}):o=function(t){setTimeout(h,0,t)}:(a="setImmediate$"+Math.random()+"$",s=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(a)&&h(+e.data.slice(a.length))},t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),o=function(e){t.postMessage(a+e,"*")}),f.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return l[c]=r,o(c),c++},f.clearImmediate=p}function p(t){delete l[t]}function h(t){if(u)setTimeout(h,0,t);else{var e=l[t];if(e){u=!0;try{!function(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}(e)}finally{p(t),u=!1}}}}}("undefined"==typeof self?void 0===t?void 0:t:self)}).call(this,n(1),n(12))},function(t,e,n){"use strict";var o,r,i=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(t){if(o===setTimeout)return setTimeout(t,0);if((o===a||!o)&&setTimeout)return o=setTimeout,setTimeout(t,0);try{return o(t,0)}catch(e){try{return o.call(null,t,0)}catch(e){return o.call(this,t,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:a}catch(t){o=a}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var l,u=[],d=!1,f=-1;function p(){d&&l&&(d=!1,l.length?u=l.concat(u):f=-1,u.length&&h())}function h(){if(!d){var t=c(p);d=!0;for(var e=u.length;e;){for(l=u,u=[];++f<e;)l&&l[f].run();f=-1,e=u.length}l=null,d=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function y(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new m(t,e)),1!==u.length||d||c(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=y,i.addListener=y,i.once=y,i.off=y,i.removeListener=y,i.removeAllListeners=y,i.emit=y,i.prependListener=y,i.prependOnceListener=y,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){"use strict";[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}})})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.displayResults=function(t){var e=function(){var t=(new Date).getTimezoneOffset(),e=parseInt(Math.abs(t/60)),n=Math.abs(t%60),o=void 0;e<10&&(e="0"+e);n<10&&(n="0"+n);t<0?o="+"+e+":"+n:t>0?o="-"+e+":"+n:0==t&&(o="Z");return o}();window.trackEvent||(window.trackEvent=i.trackEvent);var n='\n  <ul class="results-list">\n    <li class="header">\n      <span class="contract-name js-sortable">\n        Contract name \n        <svg class="icon icon-caret icon-caret--down" id="icon--dropdown-carrot" viewBox="0 0 9.7667 6.7638" ><title>Dropdown Caret</title><path d="M5.5819,6.4285,9.5683,1.4552A.8953.8953,0,0,0,8.87,0H.8969A.8953.8953,0,0,0,.1984,1.4552L4.1848,6.4285A.8953.8953,0,0,0,5.5819,6.4285Z"></path></svg>\n      </span>\n      <span class="contract-expiration js-sortable">\n        Expiration \n        <svg class="icon icon-caret icon-caret--down" id="icon--dropdown-carrot" viewBox="0 0 9.7667 6.7638" ><title>Dropdown Caret</title><path d="M5.5819,6.4285,9.5683,1.4552A.8953.8953,0,0,0,8.87,0H.8969A.8953.8953,0,0,0,.1984,1.4552L4.1848,6.4285A.8953.8953,0,0,0,5.5819,6.4285Z"></path></svg>\n      </span>\n      <span class="contract-agency js-sortable">\n        Lead agency\n        <svg class="icon icon-caret icon-caret--down" id="icon--dropdown-carrot" viewBox="0 0 9.7667 6.7638" ><title>Dropdown Caret</title><path d="M5.5819,6.4285,9.5683,1.4552A.8953.8953,0,0,0,8.87,0H.8969A.8953.8953,0,0,0,.1984,1.4552L4.1848,6.4285A.8953.8953,0,0,0,5.5819,6.4285Z"></path></svg>\n      </span>\n      <span class="contract-vendor js-sortable">\n        Vendor\n        <svg class="icon icon-caret icon-caret--down" id="icon--dropdown-carrot" viewBox="0 0 9.7667 6.7638" ><title>Dropdown Caret</title><path d="M5.5819,6.4285,9.5683,1.4552A.8953.8953,0,0,0,8.87,0H.8969A.8953.8953,0,0,0,.1984,1.4552L4.1848,6.4285A.8953.8953,0,0,0,5.5819,6.4285Z"></path></svg>\n      </span>\n      <span class="contract-state js-sortable">\n        State\n        <svg class="icon icon-caret icon-caret--down" id="icon--dropdown-carrot" viewBox="0 0 9.7667 6.7638" ><title>Dropdown Caret</title><path d="M5.5819,6.4285,9.5683,1.4552A.8953.8953,0,0,0,8.87,0H.8969A.8953.8953,0,0,0,.1984,1.4552L4.1848,6.4285A.8953.8953,0,0,0,5.5819,6.4285Z"></path></svg>\n      </span>\n    </li>\n  '+t.hits.hit.map(function(t){if((0,o.isDate)(t.fields.expiration)&&t.fields.expiration<(new Date).toISOString())return"";var n=[];t.fields.contract_files&&(n=t.fields.contract_files);var r=null,i=null,s=null,c=null,l=null;return t.fields.amendments_files&&(r=t.fields.amendments_files),t.fields.pricing_files&&(i=t.fields.pricing_files),t.fields.bid_tabulation_files&&(s=t.fields.bid_tabulation_files),t.fields.bid_solicitation_files&&(c=t.fields.bid_solicitation_files),t.fields.other_docs_files&&(l=t.fields.other_docs_files),'\n    <li class="expandable-contract" data-hit-id="'+t.id+'">\n      <span class="contract-name">\n        <div>'+t.fields.title+'</div>\n        <div class="summary">'+(t.fields.summary&&"undefined"!=t.fields.summary?""+t.fields.summary:"")+'</div>\n      </span>\n      <span class="contract-expiration">\n        '+((0,o.isDate)(t.fields.expiration)?(t.fields.expiration.indexOf("Z")>-1&&(contractExpDate=t.fields.expiration.replace("Z",e)),new Date(contractExpDate).toLocaleDateString()):"")+'\n      </span>\n      <span class="contract-agency">'+(t.fields.buyer_lead_agency?""+t.fields.buyer_lead_agency:"")+'\n      </span>\n      <span class="contract-vendor">'+(t.fields.suppliers?""+t.fields.suppliers.toString():t.fields.vendor_info?""+t.fields.vendor_info.replace("undefined",""):"")+'</span>\n      <span class="contract-state">'+(t.fields.states?""+t.fields.states:"")+'</span>\n    </li>\n    <li class="contracts" data-hit-id="'+t.id+'" style="display: none;">\n      <div class="all-files">\n        <div class="files">\n          <p>Contract</p>\n          '+n.map(function(t){var e=JSON.parse(t);return'<div class="fileset">\n              <a href="'+e.url+'" target="_new" class="file-name-link">'+a(e.name)+"</a>\n            </div>"}).join("\n      ")+"\n        </div>\n        "+(r?'<div class="files">\n              <p>Amendments</p>\n              '+r.map(function(t){var e=JSON.parse(t);return'<div class="fileset">\n                  <a href="'+e.url+'" target="_new" class="file-name-link">'+a(e.name)+"</a>\n                </div>"}).join("\n      ")+"\n            </div>":"")+"\n        "+(i?'<div class="files">\n            <p>Pricing</p>\n            '+i.map(function(t){var e=JSON.parse(t);return'<div class="fileset">\n                <a href="'+e.url+'" target="_new" class="file-name-link">'+a(e.name)+"</a>\n              </div>"}).join("\n      ")+"\n            </div>":"")+"\n        "+(s?'<div class="files">\n            <p>Bid Tabulation</p>\n            '+s.map(function(t){var e=JSON.parse(t);return'<div class="fileset">\n                <a href="'+e.url+'" target="_new" class="file-name-link">'+a(e.name)+"</a>\n              </div>"}).join("\n      ")+"\n            </div>":"")+"\n        "+(c?'<div class="files">\n            <p>Bid Solicitation</p>\n            '+c.map(function(t){var e=JSON.parse(t);return'<div class="fileset">\n                <a href="'+e.url+'" target="_new" class="file-name-link">'+a(e.name)+"</a>\n              </div>"}).join("\n      ")+"\n            </div>":"")+"\n        "+(l?'<div class="files">\n            <p>Other Documents</p>\n            '+l.map(function(t){var e=JSON.parse(t);return'<div class="fileset">\n                <a href="'+e.url+'" target="_new" class="file-name-link">'+a(e.name)+"</a>\n              </div>"}).join("\n      ")+"\n            </div>":"")+'\n      </div>\n      <div class="buttons">\n        <button class="contact-vendor">Contact Vendor</button>\n        <button class="additional-documents">Request additional documents</button>\n      </div>\n    </li>'}).join("\n      ")+"\n  "+function(){var e=t.hits.start+1,n=e+99;t.hits.found<100&&(n=t.hits.found);var o="result";t.hits.found>1&&(o="results");var r="",i="";return t.hits.found>e+100&&(r="<a href=\"javascript:trackEvent('search','next','"+document.querySelector('input[name="query"]').value+"');getResults(false,"+(t.hits.start+100)+');">>></a>'),t.hits.start>0&&(i="<a href=\"javascript:trackEvent('search','previous','"+document.querySelector('input[name="query"]').value+"');getResults(false,"+(t.hits.start-100)+');"><<</a>'),'<li class="result-counter"><span style="margin: 0 20px 0 0;">'+i+"</span>  Showing "+e+" - "+n+" of "+t.hits.found+" "+o+'  <span style="margin: 0 0 0 20px;">'+r+"</span></li>\n  </ul>"}();document.querySelector(".search-results").innerHTML=n,window.highlightItem&&(document.querySelector(window.highlightItem).classList.add("highlit"),window.reverseSort&&document.querySelector("."+window.reverseSort).classList.add("reverse"));document.querySelector(".submit-request").style.display="block";var s=(0,r.getUser)(),c=document.querySelector('.submit-request input[name="email"]');s&&(c.value=s,c.parentNode.style.display="none");document.querySelector(".submit-request button").addEventListener("click",function(t){t.preventDefault();var e=c.value;return fetch("https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/govpurchase",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,description:document.querySelector(".submit-request textarea").value})}).then(function(t){return t.text()}).then(function(t){console.log(t)}),document.querySelector(".submit-request").innerHTML="<h3>Thank you for your request!</h3>",!1})};var o=n(15),r=n(2),i=n(0);function a(t){return t?decodeURIComponent(t.replace(".php","")):"Contract document"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isDate=function(t){return"Invalid Date"!==new Date(t)&&!isNaN(new Date(t))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.handleExpansion=function(t){var e=(0,o.checkParents)(t,"expandable-contract");e&&(e.classList.toggle("flipped"),t.preventDefault(),e.classList.contains("flipped")?document.querySelector('.contracts[data-hit-id="'+e.dataset.hitId+'"]').style.display="flex":document.querySelector('.contracts[data-hit-id="'+e.dataset.hitId+'"]').style.display="none",(0,i.trackEvent)("contract","expand",e.dataset.hitId),(0,r.getUser)()||((0,i.trackEvent)("contract","show-login-modal",e.dataset.hitId),(0,r.showIdentityModal)(e.dataset.hitId)));(0,o.checkParents)(t,"contact-vendor")&&(0,r.showContactVendorModal)((0,o.checkParents)(t,"contracts").dataset.hitId);(0,o.checkParents)(t,"additional-documents")&&(0,r.showAdditionalDocsModal)((0,o.checkParents)(t,"contracts").dataset.hitId);t.target.classList.contains("file-name-link")&&(0,i.trackEvent)("contract","download",e.dataset.hitId+" - "+t.target.innerText)};var o=n(3),r=n(2),i=n(0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.handleSort=function(t){var e=(0,o.checkParents)(t,"js-sortable");e&&(""!=document.querySelector('input[name="query"]').value&&(limit=!1),e.classList.contains("contract-name")&&(window.currentSort="&sort=title%20asc",".contract-name"==window.highlightItem&&(e.classList.contains("reverse")?(window.reverseSort="",window.currentSort="&sort=title%20asc"):(window.currentSort="&sort=title%20desc",window.reverseSort="contract-name")),window.highlightItem=".contract-name"),e.classList.contains("contract-expiration")&&(window.currentSort="&sort=expiration%20asc",".contract-expiration"==window.highlightItem&&(e.classList.contains("reverse")?(window.reverseSort="",window.currentSort="&sort=expiration%20asc"):(window.currentSort="&sort=expiration%20desc",window.reverseSort="contract-expiration")),window.highlightItem=".contract-expiration"),e.classList.contains("contract-agency")&&(window.currentSort="&sort=buyer_lead_agency%20asc",".contract-agency"==window.highlightItem&&(e.classList.contains("reverse")?(window.reverseSort="",window.currentSort="&sort=buyer_lead_agency%20asc"):(window.currentSort="&sort=buyer_lead_agency%20desc",window.reverseSort="contract-agency")),window.highlightItem=".contract-agency"),e.classList.contains("contract-vendor")&&(window.currentSort="&sort=suppliers%20asc",".contract-vendor"==window.highlightItem&&(e.classList.contains("reverse")?(window.reverseSort="",window.currentSort="&sort=suppliers%20asc"):(window.currentSort="&sort=suppliers%20desc",window.reverseSort="contract-vendor")),window.highlightItem=".contract-vendor"),e.classList.contains("contract-state")&&(window.currentSort="&sort=states%20asc",".contract-state"==window.highlightItem&&(e.classList.contains("reverse")?(window.reverseSort="",window.currentSort="&sort=states%20asc"):(window.currentSort="&sort=states%20desc",window.reverseSort="contract-state")),window.highlightItem=".contract-state"),document.querySelectorAll(".js-sortable").forEach(function(t){t.classList.remove("highlit")}),e.classList.add("highlit"),(0,r.trackEvent)("search","sort",window.currentSort),getResults(limit,0))};var o=n(3),r=n(0)}]);