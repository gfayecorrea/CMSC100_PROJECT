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
    </style>
    <h2>
      See User Profile
    </h2>
    <form @submit=${this.getUser}>
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
         Enter Username:
       </label>
       <input type="text" placeholder="username" id="username" name="username">
     </div>
     <div class="flex-group">
       <button>
         View User
       </button>
     </div>
    ${Object.keys(this.userData).length
        ? html`
        <h4> First Name : ${this.userData.firstName}</h4>
        <h4> Last Name : ${this.userData.lastName}</h4>
        <h4> Created Date : ${new Date(this.userData.createdDate).toDateString()}</h4>
        <h4> Latest Update Date : ${new Date(this.userData.updatedDate).toDateString()}</h4>
        `
        : ''
    }
  </form>
  `;
}
