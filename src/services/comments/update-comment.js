import { getDB, saveDB } from '../../utils/db/index.js';

export const updateComment = async (request, reply) => {
  const { params, body, username } = request;
  const { commentId: id } = params;
  const { description, isDone = null } = body;

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest('Sorry, you are not logged in.');
  }

  const db = await getDB();

  // check if the username logged in is the same as the username saved on the comment to update
  if (db.comments[id].username !== username) {
    return reply.forbidden('Sorry, you are not the owner of this blog.');
  }

  db.comments[id].description = description || db.comments[id].description;
  db.comments[id].isDone = isDone != null ? isDone : db.comments[id].isDone;
  db.comments[id].updatedDate = new Date().getTime();

  await saveDB(db);

  return {
    id,
    ...db.comments[id]
  };
};
