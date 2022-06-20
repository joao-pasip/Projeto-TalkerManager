const { PostLoginUseCase } = require('./PostLoginUseCase');

function PostLoginController(req, res) {
  try {
    const token = PostLoginUseCase();
    return res.status(200).json({ token });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
}

module.exports = { PostLoginController };