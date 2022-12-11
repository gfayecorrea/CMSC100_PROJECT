import Fastify from 'fastify';
import sensible from '@fastify/sensible';
import openAPIGlue from 'fastify-openapi-glue';
import swagger from '@fastify/swagger';
import { Service } from './services/index.js';
import { specification } from './specification/index.js';

const prefix = '/api';

export async function build () {
  // initialize fastify
  const fastify = Fastify({ logger: true });
  fastify.register(sensible);

  const service = new Service();

  const openAPIGlueOptions = {
    specification,
    service,
    prefix
  };

  const swaggerOptions = {
    openapi: specification,
    routePrefix: '/docs',
    exposeRoute: true
  };

  fastify.register(swagger, swaggerOptions);
  fastify.register(openAPIGlue, openAPIGlueOptions);

  // // create blog
  // fastify.post(`${prefix}/blog`, createBlog);

  // // get many blog
  // fastify.get(`${prefix}/blog`, getManyBlog);

  // // get one todo
  // fastify.get(`${prefix}/blog/:blogId`, getBlog);

  // // update one blog
  // fastify.put(`${prefix}/blog/:blogId`, updateBlog);

  // // delete one blog
  // fastify.delete(`${prefix}/blog/:blogId`, deleteBlog);

  return fastify;
}
