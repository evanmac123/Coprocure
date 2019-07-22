import { resultLayout } from './search-results.js';
import { contractLayout } from './contract.js';

export default class CoProcureSearch extends HTMLElement {
  static get observedAttributes() {
    return ["query", "data-contract-id"];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if(attr === 'query') {
      if(newValue) {
        this.query = newValue;
        this.search();
      }
    }
    if(attr === 'data-contract-id') {
      if(newValue) {
        this.contractId = newValue;
        this.getContract();
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
      component.renderResults(json);
    });
  }

  getContract() {
    let url = `https://1lnhd57e8f.execute-api.us-west-1.amazonaws.com/prod?&q.parser=structured&q=_id:%27${this.contractId}%27`
    let component = this;
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      component.renderContract(json);
    });
  }

  renderContract(json) {
    this.innerHTML = contractLayout(json);
  }

  renderResults(json) {
    this.innerHTML = resultLayout(json, this.query);
    // listen for custom events on the contained pagination element
    document.querySelector('coprocure-pagination').addEventListener('navigation', function (e) {
      console.log(e)
    })
    document.querySelector('.show-filters').addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector('.search-filters').classList.toggle('active');
      document.querySelector('.overlay-background').classList.add('active');
      document.body.classList.add('noscroll');
    })
    document.querySelector('.overlay-background').addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector('.overlay-background').classList.remove('active');
      document.querySelector('.search-filters').classList.remove('active');
      document.body.classList.remove('noscroll');
    })
  }
}

customElements.define("coprocure-search", CoProcureSearch);