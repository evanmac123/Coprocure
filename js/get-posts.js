let altDescription = "God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Checkmate... Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.";

fetch('https://coprocure.github.io/coprocure.us/feed.json')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  template(myJson)
});

function template(json) {
  let baseCounter = 4;
  let splitCounter = 3;
  if(window.innerWidth < 600) {
    baseCounter = 1;
    splitCounter = 0;
    console.log('hi')
  }
  output = `<h4>Insights, trends, and our latest news</h4>
    <macro-carousel pagination>
    ${json.items.map((item, index) => {
      let description = item.description;
      if(!description) {
        description = altDescription;
      }
      let output = '';
      if(index % baseCounter === 0) {
        output += `<article class="slide">`;
      }
      let blogSummary = description.substr(0,170);
      if(description.length > 170) {
        blogSummary += '...';
      }
      output += `
        <div class="carousel-card card--blog">
          <a class="picture-cropper" href="${item.link}"><img src="${item.thumbnail}" alt="" /></a>
          <a href="${item.link}" class="card-text">
            <h5>${item.title}</h5>
            <p class="blog-summary">${blogSummary}</p>
          </a>
        </div>`;
      if(index % baseCounter === splitCounter) {
        output += `</article>`;
      }
      return output;
    }).join('\n      ')}
    </macro-carousel>`;

  document.querySelector('.blog-carousel').innerHTML = output;
}