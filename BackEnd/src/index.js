const express = require('express');
const routes = require('../ROUTES');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); // Criar a instância do aplicativo Express primeiro

// Middleware para analisar corpos de solicitação
app.use(bodyParser.json());

// Habilitar o CORS para todas as origens
app.use(cors());

// Usa as rotas definidas em routes.js
app.use('/', routes);

// Inicia o servidor
app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
