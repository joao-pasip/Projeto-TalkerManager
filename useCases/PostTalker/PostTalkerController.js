const { PostTalkerUseCase } = require('./PostTalkerUseCase');

async function PostTalkerController(req, res) {
  try {
    const objTalker = req.body;
    const talker = await PostTalkerUseCase(objTalker);
    return res.status(201).json(talker);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

module.exports = { PostTalkerController };