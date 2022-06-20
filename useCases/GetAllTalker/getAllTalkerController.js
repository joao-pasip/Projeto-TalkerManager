const { getAllTalkerUseCase } = require('./getAllTalkerUseCase');

async function getAllTalkerController(req, res) {
  try {
    const talker = await getAllTalkerUseCase();
    return res.status(200).json(talker);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

module.exports = { getAllTalkerController };