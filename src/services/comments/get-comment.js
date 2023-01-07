import { getDB } from '../../utils/db/index.js';

export const getComment = async (request, reply) => {
  const { params, username } = request;
  const { commentId: id, blogId: blogID } = params;

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest('Sorry, you are not logged in.');
  }

  const db = await getDB();

  const { blogs } = db;

  if (!blogs[blogID].comments[id]) {
    return reply.notFound('Comment not found.');
  }

  return {
    id,
    ...blogs[blogID].comments[id]
  };
};
