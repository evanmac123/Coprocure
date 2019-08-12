import { contractLayout } from './contract.js';
import { spinner } from '../coprocure-search/spinner.js';
import { showContactVendorModal, showShareModal, showAdditionalDocsModal } from '../coprocure-search/overlays.js';
import { trackEvent } from '../coprocure-search/tracking.js';
import { getParams } from './get-params.js';

export default class CoProcureContract extends HTMLElement {
  static get observedAttributes() {
    return ['contractid'];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if(attr === 'contractid') {
      if(newValue) {
        this.contractId = newValue;
        if(this.contractId === 'none') {
          this.innerHTML = '';
        } else {
          this.getContract();
        }
      }
    }
  }

  connectedCallback() {
    if(this.getAttribute('contractid')) {
      this.contractId = this.getAttribute('contractid');
    }
    let queryParams = getParams();
    if(queryParams.contractId) {
      this.contractId = queryParams.contractId;
      this.setAttribute('contractid', this.contractId);
    }
  }

  getContract() {
    let contractElement = document.querySelector('coprocure-contract');
    contractElement.innerHTML = `<div class="contract-detail">${spinner()}</div>`;
    let url = `https://1lnhd57e8f.execute-api.us-west-1.amazonaws.com/prod?&q.parser=structured&q=_id:%27${this.contractId}%27`
    let component = this;
    trackEvent('view', 'contract', this.contractId);
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      component.renderContract(json);
    });
  }

  renderContract(json) {
    // assign the html to a contract element instead
    // maybe just set an id on another custom element
    let contractElement = document.querySelector('coprocure-contract .contract-detail');
    contractElement.innerHTML = contractLayout(json);
    window.scroll(0,0);
    contractElement.classList.add('get-big')

    setTimeout(function() {
      document.querySelector('.background-hider').style.display = 'block';
      document.querySelector('body').classList.add('noscroll');
    }, 300)

    document.querySelector('.close-overlay').addEventListener('click',function(event) {
      event.preventDefault();
      contractElement.classList.remove('get-big');
      document.querySelector('.background-hider').style.display = 'none';
      document.querySelector('body').classList.remove('noscroll');
      window.history.pushState({}, '', this.href);
      setTimeout(function() {
        document.querySelector('coprocure-contract').setAttribute('contractid',''); // blanking this will not trigger attributeChangeCallback, which seems weird
        document.querySelector('coprocure-contract').innerHTML = '';
        }, 300)
    })

    document.querySelector('.contact-supplier').addEventListener('click',function(event) {
      event.preventDefault();
      trackEvent('modal', 'contact-supplier', this.dataset.contractId);
      showContactVendorModal(this.dataset.contractId)
    })
    document.querySelector('.share-contract').addEventListener('click',function(event) {
      event.preventDefault();
      trackEvent('modal', 'share', this.dataset.contractId);
      showShareModal(this.dataset.contractId)
    })
    document.querySelector('.questions-link').addEventListener('click',function(event) {
      event.preventDefault();
      showAdditionalDocsModal({type:'questions'})
    })
    document.querySelector('.missing-documents').addEventListener('click',function(event) {
      event.preventDefault();
      trackEvent('modal', 'missing-documents', this.dataset.contractId);
      showAdditionalDocsModal({type:'docs',contractId:this.dataset.contractId})
    })
  }
}

customElements.define("coprocure-contract", CoProcureContract);
