import { isDate } from './is-date';
import { getUser } from './user';
import { trackEvent } from './tracking';

function formatFilename(name) {
  return decodeURIComponent(name.replace('.php',''));
}

export function displayResults(data) {
  if(!window.trackEvent) {
    window.trackEvent = trackEvent;
  }
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
        <svg class="icon icon-caret icon-caret--down" id="icon--dropdown-carrot" viewBox="0 0 9.7667 6.7638" ><title>Dropdown Caret</title><path d="M5.5819,6.4285,9.5683,1.4552A.8953.8953,0,0,0,8.87,0H.8969A.8953.8953,0,0,0,.1984,1.4552L4.1848,6.4285A.8953.8953,0,0,0,5.5819,6.4285Z"></path></svg>
      </span>
      <span class="contract-vendor js-sortable">
        Vendor
        <svg class="icon icon-caret icon-caret--down" id="icon--dropdown-carrot" viewBox="0 0 9.7667 6.7638" ><title>Dropdown Caret</title><path d="M5.5819,6.4285,9.5683,1.4552A.8953.8953,0,0,0,8.87,0H.8969A.8953.8953,0,0,0,.1984,1.4552L4.1848,6.4285A.8953.8953,0,0,0,5.5819,6.4285Z"></path></svg>
      </span>
      <span class="contract-state js-sortable">
        State
        <svg class="icon icon-caret icon-caret--down" id="icon--dropdown-carrot" viewBox="0 0 9.7667 6.7638" ><title>Dropdown Caret</title><path d="M5.5819,6.4285,9.5683,1.4552A.8953.8953,0,0,0,8.87,0H.8969A.8953.8953,0,0,0,.1984,1.4552L4.1848,6.4285A.8953.8953,0,0,0,5.5819,6.4285Z"></path></svg>
      </span>
    </li>
  ${data.hits.hit.map(function(result) {
    let contracts = [];
    if(result.fields.contract_files) {
      contracts = result.fields.contract_files;
    }
    let amendments = null;
    let pricing = null;
    let bid_tabulation = null;
    let bid_solicitation = null;
    let other_docs = null;
    if(result.fields.amendments_files) {
      amendments = result.fields.amendments_files;
    }
    if(result.fields.pricing_files) {
      pricing = result.fields.pricing_files;
    }
    if(result.fields.bid_tabulation_files) {
      bid_tabulation = result.fields.bid_tabulation_files;
    }
    if(result.fields.bid_solicitation_files) {
      bid_solicitation = result.fields.bid_solicitation_files;
    }
    if(result.fields.other_docs_files) {
      other_docs = result.fields.other_docs_files;
    }
    return `
    <li class="expandable-contract" data-hit-id="${result.id}">
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
        if(result.fields.buyer_lead_agency) { 
          return `${result.fields.buyer_lead_agency}`;
        } else {
          return '';
        }
      })()}
      </span>
      <span class="contract-vendor">${(function() {
        if(result.fields.suppliers) { 
          return `${result.fields.suppliers.toString()}`;
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
    </li>
    <li class="contracts" data-hit-id="${result.id}" style="display: none;">
      <div class="all-files">
        <div class="files">
          <p>Contract</p>
          ${contracts.map(function(doc) {
            let file = JSON.parse(doc);
            return `<div class="fileset">
              <a href="${file.url}" target="_new" class="file-name-link">${formatFilename(file.name)}</a>
            </div>`;
          }).join('\n      ')}
        </div>
        ${(function() {
          if(amendments) {
            return `<div class="files">
              <p>Amendments</p>
              ${amendments.map(function(doc) {
                let file = JSON.parse(doc);
                return `<div class="fileset">
                  <a href="${file.url}" target="_new" class="file-name-link">${formatFilename(file.name)}</a>
                </div>`;
              }).join('\n      ')}
            </div>`;
          } else {
            return '';
          }
        })()}
        ${(function() {
          if(pricing) {
            return `<div class="files">
            <p>Pricing</p>
            ${pricing.map(function(doc) {
              let file = JSON.parse(doc);
              return `<div class="fileset">
                <a href="${file.url}" target="_new" class="file-name-link">${formatFilename(file.name)}</a>
              </div>`;
            }).join('\n      ')}
            </div>`;
          } else {
            return '';
          }
        })()}
        ${(function() {
          if(bid_tabulation) {
            return `<div class="files">
            <p>Bid Tabulation</p>
            ${bid_tabulation.map(function(doc) {
              let file = JSON.parse(doc);
              return `<div class="fileset">
                <a href="${file.url}" target="_new" class="file-name-link">${formatFilename(file.name)}</a>
              </div>`;
            }).join('\n      ')}
            </div>`;
          } else {
            return '';
          }
        })()}
        ${(function() {
          if(bid_solicitation) {
            return `<div class="files">
            <p>Bid Solicitation</p>
            ${bid_solicitation.map(function(doc) {
              let file = JSON.parse(doc);
              return `<div class="fileset">
                <a href="${file.url}" target="_new" class="file-name-link">${formatFilename(file.name)}</a>
              </div>`;
            }).join('\n      ')}
            </div>`;
          } else {
            return '';
          }
        })()}
        ${(function() {
          if(other_docs) {
            return `<div class="files">
            <p>Other Documents</p>
            ${other_docs.map(function(doc) {
              let file = JSON.parse(doc);
              return `<div class="fileset">
                <a href="${file.url}" target="_new" class="file-name-link">${formatFilename(file.name)}</a>
              </div>`;
            }).join('\n      ')}
            </div>`;
          } else {
            return '';
          }
        })()}
      </div>
      <div class="buttons">
        <button class="contact-vendor">Contact Vendor</button>
        <button class="additional-documents">Request additional documents</button>
      </div>
    </li>`;
  }).join('\n      ')}
  ${(function() {
    let startPoint = data.hits.start + 1;
    let endPoint = startPoint + 99;
    if(data.hits.found < 100) {
      endPoint = data.hits.found;
    }
    let hitDescription = 'result';
    if(data.hits.found > 1) {
      hitDescription = 'results';
    }
    let moreLink = '';
    let lessLink = '';
    if(data.hits.found > startPoint + 100) {
      moreLink = `<a href="javascript:trackEvent('search','next','${document.querySelector('input[name="query"]').value}');getResults(false,${data.hits.start + 100});">>></a>`
    }
    if(data.hits.start > 0) {
      lessLink = `<a href="javascript:trackEvent('search','previous','${document.querySelector('input[name="query"]').value}');getResults(false,${data.hits.start - 100});"><<</a>`
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
  
  document.querySelector('.submit-request').style.display = 'block';
  let email = getUser();
  let emailField = document.querySelector('.submit-request input[name="email"]');
  if(email) {
    emailField.value = email;
    emailField.parentNode.style.display = 'none';
  }
  document.querySelector('.submit-request button').addEventListener('click',function(event) {
    event.preventDefault();
    let url = 'https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/govpurchase';
    let email = emailField.value;

    fetch(url, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "email": email, "description": document.querySelector('.submit-request textarea').value })
    }).then(function(response) {
      return response.text();
    }).then(function(data) {
      console.log(data);
    });
    document.querySelector('.submit-request').innerHTML = `<h3>Thank you for your request!</h3>`
    return false;

  })
}

