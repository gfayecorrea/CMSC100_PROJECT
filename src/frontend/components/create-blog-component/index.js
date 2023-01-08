import { customElement } from 'lit/decorators.js';
import { LitPage } from '../../utils/lit-page/index.js';
import { template } from './template.js';
import { changeUrl } from '../../utils/helpers/change-url.js';

/**
 * @type {LitPage}
 */
@customElement('page-create-blog')
class Component extends LitPage {
  render () {
    return template.bind(this)();
  }

  async createBlog (event) {
    // this prevents the page from using the default behavior
    // of form submit
    event.preventDefault();
    // gets the event.target and change the variable name to form
    const { target: form } = event;


    const title = form.title.value
    const description = form.description.value
    const isDone = form.isDone.checked || false

    // calls an API call
    const response = await window.fetch('/api/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        description,
        isDone
      })
    });
    if (response.status === 200) {
      this.errorMessage = 'Saved successfully!';
      return changeUrl('/blog');
    }
    const { message, error } = await response.json();
    this.errorMessage = `HTTP Code: ${response.status} - ${error} - ${message}`;
  }
}

export { Component };