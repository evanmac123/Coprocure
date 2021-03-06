import { resultLayout } from './search-results.js';
import '../coprocure-pagination/index.js';
import { spinner } from './spinner.js';
import { states } from './states.js';
import { buyers } from './buyers.js';
import { coops } from './coops.js';
import { showContactVendorModal, showShareModal, showAdditionalDocsModal } from './overlays.js';
import { trackEvent } from './tracking.js';



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
    return ['query', 'page', 'sort', 'states', 'buyers', 'coops', 'search'];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if(attr === 'query') {
      if(newValue) {
        this.query = newValue;
        this.setAttribute('page','');
        this.setAttribute('sort','');
      }
    }
    if(attr === 'page') {
      if(newValue) {
        this.page = newValue;
      }
    }
    if(attr === 'sort') {
      if(newValue) {
        this.sort = newValue;
      }
    }
    if(attr === 'states') {
      if(newValue) {
        this.states = JSON.parse(newValue);
      }
    }
    if(attr === 'buyers') {
      if(newValue) {
        this.buyers = JSON.parse(newValue);
      }
    }
    if(attr === 'coops') {
      if(newValue) {
        this.coops = JSON.parse(newValue);
      }
    }
    if(attr === 'search') {
    }
    this.search();
  }

  connectedCallback() {
    this.showExpired = false;
    this.showNonCoop = false;
    if(this.getAttribute('query')) {
      this.query = this.getAttribute('query');
    }
    let queryParams = getParams();
    if(queryParams.query) {
      this.query = queryParams.query;
      this.setAttribute('query', this.query);
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
    let expParam = `expiration:['${new Date().toISOString()}',}`;
    let url = `https://1lnhd57e8f.execute-api.us-west-1.amazonaws.com/prod?q.parser=structured&size=${numResults}&start=${start}`;

    // have to split the query into separate terms if it is not enclosed in quotes or the structured filters will fail
    if(this.query) {
      if(this.query.indexOf('"')<0) {
        url += `&q=(and `;
        decodeURIComponent(this.query).split(' ').forEach( (term) => {
          url += ` '${term}'`;
        })
      } else {
        url += `&q=(and '${this.query}' `;
      }
    }
    if(this.states && this.states.length > 0) {
      url += `(or buyer_lead_agency_state:`;
      this.states.forEach( (state) => {
        url += `'${state}' `;
      })
      url += `)`
    }
    if( (this.buyers && this.buyers.length > 0)) {
      url += `(or buyer_lead_agency:`;
      this.buyers.forEach( (buyer) => {
        url += `'${encodeURIComponent(buyer)}' `;
      })
      url += `)`
    }
    if(this.coops && this.coops.length > 0) {
      url += ` (or cooperative_affiliation:`;
      this.coops.forEach( (coop) => {
        url += `'${encodeURIComponent(coop)}' `;
      })
      url += `)`
    }
    if(!this.showNonCoop) {
      url += `(and cooperative_language:'true')`;
    }
    url += `)`
    if(this.sort) {
      url += '&sort='+this.sort;
      trackEvent('search', 'sort', this.sort);
    }
    if(!this.showExpired) {
      url += `&fq=${encodeURIComponent(expParam)}`;
    }
    let component = this;
    if(this.query) {
      fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log(json)
        component.renderResults(json);
        trackEvent('search', 'query', component.query);
      });
    }
  }

  renderResults(json) {
    this.innerHTML = resultLayout(json, this.query, this.sort, this.showExpired, this.showNonCoop, states, buyers, coops, this.states, this.buyers, this.coops);
    window.lastSearch = window.location.toString();

    if(document.querySelector('a[href="#contactanchor"]')) {
      document.querySelector('a[href="#contactanchor"]').addEventListener('click', function() {
        document.querySelector('.message-info textarea[name="description"]').value = 'Please help with the following research request:'
      })
    }    

    let component = this;
    // listen for custom events on the contained pagination element
    document.querySelector('coprocure-pagination').addEventListener('navigation', function (e) {
      trackEvent('search', 'pagination', e.detail.page);
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
    document.getElementById('expired').addEventListener('change', function(event) {
      if(this.checked) {
        component.showExpired = true;
        trackEvent('search', 'filter', 'showExpired');
      } else {
        component.showExpired = false;
      }
      component.search();
    })
    document.getElementById('noncoop').addEventListener('change', function(event) {
      if(this.checked) {
        component.showNonCoop = true;
        trackEvent('search', 'filter', 'showNonCoop');
      } else {
        component.showNonCoop = false;
      }
      component.search();
    })

    document.querySelector('.js-filter-reset').addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('noncoop').checked = false;
      component.showNonCoop = false;
      document.getElementById('expired').checked = false;
      component.showExpired = false;
      document.querySelectorAll('select[name="buyer_lead_agency_state"] option:checked').forEach( (item) => {
        item.selected = false;
      })
      document.querySelectorAll('select[name="buyer_lead_agency"] option:checked').forEach( (item) => {
        item.selected = false;
      })
      document.querySelector('select[name="buyer_lead_agency_state"] option').selected = true;
      document.querySelector('select[name="buyer_lead_agency"] option').selected = true;
      document.querySelector('select[name="coop_list"] option').selected = true;
      document.querySelector('button.filters-apply').click();
    })
    document.querySelector('button.filters-apply').addEventListener('click', function(event) {
      event.preventDefault();
      let selectedStates = document.querySelectorAll('select[name="buyer_lead_agency_state"] option:checked');
      let statesValues = Array.from(selectedStates).map(el => el.value);
      if(statesValues.length > 0) {
        document.querySelector('coprocure-search').setAttribute('states',JSON.stringify(statesValues));
        trackEvent('search', 'filter', 'coop='+JSON.stringify([statesValues]));
      }

      let selectedBuyers = document.querySelectorAll('select[name="buyer_lead_agency"] option:checked');
      let buyerValues = Array.from(selectedBuyers).map(el => el.value);
      if(buyerValues.length > 0) {
        document.querySelector('coprocure-search').setAttribute('buyers',JSON.stringify(buyerValues));
        trackEvent('search', 'filter', 'coop='+JSON.stringify([buyerValues]));
      }

      if(document.querySelector('select[name="coop_list"] option:checked')) {
        let selectedCoop = document.querySelector('select[name="coop_list"] option:checked').value;
        document.querySelector('coprocure-search').setAttribute('coops',JSON.stringify([selectedCoop]));
        trackEvent('search', 'filter', 'coop='+JSON.stringify([selectedCoop]));
      }
      let newSearch = 0;
      let lastSearch = document.querySelector('coprocure-search').getAttribute('search');
      if(lastSearch) {
        newSearch = lastSearch++;
      }
      
      document.querySelector('coprocure-search').setAttribute('search',newSearch);
    })
  }

}

customElements.define("coprocure-search", CoProcureSearch);




// https://1lnhd57e8f.execute-api.us-west-1.amazonaws.com/prod?size=1&start=0&q='vest'&q.parser=structured&fq=expiration%3A%5B'2019-01-01T00%3A00%3A00Z'%2C%7D&sort=expiration+asc
