export function resultLayout(json, query) {
  return `<div class="search-results-container">
    <div class="search-filters">
      <h2 class="subtext--medium">Filters</h2>
      <div class="field-group-header">Contract</div>
      <div class="field--checkbox">
        <input type="checkbox" name="expired" id="expired">
        <label for="expired">Include expired contracts</label>
      </div>
      <div class="field-group-header">Contract</div>
      <div class="field--checkbox">
        <input type="checkbox" name="noncoop" id="noncoop">
        <label for="noncoop">Include contracts without cooperative language</label>
      </div>

      <div class="field-group-header">Contract creator</div>
      <div class="field--select">
        <label for="lead_agency_location">Lead agency location</label>
        <select name="lead_agency_location" multiple id="lead_agency_location">
          <option value="">All states</option>
          <option value="CA">California</option>
          <option vlaue="OR">Oregon</option>
          <option value="KS">Kansas</option>
          <option value="MO">Missouri</option>
        </select>
      </div>
      <div class="field--select">
        <label for="lead_agency_location">Lead agencies</label>
        <select name="lead_agency_location" id="lead_agencies">
          <option value="">All agencies</option>
        </select>
      </div>
      <div class="field--select">
        <label for="coop_list">Purchasing cooperatives/consortiums</label>
        <select name="coop_list" id="coop_list">
          <option value="">All cooperatives/consortiums</option>
        </select>
      </div>

    </div>
    <div class="search-results">
      <h1>${query} cooperative contracts</h1>
      <div class="search-query-controls">
        <span class="result-count">Showing ${json.hits.start}-${json.hits.start + 10} of ${json.hits.found} results</span>
        <select name="search-sort" class="search-sort">
          <option value="supplier">Supplier A - Z</option>
        </select>
      </div>
      <ul>
        ${json.hits.hit.map( (item) => {
          return `<li>
            <div class="card-details">
              <a href="" class="result-title">${item.fields.title}</a>
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
    </div>
  </div>`
}