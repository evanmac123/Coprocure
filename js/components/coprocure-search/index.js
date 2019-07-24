import { resultLayout } from './search-results.js';
import { contractLayout } from './contract.js';
import '../coprocure-pagination/index.js';
import { spinner } from './spinner.js';

function getParams() {
  let paramsObj = {};
  window.location.search.replace('?','').split('&').forEach((pair) => {
    let pairObj = pair.split('=');
    paramsObj[pairObj[0]] = pairObj[1];
  })
  return paramsObj;
}

export default class CoProcureSearch extends HTMLElement {
  static get observedAttributes() {
    return ['query', 'contractid', 'page', 'sort'];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if(attr === 'query') {
      if(newValue) {
        this.query = newValue;
        this.setAttribute('page','');
        this.setAttribute('sort','');
        this.search();
      }
    }
    if(attr === 'contractid') {
      if(newValue) {
        this.contractId = newValue;
        this.getContract();
      }
    }
    if(attr === 'page') {
      if(newValue) {
        this.page = newValue;
        this.search();
      }
    }
    if(attr === 'sort') {
      if(newValue) {
        this.sort = newValue;
        this.search();
      }
    }
  }

  connectedCallback() {
    if(this.getAttribute('query')) {
      this.query = this.getAttribute('query');
    }
    if(this.getAttribute('contractid')) {
      this.contractId = this.getAttribute('contractid');
    }
    let queryParams = getParams();
    if(queryParams.query) {
      this.query = queryParams.query;
      this.setAttribute('query', this.query);
    }
    if(queryParams.contractId) {
      this.contractId = queryParams.contractId;
      this.setAttribute('contractid', this.contractId);
    }
  }

  search() {
    this.innerHTML = spinner();
    window.scrollTo(0,0);
    let numResults = 10;
    let start = 0;
    if(this.page && this.page > 1) {
      start = (numResults * this.page) - numResults;
    }
    let url = 'https://1lnhd57e8f.execute-api.us-west-1.amazonaws.com/prod?size='+numResults+'&start='+start+'&q='+this.query;
    if(this.sort) {
      url += '&sort='+this.sort;
    }
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
    this.innerHTML = spinner();
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
    this.innerHTML = resultLayout(json, this.query, this.sort);
    // listen for custom events on the contained pagination element
    document.querySelector('coprocure-pagination').addEventListener('navigation', function (e) {
      console.log(e.detail.page)
      document.querySelector('coprocure-search').setAttribute('page',e.detail.page);
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
    document.querySelector('.search-sort').addEventListener('change', function(event) {
      event.preventDefault();
      document.querySelector('coprocure-search').setAttribute('sort',event.target.value);
    })
  }

}

customElements.define("coprocure-search", CoProcureSearch);