// routes.js
const express = require('express');
const router = express.Router();
const { getAllData } = require('./src/controllers/GET');
const { insertData } = require('./src/controllers/INSERT');
const { deleteData } = require('./src/controllers/DELETE');
const { updateData } = require('./src/controllers/UPDATE');

// Rota GET para obter todos os dados
router.get('/', (req, res) => {
  const data = getAllData();
  res.json(data);
});

// Rota POST para inserir dados
router.post('/', (req, res) => {
  const newData = req.body;
  insertData(newData);
  res.send('Dados inseridos com sucesso!');
});

// Rota DELETE para excluir dados
router.delete('/:index', (req, res) => {
  const index = req.params.index;
  deleteData(index);
  res.send('Dados excluídos com sucesso!');
});

// Rota PUT para atualizar dados
router.put('/:index', (req, res) => {
  const index = req.params.index;
  const updatedData = req.body;
  updateData(index, updatedData);
  res.send('Dados atualizados com sucesso!');
});

module.exports = router;
