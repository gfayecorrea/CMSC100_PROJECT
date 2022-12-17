import { getDB, saveDB } from '../../utils/db/index.js';

export const updateBlog = async (request, reply) => {
  const { params, body, username } = request;
  const { blogId: id } = params;
  const { title, description, isDone = null } = body;

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest('Sorry, you are not logged in.');
  }

  const db = await getDB();

  // check if the username logged in is the same as the username saved on the blog to update
  if (db.blogs[id].username !== username) {
    return reply.forbidden('Sorry, you are not the owner of this blog.');
  }

  db.blogs[id].title = title || db.blogs[id].title;
  db.blogs[id].description = description || db.blogs[id].description;
  db.blogs[id].isDone = isDone != null ? isDone : db.blogs[id].isDone;
  db.blogs[id].updatedDate = new Date().getTime();

  await saveDB(db);

  return {
    id,
    ...db.blogs[id]
  };
};
