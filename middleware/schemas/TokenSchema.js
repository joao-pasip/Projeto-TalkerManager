const Joi = require('joi');

const TokenSchema = Joi.object({
  token: Joi.string().length(16).required().messages({
    'string.length': 'Token inválido',
    'any.required': 'Token não encontrado',
  }),
});

module.exports = {
  TokenSchema,
};