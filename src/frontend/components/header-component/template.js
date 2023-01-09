import { html } from 'lit';

export function template () {
  return html`<header>
    <h1 style="color: #9c6218"> Blogging Rights &#153 </h1>
    <img src="././images/logo.png" alt="logo" width="450" height="100">
    <nav>
    ${this.loggedIn
      ? html`
      <a style="padding: 10px; font-weight:bolder; color: #ff8000;" href="/blog">
        Home
      </a>
      <a style="padding: 10px;" href="/viewuser">
        View Profile
      </a>
      <a style="padding: 10px;" href="/update-userdata">
        Update User Data
      </a>
      <a style="padding: 10px;" href="/change-password">
        Change Password
      </a>
      <a style="padding: 10px;" href="/logout">
        Logout
      </a>
      `
      : html`
        <a style="text-align: right; padding: 0px 100px;" href="/login">
          Login
        </a>
      `}
    </nav> 
  </header>`;
}
