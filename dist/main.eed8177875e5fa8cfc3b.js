!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.trackEvent=function(e,t,n){"undefined"!=typeof ga&&ga("gtag_UA_121612479_1.send",{hitType:"event",eventCategory:e,eventAction:t,eventLabel:n});if((0,o.getUser)())(0,o.postActivity)((0,o.getUser)(),e,t,n);else{var r={};r.category=e,r.action=t,r.label=n;var i=[];(0,o.getLocalActivity)()&&(i=JSON.parse((0,o.getLocalActivity)())),i.push(r),(0,o.setLocalActivity)(JSON.stringify(i))}};var o=n(2)},function(e,t,n){"use strict";var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":r(window))&&(o=window)}e.exports=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getUser=i,t.getLocalActivity=a,t.setUser=s,t.setLocalActivity=function(e){localStorage.setItem("coProcureActivity",e)},t.showIdentityModal=function(e){c({title:'<i class="material-icons">lock</i> Unlock access to thousands of contracts',body:'<p>Enter your government email address to immediately get full free access - including contract downloads.</p>\n      <form method="post" action="">\n        <label>\n          <span class="field-description">Your email address</span>\n          <input type="text" name="email">\n        </label>\n        <button type="submit" class="add-email">Submit</button>\n      </form>',close:!1,contractId:e})},t.showContactVendorModal=function(e){c({title:"Contact Vendor",body:'<form method="post" action="">\n        <label>\n          <span class="field-description">What information do you need from this vendor?</span>\n          <textarea name="purchase-info"></textarea>\n        </label>\n        <button type="submit" class="contact-vendor">Submit</button>\n      </form>',close:!1,contractId:e})},t.showAdditionalDocsModal=function(e){c({title:"Additional Documents",body:'<form method="post" action="">\n        <label>\n          <span class="field-description">Thanks for letting us know that you\'d like some additional documentation for this record. What documents would you like to request? Contract, bid tabulation, bid solicitation, amendments, other (please explain)</span>\n          <textarea name="additional-documents"></textarea>\n        </label>\n        <button type="submit" class="additional-documents">Submit</button>\n      </form>',close:!1,contractId:e})},t.postActivity=l;var o=n(0),r=n(3);function i(){var e=localStorage.getItem("coProcureUser");return e||!1}function a(){var e=localStorage.getItem("coProcureActivity");return e||!1}function s(e){localStorage.setItem("coProcureUser",e)}function c(e){var t='<div class="js-identityModal modal fade" tabindex="-1" role="dialog">\n    <div class="modal-dialog" role="document">\n      <div class="modal-content">\n        <div class="modal-header">\n          <h5 class="modal-title">'+e.title+'</h5>\n        </div>\n        <div class="modal-body">\n          '+e.body+'\n          <input type="hidden" class="contractId" name="contractId" value="'+e.contractId+'">\n        </div>\n      </div>\n    </div>\n  </div>';document.body.insertAdjacentHTML("beforeend",'<div class="modal-backdrop fade"></div>'),document.body.insertAdjacentHTML("beforeend",t),setTimeout(function(){document.querySelector(".js-identityModal .modal-dialog").classList.add("show")},50),document.querySelector(".js-identityModal button.add-email")&&document.querySelector(".js-identityModal button.add-email").addEventListener("click",function(t){t.preventDefault(),t.stopPropagation();var n=document.querySelector('.modal-dialog form input[name="email"').value;if(n.indexOf("@")>-1){fetch("https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n})}).then(function(e){return e.text()}).then(function(e){console.log(e)}),s(n),(0,o.trackEvent)("user","login",e.contractId);var r=[];a()&&(r=JSON.parse(a())),r.forEach(function(e){l(e.category,e.action,e.label)}),document.querySelector(".modal-backdrop").remove(),document.querySelector(".js-identityModal").remove(),localStorage.removeItem("coProcureActivity")}else document.querySelector('.modal-dialog form input[name="email"').style.border="solid 2px red"}),document.querySelector(".js-identityModal button.contact-vendor")&&document.querySelector(".js-identityModal button.contact-vendor").addEventListener("click",function(t){t.preventDefault(),t.stopPropagation();var n=i(),r=document.querySelector('textarea[name="purchase-info"]').value,a=document.querySelector("input.contractId").value;fetch("https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/vendor-contact",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,requestType:"Vendor contact request",description:r,contract:a})}).then(function(e){return e.text()}).then(function(e){console.log(e),document.querySelector(".modal-backdrop").remove(),document.querySelector(".js-identityModal").remove()}),(0,o.trackEvent)("user","contact-vendor",e.contractId)}),document.querySelector(".js-identityModal button.additional-documents")&&document.querySelector(".js-identityModal button.additional-documents").addEventListener("click",function(t){t.preventDefault(),t.stopPropagation();var n=i(),r=document.querySelector('textarea[name="additional-documents"]').value,a=document.querySelector("input.contractId").value;fetch("https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/vendor-contact",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,requestType:"Request for additional documents",description:r,contract:a})}).then(function(e){return e.text()}).then(function(e){console.log(e),document.querySelector(".modal-backdrop").remove(),document.querySelector(".js-identityModal").remove()}),(0,o.trackEvent)("user","additional-documents",e.contractId)}),document.querySelector(".modal").addEventListener("click",function(e){if(e.preventDefault(),!(0,r.checkParents)(e,"modal-dialog")){document.querySelector(".modal-backdrop").remove(),document.querySelector(".js-identityModal").remove();var t=document.querySelector(".expandable-contract.flipped"),n=t.dataset.hitId,o=document.querySelector('.contracts[data-hit-id="'+n+'"]');t.classList.remove("flipped"),o.style.display="none"}})}function l(e,t,n,o){var r={email:e,category:t,action:n,label:o,userAgent:navigator.userAgent,screenSize:window.innerWidth+" "+window.innerHeight};console.log(r);fetch("https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/activity",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(function(e){return e.text()}).then(function(e){console.log(e)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkParents=function(e,t){var n=e.target;for(;n;){if(n.classList&&n.classList.length>0){var o=n.classList;if(o.contains(t))return n}n=n.parentNode}return!1}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}},function(e,t,n){"use strict";n(6),n(7),n(8),n(13);var o=n(14),r=n(16),i=n(17),a=n(0);document.getElementById("submit-search").addEventListener("click",function(e){e.preventDefault(),window.highlightItem="",window.reverseSort="",getResults(!1,0),this.classList.add("spinner")}),window.currentSort="",window.limit=!1,window.getResults=function(e,t){var n="";e&&""==document.querySelector('input[name="query"]').value&&(n="kcrpc%20and%20"),""!=document.querySelector('input[name="query"]').value&&(0,a.trackEvent)("search","query",document.querySelector('input[name="query"]').value);var r="https://9957n2ojug.execute-api.us-west-1.amazonaws.com/stage/?size=100&start="+t+"&q="+n+document.querySelector('input[name="query"]').value+window.currentSort;fetch(r).then(function(e){200===e.status?e.json().then(function(e){(0,o.displayResults)(e),document.getElementById("submit-search").classList.remove("spinner")}):console.log("Looks like there was a problem. Status Code: "+e.status)}).catch(function(e){console.log("Fetch Error :-S",e)})},document.querySelector(".search-results").addEventListener("click",function(e){(0,r.handleExpansion)(e),(0,i.handleSort)(e)}),window.location.pathname.indexOf("kcrpc")>-1&&(window.limit=!0,window.getResults(!0,0))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Headers=l,t.Request=y,t.Response=b,t.fetch=_;var o={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(o.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(e){return e&&r.indexOf(Object.prototype.toString.call(e))>-1};function a(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function s(e){return"string"!=typeof e&&(e=String(e)),e}function c(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return o.iterable&&(t[Symbol.iterator]=function(){return t}),t}function l(e){this.map={},e instanceof l?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function u(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function d(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function f(e){var t=new FileReader,n=d(t);return t.readAsArrayBuffer(e),n}function p(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:o.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:o.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:o.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():o.arrayBuffer&&o.blob&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=p(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||i(e))?this._bodyArrayBuffer=p(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o.blob&&(this.blob=function(){var e=u(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?u(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}),this.text=function(){var e,t,n,o=u(this);if(o)return o;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=d(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),o=0;o<t.length;o++)n[o]=String.fromCharCode(t[o]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(e,t){e=a(e),t=s(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},l.prototype.delete=function(e){delete this.map[a(e)]},l.prototype.get=function(e){return e=a(e),this.has(e)?this.map[e]:null},l.prototype.has=function(e){return this.map.hasOwnProperty(a(e))},l.prototype.set=function(e,t){this.map[a(e)]=s(t)},l.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},l.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),c(e)},l.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),c(e)},l.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),c(e)},o.iterable&&(l.prototype[Symbol.iterator]=l.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function y(e,t){var n,o,r=(t=t||{}).body;if(e instanceof y){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new l(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new l(t.headers)),this.method=(n=t.method||this.method||"GET",o=n.toUpperCase(),m.indexOf(o)>-1?o:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function v(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),o=n.shift().replace(/\+/g," "),r=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(r))}}),t}function b(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new l(t.headers),this.url=t.url||"",this._initBody(e)}y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},h.call(y.prototype),h.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var w=[301,302,303,307,308];b.redirect=function(e,t){if(-1===w.indexOf(t))throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})};var g=t.DOMException=self.DOMException;try{new g}catch(e){t.DOMException=g=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack},g.prototype=Object.create(Error.prototype),g.prototype.constructor=g}function _(e,t){return new Promise(function(n,r){var i=new y(e,t);if(i.signal&&i.signal.aborted)return r(new g("Aborted","AbortError"));var a=new XMLHttpRequest;function s(){a.abort()}a.onload=function(){var e,t,o={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new l,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var n=e.split(":"),o=n.shift().trim();if(o){var r=n.join(":").trim();t.append(o,r)}}),t)};o.url="responseURL"in a?a.responseURL:o.headers.get("X-Request-URL");var r="response"in a?a.response:a.responseText;n(new b(r,o))},a.onerror=function(){r(new TypeError("Network request failed"))},a.ontimeout=function(){r(new TypeError("Network request failed"))},a.onabort=function(){r(new g("Aborted","AbortError"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&o.blob&&(a.responseType="blob"),i.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),i.signal&&(i.signal.addEventListener("abort",s),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",s)}),a.send(void 0===i._bodyInit?null:i._bodyInit)})}_.polyfill=!0,self.fetch||(self.fetch=_,self.Headers=l,self.Request=y,self.Response=b)},function(e,t,n){"use strict";window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)})},function(e,t,n){"use strict";(function(e){var t=r(n(9)),o=r(n(4));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("unable to locate global object")}();"Promise"in i?i.Promise.prototype.finally||(i.Promise.prototype.finally=o.default):i.Promise=t.default}).call(this,n(1))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(4),a=(o=i)&&o.__esModule?o:{default:o};var s=setTimeout;function c(){}function l(e){if(!(this instanceof l))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],m(e,this)}function u(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,l._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(e){return void f(t.promise,e)}d(t.promise,o)}else(1===e._state?d:f)(t.promise,e._value)})):e._deferreds.push(t)}function d(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===(void 0===t?"undefined":r(t))||"function"==typeof t)){var n=t.then;if(t instanceof l)return e._state=3,e._value=t,void p(e);if("function"==typeof n)return void m((o=n,i=t,function(){o.apply(i,arguments)}),e)}e._state=1,e._value=t,p(e)}catch(t){f(e,t)}var o,i}function f(e,t){e._state=2,e._value=t,p(e)}function p(e){2===e._state&&0===e._deferreds.length&&l._immediateFn(function(){e._handled||l._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)u(e,e._deferreds[t]);e._deferreds=null}function h(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function m(e,t){var n=!1;try{e(function(e){n||(n=!0,d(t,e))},function(e){n||(n=!0,f(t,e))})}catch(e){if(n)return;n=!0,f(t,e)}}l.prototype.catch=function(e){return this.then(null,e)},l.prototype.then=function(e,t){var n=new this.constructor(c);return u(this,new h(e,t,n)),n},l.prototype.finally=a.default,l.all=function(e){return new l(function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var i=o.length;function a(e,s){try{if(s&&("object"===(void 0===s?"undefined":r(s))||"function"==typeof s)){var c=s.then;if("function"==typeof c)return void c.call(s,function(t){a(e,t)},n)}o[e]=s,0==--i&&t(o)}catch(e){n(e)}}for(var s=0;s<o.length;s++)a(s,o[s])})},l.resolve=function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&e.constructor===l?e:new l(function(t){t(e)})},l.reject=function(e){return new l(function(t,n){n(e)})},l.race=function(e){return new l(function(t,n){for(var o=0,r=e.length;o<r;o++)e[o].then(t,n)})},l._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){s(e,0)},l._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.default=l}).call(this,n(10).setImmediate)},function(e,t,n){"use strict";(function(e){var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(r.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new i(r.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(11),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||void 0,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||void 0}).call(this,n(1))},function(e,t,n){"use strict";(function(e,t){!function(e,n){if(!e.setImmediate){var o,r,i,a,s,c=1,l={},u=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?o=function(e){t.nextTick(function(){h(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){h(e.data)},o=function(e){i.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(r=d.documentElement,o=function(e){var t=d.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):o=function(e){setTimeout(h,0,e)}:(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),o=function(t){e.postMessage(a+t,"*")}),f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return l[c]=r,o(c),c++},f.clearImmediate=p}function p(e){delete l[e]}function h(e){if(u)setTimeout(h,0,e);else{var t=l[e];if(t){u=!0;try{!function(e){var t=e.callback,o=e.args;switch(o.length){case 0:t();break;case 1:t(o[0]);break;case 2:t(o[0],o[1]);break;case 3:t(o[0],o[1],o[2]);break;default:t.apply(n,o)}}(t)}finally{p(e),u=!1}}}}}("undefined"==typeof self?void 0===e?void 0:e:self)}).call(this,n(1),n(12))},function(e,t,n){"use strict";var o,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(e){if(o===setTimeout)return setTimeout(e,0);if((o===a||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(t){try{return o.call(null,e,0)}catch(t){return o.call(this,e,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:a}catch(e){o=a}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var l,u=[],d=!1,f=-1;function p(){d&&l&&(d=!1,l.length?u=l.concat(u):f=-1,u.length&&h())}function h(){if(!d){var e=c(p);d=!0;for(var t=u.length;t;){for(l=u,u=[];++f<t;)l&&l[f].run();f=-1,t=u.length}l=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function y(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||d||c(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=y,i.addListener=y,i.once=y,i.off=y,i.removeListener=y,i.removeAllListeners=y,i.emit=y,i.prependListener=y,i.prependOnceListener=y,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.displayResults=function(e){window.trackEvent||(window.trackEvent=i.trackEvent);var t='\n  <ul class="results-list">\n    <li class="header">\n      <span class="contract-name js-sortable">\n        Contract name \n        <svg class="icon icon-caret icon-caret--down" id="icon--dropdown-carrot" viewBox="0 0 9.7667 6.7638" ><title>Dropdown Caret</title><path d="M5.5819,6.4285,9.5683,1.4552A.8953.8953,0,0,0,8.87,0H.8969A.8953.8953,0,0,0,.1984,1.4552L4.1848,6.4285A.8953.8953,0,0,0,5.5819,6.4285Z"></path></svg>\n      </span>\n      <span class="contract-expiration js-sortable">\n        Expiration \n        <svg class="icon icon-caret icon-caret--down" id="icon--dropdown-carrot" viewBox="0 0 9.7667 6.7638" ><title>Dropdown Caret</title><path d="M5.5819,6.4285,9.5683,1.4552A.8953.8953,0,0,0,8.87,0H.8969A.8953.8953,0,0,0,.1984,1.4552L4.1848,6.4285A.8953.8953,0,0,0,5.5819,6.4285Z"></path></svg>\n      </span>\n      <span class="contract-agency js-sortable">\n        Lead agency\n      </span>\n      <span class="contract-vendor">Vendor</span>\n      <span class="contract-state">State</span>\n    </li>\n  '+e.hits.hit.map(function(e){var t=[];e.fields.contract_files&&(t=JSON.parse(e.fields.contract_files));var n=null,r=null,i=null,s=null,c=null;return e.fields.amendments_files&&(n=JSON.parse(e.fields.amendments_files)),e.fields.pricing_files&&(r=JSON.parse(e.fields.pricing_files)),e.fields.bid_tabulation_files&&(i=JSON.parse(e.fields.bid_tabulation_files)),e.fields.bid_solicitation_files&&(s=JSON.parse(e.fields.bid_solicitation_files)),e.fields.other_docs_files&&(c=JSON.parse(e.fields.other_docs_files)),'\n    <li class="expandable-contract" data-hit-id="'+e.id+'">\n      <span class="contract-name">\n        <div>'+e.fields.title+'</div>\n        <div class="summary">'+(e.fields.summary&&"undefined"!=e.fields.summary?""+e.fields.summary:"")+'</div>\n      </span>\n      <span class="contract-expiration">\n        '+((0,o.isDate)(e.fields.expiration)?new Date(e.fields.expiration).toLocaleDateString():"")+'\n      </span>\n      <span class="contract-agency">'+(e.fields.buyer?""+e.fields.buyer:"")+'\n      </span>\n      <span class="contract-vendor">'+(e.fields.vendor?""+e.fields.vendor.toString():e.fields.vendor_info?""+e.fields.vendor_info.replace("undefined",""):"")+'</span>\n      <span class="contract-state">'+(e.fields.states?""+e.fields.states:"")+'</span>\n    </li>\n    <li class="contracts" data-hit-id="'+e.id+'" style="display: none;">\n      <div class="all-files">\n        <div class="files">\n          <p>Contract</p>\n          '+t.map(function(e){return'<div class="fileset">\n              <a href="'+e.url+'" target="_new" class="file-name-link">'+a(e.filename)+"</a>\n            </div>"}).join("\n      ")+"\n        </div>\n        "+(n?'<div class="files">\n              <p>Amendments</p>\n              '+n.map(function(e){return'<div class="fileset">\n                  <a href="'+e.url+'" target="_new" class="file-name-link">'+a(e.filename)+"</a>\n                </div>"}).join("\n      ")+"\n            </div>":"")+"\n        "+(r?'<div class="files">\n            <p>Pricing</p>\n            '+r.map(function(e){return'<div class="fileset">\n                <a href="'+e.url+'" target="_new" class="file-name-link">'+a(e.filename)+"</a>\n              </div>"}).join("\n      ")+"\n            </div>":"")+"\n        "+(i?'<div class="files">\n            <p>Bid Tabulation</p>\n            '+i.map(function(e){return'<div class="fileset">\n                <a href="'+e.url+'" target="_new" class="file-name-link">'+a(e.filename)+"</a>\n              </div>"}).join("\n      ")+"\n            </div>":"")+"\n        "+(s?'<div class="files">\n            <p>Bid Solicitation</p>\n            '+s.map(function(e){return'<div class="fileset">\n                <a href="'+e.url+'" target="_new" class="file-name-link">'+a(e.filename)+"</a>\n              </div>"}).join("\n      ")+"\n            </div>":"")+"\n        "+(c?'<div class="files">\n            <p>Other Documents</p>\n            '+c.map(function(e){return'<div class="fileset">\n                <a href="'+e.url+'" target="_new" class="file-name-link">'+a(e.filename)+"</a>\n              </div>"}).join("\n      ")+"\n            </div>":"")+'\n      </div>\n      <div class="buttons">\n        <button class="contact-vendor">Contact Vendor</button>\n        <button class="additional-documents">Request additional documents</button>\n      </div>\n    </li>'}).join("\n      ")+"\n  "+function(){var t=e.hits.start+1,n=t+99;e.hits.found<100&&(n=e.hits.found);var o="result";e.hits.found>1&&(o="results");var r="",i="";return e.hits.found>t+100&&(r="<a href=\"javascript:trackEvent('search','next','"+document.querySelector('input[name="query"]').value+"');getResults(false,"+(e.hits.start+100)+');">>></a>'),e.hits.start>0&&(i="<a href=\"javascript:trackEvent('search','previous','"+document.querySelector('input[name="query"]').value+"');getResults(false,"+(e.hits.start-100)+');"><<</a>'),'<li class="result-counter"><span style="margin: 0 20px 0 0;">'+i+"</span>  Showing "+t+" - "+n+" of "+e.hits.found+" "+o+'  <span style="margin: 0 0 0 20px;">'+r+"</span></li>\n  </ul>"}();document.querySelector(".search-results").innerHTML=t,window.highlightItem&&(document.querySelector(window.highlightItem).classList.add("highlit"),window.reverseSort&&document.querySelector("."+window.reverseSort).classList.add("reverse"));document.querySelector(".submit-request").style.display="block";var n=(0,r.getUser)(),s=document.querySelector('.submit-request input[name="email"]');n&&(s.value=n,s.parentNode.style.display="none");document.querySelector(".submit-request button").addEventListener("click",function(e){e.preventDefault();var t=s.value;return fetch("https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/govpurchase",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,description:document.querySelector(".submit-request textarea").value})}).then(function(e){return e.text()}).then(function(e){console.log(e)}),document.querySelector(".submit-request").innerHTML="<h3>Thank you for your request!</h3>",!1})};var o=n(15),r=n(2),i=n(0);function a(e){return decodeURIComponent(e.replace(".php",""))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDate=function(e){return"Invalid Date"!==new Date(e)&&!isNaN(new Date(e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleExpansion=function(e){var t=(0,o.checkParents)(e,"expandable-contract");t&&(t.classList.toggle("flipped"),e.preventDefault(),t.classList.contains("flipped")?document.querySelector('.contracts[data-hit-id="'+t.dataset.hitId+'"]').style.display="flex":document.querySelector('.contracts[data-hit-id="'+t.dataset.hitId+'"]').style.display="none",(0,i.trackEvent)("contract","expand",t.dataset.hitId),(0,r.getUser)()||((0,i.trackEvent)("contract","show-login-modal",t.dataset.hitId),(0,r.showIdentityModal)(t.dataset.hitId)));(0,o.checkParents)(e,"contact-vendor")&&(0,r.showContactVendorModal)((0,o.checkParents)(e,"contracts").dataset.hitId);(0,o.checkParents)(e,"additional-documents")&&(0,r.showAdditionalDocsModal)((0,o.checkParents)(e,"contracts").dataset.hitId);e.target.classList.contains("file-name-link")&&(0,i.trackEvent)("contract","download",t.dataset.hitId+" - "+e.target.innerText)};var o=n(3),r=n(2),i=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleSort=function(e){var t=(0,o.checkParents)(e,"js-sortable");t&&(""!=document.querySelector('input[name="query"]').value&&(limit=!1),t.classList.contains("contract-name")&&(window.currentSort="&sort=title%20asc",".contract-name"==window.highlightItem&&(t.classList.contains("reverse")?(window.reverseSort="",window.currentSort="&sort=title%20asc"):(window.currentSort="&sort=title%20desc",window.reverseSort="contract-name")),window.highlightItem=".contract-name"),t.classList.contains("contract-expiration")&&(window.currentSort="&sort=expiration%20asc",".contract-expiration"==window.highlightItem&&(t.classList.contains("reverse")?(window.reverseSort="",window.currentSort="&sort=expiration%20asc"):(window.currentSort="&sort=expiration%20desc",window.reverseSort="contract-expiration")),window.highlightItem=".contract-expiration"),t.classList.contains("contract-agency")&&(window.currentSort="&sort=buyer%20asc",".contract-agency"==window.highlightItem&&(t.classList.contains("reverse")?(window.reverseSort="",window.currentSort="&sort=buyer%20asc"):(window.currentSort="&sort=buyer%20desc",window.reverseSort="contract-agency")),window.highlightItem=".contract-agency"),document.querySelectorAll(".js-sortable").forEach(function(e){e.classList.remove("highlit")}),t.classList.add("highlit"),(0,r.trackEvent)("search","sort",window.currentSort),getResults(limit,0))};var o=n(3),r=n(0)}]);