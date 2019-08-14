/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index-v2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/burger.js":
/*!**********************!*\
  !*** ./js/burger.js ***!
  \**********************/
/*! exports provided: burger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"burger\", function() { return burger; });\nfunction burger() {\n  document.querySelector('.burger-menu').addEventListener('click', function(event) {\n    if(this.classList.contains('is-active')) {\n      this.classList.remove('is-active');\n      document.querySelector('navigation .links').classList.remove('is-active');\n    } else {\n      this.classList.add('is-active');\n      document.querySelector('navigation .links').classList.add('is-active');\n    }\n  })\n\n  if(document.querySelector('header .big-search-icon')) {\n    document.querySelector('header .big-search-icon').addEventListener('click', function(event) {\n      event.preventDefault();\n      document.querySelector('header .search-container').classList.toggle('active');\n    })\n  }\n}\n\n//# sourceURL=webpack:///./js/burger.js?");

/***/ }),

/***/ "./js/components/coprocure-contract/_contract.scss":
/*!*********************************************************!*\
  !*** ./js/components/coprocure-contract/_contract.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./js/components/coprocure-contract/_contract.scss?");

/***/ }),

/***/ "./js/components/coprocure-contract/contract.js":
/*!******************************************************!*\
  !*** ./js/components/coprocure-contract/contract.js ***!
  \******************************************************/
/*! exports provided: contractLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contractLayout\", function() { return contractLayout; });\nfunction contractLayout(json) {\n  if(json.hits.hit.length !== 1) {\n    return 'No contract Found'\n  } else {\n    let contract = json.hits.hit[0];\n    let fileLinks = [];\n    if(contract.fields.contract_files) {\n      contract.fields.contract_files.forEach( (item) => {\n        let parsedItem = JSON.parse(item);\n        if(parsedItem.url) {\n          parsedItem.type = 'Contract';\n          fileLinks.push(parsedItem);\n        }\n      })\n    }\n    if(contract.fields.amendments_files) {\n      contract.fields.amendments_files.forEach( (item) => {\n        let parsedItem = JSON.parse(item);\n        parsedItem.type = 'Amendment';\n        fileLinks.push(parsedItem);\n      })\n    }\n    if(contract.fields.bid_solicitation_files) {\n      contract.fields.bid_solicitation_files.forEach( (item) => {\n        let parsedItem = JSON.parse(item);\n        parsedItem.type = 'Bid Solicitation';\n        fileLinks.push(parsedItem);\n      })\n    }\n    if(contract.fields.bid_tabulation_files) {\n      contract.fields.bid_tabulation_files.forEach( (item) => {\n        let parsedItem = JSON.parse(item);\n        parsedItem.type = 'Bid Tabulation';\n        fileLinks.push(parsedItem);\n      })\n    }\n    if(contract.fields.pricing_files) {\n      contract.fields.pricing_files.forEach( (item) => {\n        let parsedItem = JSON.parse(item);\n        parsedItem.type = 'Pricing';\n        fileLinks.push(parsedItem);\n      })\n    }\n    if(contract.fields.other_docs_files) {\n      contract.fields.other_docs_files.forEach( (item) => {\n        let parsedItem = JSON.parse(item);\n        parsedItem.type = 'Other';\n        fileLinks.push(parsedItem);\n      })\n    }\n    return `\n    <div class=\"contract-results\">\n      <div class=\"contract-card\">\n        <div class=\"control-bar\">\n          <a href=\"/contract.html?contractId=${contract.id}\" class=\"new-window\" target=\"_new\">Open in new window</a>\n          <a href=\"${(window.lastSearch) ? window.lastSearch.replace(window.location.origin,''): ''}\" class=\"close-overlay\">Close</a>\n        </div>\n        <div class=\"contract-details\">\n          <div class=\"title-section\">\n            ${(contract.fields.contract_number) ? `<h5>Contract # ${contract.fields.contract_number}</h5>` : ''}\n            <h1 class=\"some-big\">${contract.fields.title}</h1>\n            <div class=\"dates\">\n              ${(function() {\n                let output = '';\n                if(contract.fields.effective) {\n                  output += `<div class=\"date-details\">\n                    <span class=\"field-name\">Effective date</span>\n                    <span class=\"field-value\">${new Date(contract.fields.effective).toLocaleDateString(\"en-US\")}</span>\n                  </div>`;\n                }\n                return output;\n              })()}\n              ${(function() {\n                let output = '';\n                if(contract.fields.expiration) {\n                  output += `<div class=\"date-details\">\n                    <span class=\"field-name\">Expiration date</span>\n                    <span class=\"field-value\">${new Date(contract.fields.expiration).toLocaleDateString(\"en-US\")}</span>\n                  </div>`;\n                }\n                return output;\n              })()}\n            </div>\n          </div>\n          <ul class=\"check-section\">\n            ${(new Date(contract.fields.expiration) > new Date()) ? '<li>Contract active</li>' : ''}\n            ${(contract.fields.cooperative_language) ? '<li>Cooperative language</li>' : ''}\n            ${(contract.fields.competitively_bid) ? '<li>Competitively solicited</li>' : ''}\n          </ul>\n          <div class=\"more-info-section\">\n            ${(function() {\n              let output = '';\n              if(contract.fields.summary) {\n                output += `<section>\n                  <h4>Summary</h3>\n                  <p>${contract.fields.summary}</p>\n                </section>`;\n              }\n              return output;\n            })()}\n            <section class=\"author-details\">\n              <h4>Contract Creator</h3>\n              <div class=\"author-content\">\n                ${(contract.fields.buyer_lead_agency) ? `<div class=\"author-field\">\n                  <span class=\"field-name\">Lead agency</span>\n                  <span class=\"field-value\">${contract.fields.buyer_lead_agency}</span>\n                </div>` : ''}\n                ${(contract.fields.buyer_lead_agency_state) ? `<div class=\"author-field\">\n                  <span class=\"field-name\">Lead agency state</span>\n                  <span class=\"field-value\">${contract.fields.buyer_lead_agency_state}</span>\n                </div>` : ''}\n                <div class=\"author-field\">\n                  <span class=\"field-name\">Purchasing cooperative/consortium</span>\n                  <span class=\"field-value\">${(contract.fields.cooperative_affiliation) ? contract.fields.cooperative_affiliation : 'N/A'}</span>\n                </div>\n              </div>\n            </section>\n            ${(contract.fields.suppliers) ? `<section class=\"supplier-details\">\n              <h4>Supplier Details</h3>\n              <div class=\"supplier\">\n                <span class=\"field-name\">Name</span>\n                <span class=\"field-value\">${contract.fields.suppliers}</span>\n              </div>\n            </section>` : ''}\n          </div>\n          <section class=\"files\">\n            <div class=\"section-header\">\n              <h4>Documents and Pricing</h4>\n              <a href=\"#\" data-contract-id=\"${contract.id}\" class=\"missing-documents\">Missing Documents? Contact Us</a>\n            </div>\n            <ul class=\"file-list\">\n            ${fileLinks.map( (file) => {\n              return `<li>\n                <a href=\"${file.url}\" nofollow class=\"file-link\">${(file.name) ? file.name : file.url}</a>\n                <span class=\"file-type\">${file.type}</a>\n              </li>`;\n            }).join('   ')}\n            </ul>\n          </section>\n        </div>\n        <div class=\"contract-actions\">\n          <button class=\"contact-supplier\" data-contract-id=\"${contract.id}\">\n            <span class=\"button-icon\"><img src=\"../img/email.svg\"></span>\n            <span class=\"button-text\">Contact Supplier</span>\n          </button>\n          <button class=\"share-contract\" data-contract-id=\"${contract.id}\">\n            <span class=\"button-icon\"><img src=\"../img/share.svg\"></span>\n            <span class=\"button-text\">Share Contract</span>\n          </button>\n\n          <a class=\"questions-link\">Questions Or Suggestions?</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"overlay-background\"></div>`\n  }\n\n\n}\n\n\n//# sourceURL=webpack:///./js/components/coprocure-contract/contract.js?");

/***/ }),

/***/ "./js/components/coprocure-contract/get-params.js":
/*!********************************************************!*\
  !*** ./js/components/coprocure-contract/get-params.js ***!
  \********************************************************/
/*! exports provided: getParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getParams\", function() { return getParams; });\nfunction getParams() {\n  let paramsObj = {};\n  window.location.search.replace('?','').split('&').forEach((pair) => {\n    let pairObj = pair.split('=');\n    paramsObj[pairObj[0]] = pairObj[1];\n  })\n  return paramsObj;\n}\n\n//# sourceURL=webpack:///./js/components/coprocure-contract/get-params.js?");

/***/ }),

