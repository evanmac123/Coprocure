import { trackEvent } from './tracking';
import { checkParents } from './check-parents';

export function getUser() {
  let user = localStorage.getItem('coProcureUser');
  if(!user) {
    return false;
  }
  return user;
}

export function getLocalActivity() {
  let activity = localStorage.getItem('coProcureActivity');
  if(!activity) {
    return false;
  }
  return activity;
}

export function setUser(id) {
  localStorage.setItem('coProcureUser',id);
}

export function setLocalActivity(data) {
  localStorage.setItem('coProcureActivity',data);
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
  document.body.insertAdjacentHTML('beforeend',modalBackdrop);  
  document.body.insertAdjacentHTML('beforeend',modalHTML);
  setTimeout(function() {
    document.querySelector('.js-identityModal .modal-dialog').classList.add('show');
  },50);

  if(document.querySelector('.js-identityModal button.add-email')) {
    document.querySelector('.js-identityModal button.add-email').addEventListener('click',function(event) {
      event.preventDefault();
      event.stopPropagation();
      let url = 'https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/signup';
      let email = document.querySelector('.modal-dialog form input[name="email"').value;
  
      if(email.indexOf('@')>-1) {
        fetch(url, {
          method: 'post',
          headers: {
            "Content-Type": "application/json",
          },    
          body: JSON.stringify({ email })
        }).then(function(response) {
          return response.text();
        }).then(function(data) {
          console.log(data);
        });
        setUser(email);
        trackEvent('user', 'login', modalInfo.contractId);
    
        // clear their pasta ctivity and post it
        let activityData = [];
        if(getLocalActivity()) {
          activityData = JSON.parse(getLocalActivity());
        }
        activityData.forEach(function(item) {
          postActivity(item.category, item.action, item.label);
        })
        document.querySelector('.modal-backdrop').remove();
        document.querySelector('.js-identityModal').remove();
        localStorage.removeItem('coProcureActivity');
      } else {
        document.querySelector('.modal-dialog form input[name="email"').style.border = "solid 2px red";
      }
    })
  }

  if(document.querySelector('.js-identityModal button.contact-vendor')) {
    document.querySelector('.js-identityModal button.contact-vendor').addEventListener('click',function(event) {
      event.preventDefault();
      event.stopPropagation();
      let url = 'https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/vendor-contact';
      let email = getUser();
      let description = document.querySelector('textarea[name="purchase-info"]').value;
      let contract = document.querySelector('input.contractId').value;
  
      fetch(url, {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        },    
        body: JSON.stringify({ email, description, contract })
      }).then(function(response) {
        return response.text();
      }).then(function(data) {
        console.log(data);
        document.querySelector('.modal-backdrop').remove();
        document.querySelector('.js-identityModal').remove();
      });
      trackEvent('user', 'contact-vendor', modalInfo.contractId);
    })
  }
  
  // you can dismiss this modal but it will close all the expanded contract rows
  document.querySelector('.modal').addEventListener('click',function(event) {
    event.preventDefault();

    // if they clicked outside modal window, on background
    if(!checkParents(event, 'modal-dialog')) {
      // close the modal
      document.querySelector('.modal-backdrop').remove();
      document.querySelector('.js-identityModal').remove();
      // close all open rows
      let flippedRow = document.querySelector('.expandable-contract.flipped')
      let contractId = flippedRow.dataset.hitId;
      let expandedRow = document.querySelector('.contracts[data-hit-id="'+contractId+'"]');
      flippedRow.classList.remove('flipped');
      expandedRow.style.display = 'none';
    }

  })
}

export function showIdentityModal(contractId) {
  let modalInfo = {
    title: '<i class="material-icons">lock</i> Unlock access to thousands of contracts',
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

export function postActivity(email, category, action ,label) {
  let userAgent = navigator.userAgent;
  let screenSize = `${window.innerWidth} ${window.innerHeight}`;
  let postBody = { email, category, action, label, userAgent, screenSize }
  console.log(postBody)
  // post to dynamodb
  let url = 'https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/activity';
  fetch(url, {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postBody)
  }).then(function(response) {
    return response.text();
  }).then(function(data) {
    console.log(data);
  });
}