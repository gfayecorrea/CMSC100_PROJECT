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
      }
      form button {
        margin: 0px;;
        background-color: blue;
        padding: 5px 10px;
        text-transform: uppercase;
        letter-spacing: .6px;
        cursor: pointer;
        color: white;
        font-size: 10px;
      }

      .field-input {
        width: 700px;
        height: 50px;
        border-radius: 6px;
        border-style: solid;
        border-width: 1px;
        padding: 5px 0px;
        text-indent: 5px;
        font-size: 0.9rem;
      }

    </style>
    <form class="blog-create-form" @submit="${this.addComment}">
      <div class="label-input-group">
      <textarea type="text" class="field-input" minlenght="1" maxlength="300" placeholder="Enter comment" id="description" name="description" value="${this.comment?.description}" required> </textarea>
      </div>
      <div class="flex-group">
        <button>
        ${this.text}
        </button>
      </div>
    </form>
  `;
}
