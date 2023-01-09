import { html } from 'lit';

export function template () {
  return html`
    <style>
      .blog-create-form {
        display: block;
        margin: 10px auto 20px;
        width: 500px;
        padding: 40px;
        border-radius: 8px;
        background-color: white;
        box-shadow: 5px 5px 10px rgb(0,0,0,0.3);
      }
  
      form .label-input-group {
        display: block;
        padding: 10px;
      }
  
      form .label-input-group > label {
        letter-spacing: 1px;
        font-size: 1rem;
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
  
      .info {
        text-align: center;
        font-size: 20px;
        font-weight: bolder;
        color: #ff8000;
        margin-top: 20px;
      }
  
      .field-input {
        width: 100%;
        border-radius: 6px;
        border-style: solid;
        border-width: 1px;
        padding: 5px 0px;
        text-indent: 6px;
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 0.9rem;
      }

      .field-input-des {
        width: 100%;
        height: 100px;
        border-radius: 6px;
        border-style: solid;
        border-width: 1px;
        padding: 5px 0px;
        text-indent: 5px;
        font-size: 0.9rem;
      }

    </style>
    <form class="blog-create-form" @submit="${this.createBlog}">
      <p class= "info">
        Create a Blog
      </p>
      <div class="label-input-group">
        <label for="title">
          Title:
        </label>
        <input type="text" class="field-input" placeholder="Title" id="title" name="title" value="${this.blog?.title}" required>
      </div>
      <div class="label-input-group">
        <label for="description">
          Description:
        </label>
        <textarea type="text" class="field-input-des" maxlength="500" placeholder="Description" id="description" name="description" value="${this.blog?.description}" required> </textarea>
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