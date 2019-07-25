export function resultLayout(json, query, sort, expired, states, buyers, coops, selectedStates, selectedBuyers, selectedCoops) {
  let stateList = states();
  let buyerList = buyers();
  let coopList = coops();
  return `<div class="search-results-container">
    <div class="search-filters">
      <form method="get" action="/contracts.html">
        <h2 class="subtext--medium">Filters</h2>
        <div class="field-group-header">Contract</div>
        <div class="field--checkbox">
          <input type="checkbox" name="expired" id="expired" ${(expired) ? 'checked' : ''}>
          <label for="expired">Include expired contracts</label>
        </div>
        <!--<div class="field-group-header">Contract</div>
        <div class="field--checkbox">
          <input type="checkbox" name="noncoop" id="noncoop">
          <label for="noncoop">Include contracts without cooperative language</label>
        </div>-->
        <div class="field-group-header">Contract creator</div>
        <div class="field--select">
          <label for="buyer_lead_agency_state">Lead agency location</label>
          <select name="buyer_lead_agency_state" multiple id="buyer_lead_agency_state">
            <option value="">All states</option>
            ${stateList.map(function(state) {
              let checked = false;
              if(selectedStates) {
                selectedStates.forEach( (selectedState) => {
                  if(state.abbrev == selectedState) {
                    checked = true;
                  }
                })
              }
              return `<option value="${state.abbrev}" ${(checked) ? 'selected' : ''}>${state.name}</option>`
            }).join('   ')}
          </select>
        </div>
        <div class="field--select">
          <label for="buyer_lead_agency">Lead agencies</label>
          <select name="buyer_lead_agency" multiple id="lead_agencies">
            <option value="">All agencies</option>
            ${buyerList.map(function(buyer) {
              let checked = false;
              if(selectedBuyers) {
                selectedBuyers.forEach( (selectedBuyer) => {
                  console.log(selectedBuyer)
                  if(buyer == selectedBuyer) {
                    checked = true;
                  }
                })
              }
              return `<option value="${buyer}" ${(checked) ? 'selected' : ''}>${buyer}</option>`
            }).join('   ')}
          </select>
        </div>
        <div class="field--select">
          <label for="coop_list">Purchasing cooperatives/consortiums</label>
          <select name="coop_list" id="coop_list">
            <option value="">All cooperatives/consortiums</option>
            ${coopList.map(function(coop) {
              let checked = false;
              if(selectedCoops) {
                selectedCoops.forEach( (selectedCoop) => {
                  if(coop == selectedCoop) {
                    checked = true;
                  }
                })
              }
              return `<option value="${coop}" ${(checked) ? 'checked' : ''}>${coop}</option>`
            }).join('   ')}
          </select>
        </div>

        <button class="filters-apply">Apply</button>
      </form>

    </div>
    <div class="search-results">
      <h1>${query} contracts</h1>
      <div class="search-query-controls">
        <a href="#" class="show-filters">Filters</a>
        <span class="result-count">Showing ${json.hits.start+1}-${json.hits.start + 10} of ${json.hits.found} results</span>
        <select name="search-sort" class="search-sort">
          <option value="">Sort by</option>
          <option value="suppliers%20asc" ${(sort=='suppliers%20asc') ? 'selected' : ''}>Supplier A - Z</option>
          <option value="suppliers%20desc" ${(sort=='suppliers%20desc') ? 'selected' : ''}>Supplier Z - A</option>
          <option value="buyer_lead_agency%20asc" ${(sort=='buyer_lead_agency%20asc') ? 'selected' : ''}>Buyer A - Z</option>
          <option value="buyer_lead_agency%20desc" ${(sort=='buyer_lead_agency%20desc') ? 'selected' : ''}>Buyer Z - A</option>
          <option value="expiration%20desc" ${(sort=='expiration%20desc') ? 'selected' : ''}>Expiration</option>
          <option value="title%20asc" ${(sort=='title%20asc') ? 'selected' : ''}>Title A - Z</option>
          <option value="title%20desc" ${(sort=='title%20desc') ? 'selected' : ''}>Title Z - A</option>
          <option value="buyer_lead_agency_state%20asc" ${(sort=='buyer_lead_agency_state%20asc') ? 'selected' : ''}>Buyer State A - Z</option>
          <option value="buyer_lead_agency_state%20desc" ${(sort=='buyer_lead_agency_state%20desc') ? 'selected' : ''}>Buyer State Z - A</option>
        </select>
      </div>
      <ul>
        ${json.hits.hit.map( (item) => {
          return `<li>
            <div class="card-details">
              <a href="contract.html?contractId=${item.id}" class="result-title">${item.fields.title}</a>
              <div class="parties">
                <div class="author">
                  <span class="field-name">Content Creator</span>
                  <span class="field-value">${item.fields.buyer_lead_agency}</span>
                </div>
                <div class="buyer">
                  <span class="field-name">Supplier</span>
                  <span class="field-value">${item.fields.suppliers}</span>
                </div>
              </div>
              ${(function() {
                let output = '';
                if(item.fields.summary) {
                  output += `<p>${item.fields.summary}</p>`;
                }
                return output;
              })()}
            </div>
            <div class="card-controls">
              <div class="result-expiration">
                <span class="field-name">Expires on</span>
                <span class="field-value">${new Date(item.fields.expiration).toLocaleDateString("en-US")}</span>
              </div>
            </div>
          </li>`
        }).join('\n      ')}
      </ul>
      <coprocure-pagination current="${(json.hits.start + 10) / 10}" total="${json.hits.found}"></coprocure-pagination>
    </div>
  </div>
  <div class="overlay-background"></div>`
}