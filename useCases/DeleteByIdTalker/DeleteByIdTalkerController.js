const { DeleteByIdTalkerUseCase } = require('./DeleteByIdTalkerUseCase');

async function DeleteByIdTalkerController(req, res) {
  try {
    const { id } = req.params;
    await DeleteByIdTalkerUseCase(Number(id));
    return res.status(204).send();
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

module.exports = { DeleteByIdTalkerController };