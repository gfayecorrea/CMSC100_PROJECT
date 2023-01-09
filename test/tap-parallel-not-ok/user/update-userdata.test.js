import tap from 'tap';
import { build } from '../../../src/app.js';
import 'must/register.js';
import Chance from 'chance';

const chance = new Chance();

tap.mochaGlobals();

const prefix = '/api';

describe('Update a user data should work', async () => {
  let app;

  before(async () => {
    app = await build({
      forceCloseConnections: true
    });
  });

  let cookie = '';

  it('Should return an error when there is no user logged in', async () => {
    const response = await app.inject({
      method: 'PUT',
      url: `${prefix}/user/gfayecorrea`,
      headers: {
        'Content-Type': 'application/json',
        cookie
      },
      body: JSON.stringify({
        firstName: 'Some Firstname',
        lastName: 'Some Lastname'
      })

    });

    response.statusCode.must.be.equal(401);
  });

  const newUser = {
    username: chance.email({ domain: 'example.com' }),
    password: chance.string({ length: 12 }),
    firstName: chance.first(),
    lastName: chance.last()
  };

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

  it('Should update the object given an ID', async () => {
    const newUserData = {
      firstName: 'Firstname',
      lastName: 'Lastname'
    };

    const createResponse = await app.inject({
      method: 'PUT',
      url: `${prefix}/user/${newUser.username}`,
      headers: {
        'Content-Type': 'application/json',
        cookie
      },
      body: JSON.stringify(newUserData)
    });

    // this checks if HTTP status code is equal to 200
    createResponse.statusCode.must.be.equal(200);

    const result = await createResponse.json();

    // expect that all of the values should be equal to newBlog properties
    //    result.username.must.be.equal(newUser.username);
    result.firstName.must.be.equal(newUserData.firstName);
    result.lastName.must.be.equal(newUserData.lastName);

    result.updatedDate.must.above(result.createdDate);
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

    // this checks if HTTP status code is equal to 401
    response.statusCode.must.be.equal(200);

    cookie = response.headers['set-cookie'];
  });

  it('Should return error if other user updating user data of another user', async () => {
    const newUserData = {
      firstName: 'firstname',
      lastName: 'lastname'
    };

    const createResponse = await app.inject({
      method: 'PUT',
      url: `${prefix}/user/${newUser.username}`,
      headers: {
        'Content-Type': 'application/json',
        cookie
      },
      body: JSON.stringify(newUserData)
    });

    // this checks if HTTP status code is equal to 400
    createResponse.statusCode.must.be.equal(400);
  });

  after(async () => {
    await app.close();
  });
});