/***/ "./js/components/coprocure-contract/index.js":
/*!***************************************************!*\
  !*** ./js/components/coprocure-contract/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CoProcureContract; });\n/* harmony import */ var _contract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contract.js */ \"./js/components/coprocure-contract/contract.js\");\n/* harmony import */ var _coprocure_search_spinner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../coprocure-search/spinner.js */ \"./js/components/coprocure-search/spinner.js\");\n/* harmony import */ var _coprocure_search_overlays_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coprocure-search/overlays.js */ \"./js/components/coprocure-search/overlays.js\");\n/* harmony import */ var _coprocure_search_tracking_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../coprocure-search/tracking.js */ \"./js/components/coprocure-search/tracking.js\");\n/* harmony import */ var _get_params_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-params.js */ \"./js/components/coprocure-contract/get-params.js\");\n\n\n\n\n\n\nclass CoProcureContract extends HTMLElement {\n  static get observedAttributes() {\n    return ['contractid'];\n  }\n\n  attributeChangedCallback(attr, oldValue, newValue) {\n    if(attr === 'contractid') {\n      if(newValue) {\n        this.contractId = newValue;\n        if(this.contractId === 'none') {\n          this.innerHTML = '';\n        } else {\n          this.getContract();\n        }\n      }\n    }\n  }\n\n  connectedCallback() {\n    if(this.getAttribute('contractid')) {\n      this.contractId = this.getAttribute('contractid');\n    }\n    let queryParams = Object(_get_params_js__WEBPACK_IMPORTED_MODULE_4__[\"getParams\"])();\n    if(queryParams.contractId) {\n      this.contractId = queryParams.contractId;\n      this.setAttribute('contractid', this.contractId);\n    }\n  }\n\n  getContract() {\n    let contractElement = document.querySelector('coprocure-contract');\n    contractElement.innerHTML = `<div class=\"contract-detail\">${Object(_coprocure_search_spinner_js__WEBPACK_IMPORTED_MODULE_1__[\"spinner\"])()}</div>`;\n    let url = `https://1lnhd57e8f.execute-api.us-west-1.amazonaws.com/prod?&q.parser=structured&q=_id:%27${this.contractId}%27`\n    let component = this;\n    Object(_coprocure_search_tracking_js__WEBPACK_IMPORTED_MODULE_3__[\"trackEvent\"])('view', 'contract', this.contractId);\n    fetch(url)\n    .then(function(response) {\n      return response.json();\n    })\n    .then(function(json) {\n      component.renderContract(json);\n    });\n  }\n\n  renderContract(json) {\n    // assign the html to a contract element instead\n    // maybe just set an id on another custom element\n    let contractElement = document.querySelector('coprocure-contract .contract-detail');\n    contractElement.innerHTML = Object(_contract_js__WEBPACK_IMPORTED_MODULE_0__[\"contractLayout\"])(json);\n    window.scroll(0,0);\n    contractElement.classList.add('get-big')\n\n    setTimeout(function() {\n      if(document.querySelector('.background-hider') && document.querySelector('coprocure-search').getAttribute('query')) {\n        document.querySelector('.background-hider').style.display = 'block';\n        document.querySelector('body').classList.add('noscroll');\n      }\n    }, 300)\n\n    document.querySelector('.close-overlay').addEventListener('click',function(event) {\n      event.preventDefault();\n      contractElement.classList.remove('get-big');\n      if(document.querySelector('.background-hider')) {\n        document.querySelector('.background-hider').style.display = 'none';\n      }\n      document.querySelector('body').classList.remove('noscroll');\n      window.history.pushState({}, '', this.href);\n      setTimeout(function() {\n        document.querySelector('coprocure-contract').setAttribute('contractid',''); // blanking this will not trigger attributeChangeCallback, which seems weird\n        document.querySelector('coprocure-contract').innerHTML = '';\n        }, 300)\n    })\n\n    document.querySelector('.contact-supplier').addEventListener('click',function(event) {\n      event.preventDefault();\n      Object(_coprocure_search_tracking_js__WEBPACK_IMPORTED_MODULE_3__[\"trackEvent\"])('modal', 'contact-supplier', this.dataset.contractId);\n      Object(_coprocure_search_overlays_js__WEBPACK_IMPORTED_MODULE_2__[\"showContactVendorModal\"])(this.dataset.contractId)\n    })\n    document.querySelector('.share-contract').addEventListener('click',function(event) {\n      event.preventDefault();\n      Object(_coprocure_search_tracking_js__WEBPACK_IMPORTED_MODULE_3__[\"trackEvent\"])('modal', 'share', this.dataset.contractId);\n      Object(_coprocure_search_overlays_js__WEBPACK_IMPORTED_MODULE_2__[\"showShareModal\"])(this.dataset.contractId)\n    })\n    document.querySelector('.questions-link').addEventListener('click',function(event) {\n      event.preventDefault();\n      Object(_coprocure_search_overlays_js__WEBPACK_IMPORTED_MODULE_2__[\"showAdditionalDocsModal\"])({type:'questions'})\n    })\n    document.querySelector('.missing-documents').addEventListener('click',function(event) {\n      event.preventDefault();\n      Object(_coprocure_search_tracking_js__WEBPACK_IMPORTED_MODULE_3__[\"trackEvent\"])('modal', 'missing-documents', this.dataset.contractId);\n      Object(_coprocure_search_overlays_js__WEBPACK_IMPORTED_MODULE_2__[\"showAdditionalDocsModal\"])({type:'docs',contractId:this.dataset.contractId})\n    })\n  }\n}\n\ncustomElements.define(\"coprocure-contract\", CoProcureContract);\n\n\n//# sourceURL=webpack:///./js/components/coprocure-contract/index.js?");

/***/ }),

/***/ "./js/components/coprocure-pagination/_index.scss":
/*!********************************************************!*\
  !*** ./js/components/coprocure-pagination/_index.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./js/components/coprocure-pagination/_index.scss?");

/***/ }),

/***/ "./js/components/coprocure-pagination/index.js":
/*!*****************************************************!*\
  !*** ./js/components/coprocure-pagination/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CoProcurePagination; });\nclass CoProcurePagination extends HTMLElement {\n  static get observedAttributes() {\n    return [\"current\",\"total\"];\n  }\n\n  attributeChangedCallback(attr, oldValue, newValue) {\n  }\n\n  connectedCallback() {\n    this.paginationIncrement = 10;\n    this.total = this.getAttribute('total');\n    this.current = this.getAttribute('current');\n    this.render();\n  }\n\n  render() {\n    let numPages = parseInt(Math.ceil(this.total / this.paginationIncrement));\n    let pageSet = [];\n    let startPage = 1;\n    if(this.current > 5) {\n      startPage = this.current - 2;\n      pageSet.push(1);\n      pageSet.push('...');\n    }\n    for(let i = startPage;i <= numPages; i++) {\n      if(i === startPage + 5) {\n        pageSet.push('...');\n      }\n      if(i < startPage + 5 || i === numPages) {\n        pageSet.push(i);\n      }\n    }\n    if(numPages > 0) {\n      this.innerHTML = `\n        <div class=\"page-links\">\n          <a class=\"back\" data-page-num=\"${parseInt(this.current) - 1}\">\n            <svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M1 11L6 5.82759L1 1\" stroke=\"#37A8EB\"/>\n            </svg>\n          </a>\n          ${pageSet.map( (num) => {\n            let classAugment = '';\n            if(num == this.current) {\n              classAugment = 'current';\n            }\n            return `<a data-page-num=\"${num}\" class=\"page-link ${classAugment}\">${num}</a>`;\n          }).join('\\n     ')}\n          <a class=\"forward\" data-page-num=\"${parseInt(this.current) + 1}\">\n            <svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M1 11L6 5.82759L1 1\" stroke=\"#37A8EB\"/>\n            </svg>\n          </a>\n        </div>\n      `;\n\n      document.querySelectorAll('.page-links a').forEach( (link) => {\n        link.addEventListener('click', function(event) {\n          event.preventDefault()\n          let desiredPage = this.dataset.pageNum;\n          if(desiredPage > 0 && desiredPage <= numPages) {\n            let navEvent = new CustomEvent('navigation', {'detail': {'page':desiredPage}});          \n            document.querySelector('coprocure-pagination').dispatchEvent(navEvent);\n          }    \n        })\n      })\n    }\n  }\n\n  // when you click on this it should emit a custom event to the coprocure-pagination element\n}\n\ncustomElements.define(\"coprocure-pagination\", CoProcurePagination);\n\n//# sourceURL=webpack:///./js/components/coprocure-pagination/index.js?");

/***/ }),

/***/ "./js/components/coprocure-search/_index.scss":
/*!****************************************************!*\
  !*** ./js/components/coprocure-search/_index.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./js/components/coprocure-search/_index.scss?");

/***/ }),

/***/ "./js/components/coprocure-search/_spinner.scss":
/*!******************************************************!*\
  !*** ./js/components/coprocure-search/_spinner.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./js/components/coprocure-search/_spinner.scss?");

/***/ }),

/***/ "./js/components/coprocure-search/buyers.js":
/*!**************************************************!*\
  !*** ./js/components/coprocure-search/buyers.js ***!
  \**************************************************/
/*! exports provided: buyers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buyers\", function() { return buyers; });\nfunction buyers() {\n  return [\"Adams County\",\"Barron County\",\"Barron County, Wisconsin\",\"Barrow County\",\"Beaverton School District\",\"City Of Charlotte\",\"City Of Kansas City\",\"City Of Mesa Arizona\",\"City and County of Denver\",\"City of Beaverton\",\"City of Charlotte, NC\",\"City of Dallas\",\"City of Euless\",\"City of Fort Worth - TX\",\"City of Gladstone\",\"City of Hillsboro\",\"City of Houston\",\"City of Kansas City\",\"City of Kansas City, Missouri\",\"City of Kansas City, Mo\",\"City of Las Vegas - NV\", \"City of Lee's Summit\", \"City of Mesquite, Texas\",\"City of Palo Alto\",\"City of Phoenix\",\"City of Portland\",\"City of Richmond\",\"City of Rochester Hills - Rochester Hills - M\",\"City of Rochester Hills - Rochester Hills - MI\",\"City of Sacramento - CA\",\"City of San Antonio\",\"City of Santa Monica\",\"City of Seattle\",\"City of Springfield\",\"City of Tamarac - FL\",\"City of Tucson - AZ\",\"City of Vancouver\",\"Clark County\",\"Clay County\",\"Cobb County\",\"Cobb County - GA\",\"Cook County\",\"County of Dupage - IL\",\"County of Sacramento\",\"Department of Information Resources\",\"E&I Cooperative Services\",\"ESC Region 19\",\"Fairfax County\",\"Fairfax County - VA\",\"Fresno Unified School District\",\"Fresno Unified School District - CA\",\"General Services Administration\",\"HGACBuy\",\"Harford County Public Schools\",\"Harford Public Schools\",\"Harris County Department of Education\",\"Harris County Department of Education (HCDE)\",\"Johnson County\",\"Kansas City Regional Purchasing Cooperative (KCRPC)\",\"Kansas Department of Administration\",\"Kansas Kansas Highway Patrol\",\"Lee's Summit R-7\",\"Maricopa County\",\"Mecklenburg County - NC\",\"Metro\",\"Metropolitan Transportation Commission (MTC)\",\"Miami-Dade County - FL\",\"Missouri State University\",\"Multnomah County\",\"Norfolk Public Schools\",\"North Carolina State University\",\"North Carolina State University - NC\",\"Orange County\",\"Oregon State University - OR\",\"Port of Portland - OR\",\"Portland Comm Coll\",\"Portland Public Schools\",\"Prince William County Public Schools\",\"Public Procurement Authority\",\"Region 14 ESC\",\"Region 14 Education Service Center\",\"Region 8 ESC\",\"Region IV ESC - TX\",\"Saint Louis County, Missouri\",\"Sandy Springs\",\"Sourcewell\",\"State of Arizonas\",\"State of California\",\"State of Kansas\",\"State of Missouri\", \"State of Oregon\", \"State of Washington\",\"TVF&R\",\"TriMet\",\"University of Alabama\",\"University of CA Office of the President (UCOP) - Oakland - CA\",\"Washington Co\",\"Washington, D.C.\"]\n}\n\n//# sourceURL=webpack:///./js/components/coprocure-search/buyers.js?");

/***/ }),

/***/ "./js/components/coprocure-search/check-parents.js":
/*!*********************************************************!*\
  !*** ./js/components/coprocure-search/check-parents.js ***!
  \*********************************************************/
/*! exports provided: checkParents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkParents\", function() { return checkParents; });\nfunction checkParents(event, targetClass) {\n  let targetNode = event.target;\n/*\n  if(targetNode && targetNode.classList && targetNode.classList.contains(targetClass)) {\n    return targetNode;\n  }\n*/\n  while(targetNode) {\n    if(targetNode.classList && targetNode.classList.length > 0) {\n      let classes = targetNode.classList;\n      if(classes.contains(targetClass)) {\n        return targetNode;\n      }\n    }\n    targetNode = targetNode.parentNode;\n  }\n  return false;\n}\n\n//# sourceURL=webpack:///./js/components/coprocure-search/check-parents.js?");

