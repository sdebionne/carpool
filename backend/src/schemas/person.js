const Joi = require('@hapi/joi');

const personSchema = Joi.object({
    firstname: Joi.string().required().description('Firstname of the person'),
    lastname: Joi.string().required().description('Lastname of the person'),
}).label('Person');

module.exports = personSchema;
