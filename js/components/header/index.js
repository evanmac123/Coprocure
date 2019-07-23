import { renderHeader } from './template.js';

export default class CoProcureHeader extends HTMLElement {

  render() {
    this.innerHTML = ``;
  }
}

customElements.define("coprocure-header", CoProcureHeader);