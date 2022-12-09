import Fastify from 'fastify';
import { general } from './services/general/index.js';
import { createBlog } from './services/blogs/create-blog.js';
import { getManyBlog } from './services/blogs/get-many-blog.js';

const prefix = '/api';

export async function build () {
  // initialize fastify
  const fastify = Fastify({ logger: true });

  fastify.get(prefix, general);

  // create blog
  fastify.post(`${prefix}/blog`, createBlog);

  // get many blog
  fastify.get(`${prefix}/blog`, getManyBlog);

  return fastify;
}
