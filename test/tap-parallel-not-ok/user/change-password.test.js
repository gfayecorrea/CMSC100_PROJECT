import tap from 'tap';
import { build } from '../../../src/app.js';
import 'must/register.js';
import Chance from 'chance';

const chance = new Chance();

tap.mochaGlobals();

const prefix = '/api';

describe('Change user password should work', async () => {
  let app;

  before(async () => {
    app = await build();
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

  it('Should change user password given an ID', async () => {
    const newUserPass = {
      password: 'password'
    };

    const newerUserPass = {
      password: 'password 1'
    };

    const createResponse = await app.inject({
      method: 'POST',
      url: `${prefix}/change-password`,
      headers: {
        'Content-Type': 'application/json',
        cookie
      },
      body: JSON.stringify(newUserPass)
    });

    const { id, createdDate, updatedDate } = await createResponse.json();

    const response = await app.inject({
      method: 'POST',
      url: `${prefix}/change-password`,
      headers: {
        'Content-Type': 'application/json',
        cookie
      },
      body: JSON.stringify(newerUserPass)
    });

    // this checks if HTTP status code is equal to 200
    response.statusCode.must.be.equal(200);

    const result = await response.json();

    // expect that id exists
    result.id.must.equal(id);
    // expect that all of the values should be equal to newUser properties
    result.password.must.be.equal(newerUserPass.password);
    result.createdDate.must.equal(createdDate);
    result.updatedDate.must.above(updatedDate);
  });
});
