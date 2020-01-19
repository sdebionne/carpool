const Joi = require('@hapi/joi');

const carpoolSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  origin: Joi.string(),
  destination: Joi.string(),
});

module.exports = carpoolSchema;
