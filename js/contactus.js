let postUrl = 'https://5o1jg1o9n4.execute-api.us-west-2.amazonaws.com/staging/contact/';
// postUrl = 'https://5o1jg1o9n4.execute-api.us-west-2.amazonaws.com/production/contact';
// postUrl = 'http://localhost:3333/contact';

document.querySelector('.contactus button').addEventListener('click', function(event) {
  event.preventDefault()
  
  let opts = {
    name: document.querySelector('.contactus input[name="fullname"]').value,
    email: document.querySelector('.contactus input[name="email"]').value,
    description: document.querySelector('.contactus textarea[name="description"]').value
  }

  let fetchOpts = {
    method: 'POST',
    body: `fullname=aaron&email=aaron%40coprocure.us&description=Hi`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  };

  fetch(postUrl, fetchOpts).then(function(response) {
    return response.text();
  }).then(function(data) {
    console.log(data);
  });

})
