import { resultLayout } from './search-results.js';

export default class CoProcureSearch extends HTMLElement {
  // Specify observed attributes names to be notified in attributeChangedCallback
  static get observedAttributes() {
    return ["query"];
  }

  // Called when an observed attribute has been added, removed, updated, or replaced.
  // Also called for initial values when an element is created by the parser, or upgraded.
  // Note: only attributes listed in the observedAttributes property will receive this callback.
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
      this.search();
    }
  }

  search() {
    let numResults = 20;
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
  }
}

customElements.define("coprocure-search", CoProcureSearch);