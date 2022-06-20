const { read } = require('../../helpers/db');

async function GetSearchTalkerUseCase(search) {
  const file = await read();

  if (!search) {
    return file;
  }

  const fileFilter = file.filter((objTalker) =>
    objTalker.name.toLowerCase().includes(search.toLowerCase()));

  return fileFilter;
}

module.exports = { GetSearchTalkerUseCase };