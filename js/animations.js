
var animationDelay = 2500;

function animateHeadline(headline) {
  setTimeout(function(){ hideWord( headline.querySelector('.is-visible') ) }, animationDelay);
}

function hideWord(word) {
  var nextWord = takeNext(word);
  if(nextWord) {
    switchWord(word, nextWord);
    setTimeout(function() {
      hideWord(nextWord)
    }, animationDelay);
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
  }, 600)
}

animateHeadline(document.querySelector('.cd-headline'));
