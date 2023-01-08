import { html } from 'lit';
import '../../components/blog-component/index.js';

export function template () {
  return html`
    <style>
      .blog {
        display: flex;
        align-items: center;
        padding: 15px;
      }
      .blog * {
        flex: 1;
      }
    </style>
    <h2>
      Blogs
    </h2>
    ${this.errorMessage
      // if this is an errorMessage
      ? html`
        <div class="flex-group">
          ${this.errorMessage}
        </div>
      `
      : ''}
    <div class="blog-list">
      ${this.blogs.map(blog => html`
        <div class="blog">
          <a href="/blog/${blog.id}">
            ${blog.title}
          </a>
          <p>
            ${blog.description} 
            <div> Created at: ${new Date(blog.createdDate)} | Last update at: ${new Date(blog.updatedDate)} </div>
          </p>
          <p>
            Done: <input type="checkbox" .checked=${blog.isDone} id="${blog.id}" @click="${this.checkedBlog}">
          </p>
        </div>
      `)}
    </div>
    <blog-component @submit-blog="${this.createBlog}"></blog-component>
  `;
}