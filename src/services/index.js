import { general } from './general/index.js';
import { createBlog } from './blogs/create-blog.js';
import { deleteBlog } from './blogs/delete-blog.js';
import { getManyBlog } from './blogs/get-many-blog.js';
import { getBlog } from './blogs/get-blog.js';
import { updateBlog } from './blogs/update-blog.js';

export class Service {
  constructor (app) {
    this.app = app;
  }

  general = general
  createBlog = createBlog
  deleteBlog = deleteBlog
  getManyBlog = getManyBlog
  getBlog = getBlog
  updateBlog = updateBlog
}
