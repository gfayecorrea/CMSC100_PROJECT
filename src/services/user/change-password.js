import { getDB, saveDB } from '../../utils/db/index.js';
import { hash } from 'bcrypt';
const saltRounds = 10;

export const changePassword = async (request, reply) => {
  const { body, username } = request;
  const { password } = body;

  const db = await getDB();

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest('Sorry, you are not logged in.');
  }

  if (password.trim().length === 0) {
    return reply.forbidden('Sorry, you have not enter a password.');
  }

  const hashedPassword = await hash(password, saltRounds);

  db.users[username].hashedPassword = hashedPassword || db.users[username].hashedPassword;
  db.users[username].updatedDate = new Date().getTime();

  await saveDB(db);

  return {
    success: true,
    username,
    ...db.users[username]
  };
};