/***/ }),

/***/ "./js/components/coprocure-search/coops.js":
/*!*************************************************!*\
  !*** ./js/components/coprocure-search/coops.js ***!
  \*************************************************/
/*! exports provided: coops */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"coops\", function() { return coops; });\nfunction coops() {\n  return [\"1Government Procurement Alliance (1GPA)\", \"BuyBoard\", \"Choice Partners\", \"E&I Cooperative Services\", \"ESC19 Allied States Cooperative\", \"HGACBuy\", \"Kansas City Regional Purchasing Cooperative (KCRPC)\", \"Minnesota Multistate Contracting Alliance for Pharmacy (MMCAP)\", \"NASPO ValuePoint\", \"National Cooperative Purchasing Alliance (NCPA)\", \"OMNIA Partners\", \"Sourcewell\", \"The Interlocal Purchasing System (TIPS)\", \"Texas Department of Information Resources (DIR)\"]\n}\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/components/coprocure-search/coops.js?");

/***/ }),

/***/ "./js/components/coprocure-search/index.js":
/*!*************************************************!*\
  !*** ./js/components/coprocure-search/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CoProcureSearch; });\n/* harmony import */ var _search_results_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-results.js */ \"./js/components/coprocure-search/search-results.js\");\n/* harmony import */ var _coprocure_pagination_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../coprocure-pagination/index.js */ \"./js/components/coprocure-pagination/index.js\");\n/* harmony import */ var _spinner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.js */ \"./js/components/coprocure-search/spinner.js\");\n/* harmony import */ var _states_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states.js */ \"./js/components/coprocure-search/states.js\");\n/* harmony import */ var _buyers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buyers.js */ \"./js/components/coprocure-search/buyers.js\");\n/* harmony import */ var _coops_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coops.js */ \"./js/components/coprocure-search/coops.js\");\n/* harmony import */ var _overlays_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overlays.js */ \"./js/components/coprocure-search/overlays.js\");\n/* harmony import */ var _tracking_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tracking.js */ \"./js/components/coprocure-search/tracking.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction getParams() {\n  let paramsObj = {};\n  window.location.search.replace('?','').split('&').forEach((pair) => {\n    let pairObj = pair.split('=');\n    paramsObj[pairObj[0]] = pairObj[1];\n  })\n  return paramsObj;\n}\n\nclass CoProcureSearch extends HTMLElement {\n  static get observedAttributes() {\n    return ['query', 'page', 'sort', 'states', 'buyers', 'coops', 'search'];\n  }\n\n  attributeChangedCallback(attr, oldValue, newValue) {\n    if(attr === 'query') {\n      if(newValue) {\n        this.query = newValue;\n        this.setAttribute('page','');\n        this.setAttribute('sort','');\n        this.search();\n      }\n    }\n    if(attr === 'page') {\n      if(newValue) {\n        this.page = newValue;\n        this.search();\n      }\n    }\n    if(attr === 'sort') {\n      if(newValue) {\n        this.sort = newValue;\n        this.search();\n      }\n    }\n    if(attr === 'states') {\n      if(newValue) {\n        this.states = JSON.parse(newValue);\n      }\n    }\n    if(attr === 'buyers') {\n      if(newValue) {\n        this.buyers = JSON.parse(newValue);\n      }\n    }\n    if(attr === 'coops') {\n      if(newValue) {\n        this.coops = JSON.parse(newValue);\n      }\n    }\n    if(attr === 'search') {\n      this.search()\n    }\n  }\n\n  connectedCallback() {\n    this.showExpired = false;\n    this.showNonCoop = false;\n    if(this.getAttribute('query')) {\n      this.query = this.getAttribute('query');\n    }\n    let queryParams = getParams();\n    if(queryParams.query) {\n      this.query = queryParams.query;\n      this.setAttribute('query', this.query);\n    }\n  }\n\n  search() {\n    this.innerHTML = Object(_spinner_js__WEBPACK_IMPORTED_MODULE_2__[\"spinner\"])();\n    window.scrollTo(0,0);\n    let numResults = 10;\n    let start = 0;\n    if(this.page && this.page > 1) {\n      start = (numResults * this.page) - numResults;\n    }\n    let expParam = `expiration:['${new Date().toISOString()}',}`;\n    let url = `https://1lnhd57e8f.execute-api.us-west-1.amazonaws.com/prod?q.parser=structured&size=${numResults}&start=${start}`;\n\n    // have to split the query into separate terms if it is not enclosed in quotes or the structured filters will fail\n    if(this.query) {\n      if(this.query.indexOf('\"')<0) {\n        url += `&q=(and `;\n        decodeURIComponent(this.query).split(' ').forEach( (term) => {\n          url += ` '${term}'`;\n        })\n      } else {\n        url += `&q=(and '${this.query}' `;\n      }\n    }\n    if(this.states && this.states.length > 0) {\n      url += `(or buyer_lead_agency_state:`;\n      this.states.forEach( (state) => {\n        url += `'${state}' `;\n      })\n      url += `)`\n    }\n    if( (this.buyers && this.buyers.length > 0)) {\n      url += `(or buyer_lead_agency:`;\n      this.buyers.forEach( (buyer) => {\n        url += `'${encodeURIComponent(buyer)}' `;\n      })\n      url += `)`\n    }\n    if(this.coops && this.coops.length > 0) {\n      url += ` (or cooperative_affiliation:`;\n      this.coops.forEach( (coop) => {\n        url += `'${encodeURIComponent(coop)}' `;\n      })\n      url += `)`\n    }\n    if(!this.showNonCoop) {\n      url += `(and cooperative_language:'true')`;\n    }\n    url += `)`\n    if(this.sort) {\n      url += '&sort='+this.sort;\n      Object(_tracking_js__WEBPACK_IMPORTED_MODULE_7__[\"trackEvent\"])('search', 'sort', this.sort);\n    }\n    if(!this.showExpired) {\n      url += `&fq=${encodeURIComponent(expParam)}`;\n    }\n    let component = this;\n    fetch(url)\n    .then(function(response) {\n      return response.json();\n    })\n    .then(function(json) {\n      console.log(json)\n      component.renderResults(json);\n      Object(_tracking_js__WEBPACK_IMPORTED_MODULE_7__[\"trackEvent\"])('search', 'query', component.query);\n    });\n  }\n\n  renderResults(json) {\n    this.innerHTML = Object(_search_results_js__WEBPACK_IMPORTED_MODULE_0__[\"resultLayout\"])(json, this.query, this.sort, this.showExpired, this.showNonCoop, _states_js__WEBPACK_IMPORTED_MODULE_3__[\"states\"], _buyers_js__WEBPACK_IMPORTED_MODULE_4__[\"buyers\"], _coops_js__WEBPACK_IMPORTED_MODULE_5__[\"coops\"], this.states, this.buyers, this.coops);\n    window.lastSearch = window.location.toString();\n\n    if(document.querySelector('a[href=\"#contactanchor\"]')) {\n      document.querySelector('a[href=\"#contactanchor\"]').addEventListener('click', function() {\n        document.querySelector('.message-info textarea[name=\"description\"]').value = 'Please help with the following research request:'\n      })\n    }    \n\n    let component = this;\n    // listen for custom events on the contained pagination element\n    document.querySelector('coprocure-pagination').addEventListener('navigation', function (e) {\n      Object(_tracking_js__WEBPACK_IMPORTED_MODULE_7__[\"trackEvent\"])('search', 'pagination', e.detail.page);\n      document.querySelector('coprocure-search').setAttribute('page',e.detail.page);\n    })\n    document.querySelector('.show-filters').addEventListener('click', function(event) {\n      event.preventDefault();\n      document.querySelector('.search-filters').classList.toggle('active');\n      document.querySelector('.overlay-background').classList.add('active');\n      document.body.classList.add('noscroll');\n    })\n    document.querySelector('.overlay-background').addEventListener('click', function(event) {\n      event.preventDefault();\n      document.querySelector('.overlay-background').classList.remove('active');\n      document.querySelector('.search-filters').classList.remove('active');\n      document.body.classList.remove('noscroll');\n    })\n    document.querySelector('.search-sort').addEventListener('change', function(event) {\n      event.preventDefault();\n      document.querySelector('coprocure-search').setAttribute('sort',event.target.value);\n    })\n    document.getElementById('expired').addEventListener('change', function(event) {\n      if(this.checked) {\n        component.showExpired = true;\n        Object(_tracking_js__WEBPACK_IMPORTED_MODULE_7__[\"trackEvent\"])('search', 'filter', 'showExpired');\n      } else {\n        component.showExpired = false;\n      }\n      component.search();\n    })\n    document.getElementById('noncoop').addEventListener('change', function(event) {\n      if(this.checked) {\n        component.showNonCoop = true;\n        Object(_tracking_js__WEBPACK_IMPORTED_MODULE_7__[\"trackEvent\"])('search', 'filter', 'showNonCoop');\n      } else {\n        component.showNonCoop = false;\n      }\n      component.search();\n    })\n\n    document.querySelector('.js-filter-reset').addEventListener('click', function(event) {\n      event.preventDefault();\n      document.getElementById('noncoop').checked = false;\n      component.showNonCoop = false;\n      document.getElementById('expired').checked = false;\n      component.showExpired = false;\n      document.querySelectorAll('select[name=\"buyer_lead_agency_state\"] option:checked').forEach( (item) => {\n        item.selected = false;\n      })\n      document.querySelectorAll('select[name=\"buyer_lead_agency\"] option:checked').forEach( (item) => {\n        item.selected = false;\n      })\n      document.querySelector('select[name=\"buyer_lead_agency_state\"] option').selected = true;\n      document.querySelector('select[name=\"buyer_lead_agency\"] option').selected = true;\n      document.querySelector('select[name=\"coop_list\"] option').selected = true;\n      document.querySelector('button.filters-apply').click();\n    })\n    document.querySelector('button.filters-apply').addEventListener('click', function(event) {\n      event.preventDefault();\n      let selectedStates = document.querySelectorAll('select[name=\"buyer_lead_agency_state\"] option:checked');\n      let statesValues = Array.from(selectedStates).map(el => el.value);\n      if(statesValues.length > 0) {\n        document.querySelector('coprocure-search').setAttribute('states',JSON.stringify(statesValues));\n        Object(_tracking_js__WEBPACK_IMPORTED_MODULE_7__[\"trackEvent\"])('search', 'filter', 'coop='+JSON.stringify([statesValues]));\n      }\n\n      let selectedBuyers = document.querySelectorAll('select[name=\"buyer_lead_agency\"] option:checked');\n      let buyerValues = Array.from(selectedBuyers).map(el => el.value);\n      if(buyerValues.length > 0) {\n        document.querySelector('coprocure-search').setAttribute('buyers',JSON.stringify(buyerValues));\n        Object(_tracking_js__WEBPACK_IMPORTED_MODULE_7__[\"trackEvent\"])('search', 'filter', 'coop='+JSON.stringify([buyerValues]));\n      }\n\n      if(document.querySelector('select[name=\"coop_list\"] option:checked')) {\n        let selectedCoop = document.querySelector('select[name=\"coop_list\"] option:checked').value;\n        document.querySelector('coprocure-search').setAttribute('coops',JSON.stringify([selectedCoop]));\n        Object(_tracking_js__WEBPACK_IMPORTED_MODULE_7__[\"trackEvent\"])('search', 'filter', 'coop='+JSON.stringify([selectedCoop]));\n      }\n      let newSearch = 0;\n      let lastSearch = document.querySelector('coprocure-search').getAttribute('search');\n      if(lastSearch) {\n        newSearch = lastSearch++;\n      }\n      \n      document.querySelector('coprocure-search').setAttribute('search',newSearch);\n    })\n  }\n\n}\n\ncustomElements.define(\"coprocure-search\", CoProcureSearch);\n\n\n\n\n// https://1lnhd57e8f.execute-api.us-west-1.amazonaws.com/prod?size=1&start=0&q='vest'&q.parser=structured&fq=expiration%3A%5B'2019-01-01T00%3A00%3A00Z'%2C%7D&sort=expiration+asc\n\n\n//# sourceURL=webpack:///./js/components/coprocure-search/index.js?");

