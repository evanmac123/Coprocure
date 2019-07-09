fetch('js/temp-posts.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    template(myJson)
  });

function template(json) {
  output = `<h4>Insights, trends, and our latest news</h4>
    <macro-carousel pagination>
    ${json.items.map((item, index) => {
      let description = item.description;
      if(description.indexOf('<figure>') > -1) {
        description = description.split('figure>')[1];
      }
       return `<article class="slide">
        <div class="carousel-card card--blog">
          <img src="${item.thumbnail}" alt="" style="max-width: 100px;" />
          <h5>${item.title}</h5>
          <p class="blog-summary">blog description</p>
        </div>
      </article>`;
    }).join('\n      ')}
    </macro-carousel>`;

  document.querySelector('.blog-carousel').innerHTML = output;
}

// style the cards
// put 4 cards on each slide

// this looks like place to retrieve data dynamically: https://medium.com/feed/coprocure
// write lambda that saves that to json every couple hours