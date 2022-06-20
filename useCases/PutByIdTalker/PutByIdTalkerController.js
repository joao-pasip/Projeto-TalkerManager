const { PutByIdTalkerUseCase } = require('./PutByIdTalkerUseCase');

async function PutByIdTalkerController(req, res) {
  try {
    const { id } = req.params;
    const talker = req.body;
    const talkerComplete = {
      ...talker,
      id: Number(id),
    };
    await PutByIdTalkerUseCase(talkerComplete);
    return res.status(200).json(talkerComplete);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
}

module.exports = { PutByIdTalkerController };