const { LoginSchema } = require('./schemas/LoginSchema');

function LoginValidation(req, res, next) {
  const { email, password } = req.body;
  const { error } = LoginSchema.validate({ email, password });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  return next();
}

module.exports = { LoginValidation };