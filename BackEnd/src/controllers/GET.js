// getController.js
const fs = require('fs');

const getData = () => {
  const data = fs.readFileSync('./src/data/dados.json');
  return JSON.parse(data);
};

const getAllData = () => {
  return getData();
};

module.exports = { getAllData };