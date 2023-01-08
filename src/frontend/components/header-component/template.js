import { html } from 'lit';

export function template () {
  return html`<header>
    <h1>
      Blogging Rights
    </h1>
    <nav>
    ${this.loggedIn
      ? html`
      <a href="/blog">
        Home
      </a>
      <a href="/viewuser">
        View Profile
      </a>
      <a href="/update-userdata">
        Update User Data
      </a>
      <a href="/change-password">
        Change Password
      </a>
      <a href="/logout">
        Logout
      </a>
      `
      : html`
        <a href="/login">
          Login
        </a>
      `}
    </nav> 
  </header>`;
}
