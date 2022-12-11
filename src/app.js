import Fastify from 'fastify';
import sensible from '@fastify/sensible';
import openAPIGlue from 'fastify-openapi-glue';
import swagger from '@fastify/swagger';
import cookie from '@fastify/cookie';
import session from '@fastify/secure-session';
import jwt from '@fastify/jwt';
import { Service } from './services/index.js';
import { specification } from './specification/index.js';

const prefix = '/api';

export async function build () {
  // initialize fastify
  const fastify = Fastify({ logger: true });

  fastify.register(cookie);
  fastify.register(session, {
    secret: 'A very long string for the secret that should work',
    salt: '1234567890123456',
    cokkie: {
      httpOnly: true,
      maxAge: 60 * 60
    }
  });

  fastify.register(jwt, {
    secret: 'this is a very long string that will be used for the jwt secret'
  });

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
