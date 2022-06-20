const { read, write } = require('../../helpers/db');

async function PostTalkerUseCase(objectTalker) {
  const file = await read();

  const newFile = {
    id: file.length + 1,
    ...objectTalker,
  };

  file.push(newFile);

  await write(file);

  return newFile;
}

module.exports = { PostTalkerUseCase };