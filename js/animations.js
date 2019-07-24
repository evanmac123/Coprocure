
let animationDelay = 2500;

function animateHeadline() {
  let headline = document.querySelector('.cd-headline');
  hideWord( headline.querySelector('.is-visible') )
  // setTimeout(function(){ hideWord( headline.querySelector('.is-visible') ) }, animationDelay);
}

function hideWord(word) {
  var nextWord = takeNext(word);
  if(nextWord) {
    switchWord(word, nextWord);
    /* setTimeout(function() {
      hideWord(nextWord)
    }, animationDelay); */
  }
}

function takeNext(word) {
  let nextNode = word.nextElementSibling;
  if(!nextNode && document.querySelector('.cd-headline')) {
    nextNode = document.querySelector('.cd-headline').querySelector('b');
  }
  return nextNode;
}

function switchWord(oldWord, newWord) {
  oldWord.classList.add('is-hidden');
  setTimeout(function() {
    oldWord.classList.remove('is-visible');
    newWord.classList.remove('is-hidden');
    newWord.classList.add('is-visible');
  }, 650)
}


// animateHeadline(document.querySelector('.cd-headline'));
let headlineSwitcher = window.setInterval(animateHeadline, 2500)

window.addEventListener('focus', function() {
  headlineSwitcher = window.setInterval(animateHeadline, 2500)
});


// setup animation to run on a window setinterval
// set that up outside function so runs onload
// clearinterval onblur
// reset interval onfocus

window.addEventListener('blur', function() {
  window.clearInterval(headlineSwitcher)
});

