import { installRouter } from './router.js';

export function search() {
  if(document.querySelector('.search-now')) {
    document.querySelectorAll('.search-now').forEach( (item) => {
      item.addEventListener('click',runSearch);  
    })
  }
}

function runSearch(event) {
  event.preventDefault();
  // send the search query to our embedded web component
  let searchString = document.querySelector('input[name="coprocure_query"]').value
  hideHomePage();
  document.querySelector('coprocure-search').setAttribute('query',searchString);
  // change the url 
  let searchVal = event.target.closest('form').querySelector('input[name="coprocure_query"]').value;
  let searchUrl = `contracts.html?query=${searchVal}`
  window.history.pushState({}, '', searchUrl);
}


function hideHomePage() {
  if(document.querySelector('section.search')) {
    document.querySelector('section.search').remove();
    document.querySelector('section.map').remove();
    document.querySelector('section.explanation').remove();
    document.querySelector('section.testimonials-carousel').remove();
    document.querySelector('section.aboutus').remove();
    document.querySelector('section.investors').remove();
    document.querySelector('section.blog-carousel').remove();
    document.querySelector('section.contactus').remove();
    document.querySelector('footer').remove();  
  }
}

function handleNavigation(loc) {
  let staticPages = ['/about.html','/careers.html'];
  staticPages.forEach( (path) => {
    if(loc.pathname.indexOf(path) > -1) {
      window.location = loc.href;
    }
  })

  if(loc.pathname === '/') {
    // handles popstate to homepage
    window.location.reload();
  }

  if(loc.pathname === '/contract.html') {
    document.querySelector('coprocure-search').setAttribute('query','');
    document.querySelector('coprocure-search').setAttribute('contractId',loc.search.replace('?contractId=',''));
  }
  if(loc.pathname === '/contracts.html') {
    document.querySelector('coprocure-search').setAttribute('query',loc.search.replace('?query=',''));
    document.querySelector('coprocure-search').setAttribute('contractId','');
  }
}

installRouter((location, event) => {
  if(event) {
    handleNavigation(location);
  }
  // not doing anything without an event because this fires on initial direct load
});