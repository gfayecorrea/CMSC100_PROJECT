import { getDB, saveDB } from '../../utils/db/index.js';

export const updateComment = async (request, reply) => {
  const { params, body, username } = request;
  const { commentId: id, blogId: blogID } = params;
  const { description } = body;

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest('Sorry, you are not logged in.');
  }

  const db = await getDB();

  // check if the username logged in is the same as the username saved on the comment to update
  if (db.blogs[blogID].comments[id].username !== username) {
    return reply.forbidden('Sorry, you are not the owner of this comment.');
  }

  db.blogs[blogID].comments[id].description = description || db.blogs[blogID].comments[id].description;
  db.blogs[blogID].comments[id].updatedDate = new Date().getTime();

  await saveDB(db);

  return {
    id,
    ...db.blogs[blogID].comments[id]
  };
};
