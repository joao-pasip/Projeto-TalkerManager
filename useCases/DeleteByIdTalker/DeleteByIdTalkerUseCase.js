const { read, write } = require('../../helpers/db');

async function DeleteByIdTalkerUseCase(id) {
  const file = await read();

  const fileFilter = file.filter((objTalker) => objTalker.id !== Number(id));

  await write(fileFilter);
}

module.exports = { DeleteByIdTalkerUseCase };