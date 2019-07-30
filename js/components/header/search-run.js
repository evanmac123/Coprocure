import { installRouter } from './router.js';

let isTicking;
let headerSearchVisible = false;
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
      // document.querySelector('.home header .search-container').style.opacity = '0';
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
    })
  }
  // if I am not on homepage now immediately show header search box
  if(window.location.pathname != '/' && window.location.pathname.indexOf('index.html') < 0) {
    document.querySelector('header .search-container').style.opacity = '1';
    headerSearchVisible = true;
  }
}




function runSearch(event) {
  event.preventDefault();
  let searchVal = event.target.closest('form').querySelector('input[name="coprocure_query"]').value;
  // send the search query to our embedded web component
  hideHomePage();
  document.querySelector('coprocure-search').setAttribute('query',searchVal);
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
    document.querySelector('section.contact-us').remove();
    document.querySelector('footer').remove();
    // show header search
    document.querySelector('header .search-container').style.opacity = '1';
  }
  if(document.querySelector('.js-content-section')) {
    document.querySelectorAll('.js-content-section').forEach( (sect) => {
      sect.remove();
    })
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

  if(loc.pathname.indexOf('/contract.html') > -1) {
    document.querySelector('coprocure-search').setAttribute('query','');
    document.querySelector('coprocure-search').setAttribute('contractId',loc.search.replace('?contractId=',''));
  }
  if(loc.pathname.indexOf('/contracts.html') > -1) {
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
