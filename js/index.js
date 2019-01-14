import 'whatwg-fetch';
import 'nodelist-foreach-polyfill';

document.getElementById('submit-search').addEventListener('click',function(e) {
  e.preventDefault();
  window.highlightItem = '';
  window.reverseSort = '';
  getResults(false,0);
})

var isDate = function(date) {
  return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

window.currentSort = '';
let limit = false;

window.getResults = function(limit,start) {
  let query = '';
  if(limit || document.querySelector('input[name="query"]').value == '') {
    query = 'kcrpc%20and%20';
  }
  //let searchUrl = 'https://cz73hfbh8e.execute-api.us-east-1.amazonaws.com/stage?q='+query+document.querySelector('input[name="query"]').value; //+'&return='+fields;
  let searchUrl = 'https://nhhu21hyj1.execute-api.us-west-1.amazonaws.com/prod?start='+start+'&q='+query+document.querySelector('input[name="query"]').value + window.currentSort; //+'&return='+fields;
  fetch(searchUrl)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        displayResults(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

function displayResults(data) {
  let html = `
  <ul class="results-list">
    <li class="header">
      <span class="contract-name js-sortable">
        Contract name 
        <svg class="icon icon-caret icon-caret--down" id="icon--dropdown-carrot" viewBox="0 0 9.7667 6.7638" ><title>Dropdown Caret</title><path d="M5.5819,6.4285,9.5683,1.4552A.8953.8953,0,0,0,8.87,0H.8969A.8953.8953,0,0,0,.1984,1.4552L4.1848,6.4285A.8953.8953,0,0,0,5.5819,6.4285Z"></path></svg>
      </span>
      <span class="contract-expiration js-sortable">
        Expiration 
        <svg class="icon icon-caret icon-caret--down" id="icon--dropdown-carrot" viewBox="0 0 9.7667 6.7638" ><title>Dropdown Caret</title><path d="M5.5819,6.4285,9.5683,1.4552A.8953.8953,0,0,0,8.87,0H.8969A.8953.8953,0,0,0,.1984,1.4552L4.1848,6.4285A.8953.8953,0,0,0,5.5819,6.4285Z"></path></svg>
      </span>
      <span class="contract-agency js-sortable">
        Lead agency
      </span>
      <span class="contract-vendor">Vendor</span>
      <span class="contract-state">State</span>
      <span class="contract-expand"></span>
    </li>
  ${data.hits.hit.map(function(result) {
    let contracts = [];
    if(result.fields.contract_files) {
      contracts = JSON.parse(result.fields.contract_files);
    }
    let amendments = null;
    let pricing = null;
    let bid_tabulation = null;
    if(result.fields.amendments_files) {
      amendments = JSON.parse(result.fields.amendments_files);
    }
    if(result.fields.pricing_files) {
      pricing = JSON.parse(result.fields.pricing_files);
    }
    if(result.fields.bid_tabulation_files) {
      bid_tabulation = JSON.parse(result.fields.bid_tabulation_files);
    }
    return `
    <li>
      <span class="contract-name">
        <div>${result.fields.title}</div>
        <div class="summary">${(function() {
          if(result.fields.summary && result.fields.summary != 'undefined') { 
            return `${result.fields.summary}`;
          } else {
            return '';
          }
        })()}</div>
      </span>
      <span class="contract-expiration">
        ${(function() {
          if(isDate(result.fields.expiration)) {
            return new Date(result.fields.expiration).toLocaleDateString();
          } else {
            return '';
          }
        })()}
      </span>
      <span class="contract-agency">${(function() {
        if(result.fields.buyer) { 
          return `${result.fields.buyer}`;
        } else {
          return '';
        }
      })()}
      </span>
      <span class="contract-vendor">${(function() {
        if(result.fields.vendor) { 
          return `${result.fields.vendor.toString()}`;
        } else {
          if(result.fields.vendor_info) { 
            return `${result.fields.vendor_info.replace('undefined','')}`;
          } else {
            return '';
          }
        }
      })()}</span>
      <span class="contract-state">${(function() {
        if(result.fields.states) { 
          return `${result.fields.states}`;
        } else {
          return '';
        }
      })()}</span>
      <span class="contract-expand">
        <svg data-hit-id="${result.id}" class="expand-arrow" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="icon/arrow-down" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M20,6.39 L18.594,5 L9.987,13.261 L9.069,12.38 L9.074,12.385 L1.427,5.045 L0,6.414 C2.113,8.443 8.014,14.107 9.987,16 C11.453,14.594 10.024,15.965 20,6.39" id="arrow_down-[#339]" fill="#101010"></path>
          </g>
        </svg>          
      </span>
    </li>
    <li class="contracts" data-hit-id="${result.id}" style="display: none;">
      <div class="files">
        <h3>Contract</h3>
        ${contracts.map(function(file) {
          if(file.thumbnails) {
            return `<div class="fileset">
            <a href="${file.url}" target="_new"><img src="${file.thumbnails.large.url}" /></a>
            <a href="${file.url}" target="_new" class="file-name-link">${file.filename}</a>
          </div>`;
          } else {
            return `<div class="fileset">
              <a href="${file.url}" target="_new" class="file-name-link">${file.filename}</a>
            </div>`;
          }
        }).join('\n      ')}
        </div>
      </div>
      ${(function() {
        if(amendments) {
          return `<div class="files">
        <h3>Amendments</h3>
        ${amendments.map(function(file) {
          if(file.thumbnails) {
            return `<div class="fileset">
                <a href="${file.url}" target="_new"><img src="${file.thumbnails.large.url}" /></a>
                <a href="${file.url}" target="_new" class="file-name-link">${file.filename}</a>
              </div>`;
            } else {
              return `<div class="fileset">
              <a href="${file.url}" target="_new" class="file-name-link">${file.filename}</a>
            </div>`;
            }
        }).join('\n      ')}
        </div>
      </div>`;
        } else {
          return '';
        }
      })()}
      ${(function() {
        if(pricing) {
          return `<div class="files">
        <h3>Pricing</h3>
        ${pricing.map(function(file) {
          if(file.thumbnails) {
            return `<div class="fileset">
              <a href="${file.url}" target="_new"><img src="${file.thumbnails.large.url}" /></a>
              <a href="${file.url}" target="_new" class="file-name-link">${file.filename}</a>
            </div>`;
          } else {
            return `<div class="fileset">
            <a href="${file.url}" target="_new" class="file-name-link">${file.filename}</a>
          </div>`;
          }
        }).join('\n      ')}
        </div>
      </div>`;
        } else {
          return '';
        }
      })()}
      ${(function() {
        if(bid_tabulation) {
          return `<div class="files">
        <h3>Bid Tabulation</h3>
        ${bid_tabulation.map(function(file) {
          if(file.thumbnails) {
            return `<div class="fileset">
                <a href="${file.url}" target="_new"><img src="${file.thumbnails.large.url}" /></a>
                <a href="${file.url}" target="_new" class="file-name-link">${file.filename}</a>
              </div>`;
          } else {
            return `<div class="fileset">
              <a href="${file.url}" target="_new" class="file-name-link">${file.filename}</a>
            </div>`;
          }
        }).join('\n      ')}
        </div>
      </div>`;
        } else {
          return '';
        }
      })()}
      

    </li>`;
  }).join('\n      ')}
  ${(function() {
    let startPoint = data.hits.start + 1;
    let endPoint = startPoint + 9;
    if(data.hits.found < 10) {
      endPoint = data.hits.found;
    }
    let hitDescription = 'result';
    if(data.hits.found > 1) {
      hitDescription = 'results';
    }
    let moreLink = '';
    let lessLink = '';
    if(data.hits.found > startPoint + 10) {
      moreLink = `<a href="javascript:getResults(false,${data.hits.start + 10});">>></a>`
    }
    if(data.hits.start > 0) {
      lessLink = `<a href="javascript:getResults(false,${data.hits.start - 10});"><<</a>`
    }
    return `<li class="result-counter"><span style="margin: 0 20px 0 0;">${lessLink}</span>  Showing ${startPoint} - ${endPoint} of ${data.hits.found} ${hitDescription}  <span style="margin: 0 0 0 20px;">${moreLink}</span></li>
  </ul>`
  }())}`

  document.querySelector('.search-results').innerHTML = html;
  if(window.highlightItem) {
    document.querySelector(window.highlightItem).classList.add('highlit');
    if(window.reverseSort) {
      document.querySelector('.'+window.reverseSort).classList.add('reverse');
    }
  }
}

function checkParents(event, targetClass) {
  let targetNode = event.target;
  if(event.target.classList && event.target.classList.contains(targetClass)) {
    return targetNode;
  }
  while(targetNode.parentNode) {
    targetNode = targetNode.parentNode;
    if(targetNode.classList) {
      if(targetNode.classList.contains(targetClass)) {
        return targetNode;
      }
    }
  }
  return false;
}

function sortHighlights() {
  document.querySelectorAll('.js-sortable').forEach(function(item) {
    item.classList.remove('highlit');
  })
}

document.querySelector('.search-results').addEventListener('click', function(event) {
  let item = '';
  if(event.target.classList && event.target.classList.contains('expand-arrow')) {
    item = event.target;
  }
  if(event.target.parentNode.parentNode.classList && event.target.parentNode.parentNode.classList.contains('expand-arrow')) {
    item = event.target.parentNode.parentNode;
  }
  let sortableNode = checkParents(event,'js-sortable');
  if(sortableNode) {
    if(document.querySelector('input[name="query"]').value != '') {
      limit = false;
    }
    if(sortableNode.classList.contains('contract-name')) {
      window.currentSort = '&sort=title%20asc';
      if(window.highlightItem == '.contract-name') {
        if(sortableNode.classList.contains('reverse')) {
          window.reverseSort = '';
          window.currentSort = '&sort=title%20asc';
        } else {
          window.currentSort = '&sort=title%20desc';
          window.reverseSort = 'contract-name';
        }
      }
      window.highlightItem = '.contract-name';
    }
    if(sortableNode.classList.contains('contract-expiration')) {
      window.currentSort = '&sort=expiration%20asc';
      if(window.highlightItem == '.contract-expiration') {
        if(sortableNode.classList.contains('reverse')) {
          window.reverseSort = '';
          window.currentSort = '&sort=expiration%20asc';
        } else {
          window.currentSort = '&sort=expiration%20desc';
          window.reverseSort = 'contract-expiration';
        }
      }
      window.highlightItem = '.contract-expiration';
    }
    if(sortableNode.classList.contains('contract-agency')) {
      window.currentSort = '&sort=buyer%20asc';
      if(window.highlightItem == '.contract-agency') {
        if(sortableNode.classList.contains('reverse')) {
          window.reverseSort = '';
          window.currentSort = '&sort=buyer%20asc';
        } else {
          window.currentSort = '&sort=buyer%20desc';
          window.reverseSort = 'contract-agency';
        }
      }
      window.highlightItem = '.contract-agency';
    }
    sortHighlights();
    sortableNode.classList.add('highlit');
    getResults(limit,0);
  }
  if(item) {
    item.classList.toggle('flipped')
    event.preventDefault();
    if(item.classList.contains('flipped')) {
      document.querySelector('.contracts[data-hit-id="'+item.dataset.hitId+'"]').style.display = 'flex';
    } else {
      document.querySelector('.contracts[data-hit-id="'+item.dataset.hitId+'"]').style.display = 'none';
    }
  }
});

if(window.location.pathname.indexOf('kcrpc') > -1) {
  limit = true;
  getResults(true,0);
}