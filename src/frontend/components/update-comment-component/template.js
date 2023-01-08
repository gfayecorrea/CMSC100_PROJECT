import { html } from 'lit';

export function template () {
  return html`
    <style>
      .todo-create-form {
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
      <div class="flex-group">
      
        <button @click = "${this.submitComment}">
          ${this.text}
        </button>
      </div>
    </form>
  `;
}