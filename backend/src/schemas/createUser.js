const Joi = require('@hapi/joi');

const createUserSchema = Joi.object({
  username: Joi.string().alphanum().min(2).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).label('User');

module.exports = createUserSchema;