/***/ }),

/***/ "./js/components/coprocure-search/overlays.js":
/*!****************************************************!*\
  !*** ./js/components/coprocure-search/overlays.js ***!
  \****************************************************/
/*! exports provided: showIdentityModal, showShareModal, showContactVendorModal, showAdditionalDocsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showIdentityModal\", function() { return showIdentityModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showShareModal\", function() { return showShareModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showContactVendorModal\", function() { return showContactVendorModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showAdditionalDocsModal\", function() { return showAdditionalDocsModal; });\n/* harmony import */ var _check_parents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-parents.js */ \"./js/components/coprocure-search/check-parents.js\");\n/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.js */ \"./js/components/coprocure-search/user.js\");\n/* harmony import */ var _tracking_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracking.js */ \"./js/components/coprocure-search/tracking.js\");\n\n\n\n\nfunction showModal(modalInfo) {\n  let modalBackdrop = `<div class=\"modal-backdrop fade\"></div>`;\n  let modalHTML = `<div class=\"js-identityModal modal fade\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog ${modalInfo.extraClass}\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">${modalInfo.title}</h5>\n        </div>\n        <div class=\"modal-body\">\n          ${modalInfo.body}\n          <input type=\"hidden\" class=\"contractId\" name=\"contractId\" value=\"${modalInfo.contractId}\">\n        </div>\n      </div>\n    </div>\n  </div>`;\n  document.body.querySelector('coprocure-search').insertAdjacentHTML('beforeend',modalBackdrop);  \n  document.body.querySelector('coprocure-search').insertAdjacentHTML('beforeend',modalHTML);\n  setTimeout(function() {\n    document.querySelector('.js-identityModal .modal-dialog').classList.add('show');\n  },50);\n\n  if(document.querySelector('.js-identityModal button.contact-vendor')) {\n    document.querySelector('.js-identityModal button.contact-vendor').addEventListener('click',function(event) {\n      event.preventDefault();\n      event.stopPropagation();\n      let url = 'https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/vendor-contact';\n      let email = document.querySelector('.modal input[name=\"email\"]').value;\n      if(email) {\n        Object(_user_js__WEBPACK_IMPORTED_MODULE_1__[\"setUser\"])(email);\n      } else {\n        document.querySelector('.modal input[name=\"email\"]').focus();\n        return;\n      }\n      let description = document.querySelector('textarea[name=\"purchase-info\"]').value;\n      let contract = document.querySelector('input.contractId').value;\n      let requestType = 'Vendor contact request';\n      if(document.querySelector('input[name=\"anonymous\"]').checked) {\n        requestType = 'Anonymous '+requestType; \n      }\n      \n      fetch(url, {\n        method: 'post',\n        headers: {\n          \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify({ email, requestType, description, contract })\n      }).then(function(response) {\n        return response.text();\n      }).then(function(data) {\n        console.log(data);\n        document.querySelector('.modal-backdrop').remove();\n        document.querySelector('.js-identityModal').remove();\n      });\n    })\n  }\n\n  if(document.querySelector('.js-identityModal button.additional-documents')) {\n    document.querySelector('.js-identityModal button.additional-documents').addEventListener('click',function(event) {\n      event.preventDefault();\n      event.stopPropagation();\n      let url = 'https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/vendor-contact';\n      let email = document.querySelector('.modal-dialog form input[name=\"email\"]').value;\n      Object(_user_js__WEBPACK_IMPORTED_MODULE_1__[\"setUser\"])(email);\n      let description = document.querySelector('textarea[name=\"additional-documents\"]').value;\n      let contract = document.querySelector('input.contractId').value;\n      let requestType = 'Request for additional documents';\n  \n      fetch(url, {\n        method: 'post',\n        headers: {\n          \"Content-Type\": \"application/json\",\n        },    \n        body: JSON.stringify({ email, requestType, description, contract })\n      }).then(function(response) {\n        return response.text();\n      }).then(function(data) {\n        console.log(data);\n        document.querySelector('.modal-backdrop').remove();\n        document.querySelector('.js-identityModal').remove();\n      });\n    })\n  }\n\n  if(document.querySelector('.js-identityModal button.general-question')) {\n    document.querySelector('.js-identityModal button.general-question').addEventListener('click',function(event) {\n      event.preventDefault();\n      event.stopPropagation();\n      let url = 'https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/vendor-contact';\n      let email = document.querySelector('.modal-dialog form input[name=\"email\"').value;\n      Object(_user_js__WEBPACK_IMPORTED_MODULE_1__[\"setUser\"])(email);\n      let description = document.querySelector('textarea[name=\"general-question\"]').value;\n      let contract = '';\n      let requestType = 'General Question';\n  \n      fetch(url, {\n        method: 'post',\n        headers: {\n          \"Content-Type\": \"application/json\",\n        },    \n        body: JSON.stringify({ email, requestType, description, contract })\n      }).then(function(response) {\n        return response.text();\n      }).then(function(data) {\n        console.log(data);\n        document.querySelector('.modal-backdrop').remove();\n        document.querySelector('.js-identityModal').remove();\n      });\n    })\n  }  \n\n  document.querySelector('.modal').addEventListener('click',function(event) {\n    if(event.srcElement.name != 'anonymous') {\n      event.preventDefault();\n    }\n    // if they clicked outside modal window, on background\n    if(!Object(_check_parents_js__WEBPACK_IMPORTED_MODULE_0__[\"checkParents\"])(event, 'modal-dialog')) {\n      document.querySelector('.modal-backdrop').remove();\n      document.querySelector('.js-identityModal').remove();\n    }\n  })\n}\n\nfunction showIdentityModal(contractId) {\n  let modalInfo = {\n    title: `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z\"/></svg> Unlock access to thousands of contracts`,\n    body: `<p>Enter your government email address to immediately get full free access - including contract downloads.</p>\n      <form method=\"post\" action=\"\">\n        <label>\n          <span class=\"field-description\">Your email address</span>\n          <input type=\"text\" name=\"email\">\n        </label>\n        <button type=\"submit\" class=\"add-email\">Submit</button>\n      </form>`,\n    close: false,\n    contractId: contractId\n  }\n  showModal(modalInfo);\n}\n\nfunction showShareModal(contractId) {  \n  let modalInfo = {\n    title: 'Share this contract',\n    body: `<form method=\"post\" action=\"\" class=\"share-modal\">\n        <label>\n          <span class=\"multi-labels\">\n            <span class=\"field-description\">Share by link:</span>\n            <span class=\"success-label\">Success! Link copied to clipboard.</span>\n          </span>\n          <input type=\"text\" name=\"link\" value=\"https://www.coprocure.us/contract.html?contractId=${contractId}\">\n        </label>\n      </form>`,\n    close: false,\n    contractId: contractId\n  }\n  showModal(modalInfo);\n\n  document.querySelector('.modal-body input[name=\"link\"').select();\n  document.execCommand('copy');\n  \n}\n\nfunction showContactVendorModal(contractId) {\n  let modalInfo = {\n    title: '',\n    extraClass: 'mega',\n    body: `<form method=\"post\" action=\"/\" class=\"multisection-modal\">\n      <div class=\"modal-explanation-section\">\n        <span class=\"coprocure-logo--white\">\n          <svg width=\"19\" height=\"27\" viewBox=\"0 0 19 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M9.83033 26.875L6.56411 24.6539V9.8681L15.2705 3.91278L18.5893 5.93271V17.17L11.0661 22.4327V18.4335L15.2705 15.3359V8.55052L9.83033 12.2711V26.875Z\" fill=\"white\"/>\n            <path d=\"M0.0141602 17.17L5.07453 20.7668V16.3903L3.53069 15.2159V7.99523L8.5543 4.66735L10.2907 5.23814L13.5779 2.99763L8.5543 0.221191L0.0141602 5.93271V17.17Z\" fill=\"white\"/>\n          </svg>\n          <h5 class=\"coprocure-logo--text\">CoProcure</h5>\n        </span>\n        <p><strong>Get answers to your questions anonymously.</strong><br> Share Your information when you're ready, or not at all.</p>\n        <p><strong>Save time.</strong><br> Let CoProcure find the right supplier contact to answer your questions and/or start a new purchase.</p>\n      </div>\n      <div class=\"modal-business-section\">\n        <h5 class=\"modal-title\">Connect with a supplier through CoProcure</h5>\n        <label>\n          <span class=\"label-text\">Email</span>\n          <input type=\"text\" name=\"email\" value=\"${Object(_user_js__WEBPACK_IMPORTED_MODULE_1__[\"getUser\"])()}\" />\n        </label>\n        <label>\n          <span class=\"field-description\">Inquiry</span>\n          <textarea name=\"purchase-info\"></textarea>\n        </label>\n        <label style=\"display: flex;align-items: center;margin: 0 0 20px 0;\">\n          <input type=\"checkbox\" name=\"anonymous\" id=\"anonymous\">\n          <span class=\"field-description checkbox-label\">Keep my inquiry anonymous for now.</span>\n        </label>\n        <button type=\"submit\" class=\"contact-vendor\">Connect</button>\n      </div>\n    </form>`,\n    close: false,\n    contractId: contractId\n  }\n  showModal(modalInfo);\n}\n\nfunction showAdditionalDocsModal(infoObject) {\n  let modalInfo = {\n    title: 'Missing Documents? Let Us Know',\n    body: `<form method=\"post\" action=\"\">\n        <span class=\"field-description\">Thanks for letting us know that you'd like some additional documentation for this record. What documents would you like to request? Contract, bid tabulation, bid solicitation, amendments, other (please explain)</span>\n        <label>\n          <span class=\"label-text\">Email</span>\n          <input type=\"text\" name=\"email\" value=\"${Object(_user_js__WEBPACK_IMPORTED_MODULE_1__[\"getUser\"])()}\" />\n        </label>\n        <label>\n          <span class=\"label-text\">Inquiry</span>\n          <textarea name=\"additional-documents\"></textarea>\n        </label>\n        <button type=\"submit\" class=\"additional-documents\">Send</button>\n      </form>`,\n    close: false,\n    contractId: infoObject.contractId\n  }      \n\n  if(infoObject.type == 'questions') {\n    modalInfo = {\n      title: 'Have a General Question?',\n      body: `<form method=\"post\" action=\"\">\n      <span class=\"field-description\">We'd love to hear from you. Send us a message and we will get back to you as soon as we can.</span>\n      <label>\n        <span class=\"label-text\">Email</span>\n        <input type=\"text\" name=\"email\" value=\"${Object(_user_js__WEBPACK_IMPORTED_MODULE_1__[\"getUser\"])()}\" />\n      </label>\n      <label>\n        <span class=\"label-text\">Inquiry</span>\n        <textarea name=\"general-question\"></textarea>\n      </label>\n      <button type=\"submit\" class=\"general-question\">Send</button>\n    </form>`,\n      close: false\n    }      \n  }\n\n  showModal(modalInfo);\n}\n\n//# sourceURL=webpack:///./js/components/coprocure-search/overlays.js?");

