import { resultLayout } from './search-results.js';

export default class CoProcureSearch extends HTMLElement {
  static get observedAttributes() {
    return ["query"];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if(attr === 'query') {
      if(newValue) {
        this.query = newValue;
        this.search();
      }
    }
  }

  connectedCallback() {
    if(this.getAttribute('query')) {
      this.query = this.getAttribute('query');
      // this.search();
    }
  }

  search() {
    let numResults = 10;
    let start = 0;
    let url = 'https://1lnhd57e8f.execute-api.us-west-1.amazonaws.com/prod?size='+numResults+'&start='+start+'&q='+this.query;
    let component = this;
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      component.render(json);
    });
  }
  render(json) {
    this.innerHTML = resultLayout(json, this.query);
    // listen for custom events on the contained pagination element
    document.querySelector('coprocure-pagination').addEventListener('navigation', function (e) {
      console.log(e)
    })
  }
}

customElements.define("coprocure-search", CoProcureSearch);