import 'whatwg-fetch';
import 'nodelist-foreach-polyfill';
import 'promise-polyfill/src/polyfill';

document.querySelector('.waitlist button').addEventListener('click',function(event) {
  event.preventDefault();
  let email = document.querySelector('form.waitlist input[name="email"]').value;
  console.log(email);
  
  // fetch post with email
  //  
  fetch('https://cncx06eah4.execute-api.us-east-1.amazonaws.com/production/waitlist', {
    method: 'post',
    headers: {
      'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
    body: 'email='+email+'&integration='+document.querySelector('input[name="integrate"]:checked').value
  }).then(function(response) {
    return response.text();
  }).then(function(data) {
    console.log(data);
  });

  document.querySelector('form.waitlist').style.display = 'none';
  document.querySelector('.waitlist-success').style.display = 'block';

  setTimeout(function() {
    document.querySelector('form.waitlist').style.display = 'flex';
    document.querySelector('.waitlist-success').style.display = 'none';
  },5000);
  // flip to success message

  // review on mobile
  // and IE
})