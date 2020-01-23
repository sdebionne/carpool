const Joi = require('@hapi/joi');

const driverSchema = require('./person')
  .concat(Joi.object({phone: Joi.string().trim().regex(/^[0-9]{7,10}$/).required()}))
  .label('Driver');

module.exports = driverSchema;
