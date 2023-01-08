import { html } from 'lit';
// loads the login-component
import '../../components/create-blog-component/index.js';

export function template () {
  return html`<create-blog-component></create-blog-component>`;
}