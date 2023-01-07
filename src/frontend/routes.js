import { html } from 'lit';
import { redirectIfLoggedIn } from './utils/helpers/redirect-if-logged-in.js';
import { redirectIfLoggedOut } from './utils/helpers/redirect-if-logged-out.js';

const router = document.querySelector('small-router');

export const routes = {
  '/': {
    /**
     * render function below is the same as
     * function () {
     *  return html`
     *    <page-home></page-home>
     *  `;
     * }
     *
     * This creates an html string to be rendered on the page
     */
    render: () => html`
      <page-home></page-home>
    `,
    // lazy-loads the page when the URL pattern is visited
    preRender: () => import('./pages/page-home/index.js')
  },
  '/login': {
    render: () => html`
      <page-login></page-login>
    `,
    // runs all scripts, if any one of the functions in the list fails
    preRender: [
      redirectIfLoggedIn,
      () => import('./pages/page-login/index.js')
    ]
  },
  '/register': {
    render: () => html`
      <page-register></page-register>
    `,
    // runs all scripts, if any one of the functions in the list fails
    preRender: [
      redirectIfLoggedIn,
      () => import('./pages/page-register/index.js')
    ]
  },
  '/blog': {
    render: () => html`
      <page-blogs></page-blogs>
    `,
    // runs all scripts, if any one of the functions in the list fails
    preRender: [
      redirectIfLoggedOut,
      () => import('./pages/page-blogs/index.js')
    ]
  },
  '/blog/:id': {
    render: () => html`
      <page-blog-one .paramObject=${router.paramObject}></page-blog-one>
    `,
    // runs all scripts, if any one of the functions in the list fails
    preRender: [
      redirectIfLoggedOut,
      () => import('./pages/page-blog-one/index.js')
    ]
  },
  '/change-password': {
    render: () => html`
      <page-change-password></page-change-password>
    `,
    // runs all scripts, if any one of the functions in the list fails
    preRender: [
      redirectIfLoggedOut,
      () => import('./pages/page-change-password/index.js')
    ]
  },
  '/viewuser': {
    render: () => html`
      <page-viewuser></page-viewuser>
    `,
    // runs all scripts, if any one of the functions in the list fails
    preRender: [
      redirectIfLoggedOut,
      () => import('./pages/page-viewuser/index.js')
    ]
  },
  '/update-userdata': {
    render: () => html`
      <page-update-userdata></page-update-userdata>
    `,
    // runs all scripts, if any one of the functions in the list fails
    preRender: [
      redirectIfLoggedOut,
      () => import('./pages/page-update-userdata/index.js')
    ]
  },
  '/logout': {
    render: () => html`
      <page-logout></page-logout>
    `,
    // runs all scripts, if any one of the functions in the list fails
    preRender: [
      redirectIfLoggedOut,
      () => import('./pages/page-logout/index.js')
    ]
  }
};