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
        background-color: #ff8000;
        padding: 8px 20px;
        text-transform: uppercase;
        letter-spacing: .8px;
        display: block;
        margin: auto;
        margin-top: 10px;
        cursor: pointer;
        color: white;
      }
  
      .field-input {
        width: 100px;
        border-radius: 6px;
        border-style: solid;
        border-width: 1px;
        padding: 5px 0px;
        text-indent: 6px;
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 0.9rem;
      }

    </style>
    <form class="blog-create-form" @submit="${this.submitBlog}">
      <div class="label-input-group">
        <label for="title">
          Title:
        </label>
        <input type="text" class="field-input" placeholder="Title" id="title" name="title" value="${this.blog?.title}" required>
      </div>
      <div class="label-input-group">
        <label for="description">
          Text:
        </label>
        <input type="text" class="field-input" placeholder="Description" id="description" name="description" value="${this.blog?.description}" required>
      </div>
      <div class="label-input-group">
        <label for="isDone">
          Done:
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