/***/ }),

/***/ "./js/components/coprocure-search/search-results.js":
/*!**********************************************************!*\
  !*** ./js/components/coprocure-search/search-results.js ***!
  \**********************************************************/
/*! exports provided: resultLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resultLayout\", function() { return resultLayout; });\nfunction resultLayout(json, query, sort, expired, noncoop, states, buyers, coops, selectedStates, selectedBuyers, selectedCoops) {\n  let stateList = states();\n  let buyerList = buyers();\n  let coopList = coops();\n  return `<div class=\"search-results-container\">\n    <div class=\"search-filters\">\n      <form method=\"get\" action=\"/contracts.html\">\n        <div class=\"filter-section-title\">Filters</div> <a class=\"remove-all js-filter-reset\"> Remove All Filters </a>\n        <div class=\"field-group-header\">Contract Term</div>\n        <div class=\"field--checkbox\">\n          <input type=\"checkbox\" name=\"expired\" id=\"expired\" ${(expired) ? 'checked' : ''}>\n          <label for=\"expired\">Include expired contracts</label>\n        </div>\n        <div class=\"field-group-header\">Contract Language</div>\n        <div class=\"field--checkbox\">\n          <input type=\"checkbox\" name=\"noncoop\" id=\"noncoop\" ${(noncoop) ? 'checked' : ''}>\n          <label for=\"noncoop\">Include contracts without cooperative language</label>\n        </div>\n\n        <div class=\"field-group-header\">Contract Creator</div>\n\n        <div class=\"field--select\">\n          <label for=\"buyer_lead_agency_state\">Lead agency location</label>\n          <select class=\"ui fluid search dropdown\" multiple=\"\" name=\"buyer_lead_agency_state\" id=\"buyer_lead_agency_state\">\n            <option value=\"\">All states</option>\n            ${stateList.map(function(state) {\n              let checked = false;\n              if(selectedStates) {\n                selectedStates.forEach( (selectedState) => {\n                  if(state.abbrev == selectedState) {\n                    checked = true;\n                  }\n                })\n              }\n              return `<option value=\"${state.abbrev}\" ${(checked) ? 'selected' : ''}>${state.name}</option>`\n            }).join('   ')}\n          </select>\n        </div>\n        <div class=\"field--select\">\n          <label for=\"buyer_lead_agency\">Lead agencies</label>\n          <select name=\"buyer_lead_agency\" multiple id=\"lead_agencies\">\n            <option value=\"\">All agencies</option>\n            ${buyerList.map(function(buyer) {\n              let checked = false;\n              if(selectedBuyers) {\n                selectedBuyers.forEach( (selectedBuyer) => {\n                  if(buyer == selectedBuyer) {\n                    checked = true;\n                  }\n                })\n              }\n              return `<option value=\"${buyer}\" ${(checked) ? 'selected' : ''}>${buyer}</option>`\n            }).join('   ')}\n          </select>\n        </div>\n        <div class=\"field--select\">\n          <label for=\"coop_list\">Purchasing cooperatives/consortiums</label>\n          <select name=\"coop_list\" id=\"coop_list\">\n            <option value=\"\">All cooperatives/consortiums</option>\n            ${coopList.map(function(coop) {\n              let checked = false;\n              if(selectedCoops) {\n                selectedCoops.forEach( (selectedCoop) => {\n                  if(coop == selectedCoop) {\n                    checked = true;\n                  }\n                })\n              }\n              return `<option value=\"${coop}\" ${(checked) ? ' selected' : ''}>${coop}</option>`\n            }).join('   ')}\n          </select>\n        </div>\n\n        <button class=\"filters-apply\">Apply</button>\n\n        <p class=\"research-help\">Not seeing what you are looking for? <a href=\"#contactanchor\">Submit a research request</a> for extra help finding the contracts you need</p>\n      </form>\n\n    </div>\n    <div class=\"search-results\">\n    <div class=\"search-header\">\n      <div class=\"search-header-left\">\n        <h1>${decodeURIComponent(query)} contracts</h1>\n        <div class=\"search-query-controls\">\n          <a href=\"#\" class=\"show-filters\">Filters</a>\n          <span class=\"result-count\">Showing ${json.hits.start+1}-${json.hits.start + 10} of ${json.hits.found} results</span>\n        </div>\n      </div>\n      <div class=\"search-header-right\">\n        <select name=\"search-sort\" class=\"search-sort\">\n            <option value=\"\">Sort by Relevance</option>\n            <option value=\"suppliers%20asc\" ${(sort=='suppliers%20asc') ? 'selected' : ''}>Supplier A - Z</option>\n            <option value=\"suppliers%20desc\" ${(sort=='suppliers%20desc') ? 'selected' : ''}>Supplier Z - A</option>\n            <option value=\"buyer_lead_agency%20asc\" ${(sort=='buyer_lead_agency%20asc') ? 'selected' : ''}>Buyer A - Z</option>\n            <option value=\"buyer_lead_agency%20desc\" ${(sort=='buyer_lead_agency%20desc') ? 'selected' : ''}>Buyer Z - A</option>\n            <option value=\"expiration%20desc\" ${(sort=='expiration%20desc') ? 'selected' : ''}>Expiration</option>\n            <option value=\"title%20asc\" ${(sort=='title%20asc') ? 'selected' : ''}>Title A - Z</option>\n            <option value=\"title%20desc\" ${(sort=='title%20desc') ? 'selected' : ''}>Title Z - A</option>\n            <option value=\"buyer_lead_agency_state%20asc\" ${(sort=='buyer_lead_agency_state%20asc') ? 'selected' : ''}>Buyer State A - Z</option>\n            <option value=\"buyer_lead_agency_state%20desc\" ${(sort=='buyer_lead_agency_state%20desc') ? 'selected' : ''}>Buyer State Z - A</option>\n          </select>\n        <div>\n        </div>\n        </div>\n        </div>\n      <ul>\n        ${json.hits.hit.map( (item) => {\n          return `<li>\n          <a href=\"contract.html?contractId=${item.id}\" class=\"result-link\">\n           <div class=\"card-details\">\n              <div class=\"result-title\">${(item.fields.title) ? item.fields.title : ''}</div>\n              <div class=\"parties\">\n                ${(item.fields.buyer_lead_agency) ? `<div class=\"author\">\n                  <span class=\"field-name\">Contract Creator</span>\n                  <span class=\"field-value\">${item.fields.buyer_lead_agency}</span>\n                </div>` : ''}\n                ${(item.fields.suppliers) ? `<div class=\"buyer\">\n                  <span class=\"field-name\">Supplier</span>\n                  <span class=\"field-value\">${item.fields.suppliers}</span>\n                  ${(function() {\n                    let output = '';\n                    if(item.fields.cooperative_language == \"false\" || item.fields.cooperative_language == \"False\" ) {\n                        output += `<div class=\"warning\"> <img src=\"img/exclamation-point.svg\" class=\"\"> Non-cooperative contract</div>`\n                    }\n                    return output;\n                    })()}\n                </div>` : ''}\n                <div class=\"cooperative-agency\">\n                  <span class=\"field-name\">Purchasing cooperative/consortium</span>\n                  <span class=\"field-value\">${(item.fields.cooperative_affiliation) ? item.fields.cooperative_affiliation : 'N/A'}</span>\n                </div>\n              </div>\n              ${(function() {\n                let output = '';\n                if(item.fields.summary) {\n                  output += `<p>${item.fields.summary.substr(0,300)}`;\n                  if(item.fields.summary.length > 300) {\n                    output += '...';\n                  }\n                  output += `</p>`;\n                }\n                return output;\n              })()}\n            </div>\n            <div class=\"card-controls\">\n              <div class=\"result-expiration\">\n                <span class=\"field-name\">Expires on</span>\n                <span class=\"field-value\">${new Date(item.fields.expiration).toLocaleDateString(\"en-US\")}</span>\n              </div>\n            </div>\n            </a>\n          </li>`\n        }).join('\\n      ')}\n        <div class=\"result-link search-no-results\">\n        <img src=\"/img/question.svg\">\n        <h6 class=\"\">Not Seeing The Results You Are Looking For?</h6>\n        <div class=\"search-no-results-text\">Try changing your search terms above or filters located to the left. </div>\n        <!--<div class=\"\"> If you are still not seeing seeing results\n          <a href=\"\">submit a research request</a> for extra help finding the contracts you need\n          </div>\n        </div>\n        -->\n      </ul>\n      <coprocure-pagination current=\"${(json.hits.start + 10) / 10}\" total=\"${json.hits.found}\"></coprocure-pagination>\n    </div>\n  </div>\n  <div class=\"overlay-background\"></div>`\n}\n\n\n//# sourceURL=webpack:///./js/components/coprocure-search/search-results.js?");

/***/ }),

/***/ "./js/components/coprocure-search/spinner.js":
/*!***************************************************!*\
  !*** ./js/components/coprocure-search/spinner.js ***!
  \***************************************************/
