import 'whatwg-fetch'

document.getElementById('submit-search').addEventListener('click',function(e) {
  e.preventDefault();
  getResults(false,0);
})

window.getResults = function(limit,start) {
  let query = '';
  if(limit) {
    query = 'kcrpc%20and%20';
  }
  //let fields = 'title,expiration,effective,suppliers,authoring_agency_type,membership_required,contract_files,buyer_name_individual,buyer_email_individual,buyer_phone_individual,payment_instructions,termination_conditions,conflicts_of_interes_language,vendor_info,pricing,vendor_insurance_requirements'
  //console.log(fields)
  //let searchUrl = 'https://cz73hfbh8e.execute-api.us-east-1.amazonaws.com/stage?q='+query+document.querySelector('input[name="query"]').value; //+'&return='+fields;
  let searchUrl = 'https://9957n2ojug.execute-api.us-west-1.amazonaws.com/stage?start='+start+'&q='+query+document.querySelector('input[name="query"]').value; //+'&return='+fields;
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
        console.log(data);
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
      <span class="contract-name">Contract name</span>
      <span class="contract-expiration">Expiration</span>
      <span class="contract-agency">Lead agency</span>
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
        <div class="summary">${result.fields.summary}</div>
      </span>
      <span class="contract-expiration">
        ${new Date(result.fields.expiration).toLocaleDateString()}
      </span>
      <span class="contract-agency">${result.fields.authoring_agency}</span>
      <span class="contract-vendor">${(function() {
        if(result.fields.suppliers) { 
          return `${result.fields.suppliers.toString()}`;
        } else {
          return '';
        }
      })()}</span>
      <span class="contract-state">${(function() {
        if(result.fields.states) { 
          return `${result.fields.states[0]}`;
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
          return `<div class="fileset">
              <a href="${file.url}" target="_new"><img src="${file.thumbnails.large.url}" /></a>
              <a href="${file.url}" target="_new" class="file-name-link">${file.filename}</a>
            </div>`;
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
          return `<div class="fileset">
              <a href="${file.url}" target="_new"><img src="${file.thumbnails.large.url}" /></a>
              <a href="${file.url}" target="_new" class="file-name-link">${file.filename}</a>
            </div>`;
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
    let endPoint = 10;
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

  // 
  document.querySelector('.search-results').innerHTML = html;
}

document.querySelector('.search-results').addEventListener('click', function(event) {
  let item = '';
  if(event.target.classList.contains('expand-arrow')) {
    item = event.target;
  }
  if(event.target.parentNode.parentNode.classList.contains('expand-arrow')) {
    item = event.target.parentNode.parentNode;
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


//getResults(true,0);