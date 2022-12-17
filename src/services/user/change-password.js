import { getDB, saveDB } from '../../utils/db/index.js';
import { hash } from 'bcrypt';
const saltRounds = 10;

export const changePassword = async (request, reply) => {
  const { params, body, username } = request;
  const { userId: id } = params;
  const { password } = body;

  const db = await getDB();

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest('Sorry, you are not logged in.');
  }

  if (db.users[id].username !== username) {
    return reply.forbidden('Sorry, you are not the owner of this account.');
  }

  if (password === '') {
    return reply.forbidden('Sorry, you have not enter a password.');
  }

  const hashedPassword = await hash(password, saltRounds);

  db.users[id].hashedPassword = hashedPassword || db.users[id].hashedPassword;
  db.users[id].updatedDate = new Date().getTime();

  await saveDB(db);

  return {
    id,
    ...db.users[id]
  };
};
