import { getDB, saveDB } from '../../utils/db/index.js';

export const updateBlog = async (request, reply) => {
  const { params, body } = request;
  const { blogId: id } = params;
  const { title, description, isDone = null } = body;
  const db = await getDB();

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
