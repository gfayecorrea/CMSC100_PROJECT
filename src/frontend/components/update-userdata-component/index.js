import { customElement, property } from 'lit/decorators.js';
import { LitNoShadow } from '../../utils/lit-no-shadow/index.js';
import { template } from './template.js';

/**
 * @type {LitPage}
 */
@customElement('update-userdata-component')
class Component extends LitNoShadow {
  @property({ type: String })
  errorMessage = ''

  render () {
    return template.bind(this)();
  }

  // this is called when submit button is clicked (see template.js)
  async updateUserData (event) {
    // this prevents the page from using the default behavior
    // of form submit
    event.preventDefault();
    // gets the event.target and change the variable name to form
    const { target: form } = event;
    const userId = form.username.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    // calls an API call
    const response = await window.fetch(`/api/user/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName
      })
    });

    if (response.status === 200) {
      this.errorMessage = '';
    }
    const { message, error } = await response.json();
    this.errorMessage = `HTTP Code: ${response.status} - ${error} - ${message}`;
  }
}

export { Component };
