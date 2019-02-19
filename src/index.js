import 'whatwg-fetch';
import 'nodelist-foreach-polyfill';
import 'promise-polyfill/src/polyfill';
import './modules/remove-polyfill';
import { displayResults } from './modules/search-results';
import { handleExpansion } from './modules/expand-contract'
import { handleSort } from './modules/sort';
import { trackEvent } from './modules/tracking';

document.getElementById('submit-search').addEventListener('click',function(e) {
  e.preventDefault();
  window.highlightItem = '';
  window.reverseSort = '';
  getResults(false,0);
})

window.currentSort = '';
window.limit = false;

window.getResults = function(limit,start) {
  // document.querySelector('#submit-search').classList.add('clicked');
  let query = '';
  if(limit && document.querySelector('input[name="query"]').value == '') {
    query = 'kcrpc%20and%20';
  }
  if(document.querySelector('input[name="query"]').value != '') {
    trackEvent('search','query',document.querySelector('input[name="query"]').value);
  }
  let searchUrl = 'https://nhhu21hyj1.execute-api.us-west-1.amazonaws.com/prod?start='+start+'&q='+query+document.querySelector('input[name="query"]').value + window.currentSort; //+'&return='+fields;
  fetch(searchUrl)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
        displayResults(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

document.querySelector('.search-results').addEventListener('click', function(event) {
  handleExpansion(event);
  handleSort(event);
});

if(window.location.pathname.indexOf('kcrpc') > -1) {
  window.limit = true;
  window.getResults(true,0);
}