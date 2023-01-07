import { html } from 'lit';
import '../../components/blog-component/index.js';

export function template () {
  return html`
    <style>
      .blog {
        display: flex;
        align-items: center;
        padding: 12px;
      }
      .blog * {
        flex: 1;
      }
    </style>
    
    ${this.errorMessage
      // if this is an errorMessage
      ? html`
        <div class="flex-group">
          ${this.errorMessage}
        </div>
      `
      : ''}
    <blog-component @submit-blog="${this.updateBlog}" .blog="${this.blog}"></blog-component>
  `;
}