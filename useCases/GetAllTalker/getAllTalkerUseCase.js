const { read } = require('../../helpers/db');

async function getAllTalkerUseCase() {
  const talker = await read();
  return talker || [];
}

module.exports = { getAllTalkerUseCase };