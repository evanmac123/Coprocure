import { render } from './template.js';

export default class CoProcureFooter extends HTMLElement {

  connectedCallback() {  
    this.innerHTML = render();
  }
  
}

customElements.define("coprocure-footer", CoProcureFooter);