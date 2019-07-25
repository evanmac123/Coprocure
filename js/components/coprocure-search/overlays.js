import { checkParents } from './check-parents.js';

// temp noop track event for testing
function trackEvent() {}

export function getUser() {
  let user = localStorage.getItem('coProcureUser');
  if(!user) {
    return false;
  }
  return user;
}

export function setUser(id) {
  localStorage.setItem('coProcureUser',id);
}

function showModal(modalInfo) {
  let modalBackdrop = `<div class="modal-backdrop fade"></div>`;
  let modalHTML = `<div class="js-identityModal modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">${modalInfo.title}</h5>
        </div>
        <div class="modal-body">
          ${modalInfo.body}
          <input type="hidden" class="contractId" name="contractId" value="${modalInfo.contractId}">
        </div>
      </div>
    </div>
  </div>`;
  document.body.querySelector('coprocure-search').insertAdjacentHTML('beforeend',modalBackdrop);  
  document.body.querySelector('coprocure-search').insertAdjacentHTML('beforeend',modalHTML);
  setTimeout(function() {
    document.querySelector('.js-identityModal .modal-dialog').classList.add('show');
  },50);

  if(document.querySelector('.js-identityModal button.contact-vendor')) {
    document.querySelector('.js-identityModal button.contact-vendor').addEventListener('click',function(event) {
      event.preventDefault();
      event.stopPropagation();
      let url = 'https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/vendor-contact';
      let email = getUser();
      let description = document.querySelector('textarea[name="purchase-info"]').value;
      let contract = document.querySelector('input.contractId').value;
      let requestType = 'Vendor contact request';
  
      fetch(url, {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        },    
        body: JSON.stringify({ email, requestType, description, contract })
      }).then(function(response) {
        return response.text();
      }).then(function(data) {
        console.log(data);
        document.querySelector('.modal-backdrop').remove();
        document.querySelector('.js-identityModal').remove();
      });
    })
  }

  if(document.querySelector('.js-identityModal button.additional-documents')) {
    document.querySelector('.js-identityModal button.additional-documents').addEventListener('click',function(event) {
      event.preventDefault();
      event.stopPropagation();
      let url = 'https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/vendor-contact';
      let email = document.querySelector('.modal-dialog form input[name="email"').value;
      setUser(email);
      let description = document.querySelector('textarea[name="additional-documents"]').value;
      let contract = document.querySelector('input.contractId').value;
      let requestType = 'Request for additional documents';
  
      fetch(url, {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        },    
        body: JSON.stringify({ email, requestType, description, contract })
      }).then(function(response) {
        return response.text();
      }).then(function(data) {
        console.log(data);
        document.querySelector('.modal-backdrop').remove();
        document.querySelector('.js-identityModal').remove();
      });
    })
  }

  if(document.querySelector('.js-identityModal button.general-question')) {
    document.querySelector('.js-identityModal button.general-question').addEventListener('click',function(event) {
      event.preventDefault();
      event.stopPropagation();
      let url = 'https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/vendor-contact';
      let email = document.querySelector('.modal-dialog form input[name="email"').value;
      setUser(email);
      let description = document.querySelector('textarea[name="general-question"]').value;
      let contract = '';
      let requestType = 'General Question';
  
      fetch(url, {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        },    
        body: JSON.stringify({ email, requestType, description, contract })
      }).then(function(response) {
        return response.text();
      }).then(function(data) {
        console.log(data);
        document.querySelector('.modal-backdrop').remove();
        document.querySelector('.js-identityModal').remove();
      });
    })
  }  

  document.querySelector('.modal').addEventListener('click',function(event) {
    event.preventDefault();
    // if they clicked outside modal window, on background
    if(!checkParents(event, 'modal-dialog')) {
      // close the modal
      document.querySelector('.modal-backdrop').remove();
      document.querySelector('.js-identityModal').remove();
    }

  })
}

export function showIdentityModal(contractId) {
  let modalInfo = {
    title: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg> Unlock access to thousands of contracts`,
    body: `<p>Enter your government email address to immediately get full free access - including contract downloads.</p>
      <form method="post" action="">
        <label>
          <span class="field-description">Your email address</span>
          <input type="text" name="email">
        </label>
        <button type="submit" class="add-email">Submit</button>
      </form>`,
    close: false,
    contractId: contractId
  }
  showModal(modalInfo);
}

export function showShareModal(contractId) {  
  let modalInfo = {
    title: 'Share this contract',
    body: `<form method="post" action="" class="share-modal">
        <label>
          <span class="multi-labels">
            <span class="field-description">Share by link:</span>
            <span class="success-label">Success! Link copied to clipboard.</span>
          </span>
          <input type="text" name="link" value="https://www.coprocure.us/search/record.html?id=${contractId}">
        </label>
      </form>`,
    close: false,
    contractId: contractId
  }
  showModal(modalInfo);

  document.querySelector('.modal-body input[name="link"').select();
  document.execCommand('copy');
  
}

export function showContactVendorModal(contractId) {
  let modalInfo = {
    title: 'Contact Vendor',
    body: `<form method="post" action="">
        <label>
          <span class="field-description">What information do you need from this vendor?</span>
          <textarea name="purchase-info"></textarea>
        </label>
        <button type="submit" class="contact-vendor">Submit</button>
      </form>`,
    close: false,
    contractId: contractId
  }
  showModal(modalInfo);
}

export function showAdditionalDocsModal(infoObject) {
  let modalInfo = {
    title: 'Missing Documents? Let Us Know',
    body: `<form method="post" action="">
        <span class="field-description">Thanks for letting us know that you'd like some additional documentation for this record. What documents would you like to request? Contract, bid tabulation, bid solicitation, amendments, other (please explain)</span>
        <label>
          <span class="label-text">Email</span>
          <input type="text" name="email" value="${getUser()}" />
        </label>
        <label>
          <span class="label-text">Inquiry</span>
          <textarea name="additional-documents"></textarea>
        </label>
        <button type="submit" class="additional-documents">Send</button>
      </form>`,
    close: false,
    contractId: infoObject.contractId
  }      

  if(infoObject.type == 'questions') {
    modalInfo = {
      title: 'Have a General Question?',
      body: `<form method="post" action="">
      <span class="field-description">We'd love to hear from you. Send us a message and we will get back to you as soon as we can.</span>
      <label>
        <span class="label-text">Email</span>
        <input type="text" name="email" value="${getUser()}" />
      </label>
      <label>
        <span class="label-text">Inquiry</span>
        <textarea name="general-question"></textarea>
      </label>
      <button type="submit" class="general-question">Send</button>
    </form>`,
      close: false
    }      
  }

  showModal(modalInfo);
}