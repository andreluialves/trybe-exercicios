const connection = require('./connection');
const Joi = require('joi');

const formatUser = ({ id, first_name: firstName, last_name: lastName, email }) => {
  return {
    id,
    firstName,
    lastName,
    email,
  };
}

const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
})

function isValid(userData) {
  return userSchema.validate(userData);
}

const create = async ({ firstName, lastName, email, password }) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  const { insertId } = connection.execute(query, [firstName, lastName, email, password])
  return { id: insertId, firstName, lastName, email };
}

const findAll = async () => {
  const query = 'SELECT * FROM users';
  const users = await connection.execute(query);
  return users[0];
}

const findById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  const [user] = await connection.execute(query, [id]);
  if (user[0])
    return formatUser(user[0]);
  return null;
}

const updateUser = async (id, { firstName, lastName, email, password }) => {
	const query = ` UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ? `;
	await connection.execute(query, [firstName, lastName, email, password, id]);

	return findById(id);
}

module.exports = {
  formatUser,
  create,
  findAll,
  findById,
  updateUser,
  isValid
};