const { GetSearchTalkerUseCase } = require('./GetSearchTalkerUseCase');

async function GetSearchTalkerController(req, res) {
  try {
    const { q } = req.query;
    const search = await GetSearchTalkerUseCase(q);
    res.status(200).json(search);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = { GetSearchTalkerController };