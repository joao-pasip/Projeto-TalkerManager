const { TokenSchema } = require('./schemas/TokenSchema');

function TokenValidation(req, res, next) {
  const token = req.headers.authorization;
  const { error } = TokenSchema.validate({ token });
  if (error) {
    return res.status(401).json({ message: error.message });
  }
  return next();
}

module.exports = { TokenValidation };