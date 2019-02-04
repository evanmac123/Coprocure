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
          <h5 class="modal-title"><i class="material-icons">lock</i> ${modalInfo.title}</h5>
        </div>
        <div class="modal-body">
          ${modalInfo.body}
        </div>
      </div>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('beforeend',modalBackdrop);  
  document.body.insertAdjacentHTML('beforeend',modalHTML);
  setTimeout(function() {
    document.querySelector('.js-identityModal .modal-dialog').classList.add('show');
  },50);

  document.querySelector('button.add-email').addEventListener('click',function(event) {
    event.preventDefault();
    let url = 'http://localhost:3333/signup';
    let email = document.querySelector('.modal-dialog form input[name="email"').value;

    fetch(url, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },    
      body: JSON.stringify({ "email": email })
    }).then(function(response) {
      return response.text();
    }).then(function(data) {
      console.log(data);
    });
    setUser(email);
    trackEvent('user', 'login', item.dataset.hitId);

    // clear their pasta ctivity and post it
    
    document.querySelector('.modal-backdrop').remove();
    document.querySelector('.js-identityModal').remove();
  })

  // you can dismiss this modal but it will close all the expanded contract rows
}

export function showIdentityModal(contractId) {
  let modalInfo = {
    title: 'Unlock access to thousands of contracts',
    body: `<p>Enter your government email address to immediately get full free access - including contract downloads.</p>
      <form method="post" action="">
        <label>
          <span class="field-description">Your email address</span>
          <input type="text" name="email">
        </label>
        <button type="submit" class="add-email">Submit</button>
      </form>`,
    close: false
  }
  showModal(modalInfo);
}