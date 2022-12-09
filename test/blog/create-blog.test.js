import tap from 'tap';
import { build } from '../../src/app.js';
import 'must/register.js';

tap.mochaGlobals();

const prefix = '/api';

describe('Creating a blog should work', async () => {
  let app;

  before(async () => {
    app = await build();
  });

  it('Should return the object that was created with ID with isDone = false without isDone being given', async () => {
    const newBlog = {
      title: 'New Blog',
      description: 'Some description'
    };

    const response = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    // this checks if HTTP status code is equal to 200
    response.statusCode.must.be.equal(200);

    const result = await response.json();

    // expect that id exists
    result.id.must.not.be.null();
    // expect that all of the values should be equal to newBlog properties
    result.title.must.be.equal(newBlog.title);
    result.description.must.be.equal(newBlog.description);
    // expect that isDone is false because it was not given
    result.isDone.must.be.false();
    // expect createdDate and updatedDate is not null
    result.createdDate.must.not.be.null();
    result.updatedDate.must.not.be.null();
  });

  it('Should return the object that was created with ID with isDone = to the given object', async () => {
    const newBlog = {
      title: 'New Blog 2',
      description: 'Some description 2',
      isDone: true
    };

    const response = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    // this checks if HTTP status code is equal to 200
    response.statusCode.must.be.equal(200);

    const result = await response.json();

    // expect that id exists
    result.id.must.not.be.null();
    // expect that all of the values should be equal to newBlog properties
    result.title.must.be.equal(newBlog.title);
    result.description.must.be.equal(newBlog.description);
    result.isDone.must.be.equal(newBlog.isDone);
    // expect createdDate and updatedDate is not null
    result.createdDate.must.not.be.null();
    result.updatedDate.must.not.be.null();
  });
});
