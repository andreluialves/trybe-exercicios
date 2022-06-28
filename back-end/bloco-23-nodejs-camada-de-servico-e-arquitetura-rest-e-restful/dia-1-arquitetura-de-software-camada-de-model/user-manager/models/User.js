// Começamos importando a conexão com o banco
const connection = require('./connection');

const formatUser = ({ id, first_name: firstName, last_name: lastName, email }) => {
  return {
    id,
    firstName,
    lastName,
    email,
  };
  }

// Função responsável por criar o usuário no banco de dados
const  create = async ({ firstName, lastName, email, password }) => {
const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
// Ao invés de chamarmos connection como uma function, agora utilizamos diretamente o método `execute`
const {insertId} = connection.execute(query, [firstName, lastName, email, password])
return { id: insertId,  firstName, lastName, email };
// Obtemos o resultado da inserção e o utilizamos para obter o ID recém inserido
// .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
}

const findAll = async () => {
  const query = 'SELECT * FROM users';
  const users = await connection.execute(query);
  return users[0];
}

module.exports = {
  formatUser,
  create,
  findAll
};