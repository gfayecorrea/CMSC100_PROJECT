import tap from 'tap';
import { build } from '../../../src/app.js';
import 'must/register.js';
import Chance from 'chance';

const chance = new Chance();

tap.mochaGlobals();

const prefix = '/api';

describe('Delete a blog should work', async () => {
  let app;

  before(async () => {
    app = await build({
      forceCloseConnections: true
    });
  });

  it('Should return an error when there is no user logged in', async () => {
    const newBlog = {
      title: 'New Blog',
      description: 'Some description'
    };

    const response = await app.inject({
      method: 'GET',
      url: `${prefix}/blog/8c4206d7-c186-45dd-a9aa-db7ce78f3fb3`,
      headers: {
        'Content-Type': 'application/json',
        cookie
      },
      body: JSON.stringify(newBlog)
    });

    // this checks if HTTP status code is equal to 401
    response.statusCode.must.be.equal(401);
  });

  const newUser = {
    username: chance.email({ domain: 'example.com' }),
    password: chance.string({ length: 12 }),
    firstName: chance.first(),
    lastName: chance.last()
  };

  let cookie = '';

  it('Should return the user that was created a new user', async () => {
    const response = await app.inject({
      method: 'POST',
      url: `${prefix}/register`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    // this checks if HTTP status code is equal to 200
    response.statusCode.must.be.equal(200);

    const result = await response.json();

    // expect that id exists
    result.username.must.be.equal(newUser.username);
    result.firstName.must.be.equal(newUser.firstName);
    result.lastName.must.be.equal(newUser.lastName);

    // expect createdDate and updatedDate is not null
    result.createdDate.must.not.be.null();
    result.updatedDate.must.not.be.null();
  });

  it('Login should work', async () => {
    const response = await app.inject({
      method: 'POST',
      url: `${prefix}/login`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: newUser.username,
        password: newUser.password
      })
    });

    // this checks if HTTP status code is equal to 200
    response.statusCode.must.be.equal(200);

    cookie = response.headers['set-cookie'];
  });

  // Start test here
  it('Should return the success = true if ID is deleted', async () => {
    const newBlog = {
      title: 'New Blog for get',
      description: 'Some description'
    };

    const createResponse = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json',
        cookie
      },
      body: JSON.stringify(newBlog)
    });

    const { id } = await createResponse.json();

    const response = await app.inject({
      method: 'DELETE',
      headers: {
        cookie
      },
      url: `${prefix}/blog/${id}`
    });

    // this checks if HTTP status code is equal to 200
    response.statusCode.must.be.equal(200);

    const result = await response.json();

    // expect success is true
    result.success.must.be.true();

    const getResponse = await app.inject({
      method: 'GET',
      headers: {
        cookie
      },
      url: `${prefix}/blog/${id}`
    });

    // this checks if HTTP status code is equal to 404 not found
    getResponse.statusCode.must.be.equal(404);
  });

  let anotherId;

  it('Should return the success = true if ID is deleted', async () => {
    const newBlog = {
      title: 'New Blog for get',
      description: 'Some description'
    };

    const createResponse = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json',
        cookie
      },
      body: JSON.stringify(newBlog)
    });

    const { id } = await createResponse.json();
    anotherId = id;

    createResponse.statusCode.must.be.equal(200);
  });

  it('Logout should work', async () => {
    const response = await app.inject({
      method: 'GET',
      url: `${prefix}/logout`,
      headers: {
        'Content-Type': 'application/json',
        cookie
      }
    });

    // this checks if HTTP status code is equal to 200
    response.statusCode.must.be.equal(200);
  });

  it('Login should work', async () => {
    const response = await app.inject({
      method: 'POST',
      url: `${prefix}/login`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'username1',
        password: 'password1'
      })
    });

    response.statusCode.must.be.equal(200);

    cookie = response.headers['set-cookie'];
  });

  it('Should return the error when deleting another blog', async () => {
    const response = await app.inject({
      method: 'DELETE',
      headers: {
        cookie
      },
      url: `${prefix}/blog/${anotherId}`
    });

    // this checks if HTTP status code is equal to 403
    response.statusCode.must.be.equal(403);
  });

  after(async () => {
    await app.close();
  });
});
