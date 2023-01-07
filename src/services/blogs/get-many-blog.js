import { getDB } from '../../utils/db/index.js';

export const getManyBlog = async (request, reply) => {
  const { query, username } = request;
  const { limit = 5 } = query;

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest('Sorry, you are not logged in.');
  }

  const db = await getDB();

  const list = [];

  const blogs = Object
    .entries(db.blogs)
    .map(function ([id, blog]) {
      return {
        id,
        ...blog
      };
    })
    .sort(function (blog1, blog2) {
      return blog2.createdDate - blog1.createdDate;
    })
    .filter((blog) => (username === blog.username));

  for (const blog of blogs) {
    const comments = Object
    .entries(blog.comments)
    .map(function ([id, comment]) {
      return {
        id,
        ...comment
      };
    })
    .sort(function (comment1, comment2) {
      return comment2.createdDate - comment1.createdDate;
    })
    .filter((comment) => (username === comment.username));
  
    blog.comments = comments

    list.push(blog);
    if (list.length >= limit) {
      break;
    }
  }

  return list;
};
