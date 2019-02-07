!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getUser=o,e.getLocalActivity=i,e.setUser=a,e.setLocalActivity=function(t){localStorage.setItem("coProcureActivity",t)},e.showIdentityModal=function(t){s({title:'<i class="material-icons">lock</i> Unlock access to thousands of contracts',body:'<p>Enter your government email address to immediately get full free access - including contract downloads.</p>\n      <form method="post" action="">\n        <label>\n          <span class="field-description">Your email address</span>\n          <input type="text" name="email">\n        </label>\n        <button type="submit" class="add-email">Submit</button>\n      </form>',close:!1,contractId:t})},e.showContactVendorModal=function(t){s({title:"Contact Vendor",body:'<form method="post" action="">\n        <label>\n          <span class="field-description">What information do you need from this vendor?</span>\n          <textarea name="purchase-info"></textarea>\n        </label>\n        <button type="submit" class="contact-vendor">Submit</button>\n      </form>',close:!1,contractId:t})},e.postActivity=c;var r=n(1);function o(){var t=localStorage.getItem("coProcureUser");return t||!1}function i(){var t=localStorage.getItem("coProcureActivity");return t||!1}function a(t){localStorage.setItem("coProcureUser",t)}function s(t){var e='<div class="js-identityModal modal fade" tabindex="-1" role="dialog">\n    <div class="modal-dialog" role="document">\n      <div class="modal-content">\n        <div class="modal-header">\n          <h5 class="modal-title">'+t.title+'</h5>\n        </div>\n        <div class="modal-body">\n          '+t.body+'\n          <input type="hidden" class="contractId" name="contractId" value="'+t.contractId+'">\n        </div>\n      </div>\n    </div>\n  </div>';document.body.insertAdjacentHTML("beforeend",'<div class="modal-backdrop fade"></div>'),document.body.insertAdjacentHTML("beforeend",e),setTimeout(function(){document.querySelector(".js-identityModal .modal-dialog").classList.add("show")},50),document.querySelector(".js-identityModal button.add-email")&&document.querySelector(".js-identityModal button.add-email").addEventListener("click",function(e){e.preventDefault();var n=document.querySelector('.modal-dialog form input[name="email"').value;fetch("http://localhost:3333/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n})}).then(function(t){return t.text()}).then(function(t){console.log(t)}),a(n),(0,r.trackEvent)("user","login",t.contractId);var o=[];i()&&(o=JSON.parse(i())),o.forEach(function(t){c(t.category,t.action,t.label)}),document.querySelector(".modal-backdrop").remove(),document.querySelector(".js-identityModal").remove(),localStorage.removeItem("coProcureActivity")}),document.querySelector(".js-identityModal button.contact-vendor")&&document.querySelector(".js-identityModal button.contact-vendor").addEventListener("click",function(e){e.preventDefault();var n=o(),i=document.querySelector('textarea[name="purchase-info"]').value,a=document.querySelector("input.contractId").value;fetch("http://localhost:3333/vendor-contact",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,description:i,contract:a})}).then(function(t){return t.text()}).then(function(t){console.log(t),document.querySelector(".modal-backdrop").remove(),document.querySelector(".js-identityModal").remove()}),(0,r.trackEvent)("user","contact-vendor",t.contractId)})}function c(t,e,n){fetch("http://localhost:3333/activity",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({category:t,action:e,label:n})}).then(function(t){return t.text()}).then(function(t){console.log(t)})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.trackEvent=function(t,e,n){if(ga("gtag_UA_121612479_1.send",{hitType:"event",eventCategory:t,eventAction:e,eventLabel:n}),r.getUser)(0,r.postActivity)(t,e,n);else{var o={};o.category=t,o.action=e,o.label=n,(0,r.getLocalActivity)()?data=JSON.parse((0,r.getLocalActivity)()):data=[],data.push(o),(0,r.setLocalActivity)(JSON.stringify(data))}};var r=n(0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.checkParents=function(t,e){var n=t.target;for(;n;){if(n.classList&&n.classList.length>0){var r=n.classList;if(r.contains(e))return n}n=n.parentNode}return!1}},function(t,e,n){"use strict";n(4),n(5);var r=n(6),o=n(8),i=n(9),a=n(1);document.getElementById("submit-search").addEventListener("click",function(t){t.preventDefault(),window.highlightItem="",window.reverseSort="",getResults(!1,0)}),window.currentSort="",window.limit=!1,window.getResults=function(t,e){var n="";(t||""==document.querySelector('input[name="query"]').value)&&(n="kcrpc%20and%20"),""!=document.querySelector('input[name="query"]').value&&(0,a.trackEvent)("search","query",document.querySelector('input[name="query"]').value);var o="https://nhhu21hyj1.execute-api.us-west-1.amazonaws.com/prod?start="+e+"&q="+n+document.querySelector('input[name="query"]').value+window.currentSort;fetch(o).then(function(t){200===t.status?t.json().then(function(t){(0,r.displayResults)(t)}):console.log("Looks like there was a problem. Status Code: "+t.status)}).catch(function(t){console.log("Fetch Error :-S",t)})},document.querySelector(".search-results").addEventListener("click",function(t){(0,o.handleExpansion)(t),(0,i.handleSort)(t)}),window.location.pathname.indexOf("kcrpc")>-1&&(window.limit=!0,window.getResults(!0,0))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Headers=l,e.Request=m,e.Response=b,e.fetch=S;var r={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(r.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(t){return t&&o.indexOf(Object.prototype.toString.call(t))>-1};function a(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function s(t){return"string"!=typeof t&&(t=String(t)),t}function c(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r.iterable&&(e[Symbol.iterator]=function(){return e}),e}function l(t){this.map={},t instanceof l?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function d(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function u(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function f(t){var e=new FileReader,n=u(e);return e.readAsArrayBuffer(t),n}function h(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:r.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:r.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():r.arrayBuffer&&r.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=h(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):r.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||i(t))?this._bodyArrayBuffer=h(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r.blob&&(this.blob=function(){var t=d(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?d(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}),this.text=function(){var t,e,n,r=d(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,n=u(e),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},r.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(t,e){t=a(t),e=s(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},l.prototype.delete=function(t){delete this.map[a(t)]},l.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},l.prototype.set=function(t,e){this.map[a(t)]=s(e)},l.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},l.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),c(t)},l.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),c(t)},l.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),c(t)},r.iterable&&(l.prototype[Symbol.iterator]=l.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(t,e){var n,r,o=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(n=e.method||this.method||"GET",r=n.toUpperCase(),y.indexOf(r)>-1?r:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function v(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function b(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},p.call(m.prototype),p.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var w=[301,302,303,307,308];b.redirect=function(t,e){if(-1===w.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})};var g=e.DOMException=self.DOMException;try{new g}catch(t){e.DOMException=g=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack},g.prototype=Object.create(Error.prototype),g.prototype.constructor=g}function S(t,e){return new Promise(function(n,o){var i=new m(t,e);if(i.signal&&i.signal.aborted)return o(new g("Aborted","AbortError"));var a=new XMLHttpRequest;function s(){a.abort()}a.onload=function(){var t,e,r={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new l,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;n(new b(o,r))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.onabort=function(){o(new g("Aborted","AbortError"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&r.blob&&(a.responseType="blob"),i.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),i.signal&&(i.signal.addEventListener("abort",s),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",s)}),a.send(void 0===i._bodyInit?null:i._bodyInit)})}S.polyfill=!0,self.fetch||(self.fetch=S,self.Headers=l,self.Request=m,self.Response=b)},function(t,e,n){"use strict";window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.displayResults=function(t){var e='\n  <ul class="results-list">\n    <li class="header">\n      <span class="contract-name js-sortable">\n        Contract name \n        <svg class="icon icon-caret icon-caret--down" id="icon--dropdown-carrot" viewBox="0 0 9.7667 6.7638" ><title>Dropdown Caret</title><path d="M5.5819,6.4285,9.5683,1.4552A.8953.8953,0,0,0,8.87,0H.8969A.8953.8953,0,0,0,.1984,1.4552L4.1848,6.4285A.8953.8953,0,0,0,5.5819,6.4285Z"></path></svg>\n      </span>\n      <span class="contract-expiration js-sortable">\n        Expiration \n        <svg class="icon icon-caret icon-caret--down" id="icon--dropdown-carrot" viewBox="0 0 9.7667 6.7638" ><title>Dropdown Caret</title><path d="M5.5819,6.4285,9.5683,1.4552A.8953.8953,0,0,0,8.87,0H.8969A.8953.8953,0,0,0,.1984,1.4552L4.1848,6.4285A.8953.8953,0,0,0,5.5819,6.4285Z"></path></svg>\n      </span>\n      <span class="contract-agency js-sortable">\n        Lead agency\n      </span>\n      <span class="contract-vendor">Vendor</span>\n      <span class="contract-state">State</span>\n    </li>\n  '+t.hits.hit.map(function(t){var e=[];t.fields.contract_files&&(e=JSON.parse(t.fields.contract_files));var n=null,o=null,i=null,a=null,s=null;return t.fields.amendments_files&&(n=JSON.parse(t.fields.amendments_files)),t.fields.pricing_files&&(o=JSON.parse(t.fields.pricing_files)),t.fields.bid_tabulation_files&&(i=JSON.parse(t.fields.bid_tabulation_files)),t.fields.bid_solicitation_files&&(a=JSON.parse(t.fields.bid_solicitation_files)),t.fields.other_docs_files&&(s=JSON.parse(t.fields.other_docs_files)),'\n    <li class="expandable-contract" data-hit-id="'+t.id+'">\n      <span class="contract-name">\n        <div>'+t.fields.title+'</div>\n        <div class="summary">'+(t.fields.summary&&"undefined"!=t.fields.summary?""+t.fields.summary:"")+'</div>\n      </span>\n      <span class="contract-expiration">\n        '+((0,r.isDate)(t.fields.expiration)?new Date(t.fields.expiration).toLocaleDateString():"")+'\n      </span>\n      <span class="contract-agency">'+(t.fields.buyer?""+t.fields.buyer:"")+'\n      </span>\n      <span class="contract-vendor">'+(t.fields.vendor?""+t.fields.vendor.toString():t.fields.vendor_info?""+t.fields.vendor_info.replace("undefined",""):"")+'</span>\n      <span class="contract-state">'+(t.fields.states?""+t.fields.states:"")+'</span>\n    </li>\n    <li class="contracts" data-hit-id="'+t.id+'" style="display: none;">\n      <div class="all-files">\n        <div class="files">\n          <p>Contract</p>\n          '+e.map(function(t){return'<div class="fileset">\n              <a href="'+t.url+'" target="_new" class="file-name-link">'+decodeURIComponent(t.filename)+"</a>\n            </div>"}).join("\n      ")+"\n        </div>\n        "+(n?'<div class="files">\n              <p>Amendments</p>\n              '+n.map(function(t){return'<div class="fileset">\n                  <a href="'+t.url+'" target="_new" class="file-name-link">'+decodeURIComponent(t.filename)+"</a>\n                </div>"}).join("\n      ")+"\n            </div>":"")+"\n        "+(o?'<div class="files">\n            <p>Pricing</p>\n            '+o.map(function(t){return'<div class="fileset">\n                <a href="'+t.url+'" target="_new" class="file-name-link">'+decodeURIComponent(t.filename)+"</a>\n              </div>"}).join("\n      ")+"\n            </div>":"")+"\n        "+(i?'<div class="files">\n            <p>Bid Tabulation</p>\n            '+i.map(function(t){return'<div class="fileset">\n                <a href="'+t.url+'" target="_new" class="file-name-link">'+decodeURIComponent(t.filename)+"</a>\n              </div>"}).join("\n      ")+"\n            </div>":"")+"\n        "+(a?'<div class="files">\n            <p>Bid Solicitation</p>\n            '+a.map(function(t){return'<div class="fileset">\n                <a href="'+t.url+'" target="_new" class="file-name-link">'+decodeURIComponent(t.filename)+"</a>\n              </div>"}).join("\n      ")+"\n            </div>":"")+"\n        "+(s?'<div class="files">\n            <p>Other Documents</p>\n            '+s.map(function(t){return'<div class="fileset">\n                <a href="'+t.url+'" target="_new" class="file-name-link">'+decodeURIComponent(t.filename)+"</a>\n              </div>"}).join("\n      ")+"\n            </div>":"")+'\n      </div>\n      <button class="contact-vendor">Contact Vendor</button>\n    </li>'}).join("\n      ")+"\n  "+function(){var e=t.hits.start+1,n=e+9;t.hits.found<10&&(n=t.hits.found);var r="result";t.hits.found>1&&(r="results");var o="",i="";return t.hits.found>e+10&&(o="<a href=\"javascript:trackEvent('search','next',"+document.querySelector('input[name="query"]').value+");getResults(false,"+(t.hits.start+10)+');">>></a>'),t.hits.start>0&&(i="<a href=\"javascript:trackEvent('search','previous',"+document.querySelector('input[name="query"]').value+");getResults(false,"+(t.hits.start-10)+');"><<</a>'),'<li class="result-counter"><span style="margin: 0 20px 0 0;">'+i+"</span>  Showing "+e+" - "+n+" of "+t.hits.found+" "+r+'  <span style="margin: 0 0 0 20px;">'+o+"</span></li>\n  </ul>"}();document.querySelector(".search-results").innerHTML=e,window.highlightItem&&(document.querySelector(window.highlightItem).classList.add("highlit"),window.reverseSort&&document.querySelector("."+window.reverseSort).classList.add("reverse"));document.querySelector(".submit-request").style.display="block";var n=(0,o.getUser)(),i=document.querySelector('.submit-request input[name="email"]');n&&(i.value=n,i.parentNode.style.display="none");document.querySelector(".submit-request button").addEventListener("click",function(t){t.preventDefault();var e=i.value;return fetch("http://localhost:3333/govpurchase",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,description:document.querySelector(".submit-request textarea").value})}).then(function(t){return t.text()}).then(function(t){console.log(t)}),document.querySelector(".submit-request").innerHTML="<h3>Thank you for your request!</h3>",!1})};var r=n(7),o=n(0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isDate=function(t){return"Invalid Date"!==new Date(t)&&!isNaN(new Date(t))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.handleExpansion=function(t){var e=(0,r.checkParents)(t,"expandable-contract");e&&(e.classList.toggle("flipped"),t.preventDefault(),e.classList.contains("flipped")?document.querySelector('.contracts[data-hit-id="'+e.dataset.hitId+'"]').style.display="flex":document.querySelector('.contracts[data-hit-id="'+e.dataset.hitId+'"]').style.display="none",(0,i.trackEvent)("contract","expand",e.dataset.hitId),(0,o.getUser)()||((0,i.trackEvent)("contract","show-login-modal",e.dataset.hitId),(0,o.showIdentityModal)(e.dataset.hitId)));(0,r.checkParents)(t,"contact-vendor")&&(0,o.showContactVendorModal)((0,r.checkParents)(t,"contracts").dataset.hitId);t.target.classList.contains("file-name-link")&&(0,i.trackEvent)("contract","download",e.dataset.hitId+" - "+t.target.innerText)};var r=n(2),o=n(0),i=n(1)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.handleSort=function(t){var e=(0,r.checkParents)(t,"js-sortable");e&&(""!=document.querySelector('input[name="query"]').value&&(limit=!1),e.classList.contains("contract-name")&&(window.currentSort="&sort=title%20asc",".contract-name"==window.highlightItem&&(e.classList.contains("reverse")?(window.reverseSort="",window.currentSort="&sort=title%20asc"):(window.currentSort="&sort=title%20desc",window.reverseSort="contract-name")),window.highlightItem=".contract-name"),e.classList.contains("contract-expiration")&&(window.currentSort="&sort=expiration%20asc",".contract-expiration"==window.highlightItem&&(e.classList.contains("reverse")?(window.reverseSort="",window.currentSort="&sort=expiration%20asc"):(window.currentSort="&sort=expiration%20desc",window.reverseSort="contract-expiration")),window.highlightItem=".contract-expiration"),e.classList.contains("contract-agency")&&(window.currentSort="&sort=buyer%20asc",".contract-agency"==window.highlightItem&&(e.classList.contains("reverse")?(window.reverseSort="",window.currentSort="&sort=buyer%20asc"):(window.currentSort="&sort=buyer%20desc",window.reverseSort="contract-agency")),window.highlightItem=".contract-agency"),sortHighlights(),e.classList.add("highlit"),trackEvent("search","sort",window.currentSort),getResults(limit,0))};var r=n(2)}]);