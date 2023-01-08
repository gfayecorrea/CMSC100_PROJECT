import { customElement, property } from 'lit/decorators.js';
import { LitNoShadow } from '../../utils/lit-no-shadow/index.js';
import { changeUrl } from '../../utils/helpers/change-url.js';
import { template } from './template.js';

/**
 * @type {LitPage}
 */
@customElement('change-password-component')
class Component extends LitNoShadow {
  @property({ type: String })
  errorMessage = ''

  render () {
    return template.bind(this)();
  }

  // this is called when submit button is clicked (see template.js)
  async changePassword (event) {
    // this prevents the page from using the default behavior
    // of form submit
    event.preventDefault();
    // gets the event.target and change the variable name to form
    const { target: form } = event;
    const password = form.password.value;
    // calls an API call
    const response = await window.fetch('/api/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password
      })
    });

    if (response.status === 200) {
      this.errorMessage = '';
      return changeUrl('/blog');
    }
    const { message, error } = await response.json();
    this.errorMessage = `HTTP Code: ${response.status} - ${error} - ${message}`;
  }
}

export { Component };
