import { getPosts } from './get-posts.js';

export function lazyLoading() {
  const interactSettings = {
    root: document.querySelector('.center'),
    rootMargin: '0px 0px 200px 0px'
  }

  function onIntersectionImages(imageEntites) {
    imageEntites.forEach(image => {
      if (image.isIntersecting) {
        observer.unobserve(image.target)
        image.target.src = image.target.dataset.src
        image.target.onload = () => image.target.classList.add('loaded')
      }
    })
  }

  let observer = new IntersectionObserver(onIntersectionImages, interactSettings)
  let images = [...document.querySelectorAll('.lazy-image')]
  images.forEach(image => {
    observer.observe(image)
  })



  function onIntersectionBlog(blogEntities) {
    blogEntities.forEach(entity => {
      if (entity.isIntersecting) {
        observer.unobserve(entity.target);
        getPosts();
        // blogContainer.target.onload = () => blogContainer.target.classList.add('loaded')
      }
    })
  }

  let blogPostContainer = document.querySelector('.blog-carousel');
  let blogObserver = new IntersectionObserver(onIntersectionBlog, interactSettings);
  blogObserver.observe(blogPostContainer);
}

lazyLoading();