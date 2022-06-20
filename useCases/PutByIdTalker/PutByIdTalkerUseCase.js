const { read, write } = require('../../helpers/db');

async function PutByIdTalkerUseCase(talker) {
  const file = await read();

  const fileId = file.find((objTalker) => objTalker.id === talker.id);

  if (!fileId) {
    throw new Error('Sem id de Talker');
  }

  const newFile = file.map((objTalker) => {
    if (objTalker.id === talker.id) {
      return { ...objTalker, ...talker };
    }
    return objTalker;
  });

  await write(newFile);
}

module.exports = { PutByIdTalkerUseCase };