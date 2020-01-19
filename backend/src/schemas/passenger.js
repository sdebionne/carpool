const Joi = require('@hapi/joi');

const passengerSchema = Joi.object({
    firstname: Joi.string().required().note('Firstname'),
    lastname: Joi.string().required().note('Lastname'),
});

module.exports = passengerSchema;