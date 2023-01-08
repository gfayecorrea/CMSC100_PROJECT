import { html } from 'lit';

export function template () {
  return html`
  <style>
    form {
      display: block;
      width: 100%;
      max-width: 600px;
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
  <form @submit=${this.updateUserData}>
    ${this.errorMessage
      // if this is an errorMessage
      ? html`
        <div class="flex-group">
          ${this.errorMessage}
        </div>
      `
      : ''}
    <div class="label-input-group">
      <label for="firstName">
        First Name:
      </label>
      <input type="text" placeholder="Enter your First Name" id="firstName" name="firstName">
    </div>
    <div class="label-input-group">
        <label for="lastName">
        Last Name:
        </label>
        <input type="text" placeholder="Enter your Last Name" id="lastName" name="lastName">
    </div>
    <div class="flex-group">
      <button>
        Save
      </button>
    </div>
    
  </form>
  `;
}
