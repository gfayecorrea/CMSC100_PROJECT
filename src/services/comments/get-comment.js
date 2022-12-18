import { getDB } from '../../utils/db/index.js';

export const getComment = async (request, reply) => {
  const { params, username } = request;
  const { commentId: id } = params;

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest('Sorry, you are not logged in.');
  }

  const db = await getDB();

  const { comments } = db;

  if (!comments[id]) {
    return reply.notFound('Comment not found.');
  }

  return {
    id,
    ...comments[id]
  };
};
