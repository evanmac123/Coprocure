import { render } from './template.js';
import { contactus } from './contactus.js';

export default class CoProcureFooter extends HTMLElement {

  connectedCallback() {  
    this.innerHTML = render();
    contactus();
  }
  
}

customElements.define("coprocure-footer", CoProcureFooter);