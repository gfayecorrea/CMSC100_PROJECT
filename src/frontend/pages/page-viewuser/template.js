import { html } from 'lit';

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
        margin-left: 10px;
        font-size: 20px;
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
    <form class="form_class" @submit=${this.getUser}>
    ${this.errorMessage
      // if this is an errorMessage
      ? html`
        <div class="flex-group">
          ${this.errorMessage}
        </div>
      `
      : ''}
     <h2 style="text-align: center; color: #ff8000">
       See User Profile
     </h2>
     <div class="label-input-group">
       <label for="username">
         Enter Username:
       </label>
       <input type="text" class="field-input" placeholder="Username" id="username" name="username">
     </div>
     <div class="flex-group">
       <button>
         View User
       </button>
     </div>
    ${Object.keys(this.userData).length
        ? html`
        <p class="info"> First Name : ${this.userData.firstName}</p>
        <p class="info"> Last Name : ${this.userData.lastName}</p>
        <p class="info"> Created Date : ${new Date(this.userData.createdDate).toDateString()}</p>
        <p class="info"> Latest Update Date : ${new Date(this.userData.updatedDate).toDateString()}</p>
        `
        : ''
    }
  </form>
  `;
}
