const Joi = require('joi');

const carpoolSchema = Joi.object({
  name: Joi.string().required().description('Name of carpool'),
  description: Joi.string(),
  datetime: Joi.date().timestamp().required().description('Date and time of the trip'),
  origin: Joi.string().required().description('Origin of the trip'),
  destination: Joi.string().required().description('Destination of the trip'),
}).label('Carpool');

module.exports = carpoolSchema;
