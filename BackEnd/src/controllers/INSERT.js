const fs = require('fs');

const getData = () => {
  try {
    const data = fs.readFileSync('./src/data/dados.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // Se ocorrer um erro ao ler o arquivo (por exemplo, se estiver vazio),
    // retorna um array vazio
    return [];
  }
};

const insertData = (newData) => {
  let data = getData();
  // Verifica se os dados são um array, se não, converte para um array vazio
  if (!Array.isArray(data)) {
    data = [];
  }
  data.push(newData);
  fs.writeFileSync('./src/data/dados.json', JSON.stringify(data));
};

module.exports = { insertData };
