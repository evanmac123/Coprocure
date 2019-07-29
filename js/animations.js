
function animateHeadline() {
  let headline = document.querySelector('.cd-headline');
  if(headline) {
    hideWord( headline.querySelector('.is-visible') )
  }
}

function hideWord(word) {
  var nextWord = takeNext(word);
  if(nextWord) {
    switchWord(word, nextWord);
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
  }, 850)
}

let headlineSwitcher = window.setInterval(animateHeadline, 4000)

window.addEventListener('focus', function() {
  headlineSwitcher = window.setInterval(animateHeadline, 4000)
});

window.addEventListener('blur', function() {
  window.clearInterval(headlineSwitcher)
});