/*! exports provided: spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spinner\", function() { return spinner; });\nfunction spinner() {\n  return `<div class=\"flower-spinner\">\n  <div class=\"dots-container\">\n    <div class=\"bigger-dot\">\n      <div class=\"smaller-dot\"></div>\n    </div>\n  </div>\n</div>`\n}\n\n//# sourceURL=webpack:///./js/components/coprocure-search/spinner.js?");

/***/ }),

/***/ "./js/components/coprocure-search/states.js":
/*!**************************************************!*\
  !*** ./js/components/coprocure-search/states.js ***!
  \**************************************************/
/*! exports provided: states */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"states\", function() { return states; });\nfunction states() {\n  return [{\"name\":\"Alabama\",\"abbrev\":\"AL\"},{\"name\":\"Alaska\",\"abbrev\":\"AK\"},{\"name\":\"Arizona\",\"abbrev\":\"AZ\"},{\"name\":\"Arkansas\",\"abbrev\":\"AR\"},{\"name\":\"California\",\"abbrev\":\"CA\"},{\"name\":\"Colorado\",\"abbrev\":\"CO\"},{\"name\":\"Connecticut\",\"abbrev\":\"CT\"},{\"name\":\"Delaware\",\"abbrev\":\"DE\"},{\"name\":\"Florida\",\"abbrev\":\"FL\"},{\"name\":\"Georgia\",\"abbrev\":\"GA\"},{\"name\":\"Hawaii\",\"abbrev\":\"HI\"},{\"name\":\"Idaho\",\"abbrev\":\"ID\"},{\"name\":\"Illinois\",\"abbrev\":\"IL\"},{\"name\":\"Indiana\",\"abbrev\":\"IN\"},{\"name\":\"Iowa\",\"abbrev\":\"IA\"},{\"name\":\"Kansas\",\"abbrev\":\"KS\"},{\"name\":\"Kentucky\",\"abbrev\":\"KY\"},{\"name\":\"Louisiana\",\"abbrev\":\"LA\"},{\"name\":\"Maine\",\"abbrev\":\"ME\"},{\"name\":\"Maryland\",\"abbrev\":\"MD\"},{\"name\":\"Massachusetts\",\"abbrev\":\"MA\"},{\"name\":\"Michigan\",\"abbrev\":\"MI\"},{\"name\":\"Minnesota\",\"abbrev\":\"MN\"},{\"name\":\"Mississippi\",\"abbrev\":\"MS\"},{\"name\":\"Missouri\",\"abbrev\":\"MO\"},{\"name\":\"Montana\",\"abbrev\":\"MT\"},{\"name\":\"Nebraska\",\"abbrev\":\"NE\"},{\"name\":\"Nevada\",\"abbrev\":\"NV\"},{\"name\":\"New Hampshire\",\"abbrev\":\"NH\"},{\"name\":\"New Jersey\",\"abbrev\":\"NJ\"},{\"name\":\"New Mexico\",\"abbrev\":\"NM\"},{\"name\":\"New York\",\"abbrev\":\"NY\"},{\"name\":\"North Carolina\",\"abbrev\":\"NC\"},{\"name\":\"North Dakota\",\"abbrev\":\"ND\"},{\"name\":\"Ohio\",\"abbrev\":\"OH\"},{\"name\":\"Oklahoma\",\"abbrev\":\"OK\"},{\"name\":\"Oregon\",\"abbrev\":\"OR\"},{\"name\":\"Pennsylvania\",\"abbrev\":\"PA\"},{\"name\":\"Rhode Island\",\"abbrev\":\"RI\"},{\"name\":\"South Carolina\",\"abbrev\":\"SC\"},{\"name\":\"South Dakota\",\"abbrev\":\"SD\"},{\"name\":\"Tennessee\",\"abbrev\":\"TN\"},{\"name\":\"Texas\",\"abbrev\":\"TX\"},{\"name\":\"Utah\",\"abbrev\":\"UT\"},{\"name\":\"Vermont\",\"abbrev\":\"VT\"},{\"name\":\"Virginia\",\"abbrev\":\"VA\"},{\"name\":\"Washington\",\"abbrev\":\"WA\"},{\"name\":\"West Virginia\",\"abbrev\":\"WV\"},{\"name\":\"Wisconsin\",\"abbrev\":\"WI\"},{\"name\":\"Wyoming\",\"abbrev\":\"WY\"}]\n}\n\n//# sourceURL=webpack:///./js/components/coprocure-search/states.js?");

/***/ }),

/***/ "./js/components/coprocure-search/tracking.js":
/*!****************************************************!*\
  !*** ./js/components/coprocure-search/tracking.js ***!
  \****************************************************/
/*! exports provided: trackEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trackEvent\", function() { return trackEvent; });\n/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.js */ \"./js/components/coprocure-search/user.js\");\n\n\nfunction trackEvent(category, action, label) {\n  if(typeof(ga)!=='undefined') {\n    ga('gtag_UA_121612479_1.send', {\n      hitType: 'event',\n      eventCategory: category,\n      eventAction: action,\n      eventLabel: label\n    });\n  }\n  if(Object(_user_js__WEBPACK_IMPORTED_MODULE_0__[\"getUser\"])()) {\n    // post to dynamodb\n    Object(_user_js__WEBPACK_IMPORTED_MODULE_0__[\"postActivity\"])(Object(_user_js__WEBPACK_IMPORTED_MODULE_0__[\"getUser\"])(), category, action, label);\n  } else {\n    // put it in localStorage stringified\n    let item = {};\n    item.category = category;\n    item.action = action;\n    item.label = label;\n    let data = [];\n    if(Object(_user_js__WEBPACK_IMPORTED_MODULE_0__[\"getLocalActivity\"])()) {\n      data = JSON.parse(Object(_user_js__WEBPACK_IMPORTED_MODULE_0__[\"getLocalActivity\"])());\n    }\n    data.push(item)\n    Object(_user_js__WEBPACK_IMPORTED_MODULE_0__[\"setLocalActivity\"])(JSON.stringify(data));\n  }\n}\n\n//# sourceURL=webpack:///./js/components/coprocure-search/tracking.js?");

/***/ }),

/***/ "./js/components/coprocure-search/user.js":
/*!************************************************!*\
  !*** ./js/components/coprocure-search/user.js ***!
  \************************************************/
/*! exports provided: getUser, getLocalActivity, setUser, setLocalActivity, postActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUser\", function() { return getUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocalActivity\", function() { return getLocalActivity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUser\", function() { return setUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLocalActivity\", function() { return setLocalActivity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postActivity\", function() { return postActivity; });\n/* harmony import */ var _check_parents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-parents.js */ \"./js/components/coprocure-search/check-parents.js\");\n\n\nfunction getUser() {\n  let user = localStorage.getItem('coProcureUser');\n  if(!user) {\n    return '';\n  }\n  return user;\n}\n\nfunction getLocalActivity() {\n  let activity = localStorage.getItem('coProcureActivity');\n  if(!activity) {\n    return false;\n  }\n  return activity;\n}\n\nfunction setUser(id) {\n  localStorage.setItem('coProcureUser',id);\n}\n\nfunction setLocalActivity(data) {\n  localStorage.setItem('coProcureActivity',data);\n}\n\nfunction postActivity(email, category, action ,label) {\n  let userAgent = navigator.userAgent;\n  let screenSize = `${window.innerWidth} ${window.innerHeight}`;\n  let postBody = { email, category, action, label, userAgent, screenSize }\n  // post to dynamodb\n  let url = 'https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/activity';\n  fetch(url, {\n    method: 'post',\n    headers: {\n      \"Content-Type\": \"application/json\",\n    },\n    body: JSON.stringify(postBody)\n  }).then(function(response) {\n    return response.text();\n  }).then(function(data) {\n    console.log(data);\n  });\n}\n\n//# sourceURL=webpack:///./js/components/coprocure-search/user.js?");

/***/ }),

/***/ "./js/components/footer/contactus.js":
/*!*******************************************!*\
  !*** ./js/components/footer/contactus.js ***!
  \*******************************************/
/*! exports provided: contactus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactus\", function() { return contactus; });\nfunction contactus() {\n  let postUrl = 'https://93flntoz36.execute-api.us-east-1.amazonaws.com/production/contact/';\n  // stage: postUrl = 'https://6ab48q8ys2.execute-api.us-east-1.amazonaws.com/staging/contact/'\n\n  document.querySelector('.contact-us button').addEventListener('click', function(event) {\n    event.preventDefault()\n    \n    let opts = {\n      name: document.querySelector('.contact-us input[name=\"fullname\"]').value,\n      email: document.querySelector('.contact-us input[name=\"email\"]').value,\n      description: document.querySelector('.contact-us textarea[name=\"description\"]').value\n    }\n\n    let fetchOpts = {\n      method: 'POST',\n      body: `fullname=${opts.name}&email=${opts.email}&description=${opts.description}`,\n      headers: {\n        'Content-Type': 'application/x-www-form-urlencoded',\n      }\n    };\n\n    fetch(postUrl, fetchOpts).then(function(response) {\n      return response.json();\n    }).then(function(data) {\n      console.log(data);\n      document.querySelector('.contact-us button').textContent = \"Thanks!\"\n    });\n\n  })\n}\n\n//# sourceURL=webpack:///./js/components/footer/contactus.js?");

/***/ }),

/***/ "./js/components/footer/index.js":
/*!***************************************!*\
  !*** ./js/components/footer/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CoProcureFooter; });\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ \"./js/components/footer/template.js\");\n/* harmony import */ var _contactus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactus.js */ \"./js/components/footer/contactus.js\");\n\n\n\nclass CoProcureFooter extends HTMLElement {\n\n  connectedCallback() {  \n    this.innerHTML = Object(_template_js__WEBPACK_IMPORTED_MODULE_0__[\"render\"])();\n    Object(_contactus_js__WEBPACK_IMPORTED_MODULE_1__[\"contactus\"])();\n  }\n  \n}\n\ncustomElements.define(\"coprocure-footer\", CoProcureFooter);\n\n//# sourceURL=webpack:///./js/components/footer/index.js?");

/***/ }),

