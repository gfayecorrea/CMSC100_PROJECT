import { html } from 'lit';

export function template () {
  return html`
    <style>
      .blog-create-form {
        display: block;
        width: 100%;
        padding: 10px;
      }
      form .label-input-group {
        display: block;
        padding: 10px;
      }
      form .flex-group {
        display: flex;
        padding: 10px;
        flex: 1;
      }
      form button {
        margin-right: 10px;
        margin-left: 10px;
      }
    </style>
    <form class="blog-create-form" @submit="${this.submitBlog}">
      <div class="label-input-group">
        <label for="title">
          Title:
        </label>
        <input type="text" placeholder="Title" id="title" name="title" value="${this.blog?.title}" required>
      </div>
      <div class="label-input-group">
        <label for="description">
          Text:
        </label>
        <input type="text" placeholder="description" id="description" name="description" value="${this.blog?.description}" required>
      </div>
      <div class="label-input-group">
        <label for="isDone">
          Done?:
        </label>
        <input type="checkbox" id="isDone" name="isDone" .checked="${this.blog?.isDone}">
      </div>
      <div class="flex-group">
        <button>
          Submit Blog
        </button>
      </div>
    </form>
  `;
}