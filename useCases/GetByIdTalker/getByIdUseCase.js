const { read } = require('../../helpers/db');

async function getByIdUseCase(id) {
  const db = await read();
  const talker = db.find((talk) => talk.id === Number(id));
  if (!talker) {
    throw new Error('Pessoa palestrante não encontrada');
  }
  return talker;
}

module.exports = { getByIdUseCase };