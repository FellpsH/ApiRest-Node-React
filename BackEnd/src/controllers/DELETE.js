// deleteController.js
const fs = require('fs');

const getData = () => {
  const data = fs.readFileSync('./src/data/dados.json');
  return JSON.parse(data);
};

const deleteData = (index) => {
  const data = getData();
  data.splice(index, 1);
  fs.writeFileSync('./src/data/dados.json', JSON.stringify(data));
};

module.exports = { deleteData };