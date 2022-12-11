import Fastify from 'fastify';
import sensible from '@fastify/sensible';
import openAPIGlue from 'fastify-openapi-glue';
import swagger from '@fastify/swagger';

const prefix = '/api';

export async function build () {
  // initialize fastify
  const fastify = Fastify({ logger: true });
  fastify.register(sensible);

  const openAPIGlueOptions = {
    prefix
  };

  const swaggerOptions = {
    exposeRoute: true
  };

  fastify.register(swagger, swaggerOptions);
  fastify.register(openAPIGlue, openAPIGlueOptions);

  // fastify.get(prefix, general);

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
