
var animationDelay = 2500;

animateHeadline(document.querySelector('.cd-headline'));

function animateHeadline(headline) {
  setTimeout(function(){ hideWord( headline.querySelector('.is-visible') ) }, animationDelay);
  //other checks here ...
}

function hideWord(word) {
  var nextWord = takeNext(word);
  if(nextWord) {
    switchWord(word, nextWord);
    setTimeout(function(){ 
      hideWord(nextWord) 
    }, animationDelay);
  }
}

function takeNext(word) {
  let nextNode = word.nextElementSibling;
  if(!nextNode && document.querySelector('.cd-headline')) {
    nextNode = document.querySelector('.cd-headline').querySelector('b');
  } else {
    return null;
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


document.querySelector('.burger-menu').addEventListener('click', function(event) {
  if(this.classList.contains('is-active')) {
    this.classList.remove('is-active');
    document.querySelector('navigation .links').classList.remove('is-active');
  } else {
    this.classList.add('is-active');
    document.querySelector('navigation .links').classList.add('is-active');
  }
})