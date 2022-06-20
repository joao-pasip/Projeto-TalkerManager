const { getByIdUseCase } = require('./getByIdUseCase');

async function getByIdController(req, res) {
  try {
    const { id } = req.params;
    const talker = await getByIdUseCase(Number(id));
    return res.status(200).json(talker);
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
}

module.exports = { getByIdController };