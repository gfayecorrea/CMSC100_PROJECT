import { getDB, saveDB } from '../../utils/db/index.js';

export const deleteComment = async (request, reply) => {
  const { params, username } = request;
  const { commentId: id } = params;
  const db = await getDB();

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest('Sorry, you are not logged in.');
  }

  // check if the username logged in is the same as the username saved on the comment to delete
  if (db.comments[id].username !== username) {
    return reply.forbidden('Sorry, you are not the owner of this blog.');
  }

  delete db.comments[id];

  await saveDB(db);

  return {
    success: true
  };
};
