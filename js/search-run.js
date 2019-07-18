// put the search form inside a form tag for fallback
// form will also helpw ith handling submit via enter

if(document.querySelector('.search-now')) {
  document.querySelector('.search-now').addEventListener('click',runSearch);
}

function runSearch(event) {
  event.preventDefault();
  // send the search query to our embedded web component
  let searchString = document.querySelector('input[name="coprocure_query"]').value
  document.querySelector('coprocure-search').setAttribute('query',searchString);
  hideHomePage();
  // change the url /search.html?query=
}


function hideHomePage() {
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