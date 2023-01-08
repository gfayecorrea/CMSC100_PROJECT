import { customElement, property } from 'lit/decorators.js';
import { state } from '../../worker/index.js';
import { changeUrl } from '../../utils/helpers/change-url.js';
import { LitPage } from '../../utils/lit-page/index.js';
import { template } from './template.js';

/**
 * @type {LitPage}
 */
@customElement('page-blog-one')
class Page extends LitPage {
  @property({ type: Object })
  blog = {}

  @property({ type: String })
  errorMessage = ''

  render () {
    return template.bind(this)();
  }

  @property({ type: Array })
  comments = []

  @property({ type: Boolean })
  updatingBlog = false;

  @property({ type: Boolean })
  updatingComment = false;

  @property({ type: String })
  updatingCommentId = '';

  async updated (changedMap) {
    await super.updated(changedMap);
    if (changedMap.has('paramObject')) {
      const { id } = this.paramObject || {};
      if (id) {
        await this.getBlog(id);
      }
    }
  }

  async getBlog (id) {
    const response = await window.fetch(`/api/blog/${id}`);
    if (response.status !== 200) {
      return this.setErrorMessage(await response.json(), response.status);
    }
    try {
      if (response.status !== 200) {
        return this.setErrorMessage(await response.json(), response.status);
      } else {
        this.blog = await response.json();
        this.comments = this.blog.comments;
      }
    } catch (error) {
      return this.setErrorMessage(error, 404);
    }
  }

  async updateblog (event) {
    this.updatingBlog = true;
  }

  async updatecomment (event) {
    event.preventDefault();
    this.updatingComment = true;
    this.updatingCommentId = event.detail.id;
  }

  async updateBlog (event) {
    event.preventDefault();
    // we get the data from the detail being sent by the blog-component
    const { detail } = event;

    const response = await window.fetch(`/api/blog/${this.blog.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(detail)
    });
    try {
      if (response.status !== 200) {
        this.updatingBlog = false;
        return this.setErrorMessage(await response.json(), response.status);
      } else {
        this.blog = await response.json();
        changeUrl('/blog');
      }
    } catch (error) {
      return this.setErrorMessage(error, 404);
    }
  }

  async deleteBlog (event) {
    event.preventDefault();
    // we get the data from the detail being sent by the blog-component
    const { detail } = event;

    const response = await window.fetch(`/api/blog/${this.blog.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(detail)
    });
    try {
      if (response.status !== 200) {
        return this.setErrorMessage(await response.json(), response.status);
      } else {
        this.blog = await response.json();
        changeUrl('/blog');
      }
    } catch (error) {
      return this.setErrorMessage(error, 404);
    }
  }

  async addComment (event) {
    event.preventDefault();
    // we get the data from the detail being sent by the blog-component
    const { detail } = event;

    const response = await window.fetch(`/api/blog/${detail.id}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ description: detail.description })
    });
    try {
      const data = await response.json();

      this.comments = [
        data,
        ...this.comments
      ];

      console.log(this.comments);
    } catch (error) {
      return this.setErrorMessage(error, 404);
    }
  }

  async updateComment (event) {
    event.preventDefault();
    // we get the data from the detail being sent by the blog-component
    const { detail } = event;
    const response = await window.fetch(`/api/blog/${this.blog.id}/comment/${detail.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(detail)
    });
    try {
      if (response.status !== 200) {
        this.updatingComment = false;
        return this.setErrorMessage(await response.json(), response.status);
      } else {
        const comment = await response.json();
        this.comments = this.comments.map(obj => comment.id === obj.id ? comment : obj);
        this.updatingComment = false;
      }
    } catch (error) {
      return this.setErrorMessage(error, 404);
    }
  }

  async deleteComment (event) {
    event.preventDefault();
    // we get the data from the detail being sent by the blog-component
    const { detail } = event;

    const response = await window.fetch(`/api/blog/${this.blog.id}/comment/${detail.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: detail.id })
    });
    try {
      if (response.status !== 200) {
        return this.setErrorMessage(await response.json(), response.status);
      } else {
        this.comments = this.comments.filter((obj) => obj.id !== detail.id);
      }
    } catch (error) {
      return this.setErrorMessage(error, 404);
    }
  }

  async setErrorMessage (data, status) {
    const { message, error } = data;
    this.errorMessage = `HTTP Code: ${status} - ${error} - ${message}`;
    await state.set('user-is-logged-in', false);
  }
}

export { Page };