/***/ "./js/components/footer/template.js":
/*!******************************************!*\
  !*** ./js/components/footer/template.js ***!
  \******************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nfunction render() {\n  return `\n  <section class=\"contact-us blue-back\">\n    <a name=\"contactanchor\"></a>\n    <div class=\"section-interior\">\n      <h3>Questions or suggestions?</h3>\n      <p class=\"subtext--medium\">We would love to hear from you. Send us a message and we will get back to you as soon as we can.</p>\n      <form method=\"POST\" action=\"https://5o1jg1o9n4.execute-api.us-west-2.amazonaws.com/staging/contact\">\n        <div class=\"fields row\">\n          <div class=\"submitter-info\">\n            <label>Name</label>\n            <input name=\"fullname\" type=\"text\" />\n            <label>Email</label>\n            <input name=\"email\" type=\"text\" />\n      </div>\n            <div class=\"message-info\">\n              <label>Message</label>\n              <textarea name=\"description\"></textarea>\n            </div>\n          </div>\n          <div class=\"\">\n            <button class=\"highlight\">Submit</button>\n          </div>\n      </form>\n    </div>\n  </section>\n  <footer>\n    <div class=\"section-interior\">\n      <div class=\"row info\">\n        <div class=\"tagline\">\n          <h3 class=\"some-big dark-emphasis\">We're committed to making government more transparent, efficient, and inclusive.</h3>\n          <div class=\"social-links\">\n            <a href=\"https://medium.com/coprocure\" target=\"_new\">\n      <img src=\"img/social/Medium.svg\" alt=\"Medium logo\" />\n    </a>\n            <a href=\"https://www.linkedin.com/company/coprocure/\" target=\"_new\">\n      <img src=\"img/social/LinkedIN.svg\" alt=\"LinkedIn logo\" />\n    </a>\n            <a href=\"mailto:hello@coprocure.us\" target=\"_new\">\n      <img src=\"img/social/Mail.svg\" alt=\"Mail icon\" />\n    </a>\n            <a href=\"https://twitter.com/coprocure\" target=\"_new\">\n      <img src=\"img/social/Twitter.svg\" alt=\"Twitter logo\" />\n    </a>\n          </div>\n        </div>\n        <div class=\"us-links\">\n          <a href=\"/about.html\">About</a>\n          <a href=\"https://medium.com/coprocure\" target=\"_new\">Blog</a>\n          <a href=\"/careers.html\">Careers</a>\n          <!-- <a href=\"/suppliers\">For Suppliers</a> -->\n        </div>\n      </div>\n      <div class=\"copyright\">\n        <div class=\"section-interior down-low\">\n          <span class=\"copyright\">&#0169; 2019 by CoProcure. All rights reserved.</span>\n          <div class=\"bottom-links\">\n            <a href=\"https://www.coprocure.us/add.html\">Share Your Contracts</href>\n            <a href=\"https://www.coprocure.us/files/CoProcure-privacy-policy.pdf\" target=\"_new\">Privacy Policy</a>\n            <a href=\"https://www.coprocure.us/files/CoProcure-terms-of-use.pdf\" target=\"_new\">Terms of Use</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>`;\n}\n\n\n//# sourceURL=webpack:///./js/components/footer/template.js?");

/***/ }),

/***/ "./js/components/header/index.js":
/*!***************************************!*\
  !*** ./js/components/header/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CoProcureHeader; });\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ \"./js/components/header/template.js\");\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../burger.js */ \"./js/burger.js\");\n/* harmony import */ var _search_run_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-run.js */ \"./js/components/header/search-run.js\");\n\n\n\n\nclass CoProcureHeader extends HTMLElement {\n  connectedCallback() {\n    this.innerHTML = Object(_template_js__WEBPACK_IMPORTED_MODULE_0__[\"render\"])();\n    Object(_burger_js__WEBPACK_IMPORTED_MODULE_1__[\"burger\"])();\n    Object(_search_run_js__WEBPACK_IMPORTED_MODULE_2__[\"search\"])();\n  }\n}\n\ncustomElements.define(\"coprocure-header\", CoProcureHeader);\n\n//# sourceURL=webpack:///./js/components/header/index.js?");

/***/ }),

/***/ "./js/components/header/router.js":
/*!****************************************!*\
  !*** ./js/components/header/router.js ***!
  \****************************************/
/*! exports provided: installRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"installRouter\", function() { return installRouter; });\n/**\n@license\nCopyright (c) 2018 The Polymer Project Authors. All rights reserved.\nThis code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt\nThe complete set of authors may be found at http://polymer.github.io/AUTHORS.txt\nThe complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt\nCode distributed by Google as part of the polymer project is also\nsubject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt\n*/\n/**\n  Basic router that calls a callback whenever the location is updated.\n\n  Example:\n\n    import { installRouter } from 'pwa-helpers/router.js';\n\n    installRouter((location) => handleNavigation(location));\n\n  For example, if you're using this router in a Redux-connected component,\n  you could dispatch an action in the callback:\n\n    import { installRouter } from 'pwa-helpers/router.js';\n    import { navigate } from '../actions/app.js';\n\n    installRouter((location) => store.dispatch(navigate(location)))\n\n  If you need to force a navigation to a new location programmatically, you can\n  do so by pushing a new state using the History API, and then manually\n  calling the callback with the new location:\n\n    window.history.pushState({}, '', '/new-route');\n    handleNavigation(window.location);\n\n  Optionally, you can use the second argument to read the event that caused the\n  navigation. For example, you may want to scroll to top only after a link click.\n\n    installRouter((location, event) => {\n      // Only scroll to top on link clicks, not popstate events.\n      if (event && event.type === 'click') {\n        window.scrollTo(0, 0);\n      }\n      handleNavigation(location);\n    });\n*/\nconst installRouter = (locationUpdatedCallback) => {\n  document.body.addEventListener('click', e => {\n    if (e.defaultPrevented || e.button !== 0 ||\n      e.metaKey || e.ctrlKey || e.shiftKey)\n      return;\n    const anchor = e.composedPath().filter(n => n.tagName === 'A')[0];\n    if (!anchor || anchor.target ||\n      anchor.hasAttribute('download') ||\n      anchor.getAttribute('rel') === 'external')\n      return;\n    const href = anchor.href;\n    console.log(href.indexOf('#'))\n    if (!href || href.indexOf('mailto:') !== -1 || href.indexOf('#') !== -1)\n      return;\n    const location = window.location;\n    const origin = location.origin || location.protocol + '//' + location.host;\n    if (href.indexOf(origin) !== 0)\n      return;\n    e.preventDefault();\n    if (href !== location.href) {\n      window.history.pushState({}, '', href);\n      locationUpdatedCallback(location, e);\n    }\n  });\n  window.addEventListener('popstate', e => locationUpdatedCallback(window.location, e));\n  locationUpdatedCallback(window.location, null /* event */);\n};\n//# sourceMappingURL=router.js.map\n\n//# sourceURL=webpack:///./js/components/header/router.js?");

/***/ }),

/***/ "./js/components/header/search-run.js":
/*!********************************************!*\
  !*** ./js/components/header/search-run.js ***!
  \********************************************/
/*! exports provided: search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"search\", function() { return search; });\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.js */ \"./js/components/header/router.js\");\n/* harmony import */ var _coprocure_contract_get_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../coprocure-contract/get-params.js */ \"./js/components/coprocure-contract/get-params.js\");\n\n\n\nlet isTicking;\nlet headerSearchVisible = false;\nlet searchNotRan = true;\nconst debounce = (callback, evt) => {\n  if (isTicking) return;\n  requestAnimationFrame(() => {\n    callback(evt);\n    isTicking = false;\n  });\n  isTicking = true;\n};\nconst handleScroll = evt => {\n  if(!headerSearchVisible && window.scrollY > 500  && window.innerWidth > 768) {\n    document.querySelector('.home header .search-container').style.opacity = '1';\n    headerSearchVisible = true;\n  }\n  if(window.location.pathname == '/' || window.location.pathname.indexOf('/index.html') == 0) {\n    if(window.scrollY < 500 && window.innerWidth > 768) {\n      document.querySelector('.home header .search-container').style.opacity = '0';\n      headerSearchVisible = false;\n    }\n  }\n}\n\n\ndocument.defaultView.onscroll = evt => debounce(handleScroll, evt);\ndocument.defaultView\n\n\nfunction search() {\n  if(document.querySelector('.search-now')) {\n    document.querySelectorAll('.search-now').forEach( (item) => {\n      item.addEventListener('click',runSearch);\n      searchNotRan = false;\n    })\n  }\n  // if I am not on homepage now immediately show header search box\n  if(window.location.pathname.indexOf('contract.html') > 0 || window.location.pathname.indexOf('contracts.html') > 0) {\n    document.querySelector('header .search-container').style.opacity = '1';\n    headerSearchVisible = true;\n  }\n}\n\n\nfunction runSearch(event) {\n  event.preventDefault();\n  let searchVal = event.target.closest('form').querySelector('input[name=\"coprocure_query\"]').value;\n  // send the search query to our embedded web component\n  hideHomePage();\n  document.querySelector('coprocure-search').setAttribute('page','1');\n  document.querySelector('coprocure-search').setAttribute('query',searchVal);\n\n  // reset contract detail element\n  let singlePageContract = document.querySelector('.contract-detail-page');\n  if(singlePageContract) {\n    document.querySelector('.contract-detail-page').classList.remove('contract-detail-page')\n  }\n  document.querySelector('coprocure-contract').setAttribute('contractid','none')\n\n  let backgroundHider = document.querySelector('.background-hider');\n  if(backgroundHider) {\n    backgroundHider.style.display = 'none';\n  }\n  document.body.classList.remove('noscroll');\n\n  // change the url\n  let searchUrl = `contracts.html?query=${searchVal}`\n  window.history.pushState({}, '', searchUrl);\n}\n\n\nfunction hideHomePage() {\n  if(document.querySelector('section.search')) {\n    document.querySelector('section.search').remove();\n    document.querySelector('section.map').remove();\n    document.querySelector('section.explanation').remove();\n    document.querySelector('section.testimonials-carousel').remove();\n    document.querySelector('section.about-us').remove();\n    document.querySelector('section.investors').remove();\n    document.querySelector('section.blog-carousel').remove();\n    document.querySelector('section.contact-us').remove();\n    document.querySelector('footer').remove();\n    // show header search\n    document.querySelector('header .search-container').style.opacity = '1';\n  }\n  if(document.querySelector('.js-content-section')) {\n    document.querySelectorAll('.js-content-section').forEach( (sect) => {\n      sect.remove();\n    })\n  }\n}\n\nfunction handleNavigation(loc, e) {\n  let staticPages = ['/about.html','/careers.html'];\n  staticPages.forEach( (path) => {\n    if(loc.pathname.indexOf(path) > -1) {\n      window.location = loc.href;\n    }\n  })\n\n  if(loc.pathname === '/') {\n    // handles popstate to homepage\n    window.location.reload();\n  }\n\n  if(loc.pathname.indexOf('/contract.html') > -1) {\n    // handles popstate to contract detail page\n    document.querySelector('coprocure-contract').setAttribute('contractId',loc.search.replace('?contractId=',''));\n  }\n  if(loc.pathname.indexOf('/contracts.html') > -1) {\n    // handles popstate to search results\n    if(!loc.hash) {\n      // a hash generates a popstate and we use anchor links to go to contact us form so prevent search reloading here\n      let queryParams = Object(_coprocure_contract_get_params_js__WEBPACK_IMPORTED_MODULE_1__[\"getParams\"])();\n      if(queryParams.query) {\n        document.querySelector('coprocure-search').setAttribute('query',loc.search.replace('?query=',''));\n      }\n    }\n\n    // we are on the search results page so we should reset contract detail component if needed\n    let singlePageContract = document.querySelector('.contract-detail-page');\n    if(singlePageContract) {\n      singlePageContract.classList.remove('contract-detail-page')\n    }\n    let backgroundHider = document.querySelector('.background-hider');\n    if(backgroundHider) {\n      backgroundHider.style.display = 'none';\n    }\n    document.body.classList.remove('noscroll');\n    let contractId = document.querySelector('coprocure-contract').getAttribute('contractid');\n    if(contractId && contractId != 'none') {\n      document.querySelector('coprocure-contract').setAttribute('contractid','none')\n    }\n    // maybe I was on the homepage...\n    hideHomePage();\n  }\n}\n\nObject(_router_js__WEBPACK_IMPORTED_MODULE_0__[\"installRouter\"])((location, event) => {\n  if(event) {\n    handleNavigation(location);\n  }\n  // not doing anything without an event because this fires on initial direct load\n});\n\n\n//# sourceURL=webpack:///./js/components/header/search-run.js?");

