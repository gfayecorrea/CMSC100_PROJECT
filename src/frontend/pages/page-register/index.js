import { customElement } from 'lit/decorators.js';
import { LitPage } from '../../utils/lit-page/index.js';
import { template } from './template.js';

/**
 * @type {LitPage}
 */
@customElement('page-register')
class Page extends LitPage {
  render () {
    return template.bind(this)();
  }
}

export { Page };
