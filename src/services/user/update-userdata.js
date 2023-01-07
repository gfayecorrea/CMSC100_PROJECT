import { getDB, saveDB } from '../../utils/db/index.js';

export const updateUser = async (request, reply) => {
  const { params, body, username } = request;
  const { userId: id } = params;
  const { firstName, lastName } = body;

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest('Sorry, you are not logged in.');
  }

  if (id !== username) {
    return reply.badRequest('Sorry, you are not the owner of the account.');
  }

  const db = await getDB();

  db.users[id].firstName = firstName || db.users[id].firstName;
  db.users[id].lastName = lastName || db.users[id].lastName;
  db.users[id].updatedDate = new Date().getTime();

  await saveDB(db);

  return {
    id,
    ...db.users[id]
  };
};
