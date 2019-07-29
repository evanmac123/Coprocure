import { render } from './template.js';
import { burger } from '../../burger.js';
import { search } from './search-run.js';

export default class CoProcureHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = render();
    burger();
    search();
  }
}

customElements.define("coprocure-header", CoProcureHeader);