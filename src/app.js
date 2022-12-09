import Fastify from 'fastify';
import { general } from './services/general/index.js';
import { createBlog } from './services/blogs/create-blog.js';

const prefix = '/api';

export async function build () {
  // initialize fastify
  const fastify = Fastify({ logger: true });

  fastify.get(prefix, general);

  fastify.post(`${prefix}/blog`, createBlog);

  return fastify;
}
