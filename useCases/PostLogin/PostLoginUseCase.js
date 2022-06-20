const { nanoid } = require('nanoid');

function PostLoginUseCase() {
  const token = nanoid(16);
  return token;
}

module.exports = { PostLoginUseCase };