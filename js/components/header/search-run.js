import { installRouter } from './router.js';
import { getParams } from '../coprocure-contract/get-params.js';

let isTicking;
let headerSearchVisible = false;
let searchNotRan = true;
const debounce = (callback, evt) => {
  if (isTicking) return;
  requestAnimationFrame(() => {
    callback(evt);
    isTicking = false;
  });
  isTicking = true;
};
const handleScroll = evt => {
  if(!headerSearchVisible && window.scrollY > 500  && window.innerWidth > 768) {
    document.querySelector('.home header .search-container').style.opacity = '1';
    headerSearchVisible = true;
  }
  if(window.location.pathname == '/' || window.location.pathname.indexOf('/index.html') == 0) {
    if(window.scrollY < 500 && window.innerWidth > 768) {
      document.querySelector('.home header .search-container').style.opacity = '0';
      headerSearchVisible = false;
    }
  }
}


document.defaultView.onscroll = evt => debounce(handleScroll, evt);
document.defaultView


export function search() {
  if(document.querySelector('.search-now')) {
    document.querySelectorAll('.search-now').forEach( (item) => {
      item.addEventListener('click',runSearch);
      searchNotRan = false;
    })
  }
  // if I am not on homepage now immediately show header search box
  if(window.location.pathname.indexOf('contract.html') > 0 || window.location.pathname.indexOf('contracts.html') > 0) {
    document.querySelector('header .search-container').style.opacity = '1';
    headerSearchVisible = true;
  }
}


function runSearch(event) {
  event.preventDefault();
  let searchVal = event.target.closest('form').querySelector('input[name="coprocure_query"]').value;
  // send the search query to our embedded web component
  hideHomePage();
  document.querySelector('coprocure-search').setAttribute('page','1');
  document.querySelector('coprocure-search').setAttribute('query',searchVal);

  // reset contract detail element
  let singlePageContract = document.querySelector('.contract-detail-page');
  if(singlePageContract) {
    document.querySelector('.contract-detail-page').classList.remove('contract-detail-page')
  }
  document.querySelector('coprocure-contract').setAttribute('contractid','none')

  let backgroundHider = document.querySelector('.background-hider');
  if(backgroundHider) {
    backgroundHider.style.display = 'none';
  }
  document.body.classList.remove('noscroll');

  // change the url
  let searchUrl = `contracts.html?query=${searchVal}`
  window.history.pushState({}, '', searchUrl);
}


function hideHomePage() {
  if(document.querySelector('section.search')) {
    document.querySelector('section.search').remove();
    document.querySelector('section.map').remove();
    document.querySelector('section.explanation').remove();
    document.querySelector('section.testimonials-carousel').remove();
    document.querySelector('section.about-us').remove();
    document.querySelector('section.investors').remove();
    document.querySelector('section.blog-carousel').remove();
    // show header search
    document.querySelector('header .search-container').style.opacity = '1';
  }
  if(document.querySelector('.js-content-section')) {
    document.querySelectorAll('.js-content-section').forEach( (sect) => {
      sect.remove();
    })
  }
}

function handleNavigation(loc, e) {
  let staticPages = ['/about.html','/careers.html','/add.html'];
  staticPages.forEach( (path) => {
    if(loc.pathname.indexOf(path) > -1) {
      window.location = loc.href;
    }
  })

  if(loc.pathname === '/') {
    // handles popstate to homepage
    window.location.reload();
  }

  if(loc.pathname.indexOf('/contract.html') > -1) {
    // handles popstate to contract detail page
    document.querySelector('coprocure-contract').setAttribute('contractId',loc.search.replace('?contractId=',''));
  }
  if(loc.pathname.indexOf('/contracts.html') > -1) {
    // handles popstate to search results
    if(!loc.hash) {
      // a hash generates a popstate and we use anchor links to go to contact us form so prevent search reloading here
      let queryParams = getParams();
      if(queryParams.query) {
        document.querySelector('coprocure-search').setAttribute('query',loc.search.replace('?query=',''));
      }
    }

    // we are on the search results page so we should reset contract detail component if needed
    let singlePageContract = document.querySelector('.contract-detail-page');
    if(singlePageContract) {
      singlePageContract.classList.remove('contract-detail-page')
    }
    let backgroundHider = document.querySelector('.background-hider');
    if(backgroundHider) {
      backgroundHider.style.display = 'none';
    }
    document.body.classList.remove('noscroll');
    let contractId = document.querySelector('coprocure-contract').getAttribute('contractid');
    if(contractId && contractId != 'none') {
      document.querySelector('coprocure-contract').setAttribute('contractid','none')
    }
    // maybe I was on the homepage...
    hideHomePage();
  }
}

installRouter((location, event) => {
  if(event) {
    handleNavigation(location);
  }
  // not doing anything without an event because this fires on initial direct load
});
