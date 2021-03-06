const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.post('/user', middlewares.createUser);

app.get('/user', middlewares.getAllUsers);

app.get('/user/:id', middlewares.getUserById);

app.put('/user/:id', middlewares.updateUser);

app.use(middlewares.error);


const PORT = 3000;

app.listen(PORT, () => console.log(`Apliação online na porta ${PORT}`));
