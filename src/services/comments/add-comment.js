import { getDB, saveDB } from '../../utils/db/index.js';
import { v4 } from 'uuid';

export const addComment = async (request, reply) => {
  const { params, body, username } = request;
  const { blogId: blogID } = params;
  const { description, isDone = false } = body;
  const db = await getDB();

  const id = v4();

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest('Sorry, you are not logged in.');
  }

  const comment = {
    description,
    isDone,
    username,
    createdDate: new Date().getTime(),
    updatedDate: new Date().getTime()
  };

  db.blogs[blogID].comments[id] = comment;

  await saveDB(db);

  return {
    id,
    ...comment
  };
};
