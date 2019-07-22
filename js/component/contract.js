export function contractLayout(json) {
  if(json.hits.hit.length !== 1) {
    return 'No contract Found'
  } else {
    let contract = json.hits.hit[0];
    return `
    <div class="contract-results">
      <h2 class="some-big page-description">Contract Details</h2>
      <div class="contract-card">
        <div class="contract-details">
          <div class="title-section">
            <h5>Contract # ${contract.fields.contract_number}</h5>
            <h1 class="some-big">${contract.fields.title}</h1>
            <div class="dates">
              ${(function() {
                let output = '';
                if(contract.fields.effective) {
                  output += `<div class="date-details">
                    <span class="field-name">Effective date</span>
                    <span class="field-value">${new Date(contract.fields.effective).toLocaleDateString("en-US")}</span>
                  </div>`;
                }
                return output;
              })()}
              ${(function() {
                let output = '';
                if(contract.fields.expiration) {
                  output += `<div class="date-details">
                    <span class="field-name">Expiration date</span>
                    <span class="field-value">${new Date(contract.fields.expiration).toLocaleDateString("en-US")}</span>
                  </div>`;
                }
                return output;
              })()}
            </div>
          </div>
          <div class="check-section">
          </div>
          <div class="more-info-section">
            ${(function() {
              let output = '';
              if(contract.fields.summary) {
                output += `<section>
                  <h4>Summary</h3>
                  <p>${contract.fields.summary}</p>
                </section>`;
              }
              return output;
            })()}
            <section>
              <h4>Content Creator</h3>
              <div class="author">
                <span class="field-name">Content Creator</span>
                <span class="field-value">${contract.fields.buyer_lead_agency}</span>
              </div>
            </section>
            <section>
              <h4>Supplier Details</h3>
              <div class="buyer">
                <span class="field-name">Supplier</span>
                <span class="field-value">${contract.fields.suppliers}</span>
              </div>
            </section>
          </div>
        </div>
        <div class="contract-actions">
          <button class="contact-supplier">Contract Supplier</button>
          <button class="share-contract">Share Contract</button>

          <a class="questions">Questions Or Suggestions</a>
        </div>
      </div>
    </div>
    <div class="overlay-background"></div>`
  }
  

}