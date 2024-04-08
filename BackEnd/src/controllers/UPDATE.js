// updateController.js
const fs = require('fs');

const getData = () => {
  const data = fs.readFileSync('./src/data/dados.json');
  return JSON.parse(data);
};

const updateData = (index, updatedData) => {
  const data = getData();
  data[index] = updatedData;
  fs.writeFileSync('./src/data/dados.json', JSON.stringify(data));
};

module.exports = { updateData };