export function contractLayout(json) {
  if(json.hits.hit.length !== 1) {
    return 'No contract Found'
  } else {
    let contract = json.hits.hit[0];
    let fileLinks = [];
    if(contract.fields.contract_files) {
      contract.fields.contract_files.forEach( (item) => {
        let parsedItem = JSON.parse(item);
        if(parsedItem.url) {
          parsedItem.type = 'Contract';
          fileLinks.push(parsedItem);      
        }
      })  
    }
    if(contract.fields.amendments_files) {
      contract.fields.amendments_files.forEach( (item) => {
        let parsedItem = JSON.parse(item);
        parsedItem.type = 'Amendment';
        fileLinks.push(parsedItem);      
      })  
    }
    if(contract.fields.bid_solicitation_files) {
      contract.fields.bid_solicitation_files.forEach( (item) => {
        let parsedItem = JSON.parse(item);
        parsedItem.type = 'Bid Solicitation';
        fileLinks.push(parsedItem);      
      })  
    }
    if(contract.fields.bid_tabulation_files) {
      contract.fields.bid_tabulation_files.forEach( (item) => {
        let parsedItem = JSON.parse(item);
        parsedItem.type = 'Bid Tabulation';
        fileLinks.push(parsedItem);      
      })  
    }
    if(contract.fields.pricing_files) {
      contract.fields.pricing_files.forEach( (item) => {
        let parsedItem = JSON.parse(item);
        parsedItem.type = 'Pricing';
        fileLinks.push(parsedItem);      
      })  
    }
    if(contract.fields.other_docs_files) {
      contract.fields.other_docs_files.forEach( (item) => {
        let parsedItem = JSON.parse(item);
        parsedItem.type = 'Other';
        fileLinks.push(parsedItem);      
      })  
    }
    return `
    <div class="contract-results">
      <h2 class="some-big page-description">Contract Details</h2>
      <div class="contract-card">
        <div class="contract-details">
          <div class="title-section">
            ${(contract.fields.contract_number) ? `<h5>Contract # ${contract.fields.contract_number}</h5>` : ''}            
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
          <ul class="check-section">
            ${(new Date(contract.fields.expiration) > new Date()) ? '<li>Contract active</li>' : ''}
            ${(contract.fields.cooperative_language) ? '<li>Cooperative language</li>' : ''}
            ${(contract.fields.competitively_bid) ? '<li>Competitively solicited</li>' : ''}
          </ul>
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
            <section class="author-details">
              <h4>Content Creator</h3>
              <div class="author-content">
              ${(contract.fields.buyer_lead_agency) ? `<div class="author-field">
                <span class="field-name">Lead agency</span>
                <span class="field-value">${contract.fields.buyer_lead_agency}</span>
              </div>` : ''}
              ${(contract.fields.buyer_lead_agency_state) ? `<div class="author-field">
                <span class="field-name">Lead agency state</span>
                <span class="field-value">${contract.fields.buyer_lead_agency_state}</span>
              </div>` : ''}
              <div class="author-field">
                <span class="field-name">Purchasing cooperative/consortium</span>
                <span class="field-value">${(contract.fields.cooperative_affiliation) ? contract.fields.cooperative_affiliation : 'none'}</span>
                </div>
              </div>
            </section>
            ${(contract.fields.suppliers) ? `<section class="supplier-details">
              <h4>Supplier Details</h3>
              <div class="supplier">
                <span class="field-name">Name</span>
                <span class="field-value">${contract.fields.suppliers}</span>
              </div>
            </section>` : ''}
          </div>
          <section class="files">
            <div class="section-header">
              <h4>Documents and Pricing</h4>
              <a href="#" data-contract-id="${contract.id}" class="missing-documents">Missing Documents? Contact Us</a>
            </div>
            <ul class="file-list">
            ${fileLinks.map( (file) => {
              return `<li>
                <a href="${file.url}" nofollow class="file-link">${(file.name) ? file.name : file.url}</a>
                <span class="file-type">${file.type}</a>
              </li>`;
            }).join('   ')}
            </ul>
          </section>
        </div>
        <div class="contract-actions">
          <button class="contact-supplier" data-contract-id="${contract.id}">
            <span class="button-icon"></span>
            <span class="button-text">Contact Supplier</span>
          </button>
          <button class="share-contract" data-contract-id="${contract.id}">
            <span class="button-icon"></span>
            <span class="button-text">Share Contract</span>
          </button>

          <a class="questions-link">Questions Or Suggestions</a>
        </div>
      </div>
    </div>
    <div class="overlay-background"></div>`
  }
  

}