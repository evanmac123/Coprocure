document.querySelector('.burger-menu').addEventListener('click', function(event) {
  if(this.classList.contains('is-active')) {
    this.classList.remove('is-active');
    document.querySelector('navigation .links').classList.remove('is-active');
  } else {
    this.classList.add('is-active');
    document.querySelector('navigation .links').classList.add('is-active');
  }
})

if(document.querySelector('header .big-search-icon')) {
  document.querySelector('header .big-search-icon').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('header .search-container').classList.toggle('active');
  })
}