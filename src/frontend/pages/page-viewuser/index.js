import { customElement, property } from 'lit/decorators.js';
import { LitPage } from '../../utils/lit-page/index.js';
import { template } from './template.js';

/**
 * @type {LitPage}
 */
@customElement('page-viewuser')
class Page extends LitPage {
  @property({ type: Object })
  userData = {};

  @property({ type: String })
  errorMessage = ''

  render () {
    return template.bind(this)();
  }

  async getUser (event) {
    event.preventDefault();
    // gets the event.target and change the variable name to form
    const { target: form } = event;

    // console.log(Object.keys(this.userData).length);
    const userId = form.username.value;

    const response = await window.fetch(`/api/user/${userId}`);

    // console.log(await response.json());

    if (response.status === 200) {
      this.errorMessage = '';
      this.userData = await response.json();
    }
    const { message, error } = await response.json();
    this.errorMessage = `HTTP Code: ${response.status} - ${error} - ${message}`;
  }
}

export { Page };
