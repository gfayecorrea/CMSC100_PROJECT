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
    <form class="blog-create-form" @submit="${this.addComment}">
      <div class="label-input-group">
        <label for="description">
          Comment
        </label>
        <input type="text" placeholder="Enter comment" id="description" name="description" value="${this.comment?.description}">
      </div>
      <div class="flex-group">
        <button>
        ${this.text}
        </button>
      </div>
    </form>
  `;
}