/***/ }),

/***/ "./js/components/header/template.js":
/*!******************************************!*\
  !*** ./js/components/header/template.js ***!
  \******************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nfunction render() {\n  return `  <header>\n  <navigation>\n      <a href=\"/\" class=\"company-identifier\">\n        <img src=\"/img/logo-svg.svg\" alt=\"CoProcure logo\">\n      </a>\n\n      <form class=\"search-container\">\n        <input class=\"search-box\" autocomplete=\"off\" name=\"coprocure_query\" placeholder=\"Keyword, supplier, lead agency...\">\n        <svg class=\"search-icon\" width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M18.053 11.8788C18.053 15.0669 15.4547 17.6607 12.238 17.6607C9.02125 17.6607 6.42301 15.0669 6.42301 11.8788C6.42301 8.6907 9.02125 6.09683 12.238 6.09683C15.4547 6.09683 18.053 8.6907 18.053 11.8788Z\" stroke=\"#37A8EB\" stroke-width=\"2.32599\"></path>\n          <path d=\"M16.3083 16.5088L23.8678 23.4537\" stroke=\"#37A8EB\" stroke-width=\"2.32599\"></path>\n        </svg>\n        <button class=\"search-now\">Search</button>\n      </form>\n      <span class=\"links\">\n        <a href=\"/about.html\">About</a>\n         <!--  <a href=\"/add.html\">For suppliers</a> -->\n      </span>\n\n      <svg class=\"big-search-icon\" width=\"33\" height=\"33\" viewBox=\"0 0 33 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"13.75\" cy=\"13.75\" r=\"6.5431\" stroke=\"#37A8EB\" stroke-width=\"3.41379\"/>\n        <path d=\"M18.5625 19.25L27.5 27.5\" stroke=\"#37A8EB\" stroke-width=\"3.41379\"/>\n      </svg>\n\n      <div class=\"burger-menu hamburger hamburger--squeeze\">\n        <div class=\"hamburger-box\">\n          <div class=\"hamburger-inner\"></div>\n        </div>\n      </div>\n  </navigation>\n</header>\n`;\n}\n\n\n//# sourceURL=webpack:///./js/components/header/template.js?");

/***/ }),

/***/ "./js/get-posts.js":
/*!*************************!*\
  !*** ./js/get-posts.js ***!
  \*************************/
/*! exports provided: getPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPosts\", function() { return getPosts; });\nfunction getPosts() {\n  fetch('https://coprocure.github.io/coprocure.us/feed.json')\n  .then(function(response) {\n    return response.json();\n  })\n  .then(function(myJson) {\n    template(myJson)\n  });\n\n  function template(json) {\n    let baseCounter = 4;\n    let splitCounter = 3;\n    if(window.innerWidth < 600) {\n      baseCounter = 1;\n      splitCounter = 0;\n    }\n    let output = `<h4>Insights, trends, and our latest news</h4>\n      <macro-carousel pagination>\n      ${json.items.map((item, index) => {\n        let description = item.description;\n        if(!description) {\n          description = '';\n        }\n        let output = '';\n        if(index % baseCounter === 0) {\n          output += `<article class=\"slide\">`;\n        }\n        let blogSummary = description.substr(0,170);\n        if(description.length > 170) {\n          blogSummary += '...';\n        }\n        output += `\n          <div class=\"carousel-card card--blog\">\n            <a class=\"picture-cropper\" href=\"${item.link}\"><img src=\"${item.thumbnail}\" alt=\"\" /></a>\n            <a href=\"${item.link}\" class=\"card-text\">\n              <h5>${item.title}</h5>\n              <p class=\"blog-summary\">${blogSummary}</p>\n            </a>\n          </div>`;\n        if(index % baseCounter === splitCounter) {\n          output += `</article>`;\n        }\n        return output;\n      }).join('\\n      ')}\n      </macro-carousel>`;\n\n    document.querySelector('.blog-carousel').innerHTML = output;\n  }\n}\n\n//# sourceURL=webpack:///./js/get-posts.js?");

/***/ }),

/***/ "./js/lazy-load-intersection.js":
/*!**************************************!*\
  !*** ./js/lazy-load-intersection.js ***!
  \**************************************/
/*! exports provided: lazyLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lazyLoading\", function() { return lazyLoading; });\n/* harmony import */ var _get_posts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-posts.js */ \"./js/get-posts.js\");\n\n\nfunction lazyLoading() {\n  const interactSettings = {\n    root: document.querySelector('.center'),\n    rootMargin: '0px 0px 200px 0px'\n  }\n\n  function onIntersectionImages(imageEntites) {\n    imageEntites.forEach(image => {\n      if (image.isIntersecting) {\n        observer.unobserve(image.target)\n        image.target.src = image.target.dataset.src\n        image.target.onload = () => image.target.classList.add('loaded')\n      }\n    })\n  }\n\n  let observer = new IntersectionObserver(onIntersectionImages, interactSettings)\n  let images = [...document.querySelectorAll('.lazy-image')]\n  images.forEach(image => {\n    observer.observe(image)\n  })\n\n\n\n  function onIntersectionBlog(blogEntities) {\n    blogEntities.forEach(entity => {\n      if (entity.isIntersecting) {\n        observer.unobserve(entity.target);\n        Object(_get_posts_js__WEBPACK_IMPORTED_MODULE_0__[\"getPosts\"])();\n        // blogContainer.target.onload = () => blogContainer.target.classList.add('loaded')\n      }\n    })\n  }\n\n  let blogPostContainer = document.querySelector('.blog-carousel');\n  let blogObserver = new IntersectionObserver(onIntersectionBlog, interactSettings);\n  if(blogPostContainer) {\n    blogObserver.observe(blogPostContainer);\n  }\n}\n\nlazyLoading();\n\n//# sourceURL=webpack:///./js/lazy-load-intersection.js?");

/***/ }),

/***/ "./src/css-v2/_about.scss":
/*!********************************!*\
  !*** ./src/css-v2/_about.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css-v2/_about.scss?");

/***/ }),

/***/ "./src/css-v2/_body.scss":
/*!*******************************!*\
  !*** ./src/css-v2/_body.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css-v2/_body.scss?");

/***/ }),

/***/ "./src/css-v2/_carousels.scss":
/*!************************************!*\
  !*** ./src/css-v2/_carousels.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css-v2/_carousels.scss?");

/***/ }),

/***/ "./src/css-v2/_footer.scss":
/*!*********************************!*\
  !*** ./src/css-v2/_footer.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css-v2/_footer.scss?");

/***/ }),

/***/ "./src/css-v2/_hamburger.scss":
/*!************************************!*\
  !*** ./src/css-v2/_hamburger.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css-v2/_hamburger.scss?");

/***/ }),

/***/ "./src/css-v2/_header.scss":
/*!*********************************!*\
  !*** ./src/css-v2/_header.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css-v2/_header.scss?");

/***/ }),

/***/ "./src/css-v2/_homepage.scss":
/*!***********************************!*\
  !*** ./src/css-v2/_homepage.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css-v2/_homepage.scss?");

/***/ }),

/***/ "./src/css-v2/_reset.scss":
/*!********************************!*\
  !*** ./src/css-v2/_reset.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css-v2/_reset.scss?");

/***/ }),

/***/ "./src/css-v2/_search-results.scss":
/*!*****************************************!*\
  !*** ./src/css-v2/_search-results.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css-v2/_search-results.scss?");

/***/ }),

/***/ "./src/index-v2.js":
/*!*************************!*\
  !*** ./src/index-v2.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./css-v2/_reset.scss */ \"./src/css-v2/_reset.scss\");\n__webpack_require__(/*! ./css-v2/_header.scss */ \"./src/css-v2/_header.scss\");\n__webpack_require__(/*! ./css-v2/_body.scss */ \"./src/css-v2/_body.scss\");\n__webpack_require__(/*! ./css-v2/_homepage.scss */ \"./src/css-v2/_homepage.scss\");\n__webpack_require__(/*! ./css-v2/_about.scss */ \"./src/css-v2/_about.scss\");\n__webpack_require__(/*! ./css-v2/_footer.scss */ \"./src/css-v2/_footer.scss\");\n__webpack_require__(/*! ./css-v2/_carousels.scss */ \"./src/css-v2/_carousels.scss\");\n__webpack_require__(/*! ./css-v2/_hamburger.scss */ \"./src/css-v2/_hamburger.scss\");\n__webpack_require__(/*! ./css-v2/_search-results.scss */ \"./src/css-v2/_search-results.scss\");\n__webpack_require__(/*! ../js/components/coprocure-search/_index.scss */ \"./js/components/coprocure-search/_index.scss\");\n__webpack_require__(/*! ../js/components/coprocure-search/_spinner.scss */ \"./js/components/coprocure-search/_spinner.scss\");\n__webpack_require__(/*! ../js/components/coprocure-contract/_contract.scss */ \"./js/components/coprocure-contract/_contract.scss\");\n__webpack_require__(/*! ../js/components/coprocure-pagination/_index.scss */ \"./js/components/coprocure-pagination/_index.scss\");\n\n__webpack_require__(/*! ../js/lazy-load-intersection.js */ \"./js/lazy-load-intersection.js\");\n\n__webpack_require__ (/*! ../js/components/header/index.js */ \"./js/components/header/index.js\");\n__webpack_require__ (/*! ../js/components/footer/index.js */ \"./js/components/footer/index.js\");\n__webpack_require__ (/*! ../js/components/coprocure-pagination/index.js */ \"./js/components/coprocure-pagination/index.js\");\n__webpack_require__ (/*! ../js/components/coprocure-search/index.js */ \"./js/components/coprocure-search/index.js\");\n__webpack_require__ (/*! ../js/components/coprocure-contract/index.js */ \"./js/components/coprocure-contract/index.js\");\n\n\n\n//# sourceURL=webpack:///./src/index-v2.js?");

/***/ })

/******/ });