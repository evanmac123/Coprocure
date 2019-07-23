import { render } from './template.js';
import '../../search-run.js';
import { burger } from '../../burger.js';

export default class CoProcureHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = render();
    burger();
  }
}

customElements.define("coprocure-header", CoProcureHeader);