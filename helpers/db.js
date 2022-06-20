const { readFile, writeFile } = require('fs').promises;

async function read() {
  try {
    const file = await readFile('talker.json', { encoding: 'utf8' });
    return JSON.parse(file);
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function write(talker) {
  try {
    await writeFile('talker.json', JSON.stringify(talker));
  } catch (error) {
    console.log(error);
  }
}

module.exports = { read, write };