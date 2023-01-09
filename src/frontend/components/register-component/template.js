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

    .form_class {
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
      color: #ff8000;
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
      letter-spacing: 2px;
    }

  </style>
  <form class="form_class" @submit=${this.register}>
    ${this.errorMessage
      // if this is an errorMessage
      ? html`
        <div class="flex-group">
          ${this.errorMessage}
        </div>
      `
      : ''}
    <div class="label-input-group">
      <label for="username">
        Username:
      </label>
      <input type="text" class="field-input" placeholder="Enter username" id="username" name="username" required>
    </div>
    <div class="label-input-group">
      <label for="password">
        Password:
      </label>
      <input type="password" class="field-input" placeholder="Enter password" id="password" name="password" required>
    </div>
      <div class="label-input-group">
      <label for="firstName">
        First Name:
      </label>
      <input type="text" class="field-input" placeholder="Enter First Name" id="firstName" name="firstName" required>
    </div>
      <div class="label-input-group">
      <label for="lastName">
        Last Name:
      </label>
      <input type="text" class="field-input" placeholder="Enter Last Name" id="lastName" name="lastName" required>
    </div>
    <div class="flex-group">
      <button>
        Register
      </button>
    </div>
    <div class ="info" >
      <p>
        Had already registered? <a href="/login">Login Here</a>
      </p>
    </div>    
  </form>
  `;
}
