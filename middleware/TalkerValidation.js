const { TalkerSchema } = require('./schemas/TalkerSchema');

function TalkerValidation(req, res, next) {
  const { name, age, talk } = req.body;
  const { error } = TalkerSchema.validate({ name, age, talk });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  return next();
}

module.exports = { TalkerValidation };