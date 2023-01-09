import { html } from 'lit';
import '../../components/blog-component/index.js';

export function template () {
  return html`
    <style>
      .blog {
        display: flex;
        text-align: center;
        align-items: center;
        padding: 10px;
      }
      .blog * {
        flex: 1;
        text-align: center;
      }
    </style>
    <h2>
      List of Blogs
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
          <a class="t" href="/blog/${blog.id}">
            ${blog.title}
          </a>
          <p>${blog.description} </p>
          <p style="font-style: italic;"> Created at ${new Date(blog.createdDate)} <br> Last update at ${new Date(blog.updatedDate)} </p>
          <p>
            Done: <input type="checkbox" .checked=${blog.isDone} id="${blog.id}" @click="${this.checkedBlog}">
          </p>
        </div>
      `)}
    </div>
    <br><br><br>
    <a href="/createblog" class="cnb" >Create New Blog</a>
  `;
}
