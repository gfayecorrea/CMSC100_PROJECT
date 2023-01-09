import { getDB, saveDB } from '../../utils/db/index.js';
import { hash } from 'bcrypt';
const saltRounds = 10;

export const registerUser = async (request, reply) => {
  const { body } = request;
  const { username, password, firstName, lastName } = body;

  const db = await getDB();

  // if a username exists
  if (db.users[username]) {
    return reply.badRequest('Username already exists');
  }

  if (password === '') {
    return reply.forbidden('Sorry, you have not enter a password.');
  }

  const hashedPassword = await hash(password, saltRounds);

  const user = {
    hashedPassword,
    firstName,
    lastName,
    createdDate: new Date().getTime(),
    updatedDate: new Date().getTime()
  };

  db.users[username] = user;

  await saveDB(db);

  return {
    username,
    ...user
  };
};
